import mysql from 'mysql2/promise'

let pool

export async function getPool() {
  if (pool) return pool

  validateRequiredEnv()

  pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    namedPlaceholders: true,
    // Many managed MySQL providers require TLS in serverless environments
    ssl: process.env.DB_SSL === 'false' ? undefined : { rejectUnauthorized: false }
  })

  await ensureTables(pool)
  return pool
}

function validateRequiredEnv() {
  const required = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']
  const missing = required.filter((k) => !process.env[k] || String(process.env[k]).trim() === '')
  if (missing.length > 0) {
    const hint = 'Set these environment variables in your hosting dashboard (e.g., Vercel → Project → Settings → Environment Variables) and redeploy.'
    const err = new Error(`Database configuration missing: ${missing.join(', ')}. ${hint}`)
    err.code = 'DB_CONFIG_MISSING'
    throw err
  }
}

async function ensureTables(pool) {
  const createFormTableSql = `
    CREATE TABLE IF NOT EXISTS form (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      company VARCHAR(255) NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      service VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `

  const createRequestCallbackSql = `
    CREATE TABLE IF NOT EXISTS request_callback (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      email VARCHAR(255) NULL,
      service VARCHAR(100) NOT NULL,
      preferred_date DATE NULL,
      callback_method VARCHAR(50) NULL,
      preferred_language VARCHAR(50) NULL,
      message VARCHAR(1000) NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `

  await pool.query(createFormTableSql)
  await pool.query(createRequestCallbackSql)
}


