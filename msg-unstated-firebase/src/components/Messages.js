import React from 'react'
import { Subscribe } from 'unstated'
import MessagesContainer from '../containers/MessagesContainer'
import map from 'lodash/map'

const Messages = ({ messages }) => (
  <Subscribe to={[MessagesContainer]}>
    {messagesState => (
      <section>
        {map(messages, (message, key) => <p key={key}>{message.content}</p>)}
      </section>
    )}
  </Subscribe>
)

export default Messages