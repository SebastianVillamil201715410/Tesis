var express = require("express");
const Joi = require("joi");
const BAC67C = require("../models/BAC67C");

var router = express.Router();

const schema = Joi.object({
    conceptoId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC67C.findAll().then((BAC67C) => {
     console.log("BAC67C", BAC67C);
     res.send(BAC67C);
   });
});

router.get("/:id", function (req, res, next) {
    BAC67C.findByPk(req.params.id).then((BAC67C) => {
      console.log("BAC67C", BAC67C);
      if (BAC67C === null) {
        res.status(404).send("El BAC67C con ese ID no existe");
      }
      res.send(BAC67C);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67C.create({
      conceptoId: req.body.conceptoId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC67C.update(req.body, { where: { id: req.params.id } }).then((BAC67C) => {
      console.log("BAC67C", BAC67C);
      if (BAC67C.matchedCount === 0) {
        return res.status(404).send("El BAC67C con ese ID no existe");
      }
      res.send("BAC67C actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC67C.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC67C que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;