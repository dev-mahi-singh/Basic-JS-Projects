let message = document.querySelector("#message");
let currentCount = document.querySelector("#current-count");
let maxCount = document.querySelector("#max-count");

let MAX = 200;
maxCount.textContent = MAX;

message.addEventListener("input", function () {
    let length = message.value.length;
    currentCount.textContent = length;
});