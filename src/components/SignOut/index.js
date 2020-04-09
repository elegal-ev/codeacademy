import React from "react"

import { withFirebase } from "../Firebase"

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Log out
  </button>
)

export default withFirebase(SignOutButton)
