import React from 'react';
import ReactDOM from 'react-dom';
import AppContainerComponent from '../container_components/AppContainerComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainerComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
