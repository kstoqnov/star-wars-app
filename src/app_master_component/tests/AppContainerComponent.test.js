import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter} from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';

it('renders without crashing', () => {

    const div = document.createElement('div');

    ReactDOM.render(<MockedProvider  addTypename={false}>

      <BrowserRouter>

        RenderWithThemeForTest(AppContainerComponent)
        
      </BrowserRouter>

    </MockedProvider>, div);

    ReactDOM.unmountComponentAtNode(div);
    
});
