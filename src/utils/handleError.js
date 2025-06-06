import { findError } from './find.error.utils.js'

const handleError = (error, res) => {
  // Buscamos el error con el código proporcionado o usamos el error 500 si no se encuentra
  const errorFound = findError(error.code || '500')

  return res
    .status(errorFound.status)
    .json({ error: errorFound.message, type: errorFound.type })
}

export { handleError }
