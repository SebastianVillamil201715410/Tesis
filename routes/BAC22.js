var express = require("express");
const Joi = require("joi");
const BAC22 = require("../models/BAC22");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    responsable: Joi.string().min(0).required(),
    fechaInicio: Joi.date().required(),
    fechaFin: Joi.date().required(),
    indicadoresLogroId: Joi.number().required(),
    aporte: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC22.findAll().then((BAC22) => {
     console.log("BAC22", BAC22);
     res.send(BAC22);
   });
});

router.get("/:id", function (req, res, next) {
    BAC22.findByPk(req.params.id).then((BAC22) => {
      console.log("BAC22", BAC22);
      if (BAC22 === null) {
        res.status(404).send("El BAC22 con ese ID no existe");
      }
      res.send(BAC22);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC22.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      responsable: req.body.responsable,
      fechaFin: req.body.fechaFin,
      fechaInicio: req.body.fechaInicio,
      indicadoresLogroId: req.body.indicadoresLogroId,
      aporte: req.body.aporte,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC22.update(req.body, { where: { id: req.params.id } }).then((BAC22) => {
      console.log("BAC22", BAC22);
      if (BAC22.matchedCount === 0) {
        return res.status(404).send("El BAC22 con ese ID no existe");
      }
      res.send("BAC22 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC22.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC22 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;