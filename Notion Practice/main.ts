const imageBtn = document.querySelector(".imageBtn");
const videoBtn = document.querySelector(".videoBtn");
const noteBtn = document.querySelector(".noteBtn");
const taskBtn = document.querySelector(".taskBtn");

const addImageOrVideo = document.querySelector(".add_image_or_video");
const addNoteOrTask = document.querySelector(".add_note_or_task");

const closeVideoPopUp = document.querySelector(".closeVideoPopUp");
const closeNotePopUp = document.querySelector(".closeNotePopUp");

let addItem: string;

imageBtn?.addEventListener("click", () => showAddImageAndVideoPopUp("image"));
videoBtn?.addEventListener("click", () => showAddImageAndVideoPopUp("video"));
noteBtn?.addEventListener("click", () => showAddNoteAndTaskPopUp("note"));
taskBtn?.addEventListener("click", () => showAddNoteAndTaskPopUp("task"));

closeVideoPopUp?.addEventListener("click", () => hidePopUp("video"));
closeNotePopUp?.addEventListener("click", () => hidePopUp("note"));

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
