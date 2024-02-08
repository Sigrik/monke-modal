function showModal(title, description) {
  const modalWrapper = document.createElement("div");
  const modal = document.createElement("div");
  const modalTitle = document.createElement("h2");
  const modalDescription = document.createElement("p");
  const modalExit = document.createElement("div");
  const modalButton = document.createElement("button");
  modal.classList.add("modal");
  modalWrapper.classList.add("modal-wrapper");
  modalTitle.innerHTML = title;
  modalDescription.innerHTML = description;
  modalButton.innerHTML = "Accept";
  modalExit.classList.add("modalExit");
  modalExit.innerHTML = `&times;`;
  modal.appendChild(modalTitle);
  modal.appendChild(modalDescription);
  modal.appendChild(modalButton);
  modal.appendChild(modalExit);
  modalWrapper.appendChild(modal);
  document.getElementById("container").appendChild(modalWrapper);
  modalExit.addEventListener("click", (e) => {
    modalWrapper.remove();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalWrapper.remove();
    }
  });
  window.addEventListener("click", (e) => {
    if (e.target === modalWrapper) {
      modalWrapper.remove();
    }
  });
}

document.getElementById("modalButton-1").addEventListener("click", (e) => {
  showModal(
    "Modal 1",
    "Description of the first modal, some more text goes here"
  );
});

document.getElementById("modalButton-2").addEventListener("click", (e) => {
  showModal(
    "Modal 2",
    "Description of the second modal, some more text goes here"
  );
});

document.getElementById("modalButton-3").addEventListener("click", (e) => {
  showModal(
    "Modal 3",
    "Description of the third modal, some more text goes here"
  );
});
