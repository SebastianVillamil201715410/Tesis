var express = require("express");
const Joi = require("joi");
const BAC62E = require("../models/BAC62E");

var router = express.Router();

const schema = Joi.object({
    conceptoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62E.findAll().then((BAC62E) => {
     console.log("BAC62E", BAC62E);
     res.send(BAC62E);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62E.findByPk(req.params.id).then((BAC62E) => {
      console.log("BAC62E", BAC62E);
      if (BAC62E === null) {
        res.status(404).send("El BAC62E con ese ID no existe");
      }
      res.send(BAC62E);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62E.create({
      conceptoId: req.body.conceptoId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62E.update(req.body, { where: { id: req.params.id } }).then((BAC62E) => {
      console.log("BAC62E", BAC62E);
      if (BAC62E.matchedCount === 0) {
        return res.status(404).send("El BAC62E con ese ID no existe");
      }
      res.send("BAC62E actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62E.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62E que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;