var express = require("express");
const Joi = require("joi");
const BAC33 = require("../models/BAC33");

var router = express.Router();

const schema = Joi.object({
    nombrePaquete: Joi.string().min(0).required(),
    nombreSubpaquete: Joi.string().min(0).required(),
    capacidadNegocioId: Joi.number().required(),
    nombreCapacidadNegocio: Joi.string().min(0).required()
  });

router.get("/", function (req, res, next) {
    BAC33.findAll().then((BAC33) => {
     console.log("BAC33", BAC33);
     res.send(BAC33);
   });
});

router.get("/:id", function (req, res, next) {
    BAC33.findByPk(req.params.id).then((BAC33) => {
      console.log("BAC33", BAC33);
      if (BAC33 === null) {
        res.status(404).send("El BAC33 con ese ID no existe");
      }
      res.send(BAC33);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC33.create({
      nombrePaquete: req.body.nombrePaquete,
      nombreSubpaquete: req.body.nombreSubpaquete,
      capacidadNegocioId: req.body.capacidadNegocioId,
      nombreCapacidadNegocio: req.body.nombreCapacidadNegocio,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC33.update(req.body, { where: { id: req.params.id } }).then((BAC33) => {
      console.log("BAC33", BAC33);
      if (BAC33.matchedCount === 0) {
        return res.status(404).send("El BAC33 con ese ID no existe");
      }
      res.send("BAC33 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC33.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC33 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;