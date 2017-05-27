import Database from '../my-stuff/super-real-totally-not-fake-database'

//steps
//get all atists
//iterate over each artist to grab the albums - update artist
//iterate over each album to grab the songs - update the albums

const getMusicData = async () => {
  const artists = await Database.findAllArtists()

  for (let artist of artists) {
    artist.albums = await Promise.all(artist.albums.map(album => Database.findAlbum(album)))
    for (let album of artist.albums) {
      album.songs = await Promise.all(album.songs.map(song => Database.findSong(song))) 
    }
  }

  return { artists }
}

export default getMusicData
