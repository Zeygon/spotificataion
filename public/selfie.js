/* Selfie.js | https://github.com/wonism/selfie.js */
"use strict";

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
  function e(e, t) {
    for (var o = 0; o < t.length; o++) {
      var a = t[o];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
  }
  return function(t, o, a) {
    return o && e(t.prototype, o), a && e(t, a), t
  }
}();
! function() {
  var e = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia,
    t = void 0,
    o = {
      init: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        return t || new a(e)
      },
      author: "wonism",
      version: "1.0.0"
    },
    a = function() {
      function o(e) {
        _classCallCheck(this, o), t = this, t.options = e, t.camera = document.createElement("video"), t.store = document.createElement("canvas"), t.photo = document.createElement("img"), t.download = document.createElement("a"), e.camera && e.camera.id && t.camera.setAttribute("id", e.camera.id), e.store && e.store.id && t.store.setAttribute("id", e.store.id), e.photo && e.photo.id && t.photo.setAttribute("id", e.photo.id), e.download && e.download.id && t.download.setAttribute("id", e.download.id), t.download.setAttribute("download", (e.fileName || "selfie") + ".png"), t.download.insertAdjacentHTML("beforeend", e.downloadLinkText || "DOWNLOAD"), t.setup()
      }
      return _createClass(o, [{
        key: "isNode",
        value: function(e) {
          return e && e.nodeType ? e : null
        }
      }, {
        key: "activeNode",
        value: function(e, o, a) {
          var n = t.options[o],
            i = n && n.class ? n.class : "";
          i += a ? i && n.activeClass ? " " + n.activeClass : " __selfie-active" : i && n.unactiveClass ? " " + n.unactiveClass : " __selfie-unactive", e.setAttribute("class", i)
        }
      }, {
        key: "setup",
        value: function() {
          var o = t.options,
            a = t.isNode(o.target) || document.body;
          if (a.appendChild(t.camera), a.appendChild(t.store), a.appendChild(t.photo), a.appendChild(t.download), !e) throw new Error("This browser is not support user media.");
          e.call(navigator, {
            video: !0
          }, function(e) {
            window.URL ? t.camera.src = window.URL.createObjectURL(e) : t.camera.src = e, t.camera.onplay = function() {
              t.display()
            }, t.camera.play()
          }, function(e) {
            throw e
          })
        }
      }, {
        key: "display",
        value: function() {
          t.activeNode(t.camera, "camera", !0), t.activeNode(t.store, "store", !1), t.activeNode(t.photo, "photo", !1), t.activeNode(t.download, "download", !1), t.updateUI()
        }
      }, {
        key: "updateUI",
        value: function() {
          var e = document.querySelectorAll(".__selfie-active"),
            t = document.querySelectorAll(".__selfie-unactive");
          Array.prototype.forEach.call(e, function(e) {
            e.setAttribute("style", "display: none;"), e.setAttribute("style", e.getAttribute("style").replace(/display\s?\:\s*none\;/gi, ""))
          }), Array.prototype.forEach.call(t, function(e) {
            e.setAttribute("style", "display: none;")
          })
        }
      }, {
        key: "takePhoto",
        value: function() {
          var e = t.store.getContext("2d"),
            o = t.camera.videoWidth,
            a = t.camera.videoHeight,
            n = "";
          return !(!o || !a) && (t.store.width = o, t.store.height = a, e.drawImage(t.camera, 0, 0, o, a), n = t.store.toDataURL("image/png"), t.photo.setAttribute("src", n), t.download.setAttribute("href", n), t.activeNode(t.photo, "photo", !0), t.activeNode(t.download, "download", !0), t.updateUI(), !0)
        }
      }, {
        key: "removePhoto",
        value: function() {
          return t.photo.setAttribute("src", ""), t.download.setAttribute("href", ""), t.activeNode(t.photo, "photo", !1), t.activeNode(t.download, "download", !1), t.updateUI(), !0
        }
      }]), o
    }();
  window.selfie = o
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGZpZS5taW4uanMiXSwibmFtZXMiOlsiZ2V0VXNlck1lZGlhIiwibmF2aWdhdG9yIiwid2Via2l0R2V0VXNlck1lZGlhIiwibW96R2V0VXNlck1lZGlhIiwibXNHZXRVc2VyTWVkaWEiLCJfc2VsZmllIiwic2VsZmllIiwiaW5pdCIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZWxmaWUiLCJhdXRob3IiLCJ2ZXJzaW9uIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsImNhbWVyYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0b3JlIiwicGhvdG8iLCJkb3dubG9hZCIsImlkIiwic2V0QXR0cmlidXRlIiwiZmlsZU5hbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJkb3dubG9hZExpbmtUZXh0Iiwic2V0dXAiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIm5vZGUiLCJub2RlVHlwZSIsImNvbXBvbmVudE5hbWUiLCJhY3RpdmUiLCJjb21wb25lbnQiLCJjbGFzc05hbWUiLCJjbGFzcyIsImFjdGl2ZUNsYXNzIiwidW5hY3RpdmVDbGFzcyIsInRhcmdldCIsImlzTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIkVycm9yIiwiY2FsbCIsInZpZGVvIiwic3RyZWFtIiwid2luZG93IiwiVVJMIiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwib25wbGF5IiwiZGlzcGxheSIsInBsYXkiLCJlcnIiLCJhY3RpdmVOb2RlIiwidXBkYXRlVUkiLCJhY3RpdmVOb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bmFjdGl2ZU5vZGVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJoZWlnaHQiLCJ2aWRlb0hlaWdodCIsInNuYXAiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiXSwibWFw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OUMsSUF3SUZxQyxRQUFBM0MsT0FBQUEiLCJmaWxlIjoic2VsZmllLm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoKCgpID0+IHtcbiAgY29uc3QgZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhO1xuXG4gIGxldCBfc2VsZmllO1xuICBjb25zdCBzZWxmaWUgPSB7XG4gICAgaW5pdChvcHRpb25zID0geyB9KSB7XG4gICAgICByZXR1cm4gX3NlbGZpZSB8fCBuZXcgU2VsZmllKG9wdGlvbnMpO1xuICAgIH0sXG4gICAgYXV0aG9yOiAnd29uaXNtJyxcbiAgICB2ZXJzaW9uOiAnMS4wLjAnXG4gIH07XG5cbiAgY2xhc3MgU2VsZmllIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICBfc2VsZmllID0gdGhpcztcblxuICAgICAgX3NlbGZpZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIF9zZWxmaWUuY2FtZXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgIF9zZWxmaWUuc3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIF9zZWxmaWUucGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIF9zZWxmaWUuZG93bmxvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgIG9wdGlvbnMuY2FtZXJhICYmIG9wdGlvbnMuY2FtZXJhLmlkICYmIF9zZWxmaWUuY2FtZXJhLnNldEF0dHJpYnV0ZSgnaWQnLCBvcHRpb25zLmNhbWVyYS5pZCk7XG4gICAgICBvcHRpb25zLnN0b3JlICYmIG9wdGlvbnMuc3RvcmUuaWQgJiYgX3NlbGZpZS5zdG9yZS5zZXRBdHRyaWJ1dGUoJ2lkJywgb3B0aW9ucy5zdG9yZS5pZCk7XG4gICAgICBvcHRpb25zLnBob3RvICYmIG9wdGlvbnMucGhvdG8uaWQgJiYgX3NlbGZpZS5waG90by5zZXRBdHRyaWJ1dGUoJ2lkJywgb3B0aW9ucy5waG90by5pZCk7XG4gICAgICBvcHRpb25zLmRvd25sb2FkICYmIG9wdGlvbnMuZG93bmxvYWQuaWQgJiYgX3NlbGZpZS5kb3dubG9hZC5zZXRBdHRyaWJ1dGUoJ2lkJywgb3B0aW9ucy5kb3dubG9hZC5pZCk7XG5cbiAgICAgIF9zZWxmaWUuZG93bmxvYWQuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGAke29wdGlvbnMuZmlsZU5hbWUgfHwgJ3NlbGZpZSd9LnBuZ2ApO1xuICAgICAgX3NlbGZpZS5kb3dubG9hZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG9wdGlvbnMuZG93bmxvYWRMaW5rVGV4dCB8fCAnRE9XTkxPQUQnKTtcblxuICAgICAgX3NlbGZpZS5zZXR1cCgpO1xuICAgIH1cblxuICAgIGlzTm9kZShub2RlKSB7XG4gICAgICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZlTm9kZShub2RlLCBjb21wb25lbnROYW1lLCBhY3RpdmUpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IF9zZWxmaWUub3B0aW9uc1tjb21wb25lbnROYW1lXTtcbiAgICAgIGxldCBjbGFzc05hbWUgPSBjb21wb25lbnQgJiYgY29tcG9uZW50LmNsYXNzID8gY29tcG9uZW50LmNsYXNzIDogJyc7XG5cbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IChjbGFzc05hbWUgJiYgY29tcG9uZW50LmFjdGl2ZUNsYXNzID8gKGAgJHtjb21wb25lbnQuYWN0aXZlQ2xhc3N9YCkgOiAnIF9fc2VsZmllLWFjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IChjbGFzc05hbWUgJiYgY29tcG9uZW50LnVuYWN0aXZlQ2xhc3MgPyAoYCAke2NvbXBvbmVudC51bmFjdGl2ZUNsYXNzfWApIDogJyBfX3NlbGZpZS11bmFjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHNldHVwKCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IF9zZWxmaWUub3B0aW9ucztcbiAgICAgIGNvbnN0IHRhcmdldCA9IF9zZWxmaWUuaXNOb2RlKG9wdGlvbnMudGFyZ2V0KSB8fCBkb2N1bWVudC5ib2R5O1xuXG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoX3NlbGZpZS5jYW1lcmEpO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKF9zZWxmaWUuc3RvcmUpO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKF9zZWxmaWUucGhvdG8pO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKF9zZWxmaWUuZG93bmxvYWQpO1xuXG4gICAgICBpZiAoIWdldFVzZXJNZWRpYSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCB1c2VyIG1lZGlhLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0VXNlck1lZGlhLmNhbGwobmF2aWdhdG9yLCB7XG4gICAgICAgICAgICB2aWRlbzogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RyZWFtID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuVVJMKSB7XG4gICAgICAgICAgICAgIF9zZWxmaWUuY2FtZXJhLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfc2VsZmllLmNhbWVyYS5zcmMgPSBzdHJlYW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9zZWxmaWUuY2FtZXJhLm9ucGxheSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgX3NlbGZpZS5kaXNwbGF5KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfc2VsZmllLmNhbWVyYS5wbGF5KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5KCkge1xuICAgICAgX3NlbGZpZS5hY3RpdmVOb2RlKF9zZWxmaWUuY2FtZXJhLCAnY2FtZXJhJywgdHJ1ZSk7XG4gICAgICBfc2VsZmllLmFjdGl2ZU5vZGUoX3NlbGZpZS5zdG9yZSwgJ3N0b3JlJywgZmFsc2UpO1xuICAgICAgX3NlbGZpZS5hY3RpdmVOb2RlKF9zZWxmaWUucGhvdG8sICdwaG90bycsIGZhbHNlKTtcbiAgICAgIF9zZWxmaWUuYWN0aXZlTm9kZShfc2VsZmllLmRvd25sb2FkLCAnZG93bmxvYWQnLCBmYWxzZSk7XG5cbiAgICAgIF9zZWxmaWUudXBkYXRlVUkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVVSSgpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLl9fc2VsZmllLWFjdGl2ZScpLCB1bmFjdGl2ZU5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLl9fc2VsZmllLXVuYWN0aXZlJyk7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYWN0aXZlTm9kZXMsIG5vZGUgPT4ge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbm9kZS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykucmVwbGFjZSgvZGlzcGxheVxccz9cXDpcXHMqbm9uZVxcOy9naSwgJycpKTtcbiAgICAgIH0pO1xuXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHVuYWN0aXZlTm9kZXMsIG5vZGUgPT4ge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRha2VQaG90bygpIHtcbiAgICAgIGNvbnN0IGN0eCA9IF9zZWxmaWUuc3RvcmUuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gX3NlbGZpZS5jYW1lcmEudmlkZW9XaWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IF9zZWxmaWUuY2FtZXJhLnZpZGVvSGVpZ2h0O1xuICAgICAgbGV0IHNuYXAgPSAnJztcblxuICAgICAgaWYgKHdpZHRoICYmIGhlaWdodCkge1xuICAgICAgICBfc2VsZmllLnN0b3JlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIF9zZWxmaWUuc3RvcmUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoX3NlbGZpZS5jYW1lcmEsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIHNuYXAgPSBfc2VsZmllLnN0b3JlLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG5cbiAgICAgICAgX3NlbGZpZS5waG90by5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNuYXApO1xuICAgICAgICBfc2VsZmllLmRvd25sb2FkLnNldEF0dHJpYnV0ZSgnaHJlZicsIHNuYXApO1xuXG4gICAgICAgIF9zZWxmaWUuYWN0aXZlTm9kZShfc2VsZmllLnBob3RvLCAncGhvdG8nLCB0cnVlKTtcbiAgICAgICAgX3NlbGZpZS5hY3RpdmVOb2RlKF9zZWxmaWUuZG93bmxvYWQsICdkb3dubG9hZCcsIHRydWUpO1xuXG4gICAgICAgIF9zZWxmaWUudXBkYXRlVUkoKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVQaG90bygpIHtcbiAgICAgIF9zZWxmaWUucGhvdG8uc2V0QXR0cmlidXRlKCdzcmMnLCAnJyk7XG4gICAgICBfc2VsZmllLmRvd25sb2FkLnNldEF0dHJpYnV0ZSgnaHJlZicsICcnKTtcblxuICAgICAgX3NlbGZpZS5hY3RpdmVOb2RlKF9zZWxmaWUucGhvdG8sICdwaG90bycsIGZhbHNlKTtcbiAgICAgIF9zZWxmaWUuYWN0aXZlTm9kZShfc2VsZmllLmRvd25sb2FkLCAnZG93bmxvYWQnLCBmYWxzZSk7XG5cbiAgICAgIF9zZWxmaWUudXBkYXRlVUkoKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgd2luZG93LnNlbGZpZSA9IHNlbGZpZTtcbn0pKSgpO1xuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
