(function () {
  const publicApi = {
    showModal,
    removeModal,
  };

  function showModal(modalParams) {
    const defaultModalParams = {
      title: "Modal title",
      content: "Default modal text",
      image: "",
      template: "Confirm",
      submitText: "Accept",
      cancelText: "Decline",
      closeVisible: 1,
      onClose: () => {},
      onSubmit: () => {},
    };

    const resolvedModalParams = {
      ...defaultModalParams,
      ...modalParams,
    };

    _renderModal(resolvedModalParams);
  }

  function removeModal() {
    console.log("Modal Removed");
  }

  window.monkeModal = publicApi;

  function _renderModal(input) {
    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalImage = document.createElement("div");
    const modalTitle = document.createElement("h4");
    const modalContent = document.createElement("p");
    const modalExit = document.createElement("div");
    const buttonWrapper = document.createElement("div");
    const modalAccept = document.createElement("button");
    const modalCancel = document.createElement("button");
    const scrollLock = document.getElementsByTagName("BODY")[0];
    modalWrapper.id = "modal-wrapper";
    modal.classList.add("modal");
    modalImage.classList.add = "modal-image";
    modalTitle.innerHTML = input.title;
    modalContent.innerHTML = input.content;
    buttonWrapper.classList.add("modal-button-wrapper");
    modalAccept.classList.add("modal-button", "modal-accept");
    modalAccept.innerHTML = input.submitText;
    modalCancel.classList.add("modal-button", "modal-cancel");
    modalCancel.innerHTML = input.cancelText;
    buttonWrapper.appendChild(modalAccept);
    modalExit.classList.add("modal-exit");
    modalExit.innerHTML = `&times;`;
    scrollLock.style.overflow = "hidden";
    input.isOpen = true;
    switch (input.template) {
      case "Accept":
        modal.appendChild(modalTitle);
        modal.appendChild(modalContent);
        buttonWrapper.appendChild(modalCancel);
        modal.appendChild(buttonWrapper);
        modal.appendChild(modalExit);
        modalExit.classList.toggle("hidden", input.closeVisible === 0);
        modalWrapper.appendChild(modal);
        document.getElementById("container").appendChild(modalWrapper);
        break;
      case "Alert":
        modal.appendChild(modalTitle);
        modal.appendChild(modalContent);
        modal.appendChild(buttonWrapper);
        modal.appendChild(modalExit);
        modalExit.classList.toggle("hidden", input.closeVisible === 0);
        modalWrapper.appendChild(modal);
        document.getElementById("container").appendChild(modalWrapper);
        break;
      case "Loader":
        modal.appendChild(modalTitle);
        modal.appendChild(modalContent);
        modalExit.classList.toggle("hidden", input.closeVisible === 0);
        modalWrapper.appendChild(modal);
        document.getElementById("container").appendChild(modalWrapper);
        break;
      default:
        modal.appendChild(modalTitle);
        modal.appendChild(modalContent);
        buttonWrapper.appendChild(modalCancel);
        modal.appendChild(buttonWrapper);
        modal.appendChild(modalExit);
        modalExit.classList.toggle("hidden", input.closeVisible === 0);
        modalWrapper.appendChild(modal);
        document.getElementById("container").appendChild(modalWrapper);
    }
    const acceptListener = function accept(e) {
      modalWrapper.remove();
      input.onSubmit();
      modalAccept.removeEventListener("click", acceptListener);
      modalCancel.removeEventListener("click", cancelListener);
      modalExit.removeEventListener("click", exitListener);
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", targetExitListener);
      input.isOpen = false;
      scrollLock.style.overflow = "visible";
    };

    const cancelListener = function cancel(e) {
      modalWrapper.remove();
      input.onClose();
      modalAccept.removeEventListener("click", acceptListener);
      modalCancel.removeEventListener("click", cancelListener);
      modalExit.removeEventListener("click", exitListener);
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", targetExitListener);
      input.isOpen = false;
      scrollLock.style.overflow = "visible";
    };

    const exitListener = function exit(e) {
      modalWrapper.remove();
      input.onClose();
      modalAccept.removeEventListener("click", acceptListener);
      modalCancel.removeEventListener("click", cancelListener);
      modalExit.removeEventListener("click", exitListener);
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", targetExitListener);
      input.isOpen = false;
      scrollLock.style.overflow = "visible";
    };

    const escapeListener = function escape(e) {
      if (e.key === "Escape") {
        modalWrapper.remove();
        input.onClose();
        modalAccept.removeEventListener("click", acceptListener);
        modalCancel.removeEventListener("click", cancelListener);
        modalExit.removeEventListener("click", exitListener);
        window.removeEventListener("keydown", escapeListener);
        window.removeEventListener("click", targetExitListener);
        input.isOpen = false;
        scrollLock.style.overflow = "visible";
      }
    };

    const targetExitListener = function targetExit(e) {
      if (e.target === modalWrapper) {
        modalWrapper.remove();
        input.onClose();
        modalAccept.removeEventListener("click", acceptListener);
        modalCancel.removeEventListener("click", cancelListener);
        modalExit.removeEventListener("click", exitListener);
        window.removeEventListener("keydown", escapeListener);
        window.removeEventListener("click", targetExitListener);
        input.isOpen = false;
        scrollLock.style.overflow = "visible";
      }
    };

    modalAccept.addEventListener("click", acceptListener);
    modalCancel.addEventListener("click", cancelListener);
    modalExit.addEventListener("click", exitListener);
    window.addEventListener("keydown", escapeListener);
    window.addEventListener("click", targetExitListener);
  }
})();
