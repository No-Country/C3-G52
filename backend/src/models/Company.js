const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
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
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

companySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
