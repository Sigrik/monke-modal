(function () {
  const publicApi = {
    showModal,
    hideModal,
  };

  let modalParameters = null;

  function showModal(modalParams) {
    const defaultModalParams = {
      title: "Modal title",
      content: "Default text",
      image: "",
      template: "Accept",
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
    modalParameters = resolvedModalParams;
  }

  function hideModal() {
    const modalWrapper = document.getElementById("modal-wrapper");
    const scrollLock = document.getElementsByTagName("BODY")[0];
    modalWrapper.style.display = "none";
    scrollLock.style.overflow = "visible";
    modalParameters.onClose();
  }

  window.monkeModal = publicApi;

  function _createModal() {
    let modalWrapper = document.createElement("div");
    let modal = document.createElement("div");
    let modalImage = document.createElement("div");
    let modalTitle = document.createElement("h4");
    let modalContent = document.createElement("p");
    let modalExit = document.createElement("div");
    let buttonWrapper = document.createElement("div");
    let modalAcceptBtn = document.createElement("button");
    let modalCancelBtn = document.createElement("button");
    const scrollLock = document.getElementsByTagName("BODY")[0];
    modalWrapper.id = "modal-wrapper";
    modal.classList.add("modal");
    modalImage.classList.add("modal-image");
    modalTitle.classList.add("modal-title");
    modalContent.classList.add("modal-content");
    buttonWrapper.classList.add("modal-buttons");
    modalAcceptBtn.classList.add("modal-button");
    modalAcceptBtn.classList.add("modal-accept");
    modalCancelBtn.classList.add("modal-button");
    modalCancelBtn.classList.add("modal-cancel");
    buttonWrapper.appendChild(modalAcceptBtn);
    buttonWrapper.appendChild(modalCancelBtn);
    modalExit.classList.add("modal-exit");
    modalExit.innerHTML = `&times;`;
    modal.appendChild(modalImage);
    modal.appendChild(modalTitle);
    modal.appendChild(modalContent);
    modal.appendChild(buttonWrapper);
    modal.appendChild(modalExit);
    modalWrapper.appendChild(modal);
    modalWrapper.style.display = "none";
    document.getElementsByTagName("BODY")[0].appendChild(modalWrapper);
  }

  _createModal();

  const modalWrapper = document.getElementById("modal-wrapper");
  const modal = document.getElementsByClassName("modal")[0];
  const modalImage = document.getElementsByClassName("modal-image")[0];
  const modalTitle = document.getElementsByClassName("modal-title")[0];
  const modalContent = document.getElementsByClassName("modal-content")[0];
  const modalExit = document.getElementsByClassName("modal-exit")[0];
  const buttonWrapper = document.getElementsByClassName("modal-buttons")[0];
  const modalAcceptBtn = document.getElementsByClassName("modal-accept")[0];
  const modalCancelBtn = document.getElementsByClassName("modal-cancel")[0];
  const scrollLock = document.getElementsByTagName("BODY")[0];
  let hasEventHandler = false;

  const handleAccept = () => {
    modalWrapper.style.display = "none";
    modalParameters.onSubmit();
    scrollLock.style.overflow = "visible";
  };

  const handleCancel = () => {
    modalWrapper.style.display = "none";
    modalParameters.onClose();
    scrollLock.style.overflow = "visible";
  };

  const handleExit = () => {
    handleCancel();
  };

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  const handleClickOutside = (e) => {
    if (e.target === modalWrapper) {
      handleCancel();
    }
  };

  function _renderModal(input) {
    scrollLock.style.overflow = "hidden";

    const handleEvents = () => {
      modalAcceptBtn.addEventListener("click", handleAccept);
      modalCancelBtn.addEventListener("click", handleCancel);
      modalExit.addEventListener("click", handleExit);
      window.addEventListener("keydown", handleEscape);
      window.addEventListener("click", handleClickOutside);
      hasEventHandler = true;
    };

    const changeModalContent = () => {
      modalTitle.innerHTML = input.title;
      modalContent.innerHTML = input.content;
      modalAcceptBtn.innerHTML = input.submitText;
      modalAcceptBtn.style.display = "block";
      modalCancelBtn.innerHTML = input.cancelText;
      modalCancelBtn.style.display = "block";
      if (input.closeVisible === 0) {
        modalExit.style.display = "none";
      } else {
        modalExit.style.display = "";
      }
      modalImage.style.background = `url(${input.image})`;
      modalWrapper.style.display = "";
    };

    switch (input.template) {
      case "Accept":
        changeModalContent();
        if (hasEventHandler === false) {
          handleEvents();
        }
        break;
      case "Alert":
        changeModalContent();
        modalCancelBtn.style.display = "none";
        if (hasEventHandler === false) {
          handleEvents();
        }
        break;
      case "Loader":
        changeModalContent();
        modalAcceptBtn.style.display = "none";
        modalCancelBtn.style.display = "none";
        modalAcceptBtn.removeEventListener("click", handleAccept);
        modalCancelBtn.removeEventListener("click", handleCancel);
        window.removeEventListener("keydown", handleEscape);
        window.removeEventListener("click", handleClickOutside);
        hasEventHandler = false;
        break;
      default:
        changeModalContent();
        if (hasEventHandler === false) {
          handleEvents();
        }
    }
  }
})();
