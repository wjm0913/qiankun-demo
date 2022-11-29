import {useEffect, useState} from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './App.css';
import baseAction from "./store/baseAction";



const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  const [baseData, setBaseData] = useState(null)
  useEffect(()=>{
    baseAction.onGlobalStateChange((state) => {
      console.log(state,'-=-=-343434343=-=-=');
      setBaseData(state)
    }, true);
  },[])


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
          <Menu.Item key="0" icon={<PieChartOutlined />}>
            <Link to="/">主应用页面</Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/app-react1">React应用1</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/app-react2">React应用2</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
          <span>{`基座中显示-主应用的数据：${JSON.stringify(baseData)}`}</span>
          <button
            onClick={()=>{
              baseAction.setGlobalState({
                user: {
                  name:'wjm',
                  age: 18
                }
              })
            }}
          >
            主应用初始化数据回来
          </button>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div id="container" className="site-layout-background" style={{ minHeight: 360 }}>
            123212
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>This Project ©2021 Created by DiDi</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
