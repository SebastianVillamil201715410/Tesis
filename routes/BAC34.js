var express = require("express");
const Joi = require("joi");
const BAC34 = require("../models/BAC34");

var router = express.Router();

const schema = Joi.object({
    procesosNegocioId: Joi.number().required(),
    capacidadesNegocioId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC34.findAll().then((BAC34) => {
     console.log("BAC34", BAC34);
     res.send(BAC34);
   });
});

router.get("/:id", function (req, res, next) {
    BAC34.findByPk(req.params.id).then((BAC34) => {
      console.log("BAC34", BAC34);
      if (BAC34 === null) {
        res.status(404).send("El BAC34 con ese ID no existe");
      }
      res.send(BAC34);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC34.create({
      procesosNegocioId: req.body.procesosNegocioId,
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
  
    BAC34.update(req.body, { where: { id: req.params.id } }).then((BAC34) => {
      console.log("BAC34", BAC34);
      if (BAC34.matchedCount === 0) {
        return res.status(404).send("El BAC34 con ese ID no existe");
      }
      res.send("BAC34 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC34.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC34 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;