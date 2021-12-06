import { config } from 'dotenv';

const getNodeEnv = () =>
  process.env['NODE_ENV'] ? `${process.env['NODE_ENV']}` : null;

function getEnv() {
  const currentNodeEnv = getNodeEnv();

  if (currentNodeEnv === 'test') {
    return 'testing';
  }

  if (!currentNodeEnv || currentNodeEnv === 'development') {
    return 'development';
  }

  return currentNodeEnv;
}

const path = `.env.${getEnv()}`;

console.log(`Load "${path}"`);

config({ path });
