var express = require("express");
const Joi = require("joi");
const BAC60BActividades = require("../models/BAC60BActividades");

var router = express.Router();

const schema = Joi.object({
    nombreActividad: Joi.string().min(0).required(),
    capacidadId: Joi.number().required(),
    clienteProcesoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC60BActividades.findAll().then((BAC60BActividades) => {
     console.log("BAC60BActividades", BAC60BActividades);
     res.send(BAC60BActividades);
   });
});

router.get("/:id", function (req, res, next) {
    BAC60BActividades.findByPk(req.params.id).then((BAC60BActividades) => {
      console.log("BAC60BActividades", BAC60BActividades);
      if (BAC60BActividades === null) {
        res.status(404).send("El BAC60BActividades con ese ID no existe");
      }
      res.send(BAC60BActividades);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC60BActividades.create({
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
  
    BAC60BActividades.update(req.body, { where: { id: req.params.id } }).then((BAC60BActividades) => {
      console.log("BAC60BActividades", BAC60BActividades);
      if (BAC60BActividades.matchedCount === 0) {
        return res.status(404).send("El BAC60BActividades con ese ID no existe");
      }
      res.send("BAC60BActividades actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC60BActividades.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC60BActividades que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;