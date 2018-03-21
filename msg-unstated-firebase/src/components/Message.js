import React from 'react'

const Message = ({ user, content, author, uid, fromAuthor, deleteMessage }) => (
  <article>
    <img
      src={user.photoURL}
      height="100px"
      width="100px"
      alt="User"
    />
    <h4>{user.displayName}</h4>
    <p>{content}</p>
    {fromAuthor && <button onClick={() => deleteMessage(uid)}>Remove</button>}
  </article>
)

export default Message