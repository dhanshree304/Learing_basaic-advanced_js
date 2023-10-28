const notesContainer = document.querySelector(".notesContainer");
const AddBtn = document.getElementById("addBtn");
AddBtn.addEventListener("click", function () {
  createNote();
});

const notesArray = JSON.parse(localStorage.getItem("notes")) || [];

function createNote() {
  notesContainer.innerHTML = "";
  const noteDiv = document.createElement("div");

  const input = document.createElement("input");
  input.classList.add("note");

  const saveIcon = document.createElement("i");
  saveIcon.classList.add("fa-solid", "fa-check");

  saveIcon.addEventListener("click", function () {
    const note = {
      id: Date.now(),
      note: input.value,
    };
    notesArray.push(note);

    localStorage.setItem("notes", JSON.stringify(notesArray));
    display();
    notesContainer.innerHTML = "";
  });

  noteDiv.append(input, saveIcon);
  notesContainer.append(noteDiv);
}

const displayDiv = document.getElementById("display");

function display() {
  displayDiv.innerHTML = "";

  notesArray.map((ele) => {
    console.log(ele);
    const divBox = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = ele.note;

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    trashIcon.addEventListener("click", function () {
      const temp = notesArray.filter((e) => e.id !== ele.id);
      localStorage.setItem("notes", JSON.stringify(temp));
      divBox.remove();
      window.location.reload();
    });

    divBox.append(p, trashIcon);
    displayDiv.append(divBox);
  });
}

display();
