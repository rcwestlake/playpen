import Database from '../my-stuff/super-real-totally-not-fake-database'

const getMusicData = async () => {
  const groups = await Database.findAllArtists()

  for (let artist of groups) {
    const albums = await Promise.all(artist.albums.map(album => Database.findAlbum(album))) // get albums for each artist
    artist.albums = albums
    for (let album of artist.albums) {
      const songs = await Promise.all(album.songs.map(song => Database.findSong(song))) // get songs for each album
      album.songs = songs
    }
    console.log(artist)
  }

  return { groups } // wrap it in main object
}

export default getMusicData
