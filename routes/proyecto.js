var express = require("express");
const Joi = require("joi");
const proyecto = require("../models/proyecto");

var router = express.Router();

const schema = Joi.object({
});

router.get("/", function (req, res, next) {
    proyecto.findAll().then((proyecto) => {
   console.log("proyecto", proyecto);
   res.send(proyecto);
 });
});

router.get("/:id", function (req, res, next) {
    proyecto.findByPk(req.params.id).then((proyecto) => {
    console.log("proyecto", proyecto);
    if (proyecto === null) {
      res.status(404).send("El proyecto con ese ID no existe");
    }
    res.send(proyecto);
  });
});

router.post("/", function (req, res, next) {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(404).send(error);
  }

  proyecto.create({
  }).then((result) => {
    res.send(result);
  });
});

router.put("/:id", function (req, res, next) {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(404).send(error);
  }

  proyecto.update(req.body, { where: { id: req.params.id } }).then((proyecto) => {
    console.log("proyecto", proyecto);
    if (proyecto.matchedCount === 0) {
      return res.status(404).send("El proyecto con ese ID no existe");
    }
    res.send("proyecto actualizado exitósamente");
  });
});

router.delete("/:id", function (req, res, next) {
    proyecto.destroy({ where: { id: req.params.id } }).then((result) => {

    if (result === 0) {
      res.status(404).send("El proyecto que busca no existe :(");
    } else {
      res.status(204).send();
    }
  });
});


module.exports = router;