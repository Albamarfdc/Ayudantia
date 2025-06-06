import validator from 'validator'

export const validateSong = (req, res, next) => {
  const { name, artist } = req.body

  // Validación del nombre de la canción
  if (validator.isEmpty(name)) {
    return res.status(400).json({ error: 'Name is required' })
  }

  if (!validator.isLength(name, { min: 2, max: 50 })) {
    return res.status(400).json({ error: 'Name must be between 2 and 50 characters' })
  }

  if (!validator.matches(name, /^[a-zA-Z ]+$/)) {
    return res.status(400).json({ error: 'Name must only contain letters and spaces' })
  }

  // Validación del artista
  if (validator.isEmpty(artist)) {
    return res.status(400).json({ error: 'Artist is required' })
  }

  if (!validator.isLength(artist, { min: 2, max: 50 })) {
    return res.status(400).json({ error: 'Artist must be between 2 and 50 characters' })
  }

  // Validación para asegurarnos de que el artista no sea "bad bunny"
  if (validator.equals(artist.toLowerCase(), 'bad bunny')) {
    return res.status(400).json({ error: 'Esta cochinada no está permitida en nuestra API' })
  }

  // Validación para asegurarnos de que el artista no sea "bad bunny"
  const normalizedArtist = artist.toLowerCase().trim() // Convertir a minúsculas y quitar espacios innecesarios
  const badBunnyVariations = ['bad bunny', 'badbunny', 'bad_bunny', 'bAd BuNnY', 'bad bUnNy'] // Variaciones a comparar

  if (badBunnyVariations.includes(normalizedArtist)) {
    return res.status(400).json({ error: 'Esta cochinada no está permitida en nuestra API' })
  }

  // Si todo es válido, continúa al siguiente middleware o controlador
  next()
}
