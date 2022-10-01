var express = require("express");
const Joi = require("joi");
const BAC02 = require("../models/BAC02");

var router = express.Router();


const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    objetivoNegocio: Joi.string().min(0).required(),
    actorId: Joi.number().required()
  });

router.get("/", function (req, res, next) {
  BAC02.findAll().then((BAC02) => {
     console.log("BAC02", BAC02);
     res.send(BAC02);
   });
});

router.get("/:id", function (req, res, next) {
  BAC02.findByPk(req.params.id).then((BAC02) => {
      console.log("BAC02", BAC02);
      if (BAC02 === null) {
        res.status(404).send("El BAC02 con ese ID no existe");
      }
      res.send(BAC02);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC02.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      objetivoNegocio: req.body.objetivoNegocio,
      actorId: req.body.actorId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC02.update(req.body, { where: { id: req.params.id } }).then((BAC02) => {
      console.log("BAC02", BAC02);
      if (BAC02.matchedCount === 0) {
        return res.status(404).send("El BAC02 con ese ID no existe");
      }
      res.send("BAC02 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC02.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC02 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

  module.exports = router;
  