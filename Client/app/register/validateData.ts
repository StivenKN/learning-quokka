import Joi from 'joi'

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().pattern(passwordPattern).min(6).max(30).required(),
  'confirm-password': Joi.string().valid(Joi.ref('password')).required()
})
