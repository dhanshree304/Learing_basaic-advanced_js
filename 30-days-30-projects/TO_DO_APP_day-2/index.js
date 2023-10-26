const AddBtn = document.querySelector("#addBtn");

AddBtn.addEventListener("click", function () {
  addToDo();
});

function addToDo() {
  const inpBox = document.querySelector("#input-box");
  const newValue = inpBox.value;

  if (newValue === "") {
    alert("enter todo");
  } else {
    const ul_list = document.querySelector(".ul-list");
    const list = document.createElement("div");
    const para = document.createElement("p");
    para.textContent = newValue;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkBox");

    checkBox.addEventListener("change", function () {
      para.style.textDecoration = checkBox.checked ? "line-through" : "none";
    });

    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;

    delBtn.addEventListener("click", function () {
      ul_list.removeChild(list);
    });

    list.append(checkBox, para, delBtn);
    ul_list.append(list);

    newValue = "";
  }
}
