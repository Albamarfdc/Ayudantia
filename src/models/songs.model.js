import pool from '../../config/db/conection.db.js'
import { v4 as uuidv4 } from 'uuid'

// GET
export const getSongsModel = async () => {
  const sqlQuery = 'SELECT * FROM SONGS'
  const response = await pool.query(sqlQuery)
  return response.rows
}

// POST
export const createSongModel = async ({ name, artist, gender }) => {
  const newId = uuidv4()
  const SQLquery = {
    text: 'INSERT INTO SONGS  (id,name, artist,gender) VALUES ($1,$2,$3,$4) RETURNING *',
    values: [newId, name, artist, gender]
  }
  const result = await pool.query(SQLquery)
  return result.rows
}
