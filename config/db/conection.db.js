import pg from 'pg'
import { envs } from '../envs.js'

const pool = new pg.Pool({
/*   host: envs.dbHost,
  user: envs.db_user,
  password: envs.db_password,
  database: envs.db_name, */
  allowExitOnIdle: true,
  connectionString: envs.db_url
})

export default pool
