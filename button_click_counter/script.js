let div = document.querySelector("#num");
let btn = document.querySelector("#btn");
let c = 0;
btn.addEventListener("click", function (dets) {
    if (dets.type == "click") {
        c++;
        div.textContent = c;

    }
});