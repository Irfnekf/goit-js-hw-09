const t={buttonElStart:document.querySelector("[data-start]"),buttonElStop:document.querySelector("[data-stop]")};t.buttonElStart.addEventListener("click",(function(){t.buttonElStart.setAttribute("disabled",!0),t.buttonElStop.removeAttribute("disabled"),e=setInterval(o,1e3)})),t.buttonElStop.addEventListener("click",(function(){t.buttonElStop.setAttribute("disabled",!0),t.buttonElStart.removeAttribute("disabled"),clearInterval(e)}));let e=null;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.279d176a.js.map