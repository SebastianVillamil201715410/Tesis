var express = require("express");
const Joi = require("joi");
const BAC61BActividades = require("../models/BAC61BActividades");

var router = express.Router();

const schema = Joi.object({
    nombreActividad: Joi.string().min(0).required(),
    capacidadId: Joi.number().required(),
    clienteProcesoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC61BActividades.findAll().then((BAC61BActividades) => {
     console.log("BAC61BActividades", BAC61BActividades);
     res.send(BAC61BActividades);
   });
});

router.get("/:id", function (req, res, next) {
    BAC61BActividades.findByPk(req.params.id).then((BAC61BActividades) => {
      console.log("BAC61BActividades", BAC61BActividades);
      if (BAC61BActividades === null) {
        res.status(404).send("El BAC61BActividades con ese ID no existe");
      }
      res.send(BAC61BActividades);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC61BActividades.create({
      nombre: req.body.nombre,
      capacidadId: req.body.capacidadId,
      clienteProcesoId: req.body.clienteProcesoId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC61BActividades.update(req.body, { where: { id: req.params.id } }).then((BAC61BActividades) => {
      console.log("BAC61BActividades", BAC61BActividades);
      if (BAC61BActividades.matchedCount === 0) {
        return res.status(404).send("El BAC61BActividades con ese ID no existe");
      }
      res.send("BAC61BActividades actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC61BActividades.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC61BActividades que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;