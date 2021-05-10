import {getInfo, login, logout} from '@/api/login'
import {getToken, removeToken, setToken} from '@/utils/seedling'
import {default as api} from '../../utils/api'
import store from '../../store'
import router from '../../router'

const user = {
  state: {
    nickname: "",
    userId: "",
    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2109543758,1542619281&fm=27&gp=0.jpg',
    role: '',
    menus: [],
    permissions: [],
    operatorId:'',
    stockType:'',
    thumbType:'',
    permission:'',
    ownerNum:'',
    status:'',
    update:""
  },
  mutations: {
    SET_USER: (state, userInfo) => {
      state.nickname = userInfo.nickname;
      state.userName = userInfo.userName;
      state.topPrice = userInfo.topPrice;
      state.userId = userInfo.userId;
      state.roleId = userInfo.roleId;
      state.role = userInfo.roleName;
      state.menus = userInfo.menuList;
      state.permissions = userInfo.permissionList;
      state.operatorId = userInfo.operatorId;
      state.stockType = userInfo.stockType;
      state.thumbType = userInfo.thumbType;
      state.permission = userInfo.permission;
      state.ownerNum = userInfo.ownerNum;
      state.status = userInfo.status
    },
    RESET_USER: (state) => {
      state.nickname = "";
      state.userName = "";
      state.topPrice = "";
      state.userId = "";
      state.role = '';
      state.menus = [];
      state.permissions = [];
      state.operatorId = '';
      state.stockType= '';
      state.thumbType= '';
      state.permission = '';
      state.ownerNum = '';
      state.status = ''
    },
    SET_UPDATE: (state,update)=>{
      state.update=update//更新日志总条数
    }
  },
  actions: {
    // 登录
    Login({commit, state}, loginForm) {
      return new Promise((resolve, reject) => {   
        api({
          url: "login/seedling",
          method: "post",
          data: loginForm
        }).then(data => {
          // if (data.result === "success") {
          //   //cookie中保存前端登录状态
          //   setToken();
          // }
          if (data.flag) {
            //cookie中保存前端登录状态
            // commit("SET_TOKEN", data.token);
            setToken(data.token);
          }
          resolve(data);
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 注册
    Register({ commit, state }, regForm) {
      return new Promise((resolve, reject) => {
        api({
          url: "operator/addOperatorInfo",
          method: "post",
          data: regForm
        }).then(data => {
          if (data.result === "success") {
            //cookie中保存前端登录状态
            // setToken();
          }
          resolve(data);
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户信息
    GetInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        api({
          url: '/login/getInfo',
          method: 'post'
        }).then(data => {
          //储存用户信息
          commit('SET_USER', data.userPermission);
          //cookie保存登录状态,仅靠vuex保存的话,页面刷新就会丢失登录状态
          setToken();
          //生成路由          
          let userPermission = data.userPermission ;
          store.dispatch('GenerateRoutes', userPermission).then(() => {
            //生成该用户的新路由json操作完毕之后,调用vue-router的动态新增路由方法,将新路由添加
            router.addRoutes(store.getters.addRouters)
          })
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({commit}) {
      return new Promise((resolve) => {
        api({
          url: "login/logout",
          method: "post"
        }).then(data => {
          commit('RESET_USER')
          removeToken()
          resolve(data);
        }).catch(() => {
          commit('RESET_USER')
          removeToken()
        })
      })
    },
    // 前端 登出
    FedLogOut({commit}) {
      return new Promise(resolve => {
        commit('RESET_USER')
        removeToken()
        resolve()
      })
    }
  }
}
export default user
