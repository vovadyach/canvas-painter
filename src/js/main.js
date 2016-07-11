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

import ButtonFactory from './factories/button';
import ButtonsManager from './managers/buttons';

function onReady() {
    let buttonsManager = new ButtonsManager();
    let  parent = document.body;

    buttonsManager
        .add(ButtonFactory.create('colors', '#c82124', 'Red'))
        .applyLastTo(parent)
        .add(ButtonFactory.create('colors', '#3dae49', 'Green'))
        .applyLastTo(parent)
        .add(ButtonFactory.create('colors', '#009cc5', 'Blue'))
        .applyLastTo(parent)
        .add(ButtonFactory.createFuncButton('clear-button', 'Clear'))
        .applyLastTo(parent);

    var element = document.createElement("div");
    element.setAttribute('id', 'color-input');
    document.getElementsByClassName('container')[0].appendChild(element);

    buttonsManager.buttons.forEach(button => element.appendChild(button));


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