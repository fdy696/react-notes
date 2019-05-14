import React, { Component } from 'react';
import { Drawer, Icon, Tooltip } from 'antd';
import addUrl from '../images/add.jpg';
class NotebooksDrawer extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="notebooks-drawer">
        <Drawer
          // title="Basic Drawer"
          placement="left"
          closable={false}
          visible={this.props.visible}
          style={{
            marginLeft: this.props.visible ? 80 : 0,
            borderLeft: 'none',
            background: '#f8f8f8',
            boxShadow: 'none'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 18,
              color: '#878787'
            }}
          >
            <span style={{ fontWeight: 200 }}>笔记本</span>
            <Tooltip title="新建笔记本" placement="bottom">
              <img
                src={addUrl}
                alt=""
                style={{ width: 23, height: 21, cursor: 'pointer' }}
              />
            </Tooltip>
          </div>
          <br />
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}
export default NotebooksDrawer;
