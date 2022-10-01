var express = require("express");
const Joi = require("joi");
const BAC62GOrganizacion = require("../models/BAC62GOrganizacion");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    sistemasExternosId: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC62GOrganizacion.findAll().then((BAC62GOrganizacion) => {
     console.log("BAC62GOrganizacion", BAC62GOrganizacion);
     res.send(BAC62GOrganizacion);
   });
});

router.get("/:id", function (req, res, next) {
    BAC62GOrganizacion.findByPk(req.params.id).then((BAC62GOrganizacion) => {
      console.log("BAC62GOrganizacion", BAC62GOrganizacion);
      if (BAC62GOrganizacion === null) {
        res.status(404).send("El BAC62GOrganizacion con ese ID no existe");
      }
      res.send(BAC62GOrganizacion);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62GOrganizacion.create({
      nombre: req.body.nombre,
      sistemasExternosId: req.body.sistemasExternosId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC62GOrganizacion.update(req.body, { where: { id: req.params.id } }).then((BAC62GOrganizacion) => {
      console.log("BAC62GOrganizacion", BAC62GOrganizacion);
      if (BAC62GOrganizacion.matchedCount === 0) {
        return res.status(404).send("El BAC62GOrganizacion con ese ID no existe");
      }
      res.send("BAC62GOrganizacion actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC62GOrganizacion.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC62GOrganizacion que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;