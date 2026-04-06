const User = require('../models/user.model');

// Petición GET
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener usuarios', error: error.message });
    }
};

// Petición POST
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ msg: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear usuario', error: error.message });
    }
};

// Petición DELETE
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        res.status(200).json({ msg: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar usuario', error: error.message });
    }
};
