var express = require("express");
const Joi = require("joi");
const BAC69B = require("../models/BAC69B");

var router = express.Router();

const schema = Joi.object({
    descripcionRequerimiento: Joi.string().min(0).required(),
    justificacion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC69B.findAll().then((BAC69B) => {
     console.log("BAC69B", BAC69B);
     res.send(BAC69B);
   });
});

router.get("/:id", function (req, res, next) {
    BAC69B.findByPk(req.params.id).then((BAC69B) => {
      console.log("BAC69B", BAC69B);
      if (BAC69B === null) {
        res.status(404).send("El BAC69B con ese ID no existe");
      }
      res.send(BAC69B);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC69B.create({
      descripcionRequerimiento: req.body.descripcionRequerimiento,
      justificacion: req.body.justificacion,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC69B.update(req.body, { where: { id: req.params.id } }).then((BAC69B) => {
      console.log("BAC69B", BAC69B);
      if (BAC69B.matchedCount === 0) {
        return res.status(404).send("El BAC69B con ese ID no existe");
      }
      res.send("BAC69B actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC69B.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC69B que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;