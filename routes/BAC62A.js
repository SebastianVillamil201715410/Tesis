var express = require("express");
const Joi = require("joi");
const BAC62A = require("../models/BAC62A");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipoSoftware: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    sigla: Joi.string().min(0).required(),
    ultimaActualizacion: Joi.date().required(),
    version: Joi.number().required(),
    licencia: Joi.string().min(0).required(),
    proveedorId: Joi.number().required(),
    estado: Joi.string().min(0).required(),
    responsableFuncional: Joi.string().min(0).required(),
    responsableTecnico: Joi.string().min(0).required(),
    documentacion: Joi.string().min(0).required(),
    tipoDesarrollo: Joi.string().min(0).required(),
    fabricante: Joi.string().min(0).required(),
    stackTecnologico: Joi.string().min(0).required(),
    sistemaOperativo: Joi.string().min(0).required(),
    componentesInfraestructura: Joi.string().min(0).required(),
    servidorAplicaciones: Joi.string().min(0).required(),
    despliegue: Joi.string().min(0).required(),
    otraInformacionRelevante: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC62A.findAll().then((BAC62A) => {
     console.log("BAC62A", BAC62A);
     res.send(BAC62A);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62A.findByPk(req.params.id).then((BAC62A) => {
      console.log("BAC62A", BAC62A);
      if (BAC62A === null) {
        res.status(404).send("El BAC62A con ese ID no existe");
      }
      res.send(BAC62A);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62A.create({
      nombre: req.body.nombre,
      tipoSoftware: req.body.tipoSoftware,
      descripcion: req.body.descripcion,
      sigla: req.body.sigla,
      ultimaActualizacion: req.body.ultimaActualizacion,
      version: req.body.version,
      licencia: req.body.licencia,
      proveedorId: req.body.proveedorId,
      estado: req.body.estado,
      responsableFuncional: req.body.responsableFuncional,
      responsableTecnico: req.body.responsableTecnico,
      documentacion: req.body.documentacion,
      tipoDesarrollo: req.body.tipoDesarrollo,
      fabricante: req.body.fabricante,
      stackTecnologico: req.body.stackTecnologico,
      sistemaOperativo: req.body.sistemaOperativo,
      componentesInfraestructura: req.body.componentesInfraestructura,
      servidorAplicaciones: req.body.servidorAplicaciones,
      despliegue: req.body.despliegue,
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
  
    BAC62A.update(req.body, { where: { id: req.params.id } }).then((BAC62A) => {
      console.log("BAC62A", BAC62A);
      if (BAC62A.matchedCount === 0) {
        return res.status(404).send("El BAC62A con ese ID no existe");
      }
      res.send("BAC62A actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62A.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62A que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;