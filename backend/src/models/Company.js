const { Schema, model } = require("mongoose");

const companySchema = new Schema({
  name: String,
  email: String,
  password: String,
  location: String,
  pic_url: String,
  active: Boolean,
  website: String,
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

const Company = model("Company", companySchema);
module.exports = Company;
