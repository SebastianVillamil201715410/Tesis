var express = require("express");
const Joi = require("joi");
const BAC61B = require("../models/BAC61B");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipoDocumentacion: Joi.string().min(0).required(),
    desrcipcion: Joi.string().min(0).required(),
    macroprocesoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC61B.findAll().then((BAC61B) => {
     console.log("BAC61B", BAC61B);
     res.send(BAC61B);
   });
});

router.get("/:id", function (req, res, next) {
    BAC61B.findByPk(req.params.id).then((BAC61B) => {
      console.log("BAC61B", BAC61B);
      if (BAC61B === null) {
        res.status(404).send("El BAC61B con ese ID no existe");
      }
      res.send(BAC61B);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC61B.create({
      nombre: req.body.nombre,
      tipoDocumentacion: req.body.tipoDocumentacion,
      desrcipcion: req.body.desrcipcion,
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
  
    BAC61B.update(req.body, { where: { id: req.params.id } }).then((BAC61B) => {
      console.log("BAC61B", BAC61B);
      if (BAC61B.matchedCount === 0) {
        return res.status(404).send("El BAC61B con ese ID no existe");
      }
      res.send("BAC61B actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC61B.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC61B que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;