var express = require("express");
const Joi = require("joi");
const BAC67B = require("../models/BAC67B");

var router = express.Router();

const schema = Joi.object({
    interfazId: Joi.number().required(),
    serviciosId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC67B.findAll().then((BAC67B) => {
     console.log("BAC67B", BAC67B);
     res.send(BAC67B);
   });
});

router.get("/:id", function (req, res, next) {
    BAC67B.findByPk(req.params.id).then((BAC67B) => {
      console.log("BAC67B", BAC67B);
      if (BAC67B === null) {
        res.status(404).send("El BAC67B con ese ID no existe");
      }
      res.send(BAC67B);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67B.create({
      interfazId: req.body.interfazId,
      serviciosId: req.body.serviciosId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67B.update(req.body, { where: { id: req.params.id } }).then((BAC67B) => {
      console.log("BAC67B", BAC67B);
      if (BAC67B.matchedCount === 0) {
        return res.status(404).send("El BAC67B con ese ID no existe");
      }
      res.send("BAC67B actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC67B.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC67B que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;