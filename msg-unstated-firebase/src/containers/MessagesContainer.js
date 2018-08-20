import { Container } from 'unstated'
import { db } from '../fb/config'
import pick from 'lodash/pick'
import clone from 'lodash/clone'
import filter from 'lodash/filter'

class MessagesContainer extends Container {
  constructor() {
    super()
    this.messageRef = db.collection('messages')
    this.addMessage = this.addMessage.bind(this)
    this.removeMessage = this.removeMessage.bind(this)
    this.deleteMessage = this.deleteMessage.bind(this)
    this.startListeningForMessages = this.startListeningForMessages.bind(this)
  }

  state = {
    messages: [{ content: 'blah'}, { content: 'yes'}]
  }

  createMessage(msgData, key) {
    this.setState({ messages: [...this.state.messages, { timeStamp: msgData.timeStamp, content: msgData.content, author: msgData.author, uid: key }]})
    console.log(this.state.messages)
  }

  addMessage(message, authorId) {
    this.messageRef.add({ timeStamp: Date.now(),
                          content: message,
                          author: authorId
    })
    .then(newMessageRef => {
      this.messageRef.doc(newMessageRef.id).get()
      .then(msg => this.createMessage(msg.data(), newMessageRef.id))
      .catch(console.error)
    })
  }

  removeMessage(key) {
    this.setState({ messages: filter(this.state.messsages, (message) => message.uid !== key)})
  }

  deleteMessage(key) {
    this.messageRef.doc(key).delete().then(this.removeMessage)
  }

  startListeningForMessages() {
    this.messageRef.onSnapshot(queryData => {
      console.log(queryData)
      queryData.forEach(message => {
        console.log(message.data())
        this.createMessage(message.data(), message.id)
      })
    })
  }
}

export default MessagesContainer