<template>
  <scroll-bar>
    <el-menu mode="horizontal" unique-opened :default-active="$route.path" :collapse="isCollapse" :menu-trigger='openType'
             background-color="#fff" text-color="#333333" active-text-color="#409EFF">
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>
<script>
  import {mapGetters} from 'vuex'
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'

  export default {
    props: {                //接受父组件传递来的数据
      openType: {
        type: String,
        default () {        //默认数据，没有数剧的情况下启用
          return 'hover'
        }
      },
    },
    components: {SidebarItem, ScrollBar},
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    },
    methods:{
      showSidebar(){
        this.$parent.showSidebar()
      }
    },
  }
</script>
