<style lang="scss" scoped>
#baristaOrder{
    font-size: 14px;
        background: #F2F4F8;
        border: 1px solid #E2E5EB;
        .content{
            min-height: 80vh;
            background: #fff;
            border: 1px solid #E2E5EB;
            padding: 20px;
            padding-top: 10px;
        }
    }
    .top{
        height: 185px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding: 20px;
        .select{margin: 0 20px;width: 120px;}
        .input{
            width: 240px;
            margin-bottom: 20px;
        }
    }
    .blue {
        color: #5A9DF8;
        cursor: pointer;
        padding: 10px 6px;
    }
    .pointer{cursor: pointer;}
    .btn{width:100px;height: 32px;line-height: 32px;color: #fff;background:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
    .btn1{width:100px;height: 32px;line-height: 32px;color:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #409EFF;margin-right:60px}
    .btn2,.btn2-no{width:120px;height: 32px;line-height: 32px;color:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #409EFF;padding: 0;}
    .btn2-no{border-color: #999;color:#999;cursor: no-drop;}
    .H-100{height: 100%}
    .img{width: 50px;height: 50px;border-radius: 50%}
    .backSelect{background: #4A90E2}
    .backNoSelect{background: #D8D8D8}
    .addBtn{padding: 1.25vh 1.3vh;font-size: 0.9375vw;position: absolute;right: 0;top: 0;background-color: #286EFF;width: 7vw;height: 4.63vh;}
    .W-30{width: 30%;}
    .smallMt{margin-top: 20px;}
    .right{right: 0}
    .text-right{text-align: right}
    .text-center{text-align: center}
    .bold{font-weight: bold} 
    .line-height-0{line-height: 0}
</style>
<style scoped>
    div >>> .el-timeline{padding-inline-start: 0;}
    div >>> .el-timeline-item__content{width: 250px;}
    .userdialogClass{padding: 30px 60px;}
    .userdialogClass .title{font-size: 18px;margin-bottom: 32px;line-height:1.5}
    div >>> .el-dialog__body{padding-top: 0;}
</style>
<style>
    .userTableStyle{color: #333}
    .userTableStyle th>.cell{font-weight: 400}
    .userTableStyle{color: #333;height: 75px;padding: 0!important}
    #baristaOrder .el-input.is-disabled .el-input__inner{color: #333}
    #baristaOrder .el-input__inner{height:32px;line-height: 32px;}
    #baristaOrder .el-input__suffix{line-height: 32px;cursor:pointer;right: 10px;padding-left: 10px;border-left: 1px solid #DCDFE6;}
    #baristaOrder .select .el-input__suffix,#baristaOrder .select .el-input__icon{border: 0;padding: 0;}
    #baristaOrder .el-input__icon{line-height:32px;border-left: 1px solid #C0C4CC;padding-left: 5px;}
    #baristaOrder .el-card__body{height: 100%;padding: 0}
    #baristaOrder .el-upload{width: 100%;height: 100%}
    #baristaOrder .el-checkbox__inner{border-radius: 50%}
    #baristaOrder .el-input__suffix,#baristaOrder .el-input__icon{line-height: 32px;}
    .operatorTableStyle{color: #333}
    .operatorTableStyle th>.cell{font-weight: 600}
    #baristaOrder .el-tabs{width: 212px;}
    .el-message-box__headerbtn{z-index: 10}
    #baristaOrder .el-tabs__item{
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        width: 105px;
        text-align: center;
    }
</style>
<template>
    <div class="app-container" id="baristaOrder">
        <div class="top">
            <div class="flex-center-Y justify-between" >
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                  <el-tab-pane label="会员列表" name="0"></el-tab-pane>
                  <el-tab-pane label="会员等级" name="1"></el-tab-pane>
              </el-tabs>
              <div class="topBox flex-center-Y" v-if="activeName=='1'">
                <div class="btn" @click="addConfig">添加配置</div>
              </div>
            </div>
            <div class="input">
                <el-input v-if="activeName=='0'" placeholder="请输入手机号" v-model="searchValue" @input="params.pageNum=1;getList()">
                    <i
                        class="el-icon-search"
                        slot="suffix"
                        @click="params.pageNum=1;getList()">
                    </i>
                </el-input>
            </div>
            <div class="flex-center-Y" v-if="activeName=='0'">
                <div>会员等级</div> 
                <div class="select">
                    <el-select v-model="params.deliveryStatus" placeholder="请选择">
                        <el-option
                        label="查看所有"
                        value="">
                        </el-option>
                        <el-option
                        label="待付款"
                        value="D">
                        </el-option>
                        <el-option
                        label="已完成"
                        value="Q">
                        </el-option>
                        <el-option
                        label="已取消"
                        value="S">
                        </el-option>
                    </el-select>
                </div>
                <div class="btn" @click="params.pageNum=1;getList()">搜索</div>
            </div>
            
        </div>
        <div class="content">
            <el-table
                    v-show="activeName=='0'"
                    ref="table"
                    header-row-class-name="userTableStyle" 
                    cell-class-name="userCellStyle"
                    :data="tableData"
                    style="width: 100%"
                    :loading='loading'>
                    <el-table-column
                        prop="acceptName"
                        label="昵称"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="acceptPhone"
                        label="手机号"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="manPhone"
                        label="商品名称"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="totalValue"
                        label="应付合计"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="payPrice"
                        label="实付款"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="deliveryStatus"
                        label="订单状态"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="gmtCreated"
                        label="下单时间"
                        align="center"
                        min-width="10%">
                    </el-table-column>
            </el-table>
            <el-table
                    v-show="activeName=='1'"
                    ref="tableB"
                    header-row-class-name="userTableStyle" 
                    cell-class-name="userCellStyle"
                    :data="tableDataB"
                    style="width: 100%"
                    :loading='loading'>
                    <el-table-column
                        prop="gradeName"
                        label="会员等级名称"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="cycleTerm"
                        label="年限（年）"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="amount"
                        label="价格"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column label="操作"
                                  width="150"
                                  align="center">
                      <template slot-scope="scope">
                          <span @click="deleteVip(scope.row)"
                                class="blue">
                              删除
                          </span>
                      </template>
                  </el-table-column>
            </el-table>
            <div class="pagination-line"
                v-show="activeName=='0'">
                <el-pagination background
                            @current-change="currentChange"
                            :current-page="params.pageNum"
                            :page-size="params.pageRow"
                            :total="totalCount"  
                            layout="prev,pager, next">
                </el-pagination>
            </div>
        </div>
        <el-dialog
            :visible.sync="indexVisible"
            :close-on-click-modal="false"
            :title="dialogTitle"
            custom-class="kupperDialog"
            width="32vw"
            >
            <div class="kupperDialog">
                <div class="flex-center-Y font-bold smallMt">
                    <div class="W-30">会员等级名称</div>
                    <div class="  flex-center-Y"><el-input v-model="form.gradeName" placeholder="请输入会员等级名称"></el-input></div>
                </div>
                <div class="flex-center-Y smallMt">
                    <div class="W-30 font-bold">期限</div>
                    <div class="  flex-center-Y"><el-input type="number" v-model="form.cycleTerm" placeholder="请输入期限"></el-input>&nbsp;年</div>
                </div>
                <div class="flex-center-Y smallMt">
                    <div class="W-30 font-bold">购买价格</div>
                    <div class="  flex-center-Y"><el-input type="number" v-model="form.amount" placeholder="请输入线上购买价格"></el-input>&nbsp;元</div>
                </div>
                <div class="flex-center-Y smallMt">
                    <div class="W-30 font-bold">权益描述</div>
                    <div class="  flex-center-Y"><el-input type="textarea" v-model="form.rightsInfo" placeholder="请输入权益描述"></el-input></div>
                </div>
                <div class="bottom flex-center-Y justify-center" style="margin-top:40px">
                    <div class="btn1" @click="backIndex">取消</div>
                    <div class="btn" @click="saveIndex">确定</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            activeName:"0",
            loading:false,
            tableData:[
            ],
            tableDataB:[
                
            ],
            searchValue:'',
            selectData:"",
            params:{
                pageNum:1,
                pageRow:10,
                deliveryStatus:"",
                appointmentStatus:""
            },
            totalCount:0,
            indexVisible:false,
            dialogTitle:"添加会员等级",
            form:{
                gradeName:"",
                cycleTerm:"",
                amount:"",
                rightsInfo:""
                }
        };
    },
    created() {
        document.getElementsByTagName("body")[0].style.minWidth="1100px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.getList()
    },

    methods: {
        addConfig(){//新建
            this.dialogTitle="添加会员等级"
            this.indexVisible=true
        },
        
        saveIndex(){
            if(!this.form.gradeName){
                this.$message.error('请输入会员名称~');
                return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.form.cycleTerm)){
                this.$message.error('年限只能填入数字哦~');
                return;
            }
            if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(this.form.amount)){
                this.$message.error('购买价格只能填入数字哦~');
                return;
            }
            var commitForm=JSON.parse(JSON.stringify(this.form))
            commitForm.amount=commitForm.amount*100
            if(this.dialogTitle=="添加配置"){
            this.api({
                    url: "/support/api/memberSet",
                    method: "post",
                    data:commitForm
                }).then(data => {
                    this.$message.success('添加成功!');
                    this.indexVisible=false
                    this.getList()
                    this.form.gradeName="",
                    this.form.cycleTerm="",
                    this.form.amount="",
                    this.form.rightsInfo=""
                });}else{
                    this.api({
                    url: "/support/api/memberSet",
                    method: "post",
                    data:commitForm
                }).then(data => {
                    this.$message.success('保存成功!');
                    this.indexVisible=false
                    this.getList()
                    this.form.gradeName="",
                    this.form.cycleTerm="",
                    this.form.amount="",
                    this.form.rightsInfo=""
                });
                }
        },
        backIndex(){
            this.indexVisible=false
            this.form.gradeName="",
            this.form.cycleTerm="",
            this.form.amount="",
            this.form.rightsInfo=""
            this.getList()
        },
        handleClick(){
            this.params.pageNum=1
            this.getList()
        },
        currentChange(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        prevClick(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        nextClick(index) {
            this.params.pageNum = index;
            this.getList(this.params);
        },
        getList() {
            // this.params.manageId = this.userId
            // this.params.username = this.userName
            this.loading=true
            if(this.activeName=='0'){
                this.params.acceptPhone=this.searchValue
                this.api({
                        url: "/shopping/order/show",
                        method: "post",
                        data: this.params
                    }).then(data => {
                        this.loading=false
                        this.tableData = data.shoppingOrderInfoList
                        this.totalCount=data.totalCount
                    }).catch(err=>{
                        this.loading=false
                    });
            }else{
                this.api({
                        url: "/support/api/memberList",
                        method: "post",
                        data: {}
                    }).then(data => {
                        this.loading=false
                        this.tableDataB = data
                    }).catch(err=>{
                        this.loading=false
                    });
            }
        },
        deleteVip(row){
            this.$confirm('是否删除该会员等级？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/support/api/memberDel",
                        method: "post",
                        data: {
                            memberGradeId:row.memberGradeId,
                        }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                        this.getList()
                    })
                }).catch(() => {

                })
        },
    },
    computed: {
        ...mapGetters(["userId",'userName'])
    }
};
</script>

