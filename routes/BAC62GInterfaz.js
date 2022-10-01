var express = require("express");
const Joi = require("joi");
const BAC62GInterfaz = require("../models/BAC62GInterfaz");

var router = express.Router();

const schema = Joi.object({
    url: Joi.string().min(0).required(),
    tipoTecnologia: Joi.string().min(0).required(),
    seguridad: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC62GInterfaz.findAll().then((BAC62GInterfaz) => {
     console.log("BAC62GInterfaz", BAC62GInterfaz);
     res.send(BAC62GInterfaz);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62GInterfaz.findByPk(req.params.id).then((BAC62GInterfaz) => {
      console.log("BAC62GInterfaz", BAC62GInterfaz);
      if (BAC62GInterfaz === null) {
        res.status(404).send("El BAC62GInterfaz con ese ID no existe");
      }
      res.send(BAC62GInterfaz);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62GInterfaz.create({
      url: req.body.url,
      tipoTecnologia: req.body.tipoTecnologia,
      seguridad: req.body.seguridad,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62GInterfaz.update(req.body, { where: { id: req.params.id } }).then((BAC62GInterfaz) => {
      console.log("BAC62GInterfaz", BAC62GInterfaz);
      if (BAC62GInterfaz.matchedCount === 0) {
        return res.status(404).send("El BAC62GInterfaz con ese ID no existe");
      }
      res.send("BAC62GInterfaz actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62GInterfaz.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62GInterfaz que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;