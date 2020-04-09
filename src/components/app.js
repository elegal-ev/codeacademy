import React, { Component } from "react"
import { withFirebase } from "./Firebase"
import Navigation from "./Navigation"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({ authUser }) : this.setState({ authUser: null })
    })
  }

  //componentWillUnmount() {
    //this.listener()
  //}

  render() {
    return (
      <>
        <Navigation authUser={this.state.authUser} />
        <main>{this.props.children}</main>
      </>
    )
  }
}

export default withFirebase(App)
