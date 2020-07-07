const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = require('../../db/models/User');
const { createDocumentHandler, findDocumentByIdHandler } = require('../handlers')

router.get('/', async (req, res) => {
    const users = await UserModel.find({});
    return res.send({ users });
});

router.get('/:id', findDocumentByIdHandler(UserModel));

router.post('/', createDocumentHandler(UserModel, (req) => {
    let err = null;
    let validatedFields = null;
    try {
        const {name, pwd, email} = req.body;
        if ([name, pwd, email].filter(e => e === undefined).length) throw new Error('Inputs not Valid');
        validatedFields = {name, pwd, email};
    } catch (error) {
        err = error;
    }

    return {err, validatedFields}
}));

module.exports = router;
