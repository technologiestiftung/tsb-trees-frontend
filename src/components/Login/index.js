import React, {useEffect} from 'react';
import styled from 'styled-components';
import Store from '../../state/Store';

import { fetchAPI, createAPIUrl } from '../../utils';
import { useAuth0 } from "../../utils/auth0";

import ButtonRound from '../ButtonRound/';

const Login = p => {
  const { width } = p;
  const { isAuthenticated, getTokenSilently, loginWithRedirect, logout, loading, user } = useAuth0();

  useEffect(() => {
    Store.setState({ user: user });
  }, [user])

  const handleClick = (type) => {
    if (type == 'login') {
      loginWithRedirect({})
    } else if (type == 'logout') {
      logout();
    }
  }


  return (
    <>
      { !isAuthenticated && (<ButtonRound width={width} toggle={() => handleClick('login')}>Registrieren / Einloggen</ButtonRound>)}
      { isAuthenticated && (<ButtonRound width={width} toggle={() => handleClick('logout')}>Ausloggen</ButtonRound>)}
    </>
  )
}

export default Login;