/*
 * @Description:
 * @Author: 仲灏<izhaong@outlook.com>
 * @Date: 2021-07-11 19:15:04
 * @LastEditors: 仲灏<izhaong@outlook.com>
 * @LastEditTime: 2021-07-11 23:27:07
 */
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
  onClick: () => jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "testClass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeFalsy();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    // fireEvent.click(element)
    // expect(defaultProps.onClick).toHaveBeenCalled()
  });

  it("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg testClass");
  });

  it("should render a link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        Link Baidu
      </Button>
    );
    const element = wrapper.getByText("Link Baidu");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
  });

  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledProps}>Disable</Button>);
    const element = wrapper.getByText("Disable") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  });
});
