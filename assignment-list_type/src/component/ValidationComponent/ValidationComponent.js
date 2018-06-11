import React, { Component } from 'react';
// import App from '../../container/App';

class ValidationComponent extends Component {
  render(){
    let message = null;
    if ( this.props.textLength <= 5 ){
      message = <h4>Text too short</h4>
    }
    else {
      message = <h4>Text long enough</h4>
    }

    return(
      <div>{message}</div>
      
    )
  }
}

export default ValidationComponent;