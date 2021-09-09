var h1 = document.getElementById("heading");
var text = [
  "🤓 😰 🤕 🤠 😿",
  "😡 🤯 🥵 🥶 👿",
  "😇 😋 🤪 🤩 💩",
  "🥳 🤬 😱 🤢 😈",
  "🤩 🤮 👾 🤖 🎃",
  "👹 👻 💀 ☠️ 👽",
  "😂 😊 😤 😴 🤡",
  "🥸 🤗 🤐 🤮 🤒",
  "🥰 😝 😒 😟 😫",
  "🍎 🍩 🍺 🥂 🍷",
];

let rendom = Math.floor(Math.random() * text.length);

h1.innerText = text[rendom];

function dark() {
  console.log("Dark Mode Activated");
  let body = document.getElementsByTagName("body");
  let text = document.getElementsByTagName("p");
  let button = document.getElementById("style");

  body[0].style.backgroundColor = "#111920";
  text[0].style.color = "#fff";

  let darkButton =
    '<button style="background-color: transparent; border-color: transparent; cursor: pointer;" onclick="white()"><img src="assets/images/sun-outline.svg" height="32rem" width="32rem"/></button>';

  button.innerHTML = darkButton;
}

function white() {
  console.log("White Mode Activated");
  let body = document.getElementsByTagName("body");
  let text = document.getElementsByTagName("p");
  let button = document.getElementById("style");

  body[0].style.backgroundColor = "#fff";
  text[0].style.color = "#111920";

  let darkButton =
    '<button style="background-color: transparent; border-color: transparent; cursor: pointer;" onclick="dark()"><img src="assets/images/moon-outline.svg" height="32rem" width="32rem"/></button>';

  button.innerHTML = darkButton;
}

function loadEmoji() {
  console.log("Emojis Changed");
  let rendom = Math.floor(Math.random() * text.length);
  h1.innerText = text[rendom];
}
