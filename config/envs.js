import 'dotenv/config'

const envs = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  frontUrl: process.env.FRONT_URL,
  prodUrl: process.env.PROD_FRONT_URL,
  jwtSecret: process.env.JWT_SECRET,
  db_url: process.env.DB_URL
}

export { envs }
