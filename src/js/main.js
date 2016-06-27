/**
 * Created by vins on 28.06.2016.

 */

function onReady() {
    var canvas = document.getElementById("canvas-1"),
        context = canvas.getContext("2d"),
        rect = canvas.getBoundingClientRect(),
        mouseX,
        mouseY;

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
        context.stroke();
    }

    function onMouseUp(event) {
        canvas.removeEventListener("mousemove", onMouseMove);
        document.body.removeEventListener( 'mouseup', onMouseUp);
    }
}
window.onload = onReady;
