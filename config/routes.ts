import { IBestAFSRoute } from '@umijs/plugin-layout';

const routes: IBestAFSRoute[] = [
  {
    path: '/',
    component: '@/pages/index',
    icon: 'smile',
    menu: {
      name: 'hello',
    },
  },
  {
    path: '/login',
    component: '@/pages/user/login',
  },
  {
    path: '/welcome',
    component: '@/pages/welcome',
    icon: 'smile',
    menu: {
      name: 'welcome',
    },
    // access: 'hasToken', // 这里写的是 src/access 里面的变量名
  },
  { component: '@/pages/404' },
];

export default routes;
