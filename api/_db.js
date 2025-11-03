import mysql from 'mysql2/promise'

let pool = null
let tablesInitialized = false

// Validate required environment variables
function validateRequiredEnv() {
  const required = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']
  const missing = required.filter((k) => !process.env[k] || String(process.env[k]).trim() === '')
  if (missing.length > 0) {
    const hint = 'Set these environment variables in Vercel Dashboard → Project → Settings → Environment Variables'
    const err = new Error(`Database configuration missing: ${missing.join(', ')}. ${hint}`)
    err.code = 'DB_CONFIG_MISSING'
    throw err
  }
}

// Get or create MySQL connection pool
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
    queueLimit: 0,
    namedPlaceholders: true,
    // SSL configuration for managed MySQL services (PlanetScale, Railway, etc.)
    ssl: process.env.DB_SSL === 'false' ? undefined : {
      rejectUnauthorized: false
    }
  })

  await ensureTables(pool)
  return pool
}

// Initialize tables on first use
async function ensureTables(pool) {
  if (tablesInitialized) return

  try {
    // Create form table
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

    // Create request_callback table
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
    tablesInitialized = true
    console.log('MySQL tables initialized successfully')
  } catch (error) {
    console.error('Error initializing database tables:', error)
    throw error
  }
}


