var express = require("express");
const Joi = require("joi");
const BAC23 = require("../models/BAC23");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    indicadoresEjecucionId: Joi.number().required(),
    accionesPrerrequisitoId: Joi.number().required(),
    proyectoId: Joi.number().required(),
    costo: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC23.findAll().then((BAC23) => {
     console.log("BAC23", BAC23);
     res.send(BAC23);
   });
});

router.get("/:id", function (req, res, next) {
    BAC23.findByPk(req.params.id).then((BAC23) => {
      console.log("BAC23", BAC23);
      if (BAC23 === null) {
        res.status(404).send("El BAC23 con ese ID no existe");
      }
      res.send(BAC23);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC23.create({
      nombre: req.body.nombre,
      indicadoresEjecucionId: req.body.indicadoresEjecucionId,
      accionesPrerrequisitoId: req.body.accionesPrerrequisitoId,
      proyectoId: req.body.proyectoId,
      costo: req.body.costo,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC23.update(req.body, { where: { id: req.params.id } }).then((BAC23) => {
      console.log("BAC23", BAC23);
      if (BAC23.matchedCount === 0) {
        return res.status(404).send("El BAC23 con ese ID no existe");
      }
      res.send("BAC23 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC06.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC23 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;