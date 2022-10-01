var express = require("express");
const Joi = require("joi");
const BAC68B = require("../models/BAC68B");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    marca: Joi.string().min(0).required(),
    modelo: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
    uso: Joi.string().min(0).required(),
    RPO: Joi.string().min(0).required(),
    ubicacion: Joi.string().min(0).required(),
    RTO: Joi.string().min(0).required(),
    fechaCompra: Joi.date().required(),
    fechaReemplazo: Joi.date().required(),
    serviceTag: Joi.string().min(0).required(),
    procesador: Joi.string().min(0).required(),
    RAM: Joi.string().min(0).required(),
    funcion: Joi.string().min(0).required(),
    dominio: Joi.string().min(0).required(),
    direccionIp: Joi.number().required(),
    macAddress: Joi.number().required(),
    proveedorSoporteId: Joi.number().required(),
    proveedorGarantia: Joi.string().min(0).required(),
    fechaFinalizacion: Joi.date().required(),
    proveedorSeguro: Joi.string().min(0).required(),
    coberturas: Joi.string().min(0).required(),
    vigenteDesde: Joi.date().required(),
    vigenteHasta: Joi.date().required(),
    tipoBackup: Joi.string().min(0).required(),
    frecuenciaBackup: Joi.string().min(0).required(),
    ubicacionBackup: Joi.string().min(0).required(),
    almacenamientoEspacioGB: Joi.number().required(),
    tipoAlmacenamiento: Joi.string().min(0).required(),
    nombreSO: Joi.string().min(0).required(),
    version: Joi.number().required(),
    licencia: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC68B.findAll().then((BAC68B) => {
     console.log("BAC68B", BAC68B);
     res.send(BAC68B);
   });
});

router.get("/:id", function (req, res, next) {
    BAC68B.findByPk(req.params.id).then((BAC68B) => {
      console.log("BAC68B", BAC68B);
      if (BAC68B === null) {
        res.status(404).send("El BAC68B con ese ID no existe");
      }
      res.send(BAC68B);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC68B.create({
      nombre: req.body.nombre,
      marca: req.body.marca,
      modelo: req.body.modelo,
      tipo: req.body.tipo,
      uso: req.body.uso,
      RPO: req.body.RPO,
      ubicacion: req.body.ubicacion,
      RTO: req.body.RTO,
      fechaCompra: req.body.fechaCompra,
      fechaReemplazo: req.body.fechaReemplazo,
      serviceTag: req.body.serviceTag,
      procesador: req.body.procesador,
      RAM: req.body.RAM,
      funcion: req.body.funcion,
      dominio: req.body.dominio,
      direccionIp: req.body.direccionIp,
      macAddress: req.body.macAddress,
      proveedorSoporteId: req.body.proveedorSoporteId,
      proveedorGarantia: req.body.proveedorGarantia,
      fechaFinalizacion: req.body.fechaFinalizacion,
      proveedorSeguro: req.body.proveedorSeguro,
      coberturas: req.body.coberturas,
      vigenteDesde: req.body.vigenteDesde,
      vigenteHasta: req.body.vigenteHasta,
      tipoBackup: req.body.tipoBackup,
      frecuenciaBackup: req.body.frecuenciaBackup,
      ubicacionBackup: req.body.ubicacionBackup,
      almacenamientoEspacioGB: req.body.almacenamientoEspacioGB,
      tipoAlmacenamiento: req.body.tipoAlmacenamiento,
      nombreSO: req.body.nombreSO,
      version: req.body.version,
      licencia: req.body.licencia,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC68B.update(req.body, { where: { id: req.params.id } }).then((BAC68B) => {
      console.log("BAC68B", BAC68B);
      if (BAC68B.matchedCount === 0) {
        return res.status(404).send("El BAC68B con ese ID no existe");
      }
      res.send("BAC68B actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC68B.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC68B que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;