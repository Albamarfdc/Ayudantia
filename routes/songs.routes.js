import { Router } from 'express'

import {
  getAllSongs,
  createSong

} from '../src/controllers/songs.controllers.js'

/* import { verifyToken } from '../middlewares/verify.token.middleware.js' */
import { validateSong } from '../middlewares/validate.song.middleware.js'
const router = Router()
// 📦 CRUD básico
router.get('/songs', getAllSongs)
router.post('/songs', /* verifyToken, */ validateSong, createSong)

export default router
