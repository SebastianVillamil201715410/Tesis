var express = require("express");
const Joi = require("joi");
const BAC62GServicios = require("../models/BAC62GServicios");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    tipoServicio: Joi.string().min(0).required(),
    ANS: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62GServicios.findAll().then((BAC62GServicios) => {
     console.log("BAC62GServicios", BAC62GServicios);
     res.send(BAC62GServicios);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62GServicios.findByPk(req.params.id).then((BAC62GServicios) => {
      console.log("BAC62GServicios", BAC62GServicios);
      if (BAC62GServicios === null) {
        res.status(404).send("El BAC62GServicios con ese ID no existe");
      }
      res.send(BAC62GServicios);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62GServicios.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      tipoServicio: req.body.tipoServicio,
      ANS: req.body.ANS,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62GServicios.update(req.body, { where: { id: req.params.id } }).then((BAC62GServicios) => {
      console.log("BAC62GServicios", BAC62GServicios);
      if (BAC62GServicios.matchedCount === 0) {
        return res.status(404).send("El BAC62GServicios con ese ID no existe");
      }
      res.send("BAC62GServicios actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62GServicios.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62GServicios que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;