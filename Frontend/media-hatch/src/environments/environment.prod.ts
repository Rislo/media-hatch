const port = 2000;
const domain = `127.0.0.1:${port}`;

export const environment = {
  production: true,
  environmentName: 'prod',
  server: `http://${domain}`,
  apiExtensionUrl: 'api',
  domain,
  port
};
