var express = require("express");
const Joi = require("joi");
const BAC67BInterfaz = require("../models/BAC67BInterfaz");

var router = express.Router();

const schema = Joi.object({
    url: Joi.string().min(0).required(),
    tipoTecnologia: Joi.string().min(0).required(),
    seguridad: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC67BInterfaz.findAll().then((BAC67BInterfaz) => {
     console.log("BAC67BInterfaz", BAC67BInterfaz);
     res.send(BAC67BInterfaz);
   });
});

router.get("/:id", function (req, res, next) {
    BAC67BInterfaz.findByPk(req.params.id).then((BAC67BInterfaz) => {
      console.log("BAC67BInterfaz", BAC67BInterfaz);
      if (BAC67BInterfaz === null) {
        res.status(404).send("El BAC67BInterfaz con ese ID no existe");
      }
      res.send(BAC67BInterfaz);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
    BAC67BInterfaz.create({
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
  
    BAC67BInterfaz.update(req.body, { where: { id: req.params.id } }).then((BAC67BInterfaz) => {
      console.log("BAC67BInterfaz", BAC67BInterfaz);
      if (BAC67BInterfaz.matchedCount === 0) {
        return res.status(404).send("El BAC67BInterfaz con ese ID no existe");
      }
      res.send("BAC67BInterfaz actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC67BInterfaz.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC67BInterfaz que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;