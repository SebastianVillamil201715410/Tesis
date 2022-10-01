var express = require("express");
const Joi = require("joi");
const BAC62H = require("../models/BAC62H");

var router = express.Router();

const schema = Joi.object({
    nombreZona: Joi.string().min(0).required(),
    descripcionZona: Joi.string().min(0).required(),
    componentesSoftwareId: Joi.number().required(),
    sistemasExternosId: Joi.number().required(),
    componentesIntegracionId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62H.findAll().then((BAC62H) => {
     console.log("BAC62H", BAC62H);
     res.send(BAC62H);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62H.findByPk(req.params.id).then((BAC62H) => {
      console.log("BAC62H", BAC62H);
      if (BAC62H === null) {
        res.status(404).send("El BAC62H con ese ID no existe");
      }
      res.send(BAC62H);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62H.create({
      nombreZona: req.body.nombreZona,
      descripcionZona: req.body.descripcionZona,
      componentesSoftwareId: req.body.componentesSoftwareId,
      sistemasExternosId: req.body.sistemasExternosId,
      componentesIntegracionId: req.body.componentesIntegracionId,
      ANS: req.body.ANS,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62H.update(req.body, { where: { id: req.params.id } }).then((BAC62H) => {
      console.log("BAC62H", BAC62H);
      if (BAC62H.matchedCount === 0) {
        return res.status(404).send("El BAC62H con ese ID no existe");
      }
      res.send("BAC62H actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62H.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62H que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });



module.exports = router;