/*
 * @Description:
 * @Author: 仲灏<izhaong@outlook.com>
 * @Date: 2021-07-12 13:42:03
 * @LastEditors: 仲灏<izhaong@outlook.com>
 * @LastEditTime: 2021-07-12 17:39:15
 */
import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({ index: 0 });
const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
  });
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };
  const RenderResultChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      console.log(displayName)
      if (displayName === "MenuItem") {
        return child;
      } else {
        console.error(
          "warining: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {RenderResultChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "vertical",
};

export default Menu;
