var express = require("express");
const Joi = require("joi");
const BAC12 = require("../models/BAC12");

var router = express.Router();

const schema = Joi.object({
    descripcion: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC12.findAll().then((BAC12) => {
     console.log("BAC12", BAC12);
     res.send(BAC12);
   });
});

router.get("/:id", function (req, res, next) {
    BAC12.findByPk(req.params.id).then((BAC12) => {
      console.log("BAC12", BAC12);
      if (BAC12 === null) {
        res.status(404).send("El BAC12 con ese ID no existe");
      }
      res.send(BAC12);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC12.create({
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
  
    BAC12.update(req.body, { where: { id: req.params.id } }).then((BAC12) => {
      console.log("BAC12", BAC12);
      if (BAC12.matchedCount === 0) {
        return res.status(404).send("El BAC12 con ese ID no existe");
      }
      res.send("BAC12 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC12.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC12 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;