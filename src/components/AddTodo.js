import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form style={{ display: 'flex' }}>
          <input 
            type="text" 
            name="title" 
            style={{ flex: '10' }}
            placeholder="Add Todo..."
          />
          <input 
            type="submit" 
            value="submit"
            className="btn"
            style={{flex: '1'}}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;