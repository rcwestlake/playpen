import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../containers/AuthContainer'
import MessageInput from './MessageInput'

const CurrentUser = ({ user, signOut, addMessage }) => (
  <section>
    <img
      src={user.photoURL}
      height="100px"
      width="100px"
      alt="User"
    />
    <h3>{user.displayName}</h3>
    <button onClick={signOut}>Sign Out</button>
    <MessageInput addMessage={addMessage} user={user} />
  </section>
)

export default CurrentUser