var express = require("express");
const Joi = require("joi");
const BAC67E = require("../models/BAC67E");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    conceptoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC67E.findAll().then((BAC67E) => {
     console.log("BAC67E", BAC67E);
     res.send(BAC67E);
   });
});

router.get("/:id", function (req, res, next) {
    BAC67E.findByPk(req.params.id).then((BAC67E) => {
      console.log("BAC67E", BAC67E);
      if (BAC67E === null) {
        res.status(404).send("El BAC67E con ese ID no existe");
      }
      res.send(BAC67E);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67E.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
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
  
    BAC67E.update(req.body, { where: { id: req.params.id } }).then((BAC67E) => {
      console.log("BAC67E", BAC67E);
      if (BAC67E.matchedCount === 0) {
        return res.status(404).send("El BAC67E con ese ID no existe");
      }
      res.send("BAC67E actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC67E.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC67E que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;