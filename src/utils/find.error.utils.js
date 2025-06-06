import ERRORS from '../../config/db/errors.js'
const findError = (code) => {
  // Buscamos el error por el código (code) en el diccionario de errores
  return ERRORS.find(error => error.code === code) || ERRORS.find(error => error.code === '500')
}

export { findError }
