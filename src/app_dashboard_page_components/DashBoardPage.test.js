import React from 'react';
import ReactDOM from 'react-dom';
import DashBoardPage from './DashBoardPage';

it("renders without crashing",() => {

    const div = document.createElement('div');
    ReactDOM.render(<DashBoardPage />, div);
    ReactDOM.unmountComponentAtNode(div);

});
