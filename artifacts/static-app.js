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

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/constants/currency_codes.ts
/* harmony default export */ var currency_codes = (["ALL", "XCD", "EUR", "BBD", "BTN", "BND", "XAF", "CUP", "USD", "FKP", "GIP", "HUF", "IRR", "JMD", "AUD", "LAK", "LYD", "MKD", "XOF", "NZD", "OMR", "PGK", "RWF", "WST", "RSD", "SEK", "TZS", "AMD", "BSD", "BAM", "CVE", "CNY", "CRC", "CZK", "ERN", "GEL", "HTG", "INR", "JOD", "KRW", "LBP", "MWK", "MRO", "MZN", "ANG", "PEN", "QAR", "STD", "SLL", "SOS", "SDG", "SYP", "AOA", "AWG", "BHD", "BZD", "BWP", "BIF", "KYD", "COP", "DKK", "GTQ", "HNL", "IDR", "ILS", "KZT", "KWD", "LSL", "MYR", "MUR", "MNT", "MMK", "NGN", "PAB", "PHP", "RON", "SAR", "SGD", "ZAR", "SRD", "TWD", "TOP", "VEF", "DZD", "ARS", "AZN", "BYR", "BOB", "BGN", "CAD", "CLP", "CDF", "DOP", "FJD", "GMD", "GYD", "ISK", "IQD", "JPY", "KPW", "CHF", "MGA", "MDL", "MAD", "NPR", "NIO", "PKR", "PYG", "SHP", "SCR", "SBD", "LKR", "THB", "TRY", "AED", "VUV", "YER", "AFN", "BDT", "BRL", "KHR", "KMF", "HRK", "DJF", "EGP", "ETB", "XPF", "GHS", "GNF", "HKD", "KES", "KGS", "LRD", "MOP", "MVR", "MXN", "NAD", "NOK", "PLN", "RUB", "SZL", "TJS", "TTD", "UGX", "UYU", "VND", "TND", "UAH", "UZS", "TMT", "GBP", "BMD"]);
// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/country_currency_data.json
var country_currency_data = __webpack_require__(31);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/Store.json
var Store = __webpack_require__(32);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/History.json
var History = __webpack_require__(33);

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/constants/index.ts




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

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/index.ts + 1 modules
var constants = __webpack_require__(2);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(3);

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/price/PriceTable.tsx





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
// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/price/PriceWeight.tsx





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
// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/price/Welcome.tsx





var Welcome_Welcome = function Welcome() {
  var _useTranslation = Object(external_react_i18next_["useTranslation"])('translations'),
      _useTranslation2 = slicedToArray_default()(_useTranslation, 1),
      t = _useTranslation2[0];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Alert"], {
    variant: "dark"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Alert"].Heading, null, t("Welcome1")), /*#__PURE__*/external_react_default.a.createElement("p", null, t("Welcome2"), /*#__PURE__*/external_react_default.a.createElement("br", null), t("Welcome3"), /*#__PURE__*/external_react_default.a.createElement("br", null), t("Welcome4")), /*#__PURE__*/external_react_default.a.createElement("hr", null), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("strong", null, t("Welcome5")), /*#__PURE__*/external_react_default.a.createElement("br", null), t("Welcome6"), /*#__PURE__*/external_react_default.a.createElement("br", null), t("Welcome7")));
};

/* harmony default export */ var price_Welcome = (Welcome_Welcome);
// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/price/PriceTag.tsx


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

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/graph/Chart.tsx







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

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/country/ar.json
var ar = __webpack_require__(36);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/country/de.json
var de = __webpack_require__(37);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/country/es.json
var es = __webpack_require__(38);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/country/fr.json
var fr = __webpack_require__(39);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/country/zh.json
var zh = __webpack_require__(40);

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/constants/languages/country/index.tsx





