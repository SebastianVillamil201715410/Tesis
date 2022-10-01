var express = require("express");
const Joi = require("joi");
const BAC21 = require("../models/BAC21");

var router = express.Router();

const schema = Joi.object({
    intencion: Joi.string().min(0).required(),
    modelo: Joi.string().min(0).required(),
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required()
  });

router.get("/", function (req, res, next) {
    BAC21.findAll().then((BAC21) => {
     console.log("BAC21", BAC21);
     res.send(BAC21);
   });
});

router.get("/:id", function (req, res, next) {
    BAC21.findByPk(req.params.id).then((BAC21) => {
      console.log("BAC21", BAC21);
      if (BAC21 === null) {
        res.status(404).send("El BAC21 con ese ID no existe");
      }
      res.send(BAC21);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC21.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      modelo: req.body.modelo,
      intencion: req.body.intencion,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC21.update(req.body, { where: { id: req.params.id } }).then((BAC21) => {
      console.log("BAC21", BAC21);
      if (BAC21.matchedCount === 0) {
        return res.status(404).send("El BAC21 con ese ID no existe");
      }
      res.send("BAC21 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC06.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC21 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;