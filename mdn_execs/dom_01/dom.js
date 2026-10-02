const story = document.querySelector(".story");

const setText = document.getElementById("set-text");
setText.addEventListener("click", () => {
      story.textContent = "Novo texto";
})

const clearText = document.getElementById("clear-text");
clearText.addEventListener("click", () => {
      story.textContent = "";
})