import app from "firebase/app"
import "firebase/auth"

import config from "../../../firebaseConfig"

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }

  // ** Auth API **

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.doPasswordUpdate(password)

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) next(authUser)
      else fallback()
    })
}
let firebase

const getFirebase = () => {
  if (!firebase) {
    firebase = new Firebase()
  }

  return firebase
}

export default getFirebase
