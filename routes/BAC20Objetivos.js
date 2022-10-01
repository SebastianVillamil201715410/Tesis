var express = require("express");
const Joi = require("joi");
const BAC20Objetivos = require("../models/BAC20Objetivos");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC20Objetivos.findAll().then((BAC20Objetivos) => {
     console.log("BAC20Objetivos", BAC20Objetivos);
     res.send(BAC20Objetivos);
   });
});

router.get("/:id", function (req, res, next) {
    BAC20Objetivos.findByPk(req.params.id).then((BAC20Objetivos) => {
      console.log("BAC20Objetivos", BAC20Objetivos);
      if (BAC20Objetivos === null) {
        res.status(404).send("El BAC20Objetivos con ese ID no existe");
      }
      res.send(BAC20Objetivos);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC20Objetivos.create({
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
  
    BAC20Objetivos.update(req.body, { where: { id: req.params.id } }).then((BAC20Objetivos) => {
      console.log("BAC20Objetivos", BAC20Objetivos);
      if (BAC20Objetivos.matchedCount === 0) {
        return res.status(404).send("El BAC20Objetivos con ese ID no existe");
      }
      res.send("BAC20Objetivos actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC20Objetivos.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC20Objetivos que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;