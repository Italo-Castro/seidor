 ![image](https://github.com/Italo-Castro/seidor/assets/72866245/9e7e0089-e93e-4f2a-b9d3-0bbcd43858f5)

# Seidor 
### Neste repositório está contigo o código fonte do teste feito para a empresa SEIDOR.

* Para executar o projeto, faça o dowload ou clone do repositório, abra no Visual Studio Code, e rode o comando yarn install, para instalar as dependências do projeto.
* Depois de instalado as depedências rode o comando yarn run dev para executar a aplicação, por padrão a aplicação executará na porta 4000, caso queria trocar, vá até o arquivo .env na raiz do projeto, e altera a porta. Ex: PORT=0 -> PORT=5000
* Para rodar os testes execute o comando npx jest.

  ### As rotas ficaram definidas como

## Veiculo 
 1. Cadastrar: http://localhost:4000/api/veiculo/insert
 * Mandando no corpo da requisição o json { "placa": "ABC-0A00","cor": "BRANCO","marca": "FIAT" }
 3. Buscar pelo identificador http://localhost:4000/api/veiculo/findById?id=1
 4. Buscar todos os veiculos http://localhost:4000/api/veiculo/   -> Caso deseje buscar por marca ou cor, esses parametros devem ser adicionados na url como por exemplo: http://localhost:4000/api/veiculo/?marca=FIAT&cor=BRANCO
5. Atualizar http://localhost:4000/api/veiculo/?id=1  -> deve ser informado o identificador que será atualizado via query, e no corpo da requisição dese ser mandado o json com quais dados devem ser atualizados, lembrando que o identificador não é atualizado, somente marcar e cor:
   *Corpo de exemplo: {"cor":"azul"}
6. Deletar  http://localhost:4000/api/veiculo/?id=1  -> Deve ser informado o identificador do veiculo o qual vai ser deletado via query.

## Motorista 
 1. Cadastrar: http://localhost:4000/api/motorista/insert
 * Mandando no corpo da requisição o json { "nome": "Italo" }
 3. Buscar pelo identificador http://localhost:4000/api/motorista/findById?id=1
 4. Buscar todos os veiculos http://localhost:4000/api/motorista/   -> Caso deseje buscar por marca ou nome, esse parametro deve ser adicionado na url como por exemplo: http://localhost:4000/api/motorista/?nome=Italo
5. Atualizar http://localhost:4000/api/motorista/?id=1  -> deve ser informado o identificador que será atualizado via query, e no corpo da requisição dese ser mandado o json com o nome o qual vai ser atualiazdo lembrando que o identificador não é atualizado, somente o nome:
   *Corpo de exemplo: {"nome": "Pedro" }
6. Deletar  http://localhost:4000/api/motorista/?id=1  -> Deve ser informado o identificador do motorista o qual vai ser deletado via query
   
## Utilizacao Automovel
1. Criar registro de utilizacao -> http://localhost:4000/api/utilizacaoAutomovel mandando via corpo da requisição o json com os dados EX:
* {
    "dataInicio": "2023-08-23",
    "nomeMotorista": "Jose",
    "automovelUtilizado": "GOL",
    "motivo": "Emprestimo"
}
2. Finalizar a utlização -> http://localhost:4000/api/utilizacaoAutomovel?id=1  -> Deve ser mandado via query o id que vai ser encerrado, e no corpo deve ser enviado o json com a data de finalizacao EX: {"dataFinalizacao":"2023-08-2023" }
