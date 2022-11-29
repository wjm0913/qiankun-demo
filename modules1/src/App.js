import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import action from "./action";
import {Routes, Route, NavLink} from "react-router-dom";

const RouteExample = () => {
  return (
    <>
      <NavLink exact to="/home" className='app-mian-link'>home</NavLink>
      <br/>
      <NavLink exact to="/about" className='app-mian-link'>About</NavLink>
      <div>
        121
      </div>
      <br/>
      <Routes>
        <Route path="/home" element={<div>home</div>}/>
        <Route path="/about" element={<div>about</div>}/>
      </Routes>
    </>

  );
};


function App() {
  const [baseData, setBaseData] = useState(null)
  useEffect(() => {
    action.onGlobalStateChange((state) => {
      setBaseData(state)
    }, true);
  }, [])


  return (
    <div className="App">
      <RouteExample/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>{`子应用react中显示-主应用的数据：${JSON.stringify(baseData)}`}</p>
        <p
          onClick={() => {
            console.log(111);
            action.setGlobalState({
              user: {
                name: 'wjm',
                age: 9999
              }
            })
          }}
        >修改主主应用数据</p>
        <p>
          我是微应用 1222
        </p>
      </header>

    </div>
  );
}

export default App;
