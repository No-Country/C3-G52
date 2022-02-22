const mongoose = require('mongoose');
const { Schema } = mongoose;

const Company = new Schema({
  name: String,
  email: String,
  password: String,
  location: String,
  pic_url: String,
  description: String,
  price: Number,
  active: Boolean,
  website: String,
  stock: Number,
  products: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});

Company.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const companies = mongoose.model('companies', Company);
module.exports = company;
