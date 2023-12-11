function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
}

function drop(event) {
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

function drag_over(event) {
    event.preventDefault();
    return false;
}

function setSystemInfo(field) {
    const el = document.getElementById(field.key)
    if (field.key === 'Projectsion') {
        const data = navigator[field.key]
        if (data !== undefined)
            el.innerHTML = field.value + ': ' + 'Effective type-' + data.effectiveType + ', RTT-' + data.rtt + ', Downlink-' + data.downlink
        return
    }
    el.innerHTML = field.value + ': ' + navigator[field.key]

}

const inputEl = document.getElementById('terminal__prompt__cursor')
const sysInfoEl = document.getElementById('system__info')
const introEl = document.getElementById('intro')
const outputEl = document.getElementById('output')
const terminal = document.getElementById('terminal')
const denied = document.getElementById('denied')

terminal.addEventListener('click', () => {
    inputEl.focus()
})





const systemInfo = [
    {
        key: 'appVersion',
        value: 'App version'
    },
    {
        key: 'cookieEnabled',
        value: 'Cookie Enabled'
    },
    {
        key: 'Projectsion',
        value: 'Projectsion'
    },
    {
        key: 'deviceMemory',
        value: 'Device memory'
    },
    {
        key: 'onLine',
        value: 'Online'
    },
    {
        key: 'platform',
        value: 'Platform'
    },
    {
        key: 'userAgent',
        value: 'User agent'
    }
]

setInterval(() => {
    systemInfo.forEach(info => setSystemInfo(info))
}, 1000)

const commandsData = [
    {
        command: 'help',
        data: '<div class="help"> <span>Available commands</span><table border="1"><tr><th>Command</th><th>Description</th><th>Usage</th></tr><tr><td>cd</td><td>Change directory</td><td>cd directory-name</td></tr><tr><td>ls</td><td>List all files of a directory</td><td>ls</td></tr><tr><td>pwd</td><td>Check present working directory</td><td>pwd</td></tr><tr><td>cat</td><td>Display the contents of a file</td><td>cat filename</td></tr><tr><td>clear</td><td>Clear the terminal</td><td>clear</td></tr><tr><td>help</td><td>Lists all the available commands</td><td>help</td></tr></table></div>'
    }
]

const commands = ['help', 'cd', 'ls', 'cat', 'clear', 'pwd']
const directoryStructure = [
    {
        pathName: '~',
        items: [
            {
                type: 'directory',
                item: 'About'
            },
            { type: 'directory', item: 'Certifications' },
            { type: 'directory', item: 'Skills' },
            { type: 'directory', item: 'Projects' },
            { type: 'directory', item: 'Experience' },
            { type: 'directory', item: 'Contact' }]
    },
    {
        pathName: '~/About',
        items: [
            {
                type: 'file',
                item: 'about.txt',
                content: '<p class="about">I am pursuing B.Tech in Computer Science Engineering with a specialization in Cybersecurity and Digital Forensics. I am pursuing my graduation at Vellore Institute of Skills in Bhopal with a GPA of 8.66. </p> <p class="about"> I have an understanding of Java, Data structures, and SQL that I learned at University. </p><p class="about">I am a confident, fast-working, and attentive teamworker who has the essential competencies to not only develop but to also hunt bugs. I have awesome problem-solving skills, I can think like a hacker, my technical competence is broad, and I have superb conversation abilities and an ardour for continual learning and development. I am comfortable working with different computers and operating systems; Within my limitations, I can troubleshoot issues rapidly and provide an explanation for conditions in simple English so everybody understands; I am pretty vigilant and detail-orientated and I am assured that I will always work alongside co-workers and people within the organization to ensure we stay ahead of the threats whilst developing new things.</p>'
            }
        ]    
    },
    {
        pathName: '~/Certifications',
        items: [
            {
                type: 'file',
                item: 'certification.txt',
                content: '<p class="certification">NSE1 <a target="_blank" href="https://training.fortinet.com/badges/badge.php?hash=2a87e39b89b82bd740d8fc71f85283191719584c"> by Fortinet</a></p><p class="certification">NSE2 <a target="_blank" href="https://training.fortinet.com/badges/badge.php?hash=06d6b1072707a22a9726a390ecb842f8b2cf3edb"> by Fortinet</a></p><p class="certification">NSE3 <a target="_blank" href="https://training.fortinet.com/badges/badge.php?hash=741438a03442189f700b468f34d8d06a19f963ef"> by Fortinet</a></p><p class="certification">Internet Governance <a target="_blank" href="https://media-exp1.licdn.com/dms/document/C4D1FAQE3OMKRX-_Btw/feedshare-document-pdf-analyzed/0/1632847713172?e=1669852800&v=beta&t=F5PvQBCwwYEv7dv5cQYw8h4zibMlRzg8-WjuQeyESW4"> by Internet Society(UN Affiliated)</a></p><p class="certification">Digital Forensics <a target="_blank" href="https://drive.google.com/file/d/1L4sXFEic-tU29EpI0vOjTTIBDZ1ccO27/view?usp=sharingas\"> by Rex Cybersolutions</a></p><p class="certification">Python for Cybersecurity <a target="_blank" href="https://drive.google.com/file/d/1aUbTBKHVY-M8oFt5f8AETlCqWPM35_tS/view?usp=sharing\"> by Infosec (Couresera)</a></p><p class="certification">Cybersecurity Essentials <a target="_blank" href="https://drive.google.com/file/d/1-gMKOE_9RxFy4DGB0Z0r7aKMroLu39QF/view?usp=sharing"> by Cisco</a></p>'
                
            }  
        ]
    },

    {
        pathName: '~/Skills',
        items: [
            {
                type: 'file',
                item: 'skills.txt',
                content: '<p class="skills">My skills include Web pentesting, web management, Java, Front-end Development(HTML, CSS, and JavaScript also use bootstrap on requirement), and OSINT. I am planning to get NSE4 certification which will enhance my network security skills, I am also looking to learn about API testing. More over I do coding on Leetcode, I am not that good with DSA but I believe practising regularly will make me proficient in DSA.</p><br><br><br><p><b>Hard Skills</b></p><p> Web Pentesting, OSINT, Java, Python, Front-end Development</p><br><br><br><p><b>Soft Skills</b></p><p> Communication Skills, Conveincing Skills, Management skills, Presentation Skills.'
            }
        ]
    },
    {
        pathName: '~/Projects',
        items: [
            {
                type: 'file',
                item: 'Projects.txt',
                content: '<p><h3>PyOSINT</h3></p><p>Tool Description: OSINT Tool</p><p>Role: Co-developer</p><p>Project Link: <a href="https://github.com/Shunux-Stuxnet/Pyosint">PyOSINT</a></p><br><br><br><p><h3>Arjuna</h3></p><p>It was previously known as T1T5</p><p>Tool Description: Threat Inteligence and Attack surface discovery.</p><p>Role: Co-Developer</p><p>Contribution: password.py, displaylist.py, ohm.py, and updation in readme.md</p><p>Project Link: <a href= "https://github.com/Shunux-Stuxnet/T1T5">Arjuna</a></p>'
            }
        ]
    },
    {
        pathName: '~/Experience',
        items: [
            {
                type: 'file',
                item: 'experience.txt',
                content: '<dl><dt><b>Penetration Testing Intern</b></dt><dd>Duration: Oct, 2021 - Dec, 2021</dd><dd>Penetration testing on the environment given by the partner organization of Virtually TestingFoundation.</dd><dd>Writing report on the found vulnerabilities.</dd><dd>Learning Outcome: Experience with bug hunting, vulnerability assessment and report writing.</dd><br><br><br><dt><b>Cybersecurity Engineer</b></dt><dd>Duration: May, 2022 - Jun, 2022</dd><dd>Worked on Cybersecurity skills and professional etiquette.</dd><dd>Submitted weekly reports.</dd></dl>'
            }
        ]
    },
    {
        pathName: '~/Contact',
        items: [
            {
                type: 'file',
                item: 'contact.txt',
                content: '<div class="contact"><div class="row"> <span>GitHub - </span> <a href="https://github.com/Shunux-Stuxnet" target="_blank" alt="Shunux-Stuxnet">https://github.com/Shunux-Stuxnet</a></div><div class="row"> <span>LinkedIn - </span> <a href="https://www.linkedin.com/in/shunux-stuxnet/" target="_blank" alt="Shunux-Stuxnet">https://www.linkedin.com/in/shunux-stuxnet/</a></div><div class="row"> <span>Twitter - </span> <a href="https://mobile.twitter.com/cysecdf" target="_blank" alt="Shunux-Stuxnet">https://mobile.twitter.com/cysecdf</a></div>><div class="row"> <span>Email - </span> <a href="mailto:nitya.nandjha2020@vitbhopal.ac.in" target="_blank" alt="Shunux-Stuxnet">nitya.nandjha2020@vitbhopal.ac.in</a></div></div>'
            }
        ]
    }
]

let currentPath = "~"
updateCurrentPath()

function isValidCommad(cmd) {
    return commands.find(command => command === cmd) ? true : false
}

function preparedCommand(command) {
    return command.split(' ');
}

function changeDirectory(dir) {
    if (dir === '~' || dir === '..' || dir === undefined || dir === '') {
        currentPath = '~'
        updateCurrentPath()
        return
    }
    if (isHome()) {
        const obj = directoryStructure.find(path => path.pathName.substring(2, path.pathName.length) === dir)
        if (obj === undefined) {
            displayOutput({ command: '', data: '<span class="no__such">No such file or directory</span>' })
            return
        }
        currentPath += `/${dir}`
        updateCurrentPath()
        return
    }
    displayOutput({ command: '', data: '<span class="no__such">No such file or directory</span>' })
}

function isHome() {
    return currentPath === '~' ? true : false
}

function updateCurrentPath() {
    const curPathEls = document.getElementsByClassName('current__path')

    Array.from(curPathEls).forEach(cPath => {
        cPath.innerHTML = `${currentPath}`
    })
}

function listFileOrDirectories() {
    const obj = directoryStructure.find(item => item.pathName === currentPath)
    const el = document.createElement('div')
    el.className = 'listings'
    let spanEl = ''
    obj.items.forEach(item => {
        spanEl = document.createElement('span')
        spanEl.innerHTML = item.item
        el.appendChild(spanEl)
    })
    displayOutput({ command: '', data: el.outerHTML })
}

function displayFileContents(file) {
    if (file === undefined) {
        displayOutput(commandsData.find(cmdDt => cmdDt.command === 'help'))
        return
    }
    if (!isHome()) {
        const obj = directoryStructure.find(path => path.pathName === currentPath)
        if (obj === undefined) {
            displayOutput({ command: '', data: `<span class="no__such">No such file called ${file}</span>` })
            return
        }
        const item = obj.items.find(item => item.item === file)

        if (item === undefined) {
            displayOutput({ command: '', data: `<span class="no__such">No such file called ${file}</span>` })
            return
        }
        displayOutput({ command: '', data: item.content })
        return
    }
    displayOutput({ command: '', data: `<span class="no__such">No such file called ${file}</span>` })
}

function presentWorkingDir() {
    displayOutput({ command: '', data: `<span>${currentPath.replace('~', '/home')}</span>` })
}

function switchFolder(folder) {
    clear()
    currentPath = '~'
    changeDirectory(folder)
}

function executeCommand(command) {
    const preparedCmd = preparedCommand(command)
    const isValid = isValidCommad(preparedCmd[0])
    if (isValid) {
        switch (preparedCmd[0]) {
            case 'help': displayOutput(commandsData.find(cmdDt => cmdDt.command === preparedCmd[0]));
                break;
            case 'cd': changeDirectory(preparedCmd[1])
                break;
            case 'ls': listFileOrDirectories()
                break;
            case 'cat': displayFileContents(preparedCmd[1])
                break;
            case 'clear': clear()
                break;
            case 'pwd': presentWorkingDir()
                break;
            default: executeCommand('help')
        }
        inputEl.value = ""
        return
    }
    executeCommand('help')
}

function observeKeyInput(event) {
    
    if (event.keyCode === 13) {
        event.preventDefault()
        clear()
        executeCommand(inputEl.value)
    }
}

inputEl.addEventListener('keyup', observeKeyInput)

function clear() {
    sysInfoEl.style.display = 'none'
    introEl.style.display = 'none'
    denied.style.display = 'none'
    outputEl.innerHTML = ''
}

function displayOutput(obj) {
    
    clear()
    outputEl.innerHTML = obj.data
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    displayError()
    return false
})

function displayError() {
    clear()
    denied.style.display = 'block'
   
}

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        displayError()
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        displayError()
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        displayError()
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        displayError()
        return false;
    }
}
