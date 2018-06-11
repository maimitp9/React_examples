import React from 'react';

const CharComponent = (props) => {
    return(
      <div>
        <span onClick={props.click}>{props.char} </span>
      </div>
    )
}

export default CharComponent;