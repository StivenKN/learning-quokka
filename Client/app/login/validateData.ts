import Joi from 'joi'

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const registerSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().pattern(passwordPattern).min(6).max(30).required()
})
