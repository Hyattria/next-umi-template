import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  layout: {
    locale: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // dva: {
  //   immer: true,
  //   hmr: false,
  // },
  // locale: {
  //   antd: true,
  // },
  routes,
});
