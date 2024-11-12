const amountInput = document.getElementById("amountInput");
const createButton = document.getElementById("createButton");
const destroyButton = document.getElementById("destroyButton");
const boxesContainer = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(amountInput.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    amountInput.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);
