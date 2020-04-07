import React, { useContext, useState, useEffect } from "react"

import AuthUserContext from "./context"
import { FirebaseContext } from "../Firebase"

const withAuthentication = ({ children }) => {
  let _initFirebase = false
  const [authUser, setAuthUser] = useState(null)
  const firebase = useContext(FirebaseContext)

  const firebaseInit = () => {
    if (firebase && !_initFirebase) {
      _initFirebase = true

      firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser))
        },
        () => {
          localStorage.removeItem("authUser")
          setAuthUser(authUser)
        }
      )
    }
  }

  useEffect(() => {
    setAuthUser(JSON.parse(localStorage.getItem("authUser")))
    firebaseInit()
  }, [])

  return (
    <AuthUserContext.Provider value={authUser}>
      {children}
    </AuthUserContext.Provider>
  )
}

export default withAuthentication
