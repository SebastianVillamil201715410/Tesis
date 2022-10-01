var express = require("express");
const Joi = require("joi");
const BAC03 = require("../models/BAC03");

var router = express.Router();


const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
    actividad: Joi.string().min(0).required(),
    participantesId: Joi.number().required(),
    recursosId: Joi.number().required()
  });

router.get("/", function (req, res, next) {
    BAC03.findAll().then((BAC03) => {
     console.log("BAC03", BAC03);
     res.send(BAC03);
   });
});

router.get("/:id", function (req, res, next) {
    BAC03.findByPk(req.params.id).then((BAC03) => {
      console.log("BAC03", BAC03);
      if (BAC03 === null) {
        res.status(404).send("El BAC03 con ese ID no existe");
      }
      res.send(BAC03);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC03.create({
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      actividad: req.body.actividad,
      participantesId: req.body.participantesId,
      recursosId: req.body.recursosId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC03.update(req.body, { where: { id: req.params.id } }).then((BAC03) => {
      console.log("BAC03", BAC03);
      if (BAC03.matchedCount === 0) {
        return res.status(404).send("El BAC03 con ese ID no existe");
      }
      res.send("BAC03 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC03.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC03 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;