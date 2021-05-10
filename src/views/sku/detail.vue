<style lang="scss" scoped>
    div{color: #333;background: #fff;}
    #detailSku{
        width: 100%;padding: 20px;background:rgba(245,246,248,1);height:95vh;position:relative;
        .top{
            width: 100%;height: 210px;margin-bottom: 10px;padding: 30px;
            .left{
                width:150px;height:150px;margin-right:30px;
                img{width: 100%;height: 100%;}
            }
            .right{
                .detail{margin-bottom: 30px;font-size:14px;span{color:rgba(153,153,153,1);}}
            }
        }
        .bottom{
            width: 98%;position:absolute;top:305px;bottom:0;
            .line{
                    border-bottom:1px solid  #EDEFF0;
                    width: 650px;
                    .box{
                        width: 33.33333%;
                        .name{
                            font-size:14px;
                            color:rgba(51,51,51,1);
                            line-height:14px;
                            margin-top:50px;
                            margin-bottom:23px;
                            text-align: center;
                        }
                        .data{
                            font-size:24px;
                            color:#5A9DF8;
                            line-height:24px;
                            font-weight: 600;
                            margin-bottom: 50px;
                            text-align: center;
                        }
                        }
                    }
        }
    }
.border-0{border:0!important}
/* 返回上级 */
.iconfont{font-size:1.5vw;color: #fff}
.minifont{font-size: 0.73vw;}
.backBtn{background: #e1dede;width: 3.2vw;height: 3.2vw;box-shadow:0px 20px 20px -10px rgba(0, 0, 0, 0.15);z-index: 10;text-align: center;line-height: 3.9vw;border-radius: 0.5vw;margin-bottom: 0.5vh}
#backBtn{color: rgba(155, 155, 155, 1);position: fixed;top: 50%;right: 2vw;z-index: 10;cursor: pointer;}
/* 返回上级 */
</style>
<style lang="scss" >
.el-dialog__header{padding: 0}
.el-dialog{padding: 0;}
.el-dialog__body{padding: 40px;color: #333;max-height: 80vh;overflow: auto;}
.el-loading-mask{border-radius: 4px;}
</style>
<template>
    <div id="detailSku">
        <div id="backBtn" class="minifont" @click="toBack"><div class="backBtn"><i class="el-icon-arrow-left iconfont"></i></div><div style="line-height:1vw">返回上级</div></div>
        <div style="padding:20px;width:100%;border:1px solid #F2F4F8;font-size:16px;font-weight:600">
            经营情况
        </div>
        <div class="top flex-center-Y">
            <div class="left">
                <img src="../../assets/super/logo.png" alt="">
            </div>
            <div class="right">
                <div class="detail">
                    <span>名称/规格：</span>可口可乐150ml
                </div>
                <div class="detail">
                    <span>分类/品牌：</span>饮料类/可口可乐
                </div>
                <div class="detail" style="margin:0">
                    <span>建议零售价：</span>2.50元
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="line flex-center-Y">
                <div class="box">
                    <div class="name">历史总销量（件）</div>
                    <div class="data">12316</div>
                </div>
                <div class="box">
                    <div class="name">近30天销量（件）</div>
                    <div class="data">582</div>
                </div>
                <div class="box">
                    <div class="name">近7天销量（件）</div>
                    <div class="data">153</div>
                </div>
            </div>
            <div class="line border-0 flex-center-Y">
                <div class="box">
                    <div class="name">最高/最低售价（元）</div>
                    <div class="data">2.50/2.20</div>
                </div>
                <div class="box">
                    <div class="name">服务运营商（个）</div>
                    <div class="data">5</div>
                </div>
                <div class="box">
                    <div class="name">已上架设备（台）</div>
                    <div class="data">328</div>
                </div>
            </div>
        </div>
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
        
    },
    mounted(){
        
    },
    methods: {
        toBack(){//返回上级
            this.$router.go(-1)
            },
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>


