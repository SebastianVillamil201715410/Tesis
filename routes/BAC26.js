var express = require("express");
const Joi = require("joi");
const BAC26 = require("../models/BAC26");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC26.findAll().then((BAC26) => {
     console.log("BAC26", BAC26);
     res.send(BAC26);
   });
});

router.get("/:id", function (req, res, next) {
    BAC26.findByPk(req.params.id).then((BAC26) => {
      console.log("BAC26", BAC26);
      if (BAC26 === null) {
        res.status(404).send("El BAC26 con ese ID no existe");
      }
      res.send(BAC26);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC26.create({
      nombre: req.body.nombre,
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
  
    BAC26.update(req.body, { where: { id: req.params.id } }).then((BAC26) => {
      console.log("BAC26", BAC26);
      if (BAC26.matchedCount === 0) {
        return res.status(404).send("El BAC26 con ese ID no existe");
      }
      res.send("BAC26 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC26.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC26 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;