var CountryDictionary = {
  "ara": ar,
  "deu": de,
  "spa": es,
  "fra": fr,
  "zho": zh
};
/* harmony default export */ var country = (CountryDictionary);
// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/currency/ar.json
var currency_ar = __webpack_require__(41);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/currency/de.json
var currency_de = __webpack_require__(42);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/currency/es.json
var currency_es = __webpack_require__(43);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/currency/fr.json
var currency_fr = __webpack_require__(44);

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/languages/currency/zh.json
var currency_zh = __webpack_require__(45);

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/constants/languages/currency/index.tsx





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

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/price/index.tsx



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
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_default.a, null, /*#__PURE__*/external_react_default.a.createElement("title", null, t("metaTitle", {
    countryName: countryName
  })), /*#__PURE__*/external_react_default.a.createElement("meta", {
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

// EXTERNAL MODULE: /home/asouqi/side/gold_price/src/constants/index.ts + 1 modules
var constants = __webpack_require__(2);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(46);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(47);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/header/CountrySelect.tsx


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

// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/header/LanguagesSelect.tsx





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
// CONCATENATED MODULE: /home/asouqi/side/gold_price/src/components/header/index.tsx


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

module.exports = require("/home/asouqi/side/gold_price/node_modules/react-static/lib/browser");

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
    languageParam: language
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

module.exports = JSON.parse("{\"timestamp\":1599307213,\"prices\":{\"AED\":228.32958925987847,\"AFN\":4777.4783190688995,\"ALL\":6530.558080418288,\"AMD\":30337.006209047355,\"ANG\":111.53848263029289,\"AOA\":38663.990525769215,\"ARS\":4627.538165932547,\"AUD\":85.38106730058195,\"AWG\":111.8987081712375,\"AZN\":105.92888877278719,\"BAM\":102.58173185866315,\"BBD\":125.46482304761598,\"BDT\":5272.490647919814,\"BGN\":103.05191545831592,\"BHD\":23.435296989036427,\"BIF\":120353.27817826254,\"BMD\":62.16594898402083,\"BND\":84.74290097418256,\"BOB\":429.6849018904929,\"BRL\":329.63519850979003,\"BSD\":62.13712043854291,\"BTC\":0.006091277368742565,\"BTN\":4542.223735105938,\"BWP\":710.9707438189242,\"BYN\":163.68349267755522,\"BYR\":1218452.6094337683,\"BZD\":125.25498904446516,\"CAD\":81.21673402083401,\"CDF\":121845.2834285921,\"CHF\":56.74786278654791,\"CLF\":1.7381670015754107,\"CLP\":47961.27321350031,\"CNY\":425.3707546940809,\"COP\":230947.1238863695,\"CRC\":37056.72775290969,\"CUC\":62.16594898402083,\"CUP\":1647.3976743320582,\"CVE\":5803.215873428608,\"CZK\":1390.5158000273284,\"DJF\":11048.156986584894,\"DKK\":390.7074481400508,\"DOP\":3633.624175119763,\"DZD\":7977.945301642929,\"EGP\":982.9536298749317,\"ERN\":932.5114994293156,\"ETB\":2219.5653780181974,\"EUR\":52.51101179950487,\"FJD\":131.636652308459,\"FKP\":46.815614948718775,\"GBP\":46.77822710831753,\"GEL\":191.16276770729513,\"GGP\":46.815614948718775,\"GHS\":360.2541594460342,\"GIP\":46.815614948718775,\"GMD\":3221.4637206861075,\"GNF\":598658.1153917146,\"GTQ\":480.33392572259913,\"GYD\":12994.92576790824,\"HKD\":481.81746682795875,\"HNL\":1541.954302374369,\"HRK\":395.9849098479246,\"HTG\":7032.390014371605,\"HUF\":18913.24661937755,\"IDR\":917194.118206869,\"ILS\":209.66733319936984,\"IMP\":46.815614948718775,\"INR\":4553.419817975758,\"IQD\":73915.3139196219,\"IRR\":2617497.3239810066,\"ISK\":8649.172561071278,\"JEP\":46.815614948718775,\"JMD\":9180.855167347201,\"JOD\":44.07811088158699,\"JPY\":6604.479617102852,\"KES\":6739.788574510498,\"KGS\":4894.349084903386,\"KHR\":255191.24431438284,\"KMF\":25920.116492058645,\"KPW\":55949.35450570684,\"KRW\":73817.7372223419,\"KWD\":19.025894817220202,\"KYD\":51.78352424203453,\"KZT\":26156.42024603736,\"LAK\":567264.3105246519,\"LBP\":94300.55473541941,\"LKR\":11503.47267086776,\"LRD\":12388.122010883195,\"LSL\":1032.6001659807735,\"LTL\":183.559908352892,\"LVL\":37.60360814873163,\"LYD\":84.85895031025946,\"MAD\":571.3287352506189,\"MDL\":1031.4975922660194,\"MGA\":237163.11874143974,\"MKD\":3234.8322366250845,\"MMK\":82737.99893204836,\"MNT\":177605.15373359484,\"MOP\":496.0635993071408,\"MRO\":22193.253239277565,\"MUR\":2474.3188759926693,\"MVR\":958.0008171559015,\"MWK\":46313.653785165414,\"MXN\":1340.5869647220525,\"MYR\":257.9578774475131,\"MZN\":4458.565344058451,\"NAD\":1033.2215287833972,\"NGN\":23716.54139977655,\"NIO\":2151.1734084091568,\"NOK\":554.0045122817735,\"NPR\":7267.580587411181,\"NZD\":92.68939238980163,\"OMR\":23.932681292801337,\"PAB\":62.13712043854291,\"PEN\":220.47178894318876,\"PGK\":213.50919635565702,\"PHP\":3019.7508080651387,\"PKR\":10316.46261442626,\"PLN\":234.02215051602738,\"PYG\":434410.5596125455,\"QAR\":226.34861133974215,\"RON\":254.9055173536315,\"RSD\":6171.858667009613,\"RUB\":4684.496702898434,\"RWF\":59119.81795640292,\"SAR\":233.14563670707005,\"SBD\":512.970674798251,\"SCR\":1116.016533774877,\"SDG\":3439.333536483619,\"SEK\":543.5573414622384,\"SGD\":84.8341651126901,\"SHP\":46.815614948718775,\"SLL\":607050.5175593592,\"SOS\":36367.101475122974,\"SRD\":463.6360015914863,\"STD\":1323685.081782344,\"SVC\":543.6930824277401,\"SYP\":31784.779228675692,\"SZL\":1030.1127718628427,\"THB\":1951.4121200527281,\"TJS\":640.955553813137,\"TMT\":218.20247305726136,\"TND\":170.31920421663503,\"TOP\":141.2752585683053,\"TRY\":462.3346211860592,\"TTD\":420.7878036282674,\"TWD\":1823.7937679002027,\"TZS\":144162.5904675192,\"UAH\":1722.3218562759218,\"UGX\":229168.2579100328,\"USD\":62.16594898402083,\"UYU\":2652.3564637896666,\"UZS\":638755.1514886988,\"VEF\":620.8826419316464,\"VND\":1441006.7085294265,\"VUV\":6948.26658580362,\"WST\":163.98217531267082,\"XAF\":34404.71591889046,\"XAG\":2.3138977349451824,\"XAU\":0.032136739221296985,\"XCD\":168.00661925698486,\"XDR\":43.95281960743337,\"XOF\":34502.12263802527,\"XPF\":6303.851028912002,\"YER\":15566.577375020093,\"ZAR\":1030.8985991544223,\"ZMK\":559568.3676302045,\"ZMW\":1219.4753570636271,\"ZWL\":20017.442504308267}}");

/***/ }),
/* 33 */
/***/ (function(module) {

module.exports = JSON.parse("{\"date\":[1596758377,1596797236,1596888036,1596974430,1597060903,1597147304,1597233692,1597320103,1597406494,1597492827,1597579223,1597665694,1597752090,1597838508,1597924882,1598011295,1598097653,1598184019,1598270483,1598356883,1598443277,1598529681,1598616083,1598702417,1598788835,1598875291,1598961682,1599048078,1599134504,1599220896,1599307213],\"data\":{\"AED\":[244.42710094524642,242.8201645114619,240.36204315210747,240.3786964652927,239.8346361688583,234.0943838366074,227.82808783911517,228.0925059743433,230.26944965887535,229.705289339292,229.705289339292,230.6849645580812,236.9648093753014,234.49318913448863,228.96991118670223,226.50087037263287,229.11959210847826,229.11959210847826,230.52457125807797,227.6047542835096,226.81298694531074,229.14877138796896,231.47045392148667,231.85896967848763,231.85896967848763,232.01865090923704,234.90726817220198,231.57551680545282,228.29217367199305,229.22331371443272,228.32958925987847],\"AFN\":[5113.845616532167,5052.37756450889,5026.140893315757,5038.185346565925,5082.672564669003,4907.83535310163,4774.611790911809,4781.181291606597,4831.309156770087,4819.261425488216,4819.261425488216,4843.778825276982,4979.604502511012,4974.579310399961,4850.153951071922,4812.447864336237,4868.43443638395,4868.43443638395,4842.171140008359,4770.503704691509,4756.076028221071,4795.7000924541035,4852.5822899553095,4860.390213858149,4860.390213858149,4860.4596042999065,4911.4270714889235,4843.39633883291,4778.297772151239,4791.541098445809,4777.4783190688995],\"ALL\":[6923.8255715853775,6881.811495757965,6908.951270408641,6863.940751042664,6884.731388146481,6700.755663177185,6530.906705821946,6501.064272645082,6574.784184326913,6558.388775005626,6558.388775005626,6565.599612508117,6714.822674050734,6617.787023816031,6526.001628767964,6465.785337702151,6541.006353433752,6541.006353433752,6570.53585497476,6512.2032108221065,6498.221794826222,6552.276837848439,6567.28990177925,6577.8571871514005,6577.8571871514005,6576.666109901616,6625.234149415811,6597.762933854612,6539.028184473845,6537.502744832332,6530.558080418288],\"AMD\":[32285.527403370732,32074.926508428125,31738.977780453326,31738.977780453326,31668.9826436273,30925.895947773202,30101.677956115163,30116.7313751741,30416.622794097675,30319.505107448153,30319.505107448153,30448.373598467027,31265.62897832042,30911.47743030994,30188.360963518306,29889.33221326721,30257.64831163553,30257.64831163553,30441.039681306625,30069.909134714977,29991.63470648619,30391.54144637398,30692.7851345838,30755.448909417424,30755.448909417424,30778.721207700215,31159.137412849563,30696.020637494777,30287.489142901006,30455.35064988908,30337.006209047355],\"ANG\":[119.52148949233191,118.34989411053596,117.49012372054142,117.80553747226953,117.19495794424975,114.4756838549336,111.3689656914124,111.43336579108124,112.50681448895605,112.22628232196251,112.22628232196251,112.73179555702022,115.80045612641868,114.55605482557952,111.96552248078962,110.73900661350996,112.0273198212391,112.0273198212391,112.67983990226023,111.21046099861749,110.80221941291836,111.72488328071248,113.12988184033695,113.31192039867538,113.31192039867538,113.29505338745456,114.75017237243993,113.15787687104138,111.62872433270103,111.97369506799987,111.53848263029289],\"AOA\":[38903.57107906504,38649.82350437707,38119.725536001024,38119.725536001024,38035.352079125485,37220.965035847345,36922.868955800084,36576.03971110568,36927.218872791695,36833.910405821945,36833.910405821945,36990.513974782494,37186.66116946276,36844.87274781758,35976.76469485227,35553.679500643026,36740.94766338777,36740.94766338777,36963.667682268584,36497.79722422338,36545.5760514677,37053.84774209819,37392.281992029064,37664.97742732727,37664.97742732727,37693.00138941742,38419.00445232743,38160.367271411764,37886.82312835096,38041.35302247179,38663.990525769215],\"ARS\":[4836.962548534867,4806.246480388387,4761.809625474069,4770.92492746809,4747.3215670719865,4646.221112020384,4524.114392800051,4532.763082858888,4579.31540420506,4574.88203952609,4574.88203952609,4590.339244992444,4714.846111490852,4681.97338376909,4576.958177227599,4530.664333372986,4590.416149752436,4590.416149752436,4615.7940520001275,4565.857420742051,4554.421248306594,4611.392520125069,4656.041459933768,4665.906784913996,4665.906784913996,4671.863061832299,4740.447039722213,4681.246513949137,4618.461887514066,4637.420075593351,4627.538165932547],\"AUD\":[91.98882223965533,91.730010946854,91.53443632318425,91.42380281259042,91.41297553933703,88.75373930874835,86.89325508278944,86.7140904825901,87.65320545831592,87.19507152171816,87.19507152171816,87.42629885798797,89.22607998263832,87.83875204803395,86.9692633048259,85.90586110021542,87.09915846381378,87.09915846381378,87.18888351091533,86.3713433128637,85.66607474777352,86.14477141047487,85.92312145838022,85.68171715075717,85.68171715075717,85.80490885477285,86.6148936372697,85.91033207086133,85.20684081953509,85.81909459730574,85.38106730058195],\"AWG\":[119.77801233450147,118.99674995981094,117.80714729254412,117.80714729254412,117.54734381635213,114.7221361457094,111.64391567694435,111.77347577275502,112.84679150114137,112.56535686975533,112.56535686975533,113.04395239558885,116.12123406423818,114.91020343503843,112.20341925537728,110.99351854965761,112.28477461981159,112.28477461981159,112.96543281869916,111.54209617078737,111.14638186155676,112.29101133749155,113.43657359354404,113.61908641288622,113.61908641288622,113.70524110214448,115.12082890010609,113.4880547291258,111.87897612770472,112.33532456483299,111.8987081712375],\"AZN\":[113.15307739510658,112.48645883162395,111.50975242259588,111.50975242259588,110.82449512908721,107.8312003838858,105.67228642221006,105.61986162492363,106.69679997074239,106.56002503295501,106.56002503295501,106.75313015303989,109.65006223515417,108.43645244895993,106.13657802462784,104.4725722357972,106.29434936822814,106.29434936822814,106.43479353631483,105.35926669710317,104.72414222679484,103.26688256084621,106.92560558145516,107.55751448799151,107.55751448799151,107.75458214480916,108.45119832363436,107.33439681059704,105.764020350127,105.81998753753658,105.92888877278719],\"BAM\":[109.96223133845609,108.88805394977976,108.27945375301417,108.57016509018422,108.71345971449698,105.78726776709641,103.02570845802654,102.5227255956017,103.8033605263158,103.5445269832492,103.5445269832492,103.64996761662862,106.0228540494486,104.55825769154102,103.04144734366459,102.2310361765746,103.42035416197794,103.42035416197794,103.76143397614376,102.46315055975307,102.19857644085779,103.04962464488956,103.54294637559077,103.7095630193229,103.7095630193229,103.56718527826897,104.30575523582934,103.94799951644535,102.97371809986174,102.9820073356268,102.58173185866315],\"BBD\":[134.44452932900361,133.12665950937208,132.15952770600904,132.51041301482172,131.82933919686204,127.72054880815354,125.27032108060314,125.34545363469759,126.54918637012507,126.23363618814905,126.23363618814905,125.77395757354596,130.25790369096228,128.8568110613124,125.94698212358936,124.56436702247373,126.01354646497123,126.01354646497123,126.74957042600391,125.09344790470372,124.63354516284602,125.67350720734333,126.22220613574254,126.42532209786837,126.42532209786837,127.44105226023211,129.0799489547632,127.28462800887374,125.56454878661224,125.95433145612964,125.46482304761598],\"BDT\":[5646.096501503392,5590.752952302993,5549.9749118631635,5564.710318479889,5541.525165549304,5410.65547777224,5261.29665185384,5273.331819303604,5316.865630932064,5303.607053192939,5303.607053192939,5322.528756045718,5470.392796038967,5411.571999584606,5288.66483540398,5229.769804322735,5290.611385400122,5290.611385400122,5322.919357335305,5253.427096952705,5234.16984530624,5277.799634769636,5346.438414527215,5355.041000782561,5355.041000782561,5351.928308764427,5421.758382775294,5346.481395122014,5278.15504504903,5293.062730258817,5272.490647919814],\"BGN\":[109.67679504356492,109.19265743497411,108.59570017040156,108.51054622898111,108.73880881651286,105.54757129569495,103.17024155386939,102.54318570555894,103.86427727518246,103.31064422788798,103.31064422788798,103.37441030543677,105.96772881072565,104.65251899816738,102.98583989325789,102.04625998778253,103.39808865865028,103.39808865865028,103.7016550172009,102.6034738886924,102.22978789184323,103.1792291360962,103.5173313956853,103.74243200945247,103.74243200945247,103.66228362987492,104.29860773623122,103.95384996174002,102.95908410764234,103.03384932643154,103.05191545831592],\"BHD\":[25.08555813008391,24.925180136964276,24.669107931710766,24.74127228884673,24.61053146899013,24.02947667652638,23.381757304118572,23.409356114844226,23.63007384303765,23.578381185094685,23.578381185094685,23.65602495579204,24.324431665755714,24.069694192843134,23.503959329003635,23.23058351123686,23.51771311931325,23.51771311931325,23.655880140179402,23.363021179950486,23.27637088640967,23.512410376812525,23.759375720670032,23.792907693791594,23.792907693791594,23.79882554480275,24.11176985692698,23.76658303572003,23.430179628974695,23.50633877375173,23.435296989036427],\"BIF\":[128362.11548988134,127114.48190126097,126105.08002852972,126547.97911153008,125893.46472206796,122986.86685851299,119660.2798159798,119722.45748698838,120889.41043697232,120587.95007299552,120587.95007299552,121087.59373985883,124448.91563436967,123114.9361554908,120327.69353808636,119009.65280495292,120394.17487437386,120394.17487437386,121091.50128927498,119553.35524952125,119122.95614695431,120115.90500184323,121626.95743796289,121822.65896097869,121822.65896097869,121828.55065778283,123393.36717755007,121687.11719625245,120045.3564134733,120415.64258519179,120353.27817826254],\"BMD\":[66.5433588637752,66.10930553322831,65.44113704787318,65.44113704787318,65.29684082692987,63.734508070604114,62.024397598302414,62.096381258399504,62.69267373693856,62.536309372086286,62.536309372086286,62.80218988168343,64.51181477027939,63.83903162878179,62.33521538340352,61.66303679709353,62.38043034433977,62.38043034433977,62.75857967655852,61.96783120599299,61.748013158859266,62.38387757579655,63.02031278268977,63.12171467382568,63.12171467382568,63.16954310966786,63.95603976208082,63.04891929395878,62.15498673761373,62.40848437771277,62.16594898402083],\"BND\":[91.28565379352473,90.39160169372728,89.73404663472976,89.97230003536636,89.72303540494485,87.45981073562035,85.19778284442015,85.09779425778864,86.02278034884094,85.80825081246182,85.80825081246182,86.03556986046361,88.048123553998,87.03046936822814,85.41172860592225,84.44198586953027,85.4243800935601,85.4243800935601,85.88794921647428,84.81189212680448,84.42948437899881,85.13398318329422,85.73286143201621,85.8707668585024,85.8707668585024,85.8510027135646,86.79032741471883,85.79715254734269,84.88373490499309,85.07354986978748,84.74290097418256],\"BOB\":[459.7679968922612,455.26131998328134,451.9699761592129,453.1699583962962,450.83150015689796,440.3675468379256,428.40857943960384,428.6603407941356,432.7887731672186,431.70954526701604,431.70954526701604,433.6507201080281,445.4648317654246,440.0313591492782,430.70963777963544,425.99799816255666,430.9538940761341,430.9538940761341,433.4558004153939,427.1764745426486,426.2266069253769,429.77948254123396,434.87419331125614,435.5739195730315,435.5739195730315,435.18201700864864,441.42317443333434,435.29445745555086,429.40444408995916,431.3614000012861,429.6849018904929],\"BRL\":[354.9218777384818,352.57408673375556,355.82473701443587,355.7887658579558,355.09066575957297,349.3945478879851,333.8078757968684,337.53756877214414,336.55914745426486,339.0892809806128,339.0892809806128,340.5196688306594,355.4276465003376,349.0650790036331,346.47166302993276,342.6801546329936,350.582672607144,350.582672607144,352.6783162421631,347.7077275806192,340.15760646111306,349.836494733627,351.03562315146445,340.3175716265312,340.3175716265312,340.401877082275,351.31672724238814,340.38209839565314,331.91394601003117,330.19707612577565,329.63519850979003],\"BSD\":[66.58919453107417,65.93420747837828,65.4569021843552,65.63070726296498,65.28933615856991,63.773745869530266,62.042569580104804,62.080380403176534,62.67537507828826,62.51909424942931,62.51909424942931,62.80484202134841,64.51371190238883,63.821645178921656,62.37814412468251,61.694164156190716,62.41189821721377,62.41189821721377,62.77262349226761,61.95471687618557,61.72631675658297,62.24032461916856,63.02639898659293,63.12781134134971,63.12781134134971,63.12006233128636,63.926703009999024,63.039079908690475,62.18736049737967,62.37956034016011,62.13712043854291],\"BTC\":[0.005659416133491945,0.005584370432407163,0.00555110439507443,0.0056066154390251735,0.005555484404600199,0.005404655499469504,0.005372585924187377,0.005351105681124007,0.005306337009291708,0.005260631294922033,0.005280712471465775,0.005278010682228402,0.005252353884995016,0.005403173648844163,0.005313483908304665,0.0052314889238980165,0.005394492492685593,0.005394492492685593,0.005299553097771918,0.005298189242195286,0.005384890203517345,0.005494850014468057,0.005504045268945117,0.005513508021734238,0.005460493521525255,0.005397903096164357,0.005387294473201941,0.005584515963090377,0.0055272272771115325,0.0060060843005497865,0.006091277368742565],\"BTN\":[4979.7041181185095,4930.850787511173,4902.082758386007,4915.09832183905,4885.536767551683,4761.906195636434,4639.983531271903,4645.802514819792,4688.079022440922,4676.388475530977,4676.388475530977,4699.996786335401,4815.948455293702,4767.117182592033,4670.915197959361,4611.597088787255,4665.247068769893,4665.247068769893,4652.951762554094,4598.281447129859,4582.313463426679,4620.489984015368,4619.837543707038,4627.271036495194,4627.271036495194,4629.912199508086,4645.8707916445355,4613.0464371308235,4552.113367121178,4559.94617170691,4542.223735105938],\"BWP\":[782.4388793036042,774.7758310658136,768.2365440555573,770.2990568935471,771.760359640549,749.4221244037552,726.5058247017971,726.9272466707391,734.7865802858246,732.954283478121,732.954283478121,734.971976861396,753.6571409671093,741.2194514181912,726.1629644108285,719.0507317316658,727.4159505401408,727.4159505401408,725.6980131305661,713.768172866926,710.3254674288653,716.2403849416455,722.7679912960165,723.9309722692345,723.9309722692345,723.8199085409767,730.6104747773526,725.0266448278302,716.4445689656945,713.744829284635,710.9707438189242],\"BYN\":[162.82123405909397,161.23068049898723,160.42153244638777,160.84880095167668,160.84566689451177,156.63940112883,152.53356102530302,152.8499794502138,154.33332614088675,153.9485050663923,153.9485050663923,155.0433422158634,158.61986611580878,157.61014736263385,155.42908432819985,156.60582417933963,158.42772967398645,158.42772967398645,159.8468163919879,161.7707137356525,164.40979471819438,165.7788324100569,168.28253237565508,168.55329468893675,168.55329468893675,167.85562902678197,168.86517197890876,167.27726151175128,164.71963737870945,164.32214629714176,163.68349267755522],\"BYR\":[1304249.5921681824,1295742.6419238902,1282646.3770654043,1282646.3770654043,1279818.012221089,1249196.608365344,1215677.9636963943,1217089.1464259499,1228775.8860189195,1225711.703879113,1225711.703879113,1230923.0260161697,1264431.105458962,1251244.5402185973,1221770.4889776022,1208595.8133493746,1222656.2495381506,1222656.2495381506,1230067.9237106128,1214569.5128826767,1210260.788721412,1222724.1610514699,1235198.1032851108,1237185.5750560802,1237185.5750560802,1238123.4661446938,1253537.9827572354,1235758.927618105,1218237.7845382486,1223206.7473679048,1218452.6094337683],\"BZD\":[134.2162475336784,132.89841667749093,131.93415286756903,132.28836883901874,131.60697865286306,127.86766353084911,125.05963143651736,125.1358162003665,126.33528792528051,126.02024259717712,126.02024259717712,125.91706702986848,130.04108859274027,128.637634799537,125.73097058965372,124.35531672507474,125.80199773976787,125.80199773976787,126.53525649873002,124.88388091438122,124.42452777416968,125.46274800823072,126.3651525421985,126.56846124843263,126.56846124843263,127.22503029514836,128.86936441436515,127.07204410121209,125.34872372150596,125.74374971096036,125.25498904446516],\"CAD\":[88.56818147445583,88.32566841397936,87.57694297784779,87.58349328103397,87.41320966401955,84.66398244574478,82.41494135292415,82.08207897373242,82.97466118059351,82.91346984985371,82.91346984985371,83.12909000160755,84.90815309777192,83.97066817991833,82.30428747709223,81.45103902195929,82.20244012153168,82.20244012153168,82.4745070661994,81.8118055827412,81.33291110953927,82.06632465742854,82.31871273639199,82.67902887342058,82.67902887342058,82.556905888821,83.17833315885926,82.42415809150243,81.45101092434814,81.74080530238241,81.21673402083401],\"CDF\":[131423.10237701508,130565.8924695354,130162.45450626884,130162.45450626884,129875.42446533324,125493.26363187055,121381.7058581558,121584.6966669273,122313.34867475709,122008.36619973122,122008.36619973122,122527.07595998874,126443.08323261421,124486.06802276116,121553.71639855576,120242.94147704564,121641.8432966627,121641.8432966627,122379.21977018293,120837.26387486285,120408.60866861716,121648.57860271484,122889.5953722792,123087.36322932516,123087.36322932516,123180.66976380188,124714.25534680512,122945.3997501257,121202.23561392342,122383.07811599653,121845.2834285921],\"CHF\":[60.56976108413979,60.415653831463196,59.73143760023148,59.73765483715397,59.9542396264026,58.11307183905089,56.64132986432176,56.56931863164325,57.060952142237085,56.8408497431116,56.8408497431116,57.05388932900363,58.423809423528276,57.81866575828699,56.74937596823457,56.240389267916285,56.8426135903289,56.80696763013214,57.01243323923736,56.382647970292254,56.14281298138443,56.82985225348036,56.91362748030736,57.07313130148217,57.07313130148217,57.010429835707164,57.90386780760698,57.45488306079799,56.687821996913485,56.867292076005526,56.74786278654791],\"CLF\":[1.865365971128187,1.8531863460116385,1.8707776921840336,1.8707776921840336,1.8623807362633826,1.8628766575571487,1.7863321473812814,1.7825477336591324,1.8024034919461145,1.8076406861074492,1.8076406861074492,1.8153365578883063,1.888622116837604,1.8261122030029258,1.770442316496801,1.7596112995530977,1.792981220461049,1.792981220461049,1.8040738655435167,1.7658707372279199,1.7598134868019164,1.7738855229399093,1.7915138115294342,1.783195729029354,1.783195729029354,1.7817843073015462,1.7995697122464067,1.7623668662186927,1.7367074507282256,1.753987355560557,1.7381670015754107],\"CLP\":[51471.253984548755,51135.62223263994,51620.22858402597,51620.22858402597,51388.57859782786,51401.95485676912,49160.675959510656,49186.89950101404,49732.29554466932,49879.20664760569,49879.20664760569,50091.17428894158,52112.51466290711,50362.749832874,48852.60928385365,48553.256079275314,49474.15587045783,49474.15587045783,49779.53528412306,48722.07818824936,48562.4285421985,48946.290128359324,49434.184016060186,49203.622257441086,49203.622257441086,49165.31375831623,49655.515868709765,48629.60259809793,47909.07077850722,48397.62658513649,47961.27321350031],\"CNY\":[462.70898813169146,459.96871650708937,455.9810376619618,455.9810376619618,455.2463575777256,442.6937105648973,430.81502388194065,431.2717852901649,435.74509270520525,434.64636070089705,434.64636070089705,435.8913537825932,446.608748223644,441.20395482461504,431.22278354242354,426.6407388917468,431.64158609458894,431.64158609458894,433.86254111564796,428.3898123364305,425.49300712600063,429.5751692238691,432.56508755039704,433.3560579567888,433.3560579567888,432.3513460408964,436.11434243706384,430.25206502781083,425.1896964099926,426.9115237539787,425.3707546940809],\"COP\":[249038.47440382536,247447.17900059157,244848.03161181876,245653.0361733903,244384.06374494804,240550.65261198115,232019.57611433204,233265.07033563836,236417.3080417966,236989.4818378253,236989.4818378253,237997.02648950648,244693.22360801528,241614.6823140025,234365.94327665627,234681.3550959956,239291.29457316818,239291.29457316818,240741.86505620676,238978.94524249752,238811.0052336096,239497.97584868985,240311.5721998264,236422.37610811758,236422.37610811758,236601.6042095219,239121.1129911796,231956.99461221875,227425.1047900897,230319.2211041707,230947.1238863695],\"CRC\":[39262.0449968839,38876.86325038999,38595.94268064688,38698.41695595665,38498.25069687425,37914.079513581644,36931.5999873234,36953.1159702138,37308.29468557149,37215.25953888371,37215.25953888371,37360.164904821715,38401.920906771054,37979.48197253224,37120.80465470791,36714.3709055686,37141.49476010835,37141.49476010835,37291.142065915185,36804.54905718741,36716.00076854323,37022.048252538014,37522.54612556216,37582.92105375881,37582.92105375881,37564.90406856605,38039.70825117319,37591.729198870846,37076.559193022535,37201.315044817544,37056.72775290969],\"CUC\":[66.5433588637752,66.10930553322831,65.44113704787318,65.44113704787318,65.29684082692987,63.734508070604114,62.024397598302414,62.096381258399504,62.69267373693856,62.536309372086286,62.536309372086286,62.80218988168343,64.51181477027939,63.83903162878179,62.33521538340352,61.66303679709353,62.38043034433977,62.38043034433977,62.75857967655852,61.96783120599299,61.748013158859266,62.38387757579655,63.02031278268977,63.12171467382568,63.12171467382568,63.16954310966786,63.95603976208082,63.04891929395878,62.15498673761373,62.40848437771277,62.16594898402083],\"CUP\":[1763.3987017040156,1751.8969322817734,1734.1902705462494,1734.1902705462494,1730.3661707333697,1688.9647881503392,1643.6462203205479,1645.5541820403175,1661.3551642050606,1657.2122511674113,1657.2122511674113,1664.2581644715942,1709.5624409671093,1691.7336694531075,1651.8835496170786,1634.0708936420924,1653.0811396890974,1653.0811396890974,1663.102043455615,1642.1475794161333,1636.3220088866026,1653.1729670989937,1670.0382622795228,1672.7253858418803,1672.7253858418803,1673.993474533003,1694.8345202996493,1670.7964942545734,1647.1072011870237,1653.8254682287882,1647.3976743320582],\"CVE\":[6228.6148248766995,6138.305100485483,6175.706334951612,6120.926204916567,6129.004057580297,5963.981351433623,5808.390816255023,5780.083678240684,5852.1842968067385,5837.590850058194,5837.590850058194,5843.537668065138,5977.314030006752,5894.74390204932,5809.230063034434,5763.539403951388,5830.590669999678,5830.590669999678,5849.819580742693,5776.627114003793,5761.711383874224,5809.738312077935,5837.503405989133,5846.896121052953,5846.896121052953,5838.3067376886465,5880.752831537793,5860.338291287657,5805.410836199723,5805.852829918657,5803.215873428608],\"CZK\":[1474.9977693000674,1471.0630360042437,1460.8655474520142,1460.963690977719,1457.9997978465099,1415.043335798476,1376.1965754284151,1369.2067165791082,1385.633064435585,1377.3312689451177,1377.3312689451177,1386.795874401183,1416.4980800212197,1397.5922785641255,1370.0907166353727,1364.5537393884836,1379.4060541603703,1379.4060541603703,1382.9790077510206,1369.7803651461275,1372.9059365694627,1388.7903720567147,1386.7050421116933,1384.4510887805036,1384.4510887805036,1389.7748250972575,1398.0919395035849,1400.4616178143585,1387.7277956981643,1391.9624581776677,1390.5158000273284],\"DJF\":[11826.089489294922,11737.661912480467,11630.225454835867,11683.410141956723,11623.23563697714,11353.261524798572,11045.239989912548,11050.24732821014,11158.096905264443,11113.977889938591,11113.977889938591,11169.309513535993,11485.18190647526,11361.987956047327,11104.788538808796,10982.949186128348,11086.272980945567,11086.272980945567,11174.951183523131,11029.367544647783,10989.057423121885,11080.469192149632,11220.245868028163,11218.015677545896,11218.015677545896,11236.405058014981,11381.241669139954,11222.68157325017,11071.162888519435,11105.318046041863,11048.156986584894],\"DKK\":[417.4104610609908,416.7941234144616,413.5948028987557,413.61373216474294,414.02310309616433,402.49004565443846,392.29805996045394,390.6850127061698,395.1598924698582,393.2598328482783,393.2598328482783,394.98501680384527,403.6371882390766,398.29157522811306,391.6740493341478,389.47373046169184,393.7205251326239,393.7205251326239,394.4567071420763,390.40604451274794,389.1469849107803,393.261924552294,393.9525164363566,394.59302172298493,394.59302172298493,393.92605532713884,397.0447228055171,395.7946441899495,391.59878855737384,392.0009480172331,390.7074481400508],\"DOP\":[3902.8074984040127,3855.029094509211,3836.839869265343,3832.094119095907,3817.474979297817,3728.612702152847,3622.4152305067037,3626.065493292608,3659.0989832562777,3649.974385781436,3649.974385781436,3671.150124386393,3767.553899675272,3721.948456680063,3647.173408136514,3607.8246649680095,3649.7970043163036,3649.7970043163036,3672.2941577288357,3619.9984485657333,3606.127235808764,3636.186247048194,3681.313465273446,3687.2367919515805,3687.2367919515805,3685.319271508214,3734.0608541825545,3680.3010085766646,3633.0015344635567,3642.4356599749226,3633.624175119763],\"DZD\":[8533.186733238594,8480.431282987493,8411.866544675433,8411.866544675433,8403.376355419734,8199.384752649263,7980.183354560009,7967.381018961514,8045.4803249998395,8023.144879272095,8023.144879272095,8054.918507339484,8258.326593900909,8159.18498303122,7990.998007143363,7916.486999183358,8006.903839457608,8006.903839457608,8050.352483575217,7962.244480907951,7928.136152407163,7998.179994099282,8071.454815805549,8077.501309841495,8077.501309841495,8084.882253941098,8165.095569977814,8064.694545441918,7946.837291754172,8008.498686786484,7977.945301642929],\"EGP\":[1062.9612880776772,1055.7922656669775,1044.384780889303,1048.098525240652,1045.5397226042503,1017.8529872337073,988.2658484278044,987.895214709835,998.7583273819247,996.2064605491431,996.2064605491431,998.8692621017265,1027.6470852393659,1015.4742209571424,992.8819170234382,982.3729137462625,993.9086395251261,993.9086395251261,998.3317203973892,985.4869622139344,981.021179374337,988.1580572417452,999.956050768093,1001.6028994338167,1001.6028994338167,1001.9263323708323,1015.7876011304375,1000.1137316091696,982.6020922248657,986.7283151580234,982.9536298749317],\"ERN\":[998.1796886461111,991.6523377449121,981.640536889689,981.640536889689,979.4344900196121,956.0474547574189,930.3731800948461,931.4412596212584,940.4073516493586,938.067083609298,938.067083609298,942.0591574507281,967.688550143073,957.6278973693856,935.0400151114039,924.9232658135871,935.728667781243,935.728667781243,941.3754624209882,929.4951737292222,926.2384432729962,935.7604355460887,945.2993464656141,946.8483042844741,946.8483042844741,947.5396009635725,959.3365426254701,945.737193304826,932.331328456419,936.1273710355914,932.5114994293156],\"ETB\":[2358.9631559753075,2340.197083037649,2316.8701034986975,2335.4218943870364,2336.6755542526444,2283.9251011725555,2223.012612937337,2225.574219352474,2248.3447642780443,2242.738125267659,2242.738125267659,2250.8575668880812,2317.23450725975,2294.264031678616,2243.6699264231747,2220.2942785406553,2246.1245132109443,2246.1245132109443,2261.0602116683276,2233.0579828666046,2224.931391472205,2243.4204566762046,2278.111211785358,2281.7767459267598,2281.7767459267598,2277.887164494743,2344.013212118445,2312.9800359219366,2283.198361285085,2269.500266121596,2219.5653780181974],\"EUR\":[56.03382310388065,55.94187055911005,55.511043950744295,55.511043950744295,55.590135999742785,54.04655499469504,52.67241102144487,52.46182040317654,53.06337009291708,52.807124714657746,52.807124714657746,53.0427932996817,54.20377455550911,53.49676880043726,52.60875156737292,52.314889238980165,52.887181300839146,52.887181300839146,52.995530977719184,52.4573192296563,52.28048741278976,52.83509629296209,52.92351220139536,53.01450020898306,53.01450020898306,52.92061858984663,53.33954923962318,53.18586631514645,52.640259782014596,52.68495000482269,52.51101179950487],\"FJD\":[140.92551337684466,140.0062788669903,139.0650460624377,138.59153685753785,139.19981296852393,136.01561406873935,132.47769777031152,132.51986988393404,134.02119870301902,133.6870449988747,133.6870449988747,133.45439491495998,136.59399971385398,135.51421645468284,132.9423152107514,131.50890699450215,133.0389738546121,133.0389738546121,134.13417969456322,131.73727229977814,130.9923162858888,131.7516566848857,133.63462033115778,133.84984380863582,133.84984380863582,132.88033928013374,134.45156160048867,131.76585636112273,130.08729462656336,131.22324793621195,131.636652308459],\"FKP\":[50.631153947850684,50.500964228531004,50.128249040928516,50.131246637301864,50.11050511397614,48.633900605086325,47.57488042761148,47.40051381795968,47.8287216966209,47.78389978330064,47.79139839501013,48.004735749284634,49.017557406038,48.33400963058226,47.42089735781114,46.92211351155837,47.65679773173006,47.65896610616339,47.78591129601645,47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775],\"GBP\":[50.64348138893354,50.504208857023436,50.1714366331222,50.1714366331222,50.10650262418416,48.63487344307622,47.56929715204321,47.41588513133781,47.83981194097033,47.78690978940938,47.78690978940938,48.007547017329514,49.010565119120336,48.328338973089416,47.40906038870848,46.92279360511848,47.656850618911356,47.656850618911356,47.76587898530688,47.19438130598334,46.949184708870526,47.31224367745877,47.36135691605311,47.278437315371505,47.278437315371505,47.38379886988393,47.46590475645436,47.22963433237951,46.90931469954666,47.07942937915957,46.77822710831753],\"GEL\":[205.604234709192,204.2600484956435,201.88855983281354,201.88855983281354,201.4432543953959,196.62228586213547,191.34654389673022,191.56601598045202,193.74147470083273,193.26166678133941,193.26166678133941,194.06294703694175,199.02016164678648,197.23814633540175,192.58827643153393,190.53375624216315,192.77985786740828,192.77985786740828,193.91812021734236,191.44597659582675,190.78869884962864,192.7372006021927,194.75534949040286,195.07077659196864,195.07077659196864,195.1759512944089,197.64372567790886,194.81115901617207,192.07525381988876,192.87222607465517,191.16276770729513],\"GGP\":[50.631153947850684,50.500964228531004,50.128249040928516,50.131246637301864,50.11050511397614,48.633900605086325,47.57488042761148,47.40051381795968,47.8287216966209,47.78389978330064,47.79139839501013,48.004735749284634,49.017557406038,48.33400963058226,47.42089735781114,46.92211351155837,47.65679773173006,47.65896610616339,47.78591129601645,47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775],\"GHS\":[384.2846096537311,380.72912670932067,377.6209263775198,378.6796885187924,376.7226777416969,367.0221560788348,357.0634300041797,357.2620066218692,361.018707898595,360.1184510272321,360.1184510272321,362.05923329100085,372.56503708645465,368.2488063083947,360.22864112979454,356.59042210719224,360.73886246825066,360.73886246825066,362.8251585763431,357.47874260425033,356.16301628010154,359.1378492605215,364.59711438253544,365.18375787705367,365.18375787705367,364.1548733713789,369.20771882969484,364.37041330804107,359.1441733524097,360.4081543220911,360.2541594460342],\"GIP\":[50.631153947850684,50.500964228531004,50.128249040928516,50.131246637301864,50.11050511397614,48.633900605086325,47.57488042761148,47.40051381795968,47.8287216966209,47.78389978330064,47.79139839501013,48.004735749284634,49.017557406038,48.33400963058226,47.42089735781114,46.92211351155837,47.65679773173006,47.65896610616339,47.78591129601645,47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775],\"GMD\":[3450.283442094975,3427.7822885226506,3394.4575385731273,3394.4575385731273,3386.9543359508725,3301.5794132701026,3212.9706152416165,3216.1936190103847,3248.716801807864,3240.6560119216797,3240.6560119216797,3254.4135310773877,3341.2524871813007,3306.8487851593095,3229.660780905057,3194.0751518229754,3231.5461880911807,3231.5461880911807,3250.837817419541,3210.087461330418,3198.2713125139053,3231.4548797926245,3264.942496145066,3269.9479446021287,3269.9479446021287,3272.0951304854834,3312.9014278449017,3265.7068094061665,3219.4812361225604,3237.1209089817703,3221.4637206861075],\"GNF\":[639814.2635715789,636054.0137412506,629216.6006053075,633125.7065279413,629853.6200768935,614955.5882084098,598412.0183591644,598761.3521366646,604516.0448602762,603008.5741546538,603008.5741546538,605191.533685079,622678.2606749348,616033.1396870811,602123.155064712,595652.0094970904,602581.6436775118,602581.6436775118,606070.2809991473,598419.0180700659,596231.1506379294,601196.0173290101,608754.2130265401,609733.7207440851,609733.7207440851,609685.1576124859,617803.0600035108,609376.2448816795,601248.2118784079,603063.0804086828,598658.1153917146],\"GTQ\":[513.2078462231939,508.17298723981605,503.9917069093013,505.3447886056007,502.73228560074585,491.0635397022795,477.67187400250776,478.16525561392785,482.61490624087713,481.4114526270777,481.4114526270777,483.3921829955309,496.75163019322895,491.4073555441597,480.30133005337103,475.0392308925184,480.5656664646497,480.5656664646497,483.35771727228877,477.05042817220203,475.30250958171234,479.2644638835482,485.92537749799055,486.707253256599,486.707253256599,487.26881833199366,494.16654753110623,487.3052884261968,480.7095889631225,482.2080667305405,480.33392572259913],\"GYD\":[13913.928285340962,13776.323250621483,13676.02852490885,13712.33924244478,13659.961215220395,13323.311474025657,12985.847838313666,12979.588848772144,13108.81251662026,13076.123245749928,13076.123245749928,13134.378928303378,13481.143812268912,13341.169554173875,13031.452016997397,12897.181849167284,13047.223730556538,13047.223730556538,13133.336694230136,12952.028592809052,12914.818848862167,13022.470813654309,13177.572959624473,13198.77609128605,13198.77609128605,13197.91101420538,13344.236079361473,13175.440916711572,12977.637861697907,13045.629151816223,12994.92576790824],\"HKD\":[515.7342432054786,512.3769628704626,507.2022436472365,507.1976917416326,506.0733639546024,493.95848937401536,480.74789013374914,481.26186702504583,485.88992437964185,484.70862388001154,484.70862388001154,486.74533621676363,499.9889506285568,494.77465615953446,483.12610436002956,477.92256601292485,483.4609752049641,483.4609752049641,486.39393723306426,480.2723567192875,478.56240709384946,483.48075740282286,488.42257342121343,489.21314265247725,489.21314265247725,489.56726663858785,495.66234851043305,488.6449340269427,481.71670241327206,483.70026256952707,481.81746682795875],\"HNL\":[1655.9330573539528,1628.6193425611677,1629.7358052766613,1620.6450391640676,1611.8894710233737,1574.0337620695752,1530.994207369064,1531.3303720219913,1545.8409832160885,1541.9861545117833,1541.9861545117833,1550.910276870398,1590.7522118509469,1573.5683481268688,1537.6955178175738,1520.8447325643829,1538.5377651046522,1538.5377651046522,1547.8821277535926,1527.9129539639262,1522.2305626081086,1534.9191981342635,1554.2453222287238,1556.7461468941904,1556.7461468941904,1556.3965040603798,1576.27521069736,1554.2662611580877,1533.0986633498376,1537.8214271703696,1541.954302374369],\"HRK\":[418.04526824293475,417.5266262675626,414.35108536154064,414.35108536154064,415.33608651834226,404.1159281683439,394.51625320580007,394.1331707758094,399.392067678359,397.44754345240005,397.44754345240005,399.48352306079795,408.5191053981931,402.8690262505225,396.14153190849754,393.6756100504774,398.5051226505482,398.5051226505482,399.1258254033372,395.0140528058386,393.56337908497574,397.14836856541166,398.2502231681831,399.7879125984632,399.7879125984632,398.44214215574056,401.7701268122046,400.6825848619104,396.74132081599845,397.2177590817606,395.9849098479246],\"HTG\":[7480.492914805001,7406.980518343567,7352.073452294632,7371.811791747419,7326.845799077259,7163.531290041796,6960.587534677362,6972.6298312522895,7039.770536945633,7022.2155607169725,7022.2155607169725,7053.899208654148,7245.687612371796,7169.74935134585,7001.949216367874,6914.052267081954,6994.488282805516,6994.488282805516,7017.673723604797,6940.4914133311895,6917.28691602482,6974.946407151721,7059.486080390959,7070.845068247757,7070.845068247757,7081.254470761984,7151.981027017971,7073.335898844484,7026.87758243224,7059.8288731279945,7032.390014371605],\"HUF\":[19384.409966328007,19364.609669909652,19214.503435840914,19218.125475947654,19200.511885685624,18659.52852351059,18168.060341397933,18092.376428197924,18357.722861023052,18299.21934203903,18299.21934203903,18479.514947195767,18963.370322165065,18709.491288570236,18417.440780624696,18334.33870361541,18563.189828289876,18563.189828289876,18613.689345485644,18557.01189611034,18553.176043381023,18841.19162045301,18800.847439344114,18772.71555386651,18772.71555386651,18752.58122926277,18903.798841123364,19064.758644164227,18854.68798552069,18947.7868038768,18913.24661937755],\"IDR\":[969624.862086225,971162.4156160704,962914.0470283998,962809.3412091231,964963.1921592288,938911.4671100671,914382.1043166523,920957.695906072,934452.7149854281,932879.1720024851,932879.1720024851,936757.5436802516,954364.8583223933,936604.4176299897,918952.1798637564,909782.831087477,921003.2482165515,921003.2482165515,917599.2918056984,903342.2719781364,904385.8987859691,917517.2383083719,921999.759687171,917455.1621480564,917455.1621480564,920295.2772554138,938880.7622847087,933013.7525793654,922849.3070521432,919539.4314950919,917194.118206869],\"ILS\":[226.55746648683404,225.3025271645822,223.20141453621832,223.20141453621832,222.9123316889046,216.77770547664213,211.22279423013856,211.25934397067806,213.51108224287046,213.01770985821304,213.01770985821304,214.30741865607817,219.3910784040125,217.11010957078096,212.0269470919204,209.7006237870945,212.1128198791113,212.1128198791113,213.4889988386972,212.409652451532,209.96607040092596,209.62356155290487,211.9688806044433,212.18391027392855,212.18391027392855,212.34768653506092,214.3645542339967,212.22586040960678,209.41885077130823,210.14177315178603,209.66733319936984],\"IMP\":[50.631153947850684,50.500964228531004,50.128249040928516,50.131246637301864,50.11050511397614,48.633900605086325,47.57488042761148,47.40051381795968,47.8287216966209,47.78389978330064,47.79139839501013,48.004735749284634,49.017557406038,48.33400963058226,47.42089735781114,46.92211351155837,47.65679773173006,47.65896610616339,47.78591129601645,47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775],\"INR\":[4983.660834469343,4954.992557692827,4910.752362208146,4906.171479839243,4897.1842352068925,4759.018163923737,4637.712086219014,4646.922259914477,4697.365855094365,4681.137103413818,4681.137103413818,4699.833679746005,4815.469619149278,4779.977377837508,4676.868982982992,4618.914058455776,4674.121537792174,4674.121537792174,4649.4402256759795,4600.163300999903,4584.875677834292,4612.034519380124,4620.526290294827,4615.996442735749,4615.996442735749,4629.640452131627,4661.434952075362,4613.15429806771,4570.68548245539,4566.808070335338,4553.419817975758],\"IQD\":[79186.58236703082,78710.75283455614,77874.95858256244,78348.84409682924,77944.31888273799,76134.83669128701,74068.1136674848,74111.1909870006,74823.99423913578,74637.406619746,74637.406619746,74907.3999661113,77016.36315976271,76188.31197546603,74466.67444123494,73650.36745698164,74507.19340748481,74507.19340748481,74940.38834251615,73961.66905510657,73690.96404380284,74305.53370200527,75240.44134949811,75361.50553320741,75361.50553320741,75348.51137827733,76318.76284782495,75258.39329443975,74239.98239488281,74471.6039617426,73915.3139196219],\"IRR\":[2801807.634158998,2783532.871692377,2755399.2938366584,2755399.2938366584,2749323.3547714385,2683542.0185599304,2611536.7629642216,2614568.2707021134,2639673.8892722563,2633091.414471913,2633091.414471913,2644286.4404252404,2716268.981819834,2687941.411200695,2624624.8118401137,2596322.787935103,2626527.6437263414,2626527.6437263414,2642449.4566210895,2609155.587011831,2599899.5208505057,2626673.534276391,2653470.2137750005,2657739.7486813944,2657739.7486813944,2659754.5028632116,2692868.2082705013,2654675.0038130544,2617035.7987586716,2627710.2045481554,2617497.3239810066],\"ISK\":[8976.037782732856,8962.457431521074,8917.035252249621,8917.035252249621,8928.672788403048,8706.785214762564,8486.779229626723,8451.935966915087,8549.413280985435,8517.684235910361,8517.684235910361,8566.477421390218,8745.21319132881,8666.76847753818,8575.465875301417,8506.426572239014,8597.917508735492,8597.917508735492,8638.713002141272,8541.032784744237,8531.713124856124,8610.210548516541,8652.880618147445,8680.522323542102,8680.522323542102,8694.674846495192,8763.921247258462,8737.345291512716,8659.430172911616,8676.675723277498,8649.172561071278],\"JEP\":[50.631153947850684,50.500964228531004,50.128249040928516,50.131246637301864,50.11050511397614,48.633900605086325,47.57488042761148,47.40051381795968,47.8287216966209,47.78389978330064,47.79139839501013,48.004735749284634,49.017557406038,48.33400963058226,47.42089735781114,46.92211351155837,47.65679773173006,47.65896610616339,47.78591129601645,47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775],\"JMD\":[9878.568743949458,9781.654408381184,9712.626362010094,9738.414350543677,9683.202985390477,9445.283719703564,9226.52626639038,9261.946526401953,9348.022943981288,9324.711865332605,9324.711865332605,9359.78177802752,9673.096007144006,9603.771070173938,9359.438282024563,9253.129175716169,9360.777284665466,9360.777284665466,9453.137246140886,9314.218156584251,9268.666194695044,9345.84659163714,9428.918770649776,9444.090223066587,9444.090223066587,9401.460613403851,9480.583216551457,9336.333346807703,9158.316338296949,9216.676862025528,9180.855167347201],\"JOD\":[47.17622048291161,46.87028088737421,46.400349373372336,46.400349373372336,46.294409048001796,45.184163046329935,43.97545854805003,44.02627445326817,44.44858502170209,44.340716830530816,44.340716830530816,44.5258180651384,45.737903822782364,45.26308111436196,44.194876102948264,43.7165709883291,44.23018436806739,44.23018436806739,44.49769758544191,43.93321468411407,43.77832086679741,44.22989699482365,44.68014594090602,44.75579533742726,44.75579533742726,44.78820128990772,45.34741787930424,44.702348336816385,44.06584578690158,44.247297206700324,44.07811088158699],\"JPY\":[7021.98786425168,6984.284471643249,6931.362411116612,6932.77166998939,6932.663315830627,6761.499937499598,6628.729380846863,6642.141609749542,6686.640866405492,6665.81045389255,6665.81045389255,6679.421808766999,6806.767723772627,6717.843581909784,6598.5575671883735,6520.158399313571,6599.539082676912,6599.539082676912,6638.1639820107375,6596.225882581101,6560.570563065942,6616.840480156898,6642.089982831238,6650.821785992027,6650.821785992027,6692.562529216474,6767.729848437127,6698.664500134392,6618.911936943703,6626.724128131049,6604.479617102852],\"KES\":[7189.358484408578,7139.809137287079,7067.111282924476,7067.111282924476,7061.834112363436,6899.257958454811,6726.535990786419,6724.692592474038,6795.2361676314185,6775.682436173359,6775.682436173359,6801.355574191234,6993.204750175224,6927.822037231778,6735.9597893132495,6659.600126852716,6738.354288698839,6738.354288698839,6782.293118847699,6695.808339455358,6687.458756528952,6751.974534036267,6818.721675568272,6825.616583819567,6825.616583819567,6833.792895380188,6927.0979136739215,6834.575450172652,6733.897425362184,6764.879556418995,6739.788574510498],\"KGS\":[5118.547134459698,5085.161570505738,5042.265130741086,5042.265130741086,5055.294144738449,4946.429025185352,4828.989155205607,4843.510498423946,4899.273570199016,4887.056637989261,4887.056637989261,4887.19143423914,5020.229852113944,4960.36767978105,4845.734868549014,4806.363538087966,4862.279584885702,4862.279584885702,4892.538728595954,4830.287422954056,4828.053084705655,4893.198492036781,4945.0968231643255,4953.053781642929,4953.053781642929,4956.8080996788085,5003.247265057389,4934.499153846253,4890.820538656078,4913.401229752114,4894.349084903386],\"KHR\":[272861.5383879233,271080.24206202617,268308.7038626293,269145.3134705411,268074.15475512587,261670.92191937787,255271.97887861944,254805.8776874038,257696.77854086005,257054.16381212676,257054.16381212676,257886.19896718673,264334.0706472173,260925.67570340514,255018.1719429595,252228.3533563772,255162.70161249238,255162.70161249238,256862.70249562032,253508.33825165097,252953.9957243584,255064.6642964489,260253.23399922065,260671.98999045396,260671.98999045396,259342.79272251064,262429.6158529929,258783.95286804234,255404.1232988258,256200.02305281485,255191.24431438284],\"KMF\":[27592.176909861424,27412.187149166315,27483.34139040478,27483.34139040478,27422.73649815259,26714.335390662636,25954.137328413333,25931.290200439827,26102.071585357684,26037.017279223866,26037.017279223866,26147.653521341348,26782.074546548563,26362.332511214674,25741.344771790824,25463.769120154007,25760.018754936824,25760.018754936824,25916.152202311026,25589.60870986207,25498.82737188824,25761.412861412082,26024.244146614798,26066.13563950166,26066.13563950166,26085.883852499115,26410.630233841748,26036.047353168506,25666.883533447577,25993.261609691028,25920.116492058645],\"KPW\":[59889.32096526895,59501.51018609908,58897.027561925206,58897.02750641416,58770.65897839501,57365.46913787448,55822.72085101823,55887.567465143555,56425.640437252354,56282.680283127025,56282.680283127025,56523.923027436904,58063.847306063726,57458.13894307109,56104.79355270552,55497.4627531444,56142.37884795678,56142.378795069606,56487.24084981126,55773.860374734904,55575.81096740508,56148.067853905406,56720.51874005208,56809.541775051606,56809.54172203711,56856.0926199373,57563.0871348468,56746.93976941646,55941.029107457485,56170.21734443687,55949.35450570684],\"KRW\":[78800.69956067453,78398.94907120214,77820.9722604559,77820.9722604559,77562.84397104009,75363.53419741955,73453.60113456225,73582.98360752597,74416.21258732888,74233.12710172651,74233.12710172651,74469.58994840947,76419.36002241584,75211.6052579555,74039.60306688743,73410.78582401859,74371.2093051651,74371.2093051651,74500.74859958203,73552.71735486801,73244.54885613864,73937.69201032183,74494.1034486551,74522.14980064817,74522.14980064817,74903.93071232774,75776.38673554189,74819.5088441938,73989.60873767771,74260.52271056232,73817.7372223419],\"KWD\":[20.32565295887856,20.20944827444298,20.005625129408735,20.005625129408735,19.9690886538276,19.491295546731823,18.986876673311254,18.979794770922418,19.170787410539177,19.118027396071117,19.118027396071117,19.201756388451273,19.70708313024467,19.49582745394335,19.065253741761246,18.85653562196573,19.08280564415008,19.08280564415008,19.19031771340385,18.95907185866315,18.88564643153393,19.073839607433367,19.24140133106131,19.28179784200881,19.28179784200881,19.28945963476192,19.516194313088768,19.26014458283767,19.00887156962351,19.084438234896954,19.025894817220202],\"KYD\":[55.488165734495055,54.944259181429445,54.548593470726296,54.69503160466835,54.40639964376426,53.14570701604347,51.70213253801884,51.732810946853995,52.23038130919847,52.10014292897791,52.10014292897791,52.338225876282024,53.76412774008938,53.182903257885094,51.98402264251037,51.412666659164714,52.01078781950294,52.01078781950294,52.31056373983217,51.6289657017008,51.43772595569559,51.86647047262321,52.522881214030804,52.60740186187828,52.60740186187828,52.59716776902549,53.271327956145704,52.53168015947015,51.821072059286884,51.98560997845867,51.78352424203453],\"KZT\":[27897.1941121686,27624.675127983795,27476.946906718964,27550.13300012989,27388.291515723882,26681.868273913446,26016.997637174547,26028.590823970677,26303.912652869498,26238.318936357264,26238.318936357264,26316.454148513003,27010.533428601742,26722.410221056492,26168.79971654599,25903.692870997977,26205.048572316173,26205.048572316173,26347.940445348675,25968.130706075295,25955.78701105874,26171.921587941997,26492.041792248976,26534.66830275311,26534.66830275311,26524.38600327685,26750.94119853133,26419.752903130888,26177.920544717872,26258.476910426005,26156.42024603736],\"LAK\":[603548.1335511596,598073.4882863607,593878.3836573706,595322.6718307455,592760.1833708382,577797.8561826493,563535.2721530235,563865.9139365669,569190.1145310751,567770.7384457467,567770.7384457467,573002.0782411494,585973.566893544,579670.76066319,567198.2837865601,563156.2596772723,569707.84801573,569707.84801573,571240.3895511867,563784.9517087825,561727.850972755,566395.8917249931,576136.9793735446,577064.0050698727,577064.0050698727,574481.0127036665,581873.0789420139,573798.682470172,566404.0924129742,568171.4870594238,567264.3105246519],\"LBP\":[100635.10248633506,99689.11680535639,98961.7111418294,99231.54688478923,98729.692760045,96470.01120230749,93811.84669346976,93862.33095899817,94768.6004245436,94532.27746240234,94532.27746240234,94978.34712603317,97543.0022661319,96507.62926120471,94326.69727336848,93290.51190113173,94375.8255620294,94375.8255620294,94912.2983495817,93686.49481456642,93334.07616037552,94112.06189387743,95304.59599389383,95457.94427792303,95457.94427792303,95429.21279515544,96671.31590569654,95316.00292742436,94039.17440045268,94319.64363707296,94300.55473541941],\"LKR\":[12346.568956809953,12225.54539862907,12125.635653949777,12157.8293949111,12060.19656435006,11740.846503423463,11347.681444946145,11352.760441368357,11513.716574446196,11485.004972753753,11485.004972753753,11543.139579173712,11902.57514543613,11880.000645631933,11505.507452973668,11388.54531915571,11521.03623291644,11521.03623291644,11611.609609866571,11532.826875783687,11496.917449398448,11592.5543423345,11741.6192023046,11760.511891865415,11760.511891865415,11733.279815350928,11888.10718987493,11675.136397286435,11527.985854161014,11548.356696417068,11503.47267086776],\"LRD\":[13258.773485179565,13172.274456349547,13044.058160079732,13044.058160079732,13015.289857109601,12707.067411460308,12363.010378156769,12375.83754961515,12497.762657962898,12466.63756460277,12466.63756460277,12519.611468761856,12857.165028235218,12722.91734754622,12423.712404539754,12289.414931305662,12432.653317419541,12432.653317419541,12507.750047879625,12349.86751073144,12306.119172854065,12433.331910067518,12559.980022896825,12580.395663570394,12580.395663570394,12588.867936372375,12746.93665994277,12565.61874089059,12387.988676073046,12441.115081047488,12388.122010883195],\"LSL\":[1166.5159957103815,1158.864994346526,1138.04640041668,1138.04640041668,1135.502184724946,1127.4297292042568,1088.217068254509,1084.218999144777,1091.4613084551331,1088.7810466726683,1088.7810466726683,1093.3888676220943,1128.3002965662477,1107.582924600521,1081.4839981506607,1069.8565919059256,1082.3241070443364,1082.3241070443364,1088.8574145207856,1075.147484357136,1071.3110972703598,1082.3787787907918,1093.3908709307784,1095.1857916667204,1095.1857916667204,1096.0179221287333,1109.653793128637,1093.9081769449892,1078.375833512523,1063.128341708517,1032.6001659807735],\"LTL\":[196.48523430344338,195.20361907082918,193.23072435199177,193.23072435199177,192.8046028511719,188.19145565540302,183.14186777674178,183.35448200366523,185.11512181493748,184.6534717673536,184.6534717673536,185.4385601459666,190.48653619586534,188.4999841195383,184.0597138886924,182.07496180111244,184.19320088576663,184.19320088576663,185.30973814744556,182.9749064000257,182.3257949496833,184.20343435424235,186.08256185191138,186.38201809471758,186.38201809471758,186.52332431373176,188.8454737099315,186.1670729074366,183.52752843648523,184.2760969469183,183.559908352892],\"LVL\":[40.25144855608784,39.98887138989808,39.58470339709995,39.58470339709995,39.49740311931325,38.552326469150884,37.51792630164293,37.56150924862553,37.92216194386394,37.827591682474356,37.827591682474356,37.98839987653924,39.02248978555123,38.61557262321963,37.705954858373794,37.2993650998296,37.733311468347104,37.733311468347104,37.96202372761469,37.48369219946628,37.35074862231939,37.735354123396455,38.12038245056747,38.18173223901231,38.18173223901231,38.21064468475709,38.686321630710864,38.13767004340418,37.596936902549594,37.7502945420056,37.60360814873163],\"LYD\":[91.49662113751084,90.60317384818184,90.3336769314857,89.62813156287174,89.16835702793941,87.30837228852522,85.14126534739414,85.31199587049481,85.84687527698293,85.63282554415973,85.63282554415973,85.93203032794263,88.2679198598206,87.31587462977848,85.34323201138153,84.35315518760248,85.33447188534868,85.33447188534868,85.98726284152653,84.85899879947272,84.51522437835578,85.21899485322959,86.13449796611259,86.27304088608817,86.27304088608817,86.4034939716426,87.11031137060732,85.90272649197827,84.71323310355913,84.97281624537827,84.85895031025946],\"MAD\":[613.8636440176189,610.0269663273639,606.721221999164,607.8570334694402,605.1742329421598,589.7128249046716,574.106999703887,572.3687955772755,579.3484747796033,577.9037465260585,577.9037465260585,578.7839181233321,592.5219486930521,584.9250035874353,573.2100161926502,567.0864937851654,573.6838092579494,573.6838092579494,578.9392910420215,571.3707864398932,569.1848288898176,573.9244564231745,577.3021081181879,578.2310092868855,578.2310092868855,577.9244310867118,583.1390492447673,579.7251450471015,572.4119746384594,573.4688844439444,571.3287352506189],\"MDL\":[1099.6168781037197,1088.8750571944827,1083.2826461396005,1086.1679991820722,1080.5571166633442,1053.8775022792013,1032.1041480175545,1039.8296364324983,1049.8371274333665,1047.2191991659968,1047.2191991659968,1045.6733742246727,1072.528569424171,1059.054454215349,1032.6483988544512,1022.581980670675,1034.4783963009997,1034.4783963009997,1041.0890977410538,1031.5416558023342,1029.0035310754588,1037.5633104237534,1050.3164243500628,1052.0064355075074,1052.0064355075074,1047.437746834389,1061.2484722309744,1046.4687775558627,1032.3486116461434,1035.52227086519,1031.4975922660194],\"MGA\":[251866.54835618814,252849.4672593769,247956.50857540942,252246.63719670512,251202.73820833807,245369.67099130468,239022.93570098287,239441.77308801463,240518.9808959187,239919.20200081533,239919.20200081533,241169.33513387805,247569.1786985628,244755.88723503487,239683.36253001317,237520.65504773817,240283.8982743819,240283.8982743819,241591.60960270584,238524.6837426036,237810.9354495245,239785.10363567562,242645.63028529464,243036.05482195868,243036.05482195868,243254.73018792394,245178.29832988646,241759.07201636367,239585.80909026426,240234.18450429995,237163.11874143974],\"MKD\":[3451.511927632704,3430.327867400572,3411.2273139285594,3420.3131950692855,3424.827395296273,3332.529281080924,3245.644259901617,3229.8538376542456,3270.143100827573,3261.9883476712853,3261.9883476712853,3265.3113851319804,3340.0646114619167,3293.924875262194,3246.1407879860462,3220.6093159598754,3258.076936816384,3258.076936816384,3268.82185085683,3227.9223728379898,3219.5877924881843,3250.432823700286,3261.9395102157346,3267.1881157502494,3267.1881157502494,3262.3885893855895,3286.106892019419,3274.6993161251326,3244.0066489965598,3247.4538501713664,3234.8322366250845],\"MMK\":[90589.21747503712,89701.24857865028,88724.98891567758,88960.56390844355,89054.27561792238,87243.94852473876,85092.09860136063,84443.43319787415,85429.10736424138,85216.07430346074,85216.07430346074,85505.91746614763,87608.12186646626,86906.9260167344,84926.79986268978,83934.19228648522,84910.65717898916,84910.65717898916,85215.64165701828,83793.423464442,83302.48436793877,83994.7254684455,84548.50377599073,84684.54488516382,84684.54488516382,83818.1603456419,85253.00287645821,83434.35102345112,82926.85698835386,83060.8245646703,82737.99893204836],\"MNT\":[189485.3695451281,188158.85304583094,186473.12777317685,186464.53366437447,185935.64282932962,181526.92020984695,176635.67544022278,176861.1082141967,178595.69588533326,178243.95583500818,178235.2581319178,178891.74171353885,183764.09875874995,181800.6267205649,177573.61389363822,175614.9863457496,178143.90601359514,178161.08535669712,178785.75181802912,176606.86859711795,175987.91709606917,178061.36714344373,179921.32161714046,180322.10250185287,180319.09636763303,180435.40456583316,182655.67024995014,180088.07145759574,179065.57693783686,180016.59629127482,177605.15373359484],\"MOP\":[531.532587392856,526.3269074224352,522.5148540989615,523.9024081535543,521.1852088853165,509.0950918451596,495.30064523004205,495.5685726817348,500.3522928350963,499.1045325698485,499.1045325698485,501.41999628267365,514.9873518631642,509.45352755714885,497.93473140372305,492.4816950583545,498.2111042954055,498.2111042954055,501.10401275761177,494.5691794167765,492.761264670289,496.8770960679034,503.11001237436903,503.9195240539498,503.9195240539498,503.83784064752587,510.32661740603794,503.22317998392435,496.4248647587049,497.999116055686,496.0635993071408],\"MRO\":[23755.98208416037,23601.033990980934,23362.494807857758,23362.494807857758,23310.97817894865,22753.231001214994,22142.712628886922,22168.404331997554,22381.284417960323,22325.472531995623,22325.472531995623,22420.39308587596,23030.719065472786,22790.53509392663,22253.686096237983,22013.718680101596,22269.819556293605,22269.819556293605,22404.817979106836,22122.525392686235,22044.045036993215,22271.056552301707,22498.260554570297,22534.4609919773,22534.4609919773,22551.543983511237,22832.308542003022,22508.47562290454,22189.340372257982,22279.84651961676,22193.253239277565],\"MUR\":[2641.230570068482,2623.2362078526185,2596.7293091315946,2596.7293091315946,2595.5545927531102,2533.7395740880297,2468.605208807189,2462.1267184850335,2485.561270349484,2479.8226294074525,2479.8226294074525,2487.1841098987234,2554.34458275086,2544.109509536379,2481.557336653056,2454.1762566360158,2476.5593566311927,2476.5593566311927,2494.637590488377,2466.4283735639647,2454.1618281554834,2479.434250630807,2505.055594019869,2508.646043860078,2508.646043860078,2507.744537340771,2535.882611553869,2506.4273497681897,2473.635081738739,2488.038861235251,2474.3188759926693],\"MVR\":[1025.4440659537663,1018.7200915242901,1008.0384252631578,1008.0384252631578,1005.6615826434748,982.1395641587628,953.6018713725363,956.8953151863163,965.674589649873,963.2931526997396,963.2931526997396,966.9625897765488,994.134680156255,983.7461433299038,960.5734096408706,950.2297041298268,961.3059135147734,961.3059135147734,967.0977973005819,954.947150275536,951.5354549979102,961.3167716229945,971.1178172755039,972.7295061559978,972.7295061559978,973.4332891952544,985.6005099546666,971.5810035353503,957.8256905922258,961.0171112265699,958.0008171559015],\"MWK\":[49242.06325773205,48946.63183008327,48753.67313534514,48721.27056183647,48469.24148154969,47161.73519508118,46051.239710200294,46129.61593617593,46694.48494426647,46578.047770263314,46578.047770263314,47066.269922823194,48277.76667467769,47787.70982903642,46747.694203166895,46153.94956180915,46690.890686329294,46690.890686329294,47056.57503369321,46441.06068161849,46292.27719541909,46676.96451830048,47222.28503992541,47298.26754821818,47298.26754821818,47244.668817230806,47854.6245091123,47186.811359814805,46550.27064796836,46543.39757722985,46313.653785165414],\"MXN\":[1489.846284152011,1487.6923723885157,1464.9267909384944,1465.1100328945759,1466.6550708413977,1422.8030699318392,1384.9288710896055,1387.8170227489309,1389.9455245230365,1373.7229053062404,1373.7229053062404,1381.31533386908,1422.4501965051602,1410.9759931890815,1381.6808980844291,1364.162476331865,1370.8946027505383,1370.8946027505383,1374.3404712239976,1357.9788846670738,1353.8526788952834,1368.9463552506188,1380.3212492994244,1373.1247528688552,1373.1247528688552,1379.178317954538,1393.4161946172392,1377.1211067536892,1353.163832643475,1348.6522154917534,1340.5869647220525],\"MYR\":[278.71655072308135,276.83248616017744,274.03504241262897,274.03504241262897,273.95297095842847,267.2070866852072,260.0995786409671,260.33884588882097,262.90167117480627,262.2462541523326,262.2462541523326,263.2662881712375,269.8207525447706,266.36811539208435,260.0937220927242,257.7381430521172,260.77373363501914,260.77373363501914,262.04859189145736,258.31300667395425,257.4782113982574,260.29685704594414,262.5112052213613,262.9337370629843,262.9337370629843,263.13295816480723,264.9378611105038,261.39858718194387,257.7877745940906,258.96407336205516,257.9578774475131],\"MZN\":[4725.575713277819,4696.412337523711,4648.963389157316,4648.963389157316,4639.667210628556,4530.8842503581645,4410.864021259364,4416.268095711667,4460.568549646658,4449.482175030061,4449.482175030061,4470.888041423013,4592.58613734688,4549.487298415587,4444.965765635147,4397.500235597852,4448.6621088399825,4448.6621088399825,4478.139750151431,4425.120465840594,4412.203265763431,4461.061137653282,4509.75049920072,4517.013599540559,4517.013599540559,4522.623848013053,4581.819914163907,4519.99595569302,4457.112805969199,4475.952505257371,4458.565344058451],\"NAD\":[1166.5294438279263,1158.9093003080088,1138.0461228614602,1138.0461228614602,1135.521140961322,1127.4714531447125,1088.5155628077675,1084.514254270006,1091.4706476082695,1088.7807826370445,1088.7807826370445,1093.3645209799697,1128.3210566119023,1107.5899326772337,1081.5059886088159,1069.8699845175709,1082.32384260843,1082.32384260843,1088.8321356525094,1075.1631166382663,1071.31857338006,1082.3414243777127,1093.402090715365,1095.1855265942193,1095.1855265942193,1096.0058033070763,1109.6258965443847,1093.8874344571263,1078.405733180079,1063.130238366717,1033.2215287833972],\"NGN\":[25219.913117363598,25055.451411516573,24769.716036745005,25316.36836950776,25245.689409176604,24638.499200553,23917.86173866701,23982.850636163712,24213.78364926856,24153.423155111082,24153.423155111082,24212.179598309485,24740.923712760825,24602.93286527988,24098.157764460342,23833.98741965084,24111.303822274378,24111.303822274378,24214.786007605697,23923.295512281773,23835.968937761627,24037.147260650418,24417.846566527987,24457.162734857087,24457.162734857087,24331.65652847153,24711.940597620807,24354.54156561618,24025.40094401826,24063.49239361798,23716.54139977655],\"NIO\":[2298.4354762923185,2295.4218252027135,2260.3616926212903,2284.8902465897177,2276.010872688165,2205.948461115969,2161.2703287724653,2162.5134324496025,2183.322820847507,2177.878355215252,2177.878355215252,2183.039385258013,2247.9776398611066,2220.945051637784,2174.1214725036166,2148.5016143699963,2173.496609730573,2173.496609730573,2187.6514381043626,2160.033565114619,2152.1389162254445,2170.0781574484777,2197.0563125203357,2200.5914536112273,2200.5914536112273,2200.252775785294,2230.182400216699,2199.1666964344276,2170.0293829511625,2176.7813397318587,2151.1734084091568],\"NOK\":[596.8788396598399,595.6059912252837,589.9656574709835,590.8343497977687,591.2181069388804,571.0504954184483,555.602180936244,551.8782053023823,559.0743937780921,556.0963578825193,556.0963578825193,557.8034247043693,569.7477991833584,563.9513278953799,556.9767967652638,553.1299276339903,562.0790395010127,562.0790395010127,562.6056444304407,554.5830279387841,552.1894880416679,556.3282559537665,553.4886445680481,558.3955280046941,558.3955280046941,552.7022525843165,557.0332336790663,553.3142139240588,553.7897457769346,556.7640673459151,554.0045122817735],\"NPR\":[7967.54697409446,7889.447712584639,7843.3145499636685,7864.13924054657,7816.83326773816,7618.989661918786,7423.973544690221,7433.292459572387,7500.921999807735,7482.217051121113,7482.217051121113,7519.993871540687,7705.474761691798,7627.448820843007,7473.483455798797,7378.626689105553,7464.467363527634,7464.467363527634,7444.699311269008,7357.242310420859,7331.776501245538,7392.765556110021,7391.7443355663445,7403.637920758127,7403.637920758127,7407.872749367584,7433.807042850528,7380.851418849628,7283.376934027908,7295.937108794008,7267.580587411181],\"NZD\":[99.54285399993569,99.41687149664018,99.0857146538919,99.0857146538919,99.20354396874899,96.55681877921744,94.67649924219528,94.679578521686,95.88089324470309,95.6139529936019,95.6139529936019,96.27638283445326,98.38630106742114,96.09651328006946,95.42880316561103,94.43020609748255,95.23188476835033,95.23188476835033,95.68926068867954,94.78969390283895,94.05207405073466,94.12884131659325,93.99162843455615,93.60377994598592,93.60377994598592,93.80428371957689,94.5311761585699,93.31018802302027,92.38655113172362,92.93883337105746,92.68939238980163],\"OMR\":[25.618495821624922,25.41976221457737,25.191466855287267,25.191466855287267,25.134301730379704,24.535892896826674,23.877668053885476,23.905435088576663,24.133539098479247,24.07424008616532,24.07424008616532,24.147996863646593,24.84180669388805,24.54618991254863,24.00221681509822,23.711514288010804,24.020300003215123,24.020300003215123,24.161987461016622,23.858585474713045,23.772512711957045,23.982484228531007,24.263472174388323,24.299726315789474,24.299726315789474,24.288023743047294,24.623829529627365,24.27269973957496,23.895519525447707,24.028235888499502,23.932681292801337],\"PAB\":[66.58745748255795,65.93364805967269,65.4569021843552,65.63070726296498,65.28933615856991,63.77428633508022,62.042569580104804,62.080380403176534,62.674048494035944,62.51777407131144,62.51777407131144,62.80484202134841,64.51371190238883,63.81683046972961,62.37814412468251,61.694164156190716,62.41189821721377,62.41189821721377,62.77262349226761,61.95471687618557,61.72631675658297,62.2408529701315,63.02639898659293,63.12781134134971,63.12781134134971,63.12006233128636,63.927503103237626,63.039079908690475,62.18736049737967,62.37956034016011,62.13712043854291],\"PEN\":[235.66313084268396,233.70656249493615,232.38399591550652,232.4969053789023,232.01643944185446,227.10151627206378,220.93642958106932,221.44087176542453,223.8247972343504,223.26662223708323,223.26662223708323,224.3348404726232,230.8962089798412,227.64191145098542,222.25382535285985,220.7114954698904,223.279154903064,223.279154903064,224.98298757033083,222.1694940661672,221.41633363212551,223.26193779410346,224.62384499501653,224.98526862489152,224.98526862489152,223.0258501922644,226.5032488126547,222.41462363373307,219.9933314368389,221.49032212262483,220.47178894318876],\"PGK\":[232.57174482204286,231.99183227855832,228.41412360736905,230.92594283509627,229.72701528084104,224.40448508471852,218.30228230588688,218.43722270006108,220.5394848017876,219.98951769154098,219.98951769154098,218.24791472751824,227.7932597016365,225.35219624955792,217.49115507346556,217.84521500337587,220.3795623010642,220.3795623010642,221.6618636350191,218.76422718837406,215.23620493457224,217.0183616300678,219.79563297688327,220.14928591582807,220.14928591582807,222.8694697643314,225.73809297881232,222.6006677941035,216.83107311095392,220.27398468186348,213.50919635565702],\"PHP\":[3265.8816215747675,3241.6712932668875,3211.6471808584374,3211.6471808584374,3208.09640877986,3117.9077088692407,3034.2550735250616,3031.5544519486866,3054.396564929428,3046.179041972157,3046.179041972157,3055.9512147641703,3130.741992589139,3099.6409809902584,3039.4486313468155,3001.9114728916825,3034.718821351638,3034.718821351638,3044.4496897765484,3008.5512669234477,2998.17344551458,3032.6040245281806,3052.695925872102,3052.78692701958,3052.78692701958,3058.3862727196733,3104.68441667942,3063.2285886454683,3019.8023599784583,3031.8081856624763,3019.7508080651387],\"PKR\":[11215.898302043532,11112.93152054657,10987.810076465936,11051.977512610358,11004.469615783042,10747.558648272836,10457.364211278013,10449.504557067807,10537.524294210205,10511.247296184933,10511.247296184933,10561.537496703211,10872.076724840048,10753.585627987977,10515.266863540171,10395.290437613736,10516.226117371314,10516.226117371314,10580.55097627367,10439.33092276372,10410.494154436548,10497.005200585474,10549.496767339484,10566.47128702151,10566.47128702151,10453.60025135871,10576.869318547406,10433.23264368839,10321.860216757546,10336.596892906795,10316.46261442626],\"PLN\":[247.51204307623055,246.762947548468,245.01692174259713,245.03152114715618,244.7377973443076,237.94898413882905,232.06732149535412,230.55453920586436,233.30504587178086,232.20232703854933,232.20232703854933,233.0803240607015,237.9524021477028,235.1350433665563,230.87040233707359,229.84965106259847,233.51509863357234,233.51509863357234,233.13804586824418,230.45156054078384,230.25027215123941,232.9532681667363,232.41005795711024,232.6597006896441,232.6597006896441,232.6723263900588,234.23572324727516,234.9070794714336,232.79217891971837,234.58985540687394,234.02215051602738],\"PYG\":[461297.3084704311,456779.4936823907,453968.60533351504,455173.922237433,452271.16532726935,441384.3754808025,429246.21293768217,431480.51891225413,435635.15744775784,434548.8211889078,434548.8211889078,436448.86732843233,446624.87005231,443292.51185047656,434021.8728361306,430156.63792593963,435160.9528910427,435160.9528910427,437079.3452030736,431262.7718721518,429377.49632758764,432960.26333300705,439411.26276868465,440118.2925247384,440118.2925247384,439983.0899944175,444814.9492659981,439679.1789364679,433895.33878264343,436105.5332850594,434410.5596125455],\"QAR\":[242.28352704240746,240.70170181525899,238.2737176786805,238.2737176786805,237.74550326785194,232.0414794916889,225.83196147863546,226.0773949908369,228.26386652284344,227.69708719351829,227.69708719351829,228.6626550207375,234.88679927016685,232.4369338321062,226.96293992315856,224.51494486223194,227.12950036330898,227.12950036330898,228.50401064849044,225.62790020834,224.82517825290165,227.13744494228848,229.4583019875896,229.82856733498377,229.82856733498377,230.000681881169,232.86575026460469,229.5594001710446,226.30716211587307,227.21380435134876,226.34861133974215],\"RON\":[270.9779435494968,270.6507975796547,268.66884530495446,268.66884530495446,268.8375110535961,261.29239384625276,254.75296021541325,253.73201407452657,256.6135556920554,255.33818451853517,255.33818451853517,256.38356139825737,262.2015447706009,258.90804447963217,254.55196881136868,253.2476945342893,256.011666056329,256.011666056329,256.4616440291933,253.9316664572549,253.11754822364398,255.81073468990127,256.05776506703535,256.59633069350224,256.59633069350224,256.14627225733847,258.13285475806185,257.49112795550263,255.10875385300454,255.65082222615186,254.9055173536315],\"RSD\":[6588.477428933543,6579.844718748674,6529.392397975757,6529.392397975757,6536.886507483521,6355.924374020512,6194.685590841719,6169.882663262064,6238.860205412661,6210.170779182715,6210.170779182715,6236.572619616114,6374.088966183326,6291.016241739061,6185.838649399736,6152.1041632125525,6217.770848969552,6217.770848969552,6264.246805805227,6185.316894847442,6145.769542981706,6202.203747553612,6220.71520147124,6235.186407889592,6235.186407889592,6223.4831625412335,6273.126236639552,6254.429658108864,6190.325206649198,6194.980130022828,6171.858667009613],\"RUB\":[4873.215143305147,4869.9431249281415,4823.865365995563,4823.865365995563,4816.781164052985,4643.486842756647,4539.6898881011475,4570.48161033598,4593.868192643154,4555.370282208147,4555.370282208147,4629.088278524901,4707.36073283606,4688.42921333762,4602.577850109636,4590.959126556924,4667.359488565412,4667.359488565412,4664.367688868597,4635.035825220075,4678.349738816191,4699.064807004469,4684.99321436003,4676.384994851301,4676.384994851301,4674.327045833842,4703.434406467543,4675.3286289759835,4690.308840961965,4687.472042536732,4684.496702898434],\"RWF\":[63382.53757865993,63256.34436957592,62169.084580851995,62966.18387016557,62651.29680437899,61212.18253441887,59875.4393929338,59902.898511667685,60518.47877088769,60367.56464277593,60367.56464277593,60680.259772516154,62291.67586380735,61638.73194316593,60255.51383603671,59609.10475568595,60302.578985586595,60302.578985586595,60658.49015750763,59873.331940304146,59667.03007722214,60163.87410931325,60938.945891830364,61036.99849772723,61036.99849772723,61036.14521595022,61830.52438586696,60983.85193058419,60167.46513598655,60360.778267820475,59119.81795640292],\"SAR\":[249.54612688872453,247.91730804745524,245.4157130823393,245.40844113558174,244.87877392920296,239.01597122753432,232.6156939664984,232.86668901649358,235.10506151207278,234.5346065086969,234.5346065086969,235.52909765617463,241.92537621129793,239.45250009259556,233.784085433881,231.28778736777804,233.9546439973636,233.9546439973636,235.36348720059152,232.39216660836576,231.59910872648942,233.95507442754717,236.3622270777738,236.73625068321383,236.73625068321383,236.92031736488437,239.85744503938523,236.4756370407999,233.1108104121789,234.0519947522747,233.14563670707005],\"SBD\":[550.0953042092402,546.5072659241873,538.3128531189916,538.3128531189916,537.1258471536507,525.7550505153843,511.63604540494487,512.8481323152107,518.2006879995498,516.9084546673954,516.9084546673954,519.1061609381732,532.7967608462205,527.6657000437257,515.2361189229335,509.6802148956693,515.6096647638492,515.6096647638492,518.7352549451821,512.199402464714,510.3823506722824,515.6383104105713,520.8987162190142,521.7368493421856,521.7368493421856,522.1323926527987,528.6329107237243,521.135222413272,513.746352801016,515.8418227039193,512.970674798251],\"SCR\":[1186.4528299707422,1178.784104312767,1166.7311772677876,1166.7311772677876,1164.238838448381,1136.3994576108414,1105.8702794807573,1107.1242496273671,1117.680237998264,1115.0457262919974,1115.0457262919974,1087.8877995289843,1150.438635800405,1138.305851438768,1095.663950613124,1099.5835337330805,1112.3109272931872,1112.3109272931872,1119.0818257479984,1108.1029033887405,1104.0636724637493,1115.2179045407195,1127.4722367771599,1129.102772436421,1129.102772436421,1113.7386029460179,1144.1209564144935,1127.7830529891007,1112.0974997704402,1120.2128011484422,1116.016533774877],\"SDG\":[3681.5084139787155,3657.5004194142043,3619.135824433655,3619.135824433655,3610.96279394142,3526.1100430141782,3433.0611785740925,3433.7830586927303,3468.4703650352058,3459.8237979455353,3459.8237979455353,3474.5335381516247,3568.156750776452,3530.2925376786807,3447.273462194644,3410.3118932418097,3449.8666937626595,3449.8666937626595,3470.578487065556,3429.714086846928,3414.3823791248433,3449.7903675381795,3485.1852269530273,3490.862918944475,3490.862918944475,3493.4556746519625,3536.9440699115835,3486.4615553380704,3436.6452062363755,3448.055327206379,3439.333536483619],\"SEK\":[578.1558661093785,576.9855717840722,572.9149962331607,572.4531998585345,571.2794260894447,555.5470249320001,540.1578926110021,538.9674562248014,546.0454261389576,543.4470448426197,543.4470448426197,546.4751814249429,560.0110667524033,551.598389011671,544.5880144674146,541.5649889592644,549.5372146657879,549.5372146657879,549.3489713429573,542.5320604494743,541.0896609175963,545.1044436131563,543.2669444979583,545.2624049114233,545.2624049114233,544.5469735771468,552.9138736308394,547.2810751786002,544.2831780616018,546.2791300755554,543.5573414622384],\"SGD\":[91.09553103173326,90.64809517024081,89.83785228691765,89.83130198373146,89.75800160048868,87.38452388451275,85.18445672443173,85.16861771533291,86.01402489277561,85.72502678391152,85.72502678391152,86.05095227052053,88.06151188631321,87.07770701507893,85.31824285438704,84.44601411600168,85.56040592386586,85.56040592386586,85.85498599620614,84.83890764620776,84.42436089123235,85.23447553644343,85.69819653152429,85.75842913255957,85.75842913255957,85.91911154968973,86.82190442786869,85.84613673021894,84.86025734913031,85.16580121724593,84.8341651126901],\"SHP\":[50.631153947850684,50.500964228531004,50.128249040928516,50.131246637301864,50.11050511397614,48.633900605086325,47.57488042761148,47.40051381795968,47.8287216966209,47.78389978330064,47.79139839501013,48.004735749284634,49.017557406038,48.33400963058226,47.42089735781114,46.92211351155837,47.65679773173006,47.65896610616339,47.78591129601645,47.18992243384882,46.954935562485936,47.310869964955145,47.35590579429637,47.27530945985918,47.27594563386169,47.381999568851874,47.470278599492005,47.223358400154325,46.918316183969395,47.06314972960808,46.815614948718775],\"SLL\":[649130.3690577821,644896.421596808,638378.3593479213,638378.3593479213,636970.6314573166,621411.5602141501,605047.9004954107,605439.7560911423,612820.637813446,611292.4653545079,611292.4653545079,613891.4620005597,628989.963698386,623228.2533544246,608547.9417693821,601986.0219991818,608989.0878442063,608989.0878442063,612679.7370900452,604960.8369522336,602814.6551346892,609022.8986496843,615236.2589742931,616225.9549011375,616225.9549011375,616693.0718322926,624370.9796337986,615515.6166510292,606788.2764303919,608326.7112184709,607050.5175593592],\"SOS\":[38927.865719782014,38673.94133143812,38185.14613396264,38185.14613396264,38100.724466947235,37125.3152804006,36284.274649230945,36388.4773189493,36612.513237549756,36521.22701071215,36521.22701071215,36676.52238599363,37707.25346263383,37185.465811030124,36310.449537769986,35919.11239458895,36336.823912370186,36336.823912370186,36556.43624339774,36096.62919346944,35968.33500858952,36338.77876407646,36709.55593006462,36768.62930455036,36768.62930455036,36796.50838209819,37254.43764659615,36726.09624935472,36205.39753092114,36446.5611460933,36367.101475122974],\"SRD\":[496.2767222679484,493.0461935568916,488.0625352924155,488.0625352924155,486.98376684242675,475.33366819695846,462.57906867601196,463.11448395846054,467.563958884352,466.39817584220174,466.39817584220174,468.3792159939555,481.125982879465,476.1121478731955,464.8957515056425,459.8848107224384,465.23557654406324,465.23557654406324,468.0556816667202,462.15769032826415,460.51779686332503,465.257879856284,470.0059321042986,470.76414959425136,470.76414959425136,471.115699157959,476.9836917995048,470.21879701379294,463.5496538780825,465.4434522142559,463.6360015914863],\"STD\":[1456977.6857076357,1447474.568515356,1432844.7263737489,1432844.7263737489,1429685.1589753025,1395477.9777712934,1358034.2878779203,1322203.8624154916,1334899.9350959393,1331571.1127612372,1331571.1127612372,1337232.51420247,1373634.5413296658,1359309.1095582603,1327289.5122276011,1312976.9969667348,1328251.77207366,1328251.77207366,1336303.5604654776,1319466.6190567566,1314785.7690587738,1328325.548816236,1341876.8113676081,1344035.932518712,1344035.932518712,1345054.825148716,1361800.6267877594,1342486.0717152688,1323451.7034350405,1328849.8140489948,1323685.081782344],\"SVC\":[582.6615458251615,576.9453495791402,572.724204775102,574.2618051814936,571.2955472288846,558.0181415194676,542.8855334157477,543.2231590959071,548.404729700029,547.0371900234703,547.0371900234703,549.5622719949844,564.4744223644021,558.4038199643121,545.8089583737902,539.843410584188,546.1238230974504,546.1238230974504,549.2604688062244,542.1170181397293,540.0856141568337,544.5875578661222,551.4875536482011,552.3749893029611,552.3749893029611,552.3004263273639,559.3995361019837,551.5721108729061,544.165790282288,545.8144488165129,543.6930824277401],\"SYP\":[34057.33470867119,33835.20056800052,33494.07833961225,33494.07833961225,33414.29666839018,32620.68722478475,31750.611117019576,31759.837636212582,32080.319008064496,32019.61163549304,32019.61163549304,32155.05851854451,33015.09889410025,32681.750508490502,31916.26300175771,31568.989359724146,31928.22342026814,31928.22342026814,32112.595995828047,31690.80389353181,31573.683557182263,31904.827420001286,32237.81430347426,32295.20141731312,32295.20141731312,32322.192750320544,32716.003588388252,32259.27940537183,31794.84129727068,31896.410634455842,31784.779228675692],\"SZL\":[1166.5002502060893,1161.4678576999004,1138.0456787731086,1151.0382051429121,1159.2552939362763,1121.4408844918496,1078.396402564383,1081.6603312400732,1094.6971658267692,1091.9673757708258,1091.9673757708258,1094.8106796964921,1122.628196781661,1098.9088515136802,1073.5682749548275,1064.1417657203485,1076.5216957222776,1076.5216957222776,1064.5010924476737,1040.9610494151689,1035.0456915667298,1043.6645488383756,1053.8776474860947,1055.5733571105682,1055.5733571105682,1056.0800013738224,1064.2297796566245,1058.852202367617,1044.9656923119956,1033.272149335434,1030.1127718628427],\"THB\":[2068.8210285522296,2059.4385964016333,2043.4021064000253,2043.4021064000253,2034.128740630164,1980.1996760688678,1928.4934045558302,1928.1009034331094,1951.5603271443267,1946.2574346198116,1946.2574346198116,1960.1826883062724,2008.2549966401953,1995.5838144342993,1959.2299262801014,1946.4565945294667,1967.1689599524161,1967.1689599524161,1971.6213565508147,1950.500619592322,1934.3802300536925,1948.4370419033535,1963.0661701829404,1963.5926221084783,1963.5926221084783,1963.9437974063594,1987.7420408449343,1971.548474012153,1955.405779134167,1959.2516087258466,1951.4121200527281],\"TJS\":[686.6379079767224,679.9245993929846,675.1700029193325,676.9683386991608,673.3096728836447,657.6680986875864,639.6683497022796,640.351340623091,646.5080230109636,644.8958154673181,644.8958154673181,647.9694368790791,665.1290429894223,658.4374814410186,643.5751683715397,636.5217967318266,643.9269239591036,643.9269239591036,647.6580131099893,639.0917692177603,636.7222786637946,642.0242460563289,650.2597100163971,651.305984316947,651.305984316947,651.2032941243609,659.1415061653215,650.4169797022795,641.4882606529917,643.4564149895508,640.955553813137],\"TMT\":[232.90172800630165,231.38262530816962,229.0440074230781,229.0440074230781,228.53894289425455,223.70814927016684,217.08533892164743,217.95829874160046,219.42425195254478,218.87708280230203,218.87708280230203,219.8076911072887,225.79124328842877,224.07490739767871,218.79664124360994,216.43731670417648,218.95525762145127,218.95525762145127,220.282548950262,217.5070875330354,216.73545247210882,218.9674483323152,221.20128146095232,221.55719199787802,221.55719199787802,221.72516722856315,224.4856270231167,221.3017093810886,218.1640297691541,218.42980069189468,218.20247305726136],\"TND\":[180.52971524225956,179.35662974632672,178.26416974825577,178.26416974825577,177.86886747130498,175.52456456129633,170.81541747709224,170.48570238240683,172.12271483779702,171.69370564125646,171.69370564125646,172.4233969112304,177.3108994920104,174.12080162074398,170.0193850528888,168.186195746391,170.14282209111659,170.14282209111659,171.17408118316558,169.017115356718,168.41735548082178,170.15220467061053,171.88794664437515,172.1646954576729,172.1646954576729,172.29482219657265,174.44000830723724,171.96591474262934,169.52753550589975,170.7120931434267,170.31920421663503],\"TOP\":[151.4626177777063,150.16733646786483,148.649804955149,148.649804955149,148.83113757129536,145.43263176446,141.62652685785935,141.75965554062307,143.33387321769604,142.97703280005143,142.97703280005143,143.56896604089636,147.37399219367907,145.837006459184,142.2707938211748,140.73667799247661,142.73578565893965,142.73578565893965,143.6164580702826,141.87223620422466,141.1096362100119,142.1572647243031,143.47521818988523,143.70608762948913,143.70608762948913,143.16435017008004,144.7519619541523,142.7270379217439,140.64119295051924,141.82646291933256,141.2752585683053],\"TRY\":[483.1546095058354,485.14619448027514,477.33447093849463,477.33447093849463,477.4632333807027,461.90320737388674,454.2544048037167,455.26241837507627,462.69088429186894,460.8865906214834,460.8865906214834,464.3430837661962,477.08211027875126,470.0851484033695,457.77115871587944,444.7148530302543,457.4379963074301,457.4379963074301,462.09098165964696,458.136836809311,454.4403470430505,458.6154515503328,461.0471458058708,462.99169371861234,462.99169371861234,464.0812788525222,469.9418045088898,465.4773302176639,462.4396287200591,464.4469163849147,462.3346211860592],\"TTD\":[450.3262976992573,445.90084649197826,442.67431878339704,443.84970962801015,441.55617478506895,431.3043719377552,419.60112024788606,419.84334494807575,423.88463353888693,422.82759811850946,422.82759811850946,424.5567453679709,437.2196245989133,432.51474215220395,422.74372583480687,418.1120517586728,422.97623298717167,422.97623298717167,425.43413186895157,419.8787172060572,418.34166381378003,421.82880441597274,427.1395278500466,427.8268046284924,427.8268046284924,427.75656625245153,433.25832961257754,427.24248959650197,421.45997608365747,422.4296677420185,420.7878036282674],\"TWD\":[1955.3106795010128,1943.284868245507,1926.358402494936,1926.358402494936,1920.9609544982798,1873.5460960717617,1822.6176446098448,1828.5499825778863,1843.6967697919815,1838.6428513063047,1838.6428513063047,1847.4832488531652,1896.8531768189562,1874.5557740160116,1833.5597714072599,1813.0663918030416,1834.111475584349,1834.111475584349,1844.7262074012149,1821.3274085991704,1814.3229005150629,1831.5595215268622,1849.803714944539,1852.4984042825454,1852.4984042825454,1856.3013540523423,1877.5120218937077,1850.5804122303314,1825.2434721374143,1831.302783117384,1823.7937679002027],\"TZS\":[154713.29030677746,153704.17659391442,152150.6763878211,152588.21377010833,151807.1165889464,148373.95289396233,144229.02570418996,144316.76769004276,145721.34584022476,145357.96627297622,145357.96627297622,146016.0960523763,149667.3358994695,148106.49972151464,144634.81263246728,143058.278903101,144722.59739401183,144722.59739401183,145616.44597373114,143734.7433952789,143255.36742057808,144730.61356993503,146212.85848945248,146453.86474805037,146453.86474805037,146492.80755866476,148313.43560261003,146254.342233472,144199.5551763145,144725.07801946308,144162.5904675192],\"UAH\":[1844.0349593151786,1826.0211414937462,1809.503380628235,1814.3230715082143,1801.6919285798795,1759.1038129878145,1707.14439197923,1700.6925520586437,1713.896709116484,1709.622794375462,1709.622794375462,1713.1822379143491,1757.3515782303957,1747.0071194421762,1711.2322713915055,1692.2586000321512,1711.9458417692827,1711.9458417692827,1723.7457834729769,1699.2549777089025,1694.4442134019225,1708.5394985255439,1732.2346618242611,1735.0218768054528,1735.0218768054528,1738.2603266691315,1765.0526764820113,1744.1660245352539,1722.017765113976,1729.0419800623733,1722.3218562759218],\"UGX\":[245362.54695862776,242938.03414461366,241197.42396755036,241844.97717059316,239940.80376711438,233907.15111279106,228010.88275372054,227802.9294739401,230082.6737066399,229508.91981479982,229508.91981479982,230423.98627079895,236696.54844477703,234542.82691387166,229234.49469747997,226537.7073264267,229173.17803521847,229173.17803521847,230501.93882763202,227497.4090351638,226913.8451546153,228799.48252900844,231684.2616824461,232057.04908098094,232057.04908098094,231957.5484454895,235203.4401265003,232303.55573819115,229168.0238967527,230062.4224876237,229168.2579100328],\"USD\":[66.5433588637752,66.10930553322831,65.44113704787318,65.44113704787318,65.29684082692987,63.734508070604114,62.024397598302414,62.096381258399504,62.69267373693856,62.536309372086286,62.536309372086286,62.80218988168343,64.51181477027939,63.83903162878179,62.33521538340352,61.66303679709353,62.38043034433977,62.38043034433977,62.75857967655852,61.96783120599299,61.748013158859266,62.38387757579655,63.02031278268977,63.12171467382568,63.12171467382568,63.16954310966786,63.95603976208082,63.04891929395878,62.15498673761373,62.40848437771277,62.16594898402083],\"UYU\":[2848.8256304787315,2820.9247648136834,2786.1406516155994,2793.5378867993436,2790.189500832074,2720.3181724492815,2635.3074903800275,2636.175994941967,2666.928685524869,2660.2781987956146,2660.2781987956146,2668.1592250741082,2742.1434247853904,2727.3082313516384,2673.169352481754,2645.408992113301,2676.184878359001,2676.184878359001,2712.1360722142554,2661.2350807735584,2650.892570362987,2673.0117406044433,2697.1910708857663,2701.53092657943,2701.53092657943,2692.8716569742464,2717.9108108150335,2685.844817125036,2643.910740616661,2662.7053813561392,2652.3564637896666],\"UZS\":[678076.7116723628,673162.1183963862,667499.6671105784,671912.9328275626,668438.0428224653,652089.679622457,634812.5173169347,635182.7408540256,642875.168852175,641272.0415476924,641272.0415476924,643401.204332093,662098.1877667877,655406.8071034498,640048.9675250223,632816.3896794248,640178.3855824422,640178.3855824422,643987.3136407831,635620.3544997358,633505.0234698132,638869.2559242848,647374.9505560544,648416.600007834,648416.600007834,647703.3844098275,656123.2093624601,647296.1362474874,638558.7242839198,640532.148640962,638755.1514886988],\"VEF\":[664.6014863646593,660.2666820203839,653.5936372902935,653.5936372902935,652.1520115320066,636.5486506716394,619.4686907651994,620.1879547220525,626.1428322030029,624.5816538893354,624.5816538893354,627.2369715615857,644.3114871298588,637.5920375037779,622.5730182233225,615.8597173375559,623.0246935038421,623.0246935038421,626.801409911584,618.9034125402694,616.7080010699932,623.0590882419701,629.4150967302189,630.4283439896474,630.4283439896474,630.9058554673181,638.7608377777062,629.7009252149311,620.7730024222744,623.3050538321063,620.8826419316464],\"VND\":[1542075.51270473,1532182.6194274083,1516696.6203426807,1521058.206998589,1513263.6085187267,1478000.6700817572,1437902.3448657254,1438652.7739721686,1452524.1259699415,1449247.749069826,1449247.749069826,1455412.550041742,1495073.9835585537,1479008.3923648768,1445550.78208852,1429778.4665992653,1445728.6346546009,1445728.6346546009,1454985.8435799915,1435856.6420011194,1430514.6677025727,1445746.552655586,1460592.4526443467,1462845.699077383,1462845.699077383,1462691.836790221,1481588.072150433,1460937.973665645,1441175.9206515092,1446629.204260858,1441006.7085294265],\"VUV\":[7510.492134916888,7464.3403474957395,7333.986843954602,7333.986011288943,7399.871336512232,7257.743082846349,7071.815443652059,7069.530590788026,7142.97003632029,7067.138317676108,7067.120257639455,7143.056240814711,7309.875722200431,7218.2205801884065,7080.710777905668,7007.012790996046,7031.026661299553,7031.052576018391,7147.825925092756,7049.967163240202,7014.961923292286,7062.233579014242,7120.542348712343,7073.336219612578,7073.107037928175,7137.451616531202,7140.064118285052,7050.517566619298,6952.137151824904,7031.758963984825,6948.26658580362],\"WST\":[174.05349406938234,172.46940229431243,172.98728991029802,172.98723439925408,170.70663434909815,167.0630359113269,162.5158783448542,162.63264002443495,164.58654889046073,162.60079402951482,162.60079402951482,164.73373012378224,169.4697272610359,166.6826108867312,163.27352266565927,161.77155328746423,166.21372761791466,166.21351606918947,164.67274842941194,163.2399383326367,162.25562951483778,163.8576426386522,164.15899692248334,167.03278580844292,167.0285446484262,163.7466605169919,166.0728465762145,163.23237000675175,160.7937268041668,162.20515963604797,163.98217531267082],\"XAF\":[36880.67822965373,36519.169620090666,36316.43855962961,36412.860188262224,36460.453285218784,35479.21059938527,34553.32453971128,34384.92876327428,34814.43510009003,34727.618814662244,34727.618814662244,34768.12930195254,35557.33419100408,35069.525768600135,34558.610464958685,34286.80074604219,34685.68299181429,34685.68299181429,34800.66245179179,34364.656113641126,34277.52104767257,34561.04948788123,34727.096203453046,34782.973160759415,34782.973160759415,34734.20579377455,34982.63354267498,34862.941049565634,34534.86636165579,34538.95564552808,34404.71591889046],\"XAG\":[2.2584992740250134,2.3440762601678293,2.3198620377455548,2.3198620377455548,2.3078244960293217,2.2763868498215603,2.3998077185480495,2.354224190592547,2.344233563964891,2.361745845738353,2.361745845738353,2.332291621387004,2.2799191653538244,2.3384507578047136,2.2930050458155162,2.2992393820531785,2.3299447722084685,2.3299447722084685,2.3339761797897305,2.3337212178889493,2.3343237629810627,2.2850122444780245,2.289841602417773,2.294149482043533,2.294149482043533,2.2540479075973376,2.216898345497219,2.289226057936533,2.310223081053275,2.322932130662637,2.3138977349451824],\"XAU\":[0.032163414461627494,0.03211063370092917,0.03219640549143169,0.03219640549143169,0.03213109860785133,0.032157700221843555,0.03202482590103849,0.032159095907147224,0.03220946564640067,0.032159538951226564,0.032159538951226564,0.032143932739607105,0.032142838311416906,0.03220505481786323,0.03214394720766486,0.03196439732501688,0.032208293412211035,0.032208293412211035,0.03216828730347555,0.03215633668777931,0.03220478024627849,0.03212373854612095,0.03217749541844838,0.032126787126643734,0.032126787126643734,0.032069894865447056,0.03216374819149278,0.0321774491206636,0.032215838986592936,0.03219050445294666,0.032136739221296985],\"XCD\":[179.83668891811078,178.66373373758157,176.8579639828955,176.8579639828955,176.46794045397547,172.24572220943315,167.62399609330288,167.81859589492973,169.43001412243194,169.00751282127123,169.00751282127123,169.7261178291483,174.34633245024597,172.52809582001737,168.46405992155096,166.64751022409413,168.5862465710703,168.5862465710703,169.60811623830494,167.47114570170078,166.87706776066616,168.5955770636273,170.31553617335948,170.58963465646403,170.58963465646403,170.7188990955856,172.84430235218466,170.39288956049256,167.97696401376072,168.66212173873905,168.00661925698486],\"XDR\":[47.16086721538115,46.69898687972221,46.328629104587975,46.45164157798283,46.27334038645789,45.33089944314053,44.01585828730347,44.09526174709835,44.41786133041829,44.30707869208758,44.30707869208758,44.56018979519661,45.69090915024274,45.080122165064466,43.98607196797737,43.676707042729,44.18486005369257,44.18486005369257,44.46923898530688,43.85447624795036,43.72760879400701,44.089302803588076,44.629339369192685,44.701190402212006,44.701190402212006,44.50084233096486,45.053783660740116,44.283084152654084,43.87691989454394,44.124277848439064,43.95281960743337],\"XOF\":[36731.92613600103,36519.47702066939,36254.41423835899,36412.860188262224,36460.918852607785,35478.909560073946,34553.61771435103,34384.63812478925,34814.13985549883,34727.32430932771,34727.32430932771,34762.70191029932,35558.528950602835,35069.525768600135,34558.610464958685,34286.80079835707,34685.68299181429,34685.68299181429,34800.074413380054,34364.656113641126,34276.50529008263,34561.04954071633,34726.80438320676,34782.68094483426,34782.68094483426,34734.20579377455,34984.09232600713,34862.64703809665,34535.890688470885,34538.95564552808,34502.12263802527],\"XPF\":[6747.098311578947,6703.641449028068,6671.748249745683,6671.748249745683,6657.011232365366,6498.336181686654,6308.03309030833,6308.393987806963,6353.880048045848,6338.077925960197,6338.077925960197,6365.0073628299515,6518.287105022023,6443.126707281935,6289.5683770401565,6221.46816096518,6294.409028746423,6294.409028746423,6332.548718022054,6252.700996721216,6230.456717883162,6294.491866950454,6357.811337041443,6369.208071693406,6369.208071693406,6373.720512147702,6453.145081741311,6361.684276119988,6271.463639710961,6297.078241952224,6303.851028912002],\"YER\":[16662.292443323793,16553.954378041988,16383.213653782594,16383.213653782594,16347.050859451498,15959.368364910459,15527.810546019353,15545.837014367746,15692.139278866669,15653.063722255729,15653.063722255729,15719.185488002122,16150.535527087419,15982.077936067904,15605.619800777094,15437.33108690641,15616.961045383081,15616.961045383081,15711.5889906337,15513.640142627399,15458.617716186862,15617.797632796515,15777.127665637398,15802.543826262097,15802.543826262097,15814.484739772046,16011.392602209431,15784.324668375399,15560.516169116805,15623.981449993893,15566.577375020093],\"ZAR\":[1160.728990561682,1164.0033110992508,1154.2293130154646,1154.5515546255986,1160.0472866038644,1118.442705900074,1077.3033973632769,1082.935992864997,1093.9223344966724,1087.554654008295,1087.554654008295,1095.5276060907308,1122.4051482493649,1097.255266390059,1071.598603296145,1061.7268581181881,1070.2353138041346,1070.2353138041346,1064.316932977526,1039.6906905153844,1035.1885218583416,1056.496185994277,1053.1975803543066,1046.1067168517507,1046.1067168517507,1055.6676439137702,1065.667387187731,1060.9280467298975,1044.042382155419,1036.5890884178375,1030.8985991544223],\"ZMK\":[598969.7485490537,595063.2349736643,589049.0396844033,589049.0396844033,587750.2655084615,573686.9916537787,558294.154196487,558941.9125786438,564308.8496074182,562902.0710968325,562902.0710968325,565295.3119423396,580683.5754794072,574627.7335745292,561091.9937256216,555041.8402363213,561498.868708758,561498.868708758,564903.1045695655,557784.8490183783,555806.0615462277,561529.6790753985,567258.3541491843,568171.3899679825,568171.3899679825,568601.9756648007,575680.7390797872,567516.1008947921,559469.3971901061,561751.5676397113,559568.3676302045],\"ZMW\":[1222.162961299553,1210.1933388406262,1205.9815376471722,1209.219385818731,1201.9884876918622,1171.1097225785293,1139.2747538436806,1146.1532733781307,1162.0098549442175,1159.1121629167603,1159.1121629167603,1169.6985109031282,1206.7165177892807,1198.2434172157027,1177.3615539671414,1172.674967343986,1186.3175467028902,1186.3175467028902,1204.6633018088285,1195.7222063260776,1192.9009770170078,1202.8341862180496,1230.5582944719158,1232.5383035041637,1232.5383035041637,1232.3660437038227,1250.357710011896,1238.7414815445454,1217.3646487084848,1224.2334922734142,1219.4753570636271],\"ZWL\":[21426.970295412015,21287.21322020255,21072.060173709287,21072.060173709287,21025.5941422493,20522.527920794135,19971.864138204674,19995.015144483812,20187.039245266373,20136.699063616372,20136.699063616372,20222.313681791788,20772.803759788443,20556.1672215259,20071.950506511268,19855.50935793975,20086.50232586728,20086.50232586728,20208.265570606047,19953.64873006784,19882.862537494133,20087.617984053628,20292.547119771083,20325.19843369739,20325.19843369739,20340.606640673886,20593.84523010642,20301.76068195094,20013.91320442851,20095.54619456001,20017.442504308267]}}");

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

module.exports = require("/home/asouqi/side/gold_price/node_modules/react-static/lib/browser/hooks/useStaticInfo");

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