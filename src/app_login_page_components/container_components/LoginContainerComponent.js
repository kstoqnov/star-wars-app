import React from 'react';
import LoginPageComponent from '../style_components/LoginPageComponent';
import SpinnerComponent from '../../app_custom_components/style_components/SpinnerComponent';

import { useMutation, useApolloClient } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { AUTH_TOKEN } from '../../app_utils/js/constants';
import { SIGN_IN_MUTATION } from '../../app_utils/js/signInMutation';

const LoginContainerComponent = ({ history }) => {

  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGN_IN_MUTATION, {
    onCompleted(data) {
      confirm(data);
    },
  });

  const confirm = async data => {
    saveUserData(data.signIn.token);
    client.writeData({ data: { isLoggedIn: true } });
    history.push(`/episodes`);
  };

  const saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  if (loading) return <SpinnerComponent/>;

  return <LoginPageComponent signIn={signIn} error={error}/>;

}

export default withRouter(LoginContainerComponent);