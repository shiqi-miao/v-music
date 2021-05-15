<template>
<div class="function flex-center-Y">
  <div class="menu">
    <el-menu class="navbar" mode="horizontal">
      <el-dropdown class="avatar-container" trigger="click">
        <div>
          <img src="../../../assets/super/user4.png" alt="" style="width:35px;cursor:pointer;">
        </div>
        <el-dropdown-menu class="user-dropdown center" slot="dropdown">
          <el-dropdown-item>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>
  </div>
  <el-dialog title="个人信息" :visible.sync="detailDialogVisible" width="56%" @close="showCode=false">
    <el-form class="userinfo-form" :model="info" label-position="right" label-width="160px" :inline="true">
        <el-form-item label="账号名称：" class="flex-center-Y">
            {{nickname}}
        </el-form-item>
        <br>
        <el-form-item label="手机号（登录名）：" class="flex-center-Y">
            {{userName}}
        </el-form-item>
        <br>
        <el-form-item label="角色权限：" class="flex-center-Y">
            {{role}}
        </el-form-item>
        <br>
        <el-form-item label="验证码：" class="flex-center-Y" v-show="showW">
          <div class="flex-center">
            <span class="code-input">
              <el-input type="tel" v-model="info.code" placeholder="输入验证码" maxlength="4" ></el-input>
            </span>
            <el-button type="primary" class="login-btn" @click.native.prevent="getCode">
              <span v-if="count>0">{{count}}s后可重新发送</span>
              <span v-else>发送验证码</span>
            </el-button>
          </div>
        </el-form-item>
        <br>
        <el-form-item label="登录密码：" id="psdInput">
            <el-input :type="psdType" v-model="info.password" placeholder="仅支持数字与字母组合的密码">
              <i slot="suffix" class="el-icon-view" @click="toggleType"></i>
            </el-input>
            <span class="blue" @click="edit">
              修改密码
            </span>
            <br>
            （设置后可通过密码登录）
        </el-form-item>
        <br>
        <el-form-item label="验证码：" class="flex-center-Y" v-show="showCode">
          <div class="flex-center">
            <span class="code-input">
              <el-input type="tel" v-model="info.code" placeholder="输入验证码" maxlength="4" ></el-input>
            </span>
            <el-button type="primary" class="login-btn" @click.native.prevent="getCode">
              <span v-if="count>0">{{count}}s后可重新发送</span>
              <span v-else>发送验证码</span>
            </el-button>
          </div>
        </el-form-item>
        <br>
    </el-form>
    <span slot="footer" class="dialog-footer" v-show="showCode">
        <el-button @click="detailDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveDetail">保 存</el-button>
    </span>
  </el-dialog>
  <el-dialog :modal="false" :close-on-press-escape="false" :show-close="false" :visible.sync="updateDialogVisible" width="400px" custom-class="updateDialog">
    <div class="diaLogContent">
      <img src="../../../assets/super/top.png" alt="">
    </div>
    <div class="flex-center-Y">
        <div :class="activeTab=='WEB'?'tab tab1 active':'tab tab1'" @click="activeTab='WEB';getUpdateList()"><div class="dot" v-if="noticeNumWeb>0"></div>PC端</div>
        <div :class="activeTab=='WEB'?'tab':'tab active'" @click="activeTab='PHONE';getUpdateList()"><div class="dot" v-if="noticeNumPhone>0"></div>移动端</div>
    </div>
    <div class="line" v-for="(item,i) in updateList" :key="i" @click="toDetail(item.noticeId)">
      <div class="top flex-center-Y">
        <div class="No"> <i class="dot" v-if="item.noticeStatus=='N'"></i> {{item.noticeName}}</div>
        <div class="time">{{item.createTime}}</div>
        <div class="icon">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="content limit-ellipsis">
          <span v-if="item.noticeNew">新增：{{item.noticeNew}}</span>
          <span v-if="item.noticeRepair">修复：{{item.noticeRepair}}</span>
      </div>
    </div>
    <div class="bottom" @click="toAll">查看全部</div>
  </el-dialog>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data(){
    return{
      activeTab:"WEB",
      updateList:[],
      noticeNumWeb: 0,
      noticeNumPhone: 0,
      noticeNumAll: 0,
      detailDialogVisible:false,
      updateDialogVisible:false,
      info:{},
      count:0,
      psdType:"password",
      showCode:false,
      showW:false,
      isHover:false,
      isHover1:false,
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'role',
      'nickname',
      'userName',
      'update'
    ])
  },
  mounted(){
  },
  methods: {
    toAll(){
      this.$router.push({path:"/updateLog"})
      this.updateDialogVisible=false
    },
    toDetail(id){
      this.api({
                    url: "/notice/noticeConfirm",
                    method: "post",
                    data: {
                        noticeId:id,
                    }
                }).then(data => {
                  this.api({
                        url: "/notice/noticeNum",
                        method: "post",
                        data: {}
                    }).then(data => {
                        this.noticeNumWeb= data.noticeNumWeb
                        this.noticeNumPhone= data.noticeNumPhone
                        this.noticeNumAll= data.noticeNumAll
                    })
                });
      this.$router.push({path:"/updateLog?noticeId="+id+"&type="+this.activeTab})
      this.updateDialogVisible=false
    },
    show(){
      this.updateDialogVisible=true
      this.getUpdateNum()
      this.getUpdateList()
    },
    toggleType(){
      this.info.code=''
      if(this.psdType=='password'){
        this.psdType=''
        this.info.code=''
      }else{
        this.psdType='password'
        this.info.code=''
      }
    },
    edit(){
      this.showCode=true
      // this.info.code=''
    },
    showDetail(){
      this.detailDialogVisible = true
      this.info = {}
      this.$parent.showSidebar()
      // this.info.code=""
      // this.info.password=""
    },
    saveDetail(){
      if(!this.info.code){
          this.$message({
              type: 'warning',
              message: '请输入验证码'
          })
          this.showCode=true
          return
      }
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
      let result = reg.test(this.info.password)
      if(!this.info.password || !result){
          this.$message({
              type: 'warning',
              message: '请输入6-12位数字与字母组合的密码'
          })
          return
      }
          this.api({
                url: "/user/updatePassword",
                method: "post",
                data: {
                    username:this.userName,
                    password:this.info.password,
                    code:this.info.code,
                    optionType:'C'
                }
            }).then(data => {
                if(data.returnCode){
                    this.$message({
                      type: 'warning',
                      message: data.returnMsg
                  })
                }else{
                  this.$message({
                      type: 'success',
                      message: '操作成功'
                  })
                  this.count = 0
                  this.detailDialogVisible = false
                }
            })
      
    },
    getCode(){
            if(this.count>0){return}
            this.count = 60;
            let tCount = setInterval(()=>{
              if(this.count>0){
                this.count--
              }else{
                window.clearInterval(tCount)
              }
            },1000)
            this.api({
                url: "/login/sendCode",
                method: "post",
                data: {
                    userName:this.userName
                }
            }).then(data => {
                if(data.returnCode){
                    this.$message({
                      type: 'warning',
                      message: data.returnMsg
                  })
                }else{
                  this.$message({
                      type: 'success',
                      message: '发送成功'
                  })
                }
            })
        },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
      // console.log(this.sidebar.opened)
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.function{height: 100%;}
.user-dropdown{width: 120px;.el-dropdown-menu__item{font-size: 0.7vw;}}
.flex-center{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.blue{color: rgba(74, 144, 226, 1);cursor: pointer}
.el-badge{font-size: 0px!important;}
.navbar {
  height: 100%;
  border-radius: 0px !important;
  background: transparent;
  position: relative;
  .rightIcon{
    position: absolute;
    right: -160%;
    top: 50%;
    transform: translateY(-50%);
    height: 2vw;
    // margin-top: 40%;
    img{width: 2vw;}
  }
  .center{
    text-align: center;
  }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    // width: 100%;
    height: 100%;
    display: inline-block;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
.flex-center-Y{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}
.code-input{
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }
  input[type="number"] {
      -moz-appearance: textfield;
  }
}

#psdInput .el-input{width:70%}
.updateDialog{
.diaLogContent{
  position: relative;
  img{
    width: 16px;
    height: 10px;
    position: absolute;
    top: -10px;
    right: 35px;
  }
  
}
.bottom{
  width: 100%;
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  text-align: center;
  color:#409EFF;
  cursor: pointer;
}
.line{
        width:100%;
        height: 86px;
        padding: 20px;
        border-bottom: 1px solid rgba(221,223,229,1);
        cursor: pointer;
        font-size: 14px;
        .No{
            position: relative;
            width: 70%;
            color: #333;
            font-weight: 600;
            .dot{
                width: 6px;
                height: 6px;
                background: #E24E4E;
                border-radius: 50%;
                position: absolute;
                top: 35%;
                left: 32%;
            }
        }
        .time{
            width: 25%;
            color: #999;
        }
        .icon{
            width: 5%;
            color: #999;
            font-size: 16px;
        }
        .content{
          color: #999;
          width: 100%;
          margin-top: 20px;
          font-size: 12px;
        }
  }
.tab{
    position: relative;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border:1px solid rgba(221,223,229,1);
    border-radius:0px 6px 0px 0px;
    text-align: center;
    color:#999;
    background: #fff;
    cursor: pointer;
    .dot{
        width: 6px;
        height: 6px;
        background: #E24E4E;
        border-radius: 50%;
        position: absolute;
        top: 35%;
        right: 23%;
    }
}
.tab1{
    border-radius:6px 0px 0px 0px;
}
.tab.active{
    border-bottom:1px solid #409EFF;
    color:#409EFF
}
}
</style>
<style lang="scss">
.userinfo-form .el-form-item__label{
  width: 260px;
}
.updateDialog{
    margin-top: 8vh!important;
    width: 400px!important;
    margin-right: 4%!important;
    .el-dialog__header{padding: 0!important;}
    .el-dialog__body{padding: 0;}
    border-radius: 8px;
}
</style>


