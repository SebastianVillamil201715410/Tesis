var express = require("express");
const Joi = require("joi");
const BAC68C = require("../models/BAC68C");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    sigla: Joi.string().min(0).required(),
    version: Joi.number().required(),
    licencia: Joi.string().min(0).required(),
    fabricante: Joi.string().min(0).required(),
    ultimaActualizacion: Joi.date().required(),
    estado: Joi.string().min(0).required(),
    responsableFuncional: Joi.string().min(0).required(),
    responsableTecnico: Joi.string().min(0).required(),
    documentacion: Joi.string().min(0).required(),
    proveedorSoporteId: Joi.number().required(),
    componenteHWId: Joi.number().required(),
    otraInformacionRelevante: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC68C.findAll().then((BAC68C) => {
     console.log("BAC68C", BAC68C);
     res.send(BAC68C);
   });
});

router.get("/:id", function (req, res, next) {
    BAC68C.findByPk(req.params.id).then((BAC68C) => {
      console.log("BAC68C", BAC68C);
      if (BAC68C === null) {
        res.status(404).send("El BAC68C con ese ID no existe");
      }
      res.send(BAC68C);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC68C.create({
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      descripcion: req.body.descripcion,
      sigla: req.body.sigla,
      version: req.body.version,
      licencia: req.body.licencia,
      fabricante: req.body.fabricante,
      ultimaActualizacion: req.body.ultimaActualizacion,
      estado: req.body.estado,
      responsableTecnico: req.body.responsableTecnico,
      responsableFuncional: req.body.responsableFuncional,
      documentacion: req.body.documentacion,
      proveedorSoporteId: req.body.proveedorSoporteId,
      componenteHWId: req.body.componenteHWId,
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
  
    BAC68C.update(req.body, { where: { id: req.params.id } }).then((BAC68C) => {
      console.log("BAC68C", BAC68C);
      if (BAC68C.matchedCount === 0) {
        return res.status(404).send("El BAC68C con ese ID no existe");
      }
      res.send("BAC68C actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC68C.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC68C que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;