var express = require("express");
const Joi = require("joi");
const BAC62G = require("../models/BAC62G");

var router = express.Router();


const schema = Joi.object({
    nombreSistemaExterno: Joi.string().min(0).required(),
    descripcionSistemaExterno: Joi.string().min(0).required(),
    interfazId: Joi.number().required(),
    serviciosId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62G.findAll().then((BAC62G) => {
     console.log("BAC62G", BAC62G);
     res.send(BAC62G);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62G.findByPk(req.params.id).then((BAC62G) => {
      console.log("BAC62G", BAC62G);
      if (BAC62G === null) {
        res.status(404).send("El BAC62G con ese ID no existe");
      }
      res.send(BAC62G);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62G.create({
      nombreSistemaExterno: req.body.nombreSistemaExterno,
      descripcionSistemaExterno: req.body.descripcionSistemaExterno,
      interfazId: req.body.interfazId,
      serviciosId: req.body.serviciosId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62G.update(req.body, { where: { id: req.params.id } }).then((BAC62G) => {
      console.log("BAC62G", BAC62G);
      if (BAC62G.matchedCount === 0) {
        return res.status(404).send("El BAC62G con ese ID no existe");
      }
      res.send("BAC62G actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62G.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62G que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;