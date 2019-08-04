const port = 2000;
const domain = `localhost:${port}`;

export const environment = {
  production: true,
  environmentName: 'prod',
  server: `http://${domain}`,
  apiExtensionUrl: 'api',
  domain
};
