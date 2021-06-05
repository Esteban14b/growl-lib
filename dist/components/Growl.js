"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGrowl = useGrowl;
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./growl.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Growl = (_ref) => {
  let {
    active,
    message,
    onDismissed
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "growl".concat(active ? " active" : "")
  }, message, /*#__PURE__*/_react.default.createElement("div", {
    onClick: onDismissed,
    className: "growl-close"
  }));
};

function useGrowl() {
  let time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

  // state of the growl
  const [growlActive, setGrowlActive] = _react.default.useState(false);

  const timeout = time * 1000;
  setTimeout(() => {
    setGrowlActive(false);
  }, timeout);
  return [// the first arg is the state
  growlActive, // the second arg is a fn that allows you to safely set its state
  active => {
    setGrowlActive(active);
  }];
}

var _default = Growl;
exports.default = _default;