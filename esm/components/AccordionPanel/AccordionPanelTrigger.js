var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { AccordionPanelContext } from './AccordionPanel';
import { AccordionPanelItemContext } from './AccordionPanelItem';
import { Icon as IconComponent } from '../Icon';
import { getIsInclude, mapToKeyArray } from '../../libs/map';
import { isTouchDevice } from '../../libs/ua';
import { withTheme } from '../../hocs/withTheme';
import { getNewExpandedItems } from './accordionPanelHelper';
var AccordionPanelTriggerComponent = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, theme = _a.theme;
    var name = useContext(AccordionPanelItemContext).name;
    var _c = useContext(AccordionPanelContext), iconPosition = _c.iconPosition, displayIcon = _c.displayIcon, expandedItems = _c.expandedItems, onClickTrigger = _c.onClickTrigger, onClickProps = _c.onClickProps, expandableMultiply = _c.expandableMultiply;
    var isExpanded = getIsInclude(expandedItems, name);
    var expandedClassName = isExpanded ? 'expanded' : '';
    var buttonClassNames = className + " " + expandedClassName + " " + iconPosition;
    var iconClassNames = expandedClassName + " " + iconPosition;
    var caretIcon = React.createElement(Icon, { className: iconClassNames, name: "fa-caret-down", theme: theme });
    var handleClick = useCallback(function () {
        onClickTrigger(name, !isExpanded);
        if (onClickProps) {
            var newExpandedItems = getNewExpandedItems(expandedItems, name, !isExpanded, expandableMultiply);
            onClickProps(mapToKeyArray(newExpandedItems));
        }
    }, [onClickTrigger, name, isExpanded, onClickProps, expandedItems, expandableMultiply]);
    return (React.createElement(Button, { id: name + "-trigger", className: buttonClassNames, "aria-expanded": !!isExpanded, "aria-controls": name + "-content", onClick: handleClick, theme: theme },
        displayIcon && iconPosition === 'left' && caretIcon,
        children,
        displayIcon && iconPosition === 'right' && caretIcon));
};
export var AccordionPanelTrigger = withTheme(AccordionPanelTriggerComponent);
var resetButtonStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n  appearance: none;\n"], ["\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n  appearance: none;\n"])));
var Button = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ",
    "\n"])), resetButtonStyle, function (_a) {
    var theme = _a.theme;
    var size = theme.size, palette = theme.palette, interaction = theme.interaction;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: 40px;\n      padding: 0 ", ";\n      color: ", ";\n      font-size: ", ";\n      text-align: left;\n      cursor: pointer;\n      transition: ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n      &.right {\n        justify-content: space-between;\n      }\n      &.left {\n        justify-content: left;\n      }\n    "], ["\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: 40px;\n      padding: 0 ", ";\n      color: ", ";\n      font-size: ", ";\n      text-align: left;\n      cursor: pointer;\n      transition: ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n      &.right {\n        justify-content: space-between;\n      }\n      &.left {\n        justify-content: left;\n      }\n    "])), size.pxToRem(size.space.XS), palette.TEXT_BLACK, size.pxToRem(size.font.TALL), isTouchDevice ? 'none' : "all " + interaction.hover.animation, palette.hoverColor('#fff'));
});
var Icon = styled(IconComponent)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      display: inline-flex;\n      margin-right: ", ";\n      transition: transform 0.3s;\n\n      &.expanded {\n        transform: rotate(180deg);\n      }\n\n      &.right {\n        margin-right: 0;\n        margin-left: ", ";\n      }\n    "], ["\n      display: inline-flex;\n      margin-right: ", ";\n      transition: transform 0.3s;\n\n      &.expanded {\n        transform: rotate(180deg);\n      }\n\n      &.right {\n        margin-right: 0;\n        margin-left: ", ";\n      }\n    "])), size.pxToRem(size.space.XXS), size.pxToRem(size.space.XXS));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=AccordionPanelTrigger.js.map