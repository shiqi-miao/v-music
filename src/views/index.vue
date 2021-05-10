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
            exprieNotify: null,
            repairNotify:null,
            configNotify:null,
            stockNotify:null,
            orderNotify:null,
            miniOrderNotify:null,
            baristaNotify:null,
            miniOdoNotify:null,
            wareId:"",
            // skuCodes:"",
            complainStatus:1
        };
    },
    created() {
        this.getAlert()
        this.getConFigInfo()
        this.getOrderRemind()
        this.getOdoLogin()
    },
    methods: {
        getOrderRemind(){
            this.api({
                url: "/notice/orderRemind",
                method: "post",
                data: {}
            }).then(data => {
                    const h =this.$createElement;
                    if(Number(data.orderNum)>0){
                        setTimeout(() => {
                    this.miniOrderNotify=this.$notify({
                            title: "提醒",
                            dangerouslyUseHTMLString: true,
                            message: h(
                                "a",
                                {
                                    on: {
                                        click: this.toMiniOrder
                                    }
                                },
                                "您有"+data.orderNum+"个新商城订单"
                            ),
                            type: "warning",
                            duration: 0
                        });
                        }, 50)
                    }
                    if(Number(data.baristaOrderNum)>0){
                        setTimeout(() => {
                    this.baristaNotify=this.$notify({
                            title: "提醒",
                            dangerouslyUseHTMLString: true,
                            message: h(
                                "a",
                                {
                                    on: {
                                        click: this.toBarista
                                    }
                                },
                                "您有"+data.baristaOrderNum+"个新咖啡师预约订单"
                            ),
                            type: "warning",
                            duration: 0
                        });
                        }, 60)
                    }
            });
        },
        getOdoLogin(){
            this.api({
                url: "/login/cpOdoLogin",
                method: "post",
                data: {
                    manageId:this.userId
                }
            }).then(data => {
                    const h =this.$createElement;
                    if(Number(data)>0){
                        setTimeout(() => {
                    this.miniOdoNotify=this.$notify({
                            title: "提醒",
                            dangerouslyUseHTMLString: true,
                            message: h(
                                "a",
                                {
                                    on: {
                                        click: this.toMiniOdo
                                    }
                                },
                                "您有"+data+"条库存需要回仓确认"
                            ),
                            type: "warning",
                            duration: 0
                        });
                        }, 70)
                    }
            });
        },
        getConFigInfo(){
            this.api({
                url: "/login/warnInfoToOperator",
                method: "post",
                data: { username: this.userName }
            }).then(data => {
                if(data.isStock){//有库存模式
                        const h =this.$createElement;
                    if(data.maintenanceFlag==false){
                        setTimeout(() => {
                        this.configNotify=this.$notify({
                                title: "提醒",
                                dangerouslyUseHTMLString: true,
                                message:h(
                                    "a",
                                    {
                                        on: {
                                            click: this.toConfig
                                        }
                                    },
                                    "您还未配置结算信息!"
                                ),
                                type: "warning",
                                duration: 0
                            });
                            }, 10)
                            }
                        if(data.haveRepairFlag==false){
                            setTimeout(() => {
                            this.repairNotify=this.$notify({
                                title: "提醒",
                                dangerouslyUseHTMLString: true,
                                message: h(
                                    "a",
                                    {
                                        on: {
                                            click: this.toRepair
                                        }
                                    },
                                    "有机器尚未配置补货员!"
                                ),
                                type: "warning",
                                duration: 0
                            });
                            }, 20)
                        }
                        if(data.skuLimitFlag==false){
                            setTimeout(() => {
                            let html3=''
                            for(let i in data.skuJson){
                                html3+=data.skuJson[i].wareName+' '
                            }
                            this.wareId=data.skuJson[0].wareId
                            // this.skuCodes=data.skuJson[0].skuCodes
                        this.stockNotify=this.$notify({
                                title: "提醒",
                                dangerouslyUseHTMLString: true,
                                message: h(
                                    "a",
                                    {
                                        on: {
                                            click: this.toStock
                                        }
                                    },
                                    html3+"有部分在售sku已经低于库存预警值"
                                ),
                                type: "warning",
                                duration: 0
                            });
                            }, 30)
                        }
                        if(data.complainFlag==true){
                            setTimeout(() => {
                        this.orderNotify=this.$notify({
                                title: "提醒",
                                dangerouslyUseHTMLString: true,
                                message: h(
                                    "a",
                                    {
                                        on: {
                                            click: this.toOrder
                                        }
                                    },
                                    "您有"+data.complainCount+"条用户申诉还未进行处理"
                                ),
                                type: "warning",
                                duration: 0
                            });
                            }, 40)
                        }
                }else{//无库存模式
                }
            });
        },
        toRepair(){
            this.repairNotify.close()
            this.$router.push({ path: "/operation" })
        },
        toConfig(){
            this.configNotify.close()
            this.$router.push({ path: "/system/setting" })
        },
        toStock(){
            this.stockNotify.close()
            window.localStorage.setItem("limitFlag",true)//标志跳转到仓库后显示低于库存预警值的库存
            this.$router.push({ path: "/operation/index/"+'_'+'/'+ this.wareId + '/'+'_'})
        },
        toOrder(){
            this.orderNotify.close()
            this.$router.push({ path: "/operation/order/"+ this.complainStatus})
        },
        toMiniOrder(){
            this.miniOrderNotify.close()
            this.$router.push({ path: "/kupper/order"})
        },
        toBarista(){
            this.baristaNotify.close()
            this.$router.push({ path: "/kupper/order"})
        },
        toMiniOdo(){
            this.miniOdoNotify.close()
            window.localStorage.setItem("activeName","back")//标志跳转到回仓库存tab
            this.$router.push({ path: "/operation/marketInfo/"+"_"+"/"+"_"+"/"+"_"})
        },
        getAlert() {
            this.api({
                url: "/login/nearExpiredTime",
                method: "post",
                data: { username: this.userName }
            }).then(data => {
                // console.log(data)
                let html=""
                for(let i in data.expiredCount){
                    if(data.expiredCount[i].num!==0){
                        html+="<div><span>"+data.expiredCount[i].wareName+"有"+data.expiredCount[i].num+"个临期SKU</span></div>"
                    }
                    
                }
                if(data.expiredCount.length > 0){
                    const h = this.$createElement;
                    this.expiredCount=data.expiredCount
                    this.exprieNotify = this.$notify({
                        title: "已有临期库存",
                        dangerouslyUseHTMLString: true,
                        message:html,
                        type: "warning",
                        duration: 0
                    });
                }
                // if (this.status == 1) {
                //     this.$router.push({ path: "/homeIndex" });
                    
                // } else {
                //     this.$router.push({ path: "/finance" });
                // }
                //登陆成功后,页面跳转到有权限的模块的第一个模块
                if(this.menus.indexOf('homeIndex')!='-1'){
                    this.$router.push({ path: "/dataScreen" });
                    return;
                }
                if(this.menus.indexOf('storeSku')!='-1'){
                    this.$router.push({ path: "/operation" });
                    return;
                }
                if(this.menus.indexOf('promotionAll')!='-1'){
                    this.$router.push({ path: "/markting" });
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
                if(this.menus.indexOf('pragramInfo')!='-1'){
                    this.$router.push({ path: "/kupper" });
                    return;
                }
                //登陆成功后,页面跳转到有权限的模块的第一个模块
            });
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