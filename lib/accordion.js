(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("accordion", [], factory);
	else if(typeof exports === 'object')
		exports["accordion"] = factory();
	else
		root["accordion"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ATTR_OPEN = 'data-open';

  /**
   * Accordion feature class.
   */

  var Accordion = function (_base$features$Featur) {
    _inherits(Accordion, _base$features$Featur);

    function Accordion() {
      _classCallCheck(this, Accordion);

      return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
    }

    _createClass(Accordion, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        var $toggles = this.$$('.' + this.options.itemClass + ' > .' + this.options.itemToggleClass);
        this.addEventListener($toggles, 'click', this._clickListener());
        this.addEventListener(window, 'resize', this._resizeListener());

        window.setTimeout(function () {
          _this2._openByStates();
        }, this.options.initialStatesOpeningDelay);
      }
    }, {
      key: 'isItemOpen',
      value: function isItemOpen($item) {
        return $item.classList.contains(this.options.openItemClass);
      }
    }, {
      key: 'toggleItem',
      value: function toggleItem($item) {
        if (this.isItemOpen($item)) {
          this.closeItem($item);
        } else {
          this.openItem($item);
        }
      }
    }, {
      key: 'openItem',
      value: function openItem($item) {
        var _this3 = this;

        $item.classList.add(this.options.openItemClass);
        this._updateContentHeight($item);

        if (!this.options.multipleItemsOpen) {
          this._getOpenItems().forEach(function ($openItem) {
            if ($openItem !== $item) _this3.closeItem($openItem);
          });
        }

        this.trigger('opened', $item);
      }
    }, {
      key: 'closeItem',
      value: function closeItem($item) {
        $item.classList.remove(this.options.openItemClass);
        this._updateContentHeight($item);
        this.trigger('closed', $item);
      }
    }, {
      key: '_getOpenItems',
      value: function _getOpenItems() {
        var $openItems = [].concat(_toConsumableArray(this.$$('.' + this.options.itemClass + '.' + this.options.openItemClass)));
        return $openItems;
      }
    }, {
      key: '_openByStates',
      value: function _openByStates() {
        var _this4 = this;

        var $items = [].concat(_toConsumableArray(this.$$('.' + this.options.itemClass + ':not(' + this.options.openItemClass + ')[' + ATTR_OPEN + ']')));

        $items.forEach(function ($item) {
          _this4.openItem($item);
        });
      }
    }, {
      key: '_updateAllOpenContentHeights',
      value: function _updateAllOpenContentHeights() {
        var _this5 = this;

        this._getOpenItems().forEach(function ($openItem) {
          _this5._updateContentHeight($openItem);
        });

        // reset the updating property so we can
        // capture the next resize event
        this._updatingContentHeights = false;
      }
    }, {
      key: '_updateContentHeight',
      value: function _updateContentHeight($item) {
        var height = 0;
        var $content = $item.querySelector('.' + this.options.itemContentClass);
        var $inner = $content.querySelector('.' + this.options.itemContentInnerClass);

        if ($item.classList.contains(this.options.openItemClass)) {
          height = $inner.offsetHeight;
        }

        $content.style.height = height + 'px';
      }
    }, {
      key: '_resizeListener',
      value: function _resizeListener() {
        var _this6 = this;

        return function (e) {
          if (!_this6._updatingContentHeights) {
            _this6._updatingContentHeights = true;
            base.utils.func.rAF(_this6._updateAllOpenContentHeights.bind(_this6));
          }
        };
      }
    }, {
      key: '_clickListener',
      value: function _clickListener() {
        var _this7 = this;

        return function (e) {
          if (e.target.nodeName.toLowerCase() !== 'a') {
            e.preventDefault();
            _this7.toggleItem(e.currentTarget.closest('.' + _this7.options.itemClass));
          }
        };
      }
    }]);

    return Accordion;
  }(base.features.Feature);

  Accordion.defaultOptions = {
    multipleItemsOpen: true,
    initialStatesOpeningDelay: 150,
    itemClass: 'item',
    itemToggleClass: 'header',
    itemContentClass: 'content',
    itemContentInnerClass: 'inner',
    openItemClass: '-open'
  };

  exports.default = Accordion;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=accordion.js.map