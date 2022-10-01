var express = require("express");
const Joi = require("joi");
const BAC04 = require("../models/BAC04");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC04.findAll().then((BAC04) => {
     console.log("BAC04", BAC04);
     res.send(BAC04);
   });
});

router.get("/:id", function (req, res, next) {
    BAC04.findByPk(req.params.id).then((BAC04) => {
      console.log("BAC04", BAC04);
      if (BAC04 === null) {
        res.status(404).send("El BAC04 con ese ID no existe");
      }
      res.send(BAC04);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC04.create({
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
  
    BAC04.update(req.body, { where: { id: req.params.id } }).then((BAC04) => {
      console.log("BAC04", BAC04);
      if (BAC04.matchedCount === 0) {
        return res.status(404).send("El BAC04 con ese ID no existe");
      }
      res.send("BAC04 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC04.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC04 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;