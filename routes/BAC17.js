var express = require("express");
const Joi = require("joi");
const BAC17 = require("../models/BAC17");

var router = express.Router();

const schema = Joi.object({
    empresa: Joi.string().min(0).required(),
    propostioSuperior: Joi.string().min(0).required(),
    objetivoRetador: Joi.string().min(0).required(),
    vision: Joi.string().min(0).required(),
    mision: Joi.string().min(0).required()
  });

router.get("/", function (req, res, next) {
    BAC17.findAll().then((BAC17) => {
     console.log("BAC17", BAC17);
     res.send(BAC17);
   });
});

router.get("/:id", function (req, res, next) {
    BAC17.findByPk(req.params.id).then((BAC17) => {
      console.log("BAC17", BAC17);
      if (BAC17 === null) {
        res.status(404).send("El BAC17 con ese ID no existe");
      }
      res.send(BAC17);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC17.create({
      empresa: req.body.empresa,
      propostioSuperior: req.body.propostioSuperior,
      objetivoRetador: req.body.objetivoRetador,
      vision: req.body.vision,
      mision: req.body.mision,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC17.update(req.body, { where: { id: req.params.id } }).then((BAC17) => {
      console.log("BAC17", BAC17);
      if (BAC17.matchedCount === 0) {
        return res.status(404).send("El BAC17 con ese ID no existe");
      }
      res.send("BAC17 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC17.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC17 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;