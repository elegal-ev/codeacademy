import React from 'react'
// using context api
const FirebaseContext = React.createContext(null)

// using higher order component
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export default FirebaseContext
