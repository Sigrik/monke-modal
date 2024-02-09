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

document.getElementById("modalButton-1").addEventListener("click", (e) => {
  monkeModal.showModal(modals.modal1);
});

document.getElementById("modalButton-2").addEventListener("click", (e) => {
  monkeModal.showModal(modals.modal2);
});

document.getElementById("modalButton-3").addEventListener("click", (e) => {
  monkeModal.showModal(modals.modal3);
});
