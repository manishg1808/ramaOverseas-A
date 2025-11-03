import mysql from 'mysql2/promise'

export async function createDbPool() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'ramaodb',
    waitForConnections: true,
    connectionLimit: 10,
    namedPlaceholders: true
  })

  await ensureTables(pool)
  return pool
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


