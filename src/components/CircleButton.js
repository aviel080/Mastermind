import React from "react";
import Button from '@material-ui/core/Button';

const CircleButton = ({value, onClick}) => {
    return (
      <Button className={'circle button'} style={{backgroundColor:value, borderRadius:'50px', minWidth: 0, border: 'solid'}} onClick={onClick}/>
    );
  };

  export default CircleButton;