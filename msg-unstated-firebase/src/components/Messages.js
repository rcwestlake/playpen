import React from 'react'
import { Subscribe } from 'unstated'
import MessagesContainer from '../containers/MessagesContainer'
import Message from './Message'
import map from 'lodash/map'

const Messages = ({ user }) => (
  <Subscribe to={[MessagesContainer]}>
    {messagesState => (
      <section>
        {map(messagesState.state.messages, (message, key) => <Message
                                            key={key}
                                            {...message}
                                            user={user}
                                            deleteMessage={messagesState.deleteMessage}
                                            fromAuthor={user.uid === message.author} />)}
      </section>
    )}
  </Subscribe>
)

export default Messages