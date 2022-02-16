

const { Schema, model } = require("mongoose");

const userSchema = new Schema({

    name: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        unique: true         
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    surname: {
        type: String,
        default: ""
    },
    status: {
        type: Boolean,
        default: true
    },
    city: {
        type: String,
        default: ""
    },
    postalcode: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: ""
    },    
    isAdmin: {
        type: Boolean,
        default: false
    }

})

// Esto quita de las respuestas al cliente la password y version
// El_id es cambiado para que se muestre visualmente como uid
userSchema.methods.toJSON = function(){
    const { __v, password, _id,...user } = this.toObject();
    user.uid= _id;
    return user
};

module.exports = model("User", userSchema);