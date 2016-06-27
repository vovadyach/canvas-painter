/**
 * Created by vins on 28.06.2016.

 */

function onReady() {
    var canvas = document.getElementById("canvas-1"),
        context = canvas.getContext("2d"),
        rect = canvas.getBoundingClientRect(),
        mouseX,
        mouseY;

    var colorPurple = "#cb3594";
    var colorGreen = "#659b41";
    var colorYellow = "#ffcf33";
    var colorBrawn = "#986928";

    var curColor = colorPurple;
    var clickColor = new Array();

    function addClick(x, y, dragging)
    {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
        clickColor.push(curColor);
    }

    function redraw(){
        /* context.strokeStyle = "#df4b26"; */
        context.lineJoin = "round";
        context.lineWidth = 5;

        for(var i=0; i < clickX.length; i++)
        {
            context.beginPath();
            if(clickDrag[i] && i){
                contex.moveTo(clickX[i-1], clickY[i-1]);
            }else{
                context.moveTo(clickX[i]-1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.strokeStyle = clickColor[i];
            context.stroke();
        }
    }
    canvas.addEventListener("mousedown", onMouseDown);
    function onMouseDown(event) {
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    };


    /*canvas.addEventListener("mousedown", onMouseDown);

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
    }*/
}
window.onload = onReady;


//x = 100,
//y = 100;
//canvas.addEventListener("mousemove", function(event) {
//    var rect = canvas.getBoundingClientRect(),
//        x = event.clientX - rect.left,
//        y = event.clientY - rect.top;
//    if ( x >= btn.x && x <= btn.x + btn.w &&
//        y >= btn.y && y <= btn.y + btn.h) {
//        btn.selected = !btn.selected;
//        canvas.style.cursor = "pointer";
//    } else {
//        canvas.style.cursor = "auto";
//    }
//});
// document.body.addEventListener("keydown", function(event) {
//    switch (event.keyCode) {
//        case 37: //left
//            x--;
//            draw();
//            break;
//        case 39: //right
//            x++;
//            draw();
//            break;
//        case 38: //up
//            y--;
//            draw();
//            break;
//        case 40: //down
//            y++;
//            draw();
//            break;
//    }
//});
//
//function draw() {
//    context.clearRect(0, 0, canvas.width, canvas.height);
//    context.beginPath();
//    context.arc(x, y, 20, 0, Math.PI * 2);
//    context.fill();
//}
//
//btn = {
//    x: 100,
//    y: 100,
//    w: 100,
//    h: 50,
//    selected: true
//};
//
//drawButton();
//function drawButton() {
//context.fillStyle = btn.selected ? "red" : "grey";
//context.fillRect(btn.x, btn.y, btn.w, btn.h);
//}
//canvas.addEventListener("click", function(event) {
//    var rect = canvas.getBoundingClientRect(),
//        x = event.clientX - rect.left,
//        y = event.clientY - rect.top;
//    if ( x >= btn.x && x <= btn.x + btn.w &&
//        y >= btn.y && y <= btn.y + btn.h) {
//        btn.selected = !btn.selected;
//        drawButton();
//    }
//});