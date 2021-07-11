/*
 * @Description:
 * @Author: 仲灏<izhaong@outlook.com>
 * @Date: 2021-07-09 11:19:53
 * @LastEditors: 仲灏<izhaong@outlook.com>
 * @LastEditTime: 2021-07-11 19:35:34
 */
import React from "react";
import "./App.css";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          btnType={ButtonType.Default}
          autoFocus
          className="custom"
          size={ButtonSize.Small}
        >
          test
        </Button>
        <Button btnType={ButtonType.Primary}>Nice</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
          hello
        </Button>
        <Button
          btnType={ButtonType.Link}
          disabled
          href="https://www.baidu.com"
          target="_blank"
        >
          link test
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="https://www.baidu.com"
          target="_blank"
        >
          link test
        </Button>
     
      </header>
    </div>
  );
}

export default App;
