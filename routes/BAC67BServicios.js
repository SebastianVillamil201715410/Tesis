var express = require("express");
const Joi = require("joi");
const BAC67BServicios = require("../models/BAC67BServicios");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    tipoServicio: Joi.string().min(0).required(),
    ANS: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC67BServicios.findAll().then((BAC67BServicios) => {
     console.log("BAC67BServicios", BAC67BServicios);
     res.send(BAC67BServicios);
   });
});

router.get("/:id", function (req, res, next) {
    BAC67BServicios.findByPk(req.params.id).then((BAC67BServicios) => {
      console.log("BAC67BServicios", BAC67BServicios);
      if (BAC67BServicios === null) {
        res.status(404).send("El BAC67BServicios con ese ID no existe");
      }
      res.send(BAC67BServicios);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67BServicios.create({
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
  
    BAC67BServicios.update(req.body, { where: { id: req.params.id } }).then((BAC67BServicios) => {
      console.log("BAC67BServicios", BAC67BServicios);
      if (BAC67BServicios.matchedCount === 0) {
        return res.status(404).send("El BAC67BServicios con ese ID no existe");
      }
      res.send("BAC67BServicios actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC67BServicios.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC67BServicios que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });



module.exports = router;