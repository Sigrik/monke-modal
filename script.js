import monkeModal from "monkemodal.es.js";

document.getElementById("modalButton-1").addEventListener("click", (e) => {
  monkeModal.showModal({
    template: "Accept",
    title: "Accept or Decline",
    content: "It's time to choose",
  });
});

document.getElementById("modalButton-2").addEventListener("click", (e) => {
  monkeModal.showModal({
    template: "Alert",
    title: "Alert",
    content: "This is an alert!",
    submitText: "Ok",
    closeVisible: 0,
  });
});

document.getElementById("modalButton-3").addEventListener("click", (e) => {
  monkeModal.showModal({
    template: "Loader",
    title: "Loading",
    content: "This window will close once the loading is finished",
  });
});
