const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  // Marcar como concluído
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Botão remover
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.background = "transparent";
  removeBtn.style.border = "none";
  removeBtn.style.cursor = "pointer";
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  input.value = "";
}
