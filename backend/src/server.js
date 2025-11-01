import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Joi from 'joi'
import { createDbPool } from './db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*'

app.use(cors({ origin: CORS_ORIGIN === '*' ? true : CORS_ORIGIN.split(',').map((s) => s.trim()) }))
app.use(express.json())

let pool
createDbPool()
  .then((p) => {
    pool = p
    console.log('MySQL connected. Table ensured.')
  })
  .catch((err) => {
    console.error('DB connection error:', err)
    process.exit(1)
  })

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

const schema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  company: Joi.string().max(255).allow('', null),
  email: Joi.string().email().max(255).required(),
  phone: Joi.string().max(50).required(),
  service: Joi.string().max(100).required(),
  message: Joi.string().max(5000).required()
})

const requestCallbackSchema = Joi.object({
  fullName: Joi.string().min(2).max(255).required(),
  phone: Joi.string().max(50).required(),
  email: Joi.string().email().max(255).allow('', null),
  service: Joi.string().max(100).required(),
  date: Joi.string().max(20).allow('', null),
  callbackMethod: Joi.string().max(50).allow('', null),
  preferredLanguage: Joi.string().max(50).allow('', null),
  message: Joi.string().max(1000).allow('', null)
})

app.post('/api/form', async (req, res) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true })
  if (error) {
    return res.status(400).json({ ok: false, errors: error.details.map((d) => d.message) })
  }
  try {
    const { name, company, email, phone, service, message } = value
    const sql = `
      INSERT INTO form (name, company, email, phone, service, message)
      VALUES (:name, :company, :email, :phone, :service, :message)
    `
    await pool.query(sql, { name, company: company || null, email, phone, service, message })
    res.json({ ok: true })
  } catch (err) {
    console.error('Insert error:', err)
    res.status(500).json({ ok: false, message: 'Server error' })
  }
})

app.post('/api/request-callback', async (req, res) => {
  const { error, value } = requestCallbackSchema.validate(req.body, { abortEarly: false, stripUnknown: true })
  if (error) {
    return res.status(400).json({ ok: false, errors: error.details.map((d) => d.message) })
  }
  try {
    const {
      fullName,
      phone,
      email,
      service,
      date,
      callbackMethod,
      preferredLanguage,
      message
    } = value

    const sql = `
      INSERT INTO request_callback (
        full_name, phone, email, service, preferred_date, callback_method, preferred_language, message
      ) VALUES (:full_name, :phone, :email, :service, :preferred_date, :callback_method, :preferred_language, :message)
    `
    await pool.query(sql, {
      full_name: fullName,
      phone,
      email: email || null,
      service,
      preferred_date: date || null,
      callback_method: callbackMethod || null,
      preferred_language: preferredLanguage || null,
      message: message || null
    })
    res.json({ ok: true })
  } catch (err) {
    console.error('Insert callback error:', err)
    res.status(500).json({ ok: false, message: 'Server error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})


