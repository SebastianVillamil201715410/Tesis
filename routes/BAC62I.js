var express = require("express");
const Joi = require("joi");
const BAC62I = require("../models/BAC62I");

var router = express.Router();

const schema = Joi.object({
    descripcionConector: Joi.string().min(0).required(),
    tipoInvocacion: Joi.string().min(0).required(),
    protocolo: Joi.string().min(0).required(),
    clienteId: Joi.number().required(),
    interfazServicioId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62I.findAll().then((BAC62I) => {
     console.log("BAC62I", BAC62I);
     res.send(BAC62I);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62I.findByPk(req.params.id).then((BAC62I) => {
      console.log("BAC62I", BAC62I);
      if (BAC62I === null) {
        res.status(404).send("El BAC62I con ese ID no existe");
      }
      res.send(BAC62I);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62I.create({
      descripcionConector: req.body.descripcionConector,
      tipoInvocacion: req.body.tipoInvocacion,
      protocolo: req.body.protocolo,
      clienteId: req.body.clienteId,
      interfazServicioId: req.body.interfazServicioId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62I.update(req.body, { where: { id: req.params.id } }).then((BAC62I) => {
      console.log("BAC62I", BAC62I);
      if (BAC62I.matchedCount === 0) {
        return res.status(404).send("El BAC62I con ese ID no existe");
      }
      res.send("BAC62I actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62I.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62I que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;