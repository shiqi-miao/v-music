<style>
#index .el-notification.right {
    text-align: left !important;
}
</style>

<template>
    <div class="app-container">
    </div>
   
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
        };
    },
    created() {
        this.getAlert()
    },
    methods: {
        getAlert() {
            
                //登陆成功后,页面跳转到有权限的模块的第一个模块
                if(this.menus.indexOf('pragramInfo')!='-1'){
                    this.$router.push({ path: "/kupper" });
                    return;
                }
                if(this.menus.indexOf('financeInfo')!='-1'){
                    this.$router.push({ path: "/finance" });
                    return;
                }
                if(this.menus.indexOf('systemInfo')!='-1'){
                    this.$router.push({ path: "/system" });
                    return;
                }
                //登陆成功后,页面跳转到有权限的模块的第一个模块
        }
    },
    computed: {
        ...mapGetters(["status", "userName","menus","userId"])
    }
};
</script>