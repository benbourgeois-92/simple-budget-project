import React, {useContext} from 'react';
import GlobalContext from './../user-context';
import {Redirect, Route} from 'react-router-dom';



const AuthRoute = ({ children, ...rest }) => {

    const user = useContext(GlobalContext);

    return (
      <Route
        {...rest}
        render={
            ({ location }) => user.isAuthenticated ? (children) : (<Redirect to="/"/>)
        }
      />
    );
  }

export default AuthRoute;