export default {
  routes: [
    {
      method: 'POST',
      path: '/premium/upgrade',
      handler: 'premium.upgrade',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/premium/status',
      handler: 'premium.getStatus',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};