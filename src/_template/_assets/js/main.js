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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_template/_source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_template/_source/js/main.js":
/*!******************************************!*\
  !*** ./src/_template/_source/js/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/mask */ \"./src/_template/_source/js/parts/mask.js\");\n/* harmony import */ var _parts_initMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/initMenu */ \"./src/_template/_source/js/parts/initMenu.js\");\n/* harmony import */ var _parts_initPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/initPopup */ \"./src/_template/_source/js/parts/initPopup.js\");\n/* harmony import */ var _parts_navLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/navLinks */ \"./src/_template/_source/js/parts/navLinks.js\");\n/* harmony import */ var _parts_initCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/initCarousel */ \"./src/_template/_source/js/parts/initCarousel.js\");\n/* harmony import */ var _parts_initSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/initSelector */ \"./src/_template/_source/js/parts/initSelector.js\");\n/* harmony import */ var _parts_initMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/initMap */ \"./src/_template/_source/js/parts/initMap.js\");\n/* harmony import */ var _parts_initToggler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/initToggler */ \"./src/_template/_source/js/parts/initToggler.js\");\n/* harmony import */ var _parts_initStarSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/initStarSelector */ \"./src/_template/_source/js/parts/initStarSelector.js\");\n\n\n\n\n\n\n\n\n\n$(function () {\n  Object(_parts_initPopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_parts_initMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_parts_mask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_parts_navLinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_parts_initCarousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_parts_initSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_parts_initMap__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  Object(_parts_initToggler__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  $('.js-scroll-top').on('click', function () {\n    $('html, body').animate({\n      scrollTop: 0\n    }, 500);\n  });\n  Object(_parts_initStarSelector__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/_template/_source/js/main.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initCarousel.js":
