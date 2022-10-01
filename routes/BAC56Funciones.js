var express = require("express");
const Joi = require("joi");
const BAC56Funciones = require("../models/BAC56Funciones");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC56Funciones.findAll().then((BAC56Funciones) => {
     console.log("BAC56Funciones", BAC56Funciones);
     res.send(BAC56Funciones);
   });
});

router.get("/:id", function (req, res, next) {
    BAC56Funciones.findByPk(req.params.id).then((BAC56Funciones) => {
      console.log("BAC56Funciones", BAC56Funciones);
      if (BAC56Funciones === null) {
        res.status(404).send("El BAC56Funciones con ese ID no existe");
      }
      res.send(BAC56Funciones);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56Funciones.create({
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
  
    BAC56Funciones.update(req.body, { where: { id: req.params.id } }).then((BAC56Funciones) => {
      console.log("BAC56Funciones", BAC56Funciones);
      if (BAC56Funciones.matchedCount === 0) {
        return res.status(404).send("El BAC56Funciones con ese ID no existe");
      }
      res.send("BAC56Funciones actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC56Funciones.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC56Funciones que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;