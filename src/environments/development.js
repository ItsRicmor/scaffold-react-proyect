import environment from './base';

const baseApi = 'https://jsonplaceholder.typicode.com';
const env = environment(baseApi);

const developmentEnv = {
  ...env,
  // override anything that gets added from base.
  api: {
    ...env.api,
  },
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
