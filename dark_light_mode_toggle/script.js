let btn = document.querySelector("#btn");
let main = document.querySelector("#main");

btn.addEventListener("click", function () {
    main.classList.toggle("dark");
    main.classList.toggle("light");
});