var express = require("express");
const Joi = require("joi");
const BAC62F = require("../models/BAC62F");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    version: Joi.string().min(0).required(),
    fabricante: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62F.findAll().then((BAC62F) => {
     console.log("BAC62F", BAC62F);
     res.send(BAC62F);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62F.findByPk(req.params.id).then((BAC62F) => {
      console.log("BAC62F", BAC62F);
      if (BAC62F === null) {
        res.status(404).send("El BAC62F con ese ID no existe");
      }
      res.send(BAC62F);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62F.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      version: req.body.version,
      fabricante: req.body.fabricante,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62F.update(req.body, { where: { id: req.params.id } }).then((BAC62F) => {
      console.log("BAC62F", BAC62F);
      if (BAC62F.matchedCount === 0) {
        return res.status(404).send("El BAC62F con ese ID no existe");
      }
      res.send("BAC62F actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62F.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62F que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;