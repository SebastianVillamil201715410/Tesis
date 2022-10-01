var express = require("express");
const Joi = require("joi");
const BAC69ACapacidad = require("../models/BAC69ACapacidad");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC69ACapacidad.findAll().then((BAC69ACapacidad) => {
     console.log("BAC69ACapacidad", BAC69ACapacidad);
     res.send(BAC69ACapacidad);
   });
});

router.get("/:id", function (req, res, next) {
    BAC69ACapacidad.findByPk(req.params.id).then((BAC69ACapacidad) => {
      console.log("BAC69ACapacidad", BAC69ACapacidad);
      if (BAC69ACapacidad === null) {
        res.status(404).send("El BAC69ACapacidad con ese ID no existe");
      }
      res.send(BAC69ACapacidad);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC69ACapacidad.create({
      nombre: req.body.nombre,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC69ACapacidad.update(req.body, { where: { id: req.params.id } }).then((BAC69ACapacidad) => {
      console.log("BAC69ACapacidad", BAC69ACapacidad);
      if (BAC69ACapacidad.matchedCount === 0) {
        return res.status(404).send("El BAC69ACapacidad con ese ID no existe");
      }
      res.send("BAC69ACapacidad actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC69ACapacidad.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC69ACapacidad que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;