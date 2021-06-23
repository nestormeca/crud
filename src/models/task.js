const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    solicitud: String,
    descripcion: String,
    uso: String,
    estado: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks', TaskSchema);

