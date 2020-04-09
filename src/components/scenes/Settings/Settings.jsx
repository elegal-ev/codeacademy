import React, { Component } from 'react';
import { AuthUserContext } from '../../../utils/Session';
import PasswordForget from '../../molecules/PasswordForget/PasswordForget';
import PasswordChange from '../../molecules/PasswordChange/PasswordChange';

class Account extends Component {
  render() {
    return (
      <div className="settings container">
        <AuthUserContext.Consumer>
          {(authUser) => (
            <div>
              <h1>Account: {authUser.email}</h1>
              <PasswordForget className="settings__password-forget" />
              <PasswordChange className="settings__password-change" />
            </div>
          )}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

export default Account;
