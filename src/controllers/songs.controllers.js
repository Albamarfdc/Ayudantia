import { createSongModel, getSongsModel } from '../models/songs.model.js'
import { handleError } from '../utils/handleError.js'
import pagination from '../utils/paginator.js'

// GET all songs con paginación
export const getAllSongs = async (req, res) => {
  try {
    const { items, page } = req.query
    const songs = await getSongsModel()
    const data = pagination(songs, items, page)
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
  }
}

// CREATE song
export const createSong = async (req, res) => {
  try {
    const { name, artist, gender } = req.body

    /*    // Validación básica de campos
    if (!name || !artist || !gender) {
      return handleError({ code: 'SONG_REQUIRED_FIELDS' }, res)
    } */

    const song = await createSongModel({ name, artist, gender })
    res.status(201).json(song)
  } catch (error) {
    return handleError({ code: 'SONG_CREATION_FAILED' }, res)
  }
}
