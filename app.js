"use strict";
const container = document.querySelector(".container");
const dateLine = document.querySelector("p");
container.appendChild(dateLine);
dateLine.textContent = "here goes date";

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

dateLine.textContent = `${cYear}-${cMonth}-${cDay} ${time}`;
