import React from 'react';

import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';


export function RenderWithRouter(children, historyConf = {}) {

    const history = createMemoryHistory(historyConf)

    return <Router history={history}>{children}</Router>

}