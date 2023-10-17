const { model, Schema } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const authSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 8,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
};

authSchema.post('save', handleMongooseError);

const Auth = model('auth', authSchema);

module.exports = { Auth, schemas };
