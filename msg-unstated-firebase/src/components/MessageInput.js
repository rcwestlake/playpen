import React, { Component } from 'react'

class MessageInput extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({ message: e.target.value })
  }

  render() {
    const { addMessage, user } = this.props 
    const { message } = this.state
    return (
      <div>
        <input  type="text"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Message..."
        />
        <button onClick={() => addMessage(message, user.uid)}>Enter</button>
      </div>
    )
  }
}

export default MessageInput