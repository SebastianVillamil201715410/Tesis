var express = require("express");
const Joi = require("joi");
const BAC01 = require("../models/BAC01");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
   BAC01.findAll().then((BAC01) => {
     console.log("BAC01", BAC01);
     res.send(BAC01);
   });
});

router.get("/:id", function (req, res, next) {
    BAC01.findByPk(req.params.id).then((BAC01) => {
      console.log("BAC01", BAC01);
      if (BAC01 === null) {
        res.status(404).send("El BAC01 con ese ID no existe");
      }
      res.send(BAC01);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC01.create({
      nombre: req.body.nombre,
      tipo: req.body.tipo,
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
  
    BAC01.update(req.body, { where: { id: req.params.id } }).then((BAC01) => {
      console.log("BAC01", BAC01);
      if (BAC01.matchedCount === 0) {
        return res.status(404).send("El BAC01 con ese ID no existe");
      }
      res.send("BAC01 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC01.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC01 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  
  module.exports = router;
  