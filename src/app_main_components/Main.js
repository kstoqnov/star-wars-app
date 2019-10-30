import React from 'react';
import {Router} from '@reach/router';
import HomePage from '../app_home_page_components/HomePage';
import DashboardPage from '../app_dashboard_page_components/DashBoardPage';


const Main = () => {

    return(

        <main>

            <Router>
            
                <HomePage path="/" />
                <DashboardPage path="dashboard" />

            </Router>


        </main>
       
    );


}

export default Main;