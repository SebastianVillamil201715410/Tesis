var express = require("express");
const Joi = require("joi");
const BAC20Metas = require("../models/BAC20Metas");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC20Metas.findAll().then((BAC20Metas) => {
     console.log("BAC20Metas", BAC20Metas);
     res.send(BAC20Metas);
   });
});

router.get("/:id", function (req, res, next) {
    BAC20Metas.findByPk(req.params.id).then((BAC20Metas) => {
      console.log("BAC20Metas", BAC20Metas);
      if (BAC20Metas === null) {
        res.status(404).send("El BAC20Metas con ese ID no existe");
      }
      res.send(BAC20Metas);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC20Metas.create({
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
  
    BAC20Metas.update(req.body, { where: { id: req.params.id } }).then((BAC20Metas) => {
      console.log("BAC20Metas", BAC20Metas);
      if (BAC20Metas.matchedCount === 0) {
        return res.status(404).send("El BAC20Metas con ese ID no existe");
      }
      res.send("BAC20Metas actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC20Metas.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC20Metas que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;