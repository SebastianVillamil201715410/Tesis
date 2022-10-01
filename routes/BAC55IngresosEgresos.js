var express = require("express");
const Joi = require("joi");
const BAC55IngresosEgresos = require("../models/BAC55IngresosEgresos");

var router = express.Router();

const schema = Joi.object({
    desde: Joi.date().required(),
    hasta: Joi.date().required(),
    totalIngresosOperacionales: Joi.number().required(),
    totalIngresosNoOperacionales: Joi.number().required(),
    totalIngresos: Joi.number().required(),
    totalCostos: Joi.number().required(),
    totalGastos: Joi.number().required(),
    totalEgresosOperacionales: Joi.number().required(),
    totalEgresosNoOperacionales: Joi.number().required(),
    totalEgresos: Joi.number().required(),
    amortizacionDeuda: Joi.number().required(),
    interesesDeuda: Joi.number().required(),
    depreciacionActivos: Joi.number().required(),
    pagoImpuestos: Joi.number().required(),
    utilidadBruta: Joi.number().required(),
    margenBruto: Joi.number().required(),
    EBITDA: Joi.number().required(),
    porcentajeEBITDA: Joi.number().required(),
    utilidadNeta: Joi.number().required(),
    margenNeto: Joi.number().required(), 
  });

router.get("/", function (req, res, next) {
    BAC55IngresosEgresos.findAll().then((BAC55IngresosEgresos) => {
     console.log("BAC55IngresosEgresos", BAC55IngresosEgresos);
     res.send(BAC55IngresosEgresos);
   });
});

router.get("/:id", function (req, res, next) {
    BAC55IngresosEgresos.findByPk(req.params.id).then((BAC55IngresosEgresos) => {
      console.log("BAC55IngresosEgresos", BAC55IngresosEgresos);
      if (BAC55IngresosEgresos === null) {
        res.status(404).send("El BAC55IngresosEgresos con ese ID no existe");
      }
      res.send(BAC55IngresosEgresos);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC55IngresosEgresos.create({
      desde: req.body.desde,
      hasta: req.body.hasta,
      totalIngresosOperacionales: req.body.totalIngresosOperacionales,
      totalIngresosNoOperacionales: req.body.totalIngresosNoOperacionales,
      totalIngresos: req.body.totalIngresos,
      totalCostos: req.body.totalCostos,
      totalGastos: req.body.totalGastos,
      totalEgresosOperacionales: req.body.totalEgresosOperacionales,
      totalEgresosNoOperacionales: req.body.totalEgresosNoOperacionales,
      totalEgresos: req.body.totalEgresos,
      amortizacionDeuda: req.body.amortizacionDeuda,
      interesesDeuda: req.body.interesesDeuda,
      depreciacionActivos: req.body.depreciacionActivos,
      pagoImpuestos: req.body.pagoImpuestos,
      utilidadBruta: req.body.utilidadBruta,
      margenBruto: req.body.margenBruto,
      EBITDA: req.body.EBITDA,
      porcentajeEBITDA: req.body.porcentajeEBITDA,
      utilidadNeta: req.body.utilidadNeta,
      margenNeto: req.body.margenNeto,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC55IngresosEgresos.update(req.body, { where: { id: req.params.id } }).then((BAC55IngresosEgresos) => {
      console.log("BAC55IngresosEgresos", BAC55IngresosEgresos);
      if (BAC55IngresosEgresos.matchedCount === 0) {
        return res.status(404).send("El BAC55IngresosEgresos con ese ID no existe");
      }
      res.send("BAC55IngresosEgresos actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC55IngresosEgresos.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC55IngresosEgresos que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;