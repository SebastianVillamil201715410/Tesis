var express = require("express");
const Joi = require("joi");
const cliente = require("../models/cliente");

var router = express.Router();

const schema = Joi.object({
  });

router.get("/", function (req, res, next) {
    cliente.findAll().then((cliente) => {
     console.log("cliente", cliente);
     res.send(cliente);
   });
});

router.get("/:id", function (req, res, next) {
    cliente.findByPk(req.params.id).then((cliente) => {
      console.log("cliente", cliente);
      if (cliente === null) {
        res.status(404).send("El cliente con ese ID no existe");
      }
      res.send(cliente);
    });
  });

  router.post("/", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    cliente.create({
    }).then((result) => {
      res.send(result);
    });
  });
  
  router.put("/:id", function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send(error);
    }
  
    cliente.update(req.body, { where: { id: req.params.id } }).then((cliente) => {
      console.log("cliente", cliente);
      if (cliente.matchedCount === 0) {
        return res.status(404).send("El cliente con ese ID no existe");
      }
      res.send("cliente actualizado exitósamente");
    });
  });
  
  router.delete("/:id", function (req, res, next) {
    cliente.destroy({ where: { id: req.params.id } }).then((result) => {
  
      if (result === 0) {
        res.status(404).send("El cliente que busca no existe :(");
      } else {
        res.status(204).send();
      }
    });
  });


module.exports = router;