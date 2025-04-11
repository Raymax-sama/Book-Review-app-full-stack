export default {
  routes: [
    {
      method: 'GET',
      path: '/recommendations/book/:bookId',
      handler: 'recommendation.getRecommendations',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/recommendations/user',
      handler: 'recommendation.getUserRecommendations',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};