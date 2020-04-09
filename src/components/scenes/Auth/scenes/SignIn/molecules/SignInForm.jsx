import React, { Component } from 'react';

import { navigate } from 'gatsby';

import { withFirebase } from '../../../../../utils/Firebase';
import { LESSON } from '../../../../../constants/routes';
import Button from '../../../../../atoms/Button';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.initialRequest();
    }
  };

  initialRequest = () => {};

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        navigate(`${LESSON}/intro`);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="group">
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>

          <div className="group group__password">
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>
          <Button type="submit" text="Log in" disabled={isInvalid} />

          {error && <p>{error.message}</p>}
        </form>
      </>
    );
  }
}

export default withFirebase(SignInForm);
