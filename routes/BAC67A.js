var express = require("express");
const Joi = require("joi");
const BAC67A = require("../models/BAC67A");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
    estado: Joi.string().min(0).required(),
    documentacion: Joi.string().min(0).required(),
    tamanio: Joi.string().min(0).required(),
    componentesInfraestructura: Joi.string().min(0).required(),
    otraInformacionRelevante: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC67A.findAll().then((BAC67A) => {
     console.log("BAC67A", BAC67A);
     res.send(BAC67A);
   });
});

router.get("/:id", function (req, res, next) {
    BAC67A.findByPk(req.params.id).then((BAC67A) => {
      console.log("BAC67A", BAC67A);
      if (BAC67A === null) {
        res.status(404).send("El BAC67A con ese ID no existe");
      }
      res.send(BAC67A);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67A.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      tipo: req.body.tipo,
      estado: req.body.estado,
      documentacion: req.body.documentacion,
      tamanio: req.body.tamanio,
      componentesInfraestructura: req.body.componentesInfraestructura,
      otraInformacionRelevante: req.body.otraInformacionRelevante,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67A.update(req.body, { where: { id: req.params.id } }).then((BAC67A) => {
      console.log("BAC67A", BAC67A);
      if (BAC67A.matchedCount === 0) {
        return res.status(404).send("El BAC67A con ese ID no existe");
      }
      res.send("BAC67A actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC67A.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC67A que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;