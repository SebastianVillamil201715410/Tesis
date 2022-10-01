var express = require("express");
const Joi = require("joi");
const BAC61BConceptos = require("../models/BAC61BConceptos");

var router = express.Router();

const schema = Joi.object({
    nombreConcepto: Joi.string().min(0).required(),
    usoConcepto: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC61BConceptos.findAll().then((BAC61BConceptos) => {
     console.log("BAC61BConceptos", BAC61BConceptos);
     res.send(BAC61BConceptos);
   });
});

router.get("/:id", function (req, res, next) {
    BAC61BConceptos.findByPk(req.params.id).then((BAC61BConceptos) => {
      console.log("BAC61BConceptos", BAC61BConceptos);
      if (BAC61BConceptos === null) {
        res.status(404).send("El BAC61BConceptos con ese ID no existe");
      }
      res.send(BAC61BConceptos);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC61BConceptos.create({
      nombreConcepto: req.body.nombreConcepto,
      usoConcepto: req.body.usoConcepto,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC61BConceptos.update(req.body, { where: { id: req.params.id } }).then((BAC61BConceptos) => {
      console.log("BAC61BConceptos", BAC61BConceptos);
      if (BAC61BConceptos.matchedCount === 0) {
        return res.status(404).send("El BAC61BConceptos con ese ID no existe");
      }
      res.send("BAC61BConceptos actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC61BConceptos.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC61BConceptos que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;