import { Router } from "express";
import UtilizacaoAutomovelService from "../Services/UtilizacaoAutomovelService";
import { UtilizacaoAutomovel } from "../../Entities/UtilizacaoAutomovel";

const route = Router();

export default (app: Router) => {
  app.use("/utilizacaoAutomovel", route);

  route.get("", async (req, res) => {
    try {
      const utilizacaoAutomovelService = new UtilizacaoAutomovelService();

      const nomeMotorista = req.query.nomeMotorista?.toString() ?? "";
      const automovel = req.query.automovel?.toString() ?? "";

      const utilizacoes = utilizacaoAutomovelService.findAll(nomeMotorista, automovel);

      return res.json(utilizacoes).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.post("/", async (req, res) => {
    try {
      const utilizacaoAutomovelService = new UtilizacaoAutomovelService();
      const utilizacao = req.body as UtilizacaoAutomovel;

      const obj = utilizacaoAutomovelService.insert(utilizacao);

      return res.json(obj).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  route.patch("/", async (req, res) => {
    try {
      const utilizacaoAutomovelService = new UtilizacaoAutomovelService();

      const idAtualizar = req.query.id;
      const dataFinalizacao = req.body.dataFinalizacao as Date;

      const objAtualizado = utilizacaoAutomovelService.update(
        Number(idAtualizar),
        dataFinalizacao
      );

      return res.json(objAtualizado).status(200);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });
};
