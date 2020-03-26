import React, { Component } from 'react';

export default class extends Component {
  state = {
    name: '',
    userData: [
      {
        name: 'George',
        age: 34,
      },
      {
        name: 'Tilly',
        age: 36
      }
    ]
  }

  handleTextChange = (e) => {
    const { value } = e.target;
    this.setState({name: value});
  }
  handleTextCheck = (e) => {
    const { value } = e.target;
    if (value === '') return alert('內容不得為空');
    if (value.length < 3) return alert('內容過短');
  }


  render() {
    return (
      <div>
        <h2>textHere: {this.state.name}</h2>
        <input 
          type="text" 
          name="name" 
          value={this.state.name} 
          onChange={this.handleTextChange}
          onBlur={this.handleTextCheck}
        />
        <ul>
          {
            this.state.userData.forEach((item, idx)=> {
              return (
                <li key={idx}>
                  <div>姓名:{item.name}</div>
                  <span>年齡:{item.age}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}