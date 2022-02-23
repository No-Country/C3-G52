const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  title: String,
  description: String,
  type: String,
  price: Number,
  location: Object,
  pics: [String], //Array de strings
  active: Boolean,
  reviews: [
    //Array de id's
    {
      type: Schema.Types.ObjectId, //En mongoose el id es un object
      ref: "Review",
    },
  ],
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
});

//Cuando se pasa a json en una respuesta al objeto se modificara
serviceSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const Service = model("Service", serviceSchema);

module.exports = Service;
