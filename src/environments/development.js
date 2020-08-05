import environment from './base';

const env = environment();

const developmentEnv = {
  ...env,
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
