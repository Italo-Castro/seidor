import UtilizacaoAutomovelService from "../api/Services/UtilizacaoAutomovelService"; // Importe o módulo a ser testado

const dataInicioUtilizacao = new Date();
describe("UtilizacaoAutomovelService", () => {
  it("Deverá retornar a utilização cadastrada", () => {
    const service = new UtilizacaoAutomovelService();
    const utilizacaoCadastrada = service.insert({
      automovelUtilizado: "gol",
      dataInicio: dataInicioUtilizacao,
      motivo: "testes",
      nomeMotorista: "italo_castro",
    });

    expect(utilizacaoCadastrada).toEqual({
      automovelUtilizado: "gol",
      dataInicio: dataInicioUtilizacao,
      motivo: "testes",
      nomeMotorista: "italo_castro",
      id: 1,
    });
  });
});

describe("UtilizacaoAutomovelService", () => {
  it("Não deixar com que um veiculo que já esteja em utilização seja utlizado", () => {
    const service = new UtilizacaoAutomovelService();

    const dataInicio = new Date().getDate() + 5;
    const respostaErro = () => {
      service.insert({
        automovelUtilizado: "gol",
        dataInicio: new Date(dataInicio),
        motivo: "Motivo2",
        nomeMotorista: "Seidor",
      });
    };

    expect(respostaErro).toThrowError("O automovel gol, já está em utilização");
  });
});

describe("UtilizacaoAutomovelService", () => {
  it("Não deixar com que um motorista que estja com outro veiculo, utilize um novo", () => {
    const service = new UtilizacaoAutomovelService();

    const dataInicio = new Date().getMonth() + 1;
    const respostaErro = () => {
      service.insert({
        automovelUtilizado: "gol",
        dataInicio: new Date(dataInicio),
        motivo: "Motivo2",
        nomeMotorista: "italo_castro",
      });
    };

    expect(respostaErro).toThrowError(
      "O motorista italo_castro, está com uma utilização em aberto"
    );
  });
});

describe("UtilizacaoAutomovelService", () => {
  it("Deverá retornar a utilização do veiculo com a data final atualizada", () => {
    const service = new UtilizacaoAutomovelService();
    const dataFinalizacao = new Date();
    const utilizacaoAtualizada = service.update(1, dataFinalizacao);

    expect(utilizacaoAtualizada).toEqual({
      id: 1,
      automovelUtilizado: "gol",
      dataInicio: dataInicioUtilizacao,
      motivo: "testes",
      nomeMotorista: "italo_castro",
      dataFim: dataFinalizacao,
    });
  });
});

describe("UtilizacaoAutomovelService", () => {
  it("Deverá retornar a utilizacao cadastrada com o mesmo motorista, visto que ele já tenha encerrado a anterior", () => {
    const service = new UtilizacaoAutomovelService();

    const dataInicio = new Date();

    const utilizacaoCadastrada = service.insert({
      automovelUtilizado: "gol",
      dataInicio: dataInicio,
      motivo: "Motivo2",
      nomeMotorista: "Seidor",
    });

    expect(utilizacaoCadastrada).toEqual({
      id: 2,
      automovelUtilizado: "gol",
      dataInicio: dataInicio,
      motivo: "Motivo2",
      nomeMotorista: "Seidor",
    });
  });
});
