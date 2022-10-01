var express = require("express");
const Joi = require("joi");
const BAC56Cargos = require("../models/BAC56Cargos");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
    perfil: Joi.string().min(0).required(),
    principalesResponsabilidades: Joi.string().min(0).required(),
    cargoJefeId: Joi.number().required(),
    salarioMensual: Joi.number().required(),
    principalesFuncionesId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC56Cargos.findAll().then((BAC56Cargos) => {
     console.log("BAC56Cargos", BAC56Cargos);
     res.send(BAC56Cargos);
   });
});

router.get("/:id", function (req, res, next) {
    BAC56Cargos.findByPk(req.params.id).then((BAC56Cargos) => {
      console.log("BAC56Cargos", BAC56Cargos);
      if (BAC56Cargos === null) {
        res.status(404).send("El BAC56Cargos con ese ID no existe");
      }
      res.send(BAC56Cargos);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56Cargos.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      perfil: req.body.perfil,
      principalesResponsabilidades: req.body.principalesResponsabilidades,
      cargoJefeId: req.body.cargoJefeId,
      salarioMensual: req.body.salarioMensual,
      principalesFuncionesId: req.body.principalesFuncionesId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56Cargos.update(req.body, { where: { id: req.params.id } }).then((BAC56Cargos) => {
      console.log("BAC56Cargos", BAC56Cargos);
      if (BAC56Cargos.matchedCount === 0) {
        return res.status(404).send("El BAC56Cargos con ese ID no existe");
      }
      res.send("BAC56Cargos actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC56Cargos.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC56Cargos que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;