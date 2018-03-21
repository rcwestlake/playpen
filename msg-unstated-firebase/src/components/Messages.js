import React from 'react'
import { Subscribe } from 'unstated'
import MessagesContainer from '../containers/MessagesContainer'
import Message from './Message'
import map from 'lodash/map'

const Messages = ({ user, messages, deleteMessage }) => (
  <Subscribe to={[MessagesContainer]}>
    {messagesState => (
      <section>
        {map(messages, (message, key) => <Message
                                            key={key}
                                            {...message}
                                            user={user}
                                            deleteMessage={deleteMessage}
                                            fromAuthor={user.uid === message.author} />)}
      </section>
    )}
  </Subscribe>
)

export default Messages