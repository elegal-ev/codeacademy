import React, { Component } from 'react';

import SignInForm from '../../molecules/SignInForm';
import PasswordForgetLink from '../../../../molecules/PasswordForget/atoms/PasswordForgetLink';

class SignIn extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__content">
          <div className="login__content__inner">
            <div className="login__content__header">
              <div className="login__content__header__title">
                Anmeldung
              </div>
            </div>
            <div className="login__content__login-form">
              <div className="login__content__form">
                <SignInForm />
              </div>
              <div className="login__content__password-forget">
                <PasswordForgetLink />
              </div>
            </div>
          </div>
        </div>
        <div className="login__image" />
      </div>
    );
  }
}

export default SignIn;
