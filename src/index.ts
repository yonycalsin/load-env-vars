import { config } from "dotenv";

function getEnv() {
  const env = process.env.NODE_ENV;

  if (env === "test") {
    return "testing";
  }

  if (!env || env === "development") {
    return "development";
  }

  return env;
}

const path = `.env.${getEnv()}`;

console.log(`Load "${path}"`);

config({ path });
