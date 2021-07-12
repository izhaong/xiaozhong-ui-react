/*
 * @Description:
 * @Author: 仲灏<izhaong@outlook.com>
 * @Date: 2021-07-12 16:03:10
 * @LastEditors: 仲灏<izhaong@outlook.com>
 * @LastEditTime: 2021-07-12 17:02:19
 */
import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical",
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem disabled index={1}>
        disabled
      </MenuItem>
      <MenuItem index={2}>normal</MenuItem>
    </Menu>
  );
};

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('is-active');
    expect(disabledElement).toHaveClass('is-disabled'); 
  });

  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("normal");
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
  });

  it("should render vertical mode when mode is set to vertical", () => {});
});
