const { Schema, model } = require('mongoose');
const BaseSchema = require("./BaseSchema");

const UserSchema = BaseSchema();

UserSchema.add({
    name: { 
        type: String, 
        required: true, 
        unique: true
    },
    pwd: { type: String, required: true },
    email: { type: String, required: true }
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;