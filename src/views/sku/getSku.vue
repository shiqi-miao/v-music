<style lang="scss" scoped>
.blue {
    color: #5A9DF8;
    cursor: pointer;
    padding: 10px 6px;
}
.app-container {
    padding:20px;
    padding-top: 55px;
    color: #333!important
}
.tab{
    position: relative;
    width: 120px;
    height:36px;
    line-height: 36px;
    font-size: 14px;
    border:1px solid rgba(221,223,229,1);
    border-radius:6px 6px 0px 0px;
    text-align: center;
    color:#999;
    background: #fff;
    cursor: pointer;
    margin-right: 10px;
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
    border-radius:6px 6px 0px 0px;
}
.tab.active{
    background:#409EFF;
    border:1px solid #409EFF;
    color:#fff
}
.table{
    width: 100%;
    .line{
        width:100%;
        padding-left: 30px;
        margin-top: 20px;
        border: 1px solid rgba(221,223,229,1);
        border-radius:4px;
        cursor: pointer;
        .td{
            height: 50px;
            line-height: 50px;
            font-size:14px;
        }
        .No{
            position: relative;
            width: 15%;
            color: #333;
            font-weight: 600;
            .dot{
                width: 6px;
                height: 6px;
                background: #E24E4E;
                border-radius: 50%;
                position: absolute;
                top: 45%;
                left: 33%;
            }
        }
        .time{
            width: 20%;
            color: #999;
        }
        .content{
            width: 60%;
            color: #999;
        }
        .more{
            width: 5%;
            color: #999;
            cursor: pointer;
        }
        
    }
    .detail{
            padding: 30px 17%;
            background:rgba(250,250,250,1);
            border:1px solid #DDDFE5;
            border-top: 0;
            .new{
                .addBtn{
                    width:50px;
                    height:24px;
                    line-height:24px;
                    font-size: 14px;
                    color: #61D2A5;
                    border-radius:3px;
                    border:1px solid rgba(97,210,165,1);
                    background: #E2F9F0;
                    text-align: center;
                    margin-right: 30px;
                }
                .addContent{
                    font-size: 14px;
                    color: #999;
                    line-height: 1.5;
                }
            }
            .fix{
                .fixBtn{
                    width:50px;
                    height:24px;
                    line-height:24px;
                    font-size: 14px;
                    color: #D26161;
                    background:#F7E9E9;
                    border-radius:3px;
                    border:1px solid rgba(210,97,97,1);
                    text-align: center;
                    margin-right: 30px;
                }
                .fixContent{
                    font-size: 14px;
                    color: #999;
                    line-height: 1.5;
                }
            }
        }
        .detail.none{
            display: none;
        }
    .line:hover{
        background: #FAFAFA;
    }
}
.el-card{height: 90vh;border-radius:4px;overflow: auto}
.btn{width:100px;height: 36px;line-height: 36px;color: #fff;background:#5A9DF8;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.btn2{width: 10%;height: 5vh;line-height: 5vh!important;color: #fff;background:rgba(40,110,255,1);text-align: center;cursor: pointer;border-radius: 8px}
.btn1{width:100px;height: 36px;line-height: 36px;color:#5A9DF8;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #5A9DF8;}
.m-auto{margin:0 auto}
.lg-font{font-size: 26px;line-height:37px;}
.bg-font{font-size: 22px;line-height:30px;}
.sm-font{font-size: 18px;line-height:25px;}
.img{width: 50px;height: 50px;}
#commodity{background:#F2F4F8;min-height: 93vh;}
#commodity .search{width: 350px;margin-right: 20px;}
.dialog{
    .plateform{
            cursor: pointer;
            margin-top: 20px;
        .icon{
            width: 12px;
            height: 12px;
            background-image: url("../../assets/icons/select.png");
            background-size: 100%;
            cursor: pointer;
            }
        .iconno{
            width: 12px;
            height: 12px;
            background-image: url("../../assets/icons/no-select.png");
            background-size: 100%;
            cursor: pointer;
            }
        .label{
            width: 70px;
            padding-top: 9px;
            text-align: right;
            }
        .p-0{padding: 0;}
        .input{
            position: relative;
            width: 680px;
            .tip{
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                z-index: 100;
            }
            .el-textarea__inner{height: 160px;}
            }
    }
    }
.dialog .title{font-size: 16px;text-align: center;margin-top: 20px;margin-bottom: 54px;}
.empty img{width: 160px;height:160px;margin-top:60px}
pre{margin: 0;}
</style>
<style lang="scss">
.logDialog .el-dialog__title{font-size: 14px;line-height: 0;}
.logDialog .el-dialog__header{border-bottom: 1px solid #E8EAEE;padding: 17px 20px;}
.logDialog .input{
            .el-textarea__inner{height: 160px;}
            .el-input__inner{padding-left: 60px;}
            }
.el-dialog{padding: 0;}
.logDialog .el-dialog__body{padding: 20px;color: #333;}
.el-card__body{height:100%;padding: 0;}
#commodity .el-table thead{color: #333;}
#commodity .el-table th>.cell{font-weight: 400;}
#commodity .el-select{width: 115px;}
#commodity .el-input__inner,#commodity .el-input__icon{height: 36px;line-height: 36px;}
#commodity .skuTableStyle{height: 65px;}
</style>
<template>
    <div class="app-container" id="commodity">
        <div style="background:#fff;min-height:85vh;position:relative;border:1px solid rgba(221,223,229,1);">
        <div class="flex-center-Y" style="position:absolute;top:-36px;left:0">
            <div :class="activeTab=='0'?'tab active':'tab'" @click="activeTab='0';getList()"><div class="dot" v-if="noticeNumWeb>0"></div>商品管理</div>
            <div :class="activeTab=='1'?'tab active':'tab'" @click="activeTab='1';getList()"><div class="dot" v-if="noticeNumPhone>0"></div>分类管理</div>
            <div :class="activeTab=='2'?'tab active':'tab'" @click="activeTab='2';getList()"><div class="dot" v-if="noticeNumPhone>0"></div>品牌管理</div>
        </div>
        <div style="padding:20px;width:100%;border:1px solid #F2F4F8;">
            <div class="flex-center-Y">
                <div class="btn" @click="getSku" :loading="reqLoading">搜索</div>
            </div>
        </div>
        <div style="padding:30px;padding-top: 0;">
        <div class="pagination-line">
            <el-pagination background
                           @size-change="handleSizeChange"
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"
                           layout="total, prev, pager, next">
            </el-pagination>
        </div>
        </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            activeTab:"0",
            searchValue:"",
            searchType:"1",
            noticeNumWeb: 0,
            noticeNumPhone: 0,
            noticeNumAll: 0,
            tableData: [{active:false},{active:false},{active:false}],
            params: {
            pageRow: 10,
            pageNum: 1
                },
            totalCount: 0,
            editDialog:false,
            selectData:{}
        }
    },
    mounted(){
        // this.$store.commit('SET_UPDATE', '55');
        this.selectData.id=this.$route.query.noticeId
        this.selectData.type=this.$route.query.type
        this.activeTab=this.selectData.type || '0'
        console.log(this.selectData)
        this.getList()
        this.getDetail(this.selectData.id,'N') 
    },
    methods:{
        getList() {
            this.listLoading = true;
            this.$set(this, "tableData", []);
                this.api({
                    url: "/notice/noticeShow",
                    method: "post",
                    data: {
                        noticeType:this.activeTab,
                        pageRow:this.params.pageRow,
                        pageNum:this.params.pageNum
                    }
                }).then(data => {
                    this.getUpdateNum()//获取未读数量
                    this.listLoading = false;
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                    //默认展开从路径上带过来的id
                    for(let i in this.tableData){
                        if(this.tableData[i].noticeId==this.selectData.id){
                            this.tableData[i].active=true
                        }
                    }
                    this.tableData=JSON.parse(JSON.stringify(this.tableData))
                    //默认展开从路径上带过来的id
                });
        },
        getUpdateNum(){
            this.api({
                        url: "/notice/noticeNum",
                        method: "post",
                        data: {}
                    }).then(data => {
                        this.noticeNumWeb= data.noticeNumWeb
                        this.noticeNumPhone= data.noticeNumPhone
                        this.noticeNumAll= data.noticeNumAll
                        this.$store.commit('SET_UPDATE', data.noticeNumAll); 
                    })
            },
        getDetail(id,status){
            if(status=='N'){//如果未读标记为已读
            this.api({
                    url: "/notice/noticeConfirm",
                    method: "post",
                    data: {
                        noticeId:id,
                    }
                }).then(data => {
                    this.selectData.id=id//标记已读后,重新请求列表,仍然展开刚刚展开的行
                    this.getList()
                });
                }
        },
        changeStatus(item,index){
            for(let i in this.tableData){
                if(i!=index){
                this.tableData[i].active=false
                }
            }
            item.active=!item.active
            this.tableData=JSON.parse(JSON.stringify(this.tableData))
            this.getDetail(item.noticeId,item.noticeStatus)//标记已读
        },
        handleSizeChange(val) {
            this.params.pageRow = val;
            this.getList();
        },
        currentChange(index) {
            this.params.pageNum = index;
            this.getList();
        },
        prevClick(index) {
            this.params.pageNum = index;
            this.getList();
        },
        nextClick(index) {
            this.params.pageNum = index;
            this.getList();
        },
        toCreate(){
            this.$router.push({path:"/createSku"})
        },
        edit(row){
            this.$router.push({path:"/editSku/"+row.skuCode})
        },
        toDetail(row){
            this.$router.push({path:"/detailSku"})
        },
        
    },
    computed: {
        ...mapGetters(["userName"])
    }
}
</script>



   