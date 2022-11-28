import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import action from "./action";

function App() {
 const [baseData, setBaseData] = useState(null)
  useEffect(()=>{
    action.onGlobalStateChange((state) => {
      setBaseData(state)
    }, true);
  },[])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`子应用react中显示-主应用的数据：${JSON.stringify(baseData)}`}</p>
        <p
          onClick={()=>{
            console.log(111);
            action.setGlobalState({user: {
                name:'wjm',
                age: 9999
              }})
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
