var express = require("express");
const Joi = require("joi");
const BAC17Valores = require("../models/BAC17Valores");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC17Valores.findAll().then((BAC17Valores) => {
     console.log("BAC17Valores", BAC17Valores);
     res.send(BAC17Valores);
   });
});

router.get("/:id", function (req, res, next) {
    BAC17Valores.findByPk(req.params.id).then((BAC17Valores) => {
      console.log("BAC17Valores", BAC17Valores);
      if (BAC17Valores === null) {
        res.status(404).send("El BAC17Valores con ese ID no existe");
      }
      res.send(BAC17Valores);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC17Valores.create({
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
  
    BAC17Valores.update(req.body, { where: { id: req.params.id } }).then((BAC17Valores) => {
      console.log("BAC17Valores", BAC17Valores);
      if (BAC17Valores.matchedCount === 0) {
        return res.status(404).send("El BAC17Valores con ese ID no existe");
      }
      res.send("BAC17Valores actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC17Valores.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC17Valores que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;