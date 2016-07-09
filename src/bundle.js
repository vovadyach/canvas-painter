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
/***/ function(module, exports) {

	import ButtonFactory from 'factories/button'
	import ButtonsManager from 'managers/buttons';

	function onReady() {
	    let buttonsManager = new ButtonsManager();
	    let  parent = document.body;

	    buttonsManager
	        .add(ButtonFactory.create('colors', '#c82124', 'Red'))
	        .applyLastTo(parent)
	        .add(ButtonFactory.create('colors', '#3dae49', 'Green'))
	        .applyTo(parent)
	        .add(ButtonFactory.create('colors', '#009cc5', 'Blue'))
	        .applyTo(parent);

	    let clearBtn = document.createElement('input');
	    clearBtn.setAttribute('id', 'clear');
	    clearBtn.setAttribute('type', 'button');
	    clearBtn.setAttribute('value', 'Clear');
	    document.body.appendChild(clearBtn);

	    var element = document.createElement("div");
	    element.setAttribute('id', 'color-input');
	    document.getElementsByClassName('container')[0].appendChild(element);

	    buttonsManager.buttons.forEach(button => element.appendChild(button));

	    //var colorInput = document.getElementById('color-input');
	    //colorInput.appendChild(buttonnode1);
	    //colorInput.appendChild(buttonnode2);
	    //colorInput.appendChild(buttonnode3);
	    //colorInput.appendChild(clearBtn);

	    var canvas = document.getElementById('canvas');
	    var rect = canvas.getBoundingClientRect(),
	        mouseX,
	        mouseY,
	        context = canvas.getContext("2d"),
	        color;

	    var clearButton = document.getElementById('clear');
	    clearButton.onclick = clearCanvasArea;

	    function clearCanvasArea() {
	        context.clearRect(0, 0, 1400, 800);
	        context.strokeStyle = '#000';
	    }

	    function setColor(event) {
	        color = event.target.dataset.color;
	        if (color) {
	            context.strokeStyle = color;
	        }
	    }

	    colorInput.addEventListener('click', function (event) {
	        if (event.target.classList.contains('colors')) {
	            setColor(event);
	            changeBtnColor(event);
	        }
	    });

	    function changeBtnColor(e) {
	        var inputs = colorInput.querySelectorAll('.is-active');
	        for (var i = 0; i < inputs.length; i++) {
	            inputs[i].classList.remove('is-active');
	        }
	        e.target.classList.add('is-active');
	    }

	    canvas.addEventListener("mousedown", onMouseDown);
	    function onMouseDown(event) {
	        mouseX = event.clientX - rect.left;
	        mouseY = event.clientY - rect.top;
	        canvas.addEventListener("mousemove", onMouseMove);
	        document.body.addEventListener('mouseup', onMouseUp);
	    }

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

/***/ }
/******/ ]);