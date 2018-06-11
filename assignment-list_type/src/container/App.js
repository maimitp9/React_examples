import React, { Component } from 'react';
import './App.css';
import ValidationComponent from '../component/ValidationComponent/ValidationComponent';
import CharComponent from '../component/CharComponent/CharComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      charText: ''
    }
  }

  changeTextHandler = (event) => {
    this.setState({charText: event.target.value});
  }

  deleteCharHandler = (index) => {
    console.log(index)
    let textArray = this.state.charText.split('');
    textArray.splice(index,1)
    this.setState({charText: textArray.join('')})
  }

  render() {
    const charTextArray = this.state.charText.split('')
    const chars = charTextArray.map((char,index) => {
      return <CharComponent char={char} click={() => this.deleteCharHandler(index)} key={index} />
    })
   
    return (
      <div className="App">
        <h1>Assignment regarding List</h1>
        {chars}<br />
        <input placeholder='Enter text here' 
               onChange={(event) => this.changeTextHandler(event)}
               value={this.state.charText} />
        <ValidationComponent textLength = {this.state.charText.length} />
      </div>
    );
  }
}

export default App;
