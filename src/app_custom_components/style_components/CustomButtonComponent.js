import React from 'react';

import { CustomButtonContainer } from '../css/custom-button.css';

const CustomButtonComponent = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButtonComponent;
