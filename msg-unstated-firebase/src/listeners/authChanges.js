import { auth } from '../fb/config'
import AuthContainer from '../containers/AuthContainer'

const authContainer = new AuthContainer()

export const startListeningToAuthChanges = () => {
  auth.onAuthStateChanged((user) => {
    if(user) {
      authContainer.signedIn(user)
    } else {
      authContainer.signedOut()
    }
  })
}