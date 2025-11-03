import Joi from 'joi'
import { getPool } from './_db.js'

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

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  const { error, value } = requestCallbackSchema.validate(req.body, { abortEarly: false, stripUnknown: true })
  if (error) {
    return res.status(400).json({ ok: false, errors: error.details.map((d) => d.message) })
  }

  try {
    const pool = await getPool()
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

    // Convert date string to MySQL DATE format or null
    const preferredDate = date ? (date.match(/^\d{4}-\d{2}-\d{2}$/) ? date : null) : null

    const sql = `
      INSERT INTO request_callback (
        full_name, phone, email, service, preferred_date, callback_method, preferred_language, message
      ) VALUES (
        :full_name, :phone, :email, :service, :preferred_date, :callback_method, :preferred_language, :message
      )
    `
    
    await pool.query(sql, {
      full_name: fullName,
      phone,
      email: email || null,
      service,
      preferred_date: preferredDate,
      callback_method: callbackMethod || null,
      preferred_language: preferredLanguage || null,
      message: message || null
    })
    
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error('API /api/request-callback error:', e)
    const message = e?.code === 'DB_CONFIG_MISSING'
      ? 'Database is not configured. Please configure MySQL database in Vercel environment variables.'
      : 'Server error'
    return res.status(500).json({ ok: false, message })
  }
}


