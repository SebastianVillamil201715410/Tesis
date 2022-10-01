var express = require("express");
const Joi = require("joi");
const BAC62D = require("../models/BAC62D");

var router = express.Router();

const schema = Joi.object({
    conceptoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62D.findAll().then((BAC62D) => {
     console.log("BAC62D", BAC62D);
     res.send(BAC62D);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62D.findByPk(req.params.id).then((BAC62D) => {
      console.log("BAC62D", BAC62D);
      if (BAC62D === null) {
        res.status(404).send("El BAC62D con ese ID no existe");
      }
      res.send(BAC62D);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62D.create({
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
  
    BAC62D.update(req.body, { where: { id: req.params.id } }).then((BAC62D) => {
      console.log("BAC62D", BAC62D);
      if (BAC62D.matchedCount === 0) {
        return res.status(404).send("El BAC62D con ese ID no existe");
      }
      res.send("BAC62D actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62D.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62D que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;