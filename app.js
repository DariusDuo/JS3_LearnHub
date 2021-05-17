"use strict";
const container = document.querySelector(".container");
const dateLine = document.createElement("h4");
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
