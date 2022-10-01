var express = require("express");
const Joi = require("joi");
const BAC58 = require("../models/BAC58");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipoDocumentacion: Joi.string().min(0).required(),
    macroprocesoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC58.findAll().then((BAC58) => {
     console.log("BAC58", BAC58);
     res.send(BAC58);
   });
});

router.get("/:id", function (req, res, next) {
    BAC58.findByPk(req.params.id).then((BAC58) => {
      console.log("BAC58", BAC58);
      if (BAC58 === null) {
        res.status(404).send("El BAC58 con ese ID no existe");
      }
      res.send(BAC58);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC58.create({
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
  
    BAC58.update(req.body, { where: { id: req.params.id } }).then((BAC58) => {
      console.log("BAC58", BAC58);
      if (BAC58.matchedCount === 0) {
        return res.status(404).send("El BAC58 con ese ID no existe");
      }
      res.send("BAC58 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC58.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC58 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;