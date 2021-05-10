import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/layout/Layout';
import AppMain from '../views/layout/components/AppMain';

const _import = require('./_import_' + process.env.NODE_ENV);
Vue.use(Router);
export const constantRouterMap = [
  { path: '/video', meta:{title:'杭州光芽科技邀您参观2019年中国无人零售大会'}, component: _import('video'), hidden: true },
  { path: '/videonew', component: _import('videonew'), hidden: true },
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/bind', component: _import('bind/bind'), hidden: true },
  { path: '/identify', component: _import('bind/identify'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  { path: '/index', component: _import('index'), hidden: true },
  { path: '/super', component: _import('super/index'), hidden: true },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: '首页',
  //   hidden: true,
  //   children: [{
  //     path: 'dashboard', component: _import('dashboard/index')
  //   }
  {
    path: '/',
    component: Layout,
    redirect: '/analysis',
    name: '首页',
    hidden: true,
    children: [
      {
        path: 'analysis',
        component: _import('analysis/indexorigin'),
      },
    ],
  },
];
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
export const asyncRouterMap = [
  {
    path: '/homeIndex',
    component: Layout,
    redirect: '/homeIndex/',
    name: '综合统计',
    meta: { title: '综合统计', icon: 'tree' },
    children: [
      {
        path: '',
        name: '数据大屏',
        component: _import('analysis/index'),
        meta: { title: '数据大屏', icon: 'example' },
        menu: 'homeIndex',
      },
    ],
  },
  {
    path: '/user',
    redirect: '/user/',
    name: '平台用户',
    component: Layout,
    meta: { title: '平台用户', icon: 'user' },
    children: [
      {
        path: '',
        component: _import('user/index'),
        name: '账号管理',
        meta: { title: '账号管理', icon: 'user' },
        menu: 'user',
      },
      {
        path: 'auth',
        component: _import('user/auth'),
        name: '角色管理',
        meta: { title: '角色管理', icon: 'user' },
        menu: 'role',
      },
      {
        path: 'setting',
        component: _import('bind/setting'),
        name: '运营商设置',
        meta: { title: '运营商设置', icon: '' },
        menu: 'user',
        hidden: true,
      },
    ],
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/',
    name: '系统综合',
    meta: { title: '系统综合', icon: 'system' },
    children: [
      {
        path: '',
        name: '操作记录',
        component: _import('system/log'),
        meta: { title: '操作记录', icon: 'systemInfo' },
        menu: 'log',
      },
      {
        path: 'system',
        name: '系统设置',
        component: _import('system/systemInfo'),
        meta: { title: '系统设置', icon: 'systemInfo' },
        menu: 'system',
        // hidden: true,
      },
      {
        path: 'storeConfig',
        name: '门店配置',
        component: _import('operation/storeConfig'),
        meta: { title: '门店配置', icon: 'operation' },
        menu: 'storeSetting',
      },
      {
        path: 'vendConfig',
        name: '机器配置',
        component: _import('operation/vendConfig'),
        meta: { title: '机器配置', icon: 'operation' },
        menu: 'vendSetting',
      },
      {
        path: 'vendConfig/detail/:id/:machineCode',
        name: '机器配置详情',
        component: _import('operation/vendConfigDetail'),
        meta: { title: '机器配置详情', icon: 'operation' },
        menu: 'vendSetting',
        hidden: true,
      },
      {
        path: 'bindOperator',
        name: '机器配置',
        component: _import('bind/bindOperator'),
        meta: { title: '机器配置', icon: 'operation' },
        menu: 'vendSetting',
        hidden: true,
      },
      {
        path: 'coupon',
        component: _import('markting/index'),
        name: '优惠券接入',
        meta: { title: '优惠券接入', icon: 'purchase' },
        menu: 'vendSetting',
      },
      {
        path: 'coupons',
        component: _import('markting/couponSuper'),
        name: '优惠券管理',
        meta: { title: '优惠券管理', icon: 'purchase' },
        menu: 'TCoupon',
      },
      {
        path: 'create',
        component: _import('markting/createSuper'),
        name: '优惠券创建',
        meta: { title: '优惠券创建', icon: 'purchase' },
        menu: 'TCoupon',
        hidden: true,
      },
      {
        path: 'detailSuper/:applyId',
        component: _import('markting/detailSuper'),
        name: '查看优惠券',
        meta: { title: '查看优惠券', icon: 'purchase' },
        menu: 'TCoupon',
        hidden: true,
      },
      {
        path: 'detailSystem/:applyId',
        component: _import('markting/detailSystem'),
        name: '查看',
        meta: { title: '查看', icon: 'purchase' },
        menu: 'TCoupon',
        hidden: true,
      },
      {
        path: 'detailUser/:ruleId',
        component: _import('markting/detailUser'),
        name: '管理优惠券',
        meta: { title: '管理优惠券', icon: 'purchase' },
        menu: 'TCoupon',
        hidden: true,
      },
      // {
      //   path: 'company',
      //   component: _import('markting/company'),
      //   name: '企业券管理',
      //   meta: { title: '企业券管理', icon: 'purchase' },
      //   menu: 'TcomCoupon',
      // },
      {
        path: 'detailGroupCoupon/:sendId',
        component: _import('markting/detailGroupCoupon'),
        name: '查看企业券',
        meta: { title: '查看企业券', icon: 'purchase' },
        menu: 'TcomCoupon',
        hidden:true,
      },
      {
        path: 'createCoupons/:groupId',
        component: _import('markting/createCoupons'),
        name: '创建企业券',
        meta: { title: '创建企业券', icon: 'purchase' },
        menu: 'TcomCoupon',
        hidden: true,
      },
      {
        path: 'detailGroup/:groupId',
        component: _import('markting/detailGroup'),
        name: '管理企业',
        meta: { title: '管理企业', icon: 'purchase' },
        menu: 'TcomCoupon',
        hidden: true,
      },
      {
        path: 'distribution',
        component: _import('system/distribution'),
        name: '分润配置',
        meta: { title: '分润配置', icon: 'purchase' },
        menu: 'merchant',
      },
      {
        path: 'deploy/:dmId/:authType/:distributName',
        component: _import('system/deploy'),
        name: '配置',
        meta: { title: '配置', icon: 'purchase' },
        menu: 'merchant',
        hidden:true,
      },
      {
        path: 'detail/:dmId',
        component: _import('system/detail'),
        name: '查看分润信息',
        meta: { title: '查看分润信息', icon: 'purchase' },
        menu: 'merchant',
        hidden:true,
      },
      {
        path: 'createdistribution',
        component: _import('system/create'),
        name: '创建分润方',
        meta: { title: '创建分润方', icon: 'purchase' },
        menu: 'merchant',
        hidden:true,
      },
      {
        path: 'edit/:dmId',
        component: _import('system/edit'),
        name: '编辑分润方',
        meta: { title: '编辑分润方', icon: 'purchase' },
        menu: 'merchant',
        hidden:true,
      },
      {
        path: 'stock',
        component: _import('system/stock'),
        name: '仓库管理',
        meta: { title: '仓库管理', icon: 'purchase' },
        menu: 'vendSetting',
      },
      {
        path: 'business',
        component: _import('system/business'),
        name: '智能运营',
        meta: { title: '智能运营', icon: 'purchase' },
        menu: 'vendSetting',
      },
    ],
  },
  {
    path: '/operation',
    component: Layout,
    redirect: '/operation/',
    name: '运营管理',
    meta: { title: '运营管理', icon: 'operation' },
    children: [
      {
        path: '',
        name: '门店运营',
        component: _import('operation/storeInfoS'),
        meta: { title: '门店运营', icon: 'skuDetails' },
        menu: 'storeOption',
      },
      {
        path: 'replenish/:storeCode/:storeName',
        name: '补货员配置',
        component: _import('replenishment/index'),
        meta: { title: '补货员配置', icon: 'skuDetails' },
        menu: 'storeOption',
        hidden: true,
      },
      // {
      //   path: 'super',
      //   name: '数据大屏',
      //   redirect: '/analysis',
      //   meta: { title: '数据大屏', icon: 'skuDetails' },
      //   menu: 'allOption',
      // },
      {
        path: 'storeDetailsS/:id/:machineCode',
        name: '门店运营详情',
        component: _import('operation/storeDetailsS'),
        meta: { title: '门店运营详情', icon: 'eye' },
        menu: 'storeOption',
        hidden: true,
      },
      {
        path: 'salePlane/:storeCode/:machineCode',
        component: _import('saleplane/index'),
        name: '销售计划',
        meta: { title: '销售计划', icon: 'purchase' },
        menu: 'goodsSku',
      },
      // {
      //   path: 'plane',
      //   component: _import('system/plane'),
      //   name: '销售计划',
      //   meta: { title: '销售计划', icon: 'purchase' },
      //   menu: 'goodsSku',
      // },
      {
        path: 'planeDetail/:id/:storeCode/:machineCode',
        component: _import('system/planeDetail'),
        name: '编辑计划',
        meta: { title: '编辑计划', icon: 'purchase' },
        menu: 'goodsSku',
        hidden:true,
      },
      {
        path: 'planeNoEdit/:id/:storeCode/:machineCode',
        component: _import('system/planeNoEdit'),
        name: '查看计划',
        meta: { title: '查看计划', icon: 'purchase' },
        menu: 'goodsSku',
        hidden:true,
      },
      {
        path: 'nowPlane/:machineCode/:storeCode',
        component: _import('system/nowPlane'),
        name: '查看当前计划',
        meta: { title: '查看当前计划', icon: 'purchase' },
        menu: 'goodsSku',
        hidden:true,
      },
      {
        path: 'planeCopyNow/:machineCode/:storeCode',
        component: _import('system/planeCopyNow'),
        name: '复制当前计划',
        meta: { title: '复制当前计划', icon: 'purchase' },
        menu: 'goodsSku',
        hidden:true,
      },
      {
        path: 'planeCreate/:id/:storeCode/:machineCode',
        component: _import('system/planeCreate'),
        name: '新增计划',
        meta: { title: '新增计划', icon: 'purchase' },
        menu: 'goodsSku',
        hidden:true,
      },
      {
        path: 'planeCopy/:id/:storeCode/:machineCode/:oldId',
        component: _import('system/planeCopy'),
        name: '复制计划',
        meta: { title: '复制计划', icon: 'purchase' },
        menu: 'goodsSku',
        hidden:true,
      },
      {
        path: '/serviceorderInfo/orderdetails/:orderCode',
        component: _import('service/orderdetails'),
        name: 'orderdetails',
        meta: { title: '订单详情', icon: 'order' },
        menu: 'orderInfo',
        hidden: true,
      },
      {
        path: 'purchase',
        name: '采购管理',
        component: _import('operation/purchase/index'),
        meta: { title: '采购管理', icon: 'purchase' },
        menu: 'purchaseInfo',
        hidden: true,
      },
      {
        path: '/purchase/detail/:purchaseCode/:purchaseType',
        component: _import('operation/purchase/detail'),
        name: '采购管理详情',
        meta: { title: '采购管理详情', icon: 'table' },
        menu: 'purchaseInfo',
        hidden: true,
      },
      {
        path: '/purchase/add',
        component: _import('operation/purchase/add'),
        name: '新增采购管理',
        meta: { title: '新增采购管理', icon: 'table' },
        menu: 'purchaseInfo',
        hidden: true,
      },
      {
        path: '/replenishment/add',
        component: _import('operation/replenishment/add'),
        name: '新增补货单',
        meta: { title: '新增补货单', icon: 'replenishment' },
        menu: 'repairBill',
        hidden: true,
      },
      // {
      //   path: '/replenishment',
      //   redirect: '/replenishment/',
      //   name: '补货管理',
      //   component: AppMain,
      //   meta: { title: '补货管理', icon: 'replenishment' },
      //   children: [
      //     {
      //       path: '',
      //       component: _import('operation/replenishment/index'),
      //       name: '',
      //       meta: { title: '补货管理', icon: 'replenishment' },
      //       menu: 'repairBill',
      //     },
      //   ],
      // },

      // {
      //   path: 'replenishment',
      //   name: '补货管理',
      //   component: _import('operation/replenishment/index'),
      //   meta: { title: '补货管理', icon: 'replenishment' },
      //   menu: 'repairBill',
      // },
      // {
      //   path: '/replenishment/detail/:repairCode/:repairType',
      //   component: _import('operation/replenishment/detail'),
      //   name: '补货管理详情',
      //   meta: { title: '补货管理详情', icon: 'table' },
      //   menu: 'repairBill',
      //   hidden: true,
      // },
      // {
      //   path: 'repairman',
      //   name: '补货账号',
      //   component: _import('hardware/repairman'),
      //   meta: { title: '补货账号', icon: 'user' },
      //   menu: 'repairman',
      // },
      {
        path: 'order',
        name: '订单管理',
        component: _import('operation/order'),
        meta: { title: '订单管理', icon: 'order' },
        menu: 'orderInfo',
      },
      {
        path: 'sku',
        component: _import('sku/index'),
        name: '商品管理',
        meta: { title: '商品管理', icon: 'replenishment' },
        menu: 'goodsSku',
      },
    ],
  },
  {
    path: '/stock',
    redirect: '/stock/',
    name: '进销存管理',
    component: Layout,
    meta: { title: '进销存管理', icon: 'stock' },
    children: [
      {
        path: 'purchase',
        name: '采购信息',
        component: _import('operation/purchase/info'),
        meta: { title: '采购信息', icon: 'purchase' },
        menu: 'purchaseInfo',
      },
      {
        path: 'index/:wareId',
        component: _import('stock/index'),
        name: '实时库存',
        meta: { title: '实时库存', icon: 'stock' },
        menu: 'stockInfo',
        hidden: true,
      },
      {
        path: 'replenishment',
        component: _import('stock/replenishment'),
        name: '补货信息',
        meta: { title: '补货信息', icon: 'replenishment' },
        menu: 'repairBill',
      },
      {
        path: 'purchaseDetail/:purchaseCode/:purchaseType',
        component: _import('stock/purchaseDetail'),
        name: '采购清单详情',
        meta: { title: '采购清单详情', icon: 'table' },
        menu: 'purchaseInfo',
        hidden: true,
      },
      {
        path: 'replenishmentDetail/:repairCode/:repairType',
        component: _import('stock/replenishmentDetail'),
        name: '补货清单详情',
        meta: { title: '补货清单详情', icon: 'table' },
        menu: 'repairBill',
        hidden: true,
      },
      {
        path: 'detail/:id',
        component: _import('stock/detail'),
        name: '',
        meta: { title: '查看出入库单', icon: 'table' },
        menu: 'outInStock',
        hidden: true,
      },
      {
        path: 'in',
        component: _import('stock/in'),
        name: '办理入库',
        meta: { title: '办理入库', icon: 'table' },
        menu: 'outInStock',
        hidden: true,
      },
      {
        path: 'out',
        component: _import('stock/out'),
        name: '办理出库',
        meta: { title: '办理出库', icon: 'table' },
        menu: 'outInStock',
        hidden: true,
      },  
      {
        path: 'reIn',
        component: _import('stock/reIn'),
        name: 'outInStock',
        meta: { title: '办理销毁', icon: 'table' },
        menu: 'outInStock',
        hidden: true,
      },
      {
        path: 'refund',
        name: '入库报销',
        component: _import('operation/purchase/refund'),
        meta: { title: '入库报销', icon: 'purchase' },
        menu: 'purchaseInfo',
      },
    ],
  },
  {
    path: '/sales',
    redirect: '/sales',
    name: '促销活动',
    component: Layout,
    meta: { title: '促销活动', icon: 'goodsSales' },
    children: [
      {
        path: '',
        component: _import('sale/index'),
        name: '促销管理',
        meta: { title: '促销管理', icon: 'goodsSales' },
        menu: 'storePromotion',
      },
      // {
      //   path: '',
      //   component: _import('sales/index'),
      //   name: '促销管理',
      //   meta: { title: '促销管理', icon: 'goodsSales' },
      //   menu: 'storePromotion',
      // },
      {
        path: 'limited/:id/:storeCode',
        component: _import('sales/limited'),
        name: '限时促销',
        meta: { title: '限时促销', icon: 'goodsSales' },
        menu: 'storePromotion',
        hidden: true,
      },
      {
        path: 'ladder/:id/:storeCode',
        component: _import('sales/ladder'),
        name: '阶梯促销',
        meta: { title: '阶梯促销', icon: 'goodsSales' },
        menu: 'storePromotion',
        hidden: true,
      },
      {
        path: 'ad',
        // path: '',
        name: '上新广告',
        component: _import('sales/ad'),
        meta: { title: '上新广告', icon: 'goodsSales' },
        menu: 'Advertisement',
      },
      {
        path: 'detail/:storeCode/:time/:operatorId/:storeName',
        name: '广告详情',
        component: _import('sales/detail'),
        meta: { title: '广告详情', icon: 'goodsSales' },
        menu: 'Advertisement',
        hidden: true,
      },
      {
        path: 'adDetail/:id',
        name: '查看广告详情',
        component: _import('sales/adDetail'),
        meta: { title: '查看广告详情', icon: 'goodsSales' },
        menu: 'Advertisement',
        hidden: true,
      },
      {
        path: 'detailEdit/:id',
        name: '广告详情修改',
        component: _import('sales/detailEdit'),
        meta: { title: '广告详情修改', icon: 'goodsSales' },
        menu: 'Advertisement',
        hidden: true,
      },
      {
        path: 'push',
        name: '消息推送',
        component: _import('push/index'),
        meta: { title: '消息推送', icon: 'goodsSales' },
        menu: 'Advertisement',
      },
      {
        path: 'push/detail/:id',
        name: '消息推送详情',
        component: _import('sales/detail'),
        meta: { title: '消息推送详情', icon: 'goodsSales' },
        menu: 'Advertisement',
        hidden: true,
      },
    ],
  },
  {
    path: '/markting',
    redirect: '/markting/',
    name: '营销活动',
    component: Layout,
    meta: { title: '营销活动', icon: 'purchase' },
    children: [
      {
        path: '',
        component: _import('markting/coupon'),
        name: '优惠券管理',
        meta: { title: '优惠券管理', icon: 'purchase' },
        menu: 'coupon',
      },
      // {
      //   path: 'company',
      //   component: _import('markting/company'),
      //   name: '企业券管理',
      //   meta: { title: '企业券管理', icon: 'purchase' },
      //   menu: 'goodsSku',
      // },
      // {
      //   path: 'detailGroupCoupon/:sendId',
      //   component: _import('markting/detailGroupCoupon'),
      //   name: '查看企业券',
      //   meta: { title: '查看企业券', icon: 'purchase' },
      //   menu: 'goodsSku',
      //   hidden:true,
      // },
      // {
      //   path: 'createCoupons/:groupId',
      //   component: _import('markting/createCoupons'),
      //   name: '创建企业券',
      //   meta: { title: '创建企业券', icon: 'purchase' },
      //   menu: 'goodsSku',
      //   hidden: true,
      // },
      // {
      //   path: 'detailGroup/:groupId',
      //   component: _import('markting/detailGroup'),
      //   name: '管理企业',
      //   meta: { title: '管理企业', icon: 'purchase' },
      //   menu: 'goodsSku',
      //   hidden: true,
      // },
      // {
      //   path: 'lists',
      //   component: _import('markting/lists'),
      //   name: '发放管理',
      //   meta: { title: '发放管理', icon: 'purchase' },
      //   menu: 'goodsSku',
      // },
      {
        path: 'create',
        component: _import('markting/create'),
        name: '创建优惠券',
        meta: { title: '创建优惠券', icon: 'purchase' },
        menu: 'coupon',
        hidden: true,
      },
      {
        path: 'detail/:applyId',
        component: _import('markting/detail'),
        name: '查看优惠券',
        meta: { title: '查看优惠券', icon: 'purchase' },
        menu: 'coupon',
        hidden: true,
      },
      {
        path: 'send',
        name: '发放管理',
        component: _import('markting/send'),
        meta: { title: '发放管理', icon: 'purchase' },
        menu: 'coupon',
        hidden: true,
      },
    ],
  },
  {
    path: '/finance',
    redirect: '/finance/',
    name: '财务对账',
    component: Layout,
    meta: { title: '财务对账', icon: 'finance' },
    children: [
      {
        path: '',
        component: _import('finance/summary'),
        name: '概览',
        meta: { title: '概览', icon: 'finance' },
        menu: 'finance',
      },
      {
        path: 'index',
        component: _import('finance/index'),
        name: '订单数据',
        meta: { title: '订单数据', icon: 'finance' },
        menu: 'finance',
      },
      {
        path: 'distribute',
        component: _import('finance/distribute'),
        name: '分润数据',
        meta: { title: '分润数据', icon: 'finance' },
        menu: 'finance',
      },
      {
        path: 'reimbursement',
        component: _import('finance/reimbursement'),
        name: '财务报销',
        meta: { title: '财务报销', icon: 'finance' },
        menu: 'finance',
      },
      {
        path: 'bad',
        component: _import('finance/bad'),
        name: '亏损SKU',
        meta: { title: '亏损SKU', icon: 'finance' },
        menu: 'finance',
        hidden: true,
      },
      {
        path: 'detail/:orderId',
        name: '订单详情',
        component: _import('finance/detail'),
        meta: { title: '订单详情', icon: 'finance' },
        menu: 'finance',
        hidden: true,
      },
    ],
  },
  {
    path: '/hardware',
    component: Layout,
    redirect: '/hardware/',
    name: '硬件综合',
    meta: { title: '硬件综合', icon: 'hardware' },
    children: [
      {
        // path: 'storeprOperty',
        path: '',
        name: '门店资产管理',
        // component: _import('user/role'),
        meta: { title: '门店资产管理', icon: 'stock' },
        menu: 'hareware',
      },
      {
        path: 'vmMaintenance',
        name: '售卖机维修管理',
        // component: _import('user/role'),
        meta: { title: '售卖机维修管理', icon: 'vmMaintenance' },
        menu: 'hareware',
      },
    ],
  },
  // {
  //   path: '/analysis',
  //   component: Layout,
  //   redirect: '/analysis/',
  //   name: '数据分析管理',
  //   meta: { title: '数据分析管理', icon: 'analysis'},
  //   children: [
  //     {
  //       path: '',
  //       name: '日常数据分析',
  //       component: _import('analysis/index'),
  //       meta: { title: '日常数据分析', icon: 'analysis'},
  //       menu: 'navigationBar'
  //     },
  //     // {
  //     //   path: 'HomeAdvertisement',
  //     //   name: '首页广告栏',
  //     //   component: _import('hardware/hardwareRole'),
  //     //   meta: {title: '首页广告栏', icon: 'password'},
  //     //   menu: 'HomeAdvertisement'
  //     // }
  //   ]
  // },
  {
    path: '/online',
    component: Layout,
    redirect: '/online/',
    name: '线上商城',
    meta: { title: '线上商城', icon: 'online' },
    hidden: true,
    children: [
      {
        path: '',
        name: '导航栏设置',
        component: _import('onlineShop/navigationBar'),
        meta: { title: '导航栏设置', icon: 'navigationBar' },
        menu: 'onlineShop',
      },
      {
        path: 'onlineGoodsType',
        name: '商品分类管理',
        component: _import('onlineShop/onlineGoodsType'),
        meta: { title: '商品分类管理', icon: 'onlineGoodsType' },
        menu: 'onlineShop',
      },
      {
        path: 'onlineGoods',
        name: '商品Sku管理',
        component: _import('onlineShop/onlineGoodSku'),
        meta: { title: '商品Sku管理', icon: 'stock' },
        menu: 'onlineShop',
      },
      {
        path: 'onlineOrder',
        name: '订单管理',
        component: _import('onlineShop/onlineOrderInfo'),
        meta: { title: '订单管理', icon: 'order' },
        menu: 'onlineShop',
      },
      {
        path: 'onlineOrderDetails/:orderCode',
        component: _import('onlineShop/onlineOrderDetails'),
        name: 'onlineOrderdetails',
        meta: { title: '线上商城订单详情', icon: 'order' },
        menu: 'onlineShop',
        hidden: true,
      },
      {
        path: 'guessLike',
        name: '猜你喜欢',
        // component: _import('user/role'),
        meta: { title: '猜你喜欢', icon: 'guessLike' },
        menu: 'onlineShop',
      },
    ],
  },
];
