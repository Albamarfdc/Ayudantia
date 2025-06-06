import express from 'express'
import cors from 'cors'
import { envs } from './config/envs.js' // Configuración de variables de entorno y constantes
import { errorLogs, logs } from './middlewares/logs.middlewares.js'
import songsRoutes from './routes/songs.routes.js'

const app = express()
const PORT = envs.port

const whiteList = [ // aqui van los dominios permitidos ejemplo http://localhost:3000
  envs.frontUrl, // localhost:3000
  envs.prodUrl // localhost:5173
]

app.use( // CORS
  cors({ // Configuración de CORS para permitir el acceso desde dominios específicos
    origin: function (origin, callback) { // Función que verifica si el origen de la solicitud está en la lista blanca
      if (!origin || whiteList.includes(origin)) { // Si el origen no está definido o está en la lista blanca, se permite el acceso
        return callback(null, true) // Se llama al callback con null (sin error) y true (permitir acceso) ejemplo http://localhost:3000
      }
      return callback(new Error(`Error de CORS: ${origin}`), false) // Si el origen no está en la lista blanca, se llama al callback con un error y false (denegar acceso)
    }
  })
)

app.use(express.json())
app.use(logs)

app.use('/api', songsRoutes)
app.use(errorLogs)

app.listen(PORT, console.log(`🔥 Server On http://localhost:${PORT}`))
