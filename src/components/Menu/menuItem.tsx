/*
 * @Description:
 * @Author: 仲灏<izhaong@outlook.com>
 * @Date: 2021-07-12 13:52:24
 * @LastEditors: 仲灏<izhaong@outlook.com>
 * @LastEditTime: 2021-07-12 17:40:22
 */
import React , { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContext)
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    'is-active': context.index === index
  });
  const handleClick = () => {
    if(context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  index: 0,
  disabled: false
}
MenuItem.displayName = 'MenuItem'
export default MenuItem