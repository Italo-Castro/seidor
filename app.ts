import http from "http";
import expressLoader from "./src/loaders/express";

import Logger from "./logger";
import config from "./src/config";

const main = async () => {
  try {
    // carrega toda a aplicação
    const app = expressLoader();

    const porta = config.PORT !== 0 ? config.PORT : 4000;
    const httpServer = http.createServer(app);
    httpServer.listen(porta);
    Logger.info(`Server HTTP listening on: ${porta}`);
  } catch (error: any) {
    console.log("ERRO", error);
    Logger.error(error);
  }
};

main();
