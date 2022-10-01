var express = require("express");
const Joi = require("joi");
const BAC56Comites = require("../models/BAC56Comites");

var router = express.Router();

const schema = Joi.object({
    nombreComite: Joi.string().min(0).required(),
    cargosComiteId: Joi.number().required(),
    funcionesComiteId: Joi.number().required(),
  });

router.get("/", function (req, res, next) {
    BAC56Comites.findAll().then((BAC56Comites) => {
     console.log("BAC56Comites", BAC56Comites);
     res.send(BAC56Comites);
   });
});

router.get("/:id", function (req, res, next) {
    BAC56Comites.findByPk(req.params.id).then((BAC56Comites) => {
      console.log("BAC56Comites", BAC56Comites);
      if (BAC56Comites === null) {
        res.status(404).send("El BAC56Comites con ese ID no existe");
      }
      res.send(BAC56Comites);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56Comites.create({
      nombreComite: req.body.nombreComite,
      cargosComiteId: req.body.cargosComiteId,
      funcionesComiteId: req.body.funcionesComiteId,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    BAC56Comites.update(req.body, { where: { id: req.params.id } }).then((BAC56Comites) => {
      console.log("BAC56Comites", BAC56Comites);
      if (BAC56Comites.matchedCount === 0) {
        return res.status(404).send("El BAC56Comites con ese ID no existe");
      }
      res.send("BAC56Comites actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    BAC56Comites.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El BAC56Comites que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;