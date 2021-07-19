var imageBtn = document.querySelector(".imageBtn");
var videoBtn = document.querySelector(".videoBtn");
var noteBtn = document.querySelector(".noteBtn");
var taskBtn = document.querySelector(".taskBtn");
var addImageOrVideo = document.querySelector(".add_image_or_video");
var addNoteOrTask = document.querySelector(".add_note_or_task");
var closeVideoPopUp = document.querySelector(".closeVideoPopUp");
var closeNotePopUp = document.querySelector(".closeNotePopUp");
var inputVideoTitle = document.querySelector(".input_title_video");
var inputVideoBody = document.querySelector(".input_body_video");
var inputNoteTitle = document.querySelector(".input_title_note");
var inputNoteBody = document.querySelector(".input_body_note");
var addVideoBtn = document.querySelector(".input_add_video");
var addNoteBtn = document.querySelector(".input_add_note");
var contentItems = document.querySelector(".content_items");
var addItem;
imageBtn === null || imageBtn === void 0 ? void 0 : imageBtn.addEventListener("click", function () { return showAddImageAndVideoPopUp("image"); });
videoBtn === null || videoBtn === void 0 ? void 0 : videoBtn.addEventListener("click", function () { return showAddImageAndVideoPopUp("video"); });
noteBtn === null || noteBtn === void 0 ? void 0 : noteBtn.addEventListener("click", function () { return showAddNoteAndTaskPopUp("note"); });
taskBtn === null || taskBtn === void 0 ? void 0 : taskBtn.addEventListener("click", function () { return showAddNoteAndTaskPopUp("task"); });
closeVideoPopUp === null || closeVideoPopUp === void 0 ? void 0 : closeVideoPopUp.addEventListener("click", function () { return hidePopUp("video"); });
closeNotePopUp === null || closeNotePopUp === void 0 ? void 0 : closeNotePopUp.addEventListener("click", function () { return hidePopUp("note"); });
addVideoBtn === null || addVideoBtn === void 0 ? void 0 : addVideoBtn.addEventListener("click", function () { return addInputNote(); });
addNoteBtn === null || addNoteBtn === void 0 ? void 0 : addNoteBtn.addEventListener("click", function () { return addInputNote(); });
deleteCertainItem();
function deleteCertainItem(input) {
    var deleteItem = document.querySelectorAll(".delete_item");
    var _loop_1 = function (item) {
        item.addEventListener("click", function () { var _a; return (_a = item.parentElement) === null || _a === void 0 ? void 0 : _a.remove(); });
    };
    for (var _i = 0, deleteItem_1 = deleteItem; _i < deleteItem_1.length; _i++) {
        var item = deleteItem_1[_i];
        _loop_1(item);
    }
}
function showAddImageAndVideoPopUp(input) {
    addImageOrVideo === null || addImageOrVideo === void 0 ? void 0 : addImageOrVideo.classList.remove("add_task_hide");
    addItem = input;
}
function showAddNoteAndTaskPopUp(input) {
    addNoteOrTask === null || addNoteOrTask === void 0 ? void 0 : addNoteOrTask.classList.remove("add_task_hide");
    addItem = input;
}
function hidePopUp(input) {
    if (input === "video") {
        addImageOrVideo === null || addImageOrVideo === void 0 ? void 0 : addImageOrVideo.classList.add("add_task_hide");
        console.log(addItem);
    }
    else if (input === "note") {
        addNoteOrTask === null || addNoteOrTask === void 0 ? void 0 : addNoteOrTask.classList.add("add_task_hide");
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
            throw new Error("Unknown type : " + input);
    }
    deleteCertainItem();
}
function addImage() {
    contentItems === null || contentItems === void 0 ? void 0 : contentItems.innerHTML += "\n    <li class=\"content_item image\">\n        <img\n            src=\"" + inputVideoBody.value + "\"\n            alt=\"image\"\n        />\n        <p>" + inputVideoTitle.value + "</p>\n        <i class=\"fas fa-times delete_item\"></i>\n    </li>";
    inputVideoTitle.value = "";
    inputVideoBody.value = "";
    addImageOrVideo === null || addImageOrVideo === void 0 ? void 0 : addImageOrVideo.classList.add("add_task_hide");
}
function addVideo() {
    contentItems === null || contentItems === void 0 ? void 0 : contentItems.innerHTML += "\n    <li class=\"content_item video\">\n      <iframe\n          width=\"560\"\n          height=\"315\"\n          src=\"" + inputVideoBody.value + "\"\n          frameborder=\"0\"\n          allowfullscreen\n      >\n      </iframe>\n      <p>" + inputVideoTitle.value + "</p>\n      <i class=\"fas fa-times delete_item\"></i>\n  </li>";
    inputVideoTitle.value = "";
    inputVideoBody.value = "";
    addImageOrVideo === null || addImageOrVideo === void 0 ? void 0 : addImageOrVideo.classList.add("add_task_hide");
}
function addNote() {
    contentItems === null || contentItems === void 0 ? void 0 : contentItems.innerHTML += "\n    <li class=\"content_item note\">\n        <div class=\"note_content\">\n            <p>" + inputNoteTitle.value + "</p>\n            <ul>\n                <li>" + inputNoteBody.value + "</li>\n            </ul>\n        </div>\n        <i class=\"fas fa-times delete_item\"></i>\n    </li>";
    inputNoteTitle.value = "";
    inputNoteBody.value = "";
    addNoteOrTask === null || addNoteOrTask === void 0 ? void 0 : addNoteOrTask.classList.add("add_task_hide");
}
function addTask() {
    contentItems === null || contentItems === void 0 ? void 0 : contentItems.innerHTML += "\n    <li class=\"content_item task\">\n        <div class=\"task_content\">\n            <p>" + inputNoteTitle.value + "</p>\n            <ul>\n                <li>" + inputNoteBody.value + "</li>\n            </ul>\n        </div>\n        <i class=\"fas fa-times delete_item\"></i>\n    </li>";
    inputNoteTitle.value = "";
    inputNoteBody.value = "";
    addNoteOrTask === null || addNoteOrTask === void 0 ? void 0 : addNoteOrTask.classList.add("add_task_hide");
}
