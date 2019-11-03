import React from 'react';
import ReactDOM from 'react-dom';
import HeaderPageComponent from '../style_components/HeaderPageComponent';

it("renders without crashing", () => {


    const div = document.createElement('div');
    ReactDOM.render(<HeaderPageComponent />, div);
    ReactDOM.unmountComponentAtNode(div);



});