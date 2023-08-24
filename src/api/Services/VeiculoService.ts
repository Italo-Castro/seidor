import { Veiculo } from "../../Entities/Veiculo";

let veiculos: Veiculo[] = [];
export default class VeiculoService {
  findAll(cor?: string, marca?: string) {
    let veiculosFiltrados: Veiculo[] = [];

    if (cor !== "" && marca !== "") {
      veiculosFiltrados = veiculos.filter(
        (item) => item.cor === cor && item.marca === marca
      );
    } else if (cor !== "") {
      veiculosFiltrados = veiculos.filter((item) => item.cor === cor);
    } else if (marca !== "") {
      veiculosFiltrados = veiculos.filter((item) => item.marca === marca);
    } else {
      return veiculos;
    }

    return veiculosFiltrados;
  }

  findById(id: number) {
    return veiculos.filter((item) => item.id === id);
  }

  insert(obj: Veiculo) {
    obj.id = veiculos.length + 1;

    if (!obj.cor) throw new Error("Informe a cor do veiculo");
    if (!obj.marca) throw new Error("Informe a marca do veiculo");
    if (!obj.placa) throw new Error("Informe a placa do veiculo");

    veiculos.push(obj);
    return obj;
  }

  update(idAtualizar: number, veiculo: Veiculo) {
    const index = veiculos.findIndex((item) => item.id === idAtualizar);

    if (index < 0) {
      throw new Error(`Veiculo de id ${idAtualizar} não encontrado`);
    }

    if (veiculo.cor) veiculos[index].cor = veiculo.cor;
    if (veiculo.marca) veiculos[index].marca = veiculo.marca;
    if (veiculo.placa) veiculos[index].placa = veiculo.placa;

    return veiculos[index];
  }

  delete(idDeletar: number) {
    const objDeletar = veiculos.find((item) => item.id === idDeletar);
    console.log("objDeletar", objDeletar);
    if (!objDeletar) {
      throw new Error("Veiculo não encontrado para ser delatado");
    }
    veiculos = veiculos.filter((item) => item.id !== idDeletar);
    return "Veiculo deletado";
  }
}
