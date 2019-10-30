import React from 'react';
import ReactDOM from 'react-dom';
import NavLink from './NavLink';

it("renders without crashing",() => {


    const nav = document.createElement('nav');
    ReactDOM.render(<NavLink />, nav);
    ReactDOM.unmountComponentAtNode(nav);

});
