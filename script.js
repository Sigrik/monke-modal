document.getElementById("modalButton-1").addEventListener("click", (e) => {
  monkeModal.showModal({
    template: "Accept",
    title: "Accept or Decline",
    content: "It's time to choose",
    onClose: () => {
      alert("You closed the modal");
    },
    onSubmit: () => {
      alert("You clicked Accept");
    },
  });
});

document.getElementById("modalButton-2").addEventListener("click", (e) => {
  monkeModal.showModal({
    template: "Alert",
    title: "Alert",
    content: "This is an alert!",
    image: "img/alertImage.png",
    submitText: "Ok",
    closeVisible: 0,
    onClose: () => {
      alert("You closed the modal");
    },
    onSubmit: () => {
      alert("You clicked Ok");
    },
  });
});

document.getElementById("modalButton-3").addEventListener("click", (e) => {
  monkeModal.showModal({
    template: "Loader",
    title: "Loading",
    content: "This window will close in 5 seconds",
    closeVisible: 0,
    onClose: () => {
      alert("Loading complete, closing modal");
    },
  });
  closeWindowTimer(5000);
});

const closeWindowTimer = (time) => {
  setTimeout(function () {
    monkeModal.hideModal();
  }, time);
};
