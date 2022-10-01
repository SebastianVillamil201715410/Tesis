var express = require("express");
const Joi = require("joi");
const BAC31 = require("../models/BAC31");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    tipo: Joi.string().min(0).required(),
    critico: Joi.string().min(0).required()
  });

router.get("/", function (req, res, next) {
    BAC31.findAll().then((BAC31) => {
     console.log("BAC31", BAC31);
     res.send(BAC31);
   });
});

router.get("/:id", function (req, res, next) {
    BAC31.findByPk(req.params.id).then((BAC31) => {
      console.log("BAC31", BAC31);
      if (BAC31 === null) {
        res.status(404).send("El BAC31 con ese ID no existe");
      }
      res.send(BAC31);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC31.create({
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      critica: req.body.critica,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC31.update(req.body, { where: { id: req.params.id } }).then((BAC31) => {
      console.log("BAC31", BAC31);
      if (BAC31.matchedCount === 0) {
        return res.status(404).send("El BAC31 con ese ID no existe");
      }
      res.send("BAC31 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC31.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC31 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;