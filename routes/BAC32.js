var express = require("express");
const Joi = require("joi");
const BAC32 = require("../models/BAC32");

var router = express.Router();


const schema = Joi.object({
  });

router.get("/", function (req, res, next) {
    BAC32.findAll().then((BAC32) => {
     console.log("BAC32", BAC32);
     res.send(BAC32);
   });
});

router.get("/:id", function (req, res, next) {
    BAC32.findByPk(req.params.id).then((BAC32) => {
      console.log("BAC32", BAC32);
      if (BAC32 === null) {
        res.status(404).send("El BAC32 con ese ID no existe");
      }
      res.send(BAC32);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC32.create({
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC32.update(req.body, { where: { id: req.params.id } }).then((BAC32) => {
      console.log("BAC32", BAC32);
      if (BAC32.matchedCount === 0) {
        return res.status(404).send("El BAC32 con ese ID no existe");
      }
      res.send("BAC32 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC32.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC32 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;