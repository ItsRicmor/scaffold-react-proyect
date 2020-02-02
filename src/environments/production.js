import environment from './base';

/*
 * base.ts is the default environment for production.
 * You shouldn't have override anything.
 */

const baseApi = 'https://jsonplaceholder.typicode.com';
const env = environment(baseApi);

const productionEnv = {
  ...env,
  route: {
    ...env.route,
    baseRoute: '/scaffold-proyect',
  },
};

export default productionEnv;
