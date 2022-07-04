const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = e.target.nextElementSibling;
    if (currentBox.classList.toggle("_active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";

    } else {
        currentContent.style.maxHeight = 0;
    }
}