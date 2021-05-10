<template>
  <div class="menu-wrapper">
    
    <template v-for="item in routes" v-if="!item.hidden&&item.children" >

      <router-link :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
      
        <el-menu-item v-if="item.children.length===1 && !item.children[0].children" :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>

        <el-submenu v-else :index="item.name||item.path" :key="item.name" popper-class='submenuStyle'>
          <template slot="title">
            <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
            <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
          </template>

          <template v-for="child in item.children" v-if="!child.hidden">
            <router-link v-if="child.children&&child.children.length>0" :to="item.path+'/'+child.path" :key="child.name">
              <sidebar-item class="nest-menu" :routes="[child]" :key="child.path"></sidebar-item>
            </router-link>
            <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
              <el-menu-item :index="item.path+'/'+child.path">
                <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>

        </el-submenu>
      </router-link>

      


    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  }
}
</script>
<style>
.submenuStyle{
    top: 6vh!important;
  }
  .submenuStyle .el-menu--popup{
    min-width:0px!important;
    width: 120px;
    min-width: 78px!important;
  }
 .submenuStyle .el-menu-item{font-size:14px;padding: 0 0vw!important;text-align: center;}
</style>
