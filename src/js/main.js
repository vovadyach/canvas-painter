/**
 * Created by vins on 28.06.2016.
 */

function onReady() {
  var buttonnode = document.createElement('input');
  buttonnode.setAttribute('class', 'red');
  buttonnode.setAttribute('data-color', '#ff0000');
  buttonnode.setAttribute('type','button');
  buttonnode.setAttribute('value','Red');
  document.body.appendChild(buttonnode);

  var buttonnode = document.createElement('input');
  buttonnode.setAttribute('class', 'green');
  buttonnode.setAttribute('data-color', '#3dae49');
  buttonnode.setAttribute('type','button');
  buttonnode.setAttribute('value','Green');
  document.body.appendChild(buttonnode);

  var buttonnode = document.createElement('input');
  buttonnode.setAttribute('class', 'blue');
  buttonnode.setAttribute('data-color', '#009cc5');
  buttonnode.setAttribute('type','button');
  buttonnode.setAttribute('value','Blue');
  document.body.appendChild(buttonnode);

  var clearBox = document.createElement('div');
  clearBox.setAttribute('id', 'clear-box');
  document.body.appendChild(clearBox);
  
  var clearBtn = document.createElement('input');
  clearBtn.setAttribute('id', 'clear');
  clearBtn.setAttribute('type','button');
  clearBtn.setAttribute('value','Clear');
  document.body.appendChild(clearBtn);

  var canvasBox = document.createElement('div');
  clearBox.setAttribute('id', 'canvas-box');
  document.body.appendChild(canvasBox);

  var canvas = document.createElement('canvas');
  var widthCanv = 1200;
  var heightCanv = 640;

  canvas.id = 'canvas';
  document.body.appendChild(canvas);
  //Places clear button inside a div  
  var canvasGenerate = document.getElementById("canvas");
  canvasBox.insertBefore(canvasBox, canvasGenerate.firstChild);

  canvas.width = widthCanv;
  canvas.height = heightCanv;

  var rect = canvas.getBoundingClientRect();
  var mouseX;
  var mouseY;
    
  var context = canvas.getContext("2d");
  context.beginPath();

  context.strokeRect(0,0,1185, 600);

  //Places clear button inside a div  
  var clearBoxGenerate = document.getElementById("clear-box");
  clearBoxGenerate.insertBefore(clearBtn, clearBoxGenerate.firstChild);

  // context.canv.setAttribute("id", "canvasID");
  var red = document.getElementsByClassName('red');
  var green = document.getElementsByClassName('green');
  var blue = document.getElementsByClassName('blue');

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
      context.fillStyle = red;
      context.lineWidth = 5;
      context.stroke();
  }

  function onMouseUp(event) {
      canvas.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener( 'mouseup', onMouseUp);
  }
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