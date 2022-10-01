var express = require("express");
const Joi = require("joi");
const BAC62BServicios = require("../models/BAC62BServicios");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    tipoServicio: Joi.string().min(0).required(),
    ANS: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62BServicios.findAll().then((BAC62BServicios) => {
     console.log("BAC62BServicios", BAC62BServicios);
     res.send(BAC62BServicios);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62BServicios.findByPk(req.params.id).then((BAC62BServicios) => {
      console.log("BAC62BServicios", BAC62BServicios);
      if (BAC62BServicios === null) {
        res.status(404).send("El BAC62BServicios con ese ID no existe");
      }
      res.send(BAC62BServicios);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62BServicios.create({
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
  
    BAC62BServicios.update(req.body, { where: { id: req.params.id } }).then((BAC62BServicios) => {
      console.log("BAC62BServicios", BAC62BServicios);
      if (BAC62BServicios.matchedCount === 0) {
        return res.status(404).send("El BAC62BServicios con ese ID no existe");
      }
      res.send("BAC62BServicios actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62BServicios.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62BServicios que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;