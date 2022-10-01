var express = require("express");
const Joi = require("joi");
const BAC69AFuncionalidades = require("../models/BAC69AFuncionalidades");

var router = express.Router();

const schema = Joi.object({
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC69AFuncionalidades.findAll().then((BAC69AFuncionalidades) => {
     console.log("BAC69AFuncionalidades", BAC69AFuncionalidades);
     res.send(BAC69AFuncionalidades);
   });
});

router.get("/:id", function (req, res, next) {
    BAC69AFuncionalidades.findByPk(req.params.id).then((BAC69AFuncionalidades) => {
      console.log("BAC69AFuncionalidades", BAC69AFuncionalidades);
      if (BAC69AFuncionalidades === null) {
        res.status(404).send("El BAC69AFuncionalidades con ese ID no existe");
      }
      res.send(BAC69AFuncionalidades);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC69AFuncionalidades.create({
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
  
    BAC69AFuncionalidades.update(req.body, { where: { id: req.params.id } }).then((BAC69AFuncionalidades) => {
      console.log("BAC69AFuncionalidades", BAC69AFuncionalidades);
      if (BAC69AFuncionalidades.matchedCount === 0) {
        return res.status(404).send("El BAC69AFuncionalidades con ese ID no existe");
      }
      res.send("BAC69AFuncionalidades actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC69AFuncionalidades.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC69AFuncionalidades que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;