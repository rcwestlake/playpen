import { Container } from 'unstated'
import { db } from '../fb/config'
import pick from 'lodash/pick'
import clone from 'lodash/clone'
import omit from 'lodash/omit'

class MessagesContainer extends Container {
  constructor() {
    super()
    this.messageRef = db.collection('messages')
    this.addMessage = this.addMessage.bind(this)
  }

  state = {
    messages: []
  }

  createMessage(msgData) {
    this.setState({ messages: clone(this.state.messages, pick(msgData, ['timeStamp', 'content', 'author']))})
  }

  addMessage(message, authorId) {
    this.messageRef.add({ timeStamp: Date.now(),
                          content: message,
                          author: authorId
    })
    .then(newMessageRef => {
      this.messageRef.doc(newMessageRef.id).get()
      .then(msg => this.createMessage(msg.data()))
      .catch(console.error)
    })
  }
}

export default MessagesContainer