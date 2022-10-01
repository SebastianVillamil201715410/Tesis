var express = require("express");
const Joi = require("joi");
const BAC28 = require("../models/BAC28");

var router = express.Router();

const schema = Joi.object({
    rol: Joi.string().min(0).required(),
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC28.findAll().then((BAC28) => {
     console.log("BAC28", BAC28);
     res.send(BAC28);
   });
});

router.get("/:id", function (req, res, next) {
    BAC28.findByPk(req.params.id).then((BAC28) => {
      console.log("BAC28", BAC28);
      if (BAC28 === null) {
        res.status(404).send("El BAC28 con ese ID no existe");
      }
      res.send(BAC28);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC28.create({
      rol: req.body.rol,
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
  
    BAC28.update(req.body, { where: { id: req.params.id } }).then((BAC28) => {
      console.log("BAC28", BAC28);
      if (BAC28.matchedCount === 0) {
        return res.status(404).send("El BAC28 con ese ID no existe");
      }
      res.send("BAC28 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC28.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC28 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;