/*!********************************************************!*\
  !*** ./src/_template/_source/js/parts/initCarousel.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initCarousel = function initCarousel() {\n  function initSlider() {\n    $('.js-owl-slider').owlCarousel({\n      loop: true,\n      margin: 30,\n      dots: true,\n      items: 2,\n      nav: true,\n      autoHeight: true,\n      onInitialize: beforeInit,\n      onInitialized: callback,\n      onTranslate: draggedCallback,\n      onRefresh: draggedCallback,\n      navText: ['<svg class=\"icon icon_slider-arrow\"> <use xlink:href=\"svg/sprite/sprite.svg#slider-arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" id=\"slider-arrow\" width=\"100%\" height=\"100%\"><g clip-path=\"url(#aclip0)\"><path d=\"M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z\"></path></g></svg></use> </svg>', '<svg class=\"icon icon_slider-arrow\"> <use xlink:href=\"svg/sprite/sprite.svg#slider-arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" id=\"slider-arrow\" width=\"100%\" height=\"100%\"><g clip-path=\"url(#aclip0)\"><path d=\"M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z\"></path></g></svg></use> </svg>'],\n      responsive: {\n        0: {\n          items: 1,\n          nav: false\n        },\n        600: {\n          items: 2,\n          nav: false\n        },\n        1024: {\n          items: 3,\n          nav: true\n        }\n      }\n    });\n  }\n\n  initSlider();\n\n  function beforeInit(event) {\n    var slider = event.target ? event.target : event;\n    var main = $(slider).parent();\n\n    if (main.hasClass('slider-filter') && main.length !== 0) {\n      $(slider).html('');\n      var fake = main.find(\".fake-slider\");\n      var filters = main.find(\".js-filter-input\");\n      var fakeSlides = fake.find('.js-block-filter');\n      fakeSlides.each(function (i, elem) {\n        var active = true;\n        filters.each(function (i, filter) {\n          var filterType = $(filter).data('type');\n          var filterValue = $(filter).val();\n\n          if (!$(elem).data(filterType).includes(filterValue)) {\n            active = false;\n          }\n        });\n\n        if (active) {\n          $(elem).clone().appendTo(slider);\n        }\n      });\n    }\n\n    main.fadeIn(500);\n  }\n\n  $('body').on('change', '.js-filter-input', function () {\n    var slider = $(this).closest('.slider-wrapper').find('.slider-element');\n    slider.owlCarousel('destroy');\n    slider.html('');\n\n    if (slider.hasClass('js-owl-slider')) {\n      initSlider();\n    }\n  });\n\n  function callback(event) {\n    var current = event.item.index - event.relatedTarget._clones.length / 2 % event.item.count + 1;\n    var size = Math.ceil(event.item.count / event.page.size);\n\n    if (current <= 0) {\n      current = event.item.count;\n    }\n\n    if (current > event.item.count) {\n      current = 1;\n    }\n\n    console.log('Текущий слайд: ', current);\n    console.log('Количество слайдов: ', event.item.count);\n    console.log('Количество страниц: ', size);\n  }\n\n  function draggedCallback(event) {\n    var current = event.item.index - event.relatedTarget._clones.length / 2 % event.item.count + 1;\n    var size = Math.ceil(event.item.count / event.page.size);\n\n    if (current <= 0) {\n      current = event.item.count;\n    }\n\n    if (current > event.item.count) {\n      current = 1;\n    }\n\n    console.log('Текущий слайд: ', current);\n    console.log('Количество слайдов: ', event.item.count);\n    console.log('Количество страниц: ', size);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initCarousel);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initCarousel.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initMap.js":
/*!***************************************************!*\
  !*** ./src/_template/_source/js/parts/initMap.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initMap = function initMap() {\n  var w = $(window).width();\n  var zm = 14;\n  var coords = [51.661953505612296, 39.14955035581963];\n\n  if (w < 768) {\n    coords = [51.661953505612296, 39.14955035581963];\n  }\n\n  ymaps.ready(init);\n\n  function init() {\n    var myMap = new ymaps.Map(\"map\", {\n      // Координаты центра карты.\n      // Порядок по умолчанию: «широта, долгота».\n      // Чтобы не определять координаты центра карты вручную,\n      // воспользуйтесь инструментом Определение координат.\n      center: coords,\n      // Уровень масштабирования. Допустимые значения:\n      // от 0 (весь мир) до 19.\n      zoom: zm,\n      controls: ['zoomControl']\n    });\n    myMap.behaviors.disable('scrollZoom');\n    var myPlacemark = new ymaps.Placemark(coords, {\n      hintContent: '',\n      balloonContent: 'АВТОМИР БОГЕМИЯ ВОРОНЕЖ'\n    }, {\n      // Опции.\n      // Необходимо указать данный тип макета.\n      iconLayout: 'default#image',\n      // Своё изображение иконки метки.\n      iconImageHref: 'img/map-marker.svg',\n      // Размеры метки.\n      iconImageSize: [30, 45],\n      // Смещение левого верхнего угла иконки относительно\n      // её \"ножки\" (точки привязки).\n      iconImageOffset: [-15, -23]\n    });\n    myMap.geoObjects.add(myPlacemark);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMap);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initMap.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initMenu.js":
/*!****************************************************!*\
  !*** ./src/_template/_source/js/parts/initMenu.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initMenu = function initMenu() {\n  $('.js-slide-menu').on('click', function (e) {\n    $('.js-menu').toggleClass('js-menu-active');\n    $(this).toggleClass('hamgurber-active');\n  });\n  $('.js-close-menu').on('click', function (e) {\n    $('.js-menu').removeClass('js-menu-active');\n    $('.hamburger').removeClass('hamgurber-active');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenu);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initMenu.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initPopup.js":
/*!*****************************************************!*\
  !*** ./src/_template/_source/js/parts/initPopup.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initPopup = function initPopup() {\n  var down = false;\n  $('.js-call-popup').on('click', function (e) {\n    e.preventDefault();\n    $('html').css('overflow', 'hidden');\n    var $target = $(this).attr('data-target');\n    var $popup = $('#' + $target);\n    var $block = $popup.find('.popup');\n    $popup.fadeIn(500);\n    $block.addClass('popup-anim');\n  });\n  $('.js-popup-close').on('click', function () {\n    $('html').css('overflow', '');\n    var $popup = $(this).closest('.popup-wrapper');\n    $popup.fadeOut(500);\n    $(this).closest('.popup').removeClass('popup-anim');\n  });\n  $(document).mousedown(function (e) {\n    var div = $(\".popup\");\n\n    if (!div.is(e.target) && div.has(e.target).length === 0) {} else {\n      down = true;\n    }\n  });\n  $(document).mouseup(function (e) {\n    var div = $(\".popup\");\n\n    if (!div.is(e.target) && div.has(e.target).length === 0 && !down) {\n      $('html').css('overflow', '');\n      $(div).removeClass('popup-anim');\n      var $popup = $('.popup-wrapper');\n      $popup.fadeOut(500);\n    }\n\n    down = false;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initPopup);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initPopup.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initSelector.js":
/*!********************************************************!*\
  !*** ./src/_template/_source/js/parts/initSelector.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initSelector = function initSelector() {\n  $('body').on('click', '.selector', function (e) {\n    if ($(window).width() > 768 && !$(this).hasClass('selector_disabled')) {\n      var $this = $(this);\n      var set = 0;\n      var list = $(this).find('.selector__list');\n\n      if (list.css('display') == 'block') {\n        set = 1;\n      }\n\n      e.stopPropagation();\n      $('.selector .selector__list').fadeOut(0).removeClass('selector-picked');\n\n      if (set) {\n        list.fadeOut(0);\n      } else {\n        list.fadeIn(0);\n        var currHeight = $(window).height();\n        var scrollTop = $(window).scrollTop();\n        var elemTop = $this.offset().top;\n        var distance = elemTop - scrollTop;\n\n        if (distance > currHeight / 1.5) {\n          list.css('top', 'initial');\n          list.css('bottom', '100%');\n        } else {\n          list.css('bottom', 'initial');\n          list.css('top', '100%');\n        }\n      }\n    }\n  });\n  $('select').on('change', function (e) {\n    var parent = $(this).parent();\n\n    if (parent.hasClass('selector')) {\n      if ($(this).val()) {\n        parent.find('.js-selector-value').html($(this).val());\n      } else {\n        parent.find('.js-selector-value').html(parent.find('option[value=\"\"]').text() + ' ');\n      }\n    }\n\n    if (parent.hasClass('selector_remote')) {\n      $(parent.data('target')).val($(this).val()).trigger('change');\n    }\n\n    if ($(this).prop('selectedIndex') > 0 && parent.hasClass(\"selector_designed\")) {\n      parent.addClass(\"selector_changed\");\n    } else {\n      parent.removeClass(\"selector_changed\");\n    }\n  });\n  $('body').on('click', '.selector__item', function (e) {\n    if ($(window).width() > 768) {\n      var parent = $(this).closest('.selector');\n      parent.find('.js-selector-value').html($(this).text());\n      var index = $(this).attr('data-value');\n      parent.find('select').val(index).trigger('change');\n\n      if ($(this).index() > 0 && parent.hasClass(\"selector_designed\")) {\n        parent.addClass(\"selector_changed\");\n      } else {\n        parent.removeClass(\"selector_changed\");\n      }\n    }\n  });\n  $(document).click(function () {\n    clear();\n  });\n\n  function clear() {\n    $('.selector .selector__list').fadeOut(0);\n    $('.wrapper').removeClass('container-shadow');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initSelector);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initSelector.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initStarSelector.js":
/*!************************************************************!*\
  !*** ./src/_template/_source/js/parts/initStarSelector.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initStarSelector = function initStarSelector() {\n  $('body').on('click', '.js-set-star', function () {\n    var currIndex = $(this).index();\n    var input = $(this).closest('.js-setstar').find('.setstar-input');\n    var stars = $(this).closest('.js-setstar').find('.js-set-star');\n    input.val(currIndex + 1);\n    stars.each(function (i, elem) {\n      if (i <= currIndex) {\n        $(elem).addClass('star-selector__item_active');\n      } else {\n        $(elem).removeClass('star-selector__item_active');\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initStarSelector);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initStarSelector.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initToggler.js":
/*!*******************************************************!*\
  !*** ./src/_template/_source/js/parts/initToggler.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initToggler = function initToggler() {\n  $('.js-slide-toggle').on('click', function () {\n    $('.js-content').slideToggle(250);\n    $(this).toggleClass('arrower_active');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initToggler);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initToggler.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/mask.js":
/*!************************************************!*\
  !*** ./src/_template/_source/js/parts/mask.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initMask() {\n  $(\".js-phone-mask\").mask(\"+7 (000) 000-00-00\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMask);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/mask.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/navLinks.js":
/*!****************************************************!*\
  !*** ./src/_template/_source/js/parts/navLinks.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar navLinks = function navLinks() {\n  $('.js-nav-link').on('click', function () {\n    $('html, body').animate({\n      scrollTop: $($(this).data('target')).offset().top\n    }, 500);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navLinks);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/navLinks.js?");

/***/ })

/******/ });