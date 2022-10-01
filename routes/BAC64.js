var express = require("express");
const Joi = require("joi");
const BAC64 = require("../models/BAC64");

var router = express.Router();

const schema = Joi.object({
    procesosInternosId: Joi.number().required(),
    capacidadesNegocioId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC64.findAll().then((BAC64) => {
     console.log("BAC64", BAC64);
     res.send(BAC64);
   });
});

router.get("/:id", function (req, res, next) {
    BAC64.findByPk(req.params.id).then((BAC64) => {
      console.log("BAC64", BAC64);
      if (BAC64 === null) {
        res.status(404).send("El BAC64 con ese ID no existe");
      }
      res.send(BAC64);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC64.create({
      procesosInternosId: req.body.procesosInternosId,
      capacidadesNegocioId: req.body.capacidadesNegocioId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC64.update(req.body, { where: { id: req.params.id } }).then((BAC64) => {
      console.log("BAC64", BAC64);
      if (BAC64.matchedCount === 0) {
        return res.status(404).send("El BAC64 con ese ID no existe");
      }
      res.send("BAC64 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC64.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC64 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;