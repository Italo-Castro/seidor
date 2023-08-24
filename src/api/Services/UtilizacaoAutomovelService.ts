import { UtilizacaoAutomovel } from "../../Entities/UtilizacaoAutomovel";

const utilizacoes: UtilizacaoAutomovel[] = [];
export default class UtilizacaoAutomovelService {
  findAll(nomeMotorista?: string, automovel?: string) {
    let utilizacoesFiltrados: UtilizacaoAutomovel[] = [];

    if (nomeMotorista && nomeMotorista !== '' && automovel && automovel !== '') {
      utilizacoesFiltrados = utilizacoes.filter((item) => item.automovelUtilizado === automovel && item.nomeMotorista === nomeMotorista)
    } 
    else if (nomeMotorista && nomeMotorista !== '') {
      utilizacoesFiltrados = utilizacoes.filter((item) => item.nomeMotorista === nomeMotorista);
    }  
    else if (automovel && automovel !== '') {
      utilizacoesFiltrados = utilizacoes.filter((item) => item.automovelUtilizado === automovel);
    } 
    else {
      return utilizacoes;
    }

    return utilizacoesFiltrados;
  }

  findById(id: number) {
    return utilizacoes.filter((item) => item.id === id);
  }

  insert(obj: UtilizacaoAutomovel) {
    obj.id = utilizacoes.length + 1;

    if (!obj.dataInicio)
      throw new Error("Por favor informe a data de inicio da utilização");

    if (!obj.nomeMotorista)
      throw new Error("Por favor informe o motorista responsavél pela utilização");

    if (!obj.automovelUtilizado)
      throw new Error("Por favor informe o automovel utilizado");

    if (!obj.motivo) throw new Error("Por favor informe o motivo da utilizacao");

    const motoristaJaUtilizando = utilizacoes.find(
      (item) => item.nomeMotorista === obj.nomeMotorista && !item.dataFim
    );

    if (motoristaJaUtilizando)
      throw new Error(
        `O motorista ${obj.nomeMotorista}, está com uma utilização em aberto`
      );

    const automovelAlugado = utilizacoes.find(
      (item) =>
        item.automovelUtilizado === obj.automovelUtilizado && !item.dataFim
    );

    if (automovelAlugado)
      throw new Error(
        `O automovel ${obj.automovelUtilizado}, já está em utilização`
      );

    utilizacoes.push(obj);

    return obj;
  }

  update(idAtualizar: number, dataFinalizacao: Date) {
    const index = utilizacoes.findIndex((item) => item.id === idAtualizar);

    if (index < 0) {
      throw new Error(
        `Utilizacao Automovel de id ${idAtualizar} não encontrado`
      );
    }
    utilizacoes[index].dataFim = dataFinalizacao;
    return utilizacoes[index];
  }
}
