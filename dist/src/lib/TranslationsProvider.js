"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TranslationsContext = void 0;

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TranslationsContext = /*#__PURE__*/(0, _react.createContext)({});
exports.TranslationsContext = TranslationsContext;

var TranslationsProvider = function TranslationsProvider(_ref) {
  var children = _ref.children,
      translations = _ref.translations;

  var _useState = (0, _react.useState)('es'),
      _useState2 = _slicedToArray(_useState, 2),
      language = _useState2[0],
      setLanguage = _useState2[1];

  var getText = function getText(tag, props) {
    var _translations$languag;

    var translationValue = translations === null || translations === void 0 ? void 0 : (_translations$languag = translations[language]) === null || _translations$languag === void 0 ? void 0 : _translations$languag[tag];
    if (!translationValue) return '¡¡¡MISSING_TRANSLATION!!!';
    if (typeof translationValue === 'string') return translationValue;
    return translationValue(props);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TranslationsContext.Provider, {
    value: {
      language: language,
      setLanguage: setLanguage,
      getText: getText
    },
    children: children
  });
};

var _default = TranslationsProvider;
exports.default = _default;

//# sourceMappingURL=TranslationsProvider.js.map