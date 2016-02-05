define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Person_1) {
        "use strict";
        $(document).ready(function () {
            var worker = new Person_1.Person('Long Running Pal');
            worker.doSomething()
                .then(function () { return worker.doSomethingElse(); })
                .then(function () { return worker.doSomethingDifferent(); })
                .then(function () { return worker.doSomethingWhichFails(); })
                .catch(function () { return worker.saySorry(); });
        });
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Timer_1) {
        "use strict";
        var Person = (function () {
            function Person(name) {
                this.name = name;
            }
            Person.prototype.doSomething = function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var iterations = 10000, // 10k
                    timer = new Timer_1.Timer();
                    timer.start();
                    var el = _this.getTextEl();
                    for (var i = 0; i < iterations; i++) {
                        var content = void 0, text = new Date().getTime().toString();
                        if (i % 3 === 0) {
                            content = "<b>" + text + "</b>";
                        }
                        else if (i % 3 === 1) {
                            content = "<abbr>" + text + "</abbr>";
                        }
                        else {
                            content = "<i>" + text + "</i>";
                        }
                        el.html(content);
                    }
                    timer.end();
                    // update UI
                    _this.createEl('p', '#first-result', "doSomething took " + timer.formatDuration() + " ms");
                    resolve();
                });
            };
            Person.prototype.doSomethingElse = function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var iterations = 100000, // 100k
                    timer = new Timer_1.Timer();
                    timer.start();
                    var el = _this.getTextEl()[0];
                    for (var i = 0; i < iterations; i++) {
                        if (i % 2 === 0) {
                            el.classList.add('somecls');
                        }
                        else {
                            el.classList.remove('somecls');
                        }
                    }
                    timer.end();
                    // update UI
                    _this.createEl('p', '#second-result', "doSomethingElse took " + timer.formatDuration() + " ms");
                    resolve();
                });
            };
            Person.prototype.doSomethingDifferent = function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var iterations = 100000, // 100k
                    timer = new Timer_1.Timer();
                    timer.start();
                    var el = _this.getTextEl()[0];
                    for (var i = 0; i < iterations; i++) {
                        if (i % 2 === 0) {
                            el.style.height = '10em';
                        }
                        else {
                            el.style.height = '20em';
                        }
                    }
                    timer.end();
                    // update UI
                    _this.createEl('p', '#third-result', "doSomethingDifferent took " + timer.formatDuration() + " ms");
                    resolve();
                });
            };
            Person.prototype.doSomethingWhichFails = function () {
                return new Promise(function (resolve, reject) {
                    reject();
                });
            };
            Person.prototype.saySorry = function () {
                // update UI
                this.createEl('p', '#sorry', 'Sorry to see you go!');
            };
            Person.prototype.createEl = function (tag, id, text) {
                return $('body').append("<" + tag + " id=\"" + id + "\">" + text + "</" + tag + ">");
            };
            Person.prototype.getTextEl = function () {
                return $('#text');
            };
            return Person;
        }());
        exports.Person = Person;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
        "use strict";
        var Timer = (function () {
            function Timer() {
                this.id = new Date().getTime().toString();
            }
            Timer.prototype.start = function () {
                performance.mark(this.getStartMarkName());
            };
            Timer.prototype.end = function () {
                performance.mark(this.getEndMarkName());
                this.calculateDuration();
                performance.clearMarks(this.getStartMarkName());
                performance.clearMarks(this.getEndMarkName());
                performance.clearMeasures(this.getMeasureName());
            };
            Timer.prototype.formatDuration = function (trunc) {
                if (trunc === void 0) { trunc = true; }
                if (trunc === true) {
                    // return Math.trunc(this.duration).toString();
                    return Math.floor(this.duration).toString();
                }
                return this.duration.toString();
            };
            Timer.prototype.getStartMarkName = function () {
                return "start-" + this.id;
            };
            Timer.prototype.getEndMarkName = function () {
                return "end-" + this.id;
            };
            Timer.prototype.getMeasureName = function () {
                return "duration-" + this.id;
            };
            Timer.prototype.calculateDuration = function () {
                performance.measure(this.getMeasureName(), this.getStartMarkName(), this.getEndMarkName());
                var measure = performance.getEntriesByType('measure')[0];
                this.duration = measure.duration;
            };
            return Timer;
        }());
        exports.Timer = Timer;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ])});;