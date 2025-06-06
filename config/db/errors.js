const ERRORS = [
  { code: '23502', type: 'db', status: 400, message: 'El campo artist , name , gender no puede estar vacio' },
  { code: '22P02', type: 'db', status: 400, message: 'Tipo de dato incorrecto' },
  { code: '42601', status: 400, message: 'error de sintaxis en la consulta' },
  { code: '500', type: 'server', status: 500, message: 'Internal server error' },
  { code: '404', type: 'travel', status: 404, message: 'song no encontrado' },
  { code: '42P01', status: 500, message: 'error en la conexion con la base de datos' },

  // AUTH
  { code: 'USER_NOT_FOUND', type: 'auth', status: 404, message: 'El usuario no fue encontrado' },
  { code: 'INVALID_PASSWORD', type: 'auth', status: 401, message: 'Contraseña incorrecta' },
  { code: 'TOKEN_MISSING', type: 'auth', status: 400, message: 'El token debe estar presente' },
  { code: 'INVALID_TOKEN', type: 'auth', status: 400, message: 'El token es inválido' },

  // SONGS
  { code: 'SONG_NOT_FOUND', type: 'songs', status: 404, message: 'La canción no fue encontrada' },
  { code: 'SONG_CREATION_FAILED', type: 'songs', status: 500, message: 'No se pudo crear la canción' },
  { code: 'SONG_UPDATE_FAILED', type: 'songs', status: 500, message: 'No se pudo actualizar la canción' },
  { code: 'SONG_DELETE_FAILED', type: 'songs', status: 500, message: 'No se pudo eliminar la canción' },
  { code: 'SONG_REQUIRED_FIELDS', type: 'songs', status: 400, message: 'Faltan campos requeridos: name, artist o gender' },
  { code: 'SONG_INVALID_DATA', type: 'songs', status: 400, message: 'Datos inválidos para la canción' }
]

export default ERRORS
