/**
 * Created by vins on 28.06.2016.
 */

function onReady() {

  var buttonnode1 = document.createElement('input');
  buttonnode1.setAttribute('class', 'colors');
  buttonnode1.setAttribute('data-color', '#c82124');
  buttonnode1.setAttribute('type','button');
  buttonnode1.setAttribute('value','Red');
  document.body.appendChild(buttonnode1);

  var buttonnode2 = document.createElement('input');
  buttonnode2.setAttribute('class', 'colors');
  buttonnode2.setAttribute('data-color', '#3dae49');
  buttonnode2.setAttribute('type','button');
  buttonnode2.setAttribute('value','Green');
  document.body.appendChild(buttonnode2);

  var buttonnode3 = document.createElement('input');
  buttonnode3.setAttribute('class', 'colors');
  buttonnode3.setAttribute('data-color', '#009cc5');
  buttonnode3.setAttribute('type','button');
  buttonnode3.setAttribute('value','Blue');
  document.body.appendChild(buttonnode3);

  var clearBtn = document.createElement('input');
  clearBtn.setAttribute('id', 'clear');
  clearBtn.setAttribute('type','button');
  clearBtn.setAttribute('value','Clear');
  document.body.appendChild(clearBtn);

  var element = document.createElement("div");
  element.setAttribute('id', 'color-input');
  document.getElementsByClassName('container')[0].appendChild(element);

  var colorInput = document.getElementById('color-input');
  colorInput.appendChild(buttonnode1);
  colorInput.appendChild(buttonnode2);
  colorInput.appendChild(buttonnode3);
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
    context.clearRect(0,0,1400, 800);
    //context.strokeStyle = '#000';
  }

  function setColor(event) {
    color = event.target.dataset.color;
    if (color) {
      context.strokeStyle = color;
    }
  }

  colorInput.addEventListener('click', function (event) {
    if(event.target.classList.contains('colors')) {
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
    document.body.removeEventListener( 'mouseup', onMouseUp);
  }
}

window.onload = onReady;