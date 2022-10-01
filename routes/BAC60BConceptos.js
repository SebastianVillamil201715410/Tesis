var express = require("express");
const Joi = require("joi");
const BAC60BConceptos = require("../models/BAC60BConceptos");

var router = express.Router();

const schema = Joi.object({
    nombreConcepto: Joi.string().min(0).required(),
    usoConcepto: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC60BConceptos.findAll().then((BAC60BConceptos) => {
     console.log("BAC60BConceptos", BAC60BConceptos);
     res.send(BAC60BConceptos);
   });
});

router.get("/:id", function (req, res, next) {
    BAC60BConceptos.findByPk(req.params.id).then((BAC60BConceptos) => {
      console.log("BAC60BConceptos", BAC60BConceptos);
      if (BAC60BConceptos === null) {
        res.status(404).send("El BAC60BConceptos con ese ID no existe");
      }
      res.send(BAC60BConceptos);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC60BConceptos.create({
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
  
    BAC60BConceptos.update(req.body, { where: { id: req.params.id } }).then((BAC60BConceptos) => {
      console.log("BAC60BConceptos", BAC60BConceptos);
      if (BAC60BConceptos.matchedCount === 0) {
        return res.status(404).send("El BAC60BConceptos con ese ID no existe");
      }
      res.send("BAC60BConceptos actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC60BConceptos.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC60BConceptos que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;