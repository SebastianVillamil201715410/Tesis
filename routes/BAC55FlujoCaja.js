var express = require("express");
const Joi = require("joi");
const BAC55FlujoCaja = require("../models/BAC55FlujoCaja");

var router = express.Router();

const schema = Joi.object({
    desde: Joi.date().required(),
    hasta: Joi.date().required(),
    saldoIncial: Joi.number().required(),
    totalIngresosPeriodo: Joi.number().required(),
    totalEgresosPeriodo: Joi.number().required(),
    saldoFinal: Joi.number().required(),
    indicadoresFinancierosFLujoCaja: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC55FlujoCaja.findAll().then((BAC55FlujoCaja) => {
     console.log("BAC55FlujoCaja", BAC55FlujoCaja);
     res.send(BAC55FlujoCaja);
   });
});

router.get("/:id", function (req, res, next) {
    BAC55FlujoCaja.findByPk(req.params.id).then((BAC55FlujoCaja) => {
      console.log("BAC55FlujoCaja", BAC55FlujoCaja);
      if (BAC55FlujoCaja === null) {
        res.status(404).send("El BAC55FlujoCaja con ese ID no existe");
      }
      res.send(BAC55FlujoCaja);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC55FlujoCaja.create({
      desde: req.body.desde,
      hasta: req.body.hasta,
      saldoFinal: req.body.saldoFinal,
      totalIngresosPeriodo: req.body.totalIngresosPeriodo,
      totalEgresosPeriodo: req.body.totalEgresosPeriodo,
      saldoFinal: req.body.saldoFinal,
      indicadoresFinancierosFLujoCaja: req.body.indicadoresFinancierosFLujoCaja,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC55FlujoCaja.update(req.body, { where: { id: req.params.id } }).then((BAC55FlujoCaja) => {
      console.log("BAC55FlujoCaja", BAC55FlujoCaja);
      if (BAC55FlujoCaja.matchedCount === 0) {
        return res.status(404).send("El BAC55FlujoCaja con ese ID no existe");
      }
      res.send("BAC55FlujoCaja actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC55FlujoCaja.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC55FlujoCaja que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;