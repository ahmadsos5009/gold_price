(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ CurrencyCode; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CountryCode; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ constants_Store; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ constants_History; });

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/constants/currency_codes.ts
/* harmony default export */ var currency_codes = (["ALL", "XCD", "EUR", "BBD", "BTN", "BND", "XAF", "CUP", "USD", "FKP", "GIP", "HUF", "IRR", "JMD", "AUD", "LAK", "LYD", "MKD", "XOF", "NZD", "OMR", "PGK", "RWF", "WST", "RSD", "SEK", "TZS", "AMD", "BSD", "BAM", "CVE", "CNY", "CRC", "CZK", "ERN", "GEL", "HTG", "INR", "JOD", "KRW", "LBP", "MWK", "MRO", "MZN", "ANG", "PEN", "QAR", "STD", "SLL", "SOS", "SDG", "SYP", "AOA", "AWG", "BHD", "BZD", "BWP", "BIF", "KYD", "COP", "DKK", "GTQ", "HNL", "IDR", "ILS", "KZT", "KWD", "LSL", "MYR", "MUR", "MNT", "MMK", "NGN", "PAB", "PHP", "RON", "SAR", "SGD", "ZAR", "SRD", "TWD", "TOP", "VEF", "DZD", "ARS", "AZN", "BYR", "BOB", "BGN", "CAD", "CLP", "CDF", "DOP", "FJD", "GMD", "GYD", "ISK", "IQD", "JPY", "KPW", "CHF", "MGA", "MDL", "MAD", "NPR", "NIO", "PKR", "PYG", "SHP", "SCR", "SBD", "LKR", "THB", "TRY", "AED", "VUV", "YER", "AFN", "BDT", "BRL", "KHR", "KMF", "HRK", "DJF", "EGP", "ETB", "XPF", "GHS", "GNF", "HKD", "KES", "KGS", "LRD", "MOP", "MVR", "MXN", "NAD", "NOK", "PLN", "RUB", "SZL", "TJS", "TTD", "UGX", "UYU", "VND", "TND", "UAH", "UZS", "TMT", "GBP", "BMD"]);
// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/country_currency_data.json
var country_currency_data = __webpack_require__(31);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/Store.json
var Store = __webpack_require__(32);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/History.json
var History = __webpack_require__(33);

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/constants/index.ts




var CurrencyCode = currency_codes;
var CountryCode = country_currency_data;
var constants_Store = Store;
var constants_History = History;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("country-data");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

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

var _requireUniversalModule = __webpack_require__(54);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(56);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(57);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(19);

var _helpers = __webpack_require__(58);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
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

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(53)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(19);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(55)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(7);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(13);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(8);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/index.ts + 1 modules
var constants = __webpack_require__(2);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(3);

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/price/PriceTable.tsx





function calculate_price_per_unit(price, unit) {
  return (unit * price).toFixed(2);
}

var PriceTable_PriceTable = function PriceTable(_ref) {
  var price = _ref.price,
      countryCurrency = _ref.countryCurrency;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])('translations'),
      _useTranslation2 = slicedToArray_default()(_useTranslation, 1),
      t = _useTranslation2[0];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Table"], {
    striped: true,
    bordered: true,
    hover: true,
    responsive: true
  }, /*#__PURE__*/external_react_default.a.createElement("thead", null, /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("th", {
    colSpan: 2
  }, t("purity"), " ", countryCurrency))), /*#__PURE__*/external_react_default.a.createElement("tbody", null, /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("th", null, t("tableUnit")), /*#__PURE__*/external_react_default.a.createElement("th", null, t("tablePrice"))), /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("td", null, "24K"), /*#__PURE__*/external_react_default.a.createElement("td", null, price.toFixed(2))), /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("td", null, "22K"), /*#__PURE__*/external_react_default.a.createElement("td", null, calculate_price_per_unit(price, 0.9167))), /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("td", null, "21K"), /*#__PURE__*/external_react_default.a.createElement("td", null, calculate_price_per_unit(price, 0.875))), /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("td", null, "18K"), /*#__PURE__*/external_react_default.a.createElement("td", null, calculate_price_per_unit(price, 0.75)))), /*#__PURE__*/external_react_default.a.createElement("caption", null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Badge"], {
    variant: "dark"
  }, t("badgePriceTable")))));
};

/* harmony default export */ var price_PriceTable = (PriceTable_PriceTable);
// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/price/PriceWeight.tsx





function calculate_price_per_weight(price, weight) {
  return (weight * price).toFixed(2);
}

var PriceWeight_PriceWeight = function PriceWeight(_ref) {
  var price = _ref.price;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])('translations'),
      _useTranslation2 = slicedToArray_default()(_useTranslation, 1),
      t = _useTranslation2[0];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Table"], {
    striped: true,
    bordered: true,
    hover: true,
    responsive: true
  }, /*#__PURE__*/external_react_default.a.createElement("thead", null, /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("th", {
    colSpan: 2
  }, t('weightTableHeader')))), /*#__PURE__*/external_react_default.a.createElement("tbody", null, /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("th", null, t('weightTableWeight')), /*#__PURE__*/external_react_default.a.createElement("th", null, t('tablePrice'))), /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("td", null, t('gram')), /*#__PURE__*/external_react_default.a.createElement("td", null, price.toFixed(2))), /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("td", null, t('ounce')), /*#__PURE__*/external_react_default.a.createElement("td", null, calculate_price_per_weight(price, 31.103))), /*#__PURE__*/external_react_default.a.createElement("tr", null, /*#__PURE__*/external_react_default.a.createElement("td", null, t('kilo')), /*#__PURE__*/external_react_default.a.createElement("td", null, calculate_price_per_weight(price, 1000))))));
};

/* harmony default export */ var price_PriceWeight = (PriceWeight_PriceWeight);
// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/price/Welcome.tsx





var Welcome_Welcome = function Welcome() {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])('translations'),
      _useTranslation2 = slicedToArray_default()(_useTranslation, 1),
      t = _useTranslation2[0];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Alert"], {
    variant: "dark"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Alert"].Heading, null, t("Welcome1")), /*#__PURE__*/external_react_default.a.createElement("p", null, t("Welcome2"), /*#__PURE__*/external_react_default.a.createElement("br", null), t("Welcome3"), /*#__PURE__*/external_react_default.a.createElement("br", null), t("Welcome4")), /*#__PURE__*/external_react_default.a.createElement("hr", null), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("strong", null, t("Welcome5")), /*#__PURE__*/external_react_default.a.createElement("br", null), t("Welcome6"), /*#__PURE__*/external_react_default.a.createElement("br", null), t("Welcome7")));
};

/* harmony default export */ var price_Welcome = (Welcome_Welcome);
// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/price/PriceTag.tsx


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-family: Lato,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  line-height: 1.3!important;\n  font-size: 1.3rem;\n  font-weight: 900;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PriceHeader = external_styled_components_default.a.h2(_templateObject());

var PriceTag_SVG = function SVG(_ref) {
  var price = _ref.price,
      different = _ref.different,
      color = _ref.color,
      _ref$flip = _ref.flip,
      flip = _ref$flip === void 0 ? "" : _ref$flip;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      alignContent: "center"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(PriceHeader, null, /*#__PURE__*/external_react_default.a.createElement("strong", {
    style: {
      marginRight: "5px"
    }
  }, price), /*#__PURE__*/external_react_default.a.createElement("svg", {
    viewBox: "0 0 12 12",
    width: "16",
    height: "16"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M6,0.002L0 6.002 4.8 6.002 4.8 11.9996 7.2 11.9996 7.2 6.002 12 6.002z",
    transform: flip,
    fill: color
  }), /*#__PURE__*/external_react_default.a.createElement("text", {
    x: "10",
    y: "54"
  }, different)), /*#__PURE__*/external_react_default.a.createElement("strong", {
    style: {
      marginLeft: "5px",
      color: color
    }
  }, different)));
};

var PriceTag_PriceTag = function PriceTag(_ref2) {
  var previousPrice = _ref2.previousPrice,
      currentPrice = _ref2.currentPrice,
      symbol = _ref2.symbol;

  if (currentPrice < previousPrice) {
    return /*#__PURE__*/external_react_default.a.createElement(PriceTag_SVG, {
      price: symbol + currentPrice.toFixed(2),
      different: "\u2212".concat(Math.abs(currentPrice - previousPrice).toFixed(2)),
      color: "#d23f31",
      flip: "scale(1, -1) translate(0, -12)"
    });
  } else {
    return /*#__PURE__*/external_react_default.a.createElement(PriceTag_SVG, {
      price: symbol + currentPrice.toFixed(2),
      different: "+".concat(Math.abs(currentPrice - previousPrice).toFixed(2)),
      color: "#28a745"
    });
  }
};

/* harmony default export */ var price_PriceTag = (PriceTag_PriceTag);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(34);

// EXTERNAL MODULE: external "mdbreact"
var external_mdbreact_ = __webpack_require__(35);

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/graph/Chart.tsx







var Chart_ChartsPage = function ChartsPage(_ref) {
  var dates = _ref.dates,
      data = _ref.data,
      price = _ref.price,
      previousPrice = _ref.previousPrice;

  var _useState = Object(external_react_["useState"])({}),
      _useState2 = slicedToArray_default()(_useState, 2),
      dataLine = _useState2[0],
      setDataLine = _useState2[1];

  var _useTranslation = Object(external_react_i18next_["useTranslation"])("translations"),
      _useTranslation2 = slicedToArray_default()(_useTranslation, 1),
      t = _useTranslation2[0];

  Object(external_react_["useEffect"])(function () {
    var backgroundColor;
    var borderColor;
    var pointBackgroundColor;

    if (price > previousPrice) {
      backgroundColor = "rgb(191,227,209,0.4)";
      borderColor = "rgb(191,227,209)";
    } else {
      backgroundColor = "rgba(255, 134,159,0.4)";
      borderColor = "rgba(255, 134,159)";
    }

    setDataLine({
      labels: dates.map(function (timestamp) {
        return new Date(timestamp * 1000).getDate();
      }),
      datasets: [{
        label: "Price History",
        fill: true,
        lineTension: 0.3,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: borderColor,
        pointBackgroundColor: borderColor,
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: borderColor,
        pointHoverBorderColor: pointBackgroundColor,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.map(function (price) {
          return price.toFixed(2);
        })
      }]
    });
  }, [data, dates, price, previousPrice]);
  return /*#__PURE__*/external_react_default.a.createElement(external_mdbreact_["MDBContainer"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_chartjs_2_["Line"], {
    data: dataLine,
    options: {
      responsive: true
    }
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Badge"], {
    variant: "dark"
  }, t("badgeGraph")));
};

/* harmony default export */ var Chart = (Chart_ChartsPage);
// EXTERNAL MODULE: external "country-data"
var external_country_data_ = __webpack_require__(6);
var external_country_data_default = /*#__PURE__*/__webpack_require__.n(external_country_data_);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/country/ar.json
var ar = __webpack_require__(36);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/country/de.json
var de = __webpack_require__(37);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/country/es.json
var es = __webpack_require__(38);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/country/fr.json
var fr = __webpack_require__(39);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/country/zh.json
var zh = __webpack_require__(40);

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/country/index.tsx





var CountryDictionary = {
  "ara": ar,
  "deu": de,
  "spa": es,
  "fra": fr,
  "zho": zh
};
/* harmony default export */ var country = (CountryDictionary);
// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/currency/ar.json
var currency_ar = __webpack_require__(41);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/currency/de.json
var currency_de = __webpack_require__(42);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/currency/es.json
var currency_es = __webpack_require__(43);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/currency/fr.json
var currency_fr = __webpack_require__(44);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/currency/zh.json
var currency_zh = __webpack_require__(45);

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/constants/languages/currency/index.tsx





var CurrencyDictionary = {
  "ara": currency_ar,
  "deu": currency_de,
  "spa": currency_es,
  "fra": currency_fr,
  "zho": currency_zh
};
/* harmony default export */ var languages_currency = (CurrencyDictionary);
// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/price/index.tsx



function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  color: #343a40;\n  font-weight: 400;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  font-family: Lato,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  line-height: 1.3!important;\n  font-size: 1.9rem;\n  font-weight: 700;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function price_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n   background-color: #f5f5fa;\n"]);

  price_templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















var Wight;

(function (Wight) {
  Wight["gram"] = "gram";
  Wight["ounce"] = "ounce";
  Wight["kilo"] = "kilo";
})(Wight || (Wight = {}));

var StyledContainer = external_styled_components_default()(external_react_bootstrap_["Container"])(price_templateObject());
var StyledDate = external_styled_components_default.a.span(_templateObject2());
var Header = external_styled_components_default.a.h1(_templateObject3());
var StyledLink = external_styled_components_default()(router_["Link"])(_templateObject4());

var price_Main = function Main(_ref) {
  var price = _ref.price,
      timestamp = _ref.timestamp,
      currency = _ref.currency,
      languageParam = _ref.languageParam;
  var countryCurrency = external_country_data_default.a.currencies[currency].name;
  var code = external_country_data_default.a.currencies[currency].code;
  var countryCode = constants["a" /* CountryCode */][code];
  var countryName = external_country_data_default.a.countries[countryCode].name;
  var countryEmoji = external_country_data_default.a.countries[countryCode].emoji;
  var currencySymbol = external_country_data_default.a.currencies[currency].symbol;
  var updatedTime = new Date(timestamp * 1000).toUTCString();
  var language = external_country_data_default.a.countries[countryCode].languages[0] || 'en';

  var _useTranslation = Object(external_react_i18next_["useTranslation"])('translations'),
      _useTranslation2 = slicedToArray_default()(_useTranslation, 1),
      t = _useTranslation2[0];

  var _useState = Object(external_react_["useState"])('gram'),
      _useState2 = slicedToArray_default()(_useState, 2),
      wight = _useState2[0],
      setWight = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(price),
      _useState4 = slicedToArray_default()(_useState3, 2),
      wightPrice = _useState4[0],
      setWightPrice = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(constants["c" /* History */].data[currency]),
      _useState6 = slicedToArray_default()(_useState5, 2),
      history = _useState6[0],
      setHistory = _useState6[1];

  var handleWightClick = Object(external_react_["useCallback"])(function (e) {
    e.preventDefault();
    setWight(e.currentTarget.value);

    switch (e.currentTarget.value) {
      case Wight.gram:
        setWightPrice(price);
        setHistory(constants["c" /* History */].data[currency]);
        return;

      case Wight.ounce:
        setWightPrice(price * 31.103);
        setHistory(constants["c" /* History */].data[currency].map(function (price) {
          return price * 31.103;
        }));
        return;

      case Wight.kilo:
        setWightPrice(price * 1000);
        setHistory(constants["c" /* History */].data[currency].map(function (price) {
          return price * 1000;
        }));
        return;
    }
  }, [currency, price]); //@ts-ignore

  if (language !== "en" && country[languageParam]) {
    //@ts-ignore
    countryName = country[languageParam][countryCode]; //@ts-ignore

    countryCurrency = languages_currency[languageParam][code];
  }

  var gramPrice = price.toFixed(2);
  var ouncePrice = (price * 31.103).toFixed(2);
  var kiloPrice = (price * 1000).toFixed(2);
  return /*#__PURE__*/external_react_default.a.createElement(StyledContainer, {
    fluid: true
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_default.a, null, /*#__PURE__*/external_react_default.a.createElement("title", null, trans[languageParam].metaTitle(countryName, countryCode)), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: t("metaDescription", {
      countryName: countryName,
      countryCurrency: countryCurrency
    })
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "Keywords",
    content: t("metaKeywords", {
      countryName: countryName,
      countryCurrency: countryCurrency
    })
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "https://gold-price.ga/".concat(code)
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:description",
    content: t("metaOGDescription", {
      countryName: countryName,
      countryCurrency: countryCurrency,
      code: code,
      ouncePrice: ouncePrice,
      gramPrice: gramPrice,
      kiloPrice: kiloPrice,
      updatedTime: updatedTime
    })
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:title",
    content: t("metaTitle", {
      countryName: countryName
    })
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "product"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:image",
    content: "https://gold-price.ga/log.svg"
  })), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(Header, null, t("header", {
    countryName: countryName
  }), " ", countryEmoji), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xs: 16,
    md: 4
  }, /*#__PURE__*/external_react_default.a.createElement(price_PriceTag, {
    previousPrice: history[history.length - 2],
    currentPrice: wightPrice,
    symbol: currencySymbol
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["ButtonGroup"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Button"], {
    variant: "outline-dark",
    value: Wight.gram,
    active: wight === Wight.gram,
    onClick: handleWightClick
  }, t("gram")), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Button"], {
    variant: "outline-dark",
    value: Wight.ounce,
    active: wight === Wight.ounce,
    onClick: handleWightClick
  }, t("ounce")), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Button"], {
    variant: "outline-dark",
    value: Wight.kilo,
    active: wight === Wight.kilo,
    onClick: handleWightClick
  }, t("kilo")))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(StyledDate, {
    className: "mr-auto"
  }, t("update", {
    updatedTime: updatedTime
  })))), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "show-grid"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xs: 16,
    md: 4
  }, /*#__PURE__*/external_react_default.a.createElement(price_PriceTable, {
    price: wightPrice,
    countryCurrency: countryCurrency
  })), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xs: 12,
    md: 4
  }, /*#__PURE__*/external_react_default.a.createElement(price_PriceWeight, {
    price: price
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "show-grid"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    xs: 12,
    md: 8
  }, /*#__PURE__*/external_react_default.a.createElement(Chart, {
    dates: constants["c" /* History */].date,
    data: history,
    price: wightPrice,
    previousPrice: history[history.length - 2]
  }))), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "show-grid"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement(price_Welcome, null))), /*#__PURE__*/external_react_default.a.createElement("hr", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(StyledLink, {
    to: "/currencies"
  }, t("currenciesPage")), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null));
};

/* harmony default export */ var components_price = __webpack_exports__["a"] = (price_Main);
var trans = {
  en: {
    metaTitle: function metaTitle(countryName, code) {
      return "Gold Price in ".concat(countryName, " - Ounce Gram Kilo Gold Rate in ").concat(code);
    },
    metaDescription: "Gold rate in {{countryName}}. Current price of Ounce Gram Kilo is available in {{countryCurrency}} in 24k, 22k, 21k, 18k",
    metaKeywords: "ounce gold rates in {{countryName}},  gram gold rates in {{countryName}}, kilo gold rates in {{countryName}}, \n      gold price in {{countryCurrency}}, gold price per ounce in , today ounce gold rate in {{countryName}} , \n      22k 21k 24k 20k 18k 14k gold price in  {{countryCurrency}} in {{countryName}}, \n      gold price today in {{countryName}}, gold stock price, 24k gold price per gram, 18k gold /gram price, 21k gold price per gram, 21k gold /gram price 24k gold /gram price",
    metaOGDescription: "Gold Price in {{countryName}}. Current price of Ounce Gram Kilo is available in {{countryCurrency}} in 24k, 22k, 23k, 21k, 20k, 18k .   \n      We are providing the latest rates in the current exchange rate of {{countryCurrency}}.  \n      Today gold price per Ounce =  {{ouncePrice}} {{code}}, Today gold price per Gram =  {{gramPrice}} {{code}}, Today gold price per Kilo =  {{kiloPrice}} {{code}}, updated at {{updatedTime}}."
  },
  ara: {
    metaTitle: function metaTitle(countryName, code) {
      return "\u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A ".concat(countryName, " - ").concat(code, " \u0633\u0639\u0631 \u0623\u0648\u0642\u064A\u0629 \u062C\u0631\u0627\u0645 \u0643\u064A\u0644\u0648 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A");
    },
    metaDescription: "سعر الذهب في {{countryName}}. السعر الحالي للجرام أوقية كيلو متاح في {{countryCurrency}} في 24 قيراط ، 22 قيراط ، 21 ك ، 18 قيراط",
    metaKeywords: "\u0623\u0633\u0639\u0627\u0631 \u0623\u0648\u0642\u064A\u0629 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}},  \u0623\u0633\u0639\u0627\u0631 \u062C\u0631\u0627\u0645 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}}, \u0623\u0633\u0639\u0627\u0631 \u0643\u064A\u0644\u0648 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}}, \n      \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryCurrency}}, \u0633\u0639\u0631 \u0623\u0648\u0646\u0635\u0629 \u0627\u0644\u0630\u0647\u0628 , \u0627\u0644\u064A\u0648\u0645 \u0633\u0639\u0631 \u0623\u0648\u0642\u064A\u0629 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}} , \n      \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 22 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 \u0639\u064A\u0627\u0631 24 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 \u0639\u064A\u0627\u0631 18 \u0641\u064A  {{countryCurrency}} \u0641\u064A {{countryName}}, \n      \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u064A\u0648\u0645 \u0628\u0640 {{countryName}}, \u0633\u0639\u0631 \u0633\u0647\u0645 \u0627\u0644\u0630\u0647\u0628 , \u0633\u0639\u0631 \u062C\u0631\u0627\u0645 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 24 , \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 18 \u0644\u0644\u062C\u0631\u0627\u0645 \u060C \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 21 \u0644\u0644\u062C\u0631\u0627\u0645 \u060C \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 21 \u0644\u0644\u062C\u0631\u0627\u0645 \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 \u0662\u0664 / \u0627\u0644\u062C\u0631\u0627\u0645",
    metaOGDescription: "\u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}}. \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u062D\u0627\u0644\u064A \u0644\u0644\u062C\u0631\u0627\u0645 \u0623\u0648\u0642\u064A\u0629 \u0643\u064A\u0644\u0648 \u0645\u062A\u0627\u062D \u0641\u064A {{countryCurrency}} \u0641\u064A 24 \u0642\u064A\u0631\u0627\u0637 \u060C 22 \u0642\u064A\u0631\u0627\u0637 \u060C 23 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 \u060C 21 \u0643 \u060C 20 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 \u060C 18 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 .   \n      \u0646\u062D\u0646 \u0646\u0642\u062F\u0645 \u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0628\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u062D\u0627\u0644\u064A \u0644\u0640 {{countryCurrency}}.  \n      \u0633\u0639\u0631 \u0623\u0648\u0642\u064A\u0629 \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u064A\u0648\u0645 =  {{ouncePrice}} {{code}}, \u0633\u0639\u0631 \u062C\u0631\u0627\u0645 \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u064A\u0648\u0645 =  {{gramPrice}} {{code}}, \u0627\u0644\u064A\u0648\u0645 \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0644\u0644\u0643\u064A\u0644\u0648 =  {{kiloPrice}} {{code}}, \u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0641\u064A {{updatedTime}}."
  },
  deu: {
    metaTitle: function metaTitle(countryName, code) {
      return "Goldpreis in ".concat(countryName, " - Unze Gramm Kilo Gold Rate in ").concat(code);
    },
    metaDescription: "Goldpreis in {{countryName}}. Der aktuelle Preis für Unzen Gramm Kilo ist in {{countryCurrency}} in 24.000, 22.000, 21.000, 18.000 verfügbar",
    metaKeywords: "Unzen Goldraten in {{countryName}}, Gramm Goldraten in {{countryName}}, Kilogoldraten in {{countryName}},\n        Goldpreis in {{countryCurrency}}, Goldpreis pro Unze in, heute Unzen Goldpreis in {{countryName}},\n        22.000 21.000 24.000 20.000 18.000 14.000 Goldpreis in {{countryCurrency}} in {{countryName}},\n        Goldpreis heute in {{countryName}}, Goldaktienpreis, 24.000 Goldpreis pro Gramm, 18.000 Gold / Gramm Preis, 21.000 Goldpreis pro Gramm, 21.000 Gold / Gramm Preis 24.000 Gold / Gramm Preis",
    metaOGDescription: "Goldpreis in {{countryName}}. Der aktuelle Preis f\xFCr Unzen Gramm Kilo ist in {{countryCurrency}} in 24.000, 22.000, 23.000, 21.000, 20.000, 18.000 verf\xFCgbar.\n       Wir bieten die neuesten Kurse zum aktuellen Wechselkurs von {{countryCurrency}}.\n       Heute Goldpreis pro Unze = {{ouncePrice}} {{code}}, Heute Goldpreis pro Gramm = {{gramPrice}} {{code}}, Heute Goldpreis pro Kilo = {{kiloPrice}} {{code}} , aktualisiert um {{updatedTime}}."
  },
  fra: {
    metaTitle: function metaTitle(countryName, code) {
      return "Taux de l'or en ".concat(countryName, ". Le prix actuel de l'Ounce Gram Kilo est disponible en ").concat(code, " en 24k, 22k, 21k, 18k");
    },
    metaDescription: "Taux de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 21k, 18k",
    metaKeywords: "taux de l'once d'or en {{countryName}}, taux du gramme d'or en {{countryName}}, taux du kilo d'or en {{countryName}},\n   prix de l'or en {{countryCurrency}}, prix de l'or par once en, taux de l'once d'or aujourd'hui en {{countryName}},\n   22k 21k 24k 20k 18k 14k prix de l'or en {{countryCurrency}} en {{countryName}},\n   prix de l'or aujourd'hui en {{countryName}}, cours de l'or, prix de l'or 24 carats par gramme, prix or 18 carats / gramme, prix de l'or 21 carats par gramme, prix or 21 carats / gramme prix or / gramme 24 carats",
    metaOGDescription: "Prix de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 23k, 21k, 20k, 18k.\n   Nous fournissons les derniers taux du taux de change actuel de {{countryCurrency}}.\n   Prix de l'or aujourd'hui par once = {{ouncePrice}} {{code}}, prix de l'or aujourd'hui par gramme = {{gramPrice}} {{code}}, prix de l'or aujourd'hui par kilo = {{kiloPrice}} {{code}} , mis \xE0 jour \xE0 {{updatedTime}}."
  },
  zho: {
    metaTitle: function metaTitle(countryName, code) {
      return "".concat(countryName, "\u4E2D\u7684\u9EC4\u91D1\u4EF7\u683C-").concat(code, "\u4E2D\u7684\u76CE\u53F8\u514B\u9EC4\u91D1\u6C47\u7387");
    },
    metaDescription: "{{countryName}}中的黄金汇率。 盎司{克朗货币}}的当前价格为24k，22k，21k，18k",
    metaKeywords: "{{countryName}}\u4E2D\u7684\u76CE\u53F8\u91D1\u4EF7\uFF0C{{countryName}}\u4E2D\u7684\u514B\u91D1\u4EF7\uFF0C{{countryName}}\u4E2D\u7684\u5343\u91D1\u4EF7\uFF0C\n       {{countryCurrency}}\u4E2D\u7684\u9EC4\u91D1\u4EF7\u683C\uFF0C\u6BCF\u76CE\u53F8\u4E2D\u7684\u9EC4\u91D1\u4EF7\u683C\uFF0C{{countryName}}\u4E2D\u7684\u4ECA\u5929\u76CE\u53F8\u9EC4\u91D1\u4EF7\u683C\uFF0C\n       \u5728{{countryName}}\u4E2D{{countryCurrency}}\u4E2D\u768422k 21k 24k 20k 18k 14k\u9EC4\u91D1\u4EF7\u683C\uFF0C\n       {{countryName}}\u4E2D\u7684\u4ECA\u5929\u9EC4\u91D1\u4EF7\u683C\uFF0C\u9EC4\u91D1\u5E93\u5B58\u4EF7\u683C\uFF0C\u6BCF\u514B24k\u9EC4\u91D1\u4EF7\u683C\uFF0C18k\u9EC4\u91D1/\u514B\u4EF7\u683C\uFF0C21k\u9EC4\u91D1\u6BCF\u514B\u4EF7\u683C\uFF0C21k\u9EC4\u91D1/\u514B\u4EF7\u683C24k\u9EC4\u91D1/\u514B\u4EF7\u683C",
    metaOGDescription: "{{countryName}}\u4E2D\u7684\u9EC4\u91D1\u4EF7\u683C\u3002 \u76CE\u53F8\uFF08{{countryCurrency}}}\u7684\u5F53\u524D\u4EF7\u683C\u4E3A24k\uFF0C22k\uFF0C23k\uFF0C21k\uFF0C20k\uFF0C18k\u3002\n       \u6211\u4EEC\u6B63\u5728\u63D0\u4F9B{{countryCurrency}}\u5F53\u524D\u6C47\u7387\u4E2D\u7684\u6700\u65B0\u6C47\u7387\u3002\n       \u4ECA\u5929\u6BCF\u76CE\u53F8\u9EC4\u91D1\u4EF7\u683C= {{ouncePrice}} {{code}}\uFF0C\u4ECA\u5929\u6BCF\u514B\u9EC4\u91D1\u4EF7\u683C= {{gramPrice}} {{code}}\uFF0C\u4ECA\u5929\u6BCF\u516C\u65A4\u9EC4\u91D1\u4EF7\u683C= {{kiloPrice}} {{code}} \uFF0C\u4E8E{{updatedTime}}\u66F4\u65B0\u3002"
  }
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(7);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(8);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "country-data"
var external_country_data_ = __webpack_require__(6);
var external_country_data_default = /*#__PURE__*/__webpack_require__.n(external_country_data_);

// EXTERNAL MODULE: /Users/ahmadsouqi/gold_price/src/constants/index.ts + 1 modules
var constants = __webpack_require__(2);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(46);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(47);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/header/CountrySelect.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

var CountrySelect_formatGroupLabel = function formatGroupLabel(data) {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: groupStyles
  }, /*#__PURE__*/external_react_default.a.createElement("span", null, data.label), /*#__PURE__*/external_react_default.a.createElement("span", null, data.options.length));
};

var selectStyles = {
  control: function control(provided) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      minWidth: 120
    });
  }
};

var CountrySelect_CountrySelect = function CountrySelect(_ref) {
  var countries = _ref.countries;
  var history = Object(router_["useNavigate"])();
  return /*#__PURE__*/external_react_default.a.createElement(external_react_select_default.a, {
    onChange: function onChange(e) {
      return history("/".concat(e.value));
    },
    placeholder: "Search...",
    styles: selectStyles,
    defaultValue: {
      label: "Currency",
      options: []
    },
    options: [{
      label: "Currencies",
      options: countries
    }],
    formatGroupLabel: CountrySelect_formatGroupLabel
  });
};

/* harmony default export */ var header_CountrySelect = (CountrySelect_CountrySelect);
// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(3);

// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/header/LanguagesSelect.tsx





var LanguagesSelect_LanguagesSelect = function LanguagesSelect(_ref) {
  var currency = _ref.currency;

  var _useTranslation = Object(external_react_i18next_["useTranslation"])('translations'),
      _useTranslation2 = slicedToArray_default()(_useTranslation, 1),
      t = _useTranslation2[0];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Dropdown"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Dropdown"].Toggle, {
    variant: "success",
    id: "dropdown-basic"
  }, t('language')), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Dropdown"].Menu, null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Dropdown"].Item, {
    href: "/".concat(currency)
  }, "English"), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Dropdown"].Item, {
    href: "/".concat(currency, "/ara")
  }, "\u0639\u0631\u0628\u0649"), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Dropdown"].Item, {
    href: "/".concat(currency, "/zho")
  }, "\u4E2D\u6587"), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Dropdown"].Item, {
    href: "/".concat(currency, "/fra")
  }, "Fran\xE7aise"), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Dropdown"].Item, {
    href: "/".concat(currency, "/deu")
  }, "Deutsche")));
};

/* harmony default export */ var header_LanguagesSelect = (LanguagesSelect_LanguagesSelect);
// CONCATENATED MODULE: /Users/ahmadsouqi/gold_price/src/components/header/index.tsx


function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n   padding-right: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  background-image: linear-gradient(#fff,#f5f5fa);\n  box-shadow: 0 5px 15px 0 rgba(37,44,97,.15), 0 2px 4px 0 rgba(93,100,148,.2);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var StyledNav = external_styled_components_default()(external_react_bootstrap_["Nav"])(_templateObject());
var StyledNavbar = external_styled_components_default()(external_react_bootstrap_["Navbar"])(_templateObject2());
var Manu = external_styled_components_default.a.div(_templateObject3());

var header_Header = function Header(_ref) {
  var _ref$currency = _ref.currency,
      currency = _ref$currency === void 0 ? "USD" : _ref$currency;
  var countries = constants["b" /* CurrencyCode */].map(function (c) {
    return {
      value: c,
      label: external_country_data_default.a.currencies[c].name
    };
  });
  return /*#__PURE__*/external_react_default.a.createElement(StyledNavbar, {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Navbar"].Brand, {
    href: "/",
    className: "mr-auto"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "/log.svg",
    width: "50",
    height: "50",
    className: "d-inline-block align-top",
    alt: "Gold Price"
  })), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/external_react_default.a.createElement(StyledNav, {
    className: "mr-auto"
  }), /*#__PURE__*/external_react_default.a.createElement(Manu, null, /*#__PURE__*/external_react_default.a.createElement(header_CountrySelect, {
    countries: countries
  })), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"].Divider, null), /*#__PURE__*/external_react_default.a.createElement(header_LanguagesSelect, {
    currency: currency
  })));
};

/* harmony default export */ var header = __webpack_exports__["a"] = (header_Header);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(react_static__WEBPACK_IMPORTED_MODULE_1__["addPrefetchExcludes"])(["dynamic"]);

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Root"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Router"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    path: "*"
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(14);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("/Users/ahmadsouqi/gold_price/node_modules/react-static/lib/browser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "notfound"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notfound"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notfound-404"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The page you are looking for might have been removed had its name changed or is temporarily unavailable."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "home page")));
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var country_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var country_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(country_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var HiddenLink = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject());

var Currencies = function Currencies() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CurrencyCode */ "b"].map(function (currency) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
      key: currency
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/".concat(currency)
    }, country_data__WEBPACK_IMPORTED_MODULE_4___default.a.currencies[currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HiddenLink, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/".concat(currency, "/ara")
    }, country_data__WEBPACK_IMPORTED_MODULE_4___default.a.currencies[currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/".concat(currency, "/zho")
    }, country_data__WEBPACK_IMPORTED_MODULE_4___default.a.currencies[currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/".concat(currency, "/fra")
    }, country_data__WEBPACK_IMPORTED_MODULE_4___default.a.currencies[currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/".concat(currency, "/deu")
    }, country_data__WEBPACK_IMPORTED_MODULE_4___default.a.currencies[currency].name)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Currencies);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$currency = _ref.currency,
      currency = _ref$currency === void 0 ? "USD" : _ref$currency;
  var language = new URLSearchParams(Object(_reach_router__WEBPACK_IMPORTED_MODULE_6__["useLocation"])().search).get("lng");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "alternate",
    hrefLang: "ar",
    href: "https://gold-price.ga".concat(currency, "/ara")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "alternate",
    hrefLang: "zh",
    href: "https://gold-price.ga".concat(currency, "/zho")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "alternate",
    hrefLang: "fr",
    href: "https://gold-price.ga".concat(currency, "/fra")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "alternate",
    hrefLang: "de",
    href: "https://gold-price.ga".concat(currency, "/deu")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    currency: currency
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_price__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    price: _constants__WEBPACK_IMPORTED_MODULE_3__[/* Store */ "d"].prices[currency],
    timestamp: _constants__WEBPACK_IMPORTED_MODULE_3__[/* Store */ "d"].timestamp,
    currency: currency,
    languageParam: language || "en"
  }));
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_7__["useRouteData"])(),
      currency = _useRouteData.currency,
      language = _useRouteData.language;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      i18n = _useTranslation.i18n;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    i18n.changeLanguage(language || "en");
  }, [i18n]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "alternate",
    hrefLang: "ar",
    href: "https://gold-price.ga".concat(currency, "/ara")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "alternate",
    hrefLang: "zh",
    href: "https://gold-price.ga".concat(currency, "/zho")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "alternate",
    hrefLang: "fr",
    href: "https://gold-price.ga".concat(currency, "/fra")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "alternate",
    hrefLang: "de",
    href: "https://gold-price.ga".concat(currency, "/deu")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_header__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    currency: currency
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_price__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    price: _constants__WEBPACK_IMPORTED_MODULE_3__[/* Store */ "d"].prices[currency],
    timestamp: _constants__WEBPACK_IMPORTED_MODULE_3__[/* Store */ "d"].timestamp,
    currency: currency,
    languageParam: language || "en"
  }));
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(11);

