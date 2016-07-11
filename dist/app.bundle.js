/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"test\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _button = __webpack_require__(2);

	var _button2 = _interopRequireDefault(_button);

	var _buttons = __webpack_require__(3);

	var _buttons2 = _interopRequireDefault(_buttons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Canvas Painter
	 *
	 * Created by Volodymyr Diachenko on 7/11/16 at 10:33 AM.
	 *
	 * Copyright (C)  Volodymyr Diachenko. All rights reserved.
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * @author Volodymyr Diachenko <diachenko.vladimir@gmail.com>
	 * @version 1.2
	 */

	function onReady() {
	    var buttonsManager = new _buttons2.default();
	    var parent = document.body;

	    buttonsManager.add(_button2.default.create('colors', '#c82124', 'Red')).applyLastTo(parent).add(_button2.default.create('colors', '#3dae49', 'Green')).applyLastTo(parent).add(_button2.default.create('colors', '#009cc5', 'Blue')).applyLastTo(parent).add(_button2.default.createFuncButton('clear-button', 'Clear')).applyLastTo(parent);

	    var element = document.createElement("div");
	    element.setAttribute('id', 'color-input');
	    document.getElementsByClassName('container')[0].appendChild(element);

	    buttonsManager.buttons.forEach(function (button) {
	        return element.appendChild(button);
	    });

	    var canvas = document.getElementById('canvas');
	    var rect = canvas.getBoundingClientRect(),
	        mouseX,
	        mouseY,
	        context = canvas.getContext("2d"),
	        color;

	    //var clearButton = document.getElementById('clear');
	    //clearButton.onclick = clearCanvasArea;

	    //function clearCanvasArea() {
	    //    context.clearRect(0, 0, 1400, 800);
	    //    context.strokeStyle = '#000';
	    //}
	    //
	    //function setColor(event) {
	    //    color = event.target.dataset.color;
	    //    if (color) {
	    //        context.strokeStyle = color;
	    //    }
	    //}
	    //
	    //colorInput.addEventListener('click', function (event) {
	    //    if (event.target.classList.contains('colors')) {
	    //        setColor(event);
	    //        changeBtnColor(event);
	    //    }
	    //});
	    //
	    //function changeBtnColor(e) {
	    //    var inputs = colorInput.querySelectorAll('.is-active');
	    //    for (var i = 0; i < inputs.length; i++) {
	    //        inputs[i].classList.remove('is-active');
	    //    }
	    //    e.target.classList.add('is-active');
	    //}
	    //
	    //canvas.addEventListener("mousedown", onMouseDown);
	    //function onMouseDown(event) {
	    //    mouseX = event.clientX - rect.left;
	    //    mouseY = event.clientY - rect.top;
	    //    canvas.addEventListener("mousemove", onMouseMove);
	    //    document.body.addEventListener('mouseup', onMouseUp);
	    //}

	    function onMouseMove(event) {
	        context.beginPath();
	        context.moveTo(mouseX, mouseY);
	        mouseX = event.clientX - rect.left;
	        mouseY = event.clientY - rect.top;
	        context.lineTo(mouseX, mouseY);
	        context.lineWidth = 4;
	        context.stroke();
	    }

	    function onMouseUp(event) {
	        canvas.removeEventListener("mousemove", onMouseMove);
	        document.body.removeEventListener('mouseup', onMouseUp);
	    }
	}

	window.onload = onReady;

/***/ },
/* 2 */
/***/ function(module, exports) {

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

	    _createClass(ButtonFactory, null, [{
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

	exports.default = ButtonFactory;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ButtonsManager = function () {
	    function ButtonsManager() {
	        _classCallCheck(this, ButtonsManager);

	        this.buttons = [];
	    }

	    _createClass(ButtonsManager, [{
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

	            return this;
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

	exports.default = ButtonsManager;

/***/ }
/******/ ]);