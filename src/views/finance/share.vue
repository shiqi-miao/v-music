<style lang="scss" scoped>
.blue {
    color: #409EFF;
    cursor: pointer;
}
.grey {
    color: #999;
    cursor: pointer;
    font-size: 20px;
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
.text-left{text-align: left!important;}
.text-right{text-align: right!important;}
.el-card{height: 90vh;border-radius:4px;overflow: auto}
.btn{width:100px;height: 36px;line-height: 36px;color: #fff;background:#5A9DF8;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.btn2{width: 10%;height: 5vh;line-height: 5vh!important;color: #fff;background:rgba(40,110,255,1);text-align: center;cursor: pointer;border-radius: 8px}
.btn1{width:100px;height: 36px;line-height: 36px;color:#5A9DF8;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #5A9DF8;}
.m-auto{margin:0 auto}
.lg-font{font-size: 26px;line-height:37px;}
.bg-font{font-size: 22px;line-height:30px;}
.sm-font{font-size: 18px;line-height:25px;}
.img{width: 50px;height: 50px;}
#share{background:#F2F4F8;min-height: 93vh;}
#share .search{width: 350px;margin-right: 20px;}
.adddialog{
    .top{
        width: 100%;
        height:34px;
        background:#ffeced;
        color: #E24E4E;
        padding-left: 20px;
        border-top: 1px solid #E8EAEE;
        img{width: 20px;height: 20px;margin-right: 5px;}
    }
    .center{
        width: 100%;
        height:54px;
        color: #333;
        line-height: 54px;
        padding-left: 20px;
        border-bottom: 1px solid #E8EAEE;
        span{color: #999;}
    }
    .content{
        max-height: 350px;
        overflow: auto;
        padding: 30px 40px;
        .thead{
            width: 100%;
            color: #999;
            .td{
                width: 40%;
                text-align: center;
                margin-bottom: 20px;
            }
            .td1{
                width: 20%;
            }
        }
        .thbody{
            width: 100%;
            .td{
                width: 40%;
                text-align: center;
                margin-bottom: 20px;
            }
            .td1{
                width: 20%;
            }
        }
    }
    }
.dialog .title{font-size: 16px;text-align: center;margin-top: 20px;margin-bottom: 54px;}
.empty img{width: 160px;height:160px;margin-top:60px}

pre{margin: 0;}
</style>
<style lang="scss">
.el-dialog{padding: 0;padding-bottom: 20px;}
.el-card__body{height:100%;padding: 0;}
#share .el-dialog__title{font-size: 16px;}
#share .el-dialog__body{padding: 0;}
#share .el-table thead{color: #333;}
#share .el-table th>.cell{font-weight: 400;}
#share .el-input__inner,#share .el-input__icon{height: 36px;line-height: 36px;}
#share .skuTableStyle{height: 65px;}
#share .el-table__expanded-cell .el-table__header-wrapper{height: 0;}
#share .el-table__expanded-cell[class*=cell]{padding-right: 0;padding-left: 50px;}
#share .el-table__expanded-cell[class*=cell] th,#share .el-table__expanded-cell[class*=cell] td,#share .el-table__expanded-cell[class*=cell]{background: rgba(245, 246, 248, 1)!important}
#share .el-table{background: #F5F6F8;}
#share .el-table--striped .el-table__body tr.el-table__row--striped td{background: #F5F6F8;}
#share .el-input-number__decrease, .el-input-number__increase{background: #fff;}
#share .el-input-number,#share .el-input-number .el-input__inner{line-height:28px;height: 30px;}
#share .el-input-number{width: 140px;}
</style>
<template>
    <div class="app-container" id="share">
        <div style="background:#fff;min-height:85vh;position:relative;border:1px solid rgba(221,223,229,1);">
        <div class="flex-center-Y" style="position:absolute;top:-36px;left:0">
            <div :class="activeTab=='1'?'tab tab1 active':'tab tab1'" @click="activeTab='1';getList()">点位分润</div>
            <div :class="activeTab=='1'?'tab':'tab active'" @click="activeTab='0';getList()">分润方管理</div>
        </div>
        <div style="padding:20px;width:100%;border-bottom:1px solid #F2F4F8;" v-show="activeTab=='0'">
            <div class="btn1" :loading="reqLoading" style="width:120px" @click="$router.push({path:'createShare'})"> <i class="el-icon-plus"></i> 创建分润方</div>
        </div>
        <div style="padding:30px;padding-top: 0;">
        <el-table
            v-show="activeTab=='1'"
            stripe
            :data="tableData"
            header-row-class-name="skuTableStyle"
            cell-class-name="skuCellStyle"
            style="width:100%"
            ref="table" 
            @row-click="clickTable"
            row-key="id" 
            :expand-row-keys="expands" 
            @expand-change="expandChange"
            v-loading="listLoading">
            <div slot="empty" class="empty" v-if="!listLoading">
                <img src="../../assets/operaion/blank.png" alt="">
                <div>暂无数据</div>
            </div>
            <el-table-column type="expand" fixed>
                <template slot-scope="props">
                    <el-table :data="props.row.skuList" stripe style="width: 100%" class="expendtable">
                        <el-table-column  prop="" label="" align="center" min-width="20%"></el-table-column>
                        <el-table-column prop="name" label=""  min-width="20%" align="center"></el-table-column>
                        <el-table-column prop="num" label=""  min-width="20%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.num || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column label=""  min-width="25%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.price || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column label=""  min-width="25%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.wait || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column  prop="" label="" align="center" min-width="20%"></el-table-column>
                        <el-table-column  prop="" label="" align="center" min-width="20%"></el-table-column>
                        <el-table-column  prop="" label="" align="center" min-width="20%"></el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column prop="binPicture"
                             label="点位名称"
                             min-width="20%"
                             align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="分润方"
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop="num"
            label="分润占比"
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop="price"
            label="历史分润总额（元）"
            align="center"
            min-width="25%">
            </el-table-column>
            <el-table-column
            prop="wait"
            label="待分润金额（元）"
            align="center"
            min-width="25%">
            </el-table-column>
            <el-table-column
            prop=""
            label=""
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop=""
            label=""
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop="tempSettlePrice"
            label="操作"
            align="center"
            min-width="20%">
            <template slot-scope="scope">
                <span class="blue" style="text-decoration:underline" @click.stop="manage(item)">管理分润方</span>
            </template>
            </el-table-column>
        </el-table>
        <el-table
            v-show="activeTab=='0'"
            stripe
            :data="tableDataA"
            header-row-class-name="skuTableStyle"
            cell-class-name="skuCellStyle"
            style="width:100%"
            v-loading="listLoading">
            <div slot="empty" class="empty" v-if="!listLoading">
                <img src="../../assets/operaion/blank.png" alt="">
                <div>暂无数据</div>
            </div>
            <el-table-column prop="type"
                             label="主体类型"
                             min-width="20%"
                             align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.type}}</span>
                </template>
            </el-table-column>
            <el-table-column
            prop="distributeName"
            label="分润方主体名称"
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop="settleType"
            label="收款方式"
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop="accountNumber"
            label="收款账号"
            align="center"
            min-width="25%">
            </el-table-column>
            <el-table-column
            prop=""
            label=""
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop=""
            label=""
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop=""
            label=""
            align="center"
            min-width="20%">
            </el-table-column>
            <el-table-column
            prop="tempSettlePrice"
            label="操作"
            align="center"
            min-width="20%">
            <template slot-scope="scope">
                <span class="blue" @click="$router.push({path:'editShare/'+scope.row.distributeId})">编辑</span>&nbsp;&nbsp;
                <span class="blue" @click="delDialog=true;selectData=scope.row">删除</span>
            </template>
            </el-table-column>
        </el-table>
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
        <el-dialog
            :visible.sync="delDialog"
            width="400px"
            >
            <div class="dialog">
                <div class="title">是否确认删除该分润方信息？</div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="delDialog=false">
                            取 消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="commitDel">
                            确 认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="tipDialog"
            class="tipDialog"
            width="400px"
            >
            <div class="dialog">
                <div class="title title1">该分润方已在部分点位中进行分润，请调整后再执行删除操作。</div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="addDialog"
            width="500px"
            title="分润方管理"
            >
            <div class="adddialog">
                <div class="top flex-center-Y" v-if="show">
                    <img src="../../assets/icons/warning.png" alt="">
                    各分润方占比总额需为100%
                </div>
                <div class="center flex-center-Y">
                    <span>点位名称：</span>
                    光芽新零售
                </div>
                <div class="content">
                    <div class="thead flex-center-Y">
                        <div class="td text-left">分润方</div>
                        <div class="td">分润占比（%）</div>
                        <div class="td td1 text-right">操作</div>
                    </div>
                    <div class="thbody flex-center-Y" v-for="(item,i) in list" :key="i">
                        <div class="td text-left" v-if="!item.isAdd">光芽新零售</div>
                        <div class="td text-left" v-else>
                            <el-select v-model="item.name">
                                <el-option
                                    v-for="item in operatorList"
                                    :key="item.operatorId"
                                    :label="item.operatorName"
                                    :value="item.operatorId"
                                    >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="td">
                            <el-input-number v-model="item.num" :min="0"></el-input-number>
                        </div>
                        <div class="td td1 text-right" @click="del(i)">
                            <i class="el-icon-delete grey" v-if="i>0"></i>
                        </div>
                    </div>
                    <div class="add flex-center-Y blue" @click="add">
                        <i class="el-icon-plus blue"></i>&nbsp;添加分润方
                    </div>
                </div>
                <div class="box-bottom flex-center-Y" style="justify-content:flex-end;padding-right:30px;border-top:1px solid #E8EAEE;padding-top:20px">
                    <div class="btn1" @click="addDialog=false" style="margin-right:20px">
                        取 消
                    </div>
                    <div class="btn" style="float:none" @click="commitAdd">
                        确 认
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            activeTab:"1",
            searchValue:"",
            searchType:"1",
            noticeNumWeb: 0,
            noticeNumPhone: 0,
            noticeNumAll: 0,
            operatorList:[],
            tableData: [{active:false,name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00",skuList:[{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"},{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"}],id:1},{active:false,name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00",skuList:[{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"},{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"}],id:2},{active:false,name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00",skuList:[{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"},{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"}],id:3}],
            tableDataA:[{active:false,name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00",skuList:[{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"},{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"}],id:1},{active:false,name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00",skuList:[{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"},{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"}],id:2},{active:false,name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00",skuList:[{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"},{name:"玄鸟",num:"10%",price:"25377.00",wait:"26584.00"}],id:3}],
            list:[{num:30,operatorId:1},{num:40,operatorId:2}],
            params: {
            pageRow: 10,
            pageNum: 1
                },
            totalCount: 0,
            editDialog:false,
            selectData:{},
            expands:[],
            addDialog:false,
            tipDialog:false,
            delDialog:false,
            reqLoading:false,
            listLoading:false,
            show:false
        }
    },
    mounted(){
        this.getList()
    },
    methods:{
        getList() {
            this.listLoading = true;
            if(this.activeTab==1){
                this.api({
                    url: "/distribute/distributeManShow",
                    method: "post",
                    data: {
                        pageRow:this.params.pageRow,
                        pageNum:this.params.pageNum
                    }
                }).then(data => {
                    this.listLoading = false;
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            }else{
                this.api({
                    url: "/distribute/distributeManShow",
                    method: "post",
                    data: {
                        pageRow:this.params.pageRow,
                        pageNum:this.params.pageNum
                    }
                }).then(data => {
                    this.listLoading = false;
                    this.$set(this, "tableDataA", data.list);
                    this.totalCount = data.totalCount;
                });
            }
        },
        commitDel(){

        },
        add(){
            this.list.push({isAdd:true,num:0})
        },
        manage(item){
            this.addDialog=true
            this.selectData=item
        },
        commitAdd(){
            let num=0
            for(let i in this.list){
                if(!this.list[i].operatorId){
                    this.$message({
                        type: 'warning',
                        message: '请选择分润方！'
                    })
                    return;
                }
                num+=Number(this.list[i].num)
            }
            if(num!=100){
                this.show=true
            }
        },
        del(index){
            this.list.splice(index,1)
        },
        expandChange(row, expandedRows) {
            //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.id)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            if(this.searchValue.date){}else{this.searchValue.date=[]}
            this.api({//获取点位列表
                url: "/financial/storeList",
                method: "post",
                data: {
                    operatorId:row.operatorId,
                    startTime:this.searchValue.date[0],
                    endTime:this.searchValue.date[1]
                }
            }).then(data => {
                this.$set(row,'skuList',data)
            })
        },
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.table.toggleRowExpansion(row)
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



   