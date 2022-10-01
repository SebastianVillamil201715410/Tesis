var express = require("express");
const Joi = require("joi");
const BAC30 = require("../models/BAC30");

var router = express.Router();

const schema = Joi.object({
    nombreProceso: Joi.string().min(0).required(),
    objetivoProceso: Joi.string().min(0).required(),
    descripcionActividad: Joi.string().min(0).required()
  });

router.get("/", function (req, res, next) {
    BAC30.findAll().then((BAC30) => {
     console.log("BAC30", BAC30);
     res.send(BAC30);
   });
});

router.get("/:id", function (req, res, next) {
    BAC30.findByPk(req.params.id).then((BAC30) => {
      console.log("BAC30", BAC30);
      if (BAC30 === null) {
        res.status(404).send("El BAC30 con ese ID no existe");
      }
      res.send(BAC30);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC30.create({
      nombreProceso: req.body.nombreProceso,
      objetivoProceso: req.body.objetivoProceso,
      descripcionActividad: req.body.descripcionActividad,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC30.update(req.body, { where: { id: req.params.id } }).then((BAC30) => {
      console.log("BAC30", BAC30);
      if (BAC30.matchedCount === 0) {
        return res.status(404).send("El BAC30 con ese ID no existe");
      }
      res.send("BAC30 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC30.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC30 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;