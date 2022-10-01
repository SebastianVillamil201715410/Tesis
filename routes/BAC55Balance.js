var express = require("express");
const Joi = require("joi");
const BAC55Balance = require("../models/BAC55Balance");

var router = express.Router();

const schema = Joi.object({
    fecha: Joi.date().required(),
    patrimonio: Joi.number().required(),
    activoCorriente: Joi.number().required(),
    activoNoCorriente: Joi.number().required(),
    totalActivos: Joi.number().required(),
    pasivoCorriente: Joi.number().required(),
    pasivoNoCorriente: Joi.number().required(),
    totalPasivo: Joi.number().required(),
    razonCorriente: Joi.number().required(),
    razonEndeudamiento: Joi.number().required(),
    apalancamientoFinanciero: Joi.number().required(),
    concentracion: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC55Balance.findAll().then((BAC55Balance) => {
     console.log("BAC55Balance", BAC55Balance);
     res.send(BAC55Balance);
   });
});

router.get("/:id", function (req, res, next) {
    BAC55Balance.findByPk(req.params.id).then((BAC55Balance) => {
      console.log("BAC55Balance", BAC55Balance);
      if (BAC55Balance === null) {
        res.status(404).send("El BAC55Balance con ese ID no existe");
      }
      res.send(BAC55Balance);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC55Balance.create({
      fecha: req.body.fecha,
      patrimonio: req.body.patrimonio,
      activoCorriente: req.body.activoCorriente,
      activoNoCorriente: req.body.activoNoCorriente,
      totalActivos: req.body.totalActivos,
      pasivoCorriente: req.body.pasivoCorriente,
      pasivoNoCorriente: req.body.pasivoNoCorriente,
      totalPasivo: req.body.totalPasivo,
      razonCorriente: req.body.razonCorriente,
      razonEndeudamiento: req.body.razonEndeudamiento,
      apalancamientoFinanciero: req.body.apalancamientoFinanciero,
      concentracion: req.body.concentracion,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC55Balance.update(req.body, { where: { id: req.params.id } }).then((BAC55Balance) => {
      console.log("BAC55Balance", BAC55Balance);
      if (BAC55Balance.matchedCount === 0) {
        return res.status(404).send("El BAC55Balance con ese ID no existe");
      }
      res.send("BAC55Balance actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC55Balance.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC55Balance que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;