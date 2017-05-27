import Database from '../my-stuff/super-real-totally-not-fake-database'

//steps
//get all atists
//iterate over each artist to grab the albums - update artist
//iterate over each album to grab the songs - update the albums

const getMusicData = async () => {
  const artists = await Database.findAllArtists()

  for (let artist of artists) {
    const albums = await Promise.all(artist.albums.map(album => Database.findAlbum(album))) // get albums for each artist
    artist.albums = albums
    for (let album of artist.albums) {
      const songs = await Promise.all(album.songs.map(song => Database.findSong(song))) // get songs for each album
      album.songs = songs
    }
    console.log(artist)
  }

  return { artists } // wrap it in main object
}

export default getMusicData
