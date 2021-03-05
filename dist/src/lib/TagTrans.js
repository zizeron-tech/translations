"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _TranslationsProvider = require("./TranslationsProvider");

var _jsxRuntime = require("react/jsx-runtime");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TagTrans = function TagTrans(_ref) {
  var tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ["tag"]);

  var _useContext = (0, _react.useContext)(_TranslationsProvider.TranslationsContext),
      getText = _useContext.getText;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: getText(tag, props)
  });
};

var _default = TagTrans;
exports.default = _default;

//# sourceMappingURL=TagTrans.js.map