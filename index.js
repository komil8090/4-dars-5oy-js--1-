let body = document.querySelector("body");

let h1 = document.createElement("h1");
let ism = prompt("ismingizni kirting");

h1.textContent = ism;

body.appendChild(h1);
body.style = "text-align: center; color: white; background-color: blue"