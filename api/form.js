import Joi from 'joi'
import { getPool } from './_db.js'

const schema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  company: Joi.string().max(255).allow('', null),
  email: Joi.string().email().max(255).required(),
  phone: Joi.string().max(50).required(),
  service: Joi.string().max(100).required(),
  message: Joi.string().max(5000).required()
})

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true })
  if (error) {
    return res.status(400).json({ ok: false, errors: error.details.map((d) => d.message) })
  }

  try {
    const pool = await getPool()
    const { name, company, email, phone, service, message } = value
    const sql = `
      INSERT INTO form (name, company, email, phone, service, message)
      VALUES (:name, :company, :email, :phone, :service, :message)
    `
    await pool.query(sql, { name, company: company || null, email, phone, service, message })
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error('API /api/form error:', e)
    const message = e?.code === 'DB_CONFIG_MISSING'
      ? 'Server database is not configured. Please try again later.'
      : 'Server error'
    return res.status(500).json({ ok: false, message })
  }
}


