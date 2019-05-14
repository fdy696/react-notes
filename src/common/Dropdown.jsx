import React, { Component, Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'antd';

class DropDown extends Component {
  state = {};
  handleButtonClick = e => {
    console.log('click left button', e);
  };

  handleMenuClick = () => {
    console.log('click', e);
  };
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">共享笔记</Menu.Item>
        <Menu.Item key="2">发送邮件</Menu.Item>
      </Menu>
    );

    return (
      <Fragment>
        <Dropdown.Button
          overlay={menu}
          icon={<Icon type="down" />}
          style={{ marginRight: 8 }}
        >
          共享
        </Dropdown.Button>
      </Fragment>
    );
  }
}

export default DropDown;
