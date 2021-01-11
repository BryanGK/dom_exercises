const container = document.querySelector("#container");

const para = document.createElement('p');
para.classList.add("content");
para.textContent = "Hey, I'm Red!";
para.style.color = "red";

container.appendChild(para);
 

const header = document.createElement("h3");
header.classList.add("header");
header.textContent = "I'm a Blue h3!"
header.style.color = "blue";

container.appendChild(header);

const div1 = document.createElement("div");
div1.classList.add("div");
div1.style.border = "1px solid black";

const header1 = document.createElement("h1");
header1.classList.add("header1");
header1.textContent = "I'm in a div!"

div1.appendChild(header1);

const p1 = document.createElement("p");
p1.classList.add("p1");
p1.textContent = "ME TOO!"

div1.appendChild(p1);

container.appendChild(div1);

const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World! #2");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World! #3");
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", alertFunction);

function alertFunction() {
    alert("Yay! You did it!");
}

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function(e) {
    console.log(e);
});