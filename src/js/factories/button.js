class ButtonFactory {
    constructor() {}

    static create(className, color, buttonName) {
        let button = document.createElement('input');

        button.setAttribute('type', 'button');
        button.setAttribute('class', className);
        button.setAttribute('data-color', color);
        button.setAttribute('value', buttonName);

        return button;
    }
    
    static createFuncButton(className, buttonName) {
        let button = document.createElement('input');

        button.setAttribute('type', 'button');
        button.setAttribute('class', className);
        button.setAttribute('value', buttonName);

        return button;
    }
}

export default ButtonFactory;