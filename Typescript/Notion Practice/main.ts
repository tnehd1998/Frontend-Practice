const imageBtn = document.querySelector(".imageBtn");
const videoBtn = document.querySelector(".videoBtn");
const noteBtn = document.querySelector(".noteBtn");
const taskBtn = document.querySelector(".taskBtn");

const addImageOrVideo = document.querySelector(".add_image_or_video");
const addNoteOrTask = document.querySelector(".add_note_or_task");

const closeVideoPopUp = document.querySelector(".closeVideoPopUp");
const closeNotePopUp = document.querySelector(".closeNotePopUp");

const inputVideoTitle = document.querySelector(".input_title_video");
const inputVideoBody = document.querySelector(".input_body_video");

const inputNoteTitle = document.querySelector(".input_title_note");
const inputNoteBody = document.querySelector(".input_body_note");

const addVideoBtn = document.querySelector(".input_add_video");
const addNoteBtn = document.querySelector(".input_add_note");

const contentItems = document.querySelector(".content_items");

let addItem: string;

imageBtn?.addEventListener("click", () => showAddImageAndVideoPopUp("image"));
videoBtn?.addEventListener("click", () => showAddImageAndVideoPopUp("video"));
noteBtn?.addEventListener("click", () => showAddNoteAndTaskPopUp("note"));
taskBtn?.addEventListener("click", () => showAddNoteAndTaskPopUp("task"));

closeVideoPopUp?.addEventListener("click", () => hidePopUp("video"));
closeNotePopUp?.addEventListener("click", () => hidePopUp("note"));

addVideoBtn?.addEventListener("click", () => addInputNote());
addNoteBtn?.addEventListener("click", () => addInputNote());

deleteCertainItem();

function deleteCertainItem(input: string) {
  const deleteItem = document.querySelectorAll(".delete_item");
  for (const item of deleteItem) {
    item.addEventListener("click", () => item.parentElement?.remove());
  }
}

function showAddImageAndVideoPopUp(input: string) {
  addImageOrVideo?.classList.remove("add_task_hide");
  addItem = input;
}

function showAddNoteAndTaskPopUp(input: string) {
  addNoteOrTask?.classList.remove("add_task_hide");
  addItem = input;
}

function hidePopUp(input: string) {
  if (input === "video") {
    addImageOrVideo?.classList.add("add_task_hide");
    console.log(addItem);
  } else if (input === "note") {
    addNoteOrTask?.classList.add("add_task_hide");
    console.log(addItem);
  }
}

function addInputNote() {
  switch (addItem) {
    case "image":
      addImage();
      break;
    case "video":
      addVideo();
      break;
    case "note":
      addNote();
      break;
    case "task":
      addTask();
      break;
    default:
      throw new Error(`Unknown type : ${input}`);
  }
  deleteCertainItem();
}

function addImage() {
  contentItems?.innerHTML += `
    <li class="content_item image">
        <img
            src="${inputVideoBody.value}"
            alt="image"
        />
        <p>${inputVideoTitle.value}</p>
        <i class="fas fa-times delete_item"></i>
    </li>`;
  inputVideoTitle.value = "";
  inputVideoBody.value = "";
  addImageOrVideo?.classList.add("add_task_hide");
}

function addVideo() {
  contentItems?.innerHTML += `
    <li class="content_item video">
      <iframe
          width="560"
          height="315"
          src="${inputVideoBody.value}"
          frameborder="0"
          allowfullscreen
      >
      </iframe>
      <p>${inputVideoTitle.value}</p>
      <i class="fas fa-times delete_item"></i>
  </li>`;
  inputVideoTitle.value = "";
  inputVideoBody.value = "";
  addImageOrVideo?.classList.add("add_task_hide");
}

function addNote() {
  contentItems?.innerHTML += `
    <li class="content_item note">
        <div class="note_content">
            <p>${inputNoteTitle.value}</p>
            <ul>
                <li>${inputNoteBody.value}</li>
            </ul>
        </div>
        <i class="fas fa-times delete_item"></i>
    </li>`;
  inputNoteTitle.value = "";
  inputNoteBody.value = "";
  addNoteOrTask?.classList.add("add_task_hide");
}

function addTask() {
  contentItems?.innerHTML += `
    <li class="content_item task">
        <div class="task_content">
            <p>${inputNoteTitle.value}</p>
            <ul>
                <li>${inputNoteBody.value}</li>
            </ul>
        </div>
        <i class="fas fa-times delete_item"></i>
    </li>`;
  inputNoteTitle.value = "";
  inputNoteBody.value = "";
  addNoteOrTask?.classList.add("add_task_hide");
}
