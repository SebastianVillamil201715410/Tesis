var express = require("express");
const Joi = require("joi");
const BAC29 = require("../models/BAC29");

var router = express.Router();

const schema = Joi.object({
    rolesParticipantesId: Joi.number().required(),
    funcionId: Joi.number().required(),
    nombreComite: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required()
  });

router.get("/", function (req, res, next) {
    BAC29.findAll().then((BAC29) => {
     console.log("BAC29", BAC29);
     res.send(BAC29);
   });
});

router.get("/:id", function (req, res, next) {
    BAC29.findByPk(req.params.id).then((BAC29) => {
      console.log("BAC29", BAC29);
      if (BAC29 === null) {
        res.status(404).send("El BAC29 con ese ID no existe");
      }
      res.send(BAC29);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC29.create({
      rolesParticipantesId: req.body.rolesParticipantesId,
      funcionId: req.body.funcionId,
      descripcion: req.body.descripcion,
      nombreComite: req.body.nombreComite,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC29.update(req.body, { where: { id: req.params.id } }).then((BAC29) => {
      console.log("BAC29", BAC29);
      if (BAC29.matchedCount === 0) {
        return res.status(404).send("El BAC29 con ese ID no existe");
      }
      res.send("BAC29 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC29.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC29 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;