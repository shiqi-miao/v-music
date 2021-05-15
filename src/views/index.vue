<style>
#index .el-notification.right {
    text-align: left !important;
}
</style>

<template>
    <div class="app-container">
        <!-- <el-button type="success" icon="el-icon-plus" @click="addGoods">新增</el-button> -->
        <!-- <div><span>尚有机器未配置补货员! <span style="color:#999" @click="toRepair">去配置</span> </span></div> -->
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
        },

        onClick() {
            this.exprieNotify.close();
            this.$router.push({ name: "促销管理", params: { tab: "expired" } });
        }
    },
    computed: {
        ...mapGetters(["status", "userName","menus","userId"])
    }
};
</script>