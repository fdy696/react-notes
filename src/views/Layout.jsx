import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import logoUrl from './../images/logo.png';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './Layout.css';
import Notebooks from './Notebooks';
import NotFind from './NotFind';
import Notes from './Notes';
import Trash from './Trash';

const { Sider, Content } = Layout;

class LayoutPage extends Component {
  state = {
    collapsed: true
  };
  onRoutes = ({ location }) => {
    return [location.pathname];
  };

  toggle = () => {
    this.setState({
      collapsed: true
    });
  };

  render() {
    console.log(this.props);
    return (
      <Layout>
        <Sider
          style={{
            background: '#f8f8f8',
            borderRight: '1px solid #ececec',
            position: 'relative'
          }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div
            className="logo"
            style={{ textAlign: 'center', height: '60px', lineHeight: '60px' }}
          >
            <img src={logoUrl} alt="" />
          </div>
          <Menu
            style={{ background: '#f8f8f8' }}
            mode="inline"
            defaultSelectedKeys={this.onRoutes(this.props)}
          >
            <Menu.Item key="/notes">
              <NavLink to="/notes">
                <Icon type="file-done" />
                <span>笔记</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/notebooks">
              <NavLink to="/notebooks">
                <Icon type="book" />
                <span>笔记本</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
          <div
            style={{
              position: 'fixed',
              bottom: '30px',
              paddingLeft: '20px',
              paddingTop: '30px',
              borderTop: '1px solid #ddd',
              width: '80px'
            }}
          >
            <Avatar
              src="https://app.yinxiang.com/shard/s69/user/16779965/photo?size=36"
              size="large"
            />
          </div>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', paddingLeft: '16px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header> */}
          <Content
            style={{
              margin: '0',
              background: '#fff',
              minHeight: '100vh'
            }}
          >
            <Switch>
              <Route path="/notebooks" component={Notebooks} />
              <Route path="/notes" component={Notes} />
              <Route path="/trash" component={Trash} />
              <Route path="/404" component={NotFind} />
              <Redirect from="/" to="/notebooks" exact />
              <Redirect to="404" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutPage;
