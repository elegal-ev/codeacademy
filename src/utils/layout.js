import React, { Component, Fragment } from 'react';

import Navigation from '../components/molecules/Navigation/Navigation';
import getFirebase, { FirebaseContext } from './Firebase';
import withAuthentication from './Session/withAuthentication';
import SEO from './SEO';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss';
import Typography from '@material-ui/core/Typography'

class Layout extends Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0]);

      this.setState({ firebase });
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,600,700,900"
          rel="stylesheet"
        />
        <AppWithAuthentication {...this.props} />
      </FirebaseContext.Provider>
    );
  }
}
const Copyright = () =>
  (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' eLegal Göttingen e.V. - Lars Quentin, Julia Held, Sören Metje u. Valerius Mattfeld'}
      {'.'}
    </Typography>
  );
const AppWithAuthentication = withAuthentication(
  ({ hideNav, seo, children }) => (
    <Fragment>
      <SEO {...seo} />
      {!hideNav && <Navigation />}
      {children}
      <footer>
        <Copyright />
      </footer>
    </Fragment>
  ),
);

export default Layout;
