import React from "react";

const Circle = ({ value, result }) => {
  const name = result ? ' result' : '';
    return (
      <span className={'circle' + name} style={{backgroundColor:value}}/>
    );
  };

  export default Circle;