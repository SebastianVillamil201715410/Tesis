var express = require("express");
const Joi = require("joi");
const BAC63IndicadoresExternos = require("../models/BAC63IndicadoresExternos");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    fuente: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC63IndicadoresExternos.findAll().then((BAC63IndicadoresExternos) => {
     console.log("BAC63IndicadoresExternos", BAC63IndicadoresExternos);
     res.send(BAC63IndicadoresExternos);
   });
});

router.get("/:id", function (req, res, next) {
    BAC63IndicadoresExternos.findByPk(req.params.id).then((BAC63IndicadoresExternos) => {
      console.log("BAC63IndicadoresExternos", BAC63IndicadoresExternos);
      if (BAC63IndicadoresExternos === null) {
        res.status(404).send("El BAC63IndicadoresExternos con ese ID no existe");
      }
      res.send(BAC63IndicadoresExternos);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC63IndicadoresExternos.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      fuente: req.body.fuente,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC63IndicadoresExternos.update(req.body, { where: { id: req.params.id } }).then((BAC63IndicadoresExternos) => {
      console.log("BAC63IndicadoresExternos", BAC63IndicadoresExternos);
      if (BAC63IndicadoresExternos.matchedCount === 0) {
        return res.status(404).send("El BAC63IndicadoresExternos con ese ID no existe");
      }
      res.send("BAC63IndicadoresExternos actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC63IndicadoresExternos.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC63IndicadoresExternos que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;