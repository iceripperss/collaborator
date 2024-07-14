import { jsx as _jsx } from "react/jsx-runtime";
import Logo from "./logoIcon.svg";
import classes from "./Header.module.scss";
var HomeLink = "/";
export var Header = function () {
    return (_jsx("header", { children: _jsx("nav", { className: classes.navigation, children: _jsx("a", { "aria-label": "homeLink", href: HomeLink, children: _jsx(Logo, {}) }) }) }));
};
//# sourceMappingURL=Header.js.map