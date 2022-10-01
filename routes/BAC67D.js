var express = require("express");
const Joi = require("joi");
const BAC67D = require("../models/BAC67D");

var router = express.Router();

const schema = Joi.object({
    conceptoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC67D.findAll().then((BAC67D) => {
     console.log("BAC67D", BAC67D);
     res.send(BAC67D);
   });
});

router.get("/:id", function (req, res, next) {
    BAC67D.findByPk(req.params.id).then((BAC67D) => {
      console.log("BAC67D", BAC67D);
      if (BAC67D === null) {
        res.status(404).send("El BAC67D con ese ID no existe");
      }
      res.send(BAC67D);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67D.create({
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
  
    BAC67D.update(req.body, { where: { id: req.params.id } }).then((BAC67D) => {
      console.log("BAC67D", BAC67D);
      if (BAC67D.matchedCount === 0) {
        return res.status(404).send("El BAC67D con ese ID no existe");
      }
      res.send("BAC67D actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC67D.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC67D que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;