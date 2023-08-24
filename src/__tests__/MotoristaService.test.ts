import MotoristaService from "../api/Services/MotoristaService";

describe("MotoristaService", () => {
  it("Deverá retornar um array com tamanho igual á 0", () => {
    const service = new MotoristaService();
    const motoristas = service.findAll();
    expect(motoristas).toHaveLength(0);
  });
});

describe("MotoristaService", () => {
  it("Deverá retornar o motorista cadastrado", () => {
    const service = new MotoristaService();
    const motoristaCadastrado = service.insert({
      id: 1,
      nome: "Italo Cesar Castro",
    });

    expect(motoristaCadastrado).toEqual({ id: 1, nome: "Italo Cesar Castro" });
  });
});

describe("MotoristaService", () => {
  it("Deverá retornar a mensagem de motorista deletado", () => {
    const service = new MotoristaService();
    const retorno = service.delete(1);

    expect(retorno).toEqual("Motorista deletado");
  });
});

describe("MotoristaService", () => {
  it("Deverá retornar uma excecao já que não foi informado o nome do motorista", () => {
    const service = new MotoristaService();
    const respostaExcecao = () => {
      service.insert({ id: 1, nome: "" });
    };

    expect(respostaExcecao).toThrow("Nome do motorista não informado");
  });
});

describe("MotoristaService", () => {
  it("Deverá retornar o motorista atualizado", () => {
    const service = new MotoristaService();
    const motoristaAtualizado = service.update(1, { nome: "José" });

    expect(motoristaAtualizado).toEqual({ id: 1, nome: "José" });
  });
});

describe("MotoristaService", () => {
  it("Deverá retornar o motorista com o id buscado", () => {
    const service = new MotoristaService();
    const motoristaAtualizado = service.findById(1);

    expect(motoristaAtualizado).toEqual([{ id: 1, nome: "José" }]);
  });
});
