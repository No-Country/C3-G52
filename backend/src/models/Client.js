const { Schema, model, SchemaTypes } = require("mongoose");

const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  surname: {
    type: String,
    default: "",
  },
  pic_url: String,
  active: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  services_hired: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

// Esto quita de las respuestas al cliente la password y version
// El_id es cambiado para que se muestre visualmente como uid
clientSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const Client = model("Client", clientSchema);

module.exports = Client;
