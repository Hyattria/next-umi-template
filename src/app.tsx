import React from 'react';
import { ResponseError, Context } from 'umi-request';
import { DefaultFooter } from '@ant-design/pro-layout';

// @umijs/plugin-layout 配置
export const layout = {
  logout: () => {}, // do something
  breadcrumbRender: (routers = []) => [...routers],
  footerRender: () => <DefaultFooter copyright="umijs" />, // return string || ReactNode;
};

// @umijs/plugin-request 配置
// 请求中间件 就是发起请求和响应之后需要统一操作数据就写这
// https://github.com/umijs/umi-request#example-1
const middleware = async (ctx: Context, next: any) => {
  console.log('a1');
  await next();
  console.log('a2');
};

export const request = {
  prefix: '', // 统一的请求头
  middlewares: [middleware],
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(error);
  },
};

// @umijs/plugin-initial-state 配置
export async function getInitialState() {
  // const { data = {} } = await initData();
  return {
    title: '巴士管家',
    username: 'umi',
    isLogin: false,
  };
}
