const cursor = document.querySelector(".cursor");
const coordinate = document.querySelector(".cursor__coordinate");

function updateCursor(event) {
  cursor.style.top = `${event.pageY - 60}px`;
  cursor.style.left = `${event.pageX - 60}px`;
  coordinate.innerText = `${event.pageX}px, ${event.pageY}px`;
}

document.addEventListener("mousemove", updateCursor);
