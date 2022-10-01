var express = require("express");
const Joi = require("joi");
const BAC62C = require("../models/BAC62C");

var router = express.Router();

const schema = Joi.object({
    componentesDatosId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC62C.findAll().then((BAC62C) => {
     console.log("BAC62C", BAC62C);
     res.send(BAC62C);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62C.findByPk(req.params.id).then((BAC62C) => {
      console.log("BAC62C", BAC62C);
      if (BAC62C === null) {
        res.status(404).send("El BAC62C con ese ID no existe");
      }
      res.send(BAC62C);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62C.create({
      componentesDatosId: req.body.componentesDatosId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62C.update(req.body, { where: { id: req.params.id } }).then((BAC62C) => {
      console.log("BAC62C", BAC62C);
      if (BAC62C.matchedCount === 0) {
        return res.status(404).send("El BAC62C con ese ID no existe");
      }
      res.send("BAC62C actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62C.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62C que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;