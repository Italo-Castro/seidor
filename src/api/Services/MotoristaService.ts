import { Motorista } from "../../Entities/Motorista";

let motoristas: Motorista[] = [];
export default class MotoristaService {
  findAll(nome?: string) {
    let newMotoristas: Motorista[] = [];

    if (nome) {
      newMotoristas = motoristas.filter((item) => item.nome === nome);
      return newMotoristas;
    } else {
      return motoristas;
    }
  }

  findById(id: number) {
    return motoristas.filter((item) => item.id === id);
  }

  insert(obj: Motorista) {
    obj.id = motoristas.length + 1;
    motoristas.push(obj);

    if (!obj.nome) throw new Error("Nome do motorista não informado");

    return obj;
  }

  update(idAtualizar: number, motorista: Motorista) {
    if (!motorista.nome) throw new Error("Nome do motorista não informado");

    const index = motoristas.findIndex((item) => item.id === idAtualizar);
    if (index < 0) {
      throw new Error(`Motorista de id ${idAtualizar} não encontrado`);
    }

    motoristas[index].nome = motorista.nome;

    return motoristas[index];
  }

  delete(idDeletar: number) {
    const objDeletar = motoristas.find((item) => item.id === idDeletar);
    console.log("objDeletar", objDeletar);
    if (!objDeletar) {
      throw new Error("Motorista não encontrado para ser delatado");
    }
    motoristas = motoristas.filter((item) => item.id !== idDeletar);
    return "Motorista deletado";
  }
}
