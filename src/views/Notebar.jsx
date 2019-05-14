import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import NotebarItem from './NotebarItem';

class Notebar extends Component {
  state = {
    activeId: this.props.notes[0] ? this.props.notes[0].id : null
  };
  handleActiveId = activeId => {
    this.setState({ activeId });
  };
  render() {
    const { notes } = this.props;
    return (
      <div className="notebar" style={{ padding: '10px 0px' }}>
        <div
          className="notebar-title"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px'
          }}
        >
          <span style={{ fontSize: '18px', color: '#ababab', fontWeight: 300 }}>
            笔记
          </span>
          <Button type="primary">
            <Icon type="scissor" />
            网页剪切
          </Button>
        </div>
        <div
          className="note-count"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #ececec',
            padding: '10px 20px'
          }}
        >
          <span style={{ fontSize: '14px', color: '#ababab' }}>10条笔记</span>
        </div>
        <div className="note-list">
          {notes.map(note => (
            <NotebarItem
              key={note.id}
              note={note}
              activeId={this.state.activeId}
              handleActiveId={this.handleActiveId}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Notebar;
