import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../containers/AuthContainer'
import MessagesContainer from '../containers/MessagesContainer'
import SignIn from './SignIn'
import Loading from '../components/Loading'
import CurrentUser from '../components/CurrentUser'
import Messages from '../components/Messages'

class App extends Component {
  componentDidMount() {
    console.log('counted')
  }

  render() {
    return (
      <Subscribe to={[AuthContainer, MessagesContainer]}>
        {(authState, messageState) => (
          <section>
            {authState.state.status}
            {authState.state.status === '' && <SignIn signIn={authState.signIn} />}
            {authState.state.status === 'SIGNED_OUT' && <SignIn signIn={authState.signIn} />}
            {authState.state.status === 'SIGNED_IN' && <CurrentUser
                                                          user={authState.state}
                                                          signOut={authState.signOut}
                                                          addMessage={messageState.addMessage} />}
            {authState.state.status === 'AWAITING_AUTH' && <Loading />}
            <Messages messages={messageState.state.messages} />
          </section>
        )}
      </Subscribe>
    )
  }
}

export default App;
