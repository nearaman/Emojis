//for backgroung sound volume
var audio = document.getElementById("audio2").volume=0.1;

//chang emojis on relode automatically
var h1 = document.getElementById("heading");
var text = [
  "😡 🤯 🥵 🥶 👿",
  "🥳 🤬 😱 🤢 😈",
  "🍎 🍩 🍺 🥂 🍷",
  "🌭 🍔 🍟 🍕 🍣",
  "🍇 🧀 🍹 🪀 🏓",
  "🍦 🍷 🥃 🍸 🧊",
  "🎄 🥀 🌳 🌷 🪵",
  "🌱 🌹 ☘️ 🌸 🎍",
  "🌾 💐 🌺 🌼 🔥",
  "💫 ✨ ❄️ 💧 💦",
  "🍏 🍎 🍐 🍊 🍋",
  "🎨 🥁 🎲 🚲 ✈️",
  "📱 💾 💿 🔦 📕",
  "👿 😱 🤯 🌹 🔥"
];
let rendom = Math.floor(Math.random() * text.length);
h1.innerText = text[rendom];

// change emojis on click "p"

function loadEmoji() {
  let rendom = Math.floor(Math.random() * text.length);
  h1.innerText = text[rendom];
}

// Modes

// 1. Dark Mode

function dark() {
  let body = document.getElementsByTagName("body");
  let text = document.getElementsByTagName("p");
  let button = document.getElementById("style");

  var audio = document.getElementById("audio");
  audio.volume = 0.2;
  audio.play();

  body[0].style.backgroundColor = "#111920";
  text[0].style.color = "#fff";

  let darkButton =
    '<button style="background-color: transparent; border-color: transparent; cursor: pointer;" onclick="white()" ><img src="assets/images/sun-outline.svg" height="32rem" width="32rem"/></button>';

  button.innerHTML = darkButton;
}

// 2.White Mode

function white() {
  let body = document.getElementsByTagName("body");
  let text = document.getElementsByTagName("p");
  let button = document.getElementById("style");
  var audio = document.getElementById("audio");
  audio.volume = 0.2;
  audio.play();

  body[0].style.backgroundColor = "#fff";
  text[0].style.color = "#111920";

  let darkButton =
    '<button style="background-color: transparent; border-color: transparent; cursor: pointer;" onclick="dark()"><img src="assets/images/moon-outline.svg" height="32rem" width="32rem"/></button>';

  button.innerHTML = darkButton;
}

// Click Sound
function play() {
  var audio = document.getElementById("audio");
  audio.volume = 0.2;
  audio.play();
}
