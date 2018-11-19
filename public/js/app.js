/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {

    //Modal & Dropdowns
    var modal_btn = document.querySelectorAll('[data-modal]');
    var close_btn = document.querySelectorAll('[data-dismiss]');

    for (var i = 0; i < modal_btn.length; i++) {
        var thisBtn = modal_btn[i];
        thisBtn.addEventListener("click", function () {
            var modal = document.getElementById(this.dataset.modal);
            modal.style.display = "block";
            modal.classList.add("opened");
        }, false);
    }

    for (var i = 0; i < close_btn.length; i++) {
        var thisBtn = close_btn[i];
        thisBtn.addEventListener("click", function () {
            var modal = document.getElementById(this.dataset.dismiss);
            modal.style.display = "none";
            modal.classList.remove("opened");
        }, false);
    }

    window.onclick = function (event) {
        var modal_open = document.getElementsByClassName('c-modal opened')[0];
        if (event.target == modal_open) {
            modal_open.style.display = "none";
            modal_open.classList.remove("opened");
        }
    };

    var Dropdown = function () {
        function Dropdown() {
            _classCallCheck(this, Dropdown);
        }

        _createClass(Dropdown, null, [{
            key: 'initialize',

            /**
             * Initialize the dropdown so that when clicked a dropdown will display
             */
            value: function initialize() {
                document.querySelectorAll('[data-toggle="dropdown').forEach(function (link) {
                    link.addEventListener('click', function (event) {
                        this.closest('.c-dropdown').classList.toggle('show');
                        document.addEventListener('click', Dropdown.closeDropdown);
                    });
                });
            }

            /**
             * Event handler for hiding a visible dropdown, and removing the associated event handler
             * @param event
             */

        }, {
            key: 'closeDropdown',
            value: function closeDropdown(event) {
                if (null == event.target.closest('.c-dropdown')) {
                    document.removeEventListener('click', Dropdown.closeDropdown);
                    document.querySelectorAll('.c-dropdown').forEach(function (dropdown) {
                        dropdown.classList.remove('show');
                    });
                }
            }
        }]);

        return Dropdown;
    }();

    Dropdown.initialize();

    var Tab = function () {
        function Tab() {
            _classCallCheck(this, Tab);
        }

        _createClass(Tab, null, [{
            key: 'initialize',
            value: function initialize() {
                document.querySelectorAll('[data-tab]').forEach(function (link) {
                    link.addEventListener('click', function (item) {
                        var tabpane = document.querySelector(this.getAttribute('data-tab'));

                        // Remove active classes from nav-tab items
                        this.closest('.c-tabs').querySelectorAll('li').forEach(function (tab) {
                            return tab.classList.remove('active');
                        });
                        this.closest('li').classList.add('active');

                        // Remove existing active classes from tab panes
                        tabpane.parentElement.querySelectorAll('.tab-pane').forEach(function (pane) {
                            return pane.classList.remove('active');
                        });
                        tabpane.classList.add("active");
                    });
                });
            }
        }]);

        return Tab;
    }();

    Tab.initialize();

    //Feather Icons initialize
    feather.replace();

    // Navigation Dropdown
    var coll = document.querySelectorAll(".c-side-nav > li a");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function (event) {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content) {
                event.preventDefault();

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    if (this.closest("ul.sub")) {
                        this.closest("ul.sub").style.maxHeight = this.closest("ul.sub").scrollHeight + content.scrollHeight + "px";
                    }
                }
            }
        });
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);