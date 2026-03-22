let btn = document.querySelector("#btn1");
let modal = document.querySelector(".modal");
let cancel = document.querySelector(".cancel");
let form = document.querySelector("form");
let cards = document.querySelector(".cards");

let inputs = document.querySelectorAll("input");

btn.addEventListener("click", function () {
    modal.style.display = "block";
    btn.style.display = "none";
    gsap.from(modal,{
    y:-120,
    opacity:0,
    duration:2,
    scale:0.9,
    ease: "power3.out"
    // delay:1,
});
});

cancel.addEventListener("click", function () {
    modal.style.display = "none";
    btn.style.display = "block";
});

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("div");
    image.classList.add("image");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let text = document.createElement("div");
    text.classList.add("text");

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let p = document.createElement("p");
    p.textContent = inputs[2].value;
    p.classList.add("info");

    image.appendChild(img);
    text.appendChild(h3);
    text.appendChild(p);

    card.appendChild(image);
    card.appendChild(text);

    cards.appendChild(card);

    inputs.forEach((inp) => {
        if (inp.type !== "submit") {
            inp.value = "";
        }
    });

    modal.style.display="none";
    btn.style.display="block";

});

