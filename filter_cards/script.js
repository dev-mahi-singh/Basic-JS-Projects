let addBtn = document.querySelector(".add-btn");

let modal = document.querySelector(".modal");
let cancel = document.querySelector(".cancel");

let form = document.querySelector("form");

let cards = document.querySelector(".cards");
let inputs = document.querySelectorAll("input");
let imageUrl = document.querySelector("#imageUrl");
let heading = document.querySelector("#heading");
let info = document.querySelector(".info");

addBtn.addEventListener("click", function () {
    modal.style.display = "block";
    gsap.from(modal, {
        y: -120,
        opacity: 0,
        duration: 2,
        scale: 0.9,
        ease: "power3.out"
        // delay:1,
    });
});

cancel.addEventListener("click", function () {
    modal.style.display = "none";
});

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("div");
    image.classList.add("image");

    let img = document.createElement("img");
    img.setAttribute("src", imageUrl.value);

    let text = document.createElement("div");
    text.classList.add("text");

    let h3 = document.createElement("h3");
    h3.textContent = heading.value;

    let p = document.createElement("p");
    p.textContent = info.value;
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

    modal.style.display = "none";

});



let searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("input", function () {
    let searchText = searchBar.value.toLowerCase();

    document.querySelectorAll(".card h3").forEach((heading) => {
        let card = heading.closest(".card");
        let headingText = heading.textContent.toLowerCase();

        if (headingText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

let noResults = document.querySelector(".no-results");

searchBar.addEventListener("input", function () {
    let searchText = searchBar.value.toLowerCase();
    let found = false;

    document.querySelectorAll(".card h3").forEach((heading) => {
        let card = heading.closest(".card");
        let headingText = heading.textContent.toLowerCase();

        if (headingText.includes(searchText)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (found) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
});


