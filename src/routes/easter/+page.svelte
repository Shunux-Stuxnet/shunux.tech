<script>
  import Header from '$lib/components/header.svelte';
</script>

<Header title="about me 👨🏻‍💻️" subtitle="been where done what?" />

<style>
  @import url("https://fonts.googleapis.com/css?family=Ubuntu");
  @import url("https://fonts.googleapis.com/css?family=Ubuntu+Mono");
  
  :root {
  }
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
      font-family: Ubuntu;
      background-image: url("../images/shunux.png");
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      height: 100vh;
      color: #fff;
  }
  
  .folders {
      width: 160px;
      height: 500px;
      margin-top: 3rem;
      text-align: center;
      position: absolute;
      padding: 50px;
      cursor: pointer;
  }
  
  .folder__type {
      margin-top: 50%;
  }
  
  .folder__type > img {
      width: 60px;
  }
  
  .folder__type > span {
      color: #fff;
      font-family: "Ubuntu Mono";
  }
  
  .terminal {
      width: 1000px;
      height: 500px;
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
  }
  
  .terminal__bar {
      display: flex;
      width: 100%;
      height: 30px;
      align-items: center;
      padding: 0 8px;
      box-sizing: border-box;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background: linear-gradient(#504b45 0%, #3c3b37 100%);
  }
  
  .bar__buttons {
      display: flex;
      align-items: center;
  }
  
  .bar__button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-right: 5px;
      font-size: 8px;
      height: 12px;
      width: 12px;
      box-sizing: border-box;
      border: none;
      border-radius: 100%;
      background: linear-gradient(#7d7871 0%, #595953 100%);
      text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
      box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
  }
  .bar__button:hover {
      cursor: pointer;
  }
  .bar__button:focus {
      outline: none;
  }
  .bar__button__exit {
      background: linear-gradient(#f37458 0%, #de4c12 100%);
      background-clip: padding-box;
  }
  
  .bar__user {
      color: #d5d0ce;
      margin-left: 6px;
      font-size: 14px;
      line-height: 15px;
  }
  
  .terminal__body {
      background: rgba(56, 4, 40, 0.9);
      font-family: "Ubuntu Mono";
      height: calc(100% - 30px);
      padding: 2px 0 0 2px;
      cursor: text;
  }
  
  .terminal__prompt {
      display: flex;
  }
  .terminal__prompt__user {
      color: #7eda28;
  }
  .terminal__prompt__location {
      color: #4878c0;
  }
  .terminal__prompt__bling {
      color: #dddddd;
  }
  .terminal__prompt__cursor {
      font-family: "Ubuntu Mono";
      border: none;
      background: transparent;
      outline: none;
      font-size: 14px;
      height: 18px;
      width: 100%;
      margin-left: 9px;
      color: #fff;
      /* animation: blink 1200ms linear infinite; */
  }
  
  .intro {
      color: #fff;
      text-align: center;
  }
  
  .system__info {
      width: 500px;
      margin: 0 auto;
      display: block;
  }
  
  .system__info > span {
      display: block;
      margin: 10px 0;
      color: #7eda28;
  }
  
  .help {
      padding: 10px;
  }
  
  table {
      width: 80%;
      margin-top: 15px;
  }
  
  th,
  td {
      padding: 10px;
  }
  
  .no__such {
      padding: 2px;
  }
  
  .listings {
      padding: 2px;
  }
  
  .listings > span {
      margin-right: 40px;
  }
  
  .connect {
      padding: 15px;
  }
  
  .connect > .row {
      margin-top: 10px;
  }
  
  #denied {
      text-align: center;
      display: none;
      color: #f00;
  }
  
  @keyframes blink {
      0% {
          background: #ffffff;
      }
      49% {
          background: #ffffff;
      }
      60% {
          background: transparent;
      }
      99% {
          background: transparent;
      }
      100% {
          background: #ffffff;
      }
  }
  
  @media (max-width: 600px) {
      .terminal {
          max-height: 90%;
          width: 90%;
      }
  }
</style>

<section class="container lg:max-w-4xl mx-auto px-8">
  <div class="ds-prose">
    <div class="terminal" id="terminal" draggable="true" on:dragstart="{drag_start}">
      <section class="terminal__bar">
        <div class="bar__buttons">
          <button class="bar__button bar__button__exit">&#10005;</button>
          <button class="bar__button">&#9472;</button>
          <button class="bar__button">&#9723;</button>
        </div>
        <p class="bar__user">shunux@internet: <span class="current__path"></span></p>
      </section>
      <section class="terminal__body" id="terminal__body">
            <div class="intro" id="intro">
                <pre>
        <!-- http://patorjk.com/software/taag/#p=display&f=Big&t=welcome -->

        ▒█▀▀▀█ ▒█░▒█ ▒█░▒█ ▒█▄░▒█ ▒█░▒█ ▀▄▒▄▀ 
        ░▀▀▀▄▄ ▒█▀▀█ ▒█░▒█ ▒█▒█▒█ ▒█░▒█ ░▒█░░ 
        ▒█▄▄▄█ ▒█░▒█ ░▀▄▄▀ ▒█░░▀█ ░▀▄▄▀ ▄▀▒▀▄
                                     
                                                   
                </pre>
            </div>
            <div class="system__info" id="system__info">
                <span id="appVersion"></span>
                <span id="cookieEnabled"></span>
                <span id="geolocation"></span>
                <span id="connection"></span>
                <span id="deviceMemory"></span>
                <span id="onLine"></span>
                <span id="platform"></span>
                <span id="userAgent"></span>
                <span>Type help to see available commands</span>
            </div>
            <div class="terminal__prompt">
                <span class="terminal__prompt__user">shunux@internet:</span>
                <span class="terminal__prompt__location current__path"></span>
                <span class="terminal__prompt__bling">$</span>
                <input type="text" class="terminal__prompt__cursor" autofocus id="terminal__prompt__cursor"></input>
            </div>
            <div class="output" id="output"></div>
            <div id="denied">
                <pre>

  ___                              _            _          _ 
  / _ \                            | |          (_)        | |
 / /_\ \ ___ ___ ___  ___ ___    __| | ___ _ __  _  ___  __| |
 |  _  |/ __/ __/ _ \/ __/ __|  / _` |/ _ \ '_ \| |/ _ \/ _` |
 | | | | (_| (_|  __/\__ \__ \ | (_| |  __/ | | | |  __/ (_| |
 \_| |_/\___\___\___||___/___/  \__,_|\___|_| |_|_|\___|\__,_|
                                                              
                                                              
 
                </pre>
            </div>
        </section>
    </div>
    <script src="js/script.js"></script>
    <script type="text/javascript">
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "6qeyy25et9");
    </script>
  </div>
</section>

<div class="main-padding" />
