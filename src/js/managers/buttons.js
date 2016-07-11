class ButtonsManager {
    constructor() {
        this.buttons = [];
    }

    add(button) {
        if (this.buttons.indexOf(button) !== -1) return this;

        this.buttons.push(button);

        return this;
    }

    applyLastTo(parent) {
        if (!this.buttons.length) return this;

        this.applyTo(this.buttons[this.buttons.length - 1], parent);
        return this;
    }
    applyTo(element, parent) {
        parent.appendChild(element);

        return this;
    }
}

export default ButtonsManager;