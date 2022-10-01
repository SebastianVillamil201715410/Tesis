var express = require("express");
const Joi = require("joi");
const BAC62BInterfaz = require("../models/BAC62BInterfaz");

var router = express.Router();

const schema = Joi.object({
    url: Joi.string().min(0).required(),
    tipoTecnologia: Joi.string().min(0).required(),
    seguridad: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC62BInterfaz.findAll().then((BAC62BInterfaz) => {
     console.log("BAC62BInterfaz", BAC62BInterfaz);
     res.send(BAC62BInterfaz);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62BInterfaz.findByPk(req.params.id).then((BAC62BInterfaz) => {
      console.log("BAC62BInterfaz", BAC62BInterfaz);
      if (BAC62BInterfaz === null) {
        res.status(404).send("El BAC62BInterfaz con ese ID no existe");
      }
      res.send(BAC62BInterfaz);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62BInterfaz.create({
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
  
    BAC62BInterfaz.update(req.body, { where: { id: req.params.id } }).then((BAC62BInterfaz) => {
      console.log("BAC62BInterfaz", BAC62BInterfaz);
      if (BAC62BInterfaz.matchedCount === 0) {
        return res.status(404).send("El BAC62BInterfaz con ese ID no existe");
      }
      res.send("BAC62BInterfaz actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62BInterfaz.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62BInterfaz que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;