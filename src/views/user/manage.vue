<style lang="scss" scoped>
#baristaOrder{
    font-size: 14px;
        background: #F2F4F8;
        border: 1px solid #E2E5EB;
        height: 100%;
        .content{
            min-height: calc(100% - 135px);
            background: #fff;
            border: 1px solid #E2E5EB;
            padding: 20px;
            padding-top: 10px;
        }
    }
    .top{
        height: 135px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding: 20px;
        .select{margin: 0 20px;width: 120px;}
        .input{
            width: 800px;
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
    .userdialogClass{padding: 30px 60px;}
    .userdialogClass .title{font-size: 18px;margin-bottom: 32px;line-height:1.5}
    div >>> .el-dialog__body{padding-top: 0;}
    .userTableStyle{color: #333}
    .userTableStyle th>.cell{font-weight: 400}
    .userTableStyle{color: #333;height: 75px;padding: 0!important}
    #baristaOrder >>> .el-input.is-disabled .el-input__inner{color: #333}
    #baristaOrder >>> .el-input{width: 190px;}
    #baristaOrder >>> .el-input__inner{height:32px;line-height: 32px;}
    #baristaOrder >>> .el-input__prefix{line-height: 32px;cursor:pointer;padding-left: 5px;}
    #baristaOrder >>> .select .el-input__prefix,#baristaOrder .select .el-input__icon{border: 0;padding: 0;}
    #baristaOrder >>> .el-input__icon{line-height:32px;}
    #baristaOrder >>> .el-card__body{height: 100%;padding: 0}
    #baristaOrder >>> .el-upload{width: 100%;height: 100%}
    #baristaOrder >>> .el-checkbox__inner{border-radius: 50%}
    #baristaOrder >>> .el-input__prefix,#baristaOrder .el-input__icon{line-height: 32px;}
    .operatorTableStyle{color: #333}
    .operatorTableStyle th>.cell{font-weight: 600}
    #baristaOrder >>> .el-tabs{width: 212px;}
    #baristaOrder >>> .el-message-box__headerbtn{z-index: 10}
    #baristaOrder >>> .el-tabs__item{
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
            <div class="input flex-center-Y">
                <el-input v-if="activeName=='0'" placeholder="请输入手机号" v-model="searchValue" style="margin-right:20px" @input="params.pageNum=1;getList()" clearable>
                    <i
                        class="el-icon-search"
                        slot="prefix"
                        @click="params.pageNum=1;getList()">
                    </i>
                </el-input>
                <div class="flex-center-Y" v-if="activeName=='0'">
                    <div>会员等级</div> 
                    <div class="select">
                        <el-select v-model="params.memberGradeId" placeholder="请选择" @change="params.pageNum=1;getList()" clearable>
                            <el-option
                            v-for="(item,i) in gradeList"
                            :key="i"
                            :label="item.gradeName"
                            :value="item.memberGradeId">
                            </el-option>
                        </el-select>
                    </div>
                    <!-- <div class="btn" @click="params.pageNum=1;getList()" style="margin-left:80px">搜索</div> -->
                </div>
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
                        prop="date"
                        label="头像"
                        min-width="10%"
                        align="center">
                        <template slot-scope="scope">
                            <div class="line-height-0">
                            <img class='img' v-if="scope.row.portrait" :src="scope.row.portrait" alt="">
                            <img class='img' v-else src="../../assets/super/logo3.png" alt="">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="nickName"
                        label="昵称"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="userPhone"
                        label="手机号"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="userSex"
                        label="性别"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <span>{{scope.row.userSex=='2'?'女':'男'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="gradeName"
                        label="会员等级名称"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="limitTime"
                        label="会员有效期截止时间"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="gmtCreated"
                        label="注册时间"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <!-- <el-table-column
                        prop="endLoginTime"
                        label="最后登录时间"
                        align="center"
                        min-width="10%">
                    </el-table-column> -->
                    <el-table-column
                        prop=""
                        label="操作"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <span class="blue" @click="showEdit(scope.row)">编辑</span>
                        </template>
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
                    <div class="  flex-center-Y"><el-input type="number" v-model="form.cycleTerm" placeholder="请输入期限"></el-input>&nbsp;年&nbsp;(0为永久)</div>
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
        <el-dialog
            :visible.sync="editVisible"
            :close-on-click-modal="false"
            :title="dialogTitle"
            custom-class="kupperDialog"
            width="32vw"
            >
            <div class="kupperDialog">
                <div class="flex-center-Y font-bold smallMt">
                    <div class="W-30">会员昵称</div>
                    <div class=" flex-center-Y">
                        {{selectUser.nickName}}
                    </div>
                </div>
                <div class="flex-center-Y font-bold smallMt">
                    <div class="W-30">手机号</div>
                    <div class=" flex-center-Y">
                        {{selectUser.userPhone}}
                    </div>
                </div>
                <div class="flex-center-Y font-bold smallMt">
                    <div class="W-30">会员等级</div>
                    <div class=" flex-center-Y">
                        <el-select v-model="editForm.memberGradeId" placeholder="请选择">
                            <el-option
                            v-for="(item,i) in gradeList"
                            :key="i"
                            :label="item.gradeName"
                            :value="item.memberGradeId">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex-center-Y font-bold smallMt">
                    <div class="W-30">会员有效期截止时间</div>
                    <div class="flex-center-Y">
                        <el-date-picker
                        v-model="editForm.limitTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择截止日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="bottom flex-center-Y justify-center" style="margin-top:40px">
                    <div class="btn1" @click="editVisible=false;">取消</div>
                    <div class="btn" @click="saveEdit">确定</div>
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
                pageRow:10
            },
            totalCount:0,
            indexVisible:false,
            dialogTitle:"添加会员等级",
            form:{
                gradeName:"",
                cycleTerm:"",
                amount:"",
                rightsInfo:""
                },
            gradeList:[],
            editVisible:false,
            editForm:{},
            selectUser:""
        };
    },
    created() {
        document.getElementsByTagName("body")[0].style.minWidth="1000px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.api({
                url: "/support/api/memberGradeList",
                method: "post",
                data: {}
            }).then(data => {
                this.gradeList = data
            }).catch(err=>{
            });
        this.getList()
    },

    methods: {
        showEdit(row){
            this.editVisible=true
            this.selectUser=row
        },
        addConfig(){//新建
            this.dialogTitle="添加会员等级"
            this.indexVisible=true
        },
        saveEdit(){
            if(!this.editForm.memberGradeId){
                this.$message.warning('请选择会员等级~');
                return;
            }
            if(!this.editForm.limitTime){
                this.$message.warning('请选择会员有效期截止时间~');
                return;
            }
            this.api({
                url: "/support/api/memberUpdate",
                method: "post",
                data: {
                    userId:this.selectUser.userId,
                    memberGrade:this.editForm.memberGradeId,
                    limitTime:this.editForm.limitTime+" 23:59:59"
                }
            }).then(data => {
                this.editVisible=false
                this.$message.success('修改成功!');
                this.getList()
            }).catch(err=>{
            });

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
            this.loading=true
            if(this.activeName=='0'){
                this.params.userPhone=this.searchValue
                this.api({
                        url: "/support/api/memberList",
                        method: "post",
                        data: this.params
                    }).then(data => {
                        this.loading=false
                        this.tableData = data.list
                        this.totalCount=data.totalCount
                    }).catch(err=>{
                        this.loading=false
                    });
            }else{
                this.api({
                        url: "/support/api/memberGradeList",
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

