var express = require("express");
const Joi = require("joi");
const BAC27 = require("../models/BAC27");

var router = express.Router();

const schema = Joi.object({
    accionId: Joi.number().required(),
    indicadoresId: Joi.number().required(),
    valorActual: Joi.number().required(),
    valorEsperado: Joi.number().required(),
    estado: Joi.string().min(0).required()
  });

router.get("/", function (req, res, next) {
    BAC27.findAll().then((BAC27) => {
     console.log("BAC27", BAC27);
     res.send(BAC27);
   });
});

router.get("/:id", function (req, res, next) {
    BAC27.findByPk(req.params.id).then((BAC27) => {
      console.log("BAC27", BAC27);
      if (BAC27 === null) {
        res.status(404).send("El BAC27 con ese ID no existe");
      }
      res.send(BAC27);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC27.create({
      accionId: req.body.accionId,
      indicadoresId: req.body.indicadoresId,
      valorActual: req.body.valorActual,
      valorEsperado: req.body.valorEsperado,
      estado: req.body.estado,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC27.update(req.body, { where: { id: req.params.id } }).then((BAC27) => {
      console.log("BAC27", BAC27);
      if (BAC27.matchedCount === 0) {
        return res.status(404).send("El BAC27 con ese ID no existe");
      }
      res.send("BAC27 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC27.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC27 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;