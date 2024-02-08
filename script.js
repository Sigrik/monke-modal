const modals = {
  modal1: {
    isOpen: false,
    title: "Modal 1",
    body: "Text of modal 1",
    onClose: () => {
      console.log("modal 1 was closed");
    },
    onSubmit: () => {
      console.log("modal 2 was submitted");
    },
  },
  modal2: {
    isOpen: false,
    title: "Modal 2",
    body: "Text of modal 2",
    onClose: () => {
      console.log("modal 2 was closed");
    },
    onSubmit: () => {
      console.log("modal 2 was submitted");
    },
  },
  modal3: {
    isOpen: false,
    title: "Modal 3",
    body: "Text of modal 3",
    onClose: () => {
      console.log("modal 3 was closed");
    },
    onSubmit: () => {
      console.log("modal 3 was submitted");
    },
  },
};

function showModal(input) {
  const modalWrapper = document.createElement("div");
  const modal = document.createElement("div");
  const modalTitle = document.createElement("h2");
  const modalDescription = document.createElement("p");
  const modalExit = document.createElement("div");
  const modalButton = document.createElement("button");
  modalWrapper.classList.add("modal-wrapper");
  modal.classList.add("modal");
  modalTitle.innerHTML = input.title;
  modalDescription.innerHTML = input.body;
  modalButton.classList.add("modal-button");
  modalButton.innerHTML = "Accept";
  modalExit.classList.add("modal-exit");
  modalExit.innerHTML = `&times;`;
  modal.appendChild(modalTitle);
  modal.appendChild(modalDescription);
  modal.appendChild(modalButton);
  modal.appendChild(modalExit);
  modalWrapper.appendChild(modal);
  document.getElementById("container").appendChild(modalWrapper);

  const acceptListener = function accept(e) {
    modalWrapper.remove();
    input.onSubmit();
    modalButton.removeEventListener("click", acceptListener);
    modalExit.removeEventListener("click", exitListener);
    window.removeEventListener("keydown", escapeListener);
    window.removeEventListener("click", targetExitListener);
  };

  const exitListener = function exit(e) {
    modalWrapper.remove();
    input.onClose();
    modalButton.removeEventListener("click", acceptListener);
    modalExit.removeEventListener("click", exitListener);
    window.removeEventListener("keydown", escapeListener);
    window.removeEventListener("click", targetExitListener);
  };

  const escapeListener = function escape(e) {
    if (e.key === "Escape") {
      modalWrapper.remove();
      input.onClose();
      modalButton.removeEventListener("click", acceptListener);
      modalExit.removeEventListener("click", exitListener);
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", targetExitListener);
    }
  };

  const targetExitListener = function targetExit(e) {
    if (e.target === modalWrapper) {
      modalWrapper.remove();
      input.onClose();
      modalButton.removeEventListener("click", acceptListener);
      modalExit.removeEventListener("click", exitListener);
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", targetExitListener);
    }
  };

  modalButton.addEventListener("click", acceptListener);
  modalExit.addEventListener("click", exitListener);
  window.addEventListener("keydown", escapeListener);
  window.addEventListener("click", targetExitListener);
}

document.getElementById("modalButton-1").addEventListener("click", (e) => {
  showModal(modals.modal1);
});

document.getElementById("modalButton-2").addEventListener("click", (e) => {
  showModal(modals.modal2);
});

document.getElementById("modalButton-3").addEventListener("click", (e) => {
  showModal(modals.modal3);
});
