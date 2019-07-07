module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/exclusive.js":
/*!****************************!*\
  !*** ./pages/exclusive.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/amp */ "next/amp");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/chitrang/exclusive_amp/pages/exclusive.js";





var exclusive = function exclusive(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "prerender",
    href: "https://www.thesouledstore.com/exclusive",
    crossorigin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-accordion",
    src: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
    "amp-custom": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\n                \n                @media screen and (min-width: 320px)\n                    {\n                        html{\n                            scroll-behavior:smooth;\n                        }\n                        .container_exclusive_banner {\n                            background-color: #52bdae;\n                            display: block;\n                            font-family:Source Sans Pro, sans-serif;\n                            width:100%;\n                            margin: auto;\n                        }\n\n                        .right_teal{\n                            display:flex;\n                        }\n                        .left_teal{\n                            display:block;\n                            padding-top:5%;\n                        }\n                        .teal_banner_line1{\n                            display:block;\n                            width:100%;  \n                            text-align:center;\n                            font-size: 18px;\n                            color:white;\n                            padding-top:7%;\n                        }\n                        .teal_banner_line2{\n                            width:100%;\n                            text-align:center;\n                            color:white;\n                            font-size: 18px;\n                            display:block;\n                        }\n                        .teal_banner_line3{\n                            font-size:1.7em;\n                            width:100%;\n                            text-align:center;\n                            display:block;\n                            font-weight: bold;\n                            color:white;\n                        }\n                        .addtocart_cardone{\n                            background-color: white;\n                            display:block;\n                            margin-left:5%;\n                            margin-right:2%;\n                            margin-bottom:5%;\n                            width:45%;\n                            \n                        }\n                        .addtocart_cardtwo{\n                            background-color: white;\n                            display:block;\n                            margin-right:5%;\n                            margin-bottom:5%;\n                            width:45%;\n                        }\n                        .upper_ka_bg{\n                            background-color:#e7e6e6;\n                            display:inline-block;\n                            margin-top:0px;\n                            width:100%;\n                            \n                        }\n                        .upper{\n                            text-align: center;\n                            font-weight: bold;\n                            color: #58595f;\n                            padding:0;\n                            letter-spacing:2%;\n                            font-size:15px;\n                        }\n                        .permonth{\n                            color:black;\n                            text-align: center;\n                            font-size: 12px;\n                            color: #58595f;\n                            font-weight: bold;\n                            letter-spacing: 1px;\n                        }\n                        .instant_access{\n                            color:black;\n                            text-align: center;\n                            font-size: 12px;\n                            color: #58595f;\n                            font-weight: bold;\n                            letter-spacing: 1px;\n                        }\n                        .price{\n                            background-color:#e7e6e6 ;\n                            margin-top:0px;\n                            text-align: center;\n                            font-weight: bold;\n                            margin-bottom:0px;\n                            color: #58595f;\n                            padding: 2% 10% 2% 5%;\n                            letter-spacing: 1px;\n                            font-size: 18px;\n                        }\n                        .addtocart_button{\n                            background-color:#ed3833;\n                            color: white;\n                            padding:8px;\n                            display: block;\n                            margin:auto;\n                            margin-top:10px;\n                            margin-bottom:10px;\n                            border-radius: 6px;\n                            border:none;\n                        }\n                        .brackets_shit{\n                            display:block;\n                            margin:auto;\n                            width:100%;\n                            text-align:center;\n                            font-size:16px;\n                            color:white;\n                            padding-bottom:7%;\n                            font-style:italic;\n                        \n                        }\n                        .container_3buttons{\n                            display:flex;\n                            font-family:Source Sans Pro, sans-serif;\n                            margin-top:7%;\n\n                        }\n                         .benefits_div{\n                            background-color:#e7e6e6;\n                            display:flex;\n                            padding-left:5%;\n                            padding-right:5%;\n                            ffont-family:Source Sans Pro, sans-serif;\n                            border-right:2px solid white;\n                            width:100%;\n                         }\n                         .benefits_div:hover, .price_comp_div:hover, .faqs_div:hover{\n                             border-bottom:2px solid red;\n                         }\n                         .benefits{\n                            text-align:center;\n                            color: #58595f;\n                            font-size:10px;\n                            display:block;\n                            margin:auto;\n                            letter-spacing:2px;\n                            font-weight:bold;\n                         }\n                         .price_comp_div{\n                            background-color:#e7e6e6;\n                            display:flex;\n                            font-family:Source Sans Pro, sans-serif;\n                            padding-left:5%;\n                            padding-right:5%;\n                            padding-top:2%;\n                            padding-bottom:2%;\n                            border-right:2px solid white;\n                            \n                            width:100%;                            \n                         }\n                         .price_comp{\n\n                            text-align:center;\n                            color: #58595f;\n                            font-size:10px;\n                            display:block;\n                            margin:auto;\n                            letter-spacing:2px;\n                            font-weight:bold;\n                         }\n                         .faqs_div{\n\n                            background-color:#e7e6e6;\n                            display:flex;\n                            padding-left:5%;\n                            padding-right:5%;\n                            font-family:Source Sans Pro, sans-serif;\n                            width:100%;\n                         }\n                         .faqs{\n                            text-align:center;\n                            color: #58595f;\n                            font-size:10px;\n                            display:block;\n                            margin:auto;\n                            letter-spacing:2px;\n                            font-weight:bold;  \n                         }\n                         .section_title_wrapper{\n                             text-align:center;\n                             white-space:nowrap;\n                             overflow:hidden;\n                             display:block;\n                             margin-top:5%;\n                             \n                         }\n                         .section_title{\n                            position: relative;\n                            display: inline-block;\n                            font-size: 15px;\n                            letter-spacing: 2px;\n                            font-weight:bold;\n                            color: #ed2d2f;\n                            font-family:Source Sans Pro, sans-serif;\n                            margin-bottom:5%;\n                            z-index:-1;\n                         }\n                         .section_title:before{\n                            right: 100%;\n                            margin-right: 10%;\n                         }\n                         .section_title:after{\n                            left: 100%;\n                            margin-left: 10%;\n                         }\n                         .section_title:before, .section_title:after{\n                            content: \"\";\n                            position: absolute;\n                            top: 50%;\n                            width: 9999px;\n                            height: 10px;\n                            background-image: initial;\n                            background-position-x: initial;\n                            background-position-y: initial;\n                            background-size: initial;\n                            background-repeat-x: initial;\n                            background-repeat-y: initial;\n                            background-attachment: initial;\n                            background-origin: initial;\n                            background-clip: initial;\n                            background-color: rgb(203, 80, 87);\n                         }\n                         .table_wrapper{\n                            display:block;\n                            font-family:Source Sans Pro, sans-serif;\n                            width:100%;\n                            margin-left:7.7%;\n                            margin-top:6%;\n                            \n                         }\n                         table{\n                            border-collapse: collapse;\n                            border: 5px solid #52bdae;\n                            width:95%;\n                            margin:-5%;\n                            overflow:auto;\n                         }\n                         td,th{\n                             border:1px solid black;\n                             text-align:center;\n                             font-size:10px;\n                             padding:4%;\n                         }\n                         .red_prices{\n                             color: #ed2d2f\n                         }\n                         .faqs_footer{\n                            font-family:Source Sans Pro, sans-serif;\n                         }\n                         header{\n                             font-size:12px;\n                             padding:2%;\n                         }\n                         .faq_content{\n                            font-size:10px;\n                            padding:2%;\n                            letter-spacing:1px; \n                            color:#5f7082;\n                         }\n                         div.sticky_soul_red{ \n                            \n                            background-color:#ed2d2f;\n                            position:fixed;\n                            width:100%;\n                            height:2.9%;\n                            top:0;\n                         }\n                         div.sticky_soul_white{\n                            background-color:white;\n                            position:fixed;\n                            width:100%;\n                            height:10%;\n                            right:0;\n                            top:0;\n                         }\n                         amp-img.sticky_soul{\n                            position:fixed;\n                            top:5px;\n                            display:flex;\n                            margin-left:40%;\n                            z-index:3;\n                         }    \n                         a{\n                             text-decoration:none;\n                         }\n                         a:visited{\n                             color:#58595f;\n                         }\n                         a:active{\n                            color:#58595f;\n                         }\n                         a:hover{\n                            color:#58595f;\n                         }\n                         a:link{\n                            color:#58595f;\n                         }\n                         .darius_gif{\n                             margin-top:20%;\n                             margin-bottom:10%;\n                             display:block;\n                             z-index:-1;\n                             \n                         }\n                         .banners{\n                            z-index:-1;\n                            display:block;\n                            margin-bottom:5%;\n                         }\n                    }\n                \n                ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "sticky_soul_white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "sticky_soul_red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-img", {
    class: "sticky_soul",
    src: "https://images.thesouledstore.com/public/theSoul/storage/tss-logos/exclusive-logo_Black.png",
    width: "80",
    height: "52",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-img", {
    layout: "responsive",
    class: "darius_gif",
    width: "320px",
    height: "400px",
    src: "https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/darius_gif.gif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "container_exclusive_banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "left_teal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "teal_banner_line1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, " BECOME AN EXCLUSIVE MEMBER "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "teal_banner_line2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, " AT AN "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "teal_banner_line3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, " INTRODUCTORY PRICE "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "right_teal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "addtocart_cardone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "upper_ka_bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "upper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, " MONTHLY "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "upper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, " MEMBERSHIP ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "permonth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, "Rs. 149/- pm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "instant_access",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, "Get instant access for a full month."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    class: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, "@ Rs. 149/-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.thesouledstore.com/exclusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    class: "addtocart_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, "ADD TO CART"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "addtocart_cardtwo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "upper_ka_bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "upper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, " ANNUAL "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "upper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, " MEMBERSHIP ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "permonth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, "Rs. 25/- pm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "instant_access",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, "Get instant access for a full year."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    class: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, "@ Rs. 299/-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.thesouledstore.com/exclusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    class: "addtocart_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, "ADD TO CART")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "brackets_shit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, "(Adding membership to cart will unlock Exclusive prices instantly.)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "container_3buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "benefits_div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "benefits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#benefits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, " BENEFITS"), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "price_comp_div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "price_comp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#price_comparison",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, " PRICE COMPARISON "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "faqs_div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faqs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#faqs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, "FAQS"), " "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "section_title_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "benefits",
    class: "section_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, "BENEFITS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-img", {
    class: "banners",
    src: "https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/website-banners_mobile_Discounted-prices.jpg",
    width: "320px",
    height: "300px",
    layout: "responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-img", {
    class: "banners",
    src: "https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/website-banners_mobile_priortised.jpg",
    width: "320px",
    height: "300px",
    layout: "responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-img", {
    class: "banners",
    src: "https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/website-banners_mobile_early-access1.jpg",
    width: "320px",
    height: "300px",
    layout: "responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-img", {
    class: "banners",
    src: "https://images.thesouledstore.com/public/theSoul/storage/exclusive-landing-pages-images/website-banners_mobile_freedelivery.jpg",
    width: "320px",
    height: "300px",
    layout: "responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "section_title_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "price_comparison",
    class: "section_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, "PRICE COMPARISON")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "table_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, "PRODUCT"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, "CURRENT PRICE"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, "EXCLUSIVE PRICES"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "T-SHIRTS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 499 - Rs. 699"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 199 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "T-SHIRT DRESSES"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 599 - Rs. 699"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 349 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "FULL SLEEVE T-SHIRTS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 599"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 399 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "TANK TOPS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 349 - Rs. 399"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 249 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "VESTS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 399"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 249 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Boxers"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 399"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 199 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "BACKPACKS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 899 - Rs. 999"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 599 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "MOBILE COVERS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 299 - Rs. 599"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 299 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "HOODIES"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 949"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 599 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "SOCKS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 249"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 99 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "NOTEBOOKS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 199"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 99 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "MUGS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 249 - Rs. 499"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 199 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "BADGES"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 49"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 19 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "STICKERS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 49"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 19 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "PINS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 149"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 79 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "FLIP FLOPS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 499"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 199 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "CAPS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 699"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 199 onwards")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "KEYCHAINS"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 149"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    class: "red_prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "Rs. 79 onwards"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "section_title_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    class: "section_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, "FAQS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "faqs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-accordion", {
    animate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Is the fee all inclusive?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, "The annual/ monthly introductory offer of Rs. 299/ 149 is excl. GST. The Souled Store may revise this annual/ monthly fee at any time, without prior intimation. However, such price change will not anyone who has already purchased the membership.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, "Are all t-shirts available at Rs. 399?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, "Most t-shirts are priced at Rs. 399, but we also have some tees starting as low as Rs. 199! Make sure you regularly check out our website and social media to see what offers we\u2019re running for Exclusive members. Please note that some t-shirts and jerseys might be priced differently, based on the artist preference (they take the final call), design, and quality of the product.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, "Do I need to buy the membership before I start getting discounts?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "Nope. The moment you add the Exclusive membership to your cart, you unlock discounted prices. In your first order itself (the one that contains the membership), you can start shopping at Exclusive prices, and recover your entire yearly membership fee in no time. Go get yours now! We will keep adding new benefits round the year- regularly check our website/ social media for updates.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, "How long do these benefits last?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, "All benefits associated with The Souled Store Exclusive are available for a year/ month, depending on which membership you opt for.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, "Are all products available on discount to members?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, "Yes, all products on the website will be available at a discounted rate to members. If a product is available at a discounted rate to non-members, it\u2019ll be available to members at the same (or lower) rate. Basically, you NEVER pay full price again.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, "Will I be charged for gift wrapping?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, "Yes, gift wrapping charges will be applicable.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, "What if I want to cancel my membership mid-way?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, "The Exclusive membership is non-refundable and non-transferable. Your annual/ monthly membership may be cancelled by The Souled Store in case of misuse, in which event your last annual/ monthly fee shall be refunded to you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "Will there be any shipping charges?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, "No. All Exclusive members get free shipping on all deliveries. Our minimum order value is Rs. 245. As long as you hit that, shipping is on us.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, "Can I club the Exclusive discount with other offers?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, "No additional discounts can be availed on our products when using the Exclusive discount. With products available at massive discounts to Exclusive members, you won\u2019t even feel the need to add more discounts!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    class: "faqs_footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, "WHY didn\u2019t you guys launch this earlier? Ahhh!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "faq_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, "Honestly, we\u2019re not sure either. But better late than never!"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_amp__WEBPACK_IMPORTED_MODULE_0__["withAmp"])(exclusive, {
  hybrid: true
}));

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/exclusive.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chitrang/exclusive_amp/pages/exclusive.js */"./pages/exclusive.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/amp":
/*!***************************!*\
  !*** external "next/amp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/amp");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=exclusive.js.map