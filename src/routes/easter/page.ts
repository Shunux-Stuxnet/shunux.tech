interface Field {
    key: string;
    value: string;
}

interface CommandData {
    command: string;
    data: string;
}

interface DirectoryItem {
    type: string;
    item: string;
    content?: string;
}

interface DirectoryStructure {
    pathName: string;
    items: DirectoryItem[];
}

let currentPath: string = '~';

function drag_start(event: DragEvent): void {
    const style = window.getComputedStyle(event.target as Element, null);
    const str = `${parseInt(style.getPropertyValue("left")) - event.clientX},${parseInt(style.getPropertyValue("top")) - event.clientY},${event.target.id}`;
    event.dataTransfer?.setData("Text", str);
}

function drop(event: DragEvent): boolean {
    const offset = event.dataTransfer?.getData("Text")?.split(',');
    if (offset) {
        const dm = document.getElementById(offset[2]);
        if (dm) {
            dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
            dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        }
    }
    event.preventDefault();
    return false;
}

function drag_over(event: DragEvent): boolean {
    event.preventDefault();
    return false;
}

function setSystemInfo(field: Field): void {
    const el = document.getElementById(field.key);
    if (el) {
        if (field.key === 'Projectsion') {
            const data = (navigator as any)[field.key];
            if (data !== undefined) {
                el.innerHTML = `${field.value}: Effective type-${data.effectiveType}, RTT-${data.rtt}, Downlink-${data.downlink}`;
            }
            return;
        }
        el.innerHTML = `${field.value}: ${(navigator as any)[field.key]}`;
    }
}

const inputEl = document.getElementById('terminal__prompt__cursor') as HTMLInputElement;
const sysInfoEl = document.getElementById('system__info');
const introEl = document.getElementById('intro');
const outputEl = document.getElementById('output');
const terminal = document.getElementById('terminal');
const denied = document.getElementById('denied');

terminal?.addEventListener('click', () => {
    inputEl.focus();
});

const systemInfo: Field[] = [
    { key: 'appVersion', value: 'App version' },
    { key: 'cookieEnabled', value: 'Cookie Enabled' },
    { key: 'Projectsion', value: 'Projectsion' },
    { key: 'deviceMemory', value: 'Device memory' },
    { key: 'onLine', value: 'Online' },
    { key: 'platform', value: 'Platform' },
    { key: 'userAgent', value: 'User agent' },
];

setInterval(() => {
    systemInfo.forEach(info => setSystemInfo(info));
}, 1000);

const commandsData: CommandData[] = [
    {
        command: 'help',
        data: '<div class="help"> <span>Available commands</span><table border="1"><tr><th>Command</th><th>Description</th><th>Usage</th></tr><tr><td>cd</td><td>Change directory</td><td>cd directory-name</td></tr><tr><td>ls</td><td>List all files of a directory</td><td>ls</td></tr><tr><td>pwd</td><td>Check present working directory</td><td>pwd</td></tr><tr><td>cat</td><td>Display the contents of a file</td><td>cat filename</td></tr><tr><td>clear</td><td>Clear the terminal</td><td>clear</td></tr><tr><td>help</td><td>Lists all the available commands</td><td>help</td></tr></table></div>',
    },
];

const commands = ['help', 'cd', 'ls', 'cat', 'clear', 'pwd'];

const directoryStructure: DirectoryStructure[] = [
];

updateCurrentPath();


function observeKeyInput(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
        event.preventDefault();
        clear();
        executeCommand(inputEl.value);
    }
}

inputEl.addEventListener('keyup', observeKeyInput);


function clear(): void {
    sysInfoEl?.style.display = 'none';
    introEl?.style.display = 'none';
    denied?.style.display = 'none';
    outputEl.innerHTML = '';
}

function displayOutput(obj: CommandData): void {
    clear();
    outputEl.innerHTML = obj.data;
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    displayError();
    return false;
});

function displayError(): void {
    clear();
    denied?.style.display = 'block';
}

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        displayError();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        displayError();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        displayError();
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        displayError();
        return false;
    }
}

function isValidCommand(cmd: string): boolean {
    return commands.find(command => command === cmd) ? true : false;
}

function preparedCommand(command: string): string[] {
    return command.split(' ');
}

function changeDirectory(dir: string): void {
    if (dir === '~' || dir === '..' || dir === undefined || dir === '') {
        currentPath = '~';
        updateCurrentPath();
        return;
    }
    if (isHome()) {
        const obj = directoryStructure.find(path => path.pathName.substring(2, path.pathName.length) === dir);
        if (obj === undefined) {
            displayOutput({ command: '', data: '<span class="no__such">No such file or directory</span>' });
            return;
        }
        currentPath += `/${dir}`;
        updateCurrentPath();
        return;
    }
    displayOutput({ command: '', data: '<span class="no__such">No such file or directory</span>' });
}

function isHome(): boolean {
    return currentPath === '~' ? true : false;
}

function updateCurrentPath(): void {
    const curPathEls = document.getElementsByClassName('current__path');

    Array.from(curPathEls).forEach(cPath => {
        cPath.innerHTML = `${currentPath}`;
    });
}

function listFileOrDirectories(): void {
    const obj = directoryStructure.find(item => item.pathName === currentPath);
    const el = document.createElement('div');
    el.className = 'listings';
    let spanEl = '';
    obj?.items.forEach(item => {
        spanEl = document.createElement('span');
        spanEl.innerHTML = item.item;
        el.appendChild(spanEl);
    });
    displayOutput({ command: '', data: el.outerHTML });
}

function displayFileContents(file: string): void {
    if (file === undefined) {
        displayOutput(commandsData.find(cmdDt => cmdDt.command === 'help')!);
        return;
    }
    if (!isHome()) {
        const obj = directoryStructure.find(path => path.pathName === currentPath);
        if (obj === undefined) {
            displayOutput({ command: '', data: `<span class="no__such">No such file called ${file}</span>` });
            return;
        }
        const item = obj.items.find(item => item.item === file);

        if (item === undefined) {
            displayOutput({ command: '', data: `<span class="no__such">No such file called ${file}</span>` });
            return;
        }
        displayOutput({ command: '', data: item.content! });
        return;
    }
    displayOutput({ command: '', data: `<span class="no__such">No such file called ${file}</span>` });
}

function presentWorkingDir(): void {
    displayOutput({ command: '', data: `<span>${currentPath.replace('~', '/home')}</span>` });
}

function switchFolder(folder: string): void {
    clear();
    currentPath = '~';
    changeDirectory(folder);
}

function executeCommand(command: string): void {
    const preparedCmd = preparedCommand(command);
    const isValid = isValidCommand(preparedCmd[0]);
    if (isValid) {
        switch (preparedCmd[0]) {
            case 'help': displayOutput(commandsData.find(cmdDt => cmdDt.command === preparedCmd[0])!);
                break;
            case 'cd': changeDirectory(preparedCmd[1]);
                break;
            case 'ls': listFileOrDirectories();
                break;
            case 'cat': displayFileContents(preparedCmd[1]);
                break;
            case 'clear': clear();
                break;
            case 'pwd': presentWorkingDir();
                break;
            default: executeCommand('help');
        }
        inputEl.value = "";
        return;
    }
    executeCommand('help');
}