var _router = __webpack_require__(5);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 31 */
/***/ (function(module) {

module.exports = JSON.parse("{\"BDT\":\"BD\",\"EUR\":\"EU\",\"BGN\":\"BG\",\"BAM\":\"BA\",\"BBD\":\"BB\",\"XPF\":\"WF\",\"BMD\":\"BM\",\"BND\":\"BN\",\"BOB\":\"BO\",\"BHD\":\"BH\",\"BIF\":\"BI\",\"BTN\":\"BT\",\"JMD\":\"JM\",\"NOK\":\"BV\",\"BWP\":\"BW\",\"WST\":\"WS\",\"BRL\":\"BR\",\"BSD\":\"BS\",\"BYR\":\"BY\",\"BZD\":\"BZ\",\"RUB\":\"RU\",\"RWF\":\"RW\",\"RSD\":\"RS\",\"TMT\":\"TM\",\"TJS\":\"TJ\",\"RON\":\"RO\",\"GTQ\":\"GT\",\"JPY\":\"JP\",\"GYD\":\"GY\",\"GBP\":\"GG\",\"GEL\":\"GE\",\"GNF\":\"GN\",\"GMD\":\"GM\",\"DKK\":\"GL\",\"GIP\":\"GI\",\"GHS\":\"GH\",\"OMR\":\"OM\",\"TND\":\"TN\",\"JOD\":\"JO\",\"HRK\":\"HR\",\"HTG\":\"HT\",\"HUF\":\"HU\",\"HKD\":\"HK\",\"HNL\":\"HN\",\"VEF\":\"VE\",\"ILS\":\"PS\",\"PYG\":\"PY\",\"IQD\":\"IQ\",\"PAB\":\"PA\",\"PGK\":\"PG\",\"PEN\":\"PE\",\"PKR\":\"PK\",\"PHP\":\"PH\",\"PLN\":\"PL\",\"ZMK\":\"ZM\",\"EGP\":\"EG\",\"ZAR\":\"ZA\",\"VND\":\"VN\",\"SBD\":\"SB\",\"ETB\":\"ET\",\"SOS\":\"SO\",\"ZWL\":\"ZW\",\"SAR\":\"SA\",\"ERN\":\"ER\",\"MDL\":\"MD\",\"MGA\":\"MG\",\"MAD\":\"MA\",\"UZS\":\"UZ\",\"MMK\":\"MM\",\"MOP\":\"MO\",\"MNT\":\"MN\",\"MKD\":\"MK\",\"MUR\":\"MU\",\"MWK\":\"MW\",\"MVR\":\"MV\",\"MRO\":\"MR\",\"UGX\":\"UG\",\"TZS\":\"TZ\",\"MYR\":\"MY\",\"MXN\":\"MX\",\"SHP\":\"SH\",\"FJD\":\"FJ\",\"FKP\":\"FK\",\"NIO\":\"NI\",\"NAD\":\"NA\",\"VUV\":\"VU\",\"NGN\":\"NG\",\"NZD\":\"NZ\",\"NPR\":\"NP\",\"XOF\":\"CI\",\"CHF\":\"CH\",\"COP\":\"CO\",\"CNY\":\"CN\",\"XAF\":\"CM\",\"CLP\":\"CL\",\"CAD\":\"CA\",\"CDF\":\"CD\",\"CZK\":\"CZ\",\"CRC\":\"CR\",\"CVE\":\"CV\",\"CUP\":\"CU\",\"SZL\":\"SZ\",\"SYP\":\"SY\",\"ANG\":\"SX\",\"KGS\":\"KG\",\"KES\":\"KE\",\"SSP\":\"SS\",\"SRD\":\"SR\",\"KHR\":\"KH\",\"KMF\":\"KM\",\"STD\":\"ST\",\"KRW\":\"KR\",\"KPW\":\"KP\",\"KWD\":\"KW\",\"SLL\":\"SL\",\"SCR\":\"SC\",\"KZT\":\"KZ\",\"KYD\":\"KY\",\"SGD\":\"SG\",\"SEK\":\"SE\",\"SDG\":\"SD\",\"DOP\":\"DO\",\"XCD\":\"DM\",\"DJF\":\"DJ\",\"YER\":\"YE\",\"DZD\":\"DZ\",\"USD\":\"US\",\"UYU\":\"UY\",\"LBP\":\"LB\",\"LAK\":\"LA\",\"TWD\":\"TW\",\"TTD\":\"TT\",\"TRY\":\"TR\",\"LKR\":\"LK\",\"TOP\":\"TO\",\"LTL\":\"LT\",\"LRD\":\"LR\",\"LSL\":\"LS\",\"THB\":\"TH\",\"LYD\":\"LY\",\"AED\":\"AE\",\"AFN\":\"AF\",\"ISK\":\"IS\",\"IRR\":\"IR\",\"AMD\":\"AM\",\"ALL\":\"AL\",\"AOA\":\"AO\",\"ARS\":\"AR\",\"AUD\":\"AU\",\"AWG\":\"AW\",\"INR\":\"IN\",\"AZN\":\"AZ\",\"IDR\":\"ID\",\"UAH\":\"UA\",\"QAR\":\"QA\",\"MZN\":\"MZ\"}");

/***/ }),
/* 32 */
/***/ (function(module) {

module.exports = JSON.parse("{\"timestamp\":1600948891,\"prices\":{\"AED\":219.43347383596438,\"AFN\":4591.283936859466,\"ALL\":6349.403102998745,\"AMD\":29000.539265200783,\"ANG\":107.18638924733948,\"AOA\":37216.96555354692,\"ARS\":4519.334742418416,\"AUD\":84.85873889817702,\"AWG\":107.53762120502846,\"AZN\":101.10134431984052,\"BAM\":100.30981544995659,\"BBD\":120.56737256791949,\"BDT\":5064.055080692537,\"BGN\":100.31715202166994,\"BHD\":22.531689130308973,\"BIF\":115355.46832882486,\"BMD\":59.74308868855094,\"BND\":82.15795702311674,\"BOB\":411.72819933382635,\"BRL\":334.17904587821107,\"BSD\":59.71440936276244,\"BTC\":0.0057461260971610455,\"BTN\":4403.063317373887,\"BWP\":695.1599734520785,\"BYN\":155.53475597112816,\"BYR\":1170965.0214832376,\"BZD\":120.36733555316206,\"CAD\":80.03963737645886,\"CDF\":117454.96500031058,\"CHF\":55.269524303121884,\"CLF\":1.705060309937948,\"CLP\":47035.76544106002,\"CNY\":407.8052882644761,\"COP\":230625.87444432208,\"CRC\":35773.24413767289,\"CUC\":59.74308868855094,\"CUP\":1583.1925172076647,\"CVE\":5655.2257171092815,\"CZK\":1385.6198209754687,\"DJF\":10630.51453924348,\"DKK\":381.85886109153455,\"DOP\":3487.3143343886436,\"DZD\":7734.429482540591,\"EGP\":941.8520433990291,\"ERN\":896.1645434958042,\"ETB\":2202.5429768800436,\"EUR\":51.30469729608076,\"FJD\":127.57544030447222,\"FKP\":46.897623798347425,\"GBP\":46.88459240523422,\"GEL\":192.36362770633056,\"GGP\":46.897623798347425,\"GHS\":345.74502292254766,\"GIP\":46.897623798347425,\"GMD\":3089.328816491335,\"GNF\":584750.2381814555,\"GTQ\":463.83155685271515,\"GYD\":12492.170894120824,\"HKD\":463.0240722219721,\"HNL\":1471.2419737694113,\"HRK\":387.54162588753496,\"HTG\":6305.220113343728,\"HUF\":18664.046764386716,\"IDR\":895779.2799523907,\"ILS\":207.73995331414974,\"IMP\":46.897623798347425,\"INR\":4414.2156759486215,\"IQD\":71287.48420675112,\"IRR\":2515483.7891776515,\"ISK\":8301.908533230557,\"JEP\":46.897623798347425,\"JMD\":8448.075923655273,\"JOD\":42.35915897083883,\"JPY\":6302.782935003375,\"KES\":6480.319710409928,\"KGS\":4740.610106192007,\"KHR\":243929.93109133875,\"KMF\":25074.208942994563,\"KPW\":53771.45689880076,\"KRW\":70064.03222345079,\"KWD\":18.30351511204707,\"KYD\":49.76453028325241,\"KZT\":25485.423428394366,\"LAK\":544830.3677131694,\"LBP\":90287.05491835096,\"LKR\":11062.046197819502,\"LRD\":11881.412739932804,\"LSL\":1005.469508913288,\"LTL\":176.4058659640549,\"LVL\":36.13800268141337,\"LYD\":82.06047809825418,\"MAD\":554.3110844725588,\"MDL\":1002.892833100987,\"MGA\":231691.12387869658,\"MKD\":3163.1618168077034,\"MMK\":78165.81057259363,\"MNT\":171245.15216669548,\"MOP\":476.6790739308105,\"MRO\":21328.312110708932,\"MUR\":2384.133490334051,\"MVR\":920.6363710590617,\"MWK\":44867.43607897052,\"MXN\":1338.9808241561905,\"MYR\":249.03905462945693,\"MZN\":4304.192136940809,\"NAD\":1005.4723306716393,\"NGN\":23109.23298260039,\"NIO\":2079.82306443237,\"NOK\":570.6811307623059,\"NPR\":7044.893016959135,\"NZD\":91.65727825097257,\"OMR\":22.97126777674179,\"PAB\":59.71440936276244,\"PEN\":213.17265901552906,\"PGK\":211.60324832524194,\"PHP\":2899.6345208806224,\"PKR\":9897.617857437544,\"PLN\":232.60970010963572,\"PYG\":417821.2236808957,\"QAR\":217.52098863485836,\"RON\":250.15621441307908,\"RSD\":6034.951380191942,\"RUB\":4607.568355609426,\"RWF\":57909.059502729964,\"SAR\":224.0876307558756,\"SBD\":487.0902848484069,\"SCR\":1073.4880452756968,\"SDG\":3303.7621858335206,\"SEK\":542.9997839456,\"SGD\":82.2331184046555,\"SHP\":46.897623798347425,\"SLL\":583988.9376287808,\"SOS\":34770.49998558467,\"SRD\":845.6023277789924,\"STD\":1256625.4161828884,\"SVC\":522.5201287930424,\"SYP\":30576.015607239813,\"SZL\":1013.1393046355657,\"THB\":1888.4884550397067,\"TJS\":616.2485776738578,\"TMT\":209.1009130193229,\"TND\":165.04028506735682,\"TOP\":137.88414443687103,\"TRY\":455.15413687554246,\"TTD\":405.8147686187827,\"TWD\":1751.7997100498342,\"TZS\":138536.57026531975,\"UAH\":1687.294673272353,\"UGX\":221062.59719125452,\"USD\":59.74308868855094,\"UYU\":2533.9766057965467,\"UZS\":613142.0178669514,\"VEF\":596.6843522351542,\"VND\":1384514.3305991606,\"VUV\":6845.1259675188885,\"WST\":156.9615396029322,\"XAF\":33642.59515137961,\"XAG\":2.6895461463524417,\"XAU\":0.032168045204642635,\"XCD\":161.45875545381475,\"XDR\":42.42016025592386,\"XOF\":33642.45057474262,\"XPF\":6098.478395524869,\"YER\":14956.72885836575,\"ZAR\":1017.2609701022408,\"ZMK\":537760.7358276977,\"ZMW\":1192.1337491016943,\"ZWL\":19237.302262249945}}");

/***/ }),
/* 33 */
/***/ (function(module) {

module.exports = JSON.parse("{\"date\":[1598356883,1598443277,1598529681,1598616083,1598702417,1598788835,1598875291,1598961682,1599048078,1599134504,1599220896,1599307213,1599393689,1599480087,1599566482,1599652900,1599739297,1599825688,1599912023,1599998420,1600084900,1600171302,1600257681,1600344081,1600430484,1600516875,1600603216,1600689693,1600776094,1600862505,1600948891],\"data\":{\"AED\":[227.6047542835096,226.81298694531074,229.14877138796896,231.47045392148667,231.85896967848763,231.85896967848763,232.01865090923704,234.90726817220198,231.57551680545282,228.29217367199305,229.22331371443272,228.32958925987847,228.32958925987847,227.81236801980515,226.51087686782628,227.21080306079796,229.7927136044754,229.7857309327074,230.76337409574637,230.76337409574637,229.74697475163165,232.42693992894573,231.99717181268684,229.804379701958,230.50891700414752,230.84139941967013,230.84139941967013,228.2280853464296,225.34946016172074,222.71980676301325,219.43347383596438],\"AFN\":[4770.503704691509,4756.076028221071,4795.7000924541035,4852.5822899553095,4860.390213858149,4860.390213858149,4860.4596042999065,4911.4270714889235,4843.39633883291,4778.297772151239,4791.541098445809,4777.4783190688995,4777.4783190688995,4763.616627305404,4738.035013916343,4727.074302549593,4792.82488878629,4801.093937626594,4825.556420840433,4825.556420840433,4810.477645036492,4851.500806926984,4848.983843795775,4803.722245726457,4822.215246875864,4828.380029939234,4828.380029939234,4773.541353596758,4715.850252491721,4676.1229984985375,4591.283936859466],\"ALL\":[6512.2032108221065,6498.221794826222,6552.276837848439,6567.28990177925,6577.8571871514005,6577.8571871514005,6576.666109901616,6625.234149415811,6597.762933854612,6539.028184473845,6537.502744832332,6530.558080418288,6530.558080418288,6515.733976889688,6488.166936926342,6533.589476968459,6562.914294975725,6543.239841785357,6597.12066184934,6597.12066184934,6556.000016459183,6600.006898495643,6603.382995402693,6579.826352073112,6575.591588339066,6577.177307169726,6577.177307169726,6535.185766154068,6466.949254296048,6419.431163545318,6349.403102998745],\"AMD\":[30069.909134714977,29991.63470648619,30391.54144637398,30692.7851345838,30755.448909417424,30755.448909417424,30778.721207700215,31159.137412849563,30696.020637494777,30287.489142901006,30455.35064988908,30337.006209047355,30337.006209047355,30265.829851371247,30100.32805007363,30221.095243399348,30581.83654708774,30550.491108463804,30640.08784871234,30640.08784871234,30502.228629803547,30708.66260138636,30653.968997020864,30340.499091629743,30398.11765138925,30498.149948358678,30498.149948358678,30152.318809094297,29772.545900690286,29426.951265148058,29000.539265200783],\"ANG\":[111.21046099861749,110.80221941291836,111.72488328071248,113.12988184033695,113.31192039867538,113.31192039867538,113.29505338745456,114.75017237243993,113.15787687104138,111.62872433270103,111.97369506799987,111.53848263029289,111.53848263029289,111.32948584638137,110.7343174111822,111.01390632575634,112.31001258688872,112.28400102562452,112.76567833327975,112.76567833327975,112.50200460727258,113.61757824389929,113.37339484840689,112.38138700929169,112.63315645629038,112.80329470469084,112.80329470469084,111.58832421149083,110.19623474134328,108.8428943574575,107.18638924733948],\"AOA\":[36497.79722422338,36545.5760514677,37053.84774209819,37392.281992029064,37664.97742732727,37664.97742732727,37693.00138941742,38419.00445232743,38160.367271411764,37886.82312835096,38041.35302247179,38663.990525769215,38663.990525769215,38573.31193443461,38352.74343204193,38264.109668390505,39112.73961181236,39242.10949103462,38226.35031321738,38226.35031321738,38054.33612179757,39574.924719711926,39350.970054224344,39196.16018024274,39313.66305715847,38867.12795421663,38867.12795421663,38426.420392892316,37974.39096448317,37774.34918826801,37216.96555354692],\"ARS\":[4565.857420742051,4554.421248306594,4611.392520125069,4656.041459933768,4665.906784913996,4665.906784913996,4671.863061832299,4740.447039722213,4681.246513949137,4618.461887514066,4637.420075593351,4627.538165932547,4627.538165932547,4616.495479174356,4598.930488743208,4617.039459293315,4673.733983415104,4677.7138431196345,4701.762766829566,4701.762766829566,4681.100840217664,4749.165769516767,4745.395302782046,4704.441220009645,4727.076709982638,4732.694826730541,4732.694826730541,4678.969959727678,4632.9426435748965,4583.718962436099,4519.334742418416],\"AUD\":[86.3713433128637,85.66607474777352,86.14477141047487,85.92312145838022,85.68171715075717,85.68171715075717,85.80490885477285,86.6148936372697,85.91033207086133,85.20684081953509,85.81909459730574,85.38106730058195,85.38106730058195,85.19777294151689,85.04985323602226,85.50655970163649,86.04577398000193,85.74069777352665,86.25701275921938,86.25701275921938,86.00024345657974,86.35647122046103,86.07225935986881,85.70899289618363,85.83538685721633,86.21269996784875,86.21269996784875,85.54030994084171,84.98345345079252,85.05731057775778,84.85873889817702],\"AWG\":[111.54209617078737,111.14638186155676,112.29101133749155,113.43657359354404,113.61908641288622,113.61908641288622,113.70524110214448,115.12082890010609,113.4880547291258,111.87897612770472,112.33532456483299,111.8987081712375,111.8987081712375,111.63630494550364,110.99845550397069,111.34129516927626,112.61498133942062,112.61001670256887,113.09309704851623,113.09309704851623,112.58418861524609,113.89749317815001,113.6946817252355,112.62008524386714,113.03607903385524,113.12827069093014,113.12827069093014,111.84562965598171,110.43683901327847,109.14816842426775,107.53762120502846],\"AZN\":[105.35926669710317,104.72414222679484,103.26688256084621,106.92560558145516,107.55751448799151,107.55751448799151,107.75458214480916,108.45119832363436,107.33439681059704,105.764020350127,105.81998753753658,105.92888877278719,105.92888877278719,102.58086630228594,105.00087483329582,104.81250727261035,106.40091944281902,106.6290331784715,107.05960909076295,107.05960909076295,106.25696827830112,107.87942852329356,107.12189836446645,106.6315319117127,106.35672181847409,107.09285829180465,107.09285829180465,105.43580543098734,103.92789599074044,102.93666468990129,101.10134431984052],\"BAM\":[102.46315055975307,102.19857644085779,103.04962464488956,103.54294637559077,103.7095630193229,103.7095630193229,103.56718527826897,104.30575523582934,103.94799951644535,102.97371809986174,102.9820073356268,102.58173185866315,102.58173185866315,102.63080505803298,102.24338810082628,102.90203767160723,103.37310218660578,103.16374413561391,103.60633334083529,103.60633334083529,103.36798966980676,104.03363147606339,104.0784276629264,103.78157146673954,103.63207911423335,103.78858187634633,103.78858187634633,103.15408986978747,102.0843590296756,101.29339520946533,100.30981544995659],\"BBD\":[125.09344790470372,124.63354516284602,125.67350720734333,126.22220613574254,126.42532209786837,126.42532209786837,127.44105226023211,129.0799489547632,127.28462800887374,125.56454878661224,125.95433145612964,125.46482304761598,125.46482304761598,125.22468234961255,124.56381460759413,124.87159646657877,126.33228882165707,126.30220004661929,126.84399367424363,126.84399367424363,126.54956958042631,127.80447599138347,127.52848463878081,126.41008989229334,126.6847832508118,126.87615630807318,126.87615630807318,125.52022338713304,123.95247481979229,122.4327179403916,120.56737256791949],\"BDT\":[5253.427096952705,5234.16984530624,5277.799634769636,5346.438414527215,5355.041000782561,5355.041000782561,5351.928308764427,5421.758382775294,5346.481395122014,5278.15504504903,5293.062730258817,5272.490647919814,5272.490647919814,5259.661330627913,5231.059345305598,5244.432205755072,5305.4162940844935,5305.229620472301,5327.988182022635,5327.988182022635,5315.64361846317,5372.345868863132,5352.739686957849,5309.325287161688,5321.3575166022565,5329.395539774298,5329.395539774298,5268.703343782271,5206.163040766807,5141.723545355754,5064.055080692537],\"BGN\":[102.6034738886924,102.22978789184323,103.1792291360962,103.5173313956853,103.74243200945247,103.74243200945247,103.66228362987492,104.29860773623122,103.95384996174002,102.95908410764234,103.03384932643154,103.05191545831592,103.05191545831592,102.80826599363404,102.20675886184613,102.73229413079123,103.37146455775968,103.15688175899429,103.77539891650324,103.77539891650324,103.1161694402469,104.0708292971739,103.99886432337715,103.6577961219175,103.55613697906954,103.78290196283317,103.78290196283317,103.0097901948365,102.15365472976883,101.02328929524484,100.31715202166994],\"BHD\":[23.363021179950486,23.27637088640967,23.512410376812525,23.759375720670032,23.792907693791594,23.792907693791594,23.79882554480275,24.11176985692698,23.76658303572003,23.430179628974695,23.50633877375173,23.435296989036427,23.435296989036427,23.383560095167667,23.22988714079028,23.301680013182008,23.589673740796705,23.591847855512327,23.688059936340547,23.688059936340547,23.563208727132427,23.859714846156315,23.814451749027423,23.591792757933316,23.662731992733818,23.696386843712826,23.696386843712826,23.431127284827827,23.138919615471178,22.848111670899915,22.531689130308973],\"BIF\":[119553.35524952125,119122.95614695431,120115.90500184323,121626.95743796289,121822.65896097869,121822.65896097869,121828.55065778283,123393.36717755007,121687.11719625245,120045.3564134733,120415.64258519179,120353.27817826254,120353.27817826254,119719.06168348517,119081.98741650902,119381.5714999775,120818.55414668037,120791.73585053367,121135.27686905443,121135.27686905443,121029.86022533388,122235.26988722855,121994.69684304085,120942.01570174292,121203.3602224303,121361.49414557597,121361.49414557597,120090.6993463598,118593.01706273896,117137.13486692442,115355.46832882486],\"BMD\":[61.96783120599299,61.748013158859266,62.38387757579655,63.02031278268977,63.12171467382568,63.12171467382568,63.16954310966786,63.95603976208082,63.04891929395878,62.15498673761373,62.40848437771277,62.16594898402083,62.16594898402083,62.02015775712953,61.665820225058674,61.8562926277208,62.56386678262547,62.561120390316034,62.829498360286784,62.829498360286784,62.5467714529145,63.27642057615021,63.163712069575276,62.56671402437063,62.75422429315499,62.849039272738956,62.849039272738956,62.13647262739927,61.3538284409864,60.63787134681542,59.74308868855094],\"BND\":[84.81189212680448,84.42948437899881,85.13398318329422,85.73286143201621,85.8707668585024,85.8707668585024,85.8510027135646,86.79032741471883,85.79715254734269,84.88373490499309,85.07354986978748,84.74290097418256,84.74290097418256,84.7774900517635,84.46174755168312,84.7085493955567,85.56579024788606,85.4617685576954,85.82840925151915,85.82840925151915,85.62883495900715,86.04020991737131,85.71398484358421,85.12165635630002,85.13595608269299,85.26452599427707,85.26452599427707,84.48880310902484,83.58146785583385,82.8122979503585,82.15795702311674],\"BOB\":[427.1764745426486,426.2266069253769,429.77948254123396,434.87419331125614,435.5739195730315,435.5739195730315,435.18201700864864,441.42317443333434,435.29445745555086,429.40444408995916,431.3614000012861,429.6849018904929,429.6849018904929,428.25326204931997,425.9731247358776,427.03603433109345,432.03084272481743,431.93492923029925,433.78790251744203,433.78790251744203,432.78277717840723,437.06508528920034,435.48592094106675,432.2978753428929,433.2786575082789,433.93313016268525,433.93313016268525,429.2654020412821,423.90470470854905,418.0942772288847,411.72819933382635],\"BRL\":[347.7077275806192,340.15760646111306,349.836494733627,351.03562315146445,340.3175716265312,340.3175716265312,340.401877082275,351.31672724238814,340.38209839565314,331.91394601003117,330.19707612577565,329.63519850979003,329.63519850979003,328.69421503649164,326.82252982477576,331.67451286853355,332.1785897305726,332.9316328891103,334.1086846124168,334.1086846124168,332.69861812976234,333.52439146255983,333.2641663395814,327.6994396090409,328.8135466964601,338.8382663762338,338.8382663762338,334.89093850625335,332.20629963283284,331.8045792833489,334.17904587821107],\"BSD\":[61.95471687618557,61.72631675658297,62.24032461916856,63.02639898659293,63.12781134134971,63.12781134134971,63.12006233128636,63.926703009999024,63.039079908690475,62.18736049737967,62.37956034016011,62.13712043854291,62.13712043854291,62.01937090698645,61.693775493039254,61.84393138443236,62.56888532263768,62.55241045076036,62.82074810307687,62.82074810307687,62.67494689611934,63.2931303269781,63.160252793942696,62.608113829212606,62.740975490788664,62.83576844677363,62.83576844677363,62.16418406552422,61.39165930135357,60.636317525640614,59.71440936276244],\"BTC\":[0.005298189242195286,0.005384890203517345,0.005494850014468057,0.005504045268945117,0.005513508021734238,0.005460493521525255,0.005397903096164357,0.005387294473201941,0.005584515963090377,0.0055272272771115325,0.0060060843005497865,0.006091277368742565,0.00603876635694306,0.00613743111596952,0.006165834806931807,0.00604911905603961,0.006075074751631675,0.006070563932739606,0.006098664116001672,0.005992600392245121,0.006005754428833231,0.005853734366459827,0.005800939137703758,0.005724941002475645,0.005723482622255087,0.005732996817027295,0.005732996817027295,0.005847851011156479,0.005844215670514098,0.0058009323859434785,0.0057461260971610455],\"BTN\":[4598.281447129859,4582.313463426679,4620.489984015368,4619.837543707038,4627.271036495194,4627.271036495194,4629.912199508086,4645.8707916445355,4613.0464371308235,4552.113367121178,4559.94617170691,4542.223735105938,4542.223735105938,4539.818716258881,4524.041670004823,4550.217944542326,4586.296594703083,4599.946171227854,4619.6791494727195,4619.6791494727195,4608.975101178985,4641.4832393312545,4639.080692910973,4604.436148282159,4599.7521155679515,4606.700065599781,4606.700065599781,4556.709412787512,4505.800061886956,4456.767991489567,4403.063317373887],\"BWP\":[713.768172866926,710.3254674288653,716.2403849416455,722.7679912960165,723.9309722692345,723.9309722692345,723.8199085409767,730.6104747773526,725.0266448278302,716.4445689656945,713.744829284635,710.9707438189242,710.9707438189242,713.7028751593093,713.1860704967366,714.1433732485613,719.9906537938461,720.2521402147702,723.3419214046877,723.3419214046877,721.6598286155676,722.128432130984,716.9159286647589,713.4699242941194,709.4220673542745,710.4936928656399,710.4936928656399,714.5650888393402,704.8289510815677,703.4494960470051,695.1599734520785],\"BYN\":[161.7707137356525,164.40979471819438,165.7788324100569,168.28253237565508,168.55329468893675,168.55329468893675,167.85562902678197,168.86517197890876,167.27726151175128,164.71963737870945,164.32214629714176,163.68349267755522,163.68349267755522,164.1658434736199,162.82475293958782,162.56633995756036,163.25627620165255,162.40738051795643,163.10405194675755,163.10405194675755,162.72549479278524,163.54274826126095,162.71389470983505,161.1897955956017,161.17883513969713,161.42229271131401,161.42229271131401,160.66607138089572,158.58900169854996,157.26182674983122,155.53475597112816],\"BYR\":[1214569.5128826767,1210260.788721412,1222724.1610514699,1235198.1032851108,1237185.5750560802,1237185.5750560802,1238123.4661446938,1253537.9827572354,1235758.927618105,1218237.7845382486,1223206.7473679048,1218452.6094337683,1218452.6094337683,1215595.1617022047,1208649.98967144,1212383.1148419846,1226251.7331015982,1226198.0317051488,1231458.2090673777,1231458.2090673777,1225916.84538628,1240217.397716927,1238008.694030616,1226307.6649551832,1229983.2626626668,1231841.1629510205,1231841.1629510205,1217874.911544234,1202534.7211773407,1188502.0286467255,1170965.0214832376],\"BZD\":[124.88388091438122,124.42452777416968,125.46274800823072,126.3651525421985,126.56846124843263,126.56846124843263,127.22503029514836,128.86936441436515,127.07204410121209,125.34872372150596,125.74374971096036,125.25498904446516,125.25498904446516,125.01475073144069,124.34947346879721,124.66113972446388,126.11448418512681,126.08592960807637,126.6268281998521,126.6268281998521,126.33288828248078,127.57990545477928,127.31028417580295,126.19895618847055,126.46755588721344,126.65856784554543,126.65856784554543,125.30927928399188,123.7437006510626,122.22554178375076,120.36733555316206],\"CAD\":[81.8118055827412,81.33291110953927,82.06632465742854,82.31871273639199,82.67902887342058,82.67902887342058,82.556905888821,83.17833315885926,82.42415809150243,81.45101092434814,81.74080530238241,81.21673402083401,81.21673402083401,81.23089417355237,81.15315014371603,81.8411091598881,82.27368082660836,82.42738397903737,82.79986568337459,82.79986568337459,82.40442969745682,83.20817323087805,83.15342902035172,82.49141702665338,82.61502696363695,82.98337717744268,82.98337717744268,82.26588215799117,81.57674533935634,80.83329950808604,80.03963737645886],\"CDF\":[120837.26387486285,120408.60866861716,121648.57860271484,122889.5953722792,123087.36322932516,123087.36322932516,123180.66976380188,124714.25534680512,122945.3997501257,121202.23561392342,122383.07811599653,121845.2834285921,121845.2834285921,121559.52362955983,120864.9746173218,121238.32150469568,122562.60604661799,122307.00414060861,123459.9911651175,123459.9911651175,122904.43171918462,124338.10379717742,124179.85670473361,123006.17275904735,123312.09556999677,123561.23329285921,123561.23329285921,122160.29944298264,120621.61142609363,119274.68558443237,117454.96500031058],\"CHF\":[56.382647970292254,56.14281298138443,56.82985225348036,56.91362748030736,57.07313130148217,57.07313130148217,57.010429835707164,57.90386780760698,57.45488306079799,56.687821996913485,56.867292076005526,56.74786278654791,56.74786278654791,56.70519486737613,56.55005843744976,56.81806026749831,56.8655523190689,56.87996993698356,57.10561041217888,57.10561041217888,56.72024137993119,57.30502614892454,57.23893086422531,56.9667675671157,57.104458007266174,57.28744844388001,57.28744844388001,56.720361607561955,56.12800384110857,55.805176728932906,55.269524303121884],\"CLF\":[1.7658707372279199,1.7598134868019164,1.7738855229399093,1.7915138115294342,1.783195729029354,1.783195729029354,1.7817843073015462,1.7995697122464067,1.7623668662186927,1.7367074507282256,1.753987355560557,1.7381670015754107,1.7381670015754107,1.7347422820949747,1.7396014609523198,1.7258925682410056,1.7347772153811527,1.7453663119313247,1.7530742581101504,1.7530742581101504,1.7485701337491557,1.745370725010449,1.7438474561939359,1.7332788972124873,1.7309295315564412,1.7385843680673891,1.7385843680673891,1.7364429669163746,1.7167905337105744,1.7132432273414142,1.705060309937948],\"CLP\":[48722.07818824936,48562.4285421985,48946.290128359324,49434.184016060186,49203.622257441086,49203.622257441086,49165.31375831623,49655.515868709765,48629.60259809793,47909.07077850722,48397.62658513649,47961.27321350031,47961.27321350031,47867.01173854869,48000.83094998296,47624.19731262418,47861.38513599781,48165.82944549721,48372.67818122046,48372.67818122046,48249.183920011244,48153.323383969386,48130.738378848335,47832.49077473523,47762.24822308683,47972.91729332862,47972.91729332862,47913.511629746,47384.08888453557,47279.37444510176,47035.76544106002],\"CNY\":[428.3898123364305,425.49300712600063,429.5751692238691,432.56508755039704,433.3560579567888,433.3560579567888,432.3513460408964,436.11434243706384,430.25206502781083,425.1896964099926,426.9115237539787,425.3707546940809,425.3707546940809,423.7463942565025,421.87451668006304,423.49272339324176,427.8303247345915,427.72422772401364,429.40222057197053,429.40222057197053,426.57514510947493,428.4826060399318,426.9111217226634,423.6832703694177,424.1683570395138,425.4276985515866,425.4276985515866,421.67652461241676,415.6412968334244,411.69481292640586,407.8052882644761],\"COP\":[238978.94524249752,238811.0052336096,239497.97584868985,240311.5721998264,236422.37610811758,236422.37610811758,236601.6042095219,239121.1129911796,231956.99461221875,227425.1047900897,230319.2211041707,230947.1238863695,230947.1238863695,230409.39571573286,229065.6893182632,231281.25458979356,232292.1191155094,231912.21009886183,232815.34223819408,232815.34223819408,231767.71071439152,233400.68831238337,233489.70294739382,230715.3968258756,233114.37888781208,234395.49069368065,234395.49069368065,232122.60860846794,232355.47673863516,232001.6597921519,230625.87444432208],\"CRC\":[36804.54905718741,36716.00076854323,37022.048252538014,37522.54612556216,37582.92105375881,37582.92105375881,37564.90406856605,38039.70825117319,37591.729198870846,37076.559193022535,37201.315044817544,37056.72775290969,37056.72775290969,36995.42995943156,36830.15944796257,36942.73126481529,37405.70805522297,37300.42108873099,37460.43351155516,37460.43351155516,37373.322238197274,37683.86769061473,37706.17416600295,37313.34884554223,37394.50588255602,37450.99063070925,37450.99063070925,37105.47087546924,36666.40274293959,36326.366853547894,35773.24413767289],\"CUC\":[61.96783120599299,61.748013158859266,62.38387757579655,63.02031278268977,63.12171467382568,63.12171467382568,63.16954310966786,63.95603976208082,63.04891929395878,62.15498673761373,62.40848437771277,62.16594898402083,62.16594898402083,62.02015775712953,61.665820225058674,61.8562926277208,62.56386678262547,62.561120390316034,62.829498360286784,62.829498360286784,62.5467714529145,63.27642057615021,63.163712069575276,62.56671402437063,62.75422429315499,62.849039272738956,62.849039272738956,62.13647262739927,61.3538284409864,60.63787134681542,59.74308868855094],\"CUP\":[1642.1475794161333,1636.3220088866026,1653.1729670989937,1670.0382622795228,1672.7253858418803,1672.7253858418803,1673.993474533003,1694.8345202996493,1670.7964942545734,1647.1072011870237,1653.8254682287882,1647.3976743320582,1647.3976743320582,1643.534285477285,1634.1441053319616,1639.1914390283894,1657.9424169128379,1657.8697959183999,1664.9817595794618,1664.9817595794618,1657.4896015484035,1676.8245598945439,1673.8382634044947,1658.018027663248,1662.9875532135163,1665.4995407275826,1665.4995407275826,1646.6166036510945,1625.876036242163,1606.9032281323346,1583.1925172076647],\"CVE\":[5776.627114003793,5761.711383874224,5809.738312077935,5837.503405989133,5846.896121052953,5846.896121052953,5838.3067376886465,5880.752831537793,5860.338291287657,5805.410836199723,5805.852829918657,5803.215873428608,5803.215873428608,5786.078554386393,5764.140022518085,5801.369494944217,5827.975946168858,5816.125008225894,5884.007472931871,5884.007472931871,5827.639820501237,5865.165911441019,5867.693152122945,5851.004203350159,5842.527351133331,5876.630045281806,5876.630045281806,5815.480100175867,5755.271665156094,5710.678268652542,5655.2257171092815],\"CZK\":[1369.7803651461275,1372.9059365694627,1388.7903720567147,1386.7050421116933,1384.4510887805036,1384.4510887805036,1389.7748250972575,1398.0919395035849,1400.4616178143585,1387.7277956981643,1391.9624581776677,1390.5158000273284,1390.5158000273284,1391.0007645757642,1385.797185759573,1396.4049960148539,1403.7468676053757,1402.570329376587,1409.774886674919,1409.774886674919,1403.0867395379864,1428.1292939247016,1423.1794703858147,1418.0307802141272,1416.1738120940101,1419.832080706041,1419.832080706041,1421.4331413477796,1408.710199975565,1395.6406253898338,1385.6198209754687],\"DJF\":[11029.367544647783,10989.057423121885,11080.469192149632,11220.245868028163,11218.015677545896,11218.015677545896,11236.405058014981,11381.241669139954,11222.68157325017,11071.162888519435,11105.318046041863,11048.156986584894,11048.156986584894,11041.117507620485,10982.374692689451,11009.754369031925,11138.414900751051,11135.902603194225,11166.083532660838,11166.083532660838,11157.714055169596,11268.002126498728,11244.21647666688,11145.907250943637,11169.498067326946,11169.555922054142,11169.555922054142,11067.06478208147,10929.09203369482,10794.691548930972,10630.51453924348],\"DKK\":[390.40604451274794,389.1469849107803,393.261924552294,393.9525164363566,394.59302172298493,394.59302172298493,393.92605532713884,397.0447228055171,395.7946441899495,391.59878855737384,392.0009480172331,390.7074481400508,390.7074481400508,390.3325406475259,388.7955967334341,391.37952835578557,393.0636228122689,392.7571460212841,394.5661738546121,394.5661738546121,391.957555125229,395.917909248947,395.94549572710025,394.34485604539753,394.2799068244221,394.9059135806835,394.9059135806835,391.98545721184445,388.30028178985947,385.5409467061055,381.85886109153455],\"DOP\":[3619.9984485657333,3606.127235808764,3636.186247048194,3681.313465273446,3687.2367919515805,3687.2367919515805,3685.319271508214,3734.0608541825545,3680.3010085766646,3633.0015344635567,3642.4356599749226,3633.624175119763,3633.624175119763,3623.2453636549526,3605.2779408211422,3601.204741891457,3656.4584372886857,3655.678080767128,3675.7699718644503,3675.7699718644503,3662.791987113461,3698.4351382889104,3690.423206292962,3657.5032889332215,3666.367629434781,3679.835959696814,3679.835959696814,3633.028806939845,3587.067077409896,3539.3620329293,3487.3143343886436],\"DZD\":[7962.244480907951,7928.136152407163,7998.179994099282,8071.454815805549,8077.501309841495,8077.501309841495,8084.882253941098,8165.095569977814,8064.694545441918,7946.837291754172,8008.498686786484,7977.945301642929,7977.945301642929,7977.963406446966,7939.691451452271,7977.296690364273,8046.650087033725,8040.9209691219485,8076.357847913384,8076.357847913384,8037.096975370863,8132.155881365463,8117.924596226086,8057.655996363052,8069.942131599202,8092.549726748222,8092.549726748222,8002.387613932417,7901.718864126932,7809.275103660419,7734.429482540591],\"EGP\":[985.4869622139344,981.021179374337,988.1580572417452,999.956050768093,1001.6028994338167,1001.6028994338167,1001.9263323708323,1015.7876011304375,1000.1137316091696,982.6020922248657,986.7283151580234,982.9536298749317,982.9536298749317,979.3419622171493,972.1490945272161,974.4900406745329,986.6760813500305,985.8996483988682,990.1048612674019,990.1048612674019,986.1876023621514,995.3630315069285,995.9397174780568,985.669824502781,988.6493744294762,990.4282834453268,990.4282834453268,976.1501592868854,965.9852423100666,955.6710839275954,941.8520433990291],\"ERN\":[929.4951737292222,926.2384432729962,935.7604355460887,945.2993464656141,946.8483042844741,946.8483042844741,947.5396009635725,959.3365426254701,945.737193304826,932.331328456419,936.1273710355914,932.5114994293156,932.5114994293156,930.2856851339099,924.997962954699,927.8509119441853,938.445428975983,938.407409677523,942.4650139456,942.4650139456,938.1982528241647,949.1235322939908,947.4633978892709,938.4709724775744,941.3179749805485,942.7580964119217,942.7580964119217,932.0712183818281,920.3224024174517,909.5848514709193,896.1645434958042],\"ETB\":[2233.0579828666046,2224.931391472205,2243.4204566762046,2278.111211785358,2281.7767459267598,2281.7767459267598,2277.887164494743,2344.013212118445,2312.9800359219366,2283.198361285085,2269.500266121596,2219.5653780181974,2219.5653780181974,2279.4573387338837,2267.9377895450602,2274.3795011140405,2301.4969027955503,2280.6394480259137,2293.929671465775,2293.929671465775,2285.1257095186957,2310.3766783017713,2325.4189596360475,2305.6293968565733,2311.4079478516537,2300.927974352956,2300.927974352956,2290.834415576632,2262.1587557097387,2235.7539767530466,2202.5429768800436],\"EUR\":[52.4573192296563,52.28048741278976,52.83509629296209,52.92351220139536,53.01450020898306,53.01450020898306,52.92061858984663,53.33954923962318,53.18586631514645,52.640259782014596,52.68495000482269,52.51101179950487,52.51101179950487,52.45667620486769,52.25283734687972,52.60103526990965,52.826736970710215,52.78751245860527,53.03186187827541,53.03186187827541,52.68205639327395,53.215766967816606,53.21962511654824,53.0087129858856,52.99520946532488,53.08330386136385,53.08330386136385,52.68334244285116,52.18049705816159,51.79403916020963,51.30469729608076],\"FJD\":[131.73727229977814,130.9923162858888,131.7516566848857,133.63462033115778,133.84984380863582,133.84984380863582,132.88033928013374,134.45156160048867,131.76585636112273,130.08729462656336,131.22324793621195,131.636652308459,131.636652308459,130.4066675651866,130.42961362248016,130.74871013728577,132.32849325499146,132.07271975854417,133.67004280776774,133.67004280776774,131.8465396225444,133.63660475645435,132.75433250747514,131.47459533967785,131.5892249107803,132.92823686461114,132.92823686461114,130.4057604652284,129.5761757097386,128.50070039224514,127.57544030447222],\"FKP\":[47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775,46.81477477252998,47.142867361990795,47.245082174066816,47.835118469279486,48.2862261013407,48.7396604282545,49.10273123171398,49.09429916567534,48.59245371957688,49.001503950101274,48.66567501495032,48.48325314085458,48.32140295694949,48.64139916085264,48.65164423849789,48.31231088705269,47.79310868501431,47.63010917596374,46.897623798347425],\"GBP\":[47.19438130598334,46.949184708870526,47.31224367745877,47.36135691605311,47.278437315371505,47.278437315371505,47.38379886988393,47.46590475645436,47.22963433237951,46.90931469954666,47.07942937915957,46.77822710831753,46.77822710831753,47.143077188695614,47.24732904607272,47.824493060154964,48.23641048837732,48.747314617561,49.104746442465355,49.104746442465355,48.594139545381466,49.01927801626852,48.66668618782754,48.488288968588236,48.31981310066552,48.65796115165739,48.65796115165739,48.31078307012184,47.796135153843686,47.62011292640582,46.88459240523422],\"GEL\":[191.44597659582675,190.78869884962864,192.7372006021927,194.75534949040286,195.07077659196864,195.07077659196864,195.1759512944089,197.64372567790886,194.81115901617207,192.07525381988876,192.87222607465517,191.16276770729513,191.16276770729513,190.71143955374077,189.62366562968202,191.14332519692633,194.2600768228145,193.9798028694981,195.08809816416422,195.08809816416422,194.2095560627592,198.06206017297367,199.9112727084204,198.3493274684114,201.12922079992282,202.39846279458573,202.39846279458573,200.09828879915116,197.54696080217343,197.09398077195127,192.36362770633056],\"GGP\":[47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775,46.81477477252998,47.142867361990795,47.245082174066816,47.835118469279486,48.2862261013407,48.7396604282545,49.10273123171398,49.09429916567534,48.59245371957688,49.001503950101274,48.66567501495032,48.48325314085458,48.32140295694949,48.64139916085264,48.65164423849789,48.31231088705269,47.79310868501431,47.63010917596374,46.897623798347425],\"GHS\":[357.47874260425033,356.16301628010154,359.1378492605215,364.59711438253544,365.18375787705367,365.18375787705367,364.1548733713789,369.20771882969484,364.37041330804107,359.1441733524097,360.4081543220911,360.2541594460342,360.2541594460342,358.1685722624827,355.9375495302704,357.4757940777417,361.639479845031,361.5581425328746,363.4711537697328,363.4711537697328,362.27395581455164,365.8408367006398,365.0618811738417,361.86922706073364,361.7105349528984,363.2919927161367,363.2919927161367,360.88516308426836,354.83145007426936,351.3932920698968,345.74502292254766],\"GIP\":[47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775,46.81477477252998,47.142867361990795,47.245082174066816,47.835118469279486,48.2862261013407,48.7396604282545,49.10273123171398,49.09429916567534,48.59245371957688,49.001503950101274,48.66567501495032,48.48325314085458,48.32140295694949,48.64139916085264,48.65164423849789,48.31231088705269,47.79310868501431,47.63010917596374,46.897623798347425],\"GMD\":[3210.087461330418,3198.2713125139053,3231.4548797926245,3264.942496145066,3269.9479446021287,3269.9479446021287,3272.0951304854834,3312.9014278449017,3265.7068094061665,3219.4812361225604,3237.1209089817703,3221.4637206861075,3221.4637206861075,3213.867377577725,3195.5411834755487,3204.2589193823746,3240.774300052085,3237.5510451081886,3248.527261740025,3248.527261740025,3233.454458377005,3274.546968705912,3268.7325040372307,3239.3910222637687,3247.508173493875,3252.4622803089733,3252.4622803089733,3215.5642628723913,3172.599215594316,3138.6113522714854,3089.328816491335],\"GNF\":[598419.0180700659,596231.1506379294,601196.0173290101,608754.2130265401,609733.7207440851,609733.7207440851,609685.1576124859,617803.0600035108,609376.2448816795,601248.2118784079,603063.0804086828,598658.1153917146,598658.1153917146,599739.239496037,596926.8235217457,598956.7211611002,605937.151225021,605986.8167083752,606618.849306186,606618.849306186,607181.4167823846,613665.5797306674,612365.464480997,607227.7023648754,608536.2896624287,610264.1902890347,610264.1902890347,608524.9302387203,600909.5453795035,593638.0848552037,584750.2381814555],\"GTQ\":[477.05042817220203,475.30250958171234,479.2644638835482,485.92537749799055,486.707253256599,486.707253256599,487.26881833199366,494.16654753110623,487.3052884261968,480.7095889631225,482.2080667305405,480.33392572259913,480.33392572259913,479.6675716413207,477.03026040574866,478.6787313394206,484.7781811098607,485.2546453895122,487.3363477622737,487.3363477622737,486.2153948291161,491.49161738706874,490.43518387390276,486.1442320113815,487.2398106565282,487.97575549143164,487.97575549143164,482.7284579522875,476.6958179432852,470.54252689772693,463.83155685271515],\"GYD\":[12952.028592809052,12914.818848862167,13022.470813654309,13177.572959624473,13198.77609128605,13198.77609128605,13197.91101420538,13344.236079361473,13175.440916711572,12977.637861697907,13045.629151816223,12994.92576790824,12994.92576790824,12970.596964427867,12907.023411270939,12936.453177851012,13089.360074697617,13057.16097127608,13113.173955911005,13113.173955911005,13082.791309664019,13233.128478733883,13219.537689660481,13093.995794189626,13128.084525694947,13147.9146540816,13147.9146540816,13000.837633518307,12825.605818383436,12674.686462259268,12492.170894120824],\"HKD\":[480.2723567192875,478.56240709384946,483.48075740282286,488.42257342121343,489.21314265247725,489.21314265247725,489.56726663858785,495.66234851043305,488.6449340269427,481.71670241327206,483.70026256952707,481.81746682795875,481.81746682795875,480.69656180175537,477.9563374420474,479.4139886104234,484.9043841844838,484.88307408931604,486.94651054560654,486.94651054560654,484.7468825071536,490.4015456165,489.547161209208,484.9389729042215,486.3548436536668,487.0832128203067,487.0832128203067,481.5670009847924,475.5018759900974,469.9707207053982,463.0240722219721],\"HNL\":[1527.9129539639262,1522.2305626081086,1534.9191981342635,1554.2453222287238,1556.7461468941904,1556.7461468941904,1556.3965040603798,1576.27521069736,1554.2662611580877,1533.0986633498376,1537.8214271703696,1541.954302374369,1541.954302374369,1528.8911638517181,1520.779798111436,1524.5012463476191,1542.2477952882357,1541.7360016091693,1558.4129073385204,1558.4129073385204,1544.7622231038804,1560.0409628106613,1556.363444926856,1542.7438491688904,1546.2355030871618,1552.6126398193098,1552.6126398193098,1531.6893145622605,1512.5884723136032,1494.0002508391474,1471.2419737694113],\"HRK\":[395.0140528058386,393.56337908497574,397.14836856541166,398.2502231681831,399.7879125984632,399.7879125984632,398.44214215574056,401.7701268122046,400.6825848619104,396.74132081599845,397.2177590817606,395.9849098479246,395.9849098479246,395.4962184831044,393.6806622441565,396.04108470244023,398.30646514966395,397.92023982734776,400.05454730411856,400.05454730411856,397.0029156660129,400.9889993306112,401.3550577416969,399.78869184290903,399.70068081021117,400.4051846108092,400.4051846108092,397.235879119699,393.6769080262354,391.17577560846223,387.54162588753496],\"HTG\":[6940.4914133311895,6917.28691602482,6974.946407151721,7059.486080390959,7070.845068247757,7070.845068247757,7081.254470761984,7151.981027017971,7073.335898844484,7026.87758243224,7059.8288731279945,7032.390014371605,7032.390014371605,6892.446298930649,6855.898735638362,6730.491037496383,6768.838885108831,6767.202371068706,6796.232552533518,6796.232552533518,6780.457238610423,6784.01951724721,6721.412575252547,6647.000424404076,6662.022959321929,6672.08606089284,6672.08606089284,6581.855252373725,6491.671382372761,6407.518845302704,6305.220113343728],\"HUF\":[18557.01189611034,18553.176043381023,18841.19162045301,18800.847439344114,18772.71555386651,18772.71555386651,18752.58122926277,18903.798841123364,19064.758644164227,18854.68798552069,18947.7868038768,18913.24661937755,18913.24661937755,18891.94046144616,18847.531547387713,18827.808000245957,18905.737012710026,18852.922246395843,18955.788469691026,18955.788469691026,18845.643632807765,19036.006186391343,19082.374870309293,19127.25741699836,19100.261954029513,19122.8281710462,19122.8281710462,19106.83749679484,18876.852620303507,18881.234076812525,18664.046764386716],\"IDR\":[903342.2719781364,904385.8987859691,917517.2383083719,921999.759687171,917455.1621480564,917455.1621480564,920295.2772554138,938880.7622847087,933013.7525793654,922849.3070521432,919539.4314950919,917194.118206869,917194.118206869,917842.5692670905,915509.2011306974,917470.9221548965,935479.9191127443,937738.0727822749,942659.2687541186,942659.2687541186,933222.9438771774,937819.4924501015,935915.623536271,929203.3497762686,924379.4875695745,932403.3275868292,932403.3275868292,918454.7722567143,906379.8691981816,899756.6735700737,895779.2799523907],\"ILS\":[212.409652451532,209.96607040092596,209.62356155290487,211.9688806044433,212.18391027392855,212.18391027392855,212.34768653506092,214.3645542339967,212.22586040960678,209.41885077130823,210.14177315178603,209.66733319936984,209.66733319936984,209.49475897244636,209.10796488377326,210.7486778606565,213.71125116258878,216.20313446452107,217.30404664662572,217.30404664662572,214.82130526251484,216.4118677230492,215.9589055875639,214.1189425032955,214.6873032086937,214.7239812847635,214.7239812847635,213.8426879590393,211.11785575507184,209.25035252708744,207.73995331414974],\"IMP\":[47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775,46.81477477252998,47.142867361990795,47.245082174066816,47.835118469279486,48.2862261013407,48.7396604282545,49.10273123171398,49.09429916567534,48.59245371957688,49.001503950101274,48.66567501495032,48.48325314085458,48.32140295694949,48.64139916085264,48.65164423849789,48.31231088705269,47.79310868501431,47.63010917596374,46.897623798347425],\"INR\":[4600.163300999903,4584.875677834292,4612.034519380124,4620.526290294827,4615.996442735749,4615.996442735749,4629.640452131627,4661.434952075362,4613.15429806771,4570.68548245539,4566.808070335338,4553.419817975758,4553.419817975758,4554.419297687039,4555.3034452798765,4550.992389584606,4593.535865084074,4601.642814665787,4616.4920406375595,4616.4920406375595,4594.655117292223,4657.14607637559,4643.3126642806155,4607.484997418255,4606.632377622415,4626.32719253609,4626.32719253609,4569.30821266598,4505.01104059094,4455.093697379674,4414.2156759486215],\"IQD\":[73961.66905510657,73690.96404380284,74305.53370200527,75240.44134949811,75361.50553320741,75361.50553320741,75348.51137827733,76318.76284782495,75258.39329443975,74239.98239488281,74471.6039617426,73915.3139196219,73915.3139196219,74040.71049493746,73647.04599595215,73830.7419882455,74693.65205422723,74678.05642507313,74767.10554123878,74767.10554123878,74823.06533080891,75564.52877751792,75400.64161106902,74740.35510383274,74909.14353172683,74790.35630989293,74790.35630989293,74215.89282609458,73288.95101329261,72389.12390485485,71287.48420675112],\"IRR\":[2609155.587011831,2599899.5208505057,2626673.534276391,2653470.2137750005,2657739.7486813944,2657739.7486813944,2659754.5028632116,2692868.2082705013,2654675.0038130544,2617035.7987586716,2627710.2045481554,2617497.3239810066,2617497.3239810066,2611358.9127432234,2596439.1935760276,2604458.7355184206,2634251.5196506707,2634136.105844675,2645436.139137371,2645436.139137371,2633532.0974563463,2664252.762404459,2659507.9518256476,2634371.641996452,2642267.61801652,2646258.8061165027,2646258.8061165027,2616256.267272945,2583302.2562119365,2553157.016064566,2515483.7891776515],\"ISK\":[8541.032784744237,8531.713124856124,8610.210548516541,8652.880618147445,8680.522323542102,8680.522323542102,8694.674846495192,8763.921247258462,8737.345291512716,8659.430172911616,8676.675723277498,8649.172561071278,8649.172561071278,8649.346648251292,8637.531333895766,8711.201430947174,8648.814243405779,8540.236043542422,8549.862690619875,8549.862690619875,8428.785588598204,8546.73081278719,8547.320861563192,8555.401715298523,8521.396238126546,8556.920929511622,8556.920929511622,8514.585184363565,8453.329491169661,8359.52731018069,8301.908533230557],\"JEP\":[47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775,46.81477477252998,47.142867361990795,47.245082174066816,47.835118469279486,48.2862261013407,48.7396604282545,49.10273123171398,49.09429916567534,48.59245371957688,49.001503950101274,48.66567501495032,48.48325314085458,48.32140295694949,48.64139916085264,48.65164423849789,48.31231088705269,47.79310868501431,47.63010917596374,46.897623798347425],\"JMD\":[9314.218156584251,9268.666194695044,9345.84659163714,9428.918770649776,9444.090223066587,9444.090223066587,9401.460613403851,9480.583216551457,9336.333346807703,9158.316338296949,9216.676862025528,9180.855167347201,9180.855167347201,9098.151124620774,9049.714360074591,8991.59545753625,9064.137468375397,9002.81602410539,9041.436549305532,9041.436549305532,9020.37368338906,9051.476721605632,9019.456743438896,8907.682408302093,8898.948366068867,8912.39030115423,8912.39030115423,8824.666272513261,8716.265502611323,8602.607509119698,8448.075923655273],\"JOD\":[43.93321468411407,43.77832086679741,44.22989699482365,44.68014594090602,44.75579533742726,44.75579533742726,44.78820128990772,45.34741787930424,44.702348336816385,44.06584578690158,44.247297206700324,44.07811088158699,44.07811088158699,43.99740768671832,43.72026252515834,43.85842760183905,44.376466471401464,44.356132606179465,44.54862009291708,44.54862009291708,44.34712288718129,44.82518377423399,44.7822389701958,44.359599340256565,44.49255206828923,44.56247809214545,44.56247809214545,44.056497801176725,43.50220205092756,42.99127964665788,42.35915897083883],\"JPY\":[6596.225882581101,6560.570563065942,6616.840480156898,6642.089982831238,6650.821785992027,6650.821785992027,6692.562529216474,6767.729848437127,6698.664500134392,6618.911936943703,6626.724128131049,6604.479617102852,6604.479617102852,6587.378623313506,6553.072119549883,6562.425574907565,6640.622636366588,6641.42799335916,6669.668089803235,6669.668089803235,6627.770467709544,6676.577469112625,6637.96909927531,6545.794546301321,6553.611984198951,6571.372276309359,6571.372276309359,6468.438183979358,6412.516803526348,6367.824204454554,6302.782935003375],\"KES\":[6695.808339455358,6687.458756528952,6751.974534036267,6818.721675568272,6825.616583819567,6825.616583819567,6833.792895380188,6927.0979136739215,6834.575450172652,6733.897425362184,6764.879556418995,6739.788574510498,6739.788574510498,6719.852346204546,6684.157192764042,6705.55220286146,6785.659657734623,6784.778606791948,6819.367596214192,6819.367596214192,6789.435630753303,6874.328217048838,6847.207537042406,6782.1969205086325,6809.082969741504,6809.526219335755,6809.526219335755,6735.555216116772,6650.839065783686,6573.481190132785,6480.319710409928],\"KGS\":[4830.287422954056,4828.053084705655,4893.198492036781,4945.0968231643255,4953.053781642929,4953.053781642929,4956.8080996788085,5003.247265057389,4934.499153846253,4890.820538656078,4913.401229752114,4894.349084903386,4894.349084903386,4875.522979220011,4854.78305812494,4891.767986176575,4947.725824134971,4934.200184091566,4955.386850784491,4955.386850784491,4942.757757983152,5000.42002207279,4992.604772238047,4940.249419553097,4960.371903119634,4967.864851080281,4967.864851080281,4918.115561445197,4863.167014493778,4811.529035573739,4740.610106192007],\"KHR\":[253508.33825165097,252953.9957243584,255064.6642964489,260253.23399922065,260671.98999045396,260671.98999045396,259342.79272251064,262429.6158529929,258783.95286804234,255404.1232988258,256200.02305281485,255191.24431438284,255191.24431438284,254752.22239330737,253463.6952218005,254914.78890618266,256649.763922221,256475.05278469276,257915.12142139344,257915.12142139344,256973.05965180366,259195.15996437127,259675.0082079725,255932.8058236247,256642.55922342604,257681.08161455166,257681.08161455166,255085.6088344349,250960.48634537117,247701.4317542745,243929.93109133875],\"KMF\":[25589.60870986207,25498.82737188824,25761.412861412082,26024.244146614798,26066.13563950166,26066.13563950166,26085.883852499115,26410.630233841748,26036.047353168506,25666.883533447577,25993.261609691028,25920.116492058645,25920.116492058645,25859.2987757914,25711.56119028711,25865.229813215767,26101.499610093557,25981.526667323084,26159.08664682828,26159.08664682828,26041.357750850075,26269.17672819535,26228.728962178568,26030.89703391409,26140.275046699993,26110.657332971095,26110.657332971095,25814.58317840304,25750.02485261647,25513.38506839212,25074.208942994563],\"KPW\":[55773.860374734904,55575.81096740508,56148.067853905406,56720.51874005208,56809.541775051606,56809.54172203711,56856.0926199373,57563.0871348468,56746.93976941646,55941.029107457485,56170.21734443687,55949.35450570684,55949.35450570684,55820.12935505128,55502.716569429314,55673.71953769894,56307.83388502041,56310.20987439957,56546.55043340514,56546.55043340514,56297.08124376329,56953.10682294152,56849.57252115776,56311.93301865608,56480.668514102494,56564.89831179147,56564.13502696525,55926.248096051175,55221.588062962095,54575.06990449314,53771.45689880076],\"KRW\":[73552.71735486801,73244.54885613864,73937.69201032183,74494.1034486551,74522.14980064817,74522.14980064817,74903.93071232774,75776.38673554189,74819.5088441938,73989.60873767771,74260.52271056232,73817.7372223419,73817.7372223419,73707.54802022183,73318.17217649166,73471.96163589203,74247.02904042922,74303.8928885027,74640.84235251583,74640.84235251583,74010.66434779989,74554.79163519532,74033.23375326334,73371.67691965244,72852.97413242902,73219.15235764555,73219.15235764555,72350.45532740699,71167.95156439058,70525.77036451468,70064.03222345079],\"KWD\":[18.95907185866315,18.88564643153393,19.073839607433367,19.24140133106131,19.28179784200881,19.28179784200881,19.28945963476192,19.516194313088768,19.26014458283767,19.00887156962351,19.084438234896954,19.025894817220202,19.025894817220202,18.964557234993407,18.862333731151338,18.93358484229817,19.137013735009482,19.14307466803845,19.228981894029516,19.228981894029516,19.11305005947979,19.33600214352313,19.29839402051249,19.132593804134647,19.177058477960326,19.194763426357586,19.194763426357586,18.99761328489213,18.765045991061957,18.568525597209273,18.30351511204707],\"KYD\":[51.6289657017008,51.43772595569559,51.86647047262321,52.522881214030804,52.60740186187828,52.60740186187828,52.59716776902549,53.271327956145704,52.53168015947015,51.821072059286884,51.98560997845867,51.78352424203453,51.78352424203453,51.681943553997996,51.409737816287816,51.53749493778735,52.14072896440857,52.13051907854547,52.35416771533293,52.35416771533293,52.23178285728064,52.74741500273286,52.63399636176574,52.171228329421595,52.29191004051056,52.37087284024049,52.37087284024049,51.80742919139632,51.15734187184516,50.5319738079928,49.76453028325241],\"KZT\":[25968.130706075295,25955.78701105874,26171.921587941997,26492.041792248976,26534.66830275311,26534.66830275311,26524.38600327685,26750.94119853133,26419.752903130888,26177.920544717872,26258.476910426005,26156.42024603736,26156.42024603736,26299.0689011015,26204.358117328233,26436.36333280873,26718.890333823103,26712.557700856825,26827.14995849436,26827.14995849436,26764.87830969745,27016.29086758576,26823.283978583735,26553.811077740407,26473.51279246825,26513.5012176446,26513.5012176446,26283.97500626595,26028.5578755313,25806.68248876314,25485.423428394366],\"LAK\":[563784.9517087825,561727.850972755,566395.8917249931,576136.9793735446,577064.0050698727,577064.0050698727,574481.0127036665,581873.0789420139,573798.682470172,566404.0924129742,568171.4870594238,567264.3105246519,567264.3105246519,564885.5375180593,561893.4248612565,566454.5245828907,570176.0251766637,569790.9521470853,573633.3611821432,573633.3611821432,570897.4057441596,577578.5457455557,576019.5641352724,570970.6016887235,572889.8345797415,573497.5021552326,573497.5021552326,569555.9660379497,560181.4123281128,553842.7321035222,544830.3677131694],\"LBP\":[93686.49481456642,93334.07616037552,94112.06189387743,95304.59599389383,95457.94427792303,95457.94427792303,95429.21279515544,96671.31590569654,95316.00292742436,94039.17440045268,94319.64363707296,94300.55473541941,94300.55473541941,93776.81589335819,93289.29146907694,93520.83949608558,94603.85740460597,94581.8652903932,95298.25977265055,95298.25977265055,94765.52377424523,95707.05806954153,95509.32629724688,94673.60448887535,94875.76947424878,95072.19392453782,95072.19392453782,94009.9267841131,92818.99846960421,91695.05967626596,90287.05491835096],\"LKR\":[11532.826875783687,11496.917449398448,11592.5543423345,11741.6192023046,11760.511891865415,11760.511891865415,11733.279815350928,11888.10718987493,11675.136397286435,11527.985854161014,11548.356696417068,11503.47267086776,11503.47267086776,11458.319039756936,11360.334984312125,11405.712501901746,11556.226370685463,11542.827495259298,11592.344676053757,11592.344676053757,11565.241370605407,11671.798576831496,11684.648842444778,11579.023474797606,11639.784710475515,11657.366694637172,11657.366694637172,11532.086105222003,11380.282442120053,11217.765564054915,11062.046197819502],\"LRD\":[12349.86751073144,12306.119172854065,12433.331910067518,12559.980022896825,12580.395663570394,12580.395663570394,12588.867936372375,12746.93665994277,12565.61874089059,12387.988676073046,12441.115081047488,12388.122010883195,12388.122010883195,12359.067839306817,12288.457457928818,12331.060603986753,12467.416003201619,12466.867410945888,12518.801969459539,12518.801969459539,12462.438495990094,12610.797330517955,12566.41271956692,12442.956563562357,12480.253437786065,12503.840277339805,12503.840277339805,12362.043835113975,12201.738874205383,12066.938107219561,11881.412739932804],\"LSL\":[1075.147484357136,1071.3110972703598,1082.3787787907918,1093.3908709307784,1095.1857916667204,1095.1857916667204,1096.0179221287333,1109.653793128637,1093.9081769449892,1078.375833512523,1063.128341708517,1032.6001659807735,1032.6001659807735,1030.1328242124553,1024.2732331357104,1047.224806007459,1050.7588224740377,1056.6641593753013,1053.0464159518374,1053.0464159518374,1048.2603406716394,1054.8267020271355,1041.3250944596984,1043.003889442176,1018.5101081500176,1021.3208552937016,1021.3208552937016,1009.7243578088928,1032.5590511352602,1016.2880822766292,1005.469508913288],\"LTL\":[182.9749064000257,182.3257949496833,184.20343435424235,186.08256185191138,186.38201809471758,186.38201809471758,186.52332431373176,188.8454737099315,186.1670729074366,183.52752843648523,184.2760969469183,183.559908352892,183.559908352892,183.1294040317654,182.08311092499116,182.6454701459666,184.73483505288877,184.7267325981416,185.51918810243384,185.51918810243384,184.6843768565733,186.83874848792718,186.50599421631352,184.7432630540462,185.29700796257595,185.57689463395812,185.57689463395812,183.4728483744333,181.1618672819342,179.04784985371188,176.4058659640549],\"LVL\":[37.48369219946628,37.35074862231939,37.735354123396455,38.12038245056747,38.18173223901231,38.18173223901231,38.21064468475709,38.686321630710864,38.13767004340418,37.596936902549594,37.7502945420056,37.60360814873163,37.60360814873163,37.515336208082815,37.301053709931516,37.41627361026267,37.84428196476224,37.8426286563997,38.0049656238948,38.0049656238948,37.83393489116805,38.27528074430119,38.2070607262965,37.845941697263925,37.95940863582291,38.01677589300068,38.01677589300068,37.58571894897598,37.11228274217921,36.67924368228145,36.13800268141337],\"LYD\":[84.85899879947272,84.51522437835578,85.21899485322959,86.13449796611259,86.27304088608817,86.27304088608817,86.4034939716426,87.11031137060732,85.90272649197827,84.71323310355913,84.97281624537827,84.85895031025946,84.85895031025946,84.688261245539,84.24218112915153,84.47536900620518,85.77118060122817,85.55530802977204,86.39303948493715,86.39303948493715,85.72287242966915,86.64905150725009,86.143573657525,85.45211267305405,85.64163637141111,85.79137778510112,85.79137778510112,84.8601679899045,83.81455813619266,83.09783848824873,82.06047809825418],\"MAD\":[571.3707864398932,569.1848288898176,573.9244564231745,577.3021081181879,578.2310092868855,578.2310092868855,577.9244310867118,583.1390492447673,579.7251450471015,572.4119746384594,573.4688844439444,571.3287352506189,571.3287352506189,569.7606540629521,566.5409906189115,569.8037128203067,573.6912318924218,573.7901780101597,577.0286054383822,577.0286054383822,574.9261300871298,581.5059275658297,582.2567061154872,579.0887552039995,580.1780924431727,579.6883634890524,579.6883634890524,574.9391112465034,567.2803781287978,561.8698684741022,554.3110844725588],\"MDL\":[1031.5416558023342,1029.0035310754588,1037.5633104237534,1050.3164243500628,1052.0064355075074,1052.0064355075074,1047.437746834389,1061.2484722309744,1046.4687775558627,1032.3486116461434,1035.52227086519,1031.4975922660194,1031.4975922660194,1030.7841263042149,1025.2726209028067,1027.9276428093751,1041.7523392611645,1041.511767861621,1045.9796551972477,1045.9796551972477,1043.5516711532648,1052.261755275054,1048.1440185866315,1041.1619426833422,1042.1438517631739,1043.7180282754073,1043.7180282754073,1034.174222886538,1023.6674422560524,1014.456541463846,1002.892833100987],\"MGA\":[238524.6837426036,237810.9354495245,239785.10363567562,242645.63028529464,243036.05482195868,243036.05482195868,243254.73018792394,245178.29832988646,241759.07201636367,239585.80909026426,240234.18450429995,237163.11874143974,237163.11874143974,238996.81904125132,238062.108971667,239032.0630049175,242134.4660525187,241955.86690875795,241893.59859707425,241893.59859707425,242428.7451378706,244565.75821413498,244112.31649114325,242601.43388517023,242968.9107973166,241717.42553310934,241717.42553310934,241145.88038727225,238558.923770916,235302.31811886316,231691.12387869658],\"MKD\":[3227.9223728379898,3219.5877924881843,3250.432823700286,3261.9395102157346,3267.1881157502494,3267.1881157502494,3262.3885893855895,3286.106892019419,3274.6993161251326,3244.0066489965598,3247.4538501713664,3234.8322366250845,3234.8322366250845,3233.2039051036872,3221.1359817818216,3241.748203229592,3256.6158762813875,3249.993589669806,3263.9355101131723,3263.9355101131723,3251.9078237263284,3280.761772051249,3278.809320735298,3269.483697564865,3264.7468791904316,3269.6783105005948,3269.6783105005948,3252.7698188222994,3219.121103009999,3191.53434610327,3163.1618168077034],\"MMK\":[83793.423464442,83302.48436793877,83994.7254684455,84548.50377599073,84684.54488516382,84684.54488516382,83818.1603456419,85253.00287645821,83434.35102345112,82926.85698835386,83060.8245646703,82737.99893204836,82737.99893204836,82549.52927468989,82235.73116848472,82454.46027038869,83465.13521072596,83384.83802059767,83742.54499907405,83742.54499907405,83546.75237472107,83550.82662751664,83434.69282318618,82202.01823748159,82702.07254909752,82826.995144433,82826.995144433,81843.63591571357,80513.7981930518,79615.81193872938,78165.81057259363],\"MNT\":[176606.86859711795,175987.91709606917,178061.36714344373,179921.32161714046,180322.10250185287,180319.09636763303,180435.40456583316,182655.67024995014,180088.07145759574,179065.57693783686,180016.59629127482,177605.15373359484,177607.5304344999,177809.68526237726,176830.69720363565,175777.69919078864,177518.62533869335,178906.44693097126,179549.4709585892,179535.52490471175,178699.71195050926,180733.62273187988,180591.83240173967,179209.6634681561,179655.6935646735,179594.45310825642,179586.4671498569,178131.5738318027,176114.85037403303,173908.69089020515,171245.15216669548],\"MOP\":[494.5691794167765,492.761264670289,496.8770960679034,503.11001237436903,503.9195240539498,503.9195240539498,503.83784064752587,510.32661740603794,503.22317998392435,496.4248647587049,497.999116055686,496.0635993071408,496.0635993071408,495.10966306915725,492.4670026261133,493.68859455679507,499.451705358004,499.37810271034937,501.52035560396104,501.52035560396104,500.34777791306294,505.2781729196541,504.16770984085133,499.77176495450595,500.87452413818596,501.63111690994435,501.63111690994435,496.2480046066295,490.0736450570684,484.03285413143425,476.6790739308105],\"MRO\":[22122.525392686235,22044.045036993215,22271.056552301707,22498.260554570297,22534.4609919773,22534.4609919773,22551.543983511237,22832.308542003022,22508.47562290454,22189.340372257982,22279.84651961676,22193.253239277565,22193.253239277565,22141.206863087158,22014.7054492602,22082.701675598815,22335.30878802173,22334.33064242034,22430.141043708,22430.153400131818,22329.22132634408,22589.69592856927,22549.465911272546,22336.339806464326,22403.288279925728,22437.128625272482,22437.128625272482,22182.743065718736,21903.332198859272,21647.736489523522,21328.312110708932],\"MUR\":[2466.4283735639647,2454.1618281554834,2479.434250630807,2505.055594019869,2508.646043860078,2508.646043860078,2507.744537340771,2535.882611553869,2506.4273497681897,2473.635081738739,2488.038861235251,2474.3188759926693,2474.3188759926693,2468.426692070861,2457.3648277478055,2458.7985203662024,2486.4956073996077,2499.0347423078156,2500.452393624409,2500.452393624409,2486.221653264958,2515.2533367295755,2514.1992413120915,2493.277007295116,2497.5766210195156,2498.6311127543963,2498.6311127543963,2470.080900853615,2438.8290823463976,2416.4700090200304,2384.133490334051],\"MVR\":[954.947150275536,951.5354549979102,961.3167716229945,971.1178172755039,972.7295061559978,972.7295061559978,973.4332891952544,985.6005099546666,971.5810035353503,957.8256905922258,961.0171112265699,958.0008171559015,958.0008171559015,955.7352514214061,950.2889632646369,953.1875156078193,963.6084942507152,964.0904876265953,967.809364992123,967.809364992123,963.1164967237886,974.3127898620712,973.3444741208242,966.7870077542358,967.0654855184387,968.1103107529818,968.1103107529818,956.7545760331799,945.445902877536,933.6114329148314,920.6363710590617],\"MWK\":[46441.06068161849,46292.27719541909,46676.96451830048,47222.28503992541,47298.26754821818,47298.26754821818,47244.668817230806,47854.6245091123,47186.811359814805,46550.27064796836,46543.39757722985,46313.653785165414,46313.653785165414,46454.446611408544,46027.402065371825,46207.89760565058,46765.75000046715,46755.387547837825,47090.945490107064,47090.945490107064,46846.96727731665,47521.75184997717,47276.31187977944,47114.76546998874,46989.40821943606,47136.800900208975,47136.800900208975,46668.848645847014,46126.09881512169,45632.44452453622,44867.43607897052],\"MXN\":[1357.9788846670738,1353.8526788952834,1368.9463552506188,1380.3212492994244,1373.1247528688552,1373.1247528688552,1379.178317954538,1393.4161946172392,1377.1211067536892,1353.163832643475,1348.6522154917534,1340.5869647220525,1340.5869647220525,1340.5043419039962,1342.170664824615,1347.8733346365302,1338.165801740668,1334.6805735411372,1336.7292774105392,1336.7292774105392,1327.3739846436033,1327.1117192573063,1327.5126705706843,1318.1036843034433,1308.8935957553933,1328.5797049528985,1328.5797049528985,1331.7585061087352,1308.066335747677,1331.3710596051828,1338.9808241561905],\"MYR\":[258.31300667395425,257.4782113982574,260.29685704594414,262.5112052213613,262.9337370629843,262.9337370629843,263.13295816480723,264.9378611105038,261.39858718194387,257.7877745940906,258.96407336205516,257.9578774475131,257.9578774475131,257.84874607465514,257.0539143651738,258.0334842989422,260.5130987817895,259.78508541298265,260.96257996977783,260.96257996977783,259.2878583715397,261.36311964923,260.8976102556023,258.9322964267113,258.20209366234764,258.5926075121371,258.5926075121371,256.3114678690158,253.66718974922034,251.9198358084429,249.03905462945693],\"MZN\":[4425.120465840594,4412.203265763431,4461.061137653282,4509.75049920072,4517.013599540559,4517.013599540559,4522.623848013053,4581.819914163907,4519.99595569302,4457.112805969199,4475.952505257371,4458.565344058451,4458.565344058451,4448.060921217889,4423.599175943157,4439.439427849404,4492.013125013342,4493.148112434491,4512.438436573642,4512.438436573642,4492.751320015754,4547.692419033855,4539.580323839822,4498.858747636884,4513.922346202939,4520.7551178166095,4520.7551178166095,4470.409461731987,4415.939088654149,4366.834064948719,4304.192136940809],\"NAD\":[1075.1631166382663,1071.31857338006,1082.3414243777127,1093.402090715365,1095.1855265942193,1095.1855265942193,1096.0058033070763,1109.6258965443847,1093.8874344571263,1078.405733180079,1063.130238366717,1033.2215287833972,1033.2215287833972,1030.7851754377389,1024.8553297437547,1047.2561562244798,1050.763735360576,1056.619712289811,1053.046150792528,1053.046150792528,1048.319502620969,1054.8311189357937,1042.83509488313,1042.9849653316398,1018.5098961691797,1021.3205898771821,1021.3205898771821,1009.7322603102593,1032.591977028904,1016.2750301787609,1005.4723306716393],\"NGN\":[23923.295512281773,23835.968937761627,24037.147260650418,24417.846566527987,24457.162734857087,24457.162734857087,24331.65652847153,24711.940597620807,24354.54156561618,24025.40094401826,24063.49239361798,23716.54139977655,23716.54139977655,23982.595456346975,23658.7241912883,23718.165594863836,23994.501296838243,23989.04839039481,23938.06130774684,23938.06130774684,23830.31091492878,24399.99590266212,24348.366515107544,24135.121570313473,24187.383294555508,24071.203540197086,24071.203540197086,23965.435527248814,23665.399019340257,23496.55574197666,23109.23298260039],\"NIO\":[2160.033565114619,2152.1389162254445,2170.0781574484777,2197.0563125203357,2200.5914536112273,2200.5914536112273,2200.252775785294,2230.182400216699,2199.1666964344276,2170.0293829511625,2176.7813397318587,2151.1734084091568,2151.1734084091568,2165.1420713345974,2154.2898539234156,2154.0412722711635,2179.216002085651,2178.706233593222,2172.9607065459923,2172.9607065459923,2183.001279790052,2204.54217205575,2199.8328316551456,2180.6101495756034,2185.311252440279,2177.7428594122753,2177.7428594122753,2165.2241563572643,2138.1645364922997,2111.9643585747353,2079.82306443237],\"NOK\":[554.5830279387841,552.1894880416679,556.3282559537665,553.4886445680481,558.3955280046941,558.3955280046941,552.7022525843165,557.0332336790663,553.3142139240588,553.7897457769346,556.7640673459151,554.0045122817735,554.0045122817735,552.7751823078158,557.2487117950037,564.3714461048774,564.8013901147799,564.2005873468796,567.633374724303,567.633374724303,562.8102580757483,569.3803425518438,566.9758083753978,567.6572142137413,569.1408331630389,570.9517540896377,570.9523380059801,573.5264601022409,571.682846665595,569.5465219882326,570.6811307623059],\"NPR\":[7357.242310420859,7331.776501245538,7392.765556110021,7391.7443355663445,7403.637920758127,7403.637920758127,7407.872749367584,7433.807042850528,7380.851418849628,7283.376934027908,7295.937108794008,7267.580587411181,7267.580587411181,7263.702182426131,7238.481470011253,7280.325924499243,7338.075555232936,7359.93650924991,7391.509368612352,7391.509368612352,7374.196921266436,7426.267996645017,7422.628927386426,7367.104601163232,7359.601710260103,7370.718501843872,7370.718501843872,7290.801820791562,7209.366217711475,7130.764178498859,7044.893016959135],\"NZD\":[94.78969390283895,94.05207405073466,94.12884131659325,93.99162843455615,93.60377994598592,93.60377994598592,93.80428371957689,94.5311761585699,93.31018802302027,92.38655113172362,92.93883337105746,92.68939238980163,92.68939238980163,92.574388119474,92.58993766517699,93.18120855062212,93.746961349066,93.58830052567275,94.10206911873452,94.10206911873452,93.49121041925216,94.10277112336429,93.5858592534482,93.03066235122013,92.49105521396649,92.95135997652959,92.95135997652959,92.61937066488761,92.02030656206797,91.99279139150565,91.65727825097257],\"OMR\":[23.858585474713045,23.772512711957045,23.982484228531007,24.263472174388323,24.299726315789474,24.299726315789474,24.288023743047294,24.623829529627365,24.27269973957496,23.895519525447707,24.028235888499502,23.932681292801337,23.932681292801337,23.877124961579266,23.743062256373985,23.78361069832492,24.087407256534735,24.085938972124872,24.18677156544385,24.18677156544385,24.081126023534704,24.361379881361923,24.318601257756484,24.08689413722149,24.158926138957654,24.199298064495384,24.199298064495384,23.926561437160398,23.622006657235637,23.34590418126869,22.97126777674179],\"PAB\":[61.95471687618557,61.72631675658297,62.2408529701315,63.02639898659293,63.12781134134971,63.12781134134971,63.12006233128636,63.927503103237626,63.039079908690475,62.18736049737967,62.37956034016011,62.13712043854291,62.13712043854291,62.01937090698645,61.693775493039254,61.84393138443236,62.56888532263768,62.55241045076036,62.82074810307687,62.82074810307687,62.676263947529165,63.2931303269781,63.160252793942696,62.60281295791402,62.7462750117352,62.84107677715976,62.84107677715976,62.16418406552422,61.38644125164775,60.636317525640614,59.71440936276244],\"PEN\":[222.1694940661672,221.41633363212551,223.26193779410346,224.62384499501653,224.98526862489152,224.98526862489152,223.0258501922644,226.5032488126547,222.41462363373307,219.9933314368389,221.49032212262483,220.47178894318876,220.47178894318876,218.90700792720955,218.21020013825034,219.05532814841013,221.33784717905021,221.78815885766642,224.5214709208115,224.5214709208115,222.22350296016455,225.43715536925694,224.09144972124872,220.8786665919686,221.10120741986302,221.63739152975597,221.63739152975597,219.22797922354755,217.96534584252322,215.32413591132686,213.17265901552906],\"PGK\":[218.76422718837406,215.23620493457224,217.0183616300678,219.79563297688327,220.14928591582807,220.14928591582807,222.8694697643314,225.73809297881232,222.6006677941035,216.83107311095392,220.27398468186348,213.50919635565702,213.50919635565702,219.0033183847217,217.8408770838826,215.63562964344274,220.93086999742786,220.88089988104036,215.82175307526606,215.82175307526606,221.31263020512486,223.50244294537504,220.221158923898,221.06684752306847,221.5675652631579,216.76875014950326,216.76875014950326,216.75444361251323,217.54440577275506,211.42161044272257,211.60324832524194],\"PHP\":[3008.5512669234477,2998.17344551458,3032.6040245281806,3052.695925872102,3052.78692701958,3052.78692701958,3058.3862727196733,3104.68441667942,3063.2285886454683,3019.8023599784583,3031.8081856624763,3019.7508080651387,3019.7508080651387,3018.8320915744457,2997.9460339915768,3007.6363021444877,3042.511805502684,3036.4027508343243,3050.127641992734,3050.127641992734,3033.205062594926,3060.3647884030474,3055.105309884898,3032.6281518702376,3036.703988268334,3047.2380870832394,3047.2380870832394,3011.2603682127124,2972.5977885715206,2940.966645481143,2899.6345208806224],\"PKR\":[10439.33092276372,10410.494154436548,10497.005200585474,10549.496767339484,10566.47128702151,10566.47128702151,10453.60025135871,10576.869318547406,10433.23264368839,10321.860216757546,10336.596892906795,10316.46261442626,10316.46261442626,10273.727794742628,10254.837746185254,10281.684293084269,10408.115637504741,10393.392766713821,10429.718576934702,10429.718576934702,10413.486234554222,10516.641688198888,10491.234938551264,10395.767913336977,10405.212232416807,10464.597756115165,10464.597756115165,10326.037693266564,10193.90895694756,10083.944894294762,9897.617857437544],\"PLN\":[230.45156054078384,230.25027215123941,232.9532681667363,232.41005795711024,232.6597006896441,232.6597006896441,232.6723263900588,234.23572324727516,234.9070794714336,232.79217891971837,234.58985540687394,234.02215051602738,234.02215051602738,233.6963284763527,232.21803626852716,234.2899029884577,235.27391017908238,234.75118829212613,236.27980140018647,236.27980140018647,234.39279457672887,236.5879339639263,236.70285106549204,236.10160276982927,236.25216683953315,236.7413432273414,236.74166172716454,236.09397178985947,234.27895208179274,232.94700594154904,232.60970010963572],\"PYG\":[431262.7718721518,429377.49632758764,432960.26333300705,439411.26276868465,440118.2925247384,440118.2925247384,439983.0899944175,444814.9492659981,439679.1789364679,433895.33878264343,436105.5332850594,434410.5596125455,434410.5596125455,433752.57359363016,430777.4715787989,431550.05629344267,437189.3389356679,436877.40617961925,438751.5355045575,438751.5355045575,437725.68486952287,441054.59215371637,440699.32659360504,437682.029849654,438042.59779195604,438704.268926655,438704.268926655,433737.8227949785,428414.46516580175,423521.90930877894,417821.2236808957],\"QAR\":[225.62790020834,224.82517825290165,227.13744494228848,229.4583019875896,229.82856733498377,229.82856733498377,230.000681881169,232.86575026460469,229.5594001710446,226.30716211587307,227.21380435134876,226.34861133974215,226.34861133974215,225.8149227032762,224.5231266823136,225.21848624891487,227.79401401118858,227.78265598495318,228.76460322155418,228.76460322155418,227.7314646381378,230.38845675947658,229.98062699739572,227.80626927466804,228.49038247082274,228.8357529498762,228.8357529498762,226.23686573545956,223.38935197022795,220.77022733498376,217.52098863485836],\"RON\":[253.9316664572549,253.11754822364398,255.81073468990127,256.05776506703535,256.59633069350224,256.59633069350224,256.14627225733847,258.13285475806185,257.49112795550263,255.10875385300454,255.65082222615186,254.9055173536315,254.9055173536315,254.70753539015524,253.859698418159,255.6210956193936,256.65563762145126,256.4586803154036,257.6137769877504,257.6137769877504,255.87759081503387,258.5155439587821,258.6112951605954,257.63093252290776,257.43689583287784,257.81955535800404,257.81955535800404,256.0210772854708,253.64271709610003,252.1624908819085,250.15621441307908],\"RSD\":[6185.316894847442,6145.769542981706,6202.203747553612,6220.71520147124,6235.186407889592,6235.186407889592,6223.4831625412335,6273.126236639552,6254.429658108864,6190.325206649198,6194.980130022828,6171.858667009613,6171.858667009613,6169.125124992444,6144.360144850336,6185.018827757773,6214.47558277883,6207.001071240716,6235.8513909847925,6235.8513909847925,6194.319682056071,6256.126452702311,6257.635367697649,6232.270007605697,6230.237759811593,6242.190022155419,6242.190022155419,6195.941234278364,6135.0772751078675,6092.301876794843,6034.951380191942],\"RUB\":[4635.035825220075,4678.349738816191,4699.064807004469,4684.99321436003,4676.384994851301,4676.384994851301,4674.327045833842,4703.434406467543,4675.3286289759835,4690.308840961965,4687.472042536732,4684.496702898434,4684.496702898434,4720.509881523968,4703.405961296981,4695.293861661254,4699.16709896923,4684.877319710316,4705.617864996945,4705.617864996945,4718.49746135871,4747.722983642735,4723.287391532006,4696.31731669228,4711.726806546635,4757.904140817606,4757.904140817606,4735.712869805806,4651.661196743079,4646.862007869016,4607.568355609426],\"RWF\":[59873.331940304146,59667.03007722214,60163.87410931325,60938.945891830364,61036.99849772723,61036.99849772723,61036.14521595022,61830.52438586696,60983.85193058419,60167.46513598655,60360.778267820475,59119.81795640292,59119.81795640292,60022.20041098414,59715.5974002945,59871.54215915506,60583.16705473362,60575.99705028614,60756.12692960807,60756.12692960807,60695.418205685615,61315.48757313634,61192.37583567115,60664.42034437771,60795.34286345111,60020.83218696589,60020.83218696589,60257.59234168729,59512.85437721506,58796.189830898955,57909.059502729964],\"SAR\":[232.39216660836576,231.59910872648942,233.95507442754717,236.3622270777738,236.73625068321383,236.73625068321383,236.92031736488437,239.85744503938523,236.4756370407999,233.1108104121789,234.0519947522747,233.14563670707005,233.14563670707005,232.60412802109119,231.2791572870784,232.00149494904025,234.67950373468796,234.65268679387836,235.67126078513326,235.67126078513326,234.6150601726521,237.3340190168151,236.9274378834839,234.67423715525834,235.398784981513,235.72214379320323,235.72214379320323,233.0769548181847,230.11072179628977,227.42037478699805,224.0876307558756],\"SBD\":[512.199402464714,510.3823506722824,515.6383104105713,520.8987162190142,521.7368493421856,521.7368493421856,522.1323926527987,528.6329107237243,521.135222413272,513.746352801016,515.8418227039193,512.970674798251,512.970674798251,511.7676477947464,508.84372113751084,510.41540816641475,509.61287538758313,508.76150534996617,513.1075522650549,513.1075522650549,510.79863353213506,516.7571863649808,513.7383014648104,510.9614801961225,509.1651477021509,513.267083282963,513.267083282963,507.4478510098703,500.2224386518985,495.20912728354176,487.0902848484069],\"SCR\":[1108.1029033887405,1104.0636724637493,1115.2179045407195,1127.4722367771599,1129.102772436421,1129.102772436421,1113.7386029460179,1144.1209564144935,1127.7830529891007,1112.0974997704402,1120.2128011484422,1116.016533774877,1116.016533774877,1113.1474027470017,1092.030636885831,1110.284768125261,1122.9918838848341,1122.9630579477862,1127.700110363952,1127.700110363952,1122.7276917528854,1135.8304653271389,1133.8392701221744,1123.077950130534,1126.4278038632926,1127.9228522747003,1127.9228522747003,1116.7707983850432,1102.5513608642252,1089.6747455984955,1073.4880452756968],\"SDG\":[3429.714086846928,3414.3823791248433,3449.7903675381795,3485.1852269530273,3490.862918944475,3490.862918944475,3493.4556746519625,3536.9440699115835,3486.4615553380704,3436.6452062363755,3448.055327206379,3439.333536483619,3439.333536483619,3431.2672527408927,3411.6584484667073,3421.1545542246727,3460.190891634247,3461.1939460036,3474.7024782416484,3474.7024782416484,3459.075795928367,3499.356071593415,3494.531186112593,3461.5051629292993,3470.6531411667684,3477.1254732421307,3477.1254732421307,3437.701416265633,3392.998677263608,3354.789105742211,3303.7621858335206],\"SEK\":[542.5320604494743,541.0896609175963,545.1044436131563,543.2669444979583,545.2624049114233,545.2624049114233,544.5469735771468,552.9138736308394,547.2810751786002,544.2831780616018,546.2791300755554,543.5573414622384,543.5573414622384,543.8404989332217,542.3459413194869,545.2953124569976,547.4069191254863,547.2121405748641,550.6028816962994,550.6028816962994,548.1663322242227,553.8171786390379,553.9659516979068,551.5440497099958,551.0274945294665,549.6314820933673,549.6314820933673,548.2909810220877,543.1002488750281,540.9193868099541,542.9997839456],\"SGD\":[84.83890764620776,84.42436089123235,85.23447553644343,85.69819653152429,85.75842913255957,85.75842913255957,85.91911154968973,86.82190442786869,85.84613673021894,84.86025734913031,85.16580121724593,84.8341651126901,84.8341651126901,84.75766142815804,84.42109484422724,84.73011582001736,85.55733796997073,85.50220379223867,85.94826125936406,85.94826125936406,85.39519003890298,86.02328730347554,85.73021682924475,85.05820492685592,85.15063575571489,85.41629116001671,85.41629116001671,84.47826644053627,83.55897806160178,82.80250887695722,82.2331184046555],\"SHP\":[47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775,46.81477477252998,47.142867361990795,47.245082174066816,47.835118469279486,48.2862261013407,48.7396604282545,49.10273123171398,49.09429916567534,48.59245371957688,49.001503950101274,48.66567501495032,48.48325314085458,48.32140295694949,48.64139916085264,48.65164423849789,48.31231088705269,47.79310868501431,47.63010917596374,46.897623798347425],\"SLL\":[604960.8369522336,602814.6551346892,609022.8986496843,615236.2589742931,616225.9549011375,616225.9549011375,616693.0718322926,624370.9796337986,615515.6166510292,606788.2764303919,608326.7112184709,607050.5175593592,607050.5175593592,605626.8694019985,602166.7079532566,603098.7469713886,609997.6684836748,610283.7768635066,612587.6508019033,612587.6508019033,609831.0984763546,616944.8746633179,616161.9848949924,610338.3353823225,611853.9185003218,613092.3959946419,613092.3959946419,606141.3248298191,599733.496640562,592735.0680576327,583988.9376287808],\"SOS\":[36096.62919346944,35968.33500858952,36338.77876407646,36709.55593006462,36768.62930455036,36768.62930455036,36796.50838209819,37254.43764659615,36726.09624935472,36205.39753092114,36446.5611460933,36367.101475122974,36367.101475122974,36281.805559459855,36074.49835230749,36031.27793660097,36412.186790949745,36410.58199121628,36503.961032836065,36503.961032836065,36339.65061258206,36890.1409030534,36919.29199278622,36570.41789777095,36648.5083234659,36735.49367720477,36735.49367720477,36318.89255706137,35707.93911055847,35412.485531146514,34770.49998558467],\"SRD\":[462.15769032826415,460.51779686332503,465.257879856284,470.0059321042986,470.76414959425136,470.76414959425136,471.115699157959,476.9836917995048,470.21879701379294,463.5496538780825,465.4434522142559,463.6360015914863,463.6360015914863,462.5478632517763,459.90340016139925,461.32570240491265,466.6024555075072,466.5801654695688,468.5848117207343,468.5848117207343,466.4747961138796,471.91715539176283,471.07420357425326,466.62234221907846,468.02342973314467,468.7305098431019,468.7305098431019,463.41232117898585,457.57516186477187,858.26876770408,845.6023277789924],\"STD\":[1319466.6190567566,1314785.7690587738,1328325.548816236,1341876.8113676081,1344035.932518712,1344035.932518712,1345054.825148716,1361800.6267877594,1342486.0717152688,1323451.7034350405,1328849.8140489948,1323685.081782344,1323685.081782344,1320580.8486685695,1313035.8522668618,1317091.3912695702,1332157.781973689,1332099.4426037036,1337813.918724906,1321543.902808364,1315597.1679726401,1330943.858265081,1328573.5797953317,1316016.5774419038,1319961.0586482529,1321954.8711541875,1321954.8711541875,1306966.9371354224,1290504.5554775589,1275445.319923123,1256625.4161828884],\"SVC\":[542.1170181397293,540.0856141568337,544.5875578661222,551.4875536482011,552.3749893029611,552.3749893029611,552.3004263273639,559.3995361019837,551.5721108729061,544.165790282288,545.8144488165129,543.6930824277401,543.6930824277401,542.6891798038773,539.8270932951806,541.1540329501977,547.4599043426679,547.3534527457158,549.7014991399543,549.7014991399543,548.4255279416775,553.8350059209722,552.6322146728611,547.7658536919267,549.0433538870849,549.8726926261132,549.8726926261132,543.95619560589,537.1377921981803,530.5935717808572,522.5201287930424],\"SYP\":[31690.80389353181,31573.683557182263,31904.827420001286,32237.81430347426,32295.20141731312,32295.20141731312,32322.192750320544,32716.003588388252,32259.27940537183,31794.84129727068,31896.410634455842,31784.779228675692,31784.779228675692,31702.706707035333,31536.744701737454,31634.447872169883,31982.274189409058,31972.980066641474,32093.526943119636,32093.526943119636,31956.94367924283,32351.143621047486,32315.353335951833,31981.369436746616,32100.34306967173,32146.514782516155,32146.514782516155,31768.477855395617,31387.0460667688,31045.47433058387,30576.015607239813],\"SZL\":[1040.9610494151689,1035.0456915667298,1043.6645488383756,1053.8776474860947,1055.5733571105682,1055.5733571105682,1056.0800013738224,1064.2297796566245,1058.852202367617,1044.9656923119956,1033.272149335434,1030.1127718628427,1030.1127718628427,1038.7234967044978,1041.731533127351,1038.3185039176285,1047.0148859714495,1046.4383208243576,1053.0456735057712,1053.0456735057712,1048.4879798373145,1040.9031158946082,1027.6085875999097,1024.4330819782656,1010.7787960267498,1021.3201121274475,1021.3201121274475,1036.1396803430537,1019.696193346944,1026.3735729640227,1013.1393046355657],\"THB\":[1950.500619592322,1934.3802300536925,1948.4370419033535,1963.0661701829404,1963.5926221084783,1963.5926221084783,1963.9437974063594,1987.7420408449343,1971.548474012153,1955.405779134167,1959.2516087258466,1951.4121200527281,1951.4121200527281,1945.5095351187986,1937.5334322258302,1942.2268974359383,1956.2468652689447,1961.0414656962348,1964.7017212294636,1964.7017212294636,1959.9673160743334,1973.2761340832071,1963.7461041896279,1952.363218869884,1953.5418443789986,1953.9998655515544,1953.9998655515544,1939.7759075748318,1922.8312271018872,1909.0601224897919,1888.4884550397067],\"TJS\":[639.0917692177603,636.7222786637946,642.0242460563289,650.2597100163971,651.305984316947,651.305984316947,651.2032941243609,659.1415061653215,650.4169797022795,641.4882606529917,643.4564149895508,640.955553813137,640.955553813137,640.3648747709223,636.6140833617336,638.895383051474,646.164602129698,645.5468302832523,648.3161024177732,648.3161024177732,646.8249148268656,653.1921954432048,651.807997250426,646.0934116882615,647.4970591036234,648.475141881812,648.475141881812,641.5617285329388,633.8445857425329,625.7740791065171,616.2485776738578],\"TMT\":[217.5070875330354,216.73545247210882,218.9674483323152,221.20128146095232,221.55719199787802,221.55719199787802,221.72516722856315,224.4856270231167,221.3017093810886,218.1640297691541,218.42980069189468,218.20247305726136,218.20247305726136,217.6907474327235,216.44703264765457,217.11555977076165,218.9735337391891,219.5895589637655,219.90324426100378,219.90324426100378,218.91370008520076,221.46741880075874,221.70460275439663,219.60916092466962,219.6398645188567,220.6001437723049,220.6001437723049,218.09902787833965,214.73834736295535,212.2324979198148,209.1009130193229],\"TND\":[169.017115356718,168.41735548082178,170.15220467061053,171.88794664437515,172.1646954576729,172.1646954576729,172.29482219657265,174.44000830723724,171.96591474262934,169.52753550589975,170.7120931434267,170.31920421663503,170.31920421663503,169.9197113731794,168.94888998231684,169.79461642124554,171.7693048644825,171.65527761309195,172.18448552872712,172.18448552872712,171.40918351220137,173.5924394215992,173.54233217342374,171.98030221972158,172.41721123975177,172.85802886216763,172.85802886216763,170.87562899623828,169.49023806095875,167.78570218467675,165.04028506735682],\"TOP\":[141.87223620422466,141.1096362100119,142.1572647243031,143.47521818988523,143.70608762948913,143.70608762948913,143.16435017008004,144.7519619541523,142.7270379217439,140.64119295051924,141.82646291933256,141.2752585683053,141.2752585683053,140.91074977847794,140.2311485991705,141.27664954345238,142.40477071825867,142.85192980259137,143.46513376040897,143.46513376040897,142.59410058322345,144.1911006822493,143.8363082651191,142.47708380702824,142.9038081220461,142.92525623091018,142.92525623091018,141.143047121821,140.0949812092081,139.00318488891747,137.88414443687103],\"TRY\":[458.136836809311,454.4403470430505,458.6154515503328,461.0471458058708,462.99169371861234,462.99169371861234,464.0812788525222,469.9418045088898,465.4773302176639,462.4396287200591,464.4469163849147,462.3346211860592,462.3346211860592,462.8976968253866,461.525275979809,463.4952321046201,466.95776814037225,467.31887391891456,469.7387320033438,469.7387320033438,468.93541692184033,473.5621611802719,473.37946485580164,472.3953091155194,474.73559098318486,474.9818651223354,474.9818651223354,472.83357794135605,469.07506506992894,466.17188690319267,455.15413687554246],\"TTD\":[419.8787172060572,418.34166381378003,421.82880441597274,427.1395278500466,427.8268046284924,427.8268046284924,427.75656625245153,433.25832961257754,427.24248959650197,421.45997608365747,422.4296677420185,420.7878036282674,420.7878036282674,419.9885028865382,417.7622183808636,418.81296708838374,423.1460194871877,423.0522161463524,424.86704180786415,424.86704180786415,423.87360925762783,428.080507704723,427.14715076005524,424.76300484422717,425.20282352827695,425.84509256984853,425.84509256984853,421.25753398996875,416.0022815120728,411.86386867022475,405.8147686187827],\"TWD\":[1821.3274085991704,1814.3229005150629,1831.5595215268622,1849.803714944539,1852.4984042825454,1852.4984042825454,1856.3013540523423,1877.5120218937077,1850.5804122303314,1825.2434721374143,1831.302783117384,1823.7937679002027,1823.7937679002027,1818.772316967495,1804.902876841462,1813.316751284442,1832.5596111674113,1832.7092690705074,1840.718266184934,1840.718266184934,1830.712838990451,1847.2264480075878,1844.0657580079092,1824.1958371333951,1820.4569356714785,1823.9022427820466,1823.9022427820466,1802.2249687907915,1783.3898066183328,1766.5320942658266,1751.7997100498342],\"TZS\":[143734.7433952789,143255.36742057808,144730.61356993503,146212.85848945248,146453.86474805037,146453.86474805037,146492.80755866476,148313.43560261003,146254.342233472,144199.5551763145,144725.07801946308,144162.5904675192,144162.5904675192,143886.7708225547,143093.48885347202,143493.64625958426,145155.60909873678,145123.2881501768,145745.84592971578,145745.84592971578,145108.53763956946,146842.17624850044,146535.06677998038,145154.77669556602,145561.68073101083,145781.5534616709,145781.5534616709,144225.40898167796,142426.25120695398,140679.8176032666,138536.57026531975],\"UAH\":[1699.2549777089025,1694.4442134019225,1708.5394985255439,1732.2346618242611,1735.0218768054528,1735.0218768054528,1738.2603266691315,1765.0526764820113,1744.1660245352539,1722.017765113976,1729.0419800623733,1722.3218562759218,1722.3218562759218,1722.159289347008,1716.3433572793622,1721.657238083143,1742.0767082422917,1746.1720077339803,1753.6627526814134,1753.6627526814134,1749.5773619853387,1778.5603877687038,1774.0319245320384,1762.0827186660451,1767.3770928566375,1770.0466830161074,1770.0466830161074,1754.5688289338648,1730.6840606767837,1708.987673701894,1687.294673272353],\"UGX\":[227497.4090351638,226913.8451546153,228799.48252900844,231684.2616824461,232057.04908098094,232057.04908098094,231957.5484454895,235203.4401265003,232303.55573819115,229168.0238967527,230062.4224876237,229168.2579100328,229168.2579100328,228730.22482990578,227635.4429951503,228170.81009022438,231811.58503444778,231510.94239171944,232504.08726323504,232504.08726323504,231969.2928608362,234184.4547048413,233691.3275727132,231146.26860781308,231645.22030630903,231995.1227217037,231995.1227217037,229394.77366446255,226525.91335169502,224237.27893293093,221062.59719125452],\"USD\":[61.96783120599299,61.748013158859266,62.38387757579655,63.02031278268977,63.12171467382568,63.12171467382568,63.16954310966786,63.95603976208082,63.04891929395878,62.15498673761373,62.40848437771277,62.16594898402083,62.16594898402083,62.02015775712953,61.665820225058674,61.8562926277208,62.56386678262547,62.561120390316034,62.829498360286784,62.829498360286784,62.5467714529145,63.27642057615021,63.163712069575276,62.56671402437063,62.75422429315499,62.849039272738956,62.849039272738956,62.13647262739927,61.3538284409864,60.63787134681542,59.74308868855094],\"UYU\":[2661.2350807735584,2650.892570362987,2673.0117406044433,2697.1910708857663,2701.53092657943,2701.53092657943,2692.8716569742464,2717.9108108150335,2685.844817125036,2643.910740616661,2662.7053813561392,2652.3564637896666,2652.3564637896666,2642.395744106999,2619.0530292222616,2625.591300906665,2663.802369313571,2660.1183175883352,2671.5297860045653,2671.5297860045653,2665.306138255152,2690.45768173263,2684.6166235379224,2657.961879372729,2663.6647203832426,2667.6882178101787,2667.6882178101787,2639.292473795453,2606.35608138604,2578.285930251101,2533.9766057965467],\"UZS\":[635620.3544997358,633505.0234698132,638869.2559242848,647374.9505560544,648416.600007834,648416.600007834,647703.3844098275,656123.2093624601,647296.1362474874,638558.7242839198,640532.148640962,638755.1514886988,638755.1514886988,636828.5958619606,633439.7704682115,635275.1447301724,642443.6678675355,642296.605906578,645573.1382895637,645573.1382895637,643568.2523421856,649902.266882783,649664.3376266421,642851.6266865019,644235.2380369523,646716.6315808909,646716.6315808909,639464.5441757797,630345.3961011211,622621.590059393,613142.0178669514],\"VEF\":[618.9034125402694,616.7080010699932,623.0590882419701,629.4150967302189,630.4283439896474,630.4283439896474,630.9058554673181,638.7608377777062,629.7009252149311,620.7730024222744,623.3050538321063,620.8826419316464,620.8826419316464,619.4263728103398,615.8875251525576,617.7897962608108,624.8565679854032,624.829368056136,627.509899919622,627.509899919622,624.6859128122687,631.9731533855254,630.8476607767739,624.8848906661736,626.7579668266726,627.7050252467607,627.7050252467607,620.5880684397002,612.7710745616179,605.620500528888,596.6843522351542],\"VND\":[1435856.6420011194,1430514.6677025727,1445746.552655586,1460592.4526443467,1462845.699077383,1462845.699077383,1462691.836790221,1481588.072150433,1460937.973665645,1441175.9206515092,1446629.204260858,1441006.7085294265,1441006.7085294265,1437323.5024399906,1429827.3878705567,1433326.82399646,1450136.5201876631,1449770.030630902,1456136.5027342879,1456136.5027342879,1449552.849474824,1466725.3879955832,1464061.0597428298,1451198.475795043,1454507.4196388917,1456840.7223265101,1456840.7223265101,1440261.3558758143,1422949.7643604986,1405949.389614063,1384514.3305991606],\"VUV\":[7049.967163240202,7014.961923292286,7062.233579014242,7120.542348712343,7073.336219612578,7073.107037928175,7137.451616531202,7140.064118285052,7050.517566619298,6952.137151824904,7031.758963984825,6948.26658580362,6948.262332411664,6976.088154399254,6952.463860157541,7014.894262392695,7056.024995788187,7068.980925605246,7041.300051638106,7041.299362223902,7054.491489433173,7125.351992118124,7092.304879236407,7035.620869534127,7051.304199003954,7004.072652906472,7004.102114140114,6988.20798390316,6946.349691762852,6887.999508846414,6845.1259675188885],\"WST\":[163.2399383326367,162.25562951483778,163.8576426386522,164.15899692248334,167.03278580844292,167.0285446484262,163.7466605169919,166.0728465762145,163.23237000675175,160.7937268041668,162.20515963604797,163.98217531267082,163.9818602466,161.33313050188082,160.3108166819921,161.55808331350673,162.7958911889528,162.99654194450693,166.2595537922387,166.2595007603768,162.7353990193872,164.18862802494937,164.586054682185,162.2376718339067,162.55421981095068,165.34923628106614,165.34907703115454,160.7956724033051,158.76375418319776,158.52125060605087,156.9615396029322],\"XAF\":[34364.656113641126,34277.52104767257,34561.04948788123,34727.096203453046,34782.973160759415,34782.973160759415,34734.20579377455,34982.63354267498,34862.941049565634,34534.86636165579,34538.95564552808,34404.71591889046,34404.71591889046,34421.17528034465,34292.11655286822,34510.378966951735,34670.128677718865,34599.91953229913,34748.347184924285,34748.347184924285,34667.835706259204,34892.540799773014,34906.989792789755,34807.12069648169,34760.06738425039,34812.573130564575,34812.573130564575,34594.90814696588,34238.636186872005,33971.898867278076,33642.59515137961],\"XAG\":[2.3337212178889493,2.3343237629810627,2.2850122444780245,2.289841602417773,2.294149482043533,2.294149482043533,2.2540479075973376,2.216898345497219,2.289226057936533,2.310223081053275,2.322932130662637,2.3138977349451824,2.3138977349451824,2.31134606693888,2.314748441629425,2.335643769089798,2.3081586184612415,2.332257875446098,2.3504781821689225,2.3504781821689225,2.332287318586631,2.3005708217856795,2.3111154403112235,2.3231598553194224,2.316473600938816,2.348246112915153,2.348246112915153,2.361636191685689,2.5255882381120793,2.5763908899463077,2.6895461463524417],\"XAU\":[0.03215633668777931,0.03220478024627849,0.03212373854612095,0.03217749541844838,0.032126787126643734,0.032126787126643734,0.032069894865447056,0.03216374819149278,0.0321774491206636,0.032215838986592936,0.03219050445294666,0.032136739221296985,0.032136739221296985,0.0321559425135839,0.03218774780567791,0.03219183358518471,0.03211865607819181,0.032147595087290606,0.032349435745747994,0.032349435745747994,0.03218873645629038,0.032142323248561235,0.032144653570395136,0.032123280069446675,0.03211509693598688,0.03222156544384786,0.03222156544384786,0.03218952223258206,0.03219536668488571,0.03206051024016976,0.032168045204642635],\"XCD\":[167.47114570170078,166.87706776066616,168.5955770636273,170.31553617335948,170.58963465646403,170.58963465646403,170.7188990955856,172.84430235218466,170.39288956049256,167.97696401376072,168.66212173873905,168.00661925698486,168.00661925698486,167.61256184033692,166.65493816995146,167.16966695817123,169.08195592804552,169.0745489165032,169.79990785937048,169.79990785937048,169.03580418962798,171.0076431884384,170.7030651734559,169.08968409188822,169.5964882207504,169.85271761405653,169.85271761405653,167.92694231971188,165.8117217403466,163.87685784329489,161.45875545381475],\"XDR\":[43.85447624795036,43.72760879400701,44.089302803588076,44.629339369192685,44.701190402212006,44.701190402212006,44.50084233096486,45.053783660740116,44.283084152654084,43.87691989454394,44.124277848439064,43.95281960743337,43.95281960743337,43.81118648619104,43.57891860013503,43.81424273221232,44.408162513583896,44.26549644728804,44.455390079735075,44.455390079735075,44.35144281580554,44.76749788284088,44.58915817027296,44.190978624248466,44.369656177539134,44.436723745297876,44.436723745297876,43.884644738128145,43.4379156785519,42.94414707102209,42.42016025592386],\"XOF\":[34364.656113641126,34276.50529008263,34561.04954071633,34726.80438320676,34782.68094483426,34782.68094483426,34734.20579377455,34984.09232600713,34862.64703809665,34535.890688470885,34538.95564552808,34502.12263802527,34502.12263802527,34420.88377859499,34290.37266667459,34511.55365327139,34670.128730545606,34599.62735341767,34870.39365121371,34870.39365121371,34667.39591645243,34891.367658190204,34906.4016627126,34807.1207494904,34756.691960373915,34755.53942031315,34755.53942031315,34595.7892231849,34237.616997403464,33972.33424797126,33642.45057474262],\"XPF\":[6252.700996721216,6230.456717883162,6294.491866950454,6357.811337041443,6369.208071693406,6369.208071693406,6373.720512147702,6453.145081741311,6361.684276119988,6271.463639710961,6297.078241952224,6303.851028912002,6303.851028912002,6288.587336547599,6252.037566771051,6287.709619671736,6348.34307736199,6331.262717205735,6361.509804354885,6361.509804354885,6332.850257583512,6387.765284351027,6389.010673279104,6328.616364954184,6360.11757124586,6357.203174799858,6357.203174799858,6285.130655933511,6264.084109414204,6206.271966676849,6098.478395524869],\"YER\":[15513.640142627399,15458.617716186862,15617.797632796515,15777.127665637398,15802.543826262097,15802.543826262097,15814.484739772046,16011.392602209431,15784.324668375399,15560.516169116805,15623.981449993893,15566.577375020093,15566.577375020093,15529.77176543613,15440.588290457514,15485.733369036749,15662.867340135997,15662.157407029865,15729.388328064815,15729.388328064815,15658.563818940293,15837.875888304341,15813.044390564251,15663.587060178437,15707.223158866025,15734.279781209205,15734.279781209205,15555.83976235572,15359.908512587212,15180.70038870527,14956.72885836575],\"ZAR\":[1039.6906905153844,1035.1885218583416,1056.496185994277,1053.1975803543066,1046.1067168517507,1046.1067168517507,1055.6676439137702,1065.667387187731,1060.9280467298975,1044.042382155419,1036.5890884178375,1030.8985991544223,1030.8985991544223,1038.974764183519,1044.7392064450373,1037.4504290325692,1048.0322760987685,1048.893784753882,1051.0721988296948,1051.0721988296948,1044.3798330797672,1041.4295262614537,1028.3209322820949,1023.1660147117641,1010.3495348300805,1026.6799333183294,1026.6799333183294,1037.2255893974857,1018.7524046966531,1028.4635660322156,1017.2609701022408],\"ZMK\":[557784.8490183783,555806.0615462277,561529.6790753985,567258.3541491843,568171.3899679825,568171.3899679825,568601.9756648007,575680.7390797872,567516.1008947921,559469.3971901061,561751.5676397113,559568.3676302045,559568.3676302045,558256.0460456085,555066.3521348803,556780.8069479327,563149.7573233309,563125.2297568674,565541.1253296242,565541.1253296242,562996.3245663543,569566.3806691178,568549.0823562054,563175.6936619654,564863.5282796543,565716.9949862376,565716.9949862376,559303.007621686,552256.8352754446,545813.6237784892,537760.7358276977],\"ZMW\":[1195.7222063260776,1192.9009770170078,1202.8341862180496,1230.5582944719158,1232.5383035041637,1232.5383035041637,1232.3660437038227,1250.357710011896,1238.7414815445454,1217.3646487084848,1224.2334922734142,1219.4753570636271,1219.4753570636271,1218.3954812076004,1211.9139035880783,1218.8169050059478,1235.7012666032213,1248.4849529852424,1253.8407424541042,1253.8407424541042,1250.9302662167634,1262.081147354596,1255.0791109786837,1246.3146204112143,1254.8412378516541,1256.7366553403208,1256.7366553403208,1243.3413168871168,1225.145003360126,1210.1365967607626,1192.1337491016943],\"ZWL\":[19953.64873006784,19882.862537494133,20087.617984053628,20292.547119771083,20325.19843369739,20325.19843369739,20340.606640673886,20593.84523010642,20301.76068195094,20013.91320442851,20095.54619456001,20017.442504308267,20017.442504308267,19970.49866629714,19856.399390005467,19917.72932958718,20145.5709677732,20144.688736596145,20231.106002536733,20231.119949916407,20140.08316648683,20375.021048756713,20338.73519054303,20146.503808445806,20206.88868082339,20237.41134831045,20237.41134831045,20007.9655754596,19755.947890341766,19525.410578032668,19237.302262249945]}}");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),
/* 36 */
/***/ (function(module) {

module.exports = JSON.parse("{\"IS\":\"آيسلندا\",\"ET\":\"إثيوبيا\",\"AZ\":\"أذربيجان\",\"AM\":\"أرمينيا\",\"AW\":\"أروبا\",\"ER\":\"إريتريا\",\"ES\":\"إسبانيا\",\"AU\":\"أستراليا\",\"EE\":\"إستونيا\",\"IL\":\"إسرائيل\",\"SZ\":\"إسواتيني\",\"AF\":\"أفغانستان\",\"PS\":\"الأراضي الفلسطينية\",\"AR\":\"الأرجنتين\",\"JO\":\"الأردن\",\"TF\":\"الأقاليم الجنوبية الفرنسية\",\"IO\":\"الإقليم البريطاني في المحيط الهندي\",\"EC\":\"الإكوادور\",\"AE\":\"الإمارات العربية المتحدة\",\"AL\":\"ألبانيا\",\"BH\":\"البحرين\",\"BR\":\"البرازيل\",\"PT\":\"البرتغال\",\"BA\":\"البوسنة والهرسك\",\"CZ\":\"التشيك\",\"ME\":\"الجبل الأسود\",\"DZ\":\"الجزائر\",\"DK\":\"الدانمرك\",\"CV\":\"الرأس الأخضر\",\"SV\":\"السلفادور\",\"SN\":\"السنغال\",\"SD\":\"السودان\",\"SE\":\"السويد\",\"EH\":\"الصحراء الغربية\",\"SO\":\"الصومال\",\"CN\":\"الصين\",\"IQ\":\"العراق\",\"GA\":\"الغابون\",\"VA\":\"الفاتيكان\",\"PH\":\"الفلبين\",\"CM\":\"الكاميرون\",\"CG\":\"الكونغو - برازافيل\",\"CD\":\"الكونغو - كينشاسا\",\"KW\":\"الكويت\",\"DE\":\"ألمانيا\",\"MA\":\"المغرب\",\"MX\":\"المكسيك\",\"SA\":\"المملكة العربية السعودية\",\"GB\":\"المملكة المتحدة\",\"NO\":\"النرويج\",\"AT\":\"النمسا\",\"NE\":\"النيجر\",\"IN\":\"الهند\",\"US\":\"الولايات المتحدة\",\"JP\":\"اليابان\",\"YE\":\"اليمن\",\"GR\":\"اليونان\",\"AQ\":\"أنتاركتيكا\",\"AG\":\"أنتيغوا وبربودا\",\"AD\":\"أندورا\",\"ID\":\"إندونيسيا\",\"AO\":\"أنغولا\",\"AI\":\"أنغويلا\",\"UY\":\"أورغواي\",\"UZ\":\"أوزبكستان\",\"UG\":\"أوغندا\",\"UA\":\"أوكرانيا\",\"IR\":\"إيران\",\"IE\":\"أيرلندا\",\"IT\":\"إيطاليا\",\"PG\":\"بابوا غينيا الجديدة\",\"PY\":\"باراغواي\",\"PK\":\"باكستان\",\"PW\":\"بالاو\",\"BB\":\"بربادوس\",\"BM\":\"برمودا\",\"BN\":\"بروناي\",\"BE\":\"بلجيكا\",\"BG\":\"بلغاريا\",\"BZ\":\"بليز\",\"BD\":\"بنغلاديش\",\"PA\":\"بنما\",\"BJ\":\"بنين\",\"BT\":\"بوتان\",\"BW\":\"بوتسوانا\",\"PR\":\"بورتوريكو\",\"BF\":\"بوركينا فاسو\",\"BI\":\"بوروندي\",\"PL\":\"بولندا\",\"BO\":\"بوليفيا\",\"PF\":\"بولينيزيا الفرنسية\",\"PE\":\"بيرو\",\"BY\":\"بيلاروس\",\"TH\":\"تايلاند\",\"TW\":\"تايوان\",\"TM\":\"تركمانستان\",\"TR\":\"تركيا\",\"TT\":\"ترينيداد وتوباغو\",\"TD\":\"تشاد\",\"CL\":\"تشيلي\",\"TZ\":\"تنزانيا\",\"TG\":\"توغو\",\"TV\":\"توفالو\",\"TK\":\"توكيلو\",\"TN\":\"تونس\",\"TO\":\"تونغا\",\"TL\":\"تيمور - ليشتي\",\"JM\":\"جامايكا\",\"GI\":\"جبل طارق\",\"AX\":\"جزر آلاند\",\"BS\":\"جزر البهاما\",\"KM\":\"جزر القمر\",\"MQ\":\"جزر المارتينيك\",\"MV\":\"جزر المالديف\",\"UM\":\"جزر الولايات المتحدة النائية\",\"PN\":\"جزر بيتكيرن\",\"TC\":\"جزر توركس وكايكوس\",\"SB\":\"جزر سليمان\",\"FO\":\"جزر فارو\",\"FK\":\"جزر فوكلاند\",\"VG\":\"جزر فيرجن البريطانية\",\"VI\":\"جزر فيرجن التابعة للولايات المتحدة\",\"KY\":\"جزر كايمان\",\"CK\":\"جزر كوك\",\"CC\":\"جزر كوكوس (كيلينغ)\",\"MH\":\"جزر مارشال\",\"MP\":\"جزر ماريانا الشمالية\",\"WF\":\"جزر والس وفوتونا\",\"BV\":\"جزيرة بوفيه\",\"CX\":\"جزيرة كريسماس\",\"IM\":\"جزيرة مان\",\"NF\":\"جزيرة نورفولك\",\"HM\":\"جزيرة هيرد وجزر ماكدونالد\",\"CF\":\"جمهورية أفريقيا الوسطى\",\"DO\":\"جمهورية الدومينيكان\",\"ZA\":\"جنوب أفريقيا\",\"SS\":\"جنوب السودان\",\"GE\":\"جورجيا\",\"GS\":\"جورجيا الجنوبية وجزر ساندويتش الجنوبية\",\"DJ\":\"جيبوتي\",\"JE\":\"جيرسي\",\"DM\":\"دومينيكا\",\"RW\":\"رواندا\",\"RU\":\"روسيا\",\"RO\":\"رومانيا\",\"RE\":\"روينيون\",\"ZM\":\"زامبيا\",\"ZW\":\"زيمبابوي\",\"CI\":\"ساحل العاج\",\"WS\":\"ساموا\",\"AS\":\"ساموا الأمريكية\",\"BL\":\"سان بارتليمي\",\"PM\":\"سان بيير ومكويلون\",\"MF\":\"سان مارتن\",\"SM\":\"سان مارينو\",\"VC\":\"سانت فنسنت وجزر غرينادين\",\"KN\":\"سانت كيتس ونيفيس\",\"LC\":\"سانت لوسيا\",\"SX\":\"سانت مارتن\",\"SH\":\"سانت هيلينا\",\"ST\":\"ساو تومي وبرينسيبي\",\"LK\":\"سريلانكا\",\"SJ\":\"سفالبارد وجان ماين\",\"SK\":\"سلوفاكيا\",\"SI\":\"سلوفينيا\",\"SG\":\"سنغافورة\",\"SY\":\"سوريا\",\"SR\":\"سورينام\",\"CH\":\"سويسرا\",\"SL\":\"سيراليون\",\"SC\":\"سيشل\",\"RS\":\"صربيا\",\"TJ\":\"طاجيكستان\",\"OM\":\"عُمان\",\"GM\":\"غامبيا\",\"GH\":\"غانا\",\"GD\":\"غرينادا\",\"GL\":\"غرينلاند\",\"GT\":\"غواتيمالا\",\"GP\":\"غوادلوب\",\"GU\":\"غوام\",\"GF\":\"غويانا الفرنسية\",\"GY\":\"غيانا\",\"GG\":\"غيرنزي\",\"GN\":\"غينيا\",\"GQ\":\"غينيا الاستوائية\",\"GW\":\"غينيا بيساو\",\"VU\":\"فانواتو\",\"FR\":\"فرنسا\",\"VE\":\"فنزويلا\",\"FI\":\"فنلندا\",\"VN\":\"فيتنام\",\"FJ\":\"فيجي\",\"CY\":\"قبرص\",\"QA\":\"قطر\",\"KG\":\"قيرغيزستان\",\"KZ\":\"كازاخستان\",\"NC\":\"كاليدونيا الجديدة\",\"HR\":\"كرواتيا\",\"KH\":\"كمبوديا\",\"CA\":\"كندا\",\"CU\":\"كوبا\",\"CW\":\"كوراساو\",\"KR\":\"كوريا الجنوبية\",\"KP\":\"كوريا الشمالية\",\"CR\":\"كوستاريكا\",\"CO\":\"كولومبيا\",\"KI\":\"كيريباتي\",\"KE\":\"كينيا\",\"LV\":\"لاتفيا\",\"LA\":\"لاوس\",\"LB\":\"لبنان\",\"LU\":\"لوكسمبورغ\",\"LY\":\"ليبيا\",\"LR\":\"ليبيريا\",\"LT\":\"ليتوانيا\",\"LI\":\"ليختنشتاين\",\"LS\":\"ليسوتو\",\"MT\":\"مالطا\",\"ML\":\"مالي\",\"MY\":\"ماليزيا\",\"YT\":\"مايوت\",\"MG\":\"مدغشقر\",\"EG\":\"مصر\",\"MK\":\"مقدونيا الشمالية\",\"MW\":\"ملاوي\",\"MO\":\"منطقة ماكاو الإدارية الخاصة\",\"MN\":\"منغوليا\",\"MR\":\"موريتانيا\",\"MU\":\"موريشيوس\",\"MZ\":\"موزمبيق\",\"MD\":\"مولدوفا\",\"MC\":\"موناكو\",\"MS\":\"مونتسرات\",\"MM\":\"ميانمار (بورما)\",\"FM\":\"ميكرونيزيا\",\"NA\":\"ناميبيا\",\"NR\":\"ناورو\",\"NP\":\"نيبال\",\"NG\":\"نيجيريا\",\"NI\":\"نيكاراغوا\",\"NZ\":\"نيوزيلندا\",\"NU\":\"نيوي\",\"HT\":\"هايتي\",\"HN\":\"هندوراس\",\"HU\":\"هنغاريا\",\"NL\":\"هولندا\",\"BQ\":\"هولندا الكاريبية\",\"HK\":\"هونغ كونغ الصينية (منطقة إدارية خاصة)\"}");

/***/ }),
/* 37 */
/***/ (function(module) {

module.exports = JSON.parse("{\"AF\":\"Afghanistan\",\"EG\":\"Ägypten\",\"AX\":\"Ålandinseln\",\"AL\":\"Albanien\",\"DZ\":\"Algerien\",\"AS\":\"Amerikanisch-Samoa\",\"VI\":\"Amerikanische Jungferninseln\",\"UM\":\"Amerikanische Überseeinseln\",\"AD\":\"Andorra\",\"AO\":\"Angola\",\"AI\":\"Anguilla\",\"AQ\":\"Antarktis\",\"AG\":\"Antigua und Barbuda\",\"GQ\":\"Äquatorialguinea\",\"AR\":\"Argentinien\",\"AM\":\"Armenien\",\"AW\":\"Aruba\",\"AZ\":\"Aserbaidschan\",\"ET\":\"Äthiopien\",\"AU\":\"Australien\",\"BS\":\"Bahamas\",\"BH\":\"Bahrain\",\"BD\":\"Bangladesch\",\"BB\":\"Barbados\",\"BY\":\"Belarus\",\"BE\":\"Belgien\",\"BZ\":\"Belize\",\"BJ\":\"Benin\",\"BM\":\"Bermuda\",\"BT\":\"Bhutan\",\"BO\":\"Bolivien\",\"BQ\":\"Bonaire, Sint Eustatius und Saba\",\"BA\":\"Bosnien und Herzegowina\",\"BW\":\"Botsuana\",\"BV\":\"Bouvetinsel\",\"BR\":\"Brasilien\",\"VG\":\"Britische Jungferninseln\",\"IO\":\"Britisches Territorium im Indischen Ozean\",\"BN\":\"Brunei Darussalam\",\"BG\":\"Bulgarien\",\"BF\":\"Burkina Faso\",\"BI\":\"Burundi\",\"CV\":\"Cabo Verde\",\"CL\":\"Chile\",\"CN\":\"China\",\"CK\":\"Cookinseln\",\"CR\":\"Costa Rica\",\"CI\":\"Côte d’Ivoire\",\"CW\":\"Curaçao\",\"DK\":\"Dänemark\",\"DE\":\"Deutschland\",\"DM\":\"Dominica\",\"DO\":\"Dominikanische Republik\",\"DJ\":\"Dschibuti\",\"EC\":\"Ecuador\",\"SV\":\"El Salvador\",\"ER\":\"Eritrea\",\"EE\":\"Estland\",\"SZ\":\"Eswatini\",\"FK\":\"Falklandinseln\",\"FO\":\"Färöer\",\"FJ\":\"Fidschi\",\"FI\":\"Finnland\",\"FR\":\"Frankreich\",\"GF\":\"Französisch-Guayana\",\"PF\":\"Französisch-Polynesien\",\"TF\":\"Französische Süd- und Antarktisgebiete\",\"GA\":\"Gabun\",\"GM\":\"Gambia\",\"GE\":\"Georgien\",\"GH\":\"Ghana\",\"GI\":\"Gibraltar\",\"GD\":\"Grenada\",\"GR\":\"Griechenland\",\"GL\":\"Grönland\",\"GP\":\"Guadeloupe\",\"GU\":\"Guam\",\"GT\":\"Guatemala\",\"GG\":\"Guernsey\",\"GN\":\"Guinea\",\"GW\":\"Guinea-Bissau\",\"GY\":\"Guyana\",\"HT\":\"Haiti\",\"HM\":\"Heard und McDonaldinseln\",\"HN\":\"Honduras\",\"IN\":\"Indien\",\"ID\":\"Indonesien\",\"IQ\":\"Irak\",\"IR\":\"Iran\",\"IE\":\"Irland\",\"IS\":\"Island\",\"IM\":\"Isle of Man\",\"IL\":\"Israel\",\"IT\":\"Italien\",\"JM\":\"Jamaika\",\"JP\":\"Japan\",\"YE\":\"Jemen\",\"JE\":\"Jersey\",\"JO\":\"Jordanien\",\"KY\":\"Kaimaninseln\",\"KH\":\"Kambodscha\",\"CM\":\"Kamerun\",\"CA\":\"Kanada\",\"KZ\":\"Kasachstan\",\"QA\":\"Katar\",\"KE\":\"Kenia\",\"KG\":\"Kirgisistan\",\"KI\":\"Kiribati\",\"CC\":\"Kokosinseln\",\"CO\":\"Kolumbien\",\"KM\":\"Komoren\",\"CG\":\"Kongo-Brazzaville\",\"CD\":\"Kongo-Kinshasa\",\"HR\":\"Kroatien\",\"CU\":\"Kuba\",\"KW\":\"Kuwait\",\"LA\":\"Laos\",\"LS\":\"Lesotho\",\"LV\":\"Lettland\",\"LB\":\"Libanon\",\"LR\":\"Liberia\",\"LY\":\"Libyen\",\"LI\":\"Liechtenstein\",\"LT\":\"Litauen\",\"LU\":\"Luxemburg\",\"MG\":\"Madagaskar\",\"MW\":\"Malawi\",\"MY\":\"Malaysia\",\"MV\":\"Malediven\",\"ML\":\"Mali\",\"MT\":\"Malta\",\"MA\":\"Marokko\",\"MH\":\"Marshallinseln\",\"MQ\":\"Martinique\",\"MR\":\"Mauretanien\",\"MU\":\"Mauritius\",\"YT\":\"Mayotte\",\"MX\":\"Mexiko\",\"FM\":\"Mikronesien\",\"MC\":\"Monaco\",\"MN\":\"Mongolei\",\"ME\":\"Montenegro\",\"MS\":\"Montserrat\",\"MZ\":\"Mosambik\",\"MM\":\"Myanmar\",\"NA\":\"Namibia\",\"NR\":\"Nauru\",\"NP\":\"Nepal\",\"NC\":\"Neukaledonien\",\"NZ\":\"Neuseeland\",\"NI\":\"Nicaragua\",\"NL\":\"Niederlande\",\"NE\":\"Niger\",\"NG\":\"Nigeria\",\"NU\":\"Niue\",\"KP\":\"Nordkorea\",\"MP\":\"Nördliche Marianen\",\"MK\":\"Nordmazedonien\",\"NF\":\"Norfolkinsel\",\"NO\":\"Norwegen\",\"OM\":\"Oman\",\"AT\":\"Österreich\",\"PK\":\"Pakistan\",\"PS\":\"Palästinensische Autonomiegebiete\",\"PW\":\"Palau\",\"PA\":\"Panama\",\"PG\":\"Papua-Neuguinea\",\"PY\":\"Paraguay\",\"PE\":\"Peru\",\"PH\":\"Philippinen\",\"PN\":\"Pitcairninseln\",\"PL\":\"Polen\",\"PT\":\"Portugal\",\"PR\":\"Puerto Rico\",\"MD\":\"Republik Moldau\",\"RE\":\"Réunion\",\"RW\":\"Ruanda\",\"RO\":\"Rumänien\",\"RU\":\"Russland\",\"SB\":\"Salomonen\",\"ZM\":\"Sambia\",\"WS\":\"Samoa\",\"SM\":\"San Marino\",\"ST\":\"São Tomé und Príncipe\",\"SA\":\"Saudi-Arabien\",\"SE\":\"Schweden\",\"CH\":\"Schweiz\",\"SN\":\"Senegal\",\"RS\":\"Serbien\",\"SC\":\"Seychellen\",\"SL\":\"Sierra Leone\",\"ZW\":\"Simbabwe\",\"SG\":\"Singapur\",\"SX\":\"Sint Maarten\",\"SK\":\"Slowakei\",\"SI\":\"Slowenien\",\"SO\":\"Somalia\",\"HK\":\"Sonderverwaltungsregion Hongkong\",\"MO\":\"Sonderverwaltungsregion Macau\",\"ES\":\"Spanien\",\"SJ\":\"Spitzbergen und Jan Mayen\",\"LK\":\"Sri Lanka\",\"BL\":\"St. Barthélemy\",\"SH\":\"St. Helena\",\"KN\":\"St. Kitts und Nevis\",\"LC\":\"St. Lucia\",\"MF\":\"St. Martin\",\"PM\":\"St. Pierre und Miquelon\",\"VC\":\"St. Vincent und die Grenadinen\",\"ZA\":\"Südafrika\",\"SD\":\"Sudan\",\"GS\":\"Südgeorgien und die Südlichen Sandwichinseln\",\"KR\":\"Südkorea\",\"SS\":\"Südsudan\",\"SR\":\"Suriname\",\"SY\":\"Syrien\",\"TJ\":\"Tadschikistan\",\"TW\":\"Taiwan\",\"TZ\":\"Tansania\",\"TH\":\"Thailand\",\"TL\":\"Timor-Leste\",\"TG\":\"Togo\",\"TK\":\"Tokelau\",\"TO\":\"Tonga\",\"TT\":\"Trinidad und Tobago\",\"TD\":\"Tschad\",\"CZ\":\"Tschechien\",\"TN\":\"Tunesien\",\"TR\":\"Türkei\",\"TM\":\"Turkmenistan\",\"TC\":\"Turks- und Caicosinseln\",\"TV\":\"Tuvalu\",\"UG\":\"Uganda\",\"UA\":\"Ukraine\",\"HU\":\"Ungarn\",\"UY\":\"Uruguay\",\"UZ\":\"Usbekistan\",\"VU\":\"Vanuatu\",\"VA\":\"Vatikanstadt\",\"VE\":\"Venezuela\",\"AE\":\"Vereinigte Arabische Emirate\",\"US\":\"Vereinigte Staaten\",\"GB\":\"Vereinigtes Königreich\",\"VN\":\"Vietnam\",\"WF\":\"Wallis und Futuna\",\"CX\":\"Weihnachtsinsel\",\"EH\":\"Westsahara\",\"CF\":\"Zentralafrikanische Republik\",\"CY\":\"Zypern\"}");

/***/ }),
/* 38 */
/***/ (function(module) {

module.exports = JSON.parse("{\"AF\":\"Afganistán\",\"AL\":\"Albania\",\"DE\":\"Alemania\",\"AD\":\"Andorra\",\"AO\":\"Angola\",\"AI\":\"Anguila\",\"AQ\":\"Antártida\",\"AG\":\"Antigua y Barbuda\",\"SA\":\"Arabia Saudí\",\"DZ\":\"Argelia\",\"AR\":\"Argentina\",\"AM\":\"Armenia\",\"AW\":\"Aruba\",\"AU\":\"Australia\",\"AT\":\"Austria\",\"AZ\":\"Azerbaiyán\",\"BS\":\"Bahamas\",\"BD\":\"Bangladés\",\"BB\":\"Barbados\",\"BH\":\"Baréin\",\"BE\":\"Bélgica\",\"BZ\":\"Belice\",\"BJ\":\"Benín\",\"BM\":\"Bermudas\",\"BY\":\"Bielorrusia\",\"BO\":\"Bolivia\",\"BA\":\"Bosnia y Herzegovina\",\"BW\":\"Botsuana\",\"BR\":\"Brasil\",\"BN\":\"Brunéi\",\"BG\":\"Bulgaria\",\"BF\":\"Burkina Faso\",\"BI\":\"Burundi\",\"BT\":\"Bután\",\"CV\":\"Cabo Verde\",\"KH\":\"Camboya\",\"CM\":\"Camerún\",\"CA\":\"Canadá\",\"BQ\":\"Caribe neerlandés\",\"QA\":\"Catar\",\"TD\":\"Chad\",\"CZ\":\"Chequia\",\"CL\":\"Chile\",\"CN\":\"China\",\"CY\":\"Chipre\",\"VA\":\"Ciudad del Vaticano\",\"CO\":\"Colombia\",\"KM\":\"Comoras\",\"CG\":\"Congo\",\"KP\":\"Corea del Norte\",\"KR\":\"Corea del Sur\",\"CR\":\"Costa Rica\",\"CI\":\"Côte d’Ivoire\",\"HR\":\"Croacia\",\"CU\":\"Cuba\",\"CW\":\"Curazao\",\"DK\":\"Dinamarca\",\"DM\":\"Dominica\",\"EC\":\"Ecuador\",\"EG\":\"Egipto\",\"SV\":\"El Salvador\",\"AE\":\"Emiratos Árabes Unidos\",\"ER\":\"Eritrea\",\"SK\":\"Eslovaquia\",\"SI\":\"Eslovenia\",\"ES\":\"España\",\"US\":\"Estados Unidos\",\"EE\":\"Estonia\",\"SZ\":\"Esuatini\",\"ET\":\"Etiopía\",\"PH\":\"Filipinas\",\"FI\":\"Finlandia\",\"FJ\":\"Fiyi\",\"FR\":\"Francia\",\"GA\":\"Gabón\",\"GM\":\"Gambia\",\"GE\":\"Georgia\",\"GH\":\"Ghana\",\"GI\":\"Gibraltar\",\"GD\":\"Granada\",\"GR\":\"Grecia\",\"GL\":\"Groenlandia\",\"GP\":\"Guadalupe\",\"GU\":\"Guam\",\"GT\":\"Guatemala\",\"GF\":\"Guayana Francesa\",\"GG\":\"Guernsey\",\"GN\":\"Guinea\",\"GQ\":\"Guinea Ecuatorial\",\"GW\":\"Guinea-Bisáu\",\"GY\":\"Guyana\",\"HT\":\"Haití\",\"HN\":\"Honduras\",\"HU\":\"Hungría\",\"IN\":\"India\",\"ID\":\"Indonesia\",\"IQ\":\"Irak\",\"IR\":\"Irán\",\"IE\":\"Irlanda\",\"BV\":\"Isla Bouvet\",\"IM\":\"Isla de Man\",\"CX\":\"Isla de Navidad\",\"NF\":\"Isla Norfolk\",\"IS\":\"Islandia\",\"AX\":\"Islas Åland\",\"KY\":\"Islas Caimán\",\"CC\":\"Islas Cocos\",\"CK\":\"Islas Cook\",\"FO\":\"Islas Feroe\",\"GS\":\"Islas Georgia del Sur y Sandwich del Sur\",\"HM\":\"Islas Heard y McDonald\",\"FK\":\"Islas Malvinas\",\"MP\":\"Islas Marianas del Norte\",\"MH\":\"Islas Marshall\",\"UM\":\"Islas menores alejadas de EE. UU.\",\"PN\":\"Islas Pitcairn\",\"SB\":\"Islas Salomón\",\"TC\":\"Islas Turcas y Caicos\",\"VG\":\"Islas Vírgenes Británicas\",\"VI\":\"Islas Vírgenes de EE. UU.\",\"IL\":\"Israel\",\"IT\":\"Italia\",\"JM\":\"Jamaica\",\"JP\":\"Japón\",\"JE\":\"Jersey\",\"JO\":\"Jordania\",\"KZ\":\"Kazajistán\",\"KE\":\"Kenia\",\"KG\":\"Kirguistán\",\"KI\":\"Kiribati\",\"KW\":\"Kuwait\",\"LA\":\"Laos\",\"LS\":\"Lesoto\",\"LV\":\"Letonia\",\"LB\":\"Líbano\",\"LR\":\"Liberia\",\"LY\":\"Libia\",\"LI\":\"Liechtenstein\",\"LT\":\"Lituania\",\"LU\":\"Luxemburgo\",\"MK\":\"Macedonia del Norte\",\"MG\":\"Madagascar\",\"MY\":\"Malasia\",\"MW\":\"Malaui\",\"MV\":\"Maldivas\",\"ML\":\"Mali\",\"MT\":\"Malta\",\"MA\":\"Marruecos\",\"MQ\":\"Martinica\",\"MU\":\"Mauricio\",\"MR\":\"Mauritania\",\"YT\":\"Mayotte\",\"MX\":\"México\",\"FM\":\"Micronesia\",\"MD\":\"Moldavia\",\"MC\":\"Mónaco\",\"MN\":\"Mongolia\",\"ME\":\"Montenegro\",\"MS\":\"Montserrat\",\"MZ\":\"Mozambique\",\"MM\":\"Myanmar (Birmania)\",\"NA\":\"Namibia\",\"NR\":\"Nauru\",\"NP\":\"Nepal\",\"NI\":\"Nicaragua\",\"NE\":\"Níger\",\"NG\":\"Nigeria\",\"NU\":\"Niue\",\"NO\":\"Noruega\",\"NC\":\"Nueva Caledonia\",\"NZ\":\"Nueva Zelanda\",\"OM\":\"Omán\",\"NL\":\"Países Bajos\",\"PK\":\"Pakistán\",\"PW\":\"Palaos\",\"PA\":\"Panamá\",\"PG\":\"Papúa Nueva Guinea\",\"PY\":\"Paraguay\",\"PE\":\"Perú\",\"PF\":\"Polinesia Francesa\",\"PL\":\"Polonia\",\"PT\":\"Portugal\",\"PR\":\"Puerto Rico\",\"HK\":\"RAE de Hong Kong (China)\",\"MO\":\"RAE de Macao (China)\",\"GB\":\"Reino Unido\",\"CF\":\"República Centroafricana\",\"CD\":\"República Democrática del Congo\",\"DO\":\"República Dominicana\",\"RE\":\"Reunión\",\"RW\":\"Ruanda\",\"RO\":\"Rumanía\",\"RU\":\"Rusia\",\"EH\":\"Sáhara Occidental\",\"WS\":\"Samoa\",\"AS\":\"Samoa Americana\",\"BL\":\"San Bartolomé\",\"KN\":\"San Cristóbal y Nieves\",\"SM\":\"San Marino\",\"MF\":\"San Martín\",\"PM\":\"San Pedro y Miquelón\",\"VC\":\"San Vicente y las Granadinas\",\"SH\":\"Santa Elena\",\"LC\":\"Santa Lucía\",\"ST\":\"Santo Tomé y Príncipe\",\"SN\":\"Senegal\",\"RS\":\"Serbia\",\"SC\":\"Seychelles\",\"SL\":\"Sierra Leona\",\"SG\":\"Singapur\",\"SX\":\"Sint Maarten\",\"SY\":\"Siria\",\"SO\":\"Somalia\",\"LK\":\"Sri Lanka\",\"ZA\":\"Sudáfrica\",\"SD\":\"Sudán\",\"SS\":\"Sudán del Sur\",\"SE\":\"Suecia\",\"CH\":\"Suiza\",\"SR\":\"Surinam\",\"SJ\":\"Svalbard y Jan Mayen\",\"TH\":\"Tailandia\",\"TW\":\"Taiwán\",\"TZ\":\"Tanzania\",\"TJ\":\"Tayikistán\",\"IO\":\"Territorio Británico del Océano Índico\",\"TF\":\"Territorios Australes Franceses\",\"PS\":\"Territorios Palestinos\",\"TL\":\"Timor-Leste\",\"TG\":\"Togo\",\"TK\":\"Tokelau\",\"TO\":\"Tonga\",\"TT\":\"Trinidad y Tobago\",\"TN\":\"Túnez\",\"TM\":\"Turkmenistán\",\"TR\":\"Turquía\",\"TV\":\"Tuvalu\",\"UA\":\"Ucrania\",\"UG\":\"Uganda\",\"UY\":\"Uruguay\",\"UZ\":\"Uzbekistán\",\"VU\":\"Vanuatu\",\"VE\":\"Venezuela\",\"VN\":\"Vietnam\",\"WF\":\"Wallis y Futuna\",\"YE\":\"Yemen\",\"DJ\":\"Yibuti\",\"ZM\":\"Zambia\",\"ZW\":\"Zimbabue\"}");

/***/ }),
/* 39 */
/***/ (function(module) {

module.exports = JSON.parse("{\"AF\":\"Afghanistan\",\"ZA\":\"Afrique du Sud\",\"AL\":\"Albanie\",\"DZ\":\"Algérie\",\"DE\":\"Allemagne\",\"AD\":\"Andorre\",\"AO\":\"Angola\",\"AI\":\"Anguilla\",\"AQ\":\"Antarctique\",\"AG\":\"Antigua-et-Barbuda\",\"SA\":\"Arabie saoudite\",\"AR\":\"Argentine\",\"AM\":\"Arménie\",\"AW\":\"Aruba\",\"AU\":\"Australie\",\"AT\":\"Autriche\",\"AZ\":\"Azerbaïdjan\",\"BS\":\"Bahamas\",\"BH\":\"Bahreïn\",\"BD\":\"Bangladesh\",\"BB\":\"Barbade\",\"BE\":\"Belgique\",\"BZ\":\"Belize\",\"BJ\":\"Bénin\",\"BM\":\"Bermudes\",\"BT\":\"Bhoutan\",\"BY\":\"Biélorussie\",\"BO\":\"Bolivie\",\"BA\":\"Bosnie-Herzégovine\",\"BW\":\"Botswana\",\"BR\":\"Brésil\",\"BN\":\"Brunéi Darussalam\",\"BG\":\"Bulgarie\",\"BF\":\"Burkina Faso\",\"BI\":\"Burundi\",\"KH\":\"Cambodge\",\"CM\":\"Cameroun\",\"CA\":\"Canada\",\"CV\":\"Cap-Vert\",\"CL\":\"Chili\",\"CN\":\"Chine\",\"CY\":\"Chypre\",\"CO\":\"Colombie\",\"KM\":\"Comores\",\"CG\":\"Congo-Brazzaville\",\"CD\":\"Congo-Kinshasa\",\"KP\":\"Corée du Nord\",\"KR\":\"Corée du Sud\",\"CR\":\"Costa Rica\",\"CI\":\"Côte d’Ivoire\",\"HR\":\"Croatie\",\"CU\":\"Cuba\",\"CW\":\"Curaçao\",\"DK\":\"Danemark\",\"DJ\":\"Djibouti\",\"DM\":\"Dominique\",\"EG\":\"Égypte\",\"AE\":\"Émirats arabes unis\",\"EC\":\"Équateur\",\"ER\":\"Érythrée\",\"ES\":\"Espagne\",\"EE\":\"Estonie\",\"SZ\":\"Eswatini\",\"VA\":\"État de la Cité du Vatican\",\"FM\":\"États fédérés de Micronésie\",\"US\":\"États-Unis\",\"ET\":\"Éthiopie\",\"FJ\":\"Fidji\",\"FI\":\"Finlande\",\"FR\":\"France\",\"GA\":\"Gabon\",\"GM\":\"Gambie\",\"GE\":\"Géorgie\",\"GS\":\"Géorgie du Sud et îles Sandwich du Sud\",\"GH\":\"Ghana\",\"GI\":\"Gibraltar\",\"GR\":\"Grèce\",\"GD\":\"Grenade\",\"GL\":\"Groenland\",\"GP\":\"Guadeloupe\",\"GU\":\"Guam\",\"GT\":\"Guatemala\",\"GG\":\"Guernesey\",\"GN\":\"Guinée\",\"GQ\":\"Guinée équatoriale\",\"GW\":\"Guinée-Bissau\",\"GY\":\"Guyana\",\"GF\":\"Guyane française\",\"HT\":\"Haïti\",\"HN\":\"Honduras\",\"HU\":\"Hongrie\",\"BV\":\"Île Bouvet\",\"CX\":\"Île Christmas\",\"IM\":\"Île de Man\",\"NF\":\"Île Norfolk\",\"AX\":\"Îles Åland\",\"KY\":\"Îles Caïmans\",\"CC\":\"Îles Cocos\",\"CK\":\"Îles Cook\",\"FO\":\"Îles Féroé\",\"HM\":\"Îles Heard et McDonald\",\"FK\":\"Îles Malouines\",\"MP\":\"Îles Mariannes du Nord\",\"MH\":\"Îles Marshall\",\"UM\":\"Îles mineures éloignées des États-Unis\",\"PN\":\"Îles Pitcairn\",\"SB\":\"Îles Salomon\",\"TC\":\"Îles Turques-et-Caïques\",\"VG\":\"Îles Vierges britanniques\",\"VI\":\"Îles Vierges des États-Unis\",\"IN\":\"Inde\",\"ID\":\"Indonésie\",\"IQ\":\"Irak\",\"IR\":\"Iran\",\"IE\":\"Irlande\",\"IS\":\"Islande\",\"IL\":\"Israël\",\"IT\":\"Italie\",\"JM\":\"Jamaïque\",\"JP\":\"Japon\",\"JE\":\"Jersey\",\"JO\":\"Jordanie\",\"KZ\":\"Kazakhstan\",\"KE\":\"Kenya\",\"KG\":\"Kirghizistan\",\"KI\":\"Kiribati\",\"KW\":\"Koweït\",\"RE\":\"La Réunion\",\"LA\":\"Laos\",\"LS\":\"Lesotho\",\"LV\":\"Lettonie\",\"LB\":\"Liban\",\"LR\":\"Libéria\",\"LY\":\"Libye\",\"LI\":\"Liechtenstein\",\"LT\":\"Lituanie\",\"LU\":\"Luxembourg\",\"MK\":\"Macédoine du Nord\",\"MG\":\"Madagascar\",\"MY\":\"Malaisie\",\"MW\":\"Malawi\",\"MV\":\"Maldives\",\"ML\":\"Mali\",\"MT\":\"Malte\",\"MA\":\"Maroc\",\"MQ\":\"Martinique\",\"MU\":\"Maurice\",\"MR\":\"Mauritanie\",\"YT\":\"Mayotte\",\"MX\":\"Mexique\",\"MD\":\"Moldavie\",\"MC\":\"Monaco\",\"MN\":\"Mongolie\",\"ME\":\"Monténégro\",\"MS\":\"Montserrat\",\"MZ\":\"Mozambique\",\"MM\":\"Myanmar (Birmanie)\",\"NA\":\"Namibie\",\"NR\":\"Nauru\",\"NP\":\"Népal\",\"NI\":\"Nicaragua\",\"NE\":\"Niger\",\"NG\":\"Nigéria\",\"NU\":\"Niue\",\"NO\":\"Norvège\",\"NC\":\"Nouvelle-Calédonie\",\"NZ\":\"Nouvelle-Zélande\",\"OM\":\"Oman\",\"UG\":\"Ouganda\",\"UZ\":\"Ouzbékistan\",\"PK\":\"Pakistan\",\"PW\":\"Palaos\",\"PA\":\"Panama\",\"PG\":\"Papouasie-Nouvelle-Guinée\",\"PY\":\"Paraguay\",\"NL\":\"Pays-Bas\",\"BQ\":\"Pays-Bas caribéens\",\"PE\":\"Pérou\",\"PH\":\"Philippines\",\"PL\":\"Pologne\",\"PF\":\"Polynésie française\",\"PR\":\"Porto Rico\",\"PT\":\"Portugal\",\"QA\":\"Qatar\",\"HK\":\"R.A.S. chinoise de Hong Kong\",\"MO\":\"R.A.S. chinoise de Macao\",\"CF\":\"République centrafricaine\",\"DO\":\"République dominicaine\",\"RO\":\"Roumanie\",\"GB\":\"Royaume-Uni\",\"RU\":\"Russie\",\"RW\":\"Rwanda\",\"EH\":\"Sahara occidental\",\"BL\":\"Saint-Barthélemy\",\"KN\":\"Saint-Christophe-et-Niévès\",\"SM\":\"Saint-Marin\",\"MF\":\"Saint-Martin\",\"SX\":\"Saint-Martin (partie néerlandaise)\",\"PM\":\"Saint-Pierre-et-Miquelon\",\"VC\":\"Saint-Vincent-et-les-Grenadines\",\"SH\":\"Sainte-Hélène\",\"LC\":\"Sainte-Lucie\",\"SV\":\"Salvador\",\"WS\":\"Samoa\",\"AS\":\"Samoa américaines\",\"ST\":\"Sao Tomé-et-Principe\",\"SN\":\"Sénégal\",\"RS\":\"Serbie\",\"SC\":\"Seychelles\",\"SL\":\"Sierra Leone\",\"SG\":\"Singapour\",\"SK\":\"Slovaquie\",\"SI\":\"Slovénie\",\"SO\":\"Somalie\",\"SD\":\"Soudan\",\"SS\":\"Soudan du Sud\",\"LK\":\"Sri Lanka\",\"SE\":\"Suède\",\"CH\":\"Suisse\",\"SR\":\"Suriname\",\"SJ\":\"Svalbard et Jan Mayen\",\"SY\":\"Syrie\",\"TJ\":\"Tadjikistan\",\"TW\":\"Taïwan\",\"TZ\":\"Tanzanie\",\"TD\":\"Tchad\",\"CZ\":\"Tchéquie\",\"TF\":\"Terres australes françaises\",\"IO\":\"Territoire britannique de l’océan Indien\",\"PS\":\"Territoires palestiniens\",\"TH\":\"Thaïlande\",\"TL\":\"Timor oriental\",\"TG\":\"Togo\",\"TK\":\"Tokelau\",\"TO\":\"Tonga\",\"TT\":\"Trinité-et-Tobago\",\"TN\":\"Tunisie\",\"TM\":\"Turkménistan\",\"TR\":\"Turquie\",\"TV\":\"Tuvalu\",\"UA\":\"Ukraine\",\"UY\":\"Uruguay\",\"VU\":\"Vanuatu\",\"VE\":\"Venezuela\",\"VN\":\"Vietnam\",\"WF\":\"Wallis-et-Futuna\",\"YE\":\"Yémen\",\"ZM\":\"Zambie\",\"ZW\":\"Zimbabwe\"}");

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = JSON.parse("{\"AL\":\"阿尔巴尼亚\",\"DZ\":\"阿尔及利亚\",\"AF\":\"阿富汗\",\"AR\":\"阿根廷\",\"AE\":\"阿拉伯联合酋长国\",\"AW\":\"阿鲁巴\",\"OM\":\"阿曼\",\"AZ\":\"阿塞拜疆\",\"EG\":\"埃及\",\"ET\":\"埃塞俄比亚\",\"IE\":\"爱尔兰\",\"EE\":\"爱沙尼亚\",\"AD\":\"安道尔\",\"AO\":\"安哥拉\",\"AI\":\"安圭拉\",\"AG\":\"安提瓜和巴布达\",\"AT\":\"奥地利\",\"AX\":\"奥兰群岛\",\"AU\":\"澳大利亚\",\"BB\":\"巴巴多斯\",\"PG\":\"巴布亚新几内亚\",\"BS\":\"巴哈马\",\"PK\":\"巴基斯坦\",\"PY\":\"巴拉圭\",\"PS\":\"巴勒斯坦领土\",\"BH\":\"巴林\",\"PA\":\"巴拿马\",\"BR\":\"巴西\",\"BY\":\"白俄罗斯\",\"BM\":\"百慕大\",\"BG\":\"保加利亚\",\"MP\":\"北马里亚纳群岛\",\"MK\":\"北马其顿\",\"BJ\":\"贝宁\",\"BE\":\"比利时\",\"IS\":\"冰岛\",\"PR\":\"波多黎各\",\"PL\":\"波兰\",\"BA\":\"波斯尼亚和黑塞哥维那\",\"BO\":\"玻利维亚\",\"BZ\":\"伯利兹\",\"BW\":\"博茨瓦纳\",\"BT\":\"不丹\",\"BF\":\"布基纳法索\",\"BI\":\"布隆迪\",\"BV\":\"布韦岛\",\"KP\":\"朝鲜\",\"GQ\":\"赤道几内亚\",\"DK\":\"丹麦\",\"DE\":\"德国\",\"TL\":\"东帝汶\",\"TG\":\"多哥\",\"DO\":\"多米尼加共和国\",\"DM\":\"多米尼克\",\"RU\":\"俄罗斯\",\"EC\":\"厄瓜多尔\",\"ER\":\"厄立特里亚\",\"FR\":\"法国\",\"FO\":\"法罗群岛\",\"PF\":\"法属波利尼西亚\",\"GF\":\"法属圭亚那\",\"TF\":\"法属南部领地\",\"MF\":\"法属圣马丁\",\"VA\":\"梵蒂冈\",\"PH\":\"菲律宾\",\"FJ\":\"斐济\",\"FI\":\"芬兰\",\"CV\":\"佛得角\",\"FK\":\"福克兰群岛\",\"GM\":\"冈比亚\",\"CG\":\"刚果（布）\",\"CD\":\"刚果（金）\",\"CO\":\"哥伦比亚\",\"CR\":\"哥斯达黎加\",\"GD\":\"格林纳达\",\"GL\":\"格陵兰\",\"GE\":\"格鲁吉亚\",\"GG\":\"根西岛\",\"CU\":\"古巴\",\"GP\":\"瓜德罗普\",\"GU\":\"关岛\",\"GY\":\"圭亚那\",\"KZ\":\"哈萨克斯坦\",\"HT\":\"海地\",\"KR\":\"韩国\",\"NL\":\"荷兰\",\"BQ\":\"荷属加勒比区\",\"SX\":\"荷属圣马丁\",\"HM\":\"赫德岛和麦克唐纳群岛\",\"ME\":\"黑山\",\"HN\":\"洪都拉斯\",\"KI\":\"基里巴斯\",\"DJ\":\"吉布提\",\"KG\":\"吉尔吉斯斯坦\",\"GN\":\"几内亚\",\"GW\":\"几内亚比绍\",\"CA\":\"加拿大\",\"GH\":\"加纳\",\"GA\":\"加蓬\",\"KH\":\"柬埔寨\",\"CZ\":\"捷克\",\"ZW\":\"津巴布韦\",\"CM\":\"喀麦隆\",\"QA\":\"卡塔尔\",\"KY\":\"开曼群岛\",\"CC\":\"科科斯（基林）群岛\",\"KM\":\"科摩罗\",\"CI\":\"科特迪瓦\",\"KW\":\"科威特\",\"HR\":\"克罗地亚\",\"KE\":\"肯尼亚\",\"CK\":\"库克群岛\",\"CW\":\"库拉索\",\"LV\":\"拉脱维亚\",\"LS\":\"莱索托\",\"LA\":\"老挝\",\"LB\":\"黎巴嫩\",\"LT\":\"立陶宛\",\"LR\":\"利比里亚\",\"LY\":\"利比亚\",\"LI\":\"列支敦士登\",\"RE\":\"留尼汪\",\"LU\":\"卢森堡\",\"RW\":\"卢旺达\",\"RO\":\"罗马尼亚\",\"MG\":\"马达加斯加\",\"IM\":\"马恩岛\",\"MV\":\"马尔代夫\",\"MT\":\"马耳他\",\"MW\":\"马拉维\",\"MY\":\"马来西亚\",\"ML\":\"马里\",\"MH\":\"马绍尔群岛\",\"MQ\":\"马提尼克\",\"YT\":\"马约特\",\"MU\":\"毛里求斯\",\"MR\":\"毛里塔尼亚\",\"US\":\"美国\",\"UM\":\"美国本土外小岛屿\",\"AS\":\"美属萨摩亚\",\"VI\":\"美属维尔京群岛\",\"MN\":\"蒙古\",\"MS\":\"蒙特塞拉特\",\"BD\":\"孟加拉国\",\"PE\":\"秘鲁\",\"FM\":\"密克罗尼西亚\",\"MM\":\"缅甸\",\"MD\":\"摩尔多瓦\",\"MA\":\"摩洛哥\",\"MC\":\"摩纳哥\",\"MZ\":\"莫桑比克\",\"MX\":\"墨西哥\",\"NA\":\"纳米比亚\",\"ZA\":\"南非\",\"AQ\":\"南极洲\",\"GS\":\"南乔治亚和南桑威奇群岛\",\"SS\":\"南苏丹\",\"NR\":\"瑙鲁\",\"NI\":\"尼加拉瓜\",\"NP\":\"尼泊尔\",\"NE\":\"尼日尔\",\"NG\":\"尼日利亚\",\"NU\":\"纽埃\",\"NO\":\"挪威\",\"NF\":\"诺福克岛\",\"PW\":\"帕劳\",\"PN\":\"皮特凯恩群岛\",\"PT\":\"葡萄牙\",\"JP\":\"日本\",\"SE\":\"瑞典\",\"CH\":\"瑞士\",\"SV\":\"萨尔瓦多\",\"WS\":\"萨摩亚\",\"RS\":\"塞尔维亚\",\"SL\":\"塞拉利昂\",\"SN\":\"塞内加尔\",\"CY\":\"塞浦路斯\",\"SC\":\"塞舌尔\",\"SA\":\"沙特阿拉伯\",\"BL\":\"圣巴泰勒米\",\"CX\":\"圣诞岛\",\"ST\":\"圣多美和普林西比\",\"SH\":\"圣赫勒拿\",\"KN\":\"圣基茨和尼维斯\",\"LC\":\"圣卢西亚\",\"SM\":\"圣马力诺\",\"PM\":\"圣皮埃尔和密克隆群岛\",\"VC\":\"圣文森特和格林纳丁斯\",\"LK\":\"斯里兰卡\",\"SK\":\"斯洛伐克\",\"SI\":\"斯洛文尼亚\",\"SJ\":\"斯瓦尔巴和扬马延\",\"SZ\":\"斯威士兰\",\"SD\":\"苏丹\",\"SR\":\"苏里南\",\"SB\":\"所罗门群岛\",\"SO\":\"索马里\",\"TJ\":\"塔吉克斯坦\",\"TW\":\"台湾\",\"TH\":\"泰国\",\"TZ\":\"坦桑尼亚\",\"TO\":\"汤加\",\"TC\":\"特克斯和凯科斯群岛\",\"TT\":\"特立尼达和多巴哥\",\"TN\":\"突尼斯\",\"TV\":\"图瓦卢\",\"TR\":\"土耳其\",\"TM\":\"土库曼斯坦\",\"TK\":\"托克劳\",\"WF\":\"瓦利斯和富图纳\",\"VU\":\"瓦努阿图\",\"GT\":\"危地马拉\",\"VE\":\"委内瑞拉\",\"BN\":\"文莱\",\"UG\":\"乌干达\",\"UA\":\"乌克兰\",\"UY\":\"乌拉圭\",\"UZ\":\"乌兹别克斯坦\",\"ES\":\"西班牙\",\"EH\":\"西撒哈拉\",\"GR\":\"希腊\",\"SG\":\"新加坡\",\"NC\":\"新喀里多尼亚\",\"NZ\":\"新西兰\",\"HU\":\"匈牙利\",\"SY\":\"叙利亚\",\"JM\":\"牙买加\",\"AM\":\"亚美尼亚\",\"YE\":\"也门\",\"IQ\":\"伊拉克\",\"IR\":\"伊朗\",\"IL\":\"以色列\",\"IT\":\"意大利\",\"IN\":\"印度\",\"ID\":\"印度尼西亚\",\"GB\":\"英国\",\"VG\":\"英属维尔京群岛\",\"IO\":\"英属印度洋领地\",\"JO\":\"约旦\",\"VN\":\"越南\",\"ZM\":\"赞比亚\",\"JE\":\"泽西岛\",\"TD\":\"乍得\",\"GI\":\"直布罗陀\",\"CL\":\"智利\",\"CF\":\"中非共和国\",\"CN\":\"中国\",\"MO\":\"中国澳门特别行政区\",\"HK\":\"中国香港特别行政区\"}");

/***/ }),
/* 41 */
/***/ (function(module) {

module.exports = JSON.parse("{\"XFU\":\"(UIC)فرنك فرنسي\",\"ALK\":\"Albanian Lek (1946–1965)\",\"ARM\":\"Argentine Peso (1881–1970)\",\"ARL\":\"Argentine Peso Ley (1970–1983)\",\"BOL\":\"Bolivian Boliviano (1863–1963)\",\"BAN\":\"Bosnia-Herzegovina New Dinar (1994–1997)\",\"BRZ\":\"Brazilian Cruzeiro (1942–1967)\",\"BRR\":\"Brazilian Cruzeiro (1993–1994)\",\"BRN\":\"Brazilian New Cruzado (1989–1990)\",\"BGL\":\"Bulgarian Hard Lev\",\"BGO\":\"Bulgarian Lev (1879–1952)\",\"BGM\":\"Bulgarian Socialist Lev\",\"CLE\":\"Chilean Escudo\",\"CLF\":\"Chilean Unit of Account (UF)\",\"CNX\":\"Chinese People’s Bank Dollar\",\"COU\":\"Colombian Real Value Unit\",\"ECS\":\"Ecuadorian Sucre\",\"ECV\":\"Ecuadorian Unit of Constant Value\",\"GEK\":\"Georgian Kupon Larit\",\"ISJ\":\"Icelandic Króna (1918–1981)\",\"ILR\":\"Israeli Shekel (1980–1985)\",\"MKN\":\"Macedonian Denar (1992–1993)\",\"MVP\":\"Maldivian Rupee (1947–1981)\",\"MXV\":\"Mexican Investment Unit\",\"MDC\":\"Moldovan Cupon\",\"MCF\":\"Monegasque Franc\",\"MZM\":\"Mozambican Metical (1980–2006)\",\"PEI\":\"Peruvian Inti\",\"PES\":\"Peruvian Sol (1863–1965)\",\"XRE\":\"RINET Funds\",\"KRH\":\"South Korean Hwan (1953–1962)\",\"KRO\":\"South Korean Won (1945–1953)\",\"ESA\":\"Spanish Peseta (A account)\",\"ESB\":\"Spanish Peseta (convertible account)\",\"UAK\":\"Ukrainian Karbovanets\",\"UYI\":\"Uruguayan Peso (Indexed Units)\",\"VNN\":\"Vietnamese Dong (1978–1985)\",\"CHE\":\"WIR Euro\",\"CHW\":\"WIR Franc\",\"YUM\":\"Yugoslavian New Dinar (1994–2002)\",\"YUR\":\"Yugoslavian Reformed Dinar (1992–1993)\",\"ZWR\":\"Zimbabwean Dollar (2008)\",\"MGA\":\"أرياري مدغشقر\",\"AFN\":\"أفغاني\",\"AFA\":\"أفغاني - 1927-2002\",\"DDM\":\"أوستمارك ألماني شرقي\",\"MRO\":\"أوقية موريتانية\",\"ARA\":\"استرال أرجنتيني\",\"PTE\":\"اسكود برتغالي\",\"GWE\":\"اسكود برتغالي غينيا\",\"TPE\":\"اسكود تيموري\",\"MZE\":\"اسكود موزمبيقي\",\"CVE\":\"اسكودو الرأس الخضراء\",\"GQE\":\"اكويل جونينا غينيا الاستوائيّة\",\"MOP\":\"باتاكا ماكاوي\",\"THB\":\"باخت تايلاندي\",\"PAB\":\"بالبوا بنمي\",\"TOP\":\"بانغا تونغا\",\"BWP\":\"بولا بتسواني\",\"VEF\":\"بوليفار فنزويلي\",\"VEB\":\"بوليفار فنزويلي - 1871-2008\",\"BOB\":\"بوليفيانو بوليفي\",\"ETB\":\"بير أثيوبي\",\"ARS\":\"بيزو أرجنتيني\",\"ARP\":\"بيزو أرجنتيني - 1983-1985\",\"UYP\":\"بيزو أوروجواي - 1975-1993\",\"DOP\":\"بيزو الدومنيكان\",\"UYU\":\"بيزو اوروغواي\",\"BOP\":\"بيزو بوليفي\",\"CLP\":\"بيزو شيلي\",\"GWP\":\"بيزو غينيا بيساو\",\"MXP\":\"بيزو فضي مكسيكي - 1861-1992\",\"PHP\":\"بيزو فلبيني\",\"CUP\":\"بيزو كوبي\",\"CUC\":\"بيزو كوبي قابل للتحويل\",\"COP\":\"بيزو كولومبي\",\"MXN\":\"بيزو مكسيكي\",\"ESP\":\"بيزيتا إسباني\",\"ADP\":\"بيستا أندوري\",\"BDT\":\"تاكا بنجلاديشي\",\"WST\":\"تالا ساموا\",\"LTT\":\"تالوناس ليتواني\",\"MNT\":\"توغروغ منغولي\",\"SIT\":\"تولار سلوفيني\",\"KZT\":\"تينغ كازاخستاني\",\"SRG\":\"جلدر سورينامي\",\"NLG\":\"جلدر هولندي\",\"GBP\":\"جنيه إسترليني\",\"ILP\":\"جنيه إسرائيلي\",\"IEP\":\"جنيه إيرلندي\",\"GIP\":\"جنيه جبل طارق\",\"FKP\":\"جنيه جزر فوكلاند\",\"SSP\":\"جنيه جنوب السودان\",\"SHP\":\"جنيه سانت هيلين\",\"SDG\":\"جنيه سوداني\",\"SDP\":\"جنيه سوداني قديم\",\"CYP\":\"جنيه قبرصي\",\"LBP\":\"جنيه لبناني\",\"MTP\":\"جنيه مالطي\",\"EGP\":\"جنيه مصري\",\"PYG\":\"جواراني باراجواي\",\"HTG\":\"جوردى هايتي\",\"GRD\":\"دراخما يوناني\",\"AMD\":\"درام أرميني\",\"AED\":\"درهم إماراتي\",\"MAD\":\"درهم مغربي\",\"GMD\":\"دلاسي جامبي\",\"STD\":\"دوبرا ساو تومي وبرينسيبي\",\"AUD\":\"دولار أسترالي\",\"USD\":\"دولار أمريكي\",\"USN\":\"دولار أمريكي (اليوم التالي)‏\",\"USS\":\"دولار أمريكي (نفس اليوم)‏\",\"BSD\":\"دولار باهامي\",\"BBD\":\"دولار بربادوسي\",\"BMD\":\"دولار برمودي\",\"BND\":\"دولار بروناي\",\"BZD\":\"دولار بليزي\",\"TWD\":\"دولار تايواني\",\"TTD\":\"دولار ترينداد وتوباجو\",\"JMD\":\"دولار جامايكي\",\"SBD\":\"دولار جزر سليمان\",\"KYD\":\"دولار جزر كيمن\",\"RHD\":\"دولار روديسي\",\"ZWD\":\"دولار زمبابوي\",\"ZWL\":\"دولار زمبابوي 2009\",\"SGD\":\"دولار سنغافوري\",\"SRD\":\"دولار سورينامي\",\"XCD\":\"دولار شرق الكاريبي\",\"GYD\":\"دولار غيانا\",\"FJD\":\"دولار فيجي\",\"CAD\":\"دولار كندي\",\"LRD\":\"دولار ليبيري\",\"NAD\":\"دولار ناميبي\",\"NZD\":\"دولار نيوزيلندي\",\"HKD\":\"دولار هونغ كونغ\",\"VND\":\"دونج فيتنامي\",\"JOD\":\"دينار أردني\",\"BAD\":\"دينار البوسنة والهرسك\",\"BHD\":\"دينار بحريني\",\"TND\":\"دينار تونسي\",\"DZD\":\"دينار جزائري\",\"SDD\":\"دينار سوداني\",\"RSD\":\"دينار صربي\",\"CSD\":\"دينار صربي قديم\",\"IQD\":\"دينار عراقي\",\"HRD\":\"دينار كرواتي\",\"KWD\":\"دينار كويتي\",\"LYD\":\"دينار ليبي\",\"MKD\":\"دينار مقدوني\",\"YDD\":\"دينار يمني\",\"YUD\":\"دينار يوغسلافي\",\"YUN\":\"دينار يوغسلافي قابل للتحويل\",\"ZAR\":\"راند جنوب أفريقيا\",\"ZAL\":\"راند جنوب أفريقيا -مالي\",\"BYN\":\"روبل بيلاروسي\",\"BYR\":\"روبل بيلاروسي (٢٠٠٠–٢٠١٦)\",\"BYB\":\"روبل بيلاروسي جديد - 1994-1999\",\"RUB\":\"روبل روسي\",\"RUR\":\"روبل روسي - 1991-1998\",\"SUR\":\"روبل سوفيتي\",\"TJR\":\"روبل طاجيكستاني\",\"LVR\":\"روبل لاتفيا\",\"IDR\":\"روبية إندونيسية\",\"PKR\":\"روبية باكستاني\",\"LKR\":\"روبية سريلانكية\",\"SCR\":\"روبية سيشيلية\",\"MUR\":\"روبية موريشيوسية\",\"NPR\":\"روبية نيبالي\",\"INR\":\"روبية هندي\",\"MVR\":\"روفيه جزر المالديف\",\"IRR\":\"ريال إيراني\",\"BRL\":\"ريال برازيلي\",\"SAR\":\"ريال سعودي\",\"OMR\":\"ريال عماني\",\"QAR\":\"ريال قطري\",\"YER\":\"ريال يمني\",\"MYR\":\"رينغيت ماليزي\",\"KHR\":\"رييال كمبودي\",\"ZRZ\":\"زائير زائيري\",\"ZRN\":\"زائير زائيري جديد\",\"PLN\":\"زلوتي بولندي\",\"PLZ\":\"زلوتي بولندي - 1950-1995\",\"PEN\":\"سول البيرو\",\"UZS\":\"سوم أوزبكستاني\",\"KGS\":\"سوم قيرغستاني\",\"TJS\":\"سوموني طاجيكستاني\",\"GHS\":\"سيدي غانا\",\"GHC\":\"سيدي غاني\",\"GNS\":\"سيلي غينيا\",\"UGX\":\"شلن أوغندي\",\"UGS\":\"شلن أوغندي - 1966-1987\",\"TZS\":\"شلن تنزاني\",\"SOS\":\"شلن صومالي\",\"KES\":\"شلن كينيي\",\"ATS\":\"شلن نمساوي\",\"ILS\":\"شيكل إسرائيلي جديد\",\"ANG\":\"غيلدر أنتيلي هولندي\",\"VUV\":\"فاتو فانواتو\",\"BIF\":\"فرنك بروندي\",\"BEF\":\"فرنك بلجيكي\",\"BEC\":\"فرنك بلجيكي قابل للتحويل\",\"BEL\":\"فرنك بلجيكي مالي\",\"KMF\":\"فرنك جزر القمر\",\"DJF\":\"فرنك جيبوتي\",\"RWF\":\"فرنك رواندي\",\"CHF\":\"فرنك سويسري\",\"XPF\":\"فرنك سي إف بي\",\"XOF\":\"فرنك غرب أفريقي\",\"GNF\":\"فرنك غينيا\",\"FRF\":\"فرنك فرنسي\",\"XFO\":\"فرنك فرنسي ذهبي\",\"CDF\":\"فرنك كونغولي\",\"LUF\":\"فرنك لوكسمبرج\",\"LUL\":\"فرنك لوكسمبرج المالي\",\"LUC\":\"فرنك لوكسمبرج قابل للتحويل\",\"MLF\":\"فرنك مالي\",\"MGF\":\"فرنك مدغشقر\",\"MAF\":\"فرنك مغربي\",\"XAF\":\"فرنك وسط أفريقي\",\"AWG\":\"فلورن أروبي\",\"HUF\":\"فورينت مجري\",\"NIO\":\"قرطبة نيكاراغوا\",\"BRC\":\"كروزادو برازيلي\",\"BRE\":\"كروزايرو برازيلي - 1990-1993\",\"EEK\":\"كرونة استونية\",\"CSK\":\"كرونة تشيكوسلوفاكيا\",\"CZK\":\"كرونة تشيكية\",\"DKK\":\"كرونة دانماركي\",\"SKK\":\"كرونة سلوفاكية\",\"SEK\":\"كرونة سويدية\",\"NOK\":\"كرونة نرويجية\",\"ISK\":\"كرونه أيسلندي\",\"ZMW\":\"كواشا زامبي\",\"ZMK\":\"كواشا زامبي - 1968-2012\",\"MWK\":\"كواشا مالاوي\",\"AOA\":\"كوانزا أنجولي\",\"AOK\":\"كوانزا أنجولي - 1977-1990\",\"AON\":\"كوانزا أنجولي جديدة - 1990-2000\",\"AOR\":\"كوانزا أنجولي معدلة - 1995 - 1999\",\"GTQ\":\"كوتزال جواتيمالا\",\"NIC\":\"كوردوبة نيكاراجوا\",\"CRC\":\"كولن كوستا ريكي\",\"SVC\":\"كولون سلفادوري\",\"HRK\":\"كونا كرواتي\",\"BUK\":\"كيات بورمي\",\"MMK\":\"كيات ميانمار\",\"LAK\":\"كيب لاوسي\",\"PGK\":\"كينا بابوا غينيا الجديدة\",\"LVL\":\"لاتس لاتفيا\",\"GEL\":\"لارى جورجي\",\"LSL\":\"لوتي ليسوتو\",\"LTL\":\"ليتا ليتوانية\",\"ITL\":\"ليرة إيطالية\",\"TRL\":\"ليرة تركي\",\"TRY\":\"ليرة تركية\",\"SYP\":\"ليرة سورية\",\"MTL\":\"ليرة مالطية\",\"BGN\":\"ليف بلغاري\",\"ALL\":\"ليك ألباني\",\"SZL\":\"ليلانجيني سوازيلندي\",\"HNL\":\"ليمبيرا هنداروس\",\"RON\":\"ليو روماني\",\"ROL\":\"ليو روماني قديم\",\"MDL\":\"ليو مولدوفي\",\"SLL\":\"ليون سيراليوني\",\"DEM\":\"مارك ألماني\",\"BAM\":\"مارك البوسنة والهرسك قابل للتحويل\",\"FIM\":\"ماركا فنلندي\",\"AZN\":\"مانات أذربيجان\",\"AZM\":\"مانات أذريبجاني\",\"TMT\":\"مانات تركمانستان\",\"TMM\":\"مانات تركمنستاني\",\"MZN\":\"متكال موزمبيقي\",\"BOV\":\"مفدول بوليفي\",\"ERN\":\"ناكفا أريتري\",\"NGN\":\"نايرا نيجيري\",\"BRB\":\"نوفو كروزايرو برازيلي - 1967-1986\",\"BTN\":\"نولتوم بوتاني\",\"UAH\":\"هريفنيا أوكراني\",\"XEU\":\"وحدة النقد الأوروبية\",\"KRW\":\"وون كوريا الجنوبية\",\"KPW\":\"وون كوريا الشمالية\",\"JPY\":\"ين ياباني\",\"CNY\":\"يوان صيني\",\"EUR\":\"يورو\"}");

/***/ }),
/* 42 */
/***/ (function(module) {

module.exports = JSON.parse("{\"AFA\":\"Afghanische Afghani (1927–2002)\",\"AFN\":\"Afghanischer Afghani\",\"ALL\":\"Albanischer Lek\",\"ALK\":\"Albanischer Lek (1946–1965)\",\"DZD\":\"Algerischer Dinar\",\"ADP\":\"Andorranische Pesete\",\"AOA\":\"Angolanischer Kwanza\",\"AOK\":\"Angolanischer Kwanza (1977–1990)\",\"AOR\":\"Angolanischer Kwanza Reajustado (1995–1999)\",\"AON\":\"Angolanischer Neuer Kwanza (1990–2000)\",\"ARA\":\"Argentinischer Austral\",\"ARS\":\"Argentinischer Peso\",\"ARM\":\"Argentinischer Peso (1881–1970)\",\"ARP\":\"Argentinischer Peso (1983–1985)\",\"ARL\":\"Argentinischer Peso Ley (1970–1983)\",\"AMD\":\"Armenischer Dram\",\"AWG\":\"Aruba-Florin\",\"AZN\":\"Aserbaidschan-Manat\",\"AZM\":\"Aserbaidschan-Manat (1993–2006)\",\"AUD\":\"Australischer Dollar\",\"BSD\":\"Bahamas-Dollar\",\"BHD\":\"Bahrain-Dinar\",\"BDT\":\"Bangladesch-Taka\",\"BBD\":\"Barbados-Dollar\",\"BYB\":\"Belarus-Rubel (1994–1999)\",\"BEL\":\"Belgischer Finanz-Franc\",\"BEF\":\"Belgischer Franc\",\"BEC\":\"Belgischer Franc (konvertibel)\",\"BZD\":\"Belize-Dollar\",\"BMD\":\"Bermuda-Dollar\",\"BTN\":\"Bhutan-Ngultrum\",\"BUK\":\"Birmanischer Kyat\",\"BOB\":\"Bolivanischer Boliviano\",\"BOL\":\"Bolivianischer Boliviano (1863–1963)\",\"BOP\":\"Bolivianischer Peso\",\"BOV\":\"Boliviansiche Mvdol\",\"BAD\":\"Bosnien und Herzegowina Dinar (1992–1994)\",\"BAM\":\"Bosnien und Herzegowina Konvertierbare Mark\",\"BAN\":\"Bosnien und Herzegowina Neuer Dinar (1994–1997)\",\"BWP\":\"Botswanischer Pula\",\"BRC\":\"Brasilianischer Cruzado (1986–1989)\",\"BRN\":\"Brasilianischer Cruzado Novo (1989–1990)\",\"BRZ\":\"Brasilianischer Cruzeiro (1942–1967)\",\"BRE\":\"Brasilianischer Cruzeiro (1990–1993)\",\"BRR\":\"Brasilianischer Cruzeiro (1993–1994)\",\"BRB\":\"Brasilianischer Cruzeiro Novo (1967–1986)\",\"BRL\":\"Brasilianischer Real\",\"GBP\":\"Britisches Pfund\",\"BND\":\"Brunei-Dollar\",\"BGL\":\"Bulgarische Lew (1962–1999)\",\"BGN\":\"Bulgarischer Lew\",\"BGO\":\"Bulgarischer Lew (1879–1952)\",\"BGM\":\"Bulgarischer Lew (1952–1962)\",\"BIF\":\"Burundi-Franc\",\"XOF\":\"CFA-Franc (BCEAO)\",\"XAF\":\"CFA-Franc (BEAC)\",\"XPF\":\"CFP-Franc\",\"CVE\":\"Cabo-Verde-Escudo\",\"CLF\":\"Chilenische Unidades de Fomento\",\"CLE\":\"Chilenischer Escudo\",\"CLP\":\"Chilenischer Peso\",\"CRC\":\"Costa-Rica-Colón\",\"DEM\":\"Deutsche Mark\",\"CNX\":\"Dollar der Chinesischen Volksbank\",\"DOP\":\"Dominikanischer Peso\",\"DJF\":\"Dschibuti-Franc\",\"DKK\":\"Dänische Krone\",\"ECS\":\"Ecuadorianischer Sucre\",\"SVC\":\"El Salvador Colon\",\"ERN\":\"Eritreischer Nakfa\",\"EEK\":\"Estnische Krone\",\"EUR\":\"Euro\",\"XEU\":\"Europäische Währungseinheit (XEU)\",\"FKP\":\"Falkland-Pfund\",\"FJD\":\"Fidschi-Dollar\",\"FIM\":\"Finnische Mark\",\"FRF\":\"Französischer Franc\",\"XFO\":\"Französischer Gold-Franc\",\"XFU\":\"Französischer UIC-Franc\",\"GMD\":\"Gambia-Dalasi\",\"GEK\":\"Georgischer Kupon Larit\",\"GEL\":\"Georgischer Lari\",\"GHS\":\"Ghanaischer Cedi\",\"GHC\":\"Ghanaischer Cedi (1979–2007)\",\"GIP\":\"Gibraltar-Pfund\",\"GRD\":\"Griechische Drachme\",\"GTQ\":\"Guatemaltekischer Quetzal\",\"GWP\":\"Guinea-Bissau Peso\",\"GNF\":\"Guinea-Franc\",\"GNS\":\"Guineischer Syli\",\"GYD\":\"Guyana-Dollar\",\"HTG\":\"Haitianische Gourde\",\"HNL\":\"Honduras-Lempira\",\"HKD\":\"Hongkong-Dollar\",\"INR\":\"Indische Rupie\",\"IDR\":\"Indonesische Rupiah\",\"IQD\":\"Irakischer Dinar\",\"IRR\":\"Iranischer Rial\",\"IEP\":\"Irisches Pfund\",\"ISK\":\"Isländische Krone\",\"ISJ\":\"Isländische Krone (1918–1981)\",\"ILS\":\"Israelischer Neuer Schekel\",\"ILR\":\"Israelischer Schekel (1980–1985)\",\"ILP\":\"Israelisches Pfund\",\"ITL\":\"Italienische Lira\",\"JMD\":\"Jamaika-Dollar\",\"JPY\":\"Japanischer Yen\",\"YDD\":\"Jemen-Dinar\",\"YER\":\"Jemen-Rial\",\"JOD\":\"Jordanischer Dinar\",\"YUD\":\"Jugoslawischer Dinar (1966–1990)\",\"YUN\":\"Jugoslawischer Dinar (konvertibel)\",\"YUM\":\"Jugoslawischer Neuer Dinar (1994–2002)\",\"YUR\":\"Jugoslawischer reformierter Dinar (1992–1993)\",\"KYD\":\"Kaiman-Dollar\",\"KHR\":\"Kambodschanischer Riel\",\"CAD\":\"Kanadischer Dollar\",\"KZT\":\"Kasachischer Tenge\",\"QAR\":\"Katar-Riyal\",\"KES\":\"Kenia-Schilling\",\"KGS\":\"Kirgisischer Som\",\"COU\":\"Kolumbianische Unidades de valor real\",\"COP\":\"Kolumbianischer Peso\",\"KMF\":\"Komoren-Franc\",\"CDF\":\"Kongo-Franc\",\"HRD\":\"Kroatischer Dinar\",\"HRK\":\"Kroatischer Kuna\",\"CUP\":\"Kubanischer Peso\",\"CUC\":\"Kubanischer Peso (konvertibel)\",\"KWD\":\"Kuwait-Dinar\",\"ZMW\":\"Kwacha\",\"ZMK\":\"Kwacha (1968–2012)\",\"LAK\":\"Laotischer Kip\",\"LVL\":\"Lettischer Lats\",\"LVR\":\"Lettischer Rubel\",\"LBP\":\"Libanesisches Pfund\",\"LRD\":\"Liberianischer Dollar\",\"LYD\":\"Libyscher Dinar\",\"LTL\":\"Litauischer Litas\",\"LTT\":\"Litauischer Talonas\",\"LSL\":\"Loti\",\"LUL\":\"Luxemburgischer Finanz-Franc\",\"LUF\":\"Luxemburgischer Franc\",\"LUC\":\"Luxemburgischer Franc (konvertibel)\",\"MOP\":\"Macao-Pataca\",\"MGA\":\"Madagaskar-Ariary\",\"MGF\":\"Madagaskar-Franc\",\"MWK\":\"Malawi-Kwacha\",\"MYR\":\"Malaysischer Ringgit\",\"MVR\":\"Malediven-Rufiyaa\",\"MVP\":\"Malediven-Rupie (alt)\",\"MLF\":\"Malischer Franc\",\"MTL\":\"Maltesische Lira\",\"MTP\":\"Maltesisches Pfund\",\"DDM\":\"Mark der DDR\",\"MAD\":\"Marokkanischer Dirham\",\"MAF\":\"Marokkanischer Franc\",\"MRO\":\"Mauretanischer Ouguiya\",\"MUR\":\"Mauritius-Rupie\",\"MKD\":\"Mazedonischer Denar\",\"MKN\":\"Mazedonischer Denar (1992–1993)\",\"MXV\":\"Mexicanischer Unidad de Inversion (UDI)\",\"MXN\":\"Mexikanischer Peso\",\"MXP\":\"Mexikanischer Silber-Peso (1861–1992)\",\"MDC\":\"Moldau-Cupon\",\"MDL\":\"Moldau-Leu\",\"MCF\":\"Monegassischer Franc\",\"MNT\":\"Mongolischer Tögrög\",\"MZE\":\"Mosambikanischer Escudo\",\"MZN\":\"Mosambikanischer Metical\",\"MZM\":\"Mosambikanischer Metical (1980–2006)\",\"MMK\":\"Myanmarischer Kyat\",\"NAD\":\"Namibia-Dollar\",\"NPR\":\"Nepalesische Rupie\",\"TWD\":\"Neuer Taiwan-Dollar\",\"NZD\":\"Neuseeland-Dollar\",\"NIO\":\"Nicaragua-Córdoba\",\"NIC\":\"Nicaraguanischer Córdoba (1988–1991)\",\"ANG\":\"Niederländische-Antillen-Gulden\",\"NLG\":\"Niederländischer Gulden\",\"NGN\":\"Nigerianischer Naira\",\"KPW\":\"Nordkoreanischer Won\",\"NOK\":\"Norwegische Krone\",\"OMR\":\"Omanischer Rial\",\"XCD\":\"Ostkaribischer Dollar\",\"PKR\":\"Pakistanische Rupie\",\"PAB\":\"Panamaischer Balboa\",\"PGK\":\"Papua-Neuguineischer Kina\",\"PYG\":\"Paraguayischer Guaraní\",\"PEI\":\"Peruanischer Inti\",\"PEN\":\"Peruanischer Sol\",\"PES\":\"Peruanischer Sol (1863–1965)\",\"PHP\":\"Philippinischer Peso\",\"PLZ\":\"Polnischer Zloty (1950–1995)\",\"PLN\":\"Polnischer Złoty\",\"GWE\":\"Portugiesisch Guinea Escudo\",\"PTE\":\"Portugiesischer Escudo\",\"XRE\":\"RINET Funds\",\"CNY\":\"Renminbi Yuan\",\"RHD\":\"Rhodesischer Dollar\",\"RWF\":\"Ruanda-Franc\",\"RON\":\"Rumänischer Leu\",\"ROL\":\"Rumänischer Leu (1952–2006)\",\"RUB\":\"Russischer Rubel\",\"RUR\":\"Russischer Rubel (1991–1998)\",\"SBD\":\"Salomonen-Dollar\",\"WST\":\"Samoanischer Tala\",\"SAR\":\"Saudi-Rial\",\"SEK\":\"Schwedische Krone\",\"CHF\":\"Schweizer Franken\",\"RSD\":\"Serbischer Dinar\",\"CSD\":\"Serbischer Dinar (2002–2006)\",\"SCR\":\"Seychellen-Rupie\",\"SLL\":\"Sierra-leonischer Leone\",\"ZWD\":\"Simbabwe-Dollar (1980–2008)\",\"ZWR\":\"Simbabwe-Dollar (2008)\",\"ZWL\":\"Simbabwe-Dollar (2009)\",\"SGD\":\"Singapur-Dollar\",\"SKK\":\"Slowakische Krone\",\"SIT\":\"Slowenischer Tolar\",\"SOS\":\"Somalia-Schilling\",\"SUR\":\"Sowjetischer Rubel\",\"ESP\":\"Spanische Peseta\",\"ESA\":\"Spanische Peseta (A–Konten)\",\"ESB\":\"Spanische Peseta (konvertibel)\",\"LKR\":\"Sri-Lanka-Rupie\",\"SHP\":\"St. Helena-Pfund\",\"SDD\":\"Sudanesischer Dinar (1992–2007)\",\"SDG\":\"Sudanesisches Pfund\",\"SDP\":\"Sudanesisches Pfund (1957–1998)\",\"SRG\":\"Suriname Gulden\",\"SRD\":\"Suriname-Dollar\",\"SZL\":\"Swasiländischer Lilangeni\",\"SYP\":\"Syrisches Pfund\",\"STD\":\"São-toméischer Dobra\",\"ZAR\":\"Südafrikanischer Rand\",\"ZAL\":\"Südafrikanischer Rand (Finanz)\",\"KRH\":\"Südkoreanischer Hwan (1953–1962)\",\"KRW\":\"Südkoreanischer Won\",\"KRO\":\"Südkoreanischer Won (1945–1953)\",\"SSP\":\"Südsudanesisches Pfund\",\"TJR\":\"Tadschikistan Rubel\",\"TJS\":\"Tadschikistan-Somoni\",\"TZS\":\"Tansania-Schilling\",\"THB\":\"Thailändischer Baht\",\"TPE\":\"Timor-Escudo\",\"TOP\":\"Tongaischer Paʻanga\",\"TTD\":\"Trinidad und Tobago-Dollar\",\"CZK\":\"Tschechische Krone\",\"CSK\":\"Tschechoslowakische Krone\",\"TND\":\"Tunesischer Dinar\",\"TMT\":\"Turkmenistan-Manat\",\"TMM\":\"Turkmenistan-Manat (1993–2009)\",\"TRY\":\"Türkische Lira\",\"TRL\":\"Türkische Lira (1922–2005)\",\"USS\":\"US Dollar (Gleicher Tag)\",\"USN\":\"US Dollar (Nächster Tag)\",\"USD\":\"US-Dollar\",\"UGX\":\"Uganda-Schilling\",\"UGS\":\"Uganda-Schilling (1966–1987)\",\"UAH\":\"Ukrainische Hrywnja\",\"UAK\":\"Ukrainischer Karbovanetz\",\"HUF\":\"Ungarischer Forint\",\"UYU\":\"Uruguayischer Peso\",\"UYP\":\"Uruguayischer Peso (1975–1993)\",\"UYI\":\"Uruguayischer Peso (Indexierte Rechnungseinheiten)\",\"UZS\":\"Usbekistan-Sum\",\"AED\":\"VAE-Dirham\",\"VUV\":\"Vanuatu-Vatu\",\"VEF\":\"Venezolanischer Bolívar\",\"VEB\":\"Venezolanischer Bolívar (1871–2008)\",\"ECV\":\"Verrechnungseinheit für Ecuador\",\"VND\":\"Vietnamesischer Dong\",\"VNN\":\"Vietnamesischer Dong(1978–1985)\",\"CHW\":\"WIR Franken\",\"CHE\":\"WIR-Euro\",\"BYN\":\"Weißrussischer Rubel\",\"BYR\":\"Weißrussischer Rubel (2000–2016)\",\"ZRN\":\"Zaire-Neuer Zaïre (1993–1998)\",\"ZRZ\":\"Zaire-Zaïre (1971–1993)\",\"CYP\":\"Zypern-Pfund\",\"EGP\":\"Ägyptisches Pfund\",\"GQE\":\"Äquatorialguinea-Ekwele\",\"ETB\":\"Äthiopischer Birr\",\"ATS\":\"Österreichischer Schilling\"}");

/***/ }),
/* 43 */
/***/ (function(module) {

module.exports = JSON.parse("{\"ALK\":\"Albanian Lek (1946–1965)\",\"ARM\":\"Argentine Peso (1881–1970)\",\"ARL\":\"Argentine Peso Ley (1970–1983)\",\"BOL\":\"Bolivian Boliviano (1863–1963)\",\"BAN\":\"Bosnia-Herzegovina New Dinar (1994–1997)\",\"BRZ\":\"Brazilian Cruzeiro (1942–1967)\",\"BGO\":\"Bulgarian Lev (1879–1952)\",\"BGM\":\"Bulgarian Socialist Lev\",\"CLE\":\"Chilean Escudo\",\"CNX\":\"Chinese People’s Bank Dollar\",\"ISJ\":\"Icelandic Króna (1918–1981)\",\"ILR\":\"Israeli Shekel (1980–1985)\",\"BOV\":\"MVDOL boliviano\",\"MKN\":\"Macedonian Denar (1992–1993)\",\"MVP\":\"Maldivian Rupee (1947–1981)\",\"MDC\":\"Moldovan Cupon\",\"MCF\":\"Monegasque Franc\",\"KRH\":\"South Korean Hwan (1953–1962)\",\"KRO\":\"South Korean Won (1945–1953)\",\"VNN\":\"Vietnamese Dong (1978–1985)\",\"YUR\":\"Yugoslavian Reformed Dinar (1992–1993)\",\"ZWR\":\"Zimbabwean Dollar (2008)\",\"AFN\":\"afgani\",\"AFA\":\"afgani (1927–2002)\",\"CSD\":\"antiguo dinar serbio\",\"ROL\":\"antiguo leu rumano\",\"MZM\":\"antiguo metical mozambiqueño\",\"MGA\":\"ariari\",\"ARA\":\"austral argentino\",\"PAB\":\"balboa panameño\",\"THB\":\"bat\",\"ETB\":\"bir\",\"BOB\":\"boliviano\",\"VEF\":\"bolívar venezolano\",\"VEB\":\"bolívar venezolano (1871–2008)\",\"GHS\":\"cedi\",\"GHC\":\"cedi ghanés (1979–2007)\",\"ATS\":\"chelín austriaco\",\"KES\":\"chelín keniano\",\"SOS\":\"chelín somalí\",\"TZS\":\"chelín tanzano\",\"UGX\":\"chelín ugandés\",\"UGS\":\"chelín ugandés (1966–1987)\",\"CRC\":\"colón costarricense\",\"SVC\":\"colón salvadoreño\",\"CZK\":\"corona checa\",\"DKK\":\"corona danesa\",\"SKK\":\"corona eslovaca\",\"EEK\":\"corona estonia\",\"CSK\":\"corona fuerte checoslovaca\",\"ISK\":\"corona islandesa\",\"NOK\":\"corona noruega\",\"SEK\":\"corona sueca\",\"BRR\":\"cruceiro brasileño\",\"BRE\":\"cruceiro brasileño (1990–1993)\",\"BRC\":\"cruzado brasileño\",\"NIO\":\"córdoba nicaragüense\",\"NIC\":\"córdoba nicaragüense (1988–1991)\",\"GMD\":\"dalasi\",\"DZD\":\"dinar argelino\",\"BHD\":\"dinar bahreiní\",\"BAD\":\"dinar bosnio\",\"YUN\":\"dinar convertible yugoslavo\",\"HRD\":\"dinar croata\",\"YUD\":\"dinar fuerte yugoslavo\",\"IQD\":\"dinar iraquí\",\"JOD\":\"dinar jordano\",\"KWD\":\"dinar kuwaití\",\"LYD\":\"dinar libio\",\"MKD\":\"dinar macedonio\",\"RSD\":\"dinar serbio\",\"SDD\":\"dinar sudanés\",\"TND\":\"dinar tunecino\",\"YDD\":\"dinar yemení\",\"STD\":\"dobra\",\"VND\":\"dong\",\"GRD\":\"dracma griego\",\"AMD\":\"dram\",\"AED\":\"dírham de los Emiratos Árabes Unidos\",\"MAD\":\"dírham marroquí\",\"AUD\":\"dólar australiano\",\"BSD\":\"dólar bahameño\",\"BBD\":\"dólar barbadense\",\"BZD\":\"dólar beliceño\",\"BND\":\"dólar bruneano\",\"CAD\":\"dólar canadiense\",\"BMD\":\"dólar de Bermudas\",\"TTD\":\"dólar de Trinidad y Tobago\",\"ZWD\":\"dólar de Zimbabue\",\"KYD\":\"dólar de las Islas Caimán\",\"XCD\":\"dólar del Caribe Oriental\",\"USD\":\"dólar estadounidense\",\"USN\":\"dólar estadounidense (día siguiente)\",\"USS\":\"dólar estadounidense (mismo día)\",\"FJD\":\"dólar fiyiano\",\"GYD\":\"dólar guyanés\",\"HKD\":\"dólar hongkonés\",\"JMD\":\"dólar jamaicano\",\"LRD\":\"dólar liberiano\",\"NAD\":\"dólar namibio\",\"NZD\":\"dólar neozelandés\",\"RHD\":\"dólar rodesiano\",\"SBD\":\"dólar salomonense\",\"SGD\":\"dólar singapurense\",\"SRD\":\"dólar surinamés\",\"ZWL\":\"dólar zimbabuense\",\"GQE\":\"ekuele de Guinea Ecuatorial\",\"CVE\":\"escudo de Cabo Verde\",\"GWE\":\"escudo de Guinea Portuguesa\",\"MZE\":\"escudo mozambiqueño\",\"PTE\":\"escudo portugués\",\"TPE\":\"escudo timorense\",\"PLN\":\"esloti\",\"EUR\":\"euro\",\"CHE\":\"euro WIR\",\"AWG\":\"florín arubeño\",\"ANG\":\"florín de las Antillas Neerlandesas\",\"NLG\":\"florín neerlandés\",\"SRG\":\"florín surinamés\",\"XRE\":\"fondos RINET\",\"HUF\":\"forinto húngaro\",\"XOF\":\"franco CFA BCEAO\",\"XAF\":\"franco CFA BEAC\",\"XPF\":\"franco CFP\",\"XFU\":\"franco UIC francés\",\"CHW\":\"franco WIR\",\"BEF\":\"franco belga\",\"BEC\":\"franco belga (convertible)\",\"BEL\":\"franco belga (financiero)\",\"BIF\":\"franco burundés\",\"KMF\":\"franco comorense\",\"CDF\":\"franco congoleño\",\"LUC\":\"franco convertible luxemburgués\",\"LUL\":\"franco financiero luxemburgués\",\"FRF\":\"franco francés\",\"GNF\":\"franco guineano\",\"LUF\":\"franco luxemburgués\",\"MGF\":\"franco malgache\",\"MLF\":\"franco malí\",\"MAF\":\"franco marroquí\",\"XFO\":\"franco oro francés\",\"RWF\":\"franco ruandés\",\"CHF\":\"franco suizo\",\"DJF\":\"franco yibutiano\",\"HTG\":\"gourde haitiano\",\"UAH\":\"grivna\",\"PYG\":\"guaraní paraguayo\",\"BTN\":\"gultrum\",\"PEI\":\"inti peruano\",\"UAK\":\"karbovanet ucraniano\",\"MMK\":\"kiat\",\"PGK\":\"kina\",\"LAK\":\"kip\",\"ZMW\":\"kuacha zambiano\",\"AOA\":\"kuanza\",\"HRK\":\"kuna\",\"GEK\":\"kupon larit georgiano\",\"MWK\":\"kwacha malauí\",\"ZMK\":\"kwacha zambiano (1968–2012)\",\"AOK\":\"kwanza angoleño (1977–1990)\",\"AOR\":\"kwanza reajustado angoleño (1995–1999)\",\"BUK\":\"kyat birmano\",\"GEL\":\"lari\",\"LVL\":\"lats letón\",\"ALL\":\"lek\",\"HNL\":\"lempira hondureño\",\"SLL\":\"leona\",\"MDL\":\"leu moldavo\",\"RON\":\"leu rumano\",\"BGN\":\"lev búlgaro\",\"BGL\":\"lev fuerte búlgaro\",\"GBP\":\"libra británica\",\"CYP\":\"libra chipriota\",\"SHP\":\"libra de Santa Elena\",\"EGP\":\"libra egipcia\",\"GIP\":\"libra gibraltareña\",\"IEP\":\"libra irlandesa\",\"ILP\":\"libra israelí\",\"LBP\":\"libra libanesa\",\"MTP\":\"libra maltesa\",\"FKP\":\"libra malvinense\",\"SYP\":\"libra siria\",\"SDG\":\"libra sudanesa\",\"SDP\":\"libra sudanesa antigua\",\"SSP\":\"libra sursudanesa\",\"SZL\":\"lilangeni\",\"ITL\":\"lira italiana\",\"MTL\":\"lira maltesa\",\"TRY\":\"lira turca\",\"TRL\":\"lira turca (1922–2005)\",\"LTL\":\"litas lituano\",\"LSL\":\"loti lesothense\",\"AZN\":\"manat azerí\",\"AZM\":\"manat azerí (1993–2006)\",\"TMT\":\"manat turcomano\",\"TMM\":\"manat turcomano (1993–2009)\",\"DEM\":\"marco alemán\",\"BAM\":\"marco convertible de Bosnia-Herzegovina\",\"FIM\":\"marco finlandés\",\"MZN\":\"metical\",\"NGN\":\"naira\",\"ERN\":\"nakfa\",\"BRB\":\"nuevo cruceiro brasileño (1967–1986)\",\"BRN\":\"nuevo cruzado brasileño\",\"TWD\":\"nuevo dólar taiwanés\",\"AON\":\"nuevo kwanza angoleño (1990–2000)\",\"BYB\":\"nuevo rublo bielorruso (1994–1999)\",\"ILS\":\"nuevo séquel israelí\",\"ZRN\":\"nuevo zaire zaireño\",\"DDM\":\"ostmark de Alemania del Este\",\"TOP\":\"paanga\",\"MOP\":\"pataca de Macao\",\"ADP\":\"peseta andorrana\",\"ESP\":\"peseta española\",\"ESA\":\"peseta española (cuenta A)\",\"ESB\":\"peseta española (cuenta convertible)\",\"ARS\":\"peso argentino\",\"ARP\":\"peso argentino (1983–1985)\",\"BOP\":\"peso boliviano\",\"CLP\":\"peso chileno\",\"COP\":\"peso colombiano\",\"CUP\":\"peso cubano\",\"CUC\":\"peso cubano convertible\",\"GWP\":\"peso de Guinea-Bissáu\",\"MXP\":\"peso de plata mexicano (1861–1992)\",\"DOP\":\"peso dominicano\",\"PHP\":\"peso filipino\",\"MXN\":\"peso mexicano\",\"UYU\":\"peso uruguayo\",\"UYP\":\"peso uruguayo (1975–1993)\",\"UYI\":\"peso uruguayo en unidades indexadas\",\"BWP\":\"pula\",\"GTQ\":\"quetzal guatemalteco\",\"ZAR\":\"rand\",\"ZAL\":\"rand sudafricano (financiero)\",\"BRL\":\"real brasileño\",\"QAR\":\"rial catarí\",\"IRR\":\"rial iraní\",\"OMR\":\"rial omaní\",\"SAR\":\"rial saudí\",\"YER\":\"rial yemení\",\"KHR\":\"riel\",\"MYR\":\"ringit\",\"BYN\":\"rublo bielorruso\",\"BYR\":\"rublo bielorruso (2000–2016)\",\"LVR\":\"rublo letón\",\"RUB\":\"rublo ruso\",\"RUR\":\"rublo ruso (1991–1998)\",\"SUR\":\"rublo soviético\",\"TJR\":\"rublo tayiko\",\"MVR\":\"rufiya\",\"LKR\":\"rupia esrilanquesa\",\"INR\":\"rupia india\",\"IDR\":\"rupia indonesia\",\"MUR\":\"rupia mauriciana\",\"NPR\":\"rupia nepalí\",\"PKR\":\"rupia pakistaní\",\"SCR\":\"rupia seychellense\",\"PEN\":\"sol peruano\",\"PES\":\"sol peruano (1863–1965)\",\"KGS\":\"som\",\"TJS\":\"somoni tayiko\",\"ECS\":\"sucre ecuatoriano\",\"UZS\":\"sum\",\"YUM\":\"super dinar yugoslavo\",\"GNS\":\"syli guineano\",\"BDT\":\"taka\",\"WST\":\"tala\",\"LTT\":\"talonas lituano\",\"KZT\":\"tenge kazako\",\"MNT\":\"tugrik\",\"SIT\":\"tólar esloveno\",\"MRO\":\"uguiya\",\"CLF\":\"unidad de fomento chilena\",\"MXV\":\"unidad de inversión (UDI) mexicana\",\"XEU\":\"unidad de moneda europea\",\"ECV\":\"unidad de valor constante (UVC) ecuatoriana\",\"COU\":\"unidad de valor real colombiana\",\"VUV\":\"vatu\",\"KPW\":\"won norcoreano\",\"KRW\":\"won surcoreano\",\"JPY\":\"yen\",\"CNY\":\"yuan\",\"ZRZ\":\"zaire zaireño\",\"PLZ\":\"zloty polaco (1950–1995)\"}");

/***/ }),
/* 44 */
/***/ (function(module) {

module.exports = JSON.parse("{\"ARM\":\"Argentine Peso (1881–1970)\",\"ARL\":\"Argentine Peso Ley (1970–1983)\",\"BOL\":\"Bolivian Boliviano (1863–1963)\",\"BAN\":\"Bosnia-Herzegovina New Dinar (1994–1997)\",\"BRZ\":\"Brazilian Cruzeiro (1942–1967)\",\"BGO\":\"Bulgarian Lev (1879–1952)\",\"BGM\":\"Bulgarian Socialist Lev\",\"CLE\":\"Chilean Escudo\",\"CNX\":\"Chinese People’s Bank Dollar\",\"ISJ\":\"Icelandic Króna (1918–1981)\",\"ILR\":\"Israeli Shekel (1980–1985)\",\"MKN\":\"Macedonian Denar (1992–1993)\",\"MVP\":\"Maldivian Rupee (1947–1981)\",\"MDC\":\"Moldovan Cupon\",\"MCF\":\"Monegasque Franc\",\"KRH\":\"South Korean Hwan (1953–1962)\",\"KRO\":\"South Korean Won (1945–1953)\",\"VNN\":\"Vietnamese Dong (1978–1985)\",\"YUR\":\"Yugoslavian Reformed Dinar (1992–1993)\",\"AFA\":\"afghani (1927–2002)\",\"AFN\":\"afghani afghan\",\"ROL\":\"ancien leu roumain\",\"MGA\":\"ariary malgache\",\"ARA\":\"austral argentin\",\"THB\":\"baht thaïlandais\",\"PAB\":\"balboa panaméen\",\"ETB\":\"birr éthiopien\",\"VEF\":\"bolivar vénézuélien\",\"VEB\":\"bolivar vénézuélien (1871–2008)\",\"BOB\":\"boliviano bolivien\",\"CRC\":\"colón costaricain\",\"SVC\":\"colón salvadorien\",\"NIC\":\"cordoba\",\"GEK\":\"coupon de lari géorgien\",\"DKK\":\"couronne danoise\",\"EEK\":\"couronne estonienne\",\"CSK\":\"couronne forte tchécoslovaque\",\"ISK\":\"couronne islandaise\",\"NOK\":\"couronne norvégienne\",\"SKK\":\"couronne slovaque\",\"SEK\":\"couronne suédoise\",\"CZK\":\"couronne tchèque\",\"BRC\":\"cruzado brésilien (1986–1989)\",\"BRR\":\"cruzeiro\",\"BRE\":\"cruzeiro brésilien (1990–1993)\",\"GHC\":\"cédi\",\"GHS\":\"cédi ghanéen\",\"NIO\":\"córdoba oro nicaraguayen\",\"GMD\":\"dalasi gambien\",\"MKD\":\"denar macédonien\",\"DZD\":\"dinar algérien\",\"BHD\":\"dinar bahreïni\",\"BAD\":\"dinar bosniaque\",\"HRD\":\"dinar croate\",\"YDD\":\"dinar du Yémen\",\"IQD\":\"dinar irakien\",\"JOD\":\"dinar jordanien\",\"KWD\":\"dinar koweïtien\",\"LYD\":\"dinar libyen\",\"RSD\":\"dinar serbe\",\"CSD\":\"dinar serbo-monténégrin\",\"SDD\":\"dinar soudanais\",\"TND\":\"dinar tunisien\",\"YUM\":\"dinar yougoslave Noviy\",\"YUN\":\"dinar yougoslave convertible\",\"AED\":\"dirham des Émirats arabes unis\",\"MAD\":\"dirham marocain\",\"STD\":\"dobra santoméen\",\"AUD\":\"dollar australien\",\"BSD\":\"dollar bahaméen\",\"BBD\":\"dollar barbadien\",\"BMD\":\"dollar bermudien\",\"BND\":\"dollar brunéien\",\"BZD\":\"dollar bélizéen\",\"CAD\":\"dollar canadien\",\"HKD\":\"dollar de Hong Kong\",\"SGD\":\"dollar de Singapour\",\"XCD\":\"dollar des Caraïbes orientales\",\"USS\":\"dollar des Etats-Unis (jour même)\",\"USN\":\"dollar des Etats-Unis (jour suivant)\",\"USD\":\"dollar des États-Unis\",\"KYD\":\"dollar des îles Caïmans\",\"SBD\":\"dollar des îles Salomon\",\"GYD\":\"dollar du Guyana\",\"FJD\":\"dollar fidjien\",\"JMD\":\"dollar jamaïcain\",\"LRD\":\"dollar libérien\",\"NAD\":\"dollar namibien\",\"NZD\":\"dollar néo-zélandais\",\"RHD\":\"dollar rhodésien\",\"SRD\":\"dollar surinamais\",\"TTD\":\"dollar trinidadien\",\"ZWD\":\"dollar zimbabwéen\",\"ZWR\":\"dollar zimbabwéen (2008)\",\"ZWL\":\"dollar zimbabwéen (2009)\",\"GRD\":\"drachme grecque\",\"AMD\":\"dram arménien\",\"VND\":\"dông vietnamien\",\"GQE\":\"ekwélé équatoguinéen\",\"CVE\":\"escudo capverdien\",\"GWE\":\"escudo de Guinée portugaise\",\"MZE\":\"escudo mozambicain\",\"PTE\":\"escudo portugais\",\"TPE\":\"escudo timorais\",\"EUR\":\"euro\",\"CHE\":\"euro WIR\",\"ANG\":\"florin antillais\",\"AWG\":\"florin arubais\",\"NLG\":\"florin néerlandais\",\"SRG\":\"florin surinamais\",\"HUF\":\"forint hongrois\",\"XOF\":\"franc CFA (BCEAO)\",\"XAF\":\"franc CFA (BEAC)\",\"XPF\":\"franc CFP\",\"XFU\":\"franc UIC\",\"CHW\":\"franc WIR\",\"BEF\":\"franc belge\",\"BEC\":\"franc belge (convertible)\",\"BEL\":\"franc belge (financier)\",\"BIF\":\"franc burundais\",\"KMF\":\"franc comorien\",\"CDF\":\"franc congolais\",\"LUC\":\"franc convertible luxembourgeois\",\"DJF\":\"franc djiboutien\",\"LUL\":\"franc financier luxembourgeois\",\"FRF\":\"franc français\",\"GNF\":\"franc guinéen\",\"LUF\":\"franc luxembourgeois\",\"MGF\":\"franc malgache\",\"MLF\":\"franc malien\",\"MAF\":\"franc marocain\",\"XFO\":\"franc or\",\"RWF\":\"franc rwandais\",\"CHF\":\"franc suisse\",\"HTG\":\"gourde haïtienne\",\"PYG\":\"guaraní paraguayen\",\"UAH\":\"hryvnia ukrainienne\",\"PEI\":\"inti péruvien\",\"UAK\":\"karbovanetz\",\"PGK\":\"kina papouan-néo-guinéen\",\"LAK\":\"kip loatien\",\"HRK\":\"kuna croate\",\"MWK\":\"kwacha malawite\",\"ZMW\":\"kwacha zambien\",\"ZMK\":\"kwacha zambien (1968–2012)\",\"AOA\":\"kwanza angolais\",\"AOK\":\"kwanza angolais (1977–1990)\",\"AOR\":\"kwanza angolais réajusté (1995–1999)\",\"BUK\":\"kyat birman\",\"MMK\":\"kyat myanmarais\",\"GEL\":\"lari géorgien\",\"LVL\":\"lats letton\",\"ALL\":\"lek albanais\",\"ALK\":\"lek albanais (1947–1961)\",\"HNL\":\"lempira hondurien\",\"SLL\":\"leone sierra-léonais\",\"MDL\":\"leu moldave\",\"RON\":\"leu roumain\",\"BGN\":\"lev bulgare\",\"BGL\":\"lev bulgare (1962–1999)\",\"SZL\":\"lilangeni swazi\",\"ITL\":\"lire italienne\",\"MTL\":\"lire maltaise\",\"LTL\":\"litas lituanien\",\"CYP\":\"livre chypriote\",\"GIP\":\"livre de Gibraltar\",\"SHP\":\"livre de Sainte-Hélène\",\"FKP\":\"livre des îles Malouines\",\"IEP\":\"livre irlandaise\",\"ILP\":\"livre israélienne\",\"LBP\":\"livre libanaise\",\"MTP\":\"livre maltaise\",\"SDG\":\"livre soudanaise\",\"SDP\":\"livre soudanaise (1956–2007)\",\"GBP\":\"livre sterling\",\"SSP\":\"livre sud-soudanaise\",\"SYP\":\"livre syrienne\",\"TRY\":\"livre turque\",\"TRL\":\"livre turque (1844–2005)\",\"EGP\":\"livre égyptienne\",\"LSL\":\"loti lesothan\",\"AZN\":\"manat azéri\",\"AZM\":\"manat azéri (1993–2006)\",\"TMM\":\"manat turkmène\",\"DEM\":\"mark allemand\",\"BAM\":\"mark convertible bosniaque\",\"DDM\":\"mark est-allemand\",\"FIM\":\"mark finlandais\",\"MZN\":\"metical mozambicain\",\"BOV\":\"mvdol bolivien\",\"MZM\":\"métical\",\"ERN\":\"nafka érythréen\",\"NGN\":\"naira nigérian\",\"BTN\":\"ngultrum bouthanais\",\"BRN\":\"nouveau cruzado\",\"BRB\":\"nouveau cruzeiro brésilien (1967–1986)\",\"YUD\":\"nouveau dinar yougoslave\",\"TWD\":\"nouveau dollar taïwanais\",\"AON\":\"nouveau kwanza angolais (1990–2000)\",\"TMT\":\"nouveau manat turkmène\",\"BYB\":\"nouveau rouble biélorusse (1994–1999)\",\"ILS\":\"nouveau shekel israélien\",\"ZRN\":\"nouveau zaïre zaïrien\",\"MRO\":\"ouguiya mauritanien\",\"MOP\":\"pataca macanaise\",\"TOP\":\"pa’anga tongan\",\"ADP\":\"peseta andorrane\",\"ESP\":\"peseta espagnole\",\"ESA\":\"peseta espagnole (compte A)\",\"ESB\":\"peseta espagnole (compte convertible)\",\"ARS\":\"peso argentin\",\"ARP\":\"peso argentin (1983–1985)\",\"GWP\":\"peso bissau-guinéen\",\"BOP\":\"peso bolivien\",\"CLP\":\"peso chilien\",\"COP\":\"peso colombien\",\"CUP\":\"peso cubain\",\"CUC\":\"peso cubain convertible\",\"DOP\":\"peso dominicain\",\"MXP\":\"peso d’argent mexicain (1861–1992)\",\"MXN\":\"peso mexicain\",\"PHP\":\"peso philippin\",\"UYU\":\"peso uruguayen\",\"UYP\":\"peso uruguayen (1975–1993)\",\"UYI\":\"peso uruguayen (unités indexées)\",\"BWP\":\"pula botswanais\",\"GTQ\":\"quetzal guatémaltèque\",\"ZAR\":\"rand sud-africain\",\"ZAL\":\"rand sud-africain (financier)\",\"IRR\":\"rial iranien\",\"OMR\":\"rial omanais\",\"QAR\":\"rial qatari\",\"SAR\":\"rial saoudien\",\"YER\":\"rial yéménite\",\"KHR\":\"riel cambodgien\",\"MYR\":\"ringgit malais\",\"BYN\":\"rouble biélorusse\",\"BYR\":\"rouble biélorusse (2000–2016)\",\"LVR\":\"rouble letton\",\"RUB\":\"rouble russe\",\"RUR\":\"rouble russe (1991–1998)\",\"SUR\":\"rouble soviétique\",\"TJR\":\"rouble tadjik\",\"SCR\":\"roupie des Seychelles\",\"INR\":\"roupie indienne\",\"IDR\":\"roupie indonésienne\",\"MUR\":\"roupie mauricienne\",\"NPR\":\"roupie népalaise\",\"PKR\":\"roupie pakistanaise\",\"LKR\":\"roupie srilankaise\",\"MVR\":\"rufiyaa maldivien\",\"BRL\":\"réal brésilien\",\"ATS\":\"schilling autrichien\",\"KES\":\"shilling kényan\",\"UGX\":\"shilling ougandais\",\"UGS\":\"shilling ougandais (1966–1987)\",\"SOS\":\"shilling somalien\",\"TZS\":\"shilling tanzanien\",\"PEN\":\"sol péruvien\",\"PES\":\"sol péruvien (1863–1985)\",\"KGS\":\"som kirghize\",\"TJS\":\"somoni tadjik\",\"ECS\":\"sucre équatorien\",\"UZS\":\"sum ouzbek\",\"GNS\":\"syli guinéen\",\"BDT\":\"taka bangladeshi\",\"WST\":\"tala samoan\",\"LTT\":\"talonas lituanien\",\"KZT\":\"tenge kazakh\",\"SIT\":\"tolar slovène\",\"MNT\":\"tugrik mongol\",\"XRE\":\"type de fonds RINET\",\"XEU\":\"unité de compte européenne (ECU)\",\"MXV\":\"unité de conversion mexicaine (UDI)\",\"ECV\":\"unité de valeur constante équatoriale (UVC)\",\"COU\":\"unité de valeur réelle colombienne\",\"CLF\":\"unité d’investissement chilienne\",\"VUV\":\"vatu vanuatuan\",\"KPW\":\"won nord-coréen\",\"KRW\":\"won sud-coréen\",\"JPY\":\"yen japonais\",\"CNY\":\"yuan renminbi chinois\",\"ZRZ\":\"zaïre zaïrois\",\"PLZ\":\"zloty (1950–1995)\",\"PLN\":\"zloty polonais\"}");

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("{\"CNX\":\"Chinese People’s Bank Dollar\",\"XRE\":\"RINET 基金\",\"BTN\":\"不丹努尔特鲁姆\",\"XCD\":\"东加勒比元\",\"DDM\":\"东德奥斯特马克\",\"XAF\":\"中非法郎\",\"DKK\":\"丹麦克朗\",\"UAK\":\"乌克兰币\",\"UAH\":\"乌克兰格里夫纳\",\"UZS\":\"乌兹别克斯坦苏姆\",\"UGX\":\"乌干达先令\",\"UGS\":\"乌干达先令 (1966–1987)\",\"UYU\":\"乌拉圭比索\",\"UYP\":\"乌拉圭比索 (1975–1993)\",\"UYI\":\"乌拉圭比索（索引单位）\",\"GEK\":\"乔治亚库蓬拉瑞特\",\"YDD\":\"也门第纳尔\",\"YER\":\"也门里亚尔\",\"AMD\":\"亚美尼亚德拉姆\",\"CNY\":\"人民币\",\"ILS\":\"以色列新谢克尔\",\"ILR\":\"以色列谢克尔(1980–1985)\",\"ILP\":\"以色列镑\",\"IQD\":\"伊拉克第纳尔\",\"IRR\":\"伊朗里亚尔\",\"BZD\":\"伯利兹元\",\"CVE\":\"佛得角埃斯库多\",\"RUR\":\"俄国卢布 (1991–1998)\",\"RUB\":\"俄罗斯卢布\",\"BGN\":\"保加利亚列弗\",\"BGO\":\"保加利亚列弗 (1879–1952)\",\"BGL\":\"保加利亚硬列弗\",\"BGM\":\"保加利亚社会党列弗\",\"HRK\":\"克罗地亚库纳\",\"HRD\":\"克罗地亚第纳尔\",\"GMD\":\"冈比亚达拉西\",\"ISK\":\"冰岛克朗\",\"ISJ\":\"冰岛克朗(1918–1981)\",\"GWP\":\"几内亚比绍比索\",\"GNF\":\"几内亚法郎\",\"GNS\":\"几内亚西里\",\"CDF\":\"刚果法郎\",\"LYD\":\"利比亚第纳尔\",\"LRD\":\"利比里亚元\",\"CAD\":\"加拿大元\",\"GHS\":\"加纳塞地\",\"GHC\":\"加纳塞第\",\"HUF\":\"匈牙利福林\",\"YUN\":\"南斯拉夫可兑换第纳尔 (1990–1992)\",\"YUR\":\"南斯拉夫改良第纳尔 (1992–1993)\",\"YUM\":\"南斯拉夫新第纳尔 (1994–2002)\",\"YUD\":\"南斯拉夫硬第纳尔 (1966–1990)\",\"SSP\":\"南苏丹镑\",\"ZAR\":\"南非兰特\",\"ZAL\":\"南非兰特 (金融)\",\"BWP\":\"博茨瓦纳普拉\",\"QAR\":\"卡塔尔里亚尔\",\"RWF\":\"卢旺达法郎\",\"LUC\":\"卢森堡可兑换法郎\",\"LUF\":\"卢森堡法郎\",\"LUL\":\"卢森堡金融法郎\",\"INR\":\"印度卢比\",\"IDR\":\"印度尼西亚盾\",\"GTQ\":\"危地马拉格查尔\",\"ECV\":\"厄瓜多尔 (UVC)\",\"ECS\":\"厄瓜多尔苏克雷\",\"ERN\":\"厄立特里亚纳克法\",\"SYP\":\"叙利亚镑\",\"CUC\":\"古巴可兑换比索\",\"CUP\":\"古巴比索\",\"KGS\":\"吉尔吉斯斯坦索姆\",\"DJF\":\"吉布提法郎\",\"KZT\":\"哈萨克斯坦坚戈\",\"COU\":\"哥伦比亚币\",\"COP\":\"哥伦比亚比索\",\"CRC\":\"哥斯达黎加科朗\",\"TMT\":\"土库曼斯坦马纳特\",\"TMM\":\"土库曼斯坦马纳特 (1993–2009)\",\"TRY\":\"土耳其里拉\",\"TRL\":\"土耳其里拉 (1922–2005)\",\"STD\":\"圣多美和普林西比多布拉\",\"SHP\":\"圣赫勒拿群岛磅\",\"GYD\":\"圭亚那元\",\"TZS\":\"坦桑尼亚先令\",\"EGP\":\"埃及镑\",\"ETB\":\"埃塞俄比亚比尔\",\"TJR\":\"塔吉克斯坦卢布\",\"TJS\":\"塔吉克斯坦索莫尼\",\"RSD\":\"塞尔维亚第纳尔\",\"SLL\":\"塞拉利昂利昂\",\"CYP\":\"塞浦路斯镑\",\"SCR\":\"塞舌尔卢比\",\"MXN\":\"墨西哥比索\",\"MXP\":\"墨西哥银比索 (1861–1992)\",\"MXV\":\"墨西哥（资金）\",\"DOP\":\"多米尼加比索\",\"XPF\":\"太平洋法郎\",\"ATS\":\"奥地利先令\",\"VEF\":\"委内瑞拉玻利瓦尔\",\"VEB\":\"委内瑞拉玻利瓦尔 (1871–2008)\",\"BDT\":\"孟加拉塔卡\",\"AOA\":\"安哥拉宽扎\",\"AOK\":\"安哥拉宽扎 (1977–1990)\",\"AON\":\"安哥拉新宽扎 (1990–2000)\",\"AOR\":\"安哥拉重新调整宽扎 (1995–1999)\",\"ADP\":\"安道尔比塞塔\",\"NIO\":\"尼加拉瓜科多巴\",\"NIC\":\"尼加拉瓜科多巴 (1988–1991)\",\"NGN\":\"尼日利亚奈拉\",\"NPR\":\"尼泊尔卢比\",\"BSD\":\"巴哈马元\",\"PKR\":\"巴基斯坦卢比\",\"BBD\":\"巴巴多斯元\",\"PGK\":\"巴布亚新几内亚基那\",\"PYG\":\"巴拉圭瓜拉尼\",\"PAB\":\"巴拿马巴波亚\",\"BHD\":\"巴林第纳尔\",\"BRZ\":\"巴西克鲁塞罗 (1942–1967)\",\"BRE\":\"巴西克鲁塞罗 (1990–1993)\",\"BRR\":\"巴西克鲁塞罗 (1993–1994)\",\"BRC\":\"巴西克鲁扎多 (1986–1989)\",\"BRN\":\"巴西新克鲁扎多 (1989–1990)\",\"BRB\":\"巴西新克鲁赛罗 (1967–1986)\",\"BRL\":\"巴西雷亚尔\",\"BIF\":\"布隆迪法郎\",\"GRD\":\"希腊德拉克马\",\"TPE\":\"帝汶埃斯库多\",\"KYD\":\"开曼元\",\"DEM\":\"德国马克\",\"ITL\":\"意大利里拉\",\"SBD\":\"所罗门群岛元\",\"ZRZ\":\"扎伊尔 (1971–1993)\",\"LVR\":\"拉脱维亚卢布\",\"LVL\":\"拉脱维亚拉特\",\"NOK\":\"挪威克朗\",\"CZK\":\"捷克克朗\",\"CSK\":\"捷克硬克朗\",\"MDL\":\"摩尔多瓦列伊\",\"MDC\":\"摩尔多瓦库邦\",\"MAF\":\"摩洛哥法郎\",\"MAD\":\"摩洛哥迪拉姆\",\"MCF\":\"摩纳哥法郎\",\"BND\":\"文莱元\",\"FJD\":\"斐济元\",\"SZL\":\"斯威士兰里兰吉尼\",\"SKK\":\"斯洛伐克克朗\",\"SIT\":\"斯洛文尼亚托拉尔\",\"LKR\":\"斯里兰卡卢比\",\"SGD\":\"新加坡元\",\"TWD\":\"新台币\",\"ZRN\":\"新扎伊尔 (1993–1998)\",\"NZD\":\"新西兰元\",\"JPY\":\"日元\",\"CSD\":\"旧塞尔维亚第纳尔\",\"ROL\":\"旧罗马尼亚列伊\",\"SDP\":\"旧苏丹镑\",\"MZM\":\"旧莫桑比克美提卡\",\"CLE\":\"智利埃斯库多\",\"CLP\":\"智利比索\",\"CLF\":\"智利（资金）\",\"KPW\":\"朝鲜元\",\"KHR\":\"柬埔寨瑞尔\",\"GEL\":\"格鲁吉亚拉里\",\"EUR\":\"欧元\",\"CHE\":\"欧元 (WIR)\",\"XEU\":\"欧洲货币单位\",\"BEF\":\"比利时法郎\",\"BEC\":\"比利时法郎（可兑换）\",\"BEL\":\"比利时法郎（金融）\",\"MRO\":\"毛里塔尼亚乌吉亚\",\"MUR\":\"毛里求斯卢比\",\"TOP\":\"汤加潘加\",\"SAR\":\"沙特里亚尔\",\"FRF\":\"法国法郎\",\"XFU\":\"法国法郎 (UIC)\",\"XFO\":\"法国金法郎\",\"CHW\":\"法郎 (WIR)\",\"PLN\":\"波兰兹罗提\",\"PLZ\":\"波兰兹罗提 (1950–1995)\",\"BAN\":\"波士尼亚-赫塞哥维纳新第纳尔 (1994–1997)\",\"BAD\":\"波士尼亚-赫塞哥维纳第纳尔 (1992–1994)\",\"BAM\":\"波斯尼亚-黑塞哥维那可兑换马克\",\"THB\":\"泰铢\",\"ZWD\":\"津巴布韦元 (1980–2008)\",\"ZWR\":\"津巴布韦元 (2008)\",\"ZWL\":\"津巴布韦元 (2009)\",\"HNL\":\"洪都拉斯伦皮拉\",\"HTG\":\"海地古德\",\"HKD\":\"港元\",\"AUD\":\"澳大利亚元\",\"MOP\":\"澳门币\",\"IEP\":\"爱尔兰镑\",\"EEK\":\"爱沙尼亚克朗\",\"JMD\":\"牙买加元\",\"TTD\":\"特立尼达和多巴哥元\",\"BOV\":\"玻利维亚 Mvdol（资金）\",\"BOP\":\"玻利维亚比索\",\"BOB\":\"玻利维亚诺\",\"BOL\":\"玻利维亚诺 (1863–1963)\",\"SEK\":\"瑞典克朗\",\"CHF\":\"瑞士法郎\",\"VUV\":\"瓦努阿图瓦图\",\"BYN\":\"白俄罗斯卢布\",\"BYR\":\"白俄罗斯卢布 (2000–2016)\",\"BYB\":\"白俄罗斯新卢布 (1994–1999)\",\"BMD\":\"百慕大元\",\"GIP\":\"直布罗陀镑\",\"FKP\":\"福克兰群岛镑\",\"KWD\":\"科威特第纳尔\",\"KMF\":\"科摩罗法郎\",\"PEI\":\"秘鲁印第\",\"PEN\":\"秘鲁索尔\",\"PES\":\"秘鲁索尔 (1863–1965)\",\"TND\":\"突尼斯第纳尔\",\"LTT\":\"立陶宛塔咯呐司\",\"LTL\":\"立陶宛立特\",\"SOS\":\"索马里先令\",\"JOD\":\"约旦第纳尔\",\"NAD\":\"纳米比亚元\",\"BUK\":\"缅元\",\"MMK\":\"缅甸元\",\"RHD\":\"罗得西亚元\",\"RON\":\"罗马尼亚列伊\",\"USD\":\"美元\",\"USS\":\"美元（当日）\",\"USN\":\"美元（次日）\",\"LAK\":\"老挝基普\",\"KES\":\"肯尼亚先令\",\"FIM\":\"芬兰马克\",\"SDD\":\"苏丹第纳尔 (1992–2007)\",\"SDG\":\"苏丹镑\",\"SUR\":\"苏联卢布\",\"SRD\":\"苏里南元\",\"SRG\":\"苏里南盾\",\"GBP\":\"英镑\",\"NLG\":\"荷兰盾\",\"ANG\":\"荷属安的列斯盾\",\"MZE\":\"莫桑比克埃斯库多\",\"MZN\":\"莫桑比克美提卡\",\"LSL\":\"莱索托洛蒂\",\"PHP\":\"菲律宾比索\",\"SVC\":\"萨尔瓦多科朗\",\"WST\":\"萨摩亚塔拉\",\"GWE\":\"葡萄牙几内亚埃斯库多\",\"PTE\":\"葡萄牙埃斯库多\",\"MNT\":\"蒙古图格里克\",\"ESP\":\"西班牙比塞塔\",\"ESB\":\"西班牙比塞塔（兑换帐户）\",\"ESA\":\"西班牙比塞塔（帐户 A）\",\"XOF\":\"西非法郎\",\"ZMW\":\"赞比亚克瓦查\",\"ZMK\":\"赞比亚克瓦查 (1968–2012)\",\"GQE\":\"赤道几内亚埃奎勒\",\"VND\":\"越南盾\",\"VNN\":\"越南盾 (1978–1985)\",\"AZN\":\"阿塞拜疆马纳特\",\"AZM\":\"阿塞拜疆马纳特 (1993–2006)\",\"AFN\":\"阿富汗尼\",\"AFA\":\"阿富汗尼 (1927–2002)\",\"DZD\":\"阿尔及利亚第纳尔\",\"ALL\":\"阿尔巴尼亚列克\",\"ALK\":\"阿尔巴尼亚列克(1946–1965)\",\"OMR\":\"阿曼里亚尔\",\"ARA\":\"阿根廷奥斯特拉尔\",\"ARS\":\"阿根廷比索\",\"ARM\":\"阿根廷比索 (1881–1970)\",\"ARP\":\"阿根廷比索 (1983–1985)\",\"ARL\":\"阿根廷法定比索 (1970–1983)\",\"AED\":\"阿联酋迪拉姆\",\"AWG\":\"阿鲁巴弗罗林\",\"KRW\":\"韩元\",\"KRO\":\"韩元 (1945–1953)\",\"KRH\":\"韩元 (1953–1962)\",\"MKD\":\"马其顿第纳尔\",\"MKN\":\"马其顿第纳尔 (1992–1993)\",\"MVP\":\"马尔代夫卢比(1947–1981)\",\"MVR\":\"马尔代夫卢菲亚\",\"MWK\":\"马拉维克瓦查\",\"MYR\":\"马来西亚林吉特\",\"MTL\":\"马耳他里拉\",\"MTP\":\"马耳他镑\",\"MGF\":\"马达加斯加法郎\",\"MGA\":\"马达加斯加阿里亚里\",\"MLF\":\"马里法郎\",\"LBP\":\"黎巴嫩镑\"}");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
__webpack_require__(51);
module.exports = __webpack_require__(59);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(50)["default"];

var _require = __webpack_require__(22),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(22),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(52),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);










Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.tsx */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.tsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/currencies.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/currencies.tsx */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/currencies.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/currencies.tsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/currencies.tsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.tsx */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.tsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/index.tsx';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Currency",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Currency */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Currency');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Currency";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/containers/Currency'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.tsx': t_0,
  '__react_static_root__/src/pages/currencies.tsx': t_1,
  '__react_static_root__/src/pages/index.tsx': t_2,
  '__react_static_root__/src/containers/Currency': t_3
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(19);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 14,
	"./": 14,
	"./index": 14,
	"./index.js": 14
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 55;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
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

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(60);

var _interopRequireDefault = __webpack_require__(61);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(62));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(63));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(64);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(65)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("/Users/ahmadsouqi/gold_price/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);




 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);


