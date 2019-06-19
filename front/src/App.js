import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  state = {
    array: [],
    sortedArray: []
  }

  onClickButton = async () => {
    const req = await fetch('http://localhost:3001/',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ array: this.state.array })
      });
    const response = await req.json();
    this.setState({ sortedArray: response.join('\n') });
  }

  onTextAreaBlur = event => {
    const list = event.target.value;
    const arrayFromList = list.split('\n').map(x => parseInt(x));
    this.setState({ array: arrayFromList });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Insert a unordened list down below.
            <br/><small>(one element per line)</small>
          </p>
          <textarea
            style={{
              width: 400,
              height: 150,
              marginBottom: 20,
              resize: 'none'
            }}
            onBlur={this.onTextAreaBlur}
          />
          <button
            style={{
              width: 405,
              height: 50,
              background: '#61dafb',
              color: '#282c34',
              border: 'none',
              textTransform: 'uppercase',
              font: 'inherit'
            }}
            onClick={this.onClickButton}
          >
            Bubble sort it!
          </button>
          <p>The resulting sorted list is down below.</p>
          <textarea
            style={{
              width: 400,
              height: 150,
              marginBottom: 20,
              resize: 'none'
            }}
            value={this.state.sortedArray}
            readOnly
          />
        </header>
      </div>
    )
  }
}
