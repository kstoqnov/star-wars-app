import React from 'react';
import ReactDOM from 'react-dom';

import { MemoryRouter} from 'react-router-dom';

it("renders without crashing", () => {

    const div = document.createElement('div');
  
    ReactDOM.render(<>RenderWithRouter(ProtectedRoute, { <MemoryRouter initialEntries={['/']}/>}) </>, div);
   
    ReactDOM.unmountComponentAtNode(div);


});