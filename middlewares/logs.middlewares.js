// Middleware para registrar cada petición
export const logs = (req, _, next) => {
  console.log({
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query
  })
  next()
}

// Middleware para manejar rutas no encontradas
export const errorLogs = (req, _) => {
  console.log({
    error: 'Ruta no encontrada',
    method: req.method,
    url: req.originalUrl
  })
}
