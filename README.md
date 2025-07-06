# Monke Modal

## A simple modal plugin practice project

Monke Modal is a simple plugin that allows you to quickly create fully functional modal windows.

## Features

- Three modal templates to choose from (**Accept**, **Alert** and **Loader**)
- Customizable modal content
- Various ways to close the modal, including the ESC key and clicking outside
- Optional basic stylesheet for the modals

## Installation

To install Monke Modal, simply include **monkeModal.js**, and optionally **monkeModalStyles.css** in your project.

## How to use

In order to show a modal, invoke the **monkeModal.showModal()** function with your desired parameters.

```
monkeModal.showModal({
    template: "Alert",
    title: "MyTitle",
    content: "The content of the modal",
    image: "img/alertImage.png",
    // more params
});
```

The **Loader** template functions slightly differently to **Accept** and **Alert** templates, as it cannot be closed on its own.
To close it, you simply need to invoke the **monkeModal.hideModal()** function in your code once it finishes:

```
function myFunction() {
    // your code here
    monkeModal.hideModal();
}
```

### Modal parameters

Monke Modal allows you to specify parameters when invoking the **monkeModal.showModal()** function.
This is a list of all the parameters and their functionality:

| Name               | type         | default        | description                                                                               |
| ------------------ | ------------ | -------------- | ----------------------------------------------------------------------------------------- |
| title              | string       | "Modal title"  | The title of the modal                                                                    |
| content            | string       | "Default text" | The text content of the modal                                                             |
| image              | string (url) | ""             | Image to display, shows nothing if unset                                                  |
| template           | string       | "Accept"       | The name of the template to be used (**Accept**, **Alert** or **Loader**)                 |
| submitText         | string       | "Accept"       | The text content of the "Accept" button                                                   |
| cancelText         | string       | "Decline"      | The text content of the "Decline" button                                                  |
| closeButtonVisible | boolean      | true           | If set to false, hide the closing X button                                                |
| onClose            | function     | () => {}       | Function to be executed if the modal is closed via any method besides the "Accept" button |
| onSubmit           | function     | () => {}       | Function to be executed if the "Accept" button is clicked                                 |

These parameters can be provided in any order when invoking the **monkeModal.showModal()** function.

### Templates

Monke Modal features 3 types of modal windows.

#### Accept

A standard modal window with an Accept and Decline button

#### Alert

An alert window with a single Accept button

#### Loader

A modal window suitable for (as the name suggests) loading, that can only be closed via the **.hideModal()** function.

## License

MIT
