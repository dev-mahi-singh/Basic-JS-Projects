let input = document.querySelector("input");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let startBtn = document.querySelector(".start");
let pauseBtn = document.querySelector(".pause");
let resetBtn = document.querySelector(".reset");

input.addEventListener("input", (dets) => {
    console.log(input.value);
});