# Backend (Node.js + Express + MySQL)

This server saves contact form submissions into the `ramao_db.form` table (XAMPP MySQL).

## Setup (Windows + XAMPP)

1. Make sure MySQL is running in XAMPP.
2. Create the database once in phpMyAdmin or MySQL shell:

```sql
CREATE DATABASE IF NOT EXISTS ramao_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. In this `backend` folder, create a file named `.env` with your local values:

```env
PORT=4000
CORS_ORIGIN=http://localhost:5173
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=ramao_db
```

4. Install and run:

```bash
cd backend
npm install
npm run dev
```

The server will automatically create the `form` table if it does not exist.

## API

- POST `/api/form`
  - body (JSON): `{ name, company, email, phone, service, message }`
  - response: `{ ok: true }` on success

A simple health check is available at `GET /health`.


