const parent = document.querySelector(".parent");

const addChild = document.querySelector("#add-child");
addChild.addEventListener("click", () => {
      while (parent.childNodes.length < 10) {
            const childdiv = document.createElement("div");
            childdiv.classList.add("child")
            childdiv.textContent = "child";
            parent.appendChild(childdiv);
      }
})

const removeChild = document.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
      if (parent.childNodes.length < 1) {
            return;
      }
      const child = document.querySelector(".child");
      parent.removeChild(child);
})