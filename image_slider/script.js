const images = [
  "https://picsum.photos/id/101/600/400",
  "https://picsum.photos/id/102/600/400",
  "https://picsum.photos/id/103/600/400",
  "https://picsum.photos/id/104/600/400",
  "https://picsum.photos/id/105/600/400",
  "https://picsum.photos/id/106/600/400",
  "https://picsum.photos/id/107/600/400",
  "https://picsum.photos/id/108/600/400",
  "https://picsum.photos/id/109/600/400",
  "https://picsum.photos/id/110/600/400",
  "https://picsum.photos/id/111/600/400",
  "https://picsum.photos/id/112/600/400",
  "https://picsum.photos/id/113/600/400",
  "https://picsum.photos/id/114/600/400",
  "https://picsum.photos/id/115/600/400",
  "https://picsum.photos/id/116/600/400",
  "https://picsum.photos/id/117/600/400",
  "https://picsum.photos/id/118/600/400",
  "https://picsum.photos/id/119/600/400",
  "https://picsum.photos/id/120/600/400"
];


let img = document.querySelector("#image img");
img.setAttribute("src", "https://images.unsplash.com/photo-1767290645350-dcb4e6bf9d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

let index = 0;

btn2.addEventListener("click", function (dets) {
  img.setAttribute("src", images[index]);
  index++;
  if (index === images.length) {
    index = 0;
  }
});


btn1.addEventListener("click", function (dets) {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  img.setAttribute("src", images[index]);
});