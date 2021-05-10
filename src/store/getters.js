const getters = {
  user: state => state.user,
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  nickname: state => state.user.nickname,
  userName: state => state.user.userName,
  topPrice: state => state.user.topPrice,
  userId: state => state.user.userId,
  roleId: state => state.user.roleId,
  avatar: state => state.user.avatar,
  role: state => state.user.role,
  menus: state => state.user.menus,
  operatorId: state => state.user.operatorId,
  stockType: state => state.user.stockType,
  thumbType: state => state.user.thumbType,
  permission: state => state.user.permission,
  ownerNum: state => state.user.ownerNum,
  status: state => state.user.status,
  permissions: state => state.user.permissions,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  update: state => state.user.update
}
export default getters
