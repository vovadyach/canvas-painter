'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonFactory = function () {
    function ButtonFactory() {
        _classCallCheck(this, ButtonFactory);
    }

    _createClass(ButtonFactory, [{
        key: 'construct',
        value: function construct() {}
    }], [{
        key: 'create',
        value: function create(className, color, buttonName) {
            var button = document.createElement('input');

            button.setAttribute('type', 'button');
            button.setAttribute('class', className);
            button.setAttribute('data-color', color);
            button.setAttribute('value', buttonName);

            return button;
        }
    }, {
        key: 'createFuncButton',
        value: function createFuncButton(className, buttonName) {
            var button = document.createElement('input');

            button.setAttribute('type', 'button');
            button.setAttribute('class', className);
            button.setAttribute('value', buttonName);

            return button;
        }
    }]);

    return ButtonFactory;
}();

exports.ButtonFactory = ButtonFactory;