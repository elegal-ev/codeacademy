import React from "react"
import PropTypes from "prop-types"

import { Copyright } from "./PageContent"
import "./layout.css"

import getFirebase, { FirebaseContext } from "./Firebase/"
import withAuthentication from './Session/withAuthentication'

const AppWithAuthentication = withAuthentication(
  ({children}) => (
    <>
      {children}
    </>
  )
)

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firebase: getFirebase()}
  }

  componentDidMount() {
      const firebase = 
      this.setState({ firebase })
    console.log(this.state.firebase)
  }
  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <AppWithAuthentication {...this.props} />
        <footer>
          <Copyright />
        </footer>
      </FirebaseContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
