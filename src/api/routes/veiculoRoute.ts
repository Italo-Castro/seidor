import { Router } from "express";
import VeiculoService from "../Services/VeiculoService";
import { Veiculo } from "../../Entities/Veiculo";

const route = Router();

export default (app: Router) => {
  app.use("/veiculo", route);

  route.get("", async (req, res) => {
    try {
      const veiculoService = new VeiculoService();
      const cor = req.query.cor?.toString() ?? "";
      const marca = req.query.marca?.toString() ?? "";

      const veiculos = veiculoService.findAll(cor, marca);

      return res.json(veiculos).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.get("/findById", async (req, res) => {
    try {
      const veiculoService = new VeiculoService();
      const id = req.query.id;

      const veiculo = veiculoService.findById(Number(id));

      return res.json(veiculo).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.post("/insert", async (req, res) => {
    try {
      const veiculoService = new VeiculoService();
      const veiculo = req.body as Veiculo;

      const obj = veiculoService.insert(veiculo);

      return res.json(obj).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.patch("/", async (req, res) => {
    try {
      const veiculoService = new VeiculoService();
      const veiculo = req.body as Veiculo;

      const idAtualizar = req.query.id;
      const objAtualizado = veiculoService.update(Number(idAtualizar), veiculo);

      return res.json(objAtualizado).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.delete("/", async (req, res) => {
    try {
      const veiculoService = new VeiculoService();

      const idDelet = req.query.id;
      const retorno = veiculoService.delete(Number(idDelet));

      return res.json(retorno).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });
};
