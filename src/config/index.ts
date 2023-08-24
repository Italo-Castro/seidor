import dotenv from "dotenv";

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("ERRO! Arquivo .env não encontrado.");
}

const config = {
  PORT: parseInt(process.env.PORT ?? "4000"),
  api: {
    prefix: "/api",
  },
};

export default config;
