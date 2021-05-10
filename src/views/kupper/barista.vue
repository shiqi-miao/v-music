<style lang="scss" scoped>
#barista{
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
        height: 72px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding-left: 20px;
        .input{
            width: 240px;
            margin-left: 30px;
        }
    }
    .blue {
        color: #5A9DF8;
        cursor: pointer;
        padding: 10px 6px;
    }
    .btn{width:100px;height: 36px;line-height: 36px;color: #fff;background:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
    .btn1{width:100px;height: 36px;line-height: 36px;color:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #409EFF;margin-right:60px}
    .btn2,.btn2-no{width:120px;height: 32px;line-height: 32px;color:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #409EFF;padding: 0;}
    .btn2-no{border-color: #999;color:#999;cursor: no-drop;}
    .img{width: 50px;height: 50px;border-radius: 50%}
    .offMember .backSelect{background:#dc1818}
    .backSelect{background: #4A90E2}
    .backNoSelect{background: #D8D8D8}
    .addBtn{padding: 1.25vh 1.3vh;font-size: 0.9375vw;position: absolute;right: 0;top: 0;background-color: #286EFF;width: 7vw;height: 4.63vh;}
    .W-50{width: 50%}
    .right{right: 0}
    .text-right{text-align: right}
    .text-center{text-align: center}
    .bold{font-weight: bold} 
    .line-height-0{line-height: 0}
</style>
<style>
    .userdialogClass .el-dialog__header,.userdialogClass .el-dialog__body,.userdialogClass .el-dialog__footer{padding:0}
    .userdialogClass .el-dialog__headerbtn{display: none;}
    .userdialogClass{padding: 30px 60px;}
    .userdialogClass .title{font-size: 16px;text-align: center;margin-bottom: 32px;line-height:1.5}
    .userTableStyle{color: #333}
    .userTableStyle th>.cell{font-weight: 400}
    .userTableStyle{color: #333;height: 75px;padding: 0!important}
    #barista .el-input.is-disabled .el-input__inner{color: #333}
    #barista .el-input__inner{height:32px;line-height: 32px;}
    #barista .el-input__icon{line-height:32px;border-left: 1px solid #C0C4CC;padding-left: 5px;}
    #barista .el-card__body{height: 100%;padding: 0}
    #barista .el-upload{width: 100%;height: 100%}
    #barista .el-dialog__header,#barista .el-dialog__body,#barista .el-dialog__footer{padding:0}
    #barista .el-input__suffix{line-height: 32px;cursor:pointer;right: 10px;padding-left: 10px;border-left: 1px solid #DCDFE6;}
    .operatorTableStyle th>.cell{font-weight: 600}
    .el-message-box__headerbtn{z-index: 10}
    
</style>
<template>
    <div class="app-container" id="barista">
        <div class="top flex-center-Y">
            <div class="btn2" @click="$router.push({path:'createBarista'})"><i class="el-icon-plus"></i>&nbsp;新建咖啡师</div>
            <div class="input">
                <el-input placeholder="请输入咖啡师姓名" v-model="searchValue" @input="params.pageNum=1;getList()">
                     <i
                         class="el-icon-search"
                         slot="suffix"
                         @click="getList">
                     </i>
                </el-input>
            </div>
        </div>
        <div class="content">
            <!-- 列表式 -->
            <el-table
                    header-row-class-name="userTableStyle" 
                    cell-class-name="userCellStyle"
                    :data="memberList"
                    style="width: 100%"
                    :loading='loading'>
                    <el-table-column
                        prop="date"
                        label="头像"
                        min-width="10%"
                        align="center">
                        <template slot-scope="scope">
                            <div class="line-height-0">
                            <img class='img' v-if="scope.row.kUserPortrait" :src="scope.row.kUserPortrait" alt="">
                            <img class='img' v-else src="../../assets/super/logo3.png" alt="">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="kUserName"
                        label="昵称"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="kUserSex"
                        label="性别"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <span v-if="scope.row.kUserSex=='0'">女</span>
                            <span v-else>男</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="kUserScore"
                        label="星等"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="kUserProfess"
                        label="简介"
                        align="center"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="manPhone"
                        label="服务内容"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <span v-if="scope.row.serviceOne">{{scope.row.serviceOne}}</span>
                            <span v-if="scope.row.serviceTwo">{{scope.row.serviceTwo}}</span>
                            <span v-if="scope.row.serviceThree">{{scope.row.serviceThree}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="manPhone"
                        label="所在地区"
                        align="center"
                        min-width="10%">
                        <template slot-scope="scope">
                            <span>{{scope.row.shengName}}</span>
                            <span>{{scope.row.shiName}}</span>
                            <span>{{scope.row.quName}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="活动照片"
                        min-width="10%"
                        align="center">
                        <template slot-scope="scope">
                            <div class="line-height-0">
                            <img class='img' :src="scope.row.kPicture" alt="">
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="appPicture"
                             label="是否上架"
                             align="center"
                             min-width="10%">
                        <template slot-scope="scope">
                            <el-switch
                                v-model="scope.row.isOnline"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-value="Y"
                                inactive-value="N"
                                @change="changePut(scope.row)"
                                >
                            </el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" min-width="10%">
                        <template slot-scope="scope">
                                <span
                                    class="blue"
                                    @click="$router.push({path:'/kupper/editBarista/'+scope.row.sn})">   
                                    编辑
                                </span>
                                <span
                                    class="blue"
                                    @click="delVisible=true;selectData=scope.row">
                                    删除
                                </span>
                        </template>
                    </el-table-column>
            </el-table>
            <div class="pagination-line">
                <el-pagination background
                            @current-change="currentChange"
                            :current-page="params.pageNum"
                            :page-size="params.pageRow"
                            :total="totalCount"  
                            layout="prev,pager, next">
                </el-pagination>
            </div>
        </div>
        <el-dialog :visible.sync="delVisible" width="400px" center custom-class='userdialogClass'>
            <div class="title">是否确认删除该咖啡师?</div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="delVisible = false">取消</div>
                <div class="btn" @click="deleteMember">确认</div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            loading:false,
            memberList:[
                
            ],
            searchValue:'',
            selectData:"",
            params:{
                pageNum:1,
                pageRow:10,
            },
            totalCount:0,
            delVisible:false
        };
    },
    created() {
        document.getElementsByTagName("body")[0].style.minWidth="1100px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
        this.getList()
    },

    methods: {
        changePut(row){//上架
            this.api({
                    url: "/shopping/isOnlineBarista",
                    method: "post",
                    data: {
                        sn:row.sn,
                        isOnline:row.isOnline
                    }
                })
                    .then(data => {
                        this.getList()
                    })
                    .catch(e => {});
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
        getList() {
            // this.params.manageId = this.userId
            // this.params.username = this.userName
            this.params.kUserName=this.searchValue
            this.loading=true
                this.api({
                        url: "/shopping/findBarista",
                        method: "post",
                        data: this.params
                    }).then(data => {
                        this.loading=false
                        this.memberList = data.list;
                        for(let i in this.memberList){
                            if(this.memberList[i].kPictureIdList){
                            this.memberList[i].kPicture=this.memberList[i].kPictureIdList[0]
                            }
                        }
                        this.totalCount=data.totalCount
                    }).catch(err=>{
                        this.loading=false
                    });
            
        },
        selectAvator(item){
            this.selectData=item
        },
        deleteMember(){
            this.api({
                    url: "/shopping/deleteBarista",
                    method: "post",
                    data: this.selectData
                })
                    .then(data => {
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                        this.delVisible=false
                        this.getList()
                })
        },
    },
    computed: {
        ...mapGetters(["userId",'userName'])
    }
};
</script>

