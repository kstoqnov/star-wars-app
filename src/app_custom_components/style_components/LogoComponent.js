import React from 'react';

import { LogoStyle } from '../css/logo.css';

const LogoComponent = ({asTitle, onClick}) => {
  return <LogoStyle asTitle={asTitle} onClick={onClick}>SWAPP</LogoStyle>
}

export default LogoComponent;