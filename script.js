function showModal() {
  const modal = document.createElement("div");
  const modalText = document.createTextNode("Text of the modal");
  const modalExit = document.createElement("div");
  modal.classList.add("modal");
  modalExit.classList.add("modalExit");
  modalExit.innerHTML = `&times;`;
  modal.appendChild(modalText);
  modal.appendChild(modalExit);
  document.getElementById("container").appendChild(modal);
  modalExit.addEventListener("click", (e) => {
    modal.remove();
  });
}