i18next__WEBPACK_IMPORTED_MODULE_0___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]).init({
  resources: {
    en: {
      translations: {
        header: "Gold Price In {{countryName}}",
        update: "Updated {{updatedTime}}",
        purity: "Price table based on purity, in",
        tableUnit: "Unit",
        tablePrice: "Price",
        weightTableHeader: "Price Per Weight",
        weightTableWeight: "Weight",
        gram: "Gram",
        ounce: "Ounce",
        kilo: "Kilo",
        badgePriceTable: "Price get updated every 12 hours",
        badgeGraph: "30 Day Gold Price History",
        Welcome1: "Hey, nice to see you",
        Welcome2: "Throughout history, gold has been seen as a special and valuable commodity.",
        Welcome3: "Today, owning gold can act as a hedge against inflation and deflation alike, as well as a good portfolio diversifier.",
        Welcome4: "As a global store of value, gold can also provide financial cover during geopolitical and macroeconomic uncertainty.",
        Welcome5: "We should know that gold price is linked to oil and dollar as following:",
        Welcome6: "The higher the price of oil, so that the price of gold; The relationship between them is a direct correlation.",
        Welcome7: "The higher the price of the dollar, the lower the price of gold. The relationship between them is inverse.",
        currencysPage: "Currencies Page",
        language: "Language",
        metaTitle: "Gold Price in {{countryName}} - Ounce Gram Kilo Gold Rate in {{code}}",
        metaDescription: "Gold rate in {{countryName}}. Current price of Ounce Gram Kilo is available in {{countryCurrency}} in 24k, 22k, 21k, 18k",
        metaKeywords: "ounce gold rates in {{countryName}},  gram gold rates in {{countryName}}, kilo gold rates in {{countryName}}, \n            gold price in {{countryCurrency}}, gold price per ounce in , today ounce gold rate in {{countryName}} , \n            22k 21k 24k 20k 18k 14k gold price in  {{countryCurrency}} in {{countryName}}, \n            gold price today in {{countryName}}, gold stock price, 24k gold price per gram, 18k gold /gram price, 21k gold price per gram, 21k gold /gram price 24k gold /gram price",
        metaOGDescription: "Gold Price in {{countryName}}. Current price of Ounce Gram Kilo is available in {{countryCurrency}} in 24k, 22k, 23k, 21k, 20k, 18k .   \n            We are providing the latest rates in the current exchange rate of {{countryCurrency}}.  \n            Today gold price per Ounce =  {{ouncePrice}} {{code}}, Today gold price per Gram =  {{gramPrice}} {{code}}, Today gold price per Kilo =  {{kiloPrice}} {{code}}, updated at {{updatedTime}}."
      }
    },
    ara: {
      translations: {
        header: "سعر الذهب في {{countryName}}",
        update: "{{updatedTime}} اخر تحديث",
        purity: "جدول الأسعار على أساس النقاء ، مرتكز على",
        tableUnit: "وحدة",
        tablePrice: "السعر",
        weightTableHeader: "السعر لكل وزن",
        weightTableWeight: "وزن",
        gram: "غرام",
        ounce: "أوقية",
        kilo: "كيلو",
        badgePriceTable: "يتم تحديث السعر كل 12 ساعة",
        badgeGraph: "تاريخ أسعار الذهب لمدة 30 يومًا",
        Welcome1: "مرحبًا ، سررت برؤيتك",
        Welcome2: ".عبر التاريخ ، كان يُنظر إلى الذهب على أنه سلعة خاصة وقيمة",
        Welcome3: ".اليوم ، يمكن أن يكون امتلاك الذهب بمثابة تحوط ضد التضخم والانكماش على حد سواء ، فضلاً عن كونه أداة تنويع جيدة للمحفظة",
        Welcome4: "كمخزن عالمي للقيمة ، يمكن للذهب أيضًا توفير غطاء مالي خلال حالة عدم اليقين الجيوسياسي والاقتصاد الكلي",
        Welcome5: ":يجب أن نعلم أن سعر الذهب مرتبط بالنفط والدولار على النحو التالي",
        Welcome6: "كلما ارتفع سعر النفط ، ارتفع سعر الذهب ؛ العلاقة بينهما علاقة مباشرة",
        Welcome7: "كلما ارتفع سعر الدولار ، انخفض سعر الذهب. العلاقة بينهما معكوسة",
        currencysPage: "صفحة العملات",
        language: "لغة",
        metaTitle: "سعر الذهب في {{countryName}} - {{countryName}} سعر أوقية جرام كيلو الذهب في",
        metaDescription: "سعر الذهب في {{countryName}}. السعر الحالي للجرام أوقية كيلو متاح في {{countryCurrency}} في 24 قيراط ، 22 قيراط ، 21 ك ، 18 قيراط",
        metaKeywords: "\u0623\u0633\u0639\u0627\u0631 \u0623\u0648\u0642\u064A\u0629 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}},  \u0623\u0633\u0639\u0627\u0631 \u062C\u0631\u0627\u0645 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}}, \u0623\u0633\u0639\u0627\u0631 \u0643\u064A\u0644\u0648 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}}, \n            \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryCurrency}}, \u0633\u0639\u0631 \u0623\u0648\u0646\u0635\u0629 \u0627\u0644\u0630\u0647\u0628 , \u0627\u0644\u064A\u0648\u0645 \u0633\u0639\u0631 \u0623\u0648\u0642\u064A\u0629 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}} , \n            \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 22 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 \u0639\u064A\u0627\u0631 24 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 \u0639\u064A\u0627\u0631 18 \u0641\u064A  {{countryCurrency}} \u0641\u064A {{countryName}}, \n            \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u064A\u0648\u0645 \u0628\u0640 {{countryName}}, \u0633\u0639\u0631 \u0633\u0647\u0645 \u0627\u0644\u0630\u0647\u0628 , \u0633\u0639\u0631 \u062C\u0631\u0627\u0645 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 24 , \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 18 \u0644\u0644\u062C\u0631\u0627\u0645 \u060C \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 21 \u0644\u0644\u062C\u0631\u0627\u0645 \u060C \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 21 \u0644\u0644\u062C\u0631\u0627\u0645 \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 \u0662\u0664 / \u0627\u0644\u062C\u0631\u0627\u0645",
        metaOGDescription: "\u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0641\u064A {{countryName}}. \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u062D\u0627\u0644\u064A \u0644\u0644\u062C\u0631\u0627\u0645 \u0623\u0648\u0642\u064A\u0629 \u0643\u064A\u0644\u0648 \u0645\u062A\u0627\u062D \u0641\u064A {{countryCurrency}} \u0641\u064A 24 \u0642\u064A\u0631\u0627\u0637 \u060C 22 \u0642\u064A\u0631\u0627\u0637 \u060C 23 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 \u060C 21 \u0643 \u060C 20 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 \u060C 18 \u0642\u064A\u0631\u0627\u0637\u064B\u0627 .   \n            \u0646\u062D\u0646 \u0646\u0642\u062F\u0645 \u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0628\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u062D\u0627\u0644\u064A \u0644\u0640 {{countryCurrency}}.  \n            \u0633\u0639\u0631 \u0623\u0648\u0642\u064A\u0629 \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u064A\u0648\u0645 =  {{ouncePrice}} {{code}}, \u0633\u0639\u0631 \u062C\u0631\u0627\u0645 \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u064A\u0648\u0645 =  {{gramPrice}} {{code}}, \u0627\u0644\u064A\u0648\u0645 \u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0644\u0644\u0643\u064A\u0644\u0648 =  {{kiloPrice}} {{code}}, \u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0641\u064A {{updatedTime}}."
      }
    },
    deu: {
      translations: {
        header: "Goldpreis In {{countryName}}",
        update: "Aktualisiert {{updatedTime}}",
        purity: "Preistabelle basierend auf Reinheit, in",
        tableUnit: "Einheit",
        tablePrice: "Preis",
        weightTableHeader: "Preis pro Gewicht",
        weightTableWeight: "Gewicht",
        gram: "Gramm",
        ounce: "Unze",
        kilo: "Kilo",
        badgePriceTable: "Der Preis wird alle 12 Stunden aktualisiert",
        badgeGraph: "30 Tage Goldpreisverlauf",
        Welcome1: "Hey, schön dich zu sehen",
        Welcome2: "Im Laufe der Geschichte wurde Gold als besonderes und wertvolles Gut angesehen.",
        Welcome3: "Heute kann der Besitz von Gold sowohl als Absicherung gegen Inflation und Deflation als auch als guter Portfoliodiversifikator dienen.",
        Welcome4: "Als globaler Wertspeicher kann Gold auch bei geopolitischen und makroökonomischen Unsicherheiten finanzielle Deckung bieten.",
        Welcome5: "Wir sollten wissen, dass der Goldpreis wie folgt mit Öl und Dollar verbunden ist:",
        Welcome6: "Je höher der Ölpreis, desto höher der Goldpreis; Die Beziehung zwischen ihnen ist eine direkte Korrelation.",
        Welcome7: "Je höher der Preis des Dollars ist, desto niedriger ist der Goldpreis. Die Beziehung zwischen ihnen ist umgekehrt.",
        currencysPage: "Währungen Seite",
        language: "Sprache",
        metaTitle: "Goldpreis in {{countryName}} - Unze Gramm Kilo Gold Rate in {{code}}",
        metaDescription: "Goldpreis in {{countryName}}. Der aktuelle Preis für Unzen Gramm Kilo ist in {{countryCurrency}} in 24.000, 22.000, 21.000, 18.000 verfügbar",
        metaKeywords: "Unzen Goldraten in {{countryName}}, Gramm Goldraten in {{countryName}}, Kilogoldraten in {{countryName}},\n              Goldpreis in {{countryCurrency}}, Goldpreis pro Unze in, heute Unzen Goldpreis in {{countryName}},\n              22.000 21.000 24.000 20.000 18.000 14.000 Goldpreis in {{countryCurrency}} in {{countryName}},\n              Goldpreis heute in {{countryName}}, Goldaktienpreis, 24.000 Goldpreis pro Gramm, 18.000 Gold / Gramm Preis, 21.000 Goldpreis pro Gramm, 21.000 Gold / Gramm Preis 24.000 Gold / Gramm Preis",
        metaOGDescription: "Goldpreis in {{countryName}}. Der aktuelle Preis f\xFCr Unzen Gramm Kilo ist in {{countryCurrency}} in 24.000, 22.000, 23.000, 21.000, 20.000, 18.000 verf\xFCgbar.\n             Wir bieten die neuesten Kurse zum aktuellen Wechselkurs von {{countryCurrency}}.\n             Heute Goldpreis pro Unze = {{ouncePrice}} {{code}}, Heute Goldpreis pro Gramm = {{gramPrice}} {{code}}, Heute Goldpreis pro Kilo = {{kiloPrice}} {{code}} , aktualisiert um {{updatedTime}}."
      }
    },
    spa: {
      translations: {
        header: "Gold Price In {{countryName}}",
        update: "Updated {{updatedTime}}",
        purity: "Price table based on purity, in",
        tableUnit: "Unit",
        tablePrice: "Price",
        weightTableHeader: "Price Per Weight",
        weightTableWeight: "Weight",
        gram: "Gram",
        ounce: "Ounce",
        kilo: "Kilo",
        badgePriceTable: "Price get updated every 12 hours",
        badgeGraph: "30 Day Gold Price History",
        Welcome1: "Hey, nice to see you",
        Welcome2: "Throughout history, gold has been seen as a special and valuable commodity.",
        Welcome3: "Today, owning gold can act as a hedge against inflation and deflation alike, as well as a good portfolio diversifier.",
        Welcome4: "As a global store of value, gold can also provide financial cover during geopolitical and macroeconomic uncertainty.",
        Welcome5: "We should know that gold price is linked to oil and dollar as following:",
        Welcome6: "The higher the price of oil, so that the price of gold; The relationship between them is a direct correlation.",
        Welcome7: "The higher the price of the dollar, the lower the price of gold. The relationship between them is inverse.",
        currencysPage: "Currencys Page",
        language: "Language"
      }
    },
    fra: {
      translations: {
        header: "Prix de l'or en {{countryName}}",
        update: "Actualisé {{updatedTime}}",
        purity: "Tableau des prix basé sur la pureté, en",
        tableUnit: "Unité",
        tablePrice: "Prix",
        weightTableHeader: "Prix par poids",
        weightTableWeight: "Poids",
        gram: "Gramme",
        ounce: "Once",
        kilo: "Kilo",
        badgePriceTable: "Le prix est mis à jour toutes les 12 heures",
        badgeGraph: "Historique du prix de l'or sur 30 jours",
        Welcome1: "Hé, ravi de te voir",
        Welcome2: "Tout au long de l'histoire, l'or a été considéré comme une matière première spéciale et précieuse.",
        Welcome3: "Aujourd'hui, posséder de l'or peut servir de couverture contre l'inflation et la déflation, ainsi qu'un bon diversificateur de portefeuille.",
        Welcome4: "En tant que réserve de valeur mondiale, l'or peut également fournir une couverture financière en période d'incertitude géopolitique et macroéconomique.",
        Welcome5: "Il faut savoir que le prix de l'or est lié au pétrole et au dollar comme suit:",
        Welcome6: "Plus le prix du pétrole est élevé, de sorte que le prix de l'or; La relation entre eux est une corrélation directe.",
        Welcome7: "Plus le prix du dollar est élevé, plus le prix de l'or est bas. La relation entre eux est inverse.",
        currencysPage: "Page des devises",
        language: "Langue",
        metaTitle: "Taux de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 21k, 18k",
        metaDescription: "Taux de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 21k, 18k",
        metaKeywords: "taux de l'once d'or en {{countryName}}, taux du gramme d'or en {{countryName}}, taux du kilo d'or en {{countryName}},\n             prix de l'or en {{countryCurrency}}, prix de l'or par once en, taux de l'once d'or aujourd'hui en {{countryName}},\n             22k 21k 24k 20k 18k 14k prix de l'or en {{countryCurrency}} en {{countryName}},\n             prix de l'or aujourd'hui en {{countryName}}, cours de l'or, prix de l'or 24 carats par gramme, prix or 18 carats / gramme, prix de l'or 21 carats par gramme, prix or 21 carats / gramme prix or / gramme 24 carats",
        metaOGDescription: "Prix de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 23k, 21k, 20k, 18k.\n             Nous fournissons les derniers taux du taux de change actuel de {{countryCurrency}}.\n             Prix de l'or aujourd'hui par once = {{ouncePrice}} {{code}}, prix de l'or aujourd'hui par gramme = {{gramPrice}} {{code}}, prix de l'or aujourd'hui par kilo = {{kiloPrice}} {{code}} , mis \xE0 jour \xE0 {{updatedTime}}."
      }
    },
    zho: {
      translations: {
        header: "黄金价格 {{countryName}}",
        update: "更新 {{updatedTime}}",
        purity: "基于纯度的价格表，以",
        tableUnit: "单元",
        tablePrice: "价钱",
        weightTableHeader: "单价",
        weightTableWeight: "重量",
        gram: "公克",
        ounce: "盎司",
        kilo: "公斤",
        badgePriceTable: "价格每12小时更新一次",
        badgeGraph: "30天黄金价格历史记录",
        Welcome1: "嘿，很高兴见到你",
        Welcome2: "在整个历史中，黄金一直被视为一种特殊而有价值的商品。",
        Welcome3: "如今，拥有黄金既可以充当通货膨胀和通缩的避险工具，又可以作为良好的投资组合多元化产品。",
        Welcome4: "作为全球价值存储，黄金还可以在地缘政治和宏观经济不确定性期间提供财务保障。",
        Welcome5: "我们应该知道，黄金价格与石油和美元联系如下：",
        Welcome6: "石油的价格越高，黄金的价格就越高； 它们之间的关系是直接相关的。",
        Welcome7: "美元价格越高，黄金价格越低。 它们之间的关系是相反的。",
        currencysPage: "货币页面",
        language: "语言",
        metaTitle: "{{countryName}}中的黄金价格-{{code}}中的盎司克黄金汇率",
        metaDescription: "{{countryName}}中的黄金汇率。 盎司{克朗货币}}的当前价格为24k，22k，21k，18k",
        metaKeywords: "{{countryName}}\u4E2D\u7684\u76CE\u53F8\u91D1\u4EF7\uFF0C{{countryName}}\u4E2D\u7684\u514B\u91D1\u4EF7\uFF0C{{countryName}}\u4E2D\u7684\u5343\u91D1\u4EF7\uFF0C\n             {{countryCurrency}}\u4E2D\u7684\u9EC4\u91D1\u4EF7\u683C\uFF0C\u6BCF\u76CE\u53F8\u4E2D\u7684\u9EC4\u91D1\u4EF7\u683C\uFF0C{{countryName}}\u4E2D\u7684\u4ECA\u5929\u76CE\u53F8\u9EC4\u91D1\u4EF7\u683C\uFF0C\n             \u5728{{countryName}}\u4E2D{{countryCurrency}}\u4E2D\u768422k 21k 24k 20k 18k 14k\u9EC4\u91D1\u4EF7\u683C\uFF0C\n             {{countryName}}\u4E2D\u7684\u4ECA\u5929\u9EC4\u91D1\u4EF7\u683C\uFF0C\u9EC4\u91D1\u5E93\u5B58\u4EF7\u683C\uFF0C\u6BCF\u514B24k\u9EC4\u91D1\u4EF7\u683C\uFF0C18k\u9EC4\u91D1/\u514B\u4EF7\u683C\uFF0C21k\u9EC4\u91D1\u6BCF\u514B\u4EF7\u683C\uFF0C21k\u9EC4\u91D1/\u514B\u4EF7\u683C24k\u9EC4\u91D1/\u514B\u4EF7\u683C",
        metaOGDescription: "{{countryName}}\u4E2D\u7684\u9EC4\u91D1\u4EF7\u683C\u3002 \u76CE\u53F8\uFF08{{countryCurrency}}}\u7684\u5F53\u524D\u4EF7\u683C\u4E3A24k\uFF0C22k\uFF0C23k\uFF0C21k\uFF0C20k\uFF0C18k\u3002\n             \u6211\u4EEC\u6B63\u5728\u63D0\u4F9B{{countryCurrency}}\u5F53\u524D\u6C47\u7387\u4E2D\u7684\u6700\u65B0\u6C47\u7387\u3002\n             \u4ECA\u5929\u6BCF\u76CE\u53F8\u9EC4\u91D1\u4EF7\u683C= {{ouncePrice}} {{code}}\uFF0C\u4ECA\u5929\u6BCF\u514B\u9EC4\u91D1\u4EF7\u683C= {{gramPrice}} {{code}}\uFF0C\u4ECA\u5929\u6BCF\u516C\u65A4\u9EC4\u91D1\u4EF7\u683C= {{kiloPrice}} {{code}} \uFF0C\u4E8E{{updatedTime}}\u66F4\u65B0\u3002"
      }
    }
  },
  fallbackLng: "en",
  debug: false,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  // we use content as keys
  interpolation: {
    escapeValue: false
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// Module
exports.push([module.i, "body {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\n    'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});