<script>
  import Header from '$lib/components/header.svelte';
</script>

<Header title="about me 👨🏻‍💻️" subtitle="been where done what?" />

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

<style lang="postcss">
  .terminal__prompt__user {
    @apply w-full block text-ellipsis;
  }
</style>
