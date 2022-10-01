var express = require("express");
const Joi = require("joi");
const BAC57Primarios = require("../models/BAC57Primarios");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC57Primarios.findAll().then((BAC57Primarios) => {
     console.log("BAC57Primarios", BAC57Primarios);
     res.send(BAC57Primarios);
   });
});

router.get("/:id", function (req, res, next) {
    BAC57Primarios.findByPk(req.params.id).then((BAC57Primarios) => {
      console.log("BAC57Primarios", BAC57Primarios);
      if (BAC57Primarios === null) {
        res.status(404).send("El BAC57Primarios con ese ID no existe");
      }
      res.send(BAC57Primarios);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC57Primarios.create({
      nombre: req.body.nombre,
      tipo: req.body.tipo,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC57Primarios.update(req.body, { where: { id: req.params.id } }).then((BAC57Primarios) => {
      console.log("BAC57Primarios", BAC57Primarios);
      if (BAC57Primarios.matchedCount === 0) {
        return res.status(404).send("El BAC57Primarios con ese ID no existe");
      }
      res.send("BAC57Primarios actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC57Primarios.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC57Primarios que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;