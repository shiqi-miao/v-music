<template>
<div class="function flex-center-Y">
  <!-- <div class="menu">
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
  </div> -->
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


