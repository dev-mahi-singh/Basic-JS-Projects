let form = document.querySelector("form");
let cardsContainer = document.querySelector(".cards-container");

let inputs = document.querySelectorAll("input");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;

    let p = document.createElement("p");
    p.textContent = inputs[1].value;

    let button = document.createElement("button");
    button.textContent="Explore";

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(button);

    cardsContainer.appendChild(card);

    inputs.forEach((inp) => {
        if (inp.type !== "submit") {
            inp.value = "";
        }
    });
});

