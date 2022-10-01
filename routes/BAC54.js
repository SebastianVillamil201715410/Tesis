var express = require("express");
const Joi = require("joi");
const BAC54 = require("../models/BAC54");

var router = express.Router();

const schema = Joi.object({
    empresa: Joi.string().min(0).required(),
    negocios: Joi.string().min(0).required(),
    nombreLineaNegocio: Joi.string().min(0).required(),
    serviciosNegocioId: Joi.number().required(),
});

router.get("/", function (req, res, next) {
    BAC54.findAll().then((BAC54) => {
 console.log("BAC54", BAC54);
 res.send(BAC54);
});
});

router.get("/:id", function (req, res, next) {
    BAC54.findByPk(req.params.id).then((BAC54) => {
  console.log("BAC54", BAC54);
  if (BAC54 === null) {
    res.status(404).send("El BAC54 con ese ID no existe");
  }
  res.send(BAC54);
});
});

router.post("/", function (req, res, next) {
const { error } = schema.validate(req.body);
if (error) {
  return res.status(404).send(error);
}

BAC54.create({
  empresa: req.body.empresa,
  negocios: req.body.negocios,
  nombreLineaNegocio: req.body.nombreLineaNegocio,
  serviciosNegocioId: req.body.serviciosNegocioId,
}).then((result) => {
  res.send(result);
});
});

router.put("/:id", function (req, res, next) {
const { error } = schema.validate(req.body);
if (error) {
  return res.status(404).send(error);
}

BAC54.update(req.body, { where: { id: req.params.id } }).then((BAC54) => {
  console.log("BAC54", BAC54);
  if (BAC54.matchedCount === 0) {
    return res.status(404).send("El BAC54 con ese ID no existe");
  }
  res.send("BAC54 actualizado exitósamente");
});
});

router.delete("/:id", function (req, res, next) {
    BAC54.destroy({ where: { id: req.params.id } }).then((result) => {

  if (result === 0) {
    res.status(404).send("El BAC54 que busca no existe :(");
  } else {
    res.status(204).send();
  }
});
});


module.exports = router;