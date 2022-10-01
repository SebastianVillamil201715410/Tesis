var express = require("express");
const Joi = require("joi");
const BAC05 = require("../models/BAC05");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC05.findAll().then((BAC05) => {
     console.log("BAC05", BAC05);
     res.send(BAC05);
   });
});

router.get("/:id", function (req, res, next) {
    BAC05.findByPk(req.params.id).then((BAC05) => {
      console.log("BAC05", BAC05);
      if (BAC05 === null) {
        res.status(404).send("El BAC05 con ese ID no existe");
      }
      res.send(BAC05);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC05.create({
      nombre: req.body.nombre,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC05.update(req.body, { where: { id: req.params.id } }).then((BAC05) => {
      console.log("BAC05", BAC05);
      if (BAC05.matchedCount === 0) {
        return res.status(404).send("El BAC05 con ese ID no existe");
      }
      res.send("BAC05 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC05.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC05 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;