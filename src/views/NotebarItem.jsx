import React, { Component } from 'react';
import { Icon } from 'antd';
import './NotebarItem.css';
class NotebarItem extends Component {
  state = {};
  formatActiveClass = (activeId, note) => {
    if (activeId === note.id) return 'notebar-item notebar-item-active';
    return 'notebar-item';
  };
  render() {
    const { note, activeId, handleActiveId } = this.props;
    return (
      <div
        className={this.formatActiveClass(activeId, note)}
        onClick={activeId => {
          handleActiveId(note.id);
        }}
      >
        <div className="left">
          <div className="title">{note.title}</div>
          <div className="date">19/2/14</div>
        </div>
        <div className="right">
          <Icon type="share-alt" />
          <Icon type="delete" />
        </div>
      </div>
    );
  }
}

export default NotebarItem;
