var express = require("express");
const Joi = require("joi");
const BAC60B = require("../models/BAC60B");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipoDocumentacion: Joi.string().min(0).required(),
    desrcipcion: Joi.string().min(0).required(),
    macroprocesoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC60B.findAll().then((BAC60B) => {
     console.log("BAC60B", BAC60B);
     res.send(BAC60B);
   });
});

router.get("/:id", function (req, res, next) {
    BAC60B.findByPk(req.params.id).then((BAC60B) => {
      console.log("BAC60B", BAC60B);
      if (BAC60B === null) {
        res.status(404).send("El BAC60B con ese ID no existe");
      }
      res.send(BAC60B);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC60B.create({
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
  
    BAC60B.update(req.body, { where: { id: req.params.id } }).then((BAC60B) => {
      console.log("BAC60B", BAC60B);
      if (BAC60B.matchedCount === 0) {
        return res.status(404).send("El BAC60B con ese ID no existe");
      }
      res.send("BAC60B actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC60B.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC60B que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;