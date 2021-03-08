const boxes = document.querySelectorAll(".box");
const ArrBoxes = Array.from(boxes);

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function getKeyfrom(box) {
  let boxId = box.getAttribute("id");
  return "score" + boxId.capitalize();
}

function getScore(box) {
  return +localStorage.getItem(getKeyfrom(box)) || 0;
}

function setScore(box, score) {
  localStorage.setItem(getKeyfrom(box), score);
}
function updateScore(box) {
  let score = getScore(box);
  box.firstElementChild.textContent = score;
}

ArrBoxes.forEach((box) => {
  updateScore(box);

  box.addEventListener("click", () => {
    let score = getScore(box);
    score++;
    setScore(box, score);
    updateScore(box);
  });
});
updateScore(box);
