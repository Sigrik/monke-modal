(function () {
  const publicApi = {
    showModal,
  };

  function showModal(modalParams) {
    const defaultModalParams = {
      title: "Modal title",
      body: "Default modal text",
      variant: 1,
      submitText: "Accept",
      cancelText: "Decline",
      onClose: () => {},
      onSubmit: () => {},
      isOpen: false,
    };

    const resolvedModalParams = {
      ...defaultModalParams,
      ...modalParams,
    };

    _renderModal(resolvedModalParams);
  }

  window.monkeModal = publicApi;

  function _renderModal(input) {
    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalTitle = document.createElement("h2");
    const modalDescription = document.createElement("p");
    const modalExit = document.createElement("div");
    const modalButton = document.createElement("button");
    const scrollLock = document.getElementsByTagName("BODY")[0];
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
    input.isOpen = true;
    scrollLock.style.overflow = "hidden";

    const acceptListener = function accept(e) {
      modalWrapper.remove();
      input.onSubmit();
      modalButton.removeEventListener("click", acceptListener);
      modalExit.removeEventListener("click", exitListener);
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", targetExitListener);
      input.isOpen = false;
      scrollLock.style.overflow = "visible";
    };

    const exitListener = function exit(e) {
      modalWrapper.remove();
      input.onClose();
      modalButton.removeEventListener("click", acceptListener);
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
        modalButton.removeEventListener("click", acceptListener);
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
        modalButton.removeEventListener("click", acceptListener);
        modalExit.removeEventListener("click", exitListener);
        window.removeEventListener("keydown", escapeListener);
        window.removeEventListener("click", targetExitListener);
        input.isOpen = false;
        scrollLock.style.overflow = "visible";
      }
    };

    modalButton.addEventListener("click", acceptListener);
    modalExit.addEventListener("click", exitListener);
    window.addEventListener("keydown", escapeListener);
    window.addEventListener("click", targetExitListener);
  }
})();
