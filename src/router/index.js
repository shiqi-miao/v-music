import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/layout/Layout';
import AppMain from '../views/layout/components/AppMain';

const _import = require('./_import_' + process.env.NODE_ENV);
Vue.use(Router);
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  { path: '/index', component: _import('index'), hidden: true },
  { path: '/switch', component: _import('switch'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/kupper',
    name: '小程序管理',
    hidden: true,
    children: [
      {
        path: 'kupper',
        component: _import('kupper/index'),
      },
    ],
  },
  {
    path: '/kupper',
    component: Layout,
    redirect: '/kupper/',
    name: '小程序管理',
    meta: { title: '小程序管理', icon: '' },
    menu: '',
    children: [
      {
        path: '',
        name: '轮播图管理',
        component: _import('kupper/index'),
        meta: { title: '轮播图管理', icon: '' },
        menu: '',
      }
    ],
  },
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/',
    name: '商品管理',
    meta: { title: '商品管理', icon: '' },
    menu: '',
    children: [
      {
        path: '',
        name: '商品管理',
        component: _import('kupper/shop'),
        meta: { title: '商品管理', icon: '' },
        menu: '',
      },
    ],
  },
  {
    path: '/finance',
    redirect: '/finance/',
    name: '财务管理',
    component: Layout,
    meta: { title: '财务管理', icon: '' },
    menu: '',
    children: [
      {
        path: '',
        component: _import('finance/summary'),
        name: '财务管理',
        meta: { title: '财务管理', icon: '' },
        menu: '',
      }
    ],
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/',
    name: '会员管理',
    meta: { title: '会员管理', icon: '' },
    menu: '',
    children: [
      {
        path: '',
        name: '会员管理',
        component: _import('user/manage'),
        meta: { title: '会员管理', icon: '' },
        menu: '',
      }
    ],
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/',
    name: '系统综合',
    meta: { title: '系统综合', icon: '' },
    menu: '',
    children: [
      {
        path: '',
        component: _import('user/index'),
        name: '账号管理',
        meta: { title: '账号管理', icon: '' },
        menu: '',
      }
    ],
  },
];
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
export const asyncRouterMap = [//动态路由,根据后端返回的权限显示
//   {
//     path: '/kupper',
//     component: Layout,
//     redirect: '/kupper/',
//     name: '小程序管理',
//     meta: { title: '小程序管理', icon: '' },
//     menu: '',
//     children: [
//       {
//         path: '',
//         name: '广告管理',
//         component: _import('kupper/index'),
//         meta: { title: '广告管理', icon: '' },
//         menu: '',
//       }
//     ],
//   },
//   {
//     path: '/shop',
//     component: Layout,
//     redirect: '/shop/',
//     name: '商品管理',
//     meta: { title: '商品管理', icon: '' },
//     menu: '',
//     children: [
//       {
//         path: '',
//         name: '商品管理',
//         component: _import('kupper/shop'),
//         meta: { title: '商品管理', icon: '' },
//         menu: '',
//       },
//     ],
//   },
//   {
//     path: '/finance',
//     redirect: '/finance/',
//     name: '财务管理',
//     component: Layout,
//     meta: { title: '财务管理', icon: '' },
//     menu: '',
//     children: [
//       {
//         path: '',
//         component: _import('finance/summary'),
//         name: '财务管理',
//         meta: { title: '财务管理', icon: '' },
//         menu: '',
//       }
//     ],
//   },
//   {
//     path: '/user',
//     component: Layout,
//     redirect: '/user/',
//     name: '会员管理',
//     meta: { title: '会员管理', icon: '' },
//     menu: '',
//     children: [
//       {
//         path: '',
//         name: '会员管理',
//         component: _import('user/manage'),
//         meta: { title: '会员管理', icon: '' },
//         menu: '',
//       }
//     ],
//   },
//   {
//     path: '/system',
//     component: Layout,
//     redirect: '/system/',
//     name: '系统综合',
//     meta: { title: '系统综合', icon: '' },
//     menu: '',
//     children: [
//       {
//         path: '',
//         component: _import('user/index'),
//         name: '系统账号管理',
//         meta: { title: '系统账号管理', icon: '' },
//         menu: '',
//       },
//       {
//         path: 'auth',
//         component: _import('user/auth'),
//         name: '权限管理',
//         meta: { title: '权限管理', icon: '' },
//         menu: '',
//       }
//     ],
//   },
];
