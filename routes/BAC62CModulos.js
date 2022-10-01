var express = require("express");
const Joi = require("joi");
const BAC62CModulos = require("../models/BAC62CModulos");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC62CModulos.findAll().then((BAC62CModulos) => {
     console.log("BAC62CModulos", BAC62CModulos);
     res.send(BAC62CModulos);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62CModulos.findByPk(req.params.id).then((BAC62CModulos) => {
      console.log("BAC62CModulos", BAC62CModulos);
      if (BAC62CModulos === null) {
        res.status(404).send("El BAC62CModulos con ese ID no existe");
      }
      res.send(BAC62CModulos);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62CModulos.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62CModulos.update(req.body, { where: { id: req.params.id } }).then((BAC62CModulos) => {
      console.log("BAC62CModulos", BAC62CModulos);
      if (BAC62CModulos.matchedCount === 0) {
        return res.status(404).send("El BAC62CModulos con ese ID no existe");
      }
      res.send("BAC62CModulos actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62CModulos.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62CModulos que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;