import React from 'react';
import Header from '../app_header_components/Header';
import Main from '../app_main_components/Main';
import Footer from '../app_footer_components/Footer';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { lightTheme, darkTheme } from '../app_utils/theme';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const GET_THEME = gql`
  query GetTheme {
    theme @client
  }
`;

const App = () => {

  const {data: {theme}} = useQuery(GET_THEME);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const { data } = useQuery(IS_LOGGED_IN);
  
  return (
    <>
      <Header/>
      <Main/>     
      <Footer/>
   </>
  );
}



export default App;
