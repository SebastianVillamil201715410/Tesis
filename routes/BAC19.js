var express = require("express");
const Joi = require("joi");
const BAC19 = require("../models/BAC19");

var router = express.Router();

const schema = Joi.object({
    valorObjetivo: Joi.number().required(),
    valorInicial: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC19.findAll().then((BAC19) => {
     console.log("BAC19", BAC19);
     res.send(BAC19);
   });
});

router.get("/:id", function (req, res, next) {
    BAC19.findByPk(req.params.id).then((BAC19) => {
      console.log("BAC19", BAC19);
      if (BAC19 === null) {
        res.status(404).send("El BAC19 con ese ID no existe");
      }
      res.send(BAC19);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC19.create({
      valorObjetivo: req.body.valorObjetivo,
      valorInicial: req.body.valorInicial,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC19.update(req.body, { where: { id: req.params.id } }).then((BAC19) => {
      console.log("BAC19", BAC19);
      if (BAC19.matchedCount === 0) {
        return res.status(404).send("El BAC19 con ese ID no existe");
      }
      res.send("BAC19 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC19.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC19 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;