var express = require("express");
const Joi = require("joi");
const BAC59 = require("../models/BAC59");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipoDocumentacion: Joi.string().min(0).required(),
    macroprocesoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC59.findAll().then((BAC59) => {
     console.log("BAC59", BAC59);
     res.send(BAC59);
   });
});

router.get("/:id", function (req, res, next) {
    BAC59.findByPk(req.params.id).then((BAC59) => {
      console.log("BAC59", BAC59);
      if (BAC59 === null) {
        res.status(404).send("El BAC59 con ese ID no existe");
      }
      res.send(BAC59);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC59.create({
      nombre: req.body.nombre,
      tipoDocumentacion: req.body.tipoDocumentacion,
      macroprocesoId: req.body.macroprocesoId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC59.update(req.body, { where: { id: req.params.id } }).then((BAC59) => {
      console.log("BAC59", BAC59);
      if (BAC59.matchedCount === 0) {
        return res.status(404).send("El BAC59 con ese ID no existe");
      }
      res.send("BAC59 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC59.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC59 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;