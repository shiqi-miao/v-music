<style lang="scss" scoped>
    .title{font-size: 20px;margin-bottom: 30px}
    .top,.bottom{padding: 30px 70px}
    .bottom{border-top: 1px solid #e6e6e6}
    .top div{margin-top: 20px;width: 30%}
    .edit{color: #409EFF;cursor: pointer;margin-left: 10px;float: right}
    .center{text-align: center}
    .el-form-item{width:50%;margin: 0 auto}
    .memberbox{border:1px solid #97A8BE;width: 100%;min-height: 400px;padding: 3%}
    .member-right{width: 100%;min-height: 400px;padding: 3%;position: relative}
    .right-bottom{position: absolute;bottom: 0;width: 100%}
    .right-bottom .el-button{margin-top: 5px}
    .el-tag{margin:2% 3%}
</style>

<template>
    <div>
        <div class="top">
            <p class="title">企业信息</p>
            <div>
            <span>企业名称: &nbsp;</span>
            <span>{{data.groupName}}</span>
            </div>
            <div>
                <span>联系电话: &nbsp;&nbsp;</span>
                <span>{{data.groupPhone}}<span class="edit" @click="editPhone()">编辑</span></span>
            </div>
            <div>
            <span>预存金金额: &nbsp;</span>
            <span>¥ {{data.rechargeMoney || 0}}<span class="edit" @click="showMoneyDetail()">查询明细</span><span class="edit" @click="editMoney()">预存</span></span>
            </div>
            <div>
            <span>消费金额: &nbsp;</span>
            <span>¥ {{data.noUsedMoney || 0}}</span>
            </div>
            <div>
            <span>企业人数: &nbsp;</span>
            <span>{{data.groupUserNum || 0}}<span class="edit" @click="editMember()">维护员工</span></span>
            </div>
        </div>
        <!-- <div class="bottom">
            <p class="title">用券明细</p>
            <el-table
                style="width: 100%">
                <el-table-column
                    prop=""
                    label="创建时间">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="订单号">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="手机号">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="消费门店">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="购买SKU">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="应付款">
                </el-table-column>  
                <el-table-column
                    prop=""
                    label="企业券名称">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="实付金额">
                </el-table-column>
                <el-table-column
                    prop=""
                    label="实付状态">
                </el-table-column>
            </el-table>
        </div> -->
        <el-dialog :visible.sync="editPhoneVisible" center>
            <el-form :model="form" class="center">
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editPhoneVisible = false" round>取 消</el-button>
                <el-button type="primary" @click="commitPhone()" round>确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="editMoneyVisible" center>
            <el-form :model="form" class="center">
                <el-form-item label="充值预存金金额" :label-width="formLabelWidth">
                <el-input v-model="form.money" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editMoneyVisible = false" round>取 消</el-button>
                <el-button type="primary" @click="commitMoney()" round>确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="MoneyDetailVisible" center title="预存金明细">
            <el-table
                :data="MoneyDetail"
                style="width: 100%">
                <el-table-column
                    prop="gmtCreated"
                    label="时间">
                </el-table-column>
                <el-table-column
                    prop="moneyName"
                    label="名称">
                </el-table-column>
                <el-table-column
                    label="金额">
                    <template slot-scope="scope">
                        <span>￥{{ scope.row.moneyDetails}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="余额">
                    <template slot-scope="scope">
                        <span>￥{{ scope.row.rechargeMoney }}</span>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination background
                           @size-change="handleSizeChange"
                           @current-change="currentChange"
                           :current-page="params.pageNum"
                           :page-size="params.pageRow"
                           :total="totalCount"
                           :page-sizes="[10, 20, 50, 100]"
                           layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </el-dialog>
        <el-dialog :visible.sync="memberVisible" center title="维护员工">
            <el-row>
                <el-col :span="12">
                    <div class="memberbox">
                        <el-row>
                            <el-tag
                                v-for="(tag,index) in member"
                                :key="index"
                                closable
                                type="info"
                                @close="deleteUser(tag)">
                                {{tag}}
                            </el-tag>
                            <!-- <el-col :span="8" v-for="(item,key) in member" :key="key">
                                <span>{{item}}<i class="el-icon-close" @click="deleteUser(item)"></i></span>
                            </el-col> -->
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="member-right">
                        <div>共<span>{{usernum || 0}}</span>名用户</div>
                        <div class="right-bottom">
                            <!-- <el-row>
                                <el-col :span="15"> -->
                                    <el-upload
                                        class="upload-demo"
                                        action=""
                                        :http-request="upload"
                                        multiple
                                        :limit="1"
                                        :before-upload="beforeUpload"
                                        :on-preview="handlePreview"
                                        :on-exceed="exceed"
                                        >
                                        <el-button size="mini" style="margin:0" type="success">点击上传</el-button>
                                        <div slot="tip" class="el-upload__tip">需导入.xls文件</div>
                                    </el-upload>
                                    <el-row style="margin:5%">或</el-row>
                                    <el-row>
                                        <el-col :span="12">
                                            <el-input v-model="adduser" size="mini" placeholder="请输入联系方式"></el-input>
                                        </el-col>
                                        <el-col :span="12" style="padding-left:2%">
                                            <el-button style="margin:0" size="mini" @click="addUser()" type="success">添加</el-button>
                                        </el-col>
                                    </el-row>
                                <!-- </el-col>
                                <el-col :span="9"> -->
                                    
                                <!-- </el-col>
                            </el-row> -->
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button @click="memberVisible = false" round>取 消</el-button>
                <el-button type="primary" @click="memberVisible = false" round>确 定</el-button>
            </div>
        </el-dialog>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            data:"",
            formLabelWidth:'120px',
            editPhoneVisible:false,
            editMoneyVisible:false,
            form:{phone:"",money:""},
            MoneyDetailVisible:false,
            MoneyDetail:[],
            memberVisible:false,
            params: {
                pageRow: 10,
                pageNum: 1
            },
            totalCount: 0,
            adduser:"",//添加的员工的手机号
            member:[],//员工列表
            usernum:"",//员工人数
        };
    },
    filters:{
        abs (value){
            return Math.abs(value)
        },
        },
    created() {
        this.getLists()
    },
    methods: {
        //导入excel文件
        beforeUpload(file){
            //上传前配置
            let excelfileExtend = ".xls"//设置文件格式
            let fileExtend = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
            if (excelfileExtend.indexOf(fileExtend) <= -1) {
            this.$message.error('文件格式错误')
            return false
            }
        },
        handlePreview(file) {
            //可以通过 file.response 拿到服务端返回数据
            },
         upload(content){
            var formData = new FormData();
            formData.append("file", content.file);
            formData.append("groupId", this.$route.params.groupId);
            // formData.file=content.file
            this.api({
                url: "/coupon/exportUserInfo",
                method: "post", 
                data:formData
            }).then(data => {
                console.log(data)
                this.getMemberList()
                // let name = content.data.type
                // let namePath = name+'Path'
                // this.$set(this.info,namePath,data.filePath)
                // this.info[name] = data.tempPath
            }).catch((e)=>{
                console.log(e)
            })
        }, 
        exceed(){
             this.$message({
                        type: "warning",
                        message:"请先删除上一个表格"
                    });
        },   
        //导入excel文件
        getMoneyList(params){
            var data = {
                    groupId:this.$route.params.groupId,
                    pageRow: 10,
                    pageNum: 1,
                };
            this.params.groupId=this.$route.params.groupId
            this.api({//预存金明细
                    url: "/coupon/showAllDetails",
                    method: "post",
                    data:params || data
                    }).then(data => {
                        console.log(data)
                        this.MoneyDetail=data.list
                        this.totalCount=data.totalCount
                    })
        },
         handleSizeChange(val) {
            this.params.pageRow = val;
            this.getMoneyList(this.params);
        },
        currentChange(index) {
            this.params.pageNum = index;
            this.getMoneyList(this.params);
        },
        getLists(){
            this.api({
                    url: "/coupon/showOneGroup",
                    method: "post",
                    data: {//json格式传
                        groupId:this.$route.params.groupId,
                    }
                    // params: {不要用这个
                    //     sendId:this.$route.params.sendId,
                    // }
                    }).then(data => {
                        this.data=data
                        // console.log(this.data)
                    })
        },
        editPhone(){
            this.editPhoneVisible=true
        },
        editMoney(){
            this.editMoneyVisible=true
        },
        showMoneyDetail(){//查询明细
            this.getMoneyList()
            this.MoneyDetailVisible=true
        },
        getMemberList(){//获取员工信息
            this.api({
                    url: "/coupon/findUserForGroup",
                    method: "post",
                    data: {//json格式传
                        groupId:this.$route.params.groupId,
                    }
                    }).then(data => {
                        console.log(data)
                        this.member=data
                        this.usernum=data.length
                    })
        },
        editMember(){
            this.memberVisible=true
            this.getMemberList()
            
        },
        addUser(){//添加一条员工
            console.log(this.adduser)
            if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.adduser))){
                 this.$message({
                        type: "warning",
                        message:"请填写有效的号码"
                    });
                    return;
            }
            this.api({
                    url: "/coupon/addUserForGroup",
                    method: "post",
                    data: {//json格式传
                        phone:this.adduser,
                        groupId:this.$route.params.groupId
                    }
                    }).then(data => {
                        if(data.returnCode==10090){
                            this.$message({
                            type: "warning",
                            message:data.returnMsg})
                            return;
                        }
                        this.$message({
                        type: "success",
                        message:"添加成功"
                    });
                    this.adduser=""
                    this.getMemberList()
                        
                    })
        },
        deleteUser(tag){//删除一条员工
            console.log(tag)
            this.api({
                    url: "/coupon/deleteUserForGroup",
                    method: "post",
                    data: {//json格式传
                        phone:tag,
                        groupId:this.$route.params.groupId
                    }
                    }).then(data => {
                        this.$message({
                        type: "success",
                        message:"删除成功"
                    });
                    this.getMemberList()
                    // this.member.splice(this.member.indexOf(tag), 1);
                    })
            
        },
        commitPhone(){
            if(!(/^((0\d{2,3}-\d{7,8})|(1[3758469]\d{9}))$/.test(this.form.phone))){ 
                 this.$message({
                        type: "warning",
                        message:"请填写有效的手机号码"
                    });
                    return; 
                } 
            this.api({
                    url: "/coupon/updateGroupPhone",
                    method: "post",
                    data: {//json格式传
                        groupId:this.$route.params.groupId,
                        groupPhone:this.form.phone
                    }
                    }).then(data => {
                        console.log(this.data)
                        // if(data.returnCode=="100"){
                        this.form.phone=""
                        this.editPhoneVisible=false
                        this.getLists()
                        // }
                    })
            
        },
        commitMoney(){
            if(!(/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(this.form.money))){
                this.$message({
                        type: "warning",
                        message:"请输入金额 (精确到分)"
                    });
                    return; 
            }
            this.api({
                    url: "/coupon/rechargeMoneyToGroup",
                    method: "post", 
                    data: {//json格式传
                        groupId:this.$route.params.groupId,
                        rechargeMoney:this.form.money
                    }
                    }).then(data => {
                        console.log(this.data)
                        // if(data.returnCode=="100"){
                        this.form.money=""
                        this.editMoneyVisible=false
                        this.getLists()
                        // }
                    })
            
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>