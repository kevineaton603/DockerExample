const mongoose = require('mongoose');
const express = require('express');

/**
 *
 * @param {mongoose.Model<mongoose.Document, any>} model Mongoose Model
 * @param {(req: express.Request) => {err: Error, validatedFields: any}} validate
 */
const createDocumentHandler = (model, validate) => {
  /**
     *
     * @param {express.Request} req Express Request
     * @param {express.Response} res Express Response
     */
  const requestHandler = async (req, res) => {
    try {
      const { err, validatedFields } = validate(req);
      if (err) throw new Error(err);
      else {
        const doc = new model(validatedFields);
        await doc.save();
        return res.send({ [model.modelName.toLowerCase()]: doc });
      }
    } catch (error) {
      return res.status(500).send({ error });
    }
  };

  return requestHandler;
};

/**
 *
 * @param {mongoose.Model<mongoose.Document, any>} model Mongoose Model
 * @param {String} id Id of Mongoose Document
 */
const findDocumentByIdHandler = (model) => {
  /**
     *
     * @param {express.Request} req Express Request
     * @param {express.Response} res Express Response
     */
  const requestHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const doc = await model.findById(id);
      return res.send({ [model.modelName.toLowerCase()]: doc });
    } catch (error) {
      return res.status(500).send({ error });
    }
  };

  return requestHandler;
};

module.exports = { createDocumentHandler, findDocumentByIdHandler };
