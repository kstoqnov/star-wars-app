import React from 'react';

import { InputStyle } from '../css/form-input.css';

const FormInputComponent = ({ handleChange, ...otherProps }) => (
    <InputStyle
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
);

export default FormInputComponent;
