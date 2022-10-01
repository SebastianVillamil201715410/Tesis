var express = require("express");
const Joi = require("joi");
const BAC10 = require("../models/BAC10");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC10.findAll().then((BAC10) => {
     console.log("BAC10", BAC10);
     res.send(BAC10);
   });
});

router.get("/:id", function (req, res, next) {
    BAC10.findByPk(req.params.id).then((BAC10) => {
      console.log("BAC10", BAC10);
      if (BAC10 === null) {
        res.status(404).send("El BAC10 con ese ID no existe");
      }
      res.send(BAC10);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC10.create({
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
  
    BAC10.update(req.body, { where: { id: req.params.id } }).then((BAC10) => {
      console.log("BAC10", BAC10);
      if (BAC10.matchedCount === 0) {
        return res.status(404).send("El BAC10 con ese ID no existe");
      }
      res.send("BAC10 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC10.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC10 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;