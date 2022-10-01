var express = require("express");
const Joi = require("joi");
const BAC06 = require("../models/BAC06");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
    contenido: Joi.string().min(0).required()
  });

router.get("/", function (req, res, next) {
    BAC06.findAll().then((BAC06) => {
     console.log("BAC06", BAC06);
     res.send(BAC06);
   });
});

router.get("/:id", function (req, res, next) {
    BAC06.findByPk(req.params.id).then((BAC06) => {
      console.log("BAC06", BAC06);
      if (BAC06 === null) {
        res.status(404).send("El BAC06 con ese ID no existe");
      }
      res.send(BAC06);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC06.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      tipo: req.body.tipo,
      contenido: req.body.contenido,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC06.update(req.body, { where: { id: req.params.id } }).then((BAC06) => {
      console.log("BAC06", BAC06);
      if (BAC06.matchedCount === 0) {
        return res.status(404).send("El BAC06 con ese ID no existe");
      }
      res.send("BAC06 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC06.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC06 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;