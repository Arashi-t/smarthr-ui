"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var DialogContentInner_1 = require("./DialogContentInner");
var MessageDialogContentInner_1 = require("./MessageDialogContentInner");
exports.MessageDialog = function (_a) {
    var isOpen = _a.isOpen, title = _a.title, description = _a.description, closeText = _a.closeText, onClickClose = _a.onClickClose, props = __rest(_a, ["isOpen", "title", "description", "closeText", "onClickClose"]);
    var element = react_1.useRef(document.createElement('div')).current;
    react_1.useEffect(function () {
        document.body.appendChild(element);
        return function () {
            document.body.removeChild(element);
        };
    }, [element]);
    if (!isOpen)
        return null;
    return react_dom_1.createPortal(react_1.default.createElement(DialogContentInner_1.DialogContentInner, __assign({ onClickOverlay: onClickClose }, props),
        react_1.default.createElement(MessageDialogContentInner_1.MessageDialogContentInner, { title: title, description: description, closeText: closeText, onClickClose: onClickClose })), element);
};
//# sourceMappingURL=MessageDialog.js.map