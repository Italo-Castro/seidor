import { Router } from "express";
import MotoristaService from "../Services/MotoristaService";
import { Motorista } from "../../Entities/Motorista";

const route = Router();

export default (app: Router) => {
  app.use("/motorista", route);

  route.get("", async (req, res) => {
    try {
      const motoristaService = new MotoristaService();

      const nome = req.query.nome?.toString() ?? "";

      const motoristas = motoristaService.findAll(nome);

      return res.json(motoristas).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.get("/findById", async (req, res) => {
    try {
      const motoristaService = new MotoristaService();
      const id = req.query.id;

      const motorista = motoristaService.findById(Number(id));

      return res.json(motorista).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.post("/insert", async (req, res) => {
    try {
      const motoristaService = new MotoristaService();
      const motorista = req.body as Motorista;

      const obj = motoristaService.insert(motorista);

      return res.json(obj).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.patch("/", async (req, res) => {
    try {
      const motoristaService = new MotoristaService();
      const motorista = req.body as Motorista;

      const idAtualizar = req.query.id;

      const objAtualizado = motoristaService.update(
        Number(idAtualizar),
        motorista
      );

      return res.json(objAtualizado).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.delete("/", async (req, res) => {
    try {
      const motoristaService = new MotoristaService();

      const idDelet = req.query.id;
      const retorno = motoristaService.delete(Number(idDelet));

      return res.json(retorno).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });
};
