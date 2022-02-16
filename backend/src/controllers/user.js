const User = require("../models/user");
const bcrypt = require("bcrypt");


const getUserById = async(req, res) => {

    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
        return res.status(400).json({msg: `No existe usuario con el ID ${id}`});
    }

    res.status(200).json(user);
};

const postUser = async(req, res) => {

    const { name, email, password } = req.body;
    const user = new User({ name, email, password });

    // Encriptar la contraseña    
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    
    // Guardar en BD
    await user.save();

    res.status(201).json({
        user
    });
};

const putUser = async (req, res) => {
  const { id } = req.params;
  const { password, ...resto } = req.body;

    // TODO validar contra BD
    if (password) {
        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync(10);
        resto.password = bcrypt.hashSync(password, salt);
    }
    
    const user = await User.findByIdAndUpdate(id, resto, {new: true});
    res.status(200).json(user);
    res.json(user);
};

const changePassword = async(req, res) => {   

    const {id} = req.params;
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(id);
        if(!user){
            return res.status(400).json({
                msg: "No existe usuario con ese ID"
            })
        };

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(currentPassword, user.password);
    if(!validPassword){
        return res.status(400).json({
            msg: "Contraseña actual incorrecta"
        })
    };
    // Encriptar la contraseña    
    const salt = bcrypt.genSaltSync(10);
    const password2 = bcrypt.hashSync(newPassword, salt);

    const updatePassword = await User.findByIdAndUpdate(id, {password: password2}, {new: true})    
    
    res.status(200).json(updatePassword);
};


const deleteUser = async (req, res) => {
  const { id } = req.params;

  // Eliminacion física
  const user = await User.findByIdAndDelete(id);

  res.json(user);
};

module.exports = {
    getUserById,
    postUser,
    putUser,
    changePassword,
    deleteUser
}