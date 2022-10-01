var express = require("express");
const Joi = require("joi");
const BAC56ServiciosInternos = require("../models/BAC56ServiciosInternos");

var router = express.Router();

const schema = Joi.object({
    nombreServicio: Joi.string().min(0).required(),
    descripcionServicio: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC56ServiciosInternos.findAll().then((BAC56ServiciosInternos) => {
     console.log("BAC56ServiciosInternos", BAC56ServiciosInternos);
     res.send(BAC56ServiciosInternos);
   });
});

router.get("/:id", function (req, res, next) {
    BAC56ServiciosInternos.findByPk(req.params.id).then((BAC56ServiciosInternos) => {
      console.log("BAC56ServiciosInternos", BAC56ServiciosInternos);
      if (BAC56ServiciosInternos === null) {
        res.status(404).send("El BAC56ServiciosInternos con ese ID no existe");
      }
      res.send(BAC56ServiciosInternos);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56ServiciosInternos.create({
      nombreServicio: req.body.nombreServicio,
      descripcionServicio: req.body.descripcionServicio,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56ServiciosInternos.update(req.body, { where: { id: req.params.id } }).then((BAC56ServiciosInternos) => {
      console.log("BAC56ServiciosInternos", BAC56ServiciosInternos);
      if (BAC56ServiciosInternos.matchedCount === 0) {
        return res.status(404).send("El BAC56ServiciosInternos con ese ID no existe");
      }
      res.send("BAC56ServiciosInternos actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC56ServiciosInternos.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC56ServiciosInternos que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;