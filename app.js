"use strict";
const container = document.querySelector(".container");
const dateLine = document.createElement("h4");
const copyrightEl = document.createElement("h5");
const footer = document.querySelector("footer");

dateLine.id = "time";
container.appendChild(dateLine);
dateLine.textContent = "here goes date";

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

dateLine.textContent = `${cYear}-${cMonth}-${cDay} ${time}`;

const timeEl = document.getElementById("time");
function clock() {
  setInterval(() => (timeEl.textContent = getTime()), 1000);
}

clock();

copyrightEl.textContent = "Copyright blablabla";
footer.appendChild(copyrightEl);
const header = document.createElement("header");
header.id = "simpleHeader";
const body = document.querySelector("body");
body.insertAdjacentElement("afterbegin", header);
