var express = require("express");
const Joi = require("joi");
const BAC56UnidadesNegocio = require("../models/BAC56UnidadesNegocio");

var router = express.Router();

const schema = Joi.object({
    nombreUnidad: Joi.string().min(0).required(),
    unidadPertenece: Joi.string().min(0).required(),
    cargosUnidadId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC56UnidadesNegocio.findAll().then((BAC56UnidadesNegocio) => {
     console.log("BAC56UnidadesNegocio", BAC56UnidadesNegocio);
     res.send(BAC56UnidadesNegocio);
   });
});

router.get("/:id", function (req, res, next) {
    BAC56UnidadesNegocio.findByPk(req.params.id).then((BAC56UnidadesNegocio) => {
      console.log("BAC56UnidadesNegocio", BAC56UnidadesNegocio);
      if (BAC56UnidadesNegocio === null) {
        res.status(404).send("El BAC56UnidadesNegocio con ese ID no existe");
      }
      res.send(BAC56UnidadesNegocio);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56UnidadesNegocio.create({
      nombreUnidad: req.body.nombreUnidad,
      unidadPertenece: req.body.unidadPertenece,
      cargosUnidadId: req.body.cargosUnidadId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56UnidadesNegocio.update(req.body, { where: { id: req.params.id } }).then((BAC56UnidadesNegocio) => {
      console.log("BAC56UnidadesNegocio", BAC56UnidadesNegocio);
      if (BAC56UnidadesNegocio.matchedCount === 0) {
        return res.status(404).send("El BAC56UnidadesNegocio con ese ID no existe");
      }
      res.send("BAC56UnidadesNegocio actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC56UnidadesNegocio.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC56UnidadesNegocio que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  


module.exports = router;