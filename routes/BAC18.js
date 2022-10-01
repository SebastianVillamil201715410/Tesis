var express = require("express");
const Joi = require("joi");
const BAC18 = require("../models/BAC18");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC18.findAll().then((BAC18) => {
     console.log("BAC18", BAC18);
     res.send(BAC18);
   });
});

router.get("/:id", function (req, res, next) {
    BAC18.findByPk(req.params.id).then((BAC18) => {
      console.log("BAC18", BAC18);
      if (BAC18 === null) {
        res.status(404).send("El BAC18 con ese ID no existe");
      }
      res.send(BAC18);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC18.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC18.update(req.body, { where: { id: req.params.id } }).then((BAC18) => {
      console.log("BAC18", BAC18);
      if (BAC18.matchedCount === 0) {
        return res.status(404).send("El BAC18 con ese ID no existe");
      }
      res.send("BAC18 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC18.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC18 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;