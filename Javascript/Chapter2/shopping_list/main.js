const addBtn = document.querySelector(".shopping__footer i");
const input = document.querySelector("input");
const content = document.querySelector(".shopping__contents");

function appendContent() {
  content.innerHTML += `
    <div class="shopping__content">
        <span class="shopping__content__description">${input.value}</span>
        <i class="fas fa-trash-alt"></i>
    </div>
    `;
  input.value = "";

  const deleteBtn = document.querySelector(".shopping__content i");
  deleteBtn.addEventListener("click", () => {
    console.log("delete");
  });
}

addBtn.addEventListener("click", appendContent);

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") appendContent();
});
