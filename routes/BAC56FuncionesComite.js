var express = require("express");
const Joi = require("joi");
const BAC56FuncionesComite = require("../models/BAC56FuncionesComite");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC56FuncionesComite.findAll().then((BAC56FuncionesComite) => {
     console.log("BAC56FuncionesComite", BAC56FuncionesComite);
     res.send(BAC56FuncionesComite);
   });
});

router.get("/:id", function (req, res, next) {
    BAC56FuncionesComite.findByPk(req.params.id).then((BAC56FuncionesComite) => {
      console.log("BAC56FuncionesComite", BAC56FuncionesComite);
      if (BAC56FuncionesComite === null) {
        res.status(404).send("El BAC56FuncionesComite con ese ID no existe");
      }
      res.send(BAC56FuncionesComite);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56FuncionesComite.create({
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
  
    BAC56FuncionesComite.update(req.body, { where: { id: req.params.id } }).then((BAC56FuncionesComite) => {
      console.log("BAC56FuncionesComite", BAC56FuncionesComite);
      if (BAC56FuncionesComite.matchedCount === 0) {
        return res.status(404).send("El BAC56FuncionesComite con ese ID no existe");
      }
      res.send("BAC56FuncionesComite actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC56FuncionesComite.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC56FuncionesComite que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;