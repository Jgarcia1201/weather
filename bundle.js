/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createUrl(string) {
    const search = document.querySelector('.search'); 
    let key = 'key=8ec3a4d0dbc0412ebc4190012210408&q='; 
    let api = 'http://api.weatherapi.com/v1/current.json?';
    let aqi = '&aqi=yes'; 
    let city = string;
    let weatherUrl = api + key + city + aqi;
    return weatherUrl; 
}


async function weather() {
    const cityDiv = document.querySelector('.city');
    const cond = document.querySelector('.cond'); 
    const deg = document.querySelector('.deg');
    const feels = document.querySelector('#feels');
    const humid = document.querySelector('#humid');
    const wind = document.querySelector('#wind');
    let search = document.querySelector('.search');
    let userUrl = createUrl(search.value);

    try {
        // Get Weather: 
        const response = await fetch(userUrl, {mode: 'cors'}); 
        const weatherData = await response.json();
        console.log(weatherData);       
        // Displaying state v. Displaying Country if not in US:
        if (weatherData.location.country != "United States of America") {
            cityDiv.innerHTML = weatherData.location.name + ", " + weatherData.location.country;
        }
        else {
            cityDiv.innerHTML = weatherData.location.name + ", " + weatherData.location.region;
        }
        cond.innerHTML = weatherData.current.condition.text;
        deg.innerHTML = Math.round(weatherData.current.temp_f) + '\xB0';
        feels.innerHTML = "Feels Like: " + Math.round(weatherData.current.feelslike_f) + '\xB0F';
        humid.innerHTML = "Humidity: " + weatherData.current.humidity + "%";
        wind.innerHTML = "Wind: " + weatherData.current.wind_mph + " MPH " + weatherData.current.wind_dir; 
    }
    catch (error) {
        alert('No Location Found. Try another place or something? Idk im just a computer');
        search.value = ""; 
        return 0;  
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
    const header = document.querySelector('#header');
    const content = document.querySelector('.content');

    const logoBox = document.createElement('div'); 
    logoBox.className = "logoBox"; 
    logoBox.innerHTML = "Zen Weather"
    header.appendChild(logoBox);

    const searchBox = document.createElement('div');
    searchBox.className = "searchBox";
    content.appendChild(searchBox);

    let searchIcon = document.createElement('span');
    searchIcon.innerHTML = 'search';
    searchIcon.className = 'material-icons'; 
    searchBox.appendChild(searchIcon);

    const search = document.createElement('input'); 
    search.className = "search";
    searchBox.appendChild(search);
}; 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/onLoad.js":
/*!***********************!*\
  !*** ./src/onLoad.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function onLoad() {
    const cityDiv = document.querySelector('.city');
    const cond = document.querySelector('.cond'); 
    const deg = document.querySelector('.deg');
    const feels = document.querySelector('#feels');
    const humid = document.querySelector('#humid');
    const wind = document.querySelector('#wind');
    let faren = '\xB0';

    try {
        // Get Weather: 
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=8ec3a4d0dbc0412ebc4190012210408&q=houston&aqi=yes', {mode: 'cors'}); 
        const weatherData = await response.json();
        console.log(weatherData);
        // Displaying: 
        cityDiv.innerHTML = weatherData.location.name + ", " + weatherData.location.region;
        cond.innerHTML = weatherData.current.condition.text;
        deg.innerHTML = Math.round(weatherData.current.temp_f) + faren;
        feels.innerHTML = "Feels Like: " + Math.round(weatherData.current.feelslike_f) + faren + 'F';
        humid.innerHTML = "Humidity: " + weatherData.current.humidity + "%";
        wind.innerHTML = "Wind: " + weatherData.current.wind_mph + " MPH " + weatherData.current.wind_dir;
    }
    catch (error) {
        console.log("you fucked up.");
        return 0;  
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ "./src/onLoad.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");




(0,_header__WEBPACK_IMPORTED_MODULE_2__.default)();

// On Load:
(0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(); 

// Search:
const searchButton = document.querySelector('.material-icons');
const weatherBox = document.querySelector('.weatherBox');
const search = document.querySelector('.search'); 
searchButton.addEventListener('click', () => {
    (0,_api__WEBPACK_IMPORTED_MODULE_1__.default)();
    search.value = "";
});

search.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        (0,_api__WEBPACK_IMPORTED_MODULE_1__.default)();
        search.value = "";
    }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUM5Q2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDeEJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlJQUF5SSxhQUFhO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDNUJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNGO0FBQ1E7O0FBRW5DLGdEQUFZOztBQUVaO0FBQ0EsZ0RBQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQU87QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFFBQVEsNkNBQU87QUFDZjtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vbkxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVVcmwoc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpOyBcbiAgICBsZXQga2V5ID0gJ2tleT04ZWMzYTRkMGRiYzA0MTJlYmM0MTkwMDEyMjEwNDA4JnE9JzsgXG4gICAgbGV0IGFwaSA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj8nO1xuICAgIGxldCBhcWkgPSAnJmFxaT15ZXMnOyBcbiAgICBsZXQgY2l0eSA9IHN0cmluZztcbiAgICBsZXQgd2VhdGhlclVybCA9IGFwaSArIGtleSArIGNpdHkgKyBhcWk7XG4gICAgcmV0dXJuIHdlYXRoZXJVcmw7IFxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIHdlYXRoZXIoKSB7XG4gICAgY29uc3QgY2l0eURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgY29uc3QgY29uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kJyk7IFxuICAgIGNvbnN0IGRlZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWcnKTtcbiAgICBjb25zdCBmZWVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscycpO1xuICAgIGNvbnN0IGh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkJyk7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJyk7XG4gICAgbGV0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcbiAgICBsZXQgdXNlclVybCA9IGNyZWF0ZVVybChzZWFyY2gudmFsdWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gR2V0IFdlYXRoZXI6IFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVzZXJVcmwsIHttb2RlOiAnY29ycyd9KTsgXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7ICAgICAgIFxuICAgICAgICAvLyBEaXNwbGF5aW5nIHN0YXRlIHYuIERpc3BsYXlpbmcgQ291bnRyeSBpZiBub3QgaW4gVVM6XG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5ICE9IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIpIHtcbiAgICAgICAgICAgIGNpdHlEaXYuaW5uZXJIVE1MID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSArIFwiLCBcIiArIHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaXR5RGl2LmlubmVySFRNTCA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUgKyBcIiwgXCIgKyB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb247XG4gICAgICAgIH1cbiAgICAgICAgY29uZC5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBkZWcuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZikgKyAnXFx4QjAnO1xuICAgICAgICBmZWVscy5pbm5lckhUTUwgPSBcIkZlZWxzIExpa2U6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mKSArICdcXHhCMEYnO1xuICAgICAgICBodW1pZC5pbm5lckhUTUwgPSBcIkh1bWlkaXR5OiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIjtcbiAgICAgICAgd2luZC5pbm5lckhUTUwgPSBcIldpbmQ6IFwiICsgd2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waCArIFwiIE1QSCBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9kaXI7IFxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ05vIExvY2F0aW9uIEZvdW5kLiBUcnkgYW5vdGhlciBwbGFjZSBvciBzb21ldGhpbmc/IElkayBpbSBqdXN0IGEgY29tcHV0ZXInKTtcbiAgICAgICAgc2VhcmNoLnZhbHVlID0gXCJcIjsgXG4gICAgICAgIHJldHVybiAwOyAgXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlciIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb25zdCBsb2dvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGxvZ29Cb3guY2xhc3NOYW1lID0gXCJsb2dvQm94XCI7IFxuICAgIGxvZ29Cb3guaW5uZXJIVE1MID0gXCJaZW4gV2VhdGhlclwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Cb3gpO1xuXG4gICAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhcmNoQm94LmNsYXNzTmFtZSA9IFwic2VhcmNoQm94XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hCb3gpO1xuXG4gICAgbGV0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2VhcmNoSWNvbi5pbm5lckhUTUwgPSAnc2VhcmNoJztcbiAgICBzZWFyY2hJY29uLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1pY29ucyc7IFxuICAgIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcblxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IFxuICAgIHNlYXJjaC5jbGFzc05hbWUgPSBcInNlYXJjaFwiO1xuICAgIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2gpO1xufTsgXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyIiwiYXN5bmMgZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgIGNvbnN0IGNpdHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICAgIGNvbnN0IGNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZCcpOyBcbiAgICBjb25zdCBkZWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVnJyk7XG4gICAgY29uc3QgZmVlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMnKTtcbiAgICBjb25zdCBodW1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZCcpO1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZCcpO1xuICAgIGxldCBmYXJlbiA9ICdcXHhCMCc7XG5cbiAgICB0cnkge1xuICAgICAgICAvLyBHZXQgV2VhdGhlcjogXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT04ZWMzYTRkMGRiYzA0MTJlYmM0MTkwMDEyMjEwNDA4JnE9aG91c3RvbiZhcWk9eWVzJywge21vZGU6ICdjb3JzJ30pOyBcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgLy8gRGlzcGxheWluZzogXG4gICAgICAgIGNpdHlEaXYuaW5uZXJIVE1MID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSArIFwiLCBcIiArIHdlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbjtcbiAgICAgICAgY29uZC5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBkZWcuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZikgKyBmYXJlbjtcbiAgICAgICAgZmVlbHMuaW5uZXJIVE1MID0gXCJGZWVscyBMaWtlOiBcIiArIE1hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZikgKyBmYXJlbiArICdGJztcbiAgICAgICAgaHVtaWQuaW5uZXJIVE1MID0gXCJIdW1pZGl0eTogXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgICAgIHdpbmQuaW5uZXJIVE1MID0gXCJXaW5kOiBcIiArIHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGggKyBcIiBNUEggXCIgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfZGlyO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgZnVja2VkIHVwLlwiKTtcbiAgICAgICAgcmV0dXJuIDA7ICBcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbkxvYWQiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBvbkxvYWQgZnJvbSAnLi9vbkxvYWQnXG5pbXBvcnQgd2VhdGhlciBmcm9tICcuL2FwaSdcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5cbmNyZWF0ZUhlYWRlcigpO1xuXG4vLyBPbiBMb2FkOlxub25Mb2FkKCk7IFxuXG4vLyBTZWFyY2g6XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF0ZXJpYWwtaWNvbnMnKTtcbmNvbnN0IHdlYXRoZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckJveCcpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpOyBcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3ZWF0aGVyKCk7XG4gICAgc2VhcmNoLnZhbHVlID0gXCJcIjtcbn0pO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgIHdlYXRoZXIoKTtcbiAgICAgICAgc2VhcmNoLnZhbHVlID0gXCJcIjtcbiAgICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=