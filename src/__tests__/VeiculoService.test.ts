import VeiculoService from "../api/Services/VeiculoService";

describe("VeiculoService", () => {
  it("Deverá retornar um array vazio", () => {
    const service = new VeiculoService();
    const veiculosFiltrados = service.findAll();
    expect(veiculosFiltrados).toHaveLength(0);
  });
});

describe("MotoristaService", () => {
  it("Deverá retornar a excecao que não encontrou veiculo para deletar", () => {
    const service = new VeiculoService();
    const retorno = () => {
      service.delete(1);
    };

    expect(retorno).toThrow("Veiculo não encontrado para ser delatado");
  });
});

describe("VeiculoService", () => {
  it("Deverá retornar o objeto cadastrado", () => {
    const service = new VeiculoService();
    const veiculoCadastrado = service.insert({
      cor: "branco",
      marca: "Chevrolet",
      placa: "ABC-0A00",
    });

    expect(veiculoCadastrado).toEqual({
      id: 1,
      cor: "branco",
      marca: "Chevrolet",
      placa: "ABC-0A00",
    });
  });
});

describe("MotoristaService", () => {
  it("Deverá retornar a mensagem de veiculo deletado", () => {
    const service = new VeiculoService();
    const retorno = service.delete(1);

    expect(retorno).toEqual("Veiculo deletado");
  });
});

describe("VeiculoService", () => {
  it("Deverá retornar o objeto atualiado", () => {
    const service = new VeiculoService();
    service.insert({ cor: "vermelho", marca: "fiat", placa: "ABC-0A00" });

    const veiculoAtualiazdo = service.update(1, {
      cor: "azul",
      marca: "Chevrolet",
      placa: "ABC-0A00",
    });

    expect(veiculoAtualiazdo).toEqual({
      id: 1,
      cor: "azul",
      marca: "Chevrolet",
      placa: "ABC-0A00",
    });
  });
});

describe("VeiculoService", () => {
  it("Deverá retornar um array de tamanho 2 filtrado pela marca do carro", () => {
    const service = new VeiculoService();

    service.insert({
      cor: "vermelho",
      marca: "volkswagen",
      placa: "ABC-5A00",
      id: 0,
    });
    service.insert({
      cor: "azul",
      marca: "volkswagen",
      placa: "ABC-5A00",
      id: 0,
    });
    service.insert({
      cor: "branco",
      marca: "Chevrolet",
      placa: "ABC-5A00",
      id: 0,
    });

    const veiculosFiltrados = service.findAll("", "volkswagen");

    expect(veiculosFiltrados).toHaveLength(2);
  });
});

describe("VeiculoService", () => {
  it("Deverá retornar um erro que a cor não foi informada", () => {
    const service = new VeiculoService();
    const exception = () => {service.insert({
      cor: "",
      marca: "Chevrolet",
      placa: "ABC-5A00",
      id: 0,
    })};

    expect(exception).toThrow("Informe a cor do veiculo")
  });
});

describe("VeiculoService", () => {
  it("Deverá retornar um array com 1 objeto e o ojeto filtrando pelo id", () => {
    const service = new VeiculoService();

    service.insert({
      cor: "vermelho",
      marca: "volkswagen",
      placa: "ABC-5A00",
      id: 0,
    });

    const veiculosFiltrados = service.findById(1);

    expect(veiculosFiltrados).toHaveLength(1);
    expect(veiculosFiltrados[0]).toEqual({
      cor: "azul",
      marca: "Chevrolet",
      placa: "ABC-0A00",
      id: 1,
    });
  });
});
