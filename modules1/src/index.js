import "./public-path"; // 注意：先引入public-path
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import action from "./action";

let root = null;
function render(props) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );

  root.render(
    <React.StrictMode>
      <App store={{...props}}/>
    </React.StrictMode>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react18----微1] react app bootstraped");
}

export async function mount(props) {
  console.log("[react18----微1] props from main framework", props);
  action.setActions(props)
  render(props);
}

export async function unmount(props) {
  // const { container } = props;
  // const root = ReactDOM.createRoot(
  //   container
  //     ? container.querySelector("#root")
  //     : document.getElementById("root")
  // );
  root.unmount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
