let main = document.querySelector("#main");
let btn = document.querySelector("#btn");

colors = [
    "#3bc6c6",
    "#f0ccd1ff", // light pink
    "#b6d8f1ff", // light blue
    "#b3eab7ff", // light green
    "#fdf6abff", // light yellow
    "#e59ef0ff", // light purple
    "#afe9f1ff", // light cyan
    "#f4b8b1ff", // light peach
    "#ecf697ff", // light lime
    "#acd6f3ff", // light grey
    "#e8cb9cff"  // light orange
]
    ;
let index = 0;

btn.addEventListener("click", function (dets) {
        main.style.backgroundColor = colors[index];
        btn.style.backgroundColor = colors[index+1];
        index++;
        if (index === colors.length) {
            index = 0;
        }
    
});