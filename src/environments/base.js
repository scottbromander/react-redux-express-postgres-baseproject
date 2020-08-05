export default function baseEnv(baseApi) {
  return {
    route: {
      baseRoute: '/',
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}
