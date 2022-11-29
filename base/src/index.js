import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import "./store/store";

import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  runAfterFirstMounted,
} from "qiankun";
registerMicroApps(
  [
  {
    name: 'reactApp1',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/app-react1',
    props: {
      name: 'reactApp1Props',
      type: 'one',
    }
  },
  {
    name: 'reactApp2',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/app-react2',
    props: {
      name: 'reactApp2Props',
      type: 'two',
    }
  }
],
  {
    beforeLoad: (app) => console.log('before load', app.name),
    beforeMount: [(app) => console.log('before mount', app.name)],
    afterMount: [(app) => console.log('afterMount mount', app.name)],
    beforeUnmount: [(app) => console.log('beforeUnmount mount', app.name)],
    afterUnmount: [(app) => console.log('afterUnmount mount', app.name)],
  },
);
// 启动 qiankun
setDefaultMountApp('/app-react2');
runAfterFirstMounted(() => {
  console.log('第一个微应用 mount 后需要调用的方法');
});
start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
