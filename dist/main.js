(function () {
  'use strict';

  function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
  }

  var canvasDiv = document.querySelector("#canvasDiv");
  var canvas = document.createElement("canvas");
  var clearBtn = document.getElementById("clear");
  var saveBtn = document.getElementById("save");
  var canvasHeight = window.innerHeight - 100;
  var canvasWidth = window.innerWidth - 100;
  var clickX = [];
  var clickY = [];
  var clickDrag = [];
  var paint;
  clearBtn.addEventListener("click", function (e) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    clickX = [];
    clickY = [];
    clickDrag = [];
    paint = false;
  });
  canvas.setAttribute("id", "canvas");
  canvas.setAttribute("width", canvasWidth);
  canvas.setAttribute("height", canvasHeight);
  canvas.setAttribute("class", "border");
  canvas.setAttribute("background-color", "#cb3594");
  canvasDiv.appendChild(canvas);

  if (typeof G_vmlCanvasManager != "undefined") {
    canvas = (_readOnlyError("canvas"), G_vmlCanvasManager.initElement(canvas));
  }

  var context = canvas.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }

  function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.fillStyle = "#fff";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.strokeStyle = "#000";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i = 0; i < clickX.length; i++) {
      context.beginPath();

      if (clickDrag[i] && i) {
        context.moveTo(clickX[i - 1], clickY[i - 1]);
      } else {
        context.moveTo(clickX[i] - 1, clickY[i]);
      }

      context.lineTo(clickX[i], clickY[i]);
      context.closePath();
      context.stroke();
    }
  }

  saveBtn.addEventListener("click", function () {
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);
    var savedImg = document.getElementById("savedImg");
    savedImg.setAttribute("src", dataURL);
  });
  canvas.addEventListener("mousedown", function (e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
    paint = true;
    addClick(mouseX, mouseY);
    redraw();
  });
  canvas.addEventListener("mousemove", function (e) {
    if (paint) {
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      redraw();
    }
  });
  canvas.addEventListener("mouseup", function (e) {
    paint = false;
  });

  var popup = document.getElementById("onstart-popup");
  var outer = document.getElementById("outer-popup");
  var closeBtn = document.getElementById("popup-close");

  var closePopup = function closePopup() {
    popup.style.display = "none";
    outer.style.display = "none";
  };

  outer.addEventListener("click", closePopup);
  closeBtn.addEventListener("click", closePopup);

  console.log("starting the app!");

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc2NyaXB0cy9jYW52YXMuanMiLCIuLi9zY3JpcHRzL3BvcHVwLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbnZhc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzRGl2XCIpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhclwiKTtcbmNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVcIik7XG5cbmxldCBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDA7XG5sZXQgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwMDtcbmxldCBjbGlja1ggPSBbXTtcbmxldCBjbGlja1kgPSBbXTtcbmxldCBjbGlja0RyYWcgPSBbXTtcbmxldCBwYWludDtcblxuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7IC8vIENsZWFycyB0aGUgY2FudmFzXG4gIGNsaWNrWCA9IFtdO1xuICBjbGlja1kgPSBbXTtcbiAgY2xpY2tEcmFnID0gW107XG4gIHBhaW50ID0gZmFsc2U7XG59KTtcblxuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGNhbnZhc1dpZHRoKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgY2FudmFzSGVpZ2h0KTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJvcmRlclwiKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiI2NiMzU5NFwiKTtcbmNhbnZhc0Rpdi5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG5pZiAodHlwZW9mIEdfdm1sQ2FudmFzTWFuYWdlciAhPSBcInVuZGVmaW5lZFwiKSB7XG4gIGNhbnZhcyA9IEdfdm1sQ2FudmFzTWFuYWdlci5pbml0RWxlbWVudChjYW52YXMpO1xufVxubGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29udGV4dC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG5cbmZ1bmN0aW9uIGFkZENsaWNrKHgsIHksIGRyYWdnaW5nKSB7XG4gIGNsaWNrWC5wdXNoKHgpO1xuICBjbGlja1kucHVzaCh5KTtcbiAgY2xpY2tEcmFnLnB1c2goZHJhZ2dpbmcpO1xufVxuXG5mdW5jdGlvbiByZWRyYXcoKSB7XG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpOyAvLyBDbGVhcnMgdGhlIGNhbnZhc1xuICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjMDAwXCI7XG4gIGNvbnRleHQubGluZUpvaW4gPSBcInJvdW5kXCI7XG4gIGNvbnRleHQubGluZVdpZHRoID0gNTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrWC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgaWYgKGNsaWNrRHJhZ1tpXSAmJiBpKSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyhjbGlja1hbaSAtIDFdLCBjbGlja1lbaSAtIDFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5tb3ZlVG8oY2xpY2tYW2ldIC0gMSwgY2xpY2tZW2ldKTtcbiAgICB9XG4gICAgY29udGV4dC5saW5lVG8oY2xpY2tYW2ldLCBjbGlja1lbaV0pO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgfVxufVxuXG5zYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAxLjApO1xuICBjb25zdCBzYXZlZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZWRJbWdcIik7XG4gIHNhdmVkSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBkYXRhVVJMKTtcbn0pO1xuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihlKSB7XG4gIGNvbnN0IG1vdXNlWCA9IGUucGFnZVggLSB0aGlzLm9mZnNldExlZnQ7XG4gIGNvbnN0IG1vdXNlWSA9IGUucGFnZVkgLSB0aGlzLm9mZnNldFRvcDtcblxuICBwYWludCA9IHRydWU7XG4gIGFkZENsaWNrKG1vdXNlWCwgbW91c2VZKTtcbiAgcmVkcmF3KCk7XG59KTtcblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZSkge1xuICBpZiAocGFpbnQpIHtcbiAgICBhZGRDbGljayhlLnBhZ2VYIC0gdGhpcy5vZmZzZXRMZWZ0LCBlLnBhZ2VZIC0gdGhpcy5vZmZzZXRUb3AsIHRydWUpO1xuICAgIHJlZHJhdygpO1xuICB9XG59KTtcblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgcGFpbnQgPSBmYWxzZTtcbn0pO1xuIiwiY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uc3RhcnQtcG9wdXBcIik7XG5jb25zdCBvdXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0ZXItcG9wdXBcIik7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXAtY2xvc2VcIik7XG5cbmNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgb3V0ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxub3V0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wdXApO1xuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wdXApO1xuIiwiaW1wb3J0IFwiLi9jYW52YXNcIjtcbmltcG9ydCBcIi4vcG9wdXBcIjtcblxuY29uc29sZS5sb2coXCJzdGFydGluZyB0aGUgYXBwIVwiKTtcbiJdLCJuYW1lcyI6WyJjYW52YXNEaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiY2xlYXJCdG4iLCJnZXRFbGVtZW50QnlJZCIsInNhdmVCdG4iLCJjYW52YXNIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNhbnZhc1dpZHRoIiwiaW5uZXJXaWR0aCIsImNsaWNrWCIsImNsaWNrWSIsImNsaWNrRHJhZyIsInBhaW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIkdfdm1sQ2FudmFzTWFuYWdlciIsImluaXRFbGVtZW50IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYWRkQ2xpY2siLCJ4IiwieSIsImRyYWdnaW5nIiwicHVzaCIsInJlZHJhdyIsInN0cm9rZVN0eWxlIiwibGluZUpvaW4iLCJsaW5lV2lkdGgiLCJpIiwibGVuZ3RoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiZGF0YVVSTCIsInRvRGF0YVVSTCIsInNhdmVkSW1nIiwibW91c2VYIiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwibW91c2VZIiwicGFnZVkiLCJvZmZzZXRUb3AiLCJwb3B1cCIsIm91dGVyIiwiY2xvc2VCdG4iLCJjbG9zZVBvcHVwIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztFQUFBLElBQU1BLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWxCO0VBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtFQUNBLElBQU1DLFFBQVEsR0FBR0osUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQWpCO0VBQ0EsSUFBTUMsT0FBTyxHQUFHTixRQUFRLENBQUNLLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBaEI7RUFFQSxJQUFJRSxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixHQUF4QztFQUNBLElBQUlDLFdBQVcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLEdBQW9CLEdBQXRDO0VBQ0EsSUFBSUMsTUFBTSxHQUFHLEVBQWI7RUFDQSxJQUFJQyxNQUFNLEdBQUcsRUFBYjtFQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtFQUNBLElBQUlDLEtBQUo7RUFFQVgsUUFBUSxDQUFDWSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTQyxDQUFULEVBQVk7RUFDN0NDLEVBQUFBLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QkQsT0FBTyxDQUFDaEIsTUFBUixDQUFla0IsS0FBdkMsRUFBOENGLE9BQU8sQ0FBQ2hCLE1BQVIsQ0FBZW1CLE1BQTdELEVBRDZDOztFQUU3Q1QsRUFBQUEsTUFBTSxHQUFHLEVBQVQ7RUFDQUMsRUFB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