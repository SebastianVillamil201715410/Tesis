var express = require("express");
const Joi = require("joi");
const BAC63 = require("../models/BAC63");

var router = express.Router();

const schema = Joi.object({
    estrategico: Joi.string().min(0).required(),
    tactico: Joi.string().min(0).required(),
    operativo: Joi.string().min(0).required(),
  });

router.get("/", function (req, res, next) {
    BAC63.findAll().then((BAC63) => {
     console.log("BAC63", BAC63);
     res.send(BAC63);
   });
});

router.get("/:id", function (req, res, next) {
    BAC63.findByPk(req.params.id).then((BAC63) => {
      console.log("BAC63", BAC63);
      if (BAC63 === null) {
        res.status(404).send("El BAC63 con ese ID no existe");
      }
      res.send(BAC63);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC63.create({
      estrategico: req.body.estrategico,
      tactico: req.body.tactico,
      operativo: req.body.operativo,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC63.update(req.body, { where: { id: req.params.id } }).then((BAC63) => {
      console.log("BAC63", BAC63);
      if (BAC63.matchedCount === 0) {
        return res.status(404).send("El BAC63 con ese ID no existe");
      }
      res.send("BAC63 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC63.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC63 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;