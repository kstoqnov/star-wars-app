import React from 'react';
import NavLink from '../app_utils/NavLink';

const Header = () => {

    return (

        <header> 
        
            <nav>
                
                <NavLink to="/"  title="home">Home</NavLink> 
                <NavLink to="dashboard"  title="Dashboard">Dashboard</NavLink>

            </nav>

        </header>


    );

}

export default Header;