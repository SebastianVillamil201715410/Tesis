var express = require("express");
const Joi = require("joi");
const BAC20 = require("../models/BAC20");

var router = express.Router();

const schema = Joi.object({
    objetivosId: Joi.number().required(),
    metasId: Joi.number().required(),
    fichaTecnicaId: Joi.number().required()
  });

router.get("/", function (req, res, next) {
    BAC20.findAll().then((BAC20) => {
     console.log("BAC20", BAC20);
     res.send(BAC20);
   });
});

router.get("/:id", function (req, res, next) {
    BAC20.findByPk(req.params.id).then((BAC20) => {
      console.log("BAC20", BAC20);
      if (BAC20 === null) {
        res.status(404).send("El BAC20 con ese ID no existe");
      }
      res.send(BAC20);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC20.create({
      objetivosId: req.body.objetivosId,
      metasId: req.body.metasId,
      fichaTecnicaId: req.body.fichaTecnicaId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC20.update(req.body, { where: { id: req.params.id } }).then((BAC20) => {
      console.log("BAC20", BAC20);
      if (BAC20.matchedCount === 0) {
        return res.status(404).send("El BAC20 con ese ID no existe");
      }
      res.send("BAC20 actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC20.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC20 que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;