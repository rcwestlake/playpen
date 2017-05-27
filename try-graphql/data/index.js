const users = [
  {
    id: 10,
    username: 'ryanwestlake',
    number_of_posts: 11,
    active: true
  },
  {
    id: 12,
    username: 'fredk',
    number_of_posts: 2,
    active: false
  },
  {
    id: 11,
    username: 'sarahjoy',
    number_of_posts: 32,
    active: true
  }
]

const addUser = ({ id, username, number_of_posts, active }) => {
  const user = {
    id,
    username,
    number_of_posts,
    active
  }

  users.push(user)
  return user
}

const getUsers = async () => {
  return await users
}

const getUserById = async (id) => {
  const [filteredUser] = users.filter(person => person.id === parseInt(id, 10))
  const user = await filteredUser
  return user
}

exports.getUserById = getUserById
exports.getUsers = getUsers
exports.addUser = addUser