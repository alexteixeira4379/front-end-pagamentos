export default [
  {
    path: '/',
    name: 'payment.checkout',
    component: () => import('./pages/checkout'),
    meta: {
      noAuth: true,
    }
  },
  {
    meta: {
      noAuth: true,
    },
    path: '/404',
    component: () => import('./views/404'),
    name: '404',
  }
]
