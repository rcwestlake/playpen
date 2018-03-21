import React from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../containers/AuthContainer'

const SignIn = ({ signIn }) => (
  <Subscribe to={[AuthContainer]}>
    {authState => (
      <section>
        <button onClick={signIn}>Sign In</button>
      </section>
    )}
  </Subscribe>
)

export default SignIn