var express = require("express");
const Joi = require("joi");
const BAC56UnidadesSoporte = require("../models/BAC56UnidadesSoporte");

var router = express.Router();


const schema = Joi.object({
    nombreUnidad: Joi.string().min(0).required(),
    unidadPertenece: Joi.string().min(0).required(),
    cargosUnidadId: Joi.number().required(),
    serviciosInternosId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC56UnidadesSoporte.findAll().then((BAC56UnidadesSoporte) => {
     console.log("BAC56UnidadesSoporte", BAC56UnidadesSoporte);
     res.send(BAC56UnidadesSoporte);
   });
});

router.get("/:id", function (req, res, next) {
    BAC56UnidadesSoporte.findByPk(req.params.id).then((BAC56UnidadesSoporte) => {
      console.log("BAC56UnidadesSoporte", BAC56UnidadesSoporte);
      if (BAC56UnidadesSoporte === null) {
        res.status(404).send("El BAC56UnidadesSoporte con ese ID no existe");
      }
      res.send(BAC56UnidadesSoporte);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56UnidadesSoporte.create({
      nombreUnidad: req.body.nombreUnidad,
      unidadPertenece: req.body.unidadPertenece,
      cargosUnidadId: req.body.cargosUnidadId,
      serviciosInternosId: req.body.serviciosInternosId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56UnidadesSoporte.update(req.body, { where: { id: req.params.id } }).then((BAC56UnidadesSoporte) => {
      console.log("BAC56UnidadesSoporte", BAC56UnidadesSoporte);
      if (BAC56UnidadesSoporte.matchedCount === 0) {
        return res.status(404).send("El BAC56UnidadesSoporte con ese ID no existe");
      }
      res.send("BAC56UnidadesSoporte actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC56UnidadesSoporte.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC56UnidadesSoporte que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  


module.exports = router;