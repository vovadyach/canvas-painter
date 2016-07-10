"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonsManager = function () {
    function ButtonsManager() {
        _classCallCheck(this, ButtonsManager);
    }

    _createClass(ButtonsManager, [{
        key: "construct",
        value: function construct() {
            this.buttons = [];
        }
    }, {
        key: "add",
        value: function add(button) {
            if (this.buttons.indexOf(button) !== -1) return this;

            this.buttons.push(button);

            return this;
        }
    }, {
        key: "applyLastTo",
        value: function applyLastTo(parent) {
            if (!this.buttons.length) return this;

            this.applyTo(this.buttons[this.buttons.length - 1], parent);
        }
    }, {
        key: "applyTo",
        value: function applyTo(element, parent) {
            parent.appendChild(element);

            return this;
        }
    }]);

    return ButtonsManager;
}();

exports.ButtonsManager = ButtonsManager;