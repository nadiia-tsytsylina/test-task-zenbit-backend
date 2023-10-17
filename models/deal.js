const { model, Schema } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const dealSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for deal'],
    },
    totalPrice: {
      type: Number,
    },
    ticketPrice: {
      type: Number,
    },
    yield: {
      type: Number,
    },
    days: {
      type: Number,
    },
    sold: {
      type: Number,
    },
    img: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

dealSchema.post('save', handleMongooseError);

const Deal = model('deal', dealSchema);

module.exports = { Deal };
