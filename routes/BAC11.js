var express = require("express");
const Joi = require("joi");
const BAC11 = require("../models/BAC11");

var router = express.Router();

const schema = Joi.object({
    clase: Joi.string().min(0).required(),
    atributoRelacion: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC11.findAll().then((BAC11) => {
     console.log("BAC11", BAC11);
     res.send(BAC11);
   });
});

router.get("/:id", function (req, res, next) {
    BAC11.findByPk(req.params.id).then((BAC11) => {
      console.log("BAC11", BAC11);
      if (BAC11 === null) {
        res.status(404).send("El BAC11 con ese ID no existe");
      }
      res.send(BAC11);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC11.create({
      clase: req.body.clase,
      atributoRelacion: req.body.atributoRelacion,
      descripcion: req.body.descripcion,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC11.update(req.body, { where: { id: req.params.id } }).then((BAC11) => {
      console.log("BAC11", BAC11);
      if (BAC11.matchedCount === 0) {
        return res.status(404).send("El BAC11 con ese ID no existe");
      }
      res.send("BAC11 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC11.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC11 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;