var express = require("express");
const Joi = require("joi");
const BAC57Soporte = require("../models/BAC57Soporte");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC57Soporte.findAll().then((BAC57Soporte) => {
     console.log("BAC57Soporte", BAC57Soporte);
     res.send(BAC57Soporte);
   });
});

router.get("/:id", function (req, res, next) {
    BAC57Soporte.findByPk(req.params.id).then((BAC57Soporte) => {
      console.log("BAC57Soporte", BAC57Soporte);
      if (BAC57Soporte === null) {
        res.status(404).send("El BAC57Soporte con ese ID no existe");
      }
      res.send(BAC57Soporte);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC57Soporte.create({
      nombre: req.body.nombre,
      tipo: req.body.tipo,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC57Soporte.update(req.body, { where: { id: req.params.id } }).then((BAC57Soporte) => {
      console.log("BAC57Soporte", BAC57Soporte);
      if (BAC57Soporte.matchedCount === 0) {
        return res.status(404).send("El BAC57Soporte con ese ID no existe");
      }
      res.send("BAC57Soporte actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC57Soporte.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC57Soporte que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;