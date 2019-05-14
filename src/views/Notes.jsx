import React, { Component } from 'react';
import Notebar from './Notebar';
import { Icon, Button } from 'antd';
import Dropdown from '../common/Dropdown';
import './Notes.css';
import NoteContent from './NoteContent';
const dataSource = [
  {
    id: '1',
    title: '哪本入门级的学习数据库的书最值得推荐？ - 知乎',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    id: '2',
    title: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  },
  {
    id: '3',
    title: 'React 加载本地图片',
    age: 42,
    address: '西湖区湖底公园1号'
  }
];
class Notes extends Component {
  state = {
    notes: dataSource
  };
  handleChange = value => {
    console.log(`selected ${value}`);
  };
  render() {
    return (
      <div className="notes" style={{ display: 'flex', height: '100vh' }}>
        <div className="left" style={{ width: '350px' }}>
          <Notebar notes={this.state.notes} />
        </div>
        <div
          className="right"
          style={{ flexGrow: 1, borderLeft: '1px solid #ececec' }}
        >
          <NoteContent />
        </div>
      </div>
    );
  }
}

export default Notes;
