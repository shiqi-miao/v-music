<template>
  <div class="scroll-container flex-center" ref="scrollContainer" @wheel.prevent="handleScroll" >
    <!-- <div class="center-top-top" v-if="sidebar.opened">
                    <div class="flex-center">
                      <div class="inner-box flex-center">
                        <img src="../../assets/analysis/logo.png"
                             alt=""
                             class="logo">
                      </div>
                    </div>
    </div> -->
    <div class="center-top-top" v-if="!sidebar.opened" style="height:3%!important">
                    
    </div>
    <!-- <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}"> -->
    <div class="scroll-wrapper" ref="scrollWrapper">
      <slot></slot>
    </div>
    <div class="user">
      <navbar></navbar>
    </div>
  </div>
</template>

<script>
const delta = 15
import { mapGetters } from "vuex";
import { Navbar } from '@/views/layout/components'
export default {
  name: 'scrollBar',
  components: {
    Navbar
  },
  data() {
    return {
      // top: 0
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ])
  },
  methods: {
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 3
      const $container = this.$refs.scrollContainer
      const $containerHeight = $container.offsetHeight
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperHeight = $wrapper.offsetHeight
      if (eventDelta > 0) {
        this.top = Math.min(0, this.top + eventDelta)
      } else {
        if ($containerHeight - delta < $wrapperHeight) {
          if (this.top < -($wrapperHeight - $containerHeight + delta)) {
            this.top = this.top
          } else {
            this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta)
          }
        } else {
          this.top = 0
        }
      }
    },
    showSidebar(){
        this.$parent.showSidebar()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../styles/variables.scss';
$red: #ff1b11;
.scroll-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow:0px 2px 4px 0px rgba(0,0,0,0.05);
  .scroll-wrapper {
    position: absolute;
    width: 60%!important;
    min-width: 756px;
    left: 0px;
  }
}

.center-top-top {
        position: absolute;
        left:0;
        width: 150px;
        height: 100%;
        padding: 10px;
        .logo {
            width: 90px;
            min-width: 72px;
            // margin-left: 1.6vw;
        }
        .title{
          color:#fff;
          font-size: 1.4vw
        }
        .inner-box{
          position: absolute;
          top: 50%;
          transform: translateY(-50%)
        }
}
.user{position: absolute;right:2vw;top: 0;width: 4vw;height: 100%;}
</style>
<style>
.v-modal{z-index: 200!important;}
.scroll-wrapper .el-submenu__title{
  padding: 0 0;
  font-size: 14px;
  height: 5.5vh;
  line-height: 5.5vh;
  text-align: center;
}
.scroll-wrapper .el-submenu__title:hover{
  background: #fff!important;
}
.scroll-wrapper .el-submenu__icon-arrow{
  /* font-size: 1vw */
  font-size: 0vw
}
.scroll-wrapper .el-menu-item{
  font-size: 0.9vw!important;
  height: 45px;
  line-height: 45px;
} 
.scroll-wrapper .el-menu--horizontal .el-menu .el-menu-item{height: 44px;}
.scroll-wrapper .submenu-title-noDropdown{
  font-size: 14px!important;
  text-align: center;
}
.scroll-wrapper .submenu-title-noDropdown:hover{
  background-color: #fff!important;
}
.scroll-wrapper .is-active>div:after {
                    position: absolute;
                    bottom: -0.5vh;
                    content: "";
                    width:100%;
                    height:2px;
                    background-color: #409EFF;
                    left: 0
                }
.scroll-wrapper .is-opened>div{
  color: #409EFF!important;
}
.scroll-wrapper .submenu-title-noDropdown.is-active:after{
                    position: absolute;
                    bottom: 0px;
                    content: "";
                    width:50%;
                    height:2%;
                    background-color: #409EFF;
                    left: 50%;
                    transform: translateX(-50%);
}


</style>

