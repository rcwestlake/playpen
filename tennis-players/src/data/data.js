const players = [
  {
    id: 1,
    name: 'Roger Federer',
    number_of_wins: 28
  },
  {
    id: 2,
    name: 'Rafael Nadal',
    number_of_wins: 45
  },
  {
    id: 3,
    name: 'Andy Murray',
    number_of_wins: 21
  }
]

const getPlayers = async () => {
  return await players
}

const getPlayerById = async (id) => {
  const [filteredPlayer] = players.filter(player => player.id === parseInt(id, 10))
  const player = await filteredPlayer
  return player
}

const addPlayer = ({id, name, number_of_wins}) => {
  const player = {
    id: parseInt(id, 10),
    name,
    number_of_wins
  }
  players.push(player)
  return player
} 

exports.getPlayers = getPlayers
exports.getPlayerById = getPlayerById
exports.addPlayer = addPlayer
//temporary while setting up apollo
exports.players = players