const btn = document.querySelector("#btn");

let array = []

btn.addEventListener("click", () => {
      const header = document.querySelector(".header");
      header.textContent = "Dynamic document";

      const p1 = document.getElementById("p1")
      p1.textContent = "This is " + array.push(1) + " text";
})