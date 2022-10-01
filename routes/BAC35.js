var express = require("express");
const Joi = require("joi");
const BAC35 = require("../models/BAC35");

var router = express.Router();

const schema = Joi.object({
    instrumentoMedicion: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    precision: Joi.string().min(0).required(),
    confiabilidad: Joi.string().min(0).required(),
    frecuencia: Joi.string().min(0).required(),
    visualizacionResultado: Joi.string().min(0).required(),
    conceptos: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC35.findAll().then((BAC35) => {
     console.log("BAC35", BAC35);
     res.send(BAC35);
   });
});

router.get("/:id", function (req, res, next) {
    BAC35.findByPk(req.params.id).then((BAC35) => {
      console.log("BAC35", BAC35);
      if (BAC35 === null) {
        res.status(404).send("El BAC35 con ese ID no existe");
      }
      res.send(BAC35);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC35.create({
      instrumentoMedicion: req.body.instrumentoMedicion,
      descripcion: req.body.descripcion,
      precision: req.body.precision,
      confiabilidad: req.body.confiabilidad,
      frecuencia: req.body.frecuencia,
      visualizacionResultado: req.body.visualizacionResultado,
      conceptos: req.body.conceptos,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC35.update(req.body, { where: { id: req.params.id } }).then((BAC35) => {
      console.log("BAC35", BAC35);
      if (BAC35.matchedCount === 0) {
        return res.status(404).send("El BAC35 con ese ID no existe");
      }
      res.send("BAC35 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC35.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC35 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;