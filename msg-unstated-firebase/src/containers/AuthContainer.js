import { Container } from 'unstated'
import { auth, googleAuthProvider, db } from '../fb/config'
import pick from 'lodash/pick'

class AuthContainer extends Container {
  constructor() {
    super()
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
    this.usersRef = db.collection('users')
  }

  state = {
    status: '',
    displayName: '',
    email: '',
    photoURL: '',
    uid: ''
  }

  signIn() {
    this.setState({ status: 'AWAITING_AUTH' })
    auth.signInWithPopup(googleAuthProvider).then(response => this.signedIn(response.user))
    //TODO: figure out how to make this a listener in index.js
  }

  signedIn(user) {
    this.setState({
      status: 'SIGNED_IN',
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid
    })

    this.usersRef.doc(this.state.uid).set({
      uid: this.state.uid,
      email: this.state.email,
      displayName: this.state.displayName,
      photoURL: this.state.photoURL
    })
  }

  signOut() {
    auth.signOut()
    this.signedOut()
  }

  signedOut() {
    this.setState({
      status: 'SIGNED_OUT'
    })
  }
}

export default AuthContainer

