var express = require("express");
const Joi = require("joi");
const proveedorSoporte = require("../models/proveedorSoporte");

var router = express.Router();

const schema = Joi.object({
    nombre: Joi.string().min(0).required(),
    desde: Joi.date().required(),
    hasta: Joi.date().required(),
  });

router.get("/", function (req, res, next) {
    proveedorSoporte.findAll().then((proveedorSoporte) => {
     console.log("proveedorSoporte", proveedorSoporte);
     res.send(proveedorSoporte);
   });
});

router.get("/:id", function (req, res, next) {
    proveedorSoporte.findByPk(req.params.id).then((proveedorSoporte) => {
      console.log("proveedorSoporte", proveedorSoporte);
      if (proveedorSoporte === null) {
        res.status(404).send("El proveedorSoporte con ese ID no existe");
      }
      res.send(proveedorSoporte);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    proveedorSoporte.create({
      nombre: req.body.nombre,
      desde: req.body.desde,
      hasta: req.body.hasta,
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    proveedorSoporte.update(req.body, { where: { id: req.params.id } }).then((proveedorSoporte) => {
      console.log("proveedorSoporte", proveedorSoporte);
      if (proveedorSoporte.matchedCount === 0) {
        return res.status(404).send("El proveedorSoporte con ese ID no existe");
      }
      res.send("proveedorSoporte actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    proveedorSoporte.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El proveedorSoporte que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });
  

module.exports = router;