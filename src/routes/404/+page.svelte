<script>
  let glitchText = "404";

  function getRandomText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  setInterval(() => {
    glitchText = getRandomText(3);
  }, 2000);
</script>

<style>
  body {
    background-color: #000;
    color: #fff;
    font-family: monospace;
    text-align: center;
    padding: 100px;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 30px;
  }

  .glitch {
    position: relative;
    display: inline-block;
    animation: glitch 1s infinite;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    left: 2px;
    text-shadow: -2px 0 #ff00c2;
    background: #000;
    animation: glitch-top 3s infinite;
    clip-path: polygon(0 70%, 100% 70%, 100% 85%, 0 85%);
  }

  .glitch::after {
    left: -2px;
    text-shadow: -2px 0 #00fff9;
    background: #000;
    animation: glitch-bottom 4s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 15%, 0 15%);
  }

  @keyframes glitch {
    2%, 64% {
      transform: translate(2px, 0) skew(0.5deg);
    }
    4%, 60% {
      transform: translate(-2px, 0) skew(0.8deg);
    }
    62% {
      transform: translate(0, 0) skew(0.8deg);
    }
  }

  @keyframes glitch-top {
    0%, 2%, 64%, 100% {
      transform: translateY(0);
    }
    4%, 60% {
      transform: translateY(-0.5rem);
    }
  }

  @keyframes glitch-bottom {
    0%, 62%, 64%, 100% {
      transform: translateY(0);
    }
    4%, 60% {
      transform: translateY(0.5rem);
    }
  }
</style>

<main>
  <h1 class="glitch" data-text={glitchText}>{glitchText}</h1>
  <p>Oops! The page you're looking for is not found.</p>
  <p>Please check the URL or go back to the <a href="/">home page</a>.</p>
</main>
