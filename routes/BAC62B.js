var express = require("express");
const Joi = require("joi");
const BAC62B = require("../models/BAC62B");

var router = express.Router();

const schema = Joi.object({
    serviciosId: Joi.number().required(),
    interfazId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62B.findAll().then((BAC62B) => {
     console.log("BAC62B", BAC62B);
     res.send(BAC62B);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62B.findByPk(req.params.id).then((BAC62B) => {
      console.log("BAC62B", BAC62B);
      if (BAC62B === null) {
        res.status(404).send("El BAC62B con ese ID no existe");
      }
      res.send(BAC62B);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62B.create({
      serviciosId: req.body.serviciosId,
      interfazId: req.body.interfazId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62B.update(req.body, { where: { id: req.params.id } }).then((BAC62B) => {
      console.log("BAC62B", BAC62B);
      if (BAC62B.matchedCount === 0) {
        return res.status(404).send("El BAC62B con ese ID no existe");
      }
      res.send("BAC62B actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62B.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62B que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;