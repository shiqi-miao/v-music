<style scoped>

.input-with-select {
    width: 50%;
}
.dialog-form-item .el-input__inner {
    width: 160px;
}
.modal-title {
    font-weight: 600;
    font-size: 15px;
    padding-bottom: 16px;
}
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex-center-Y {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}
.jt-box {
    max-height: 40vh;
    overflow-y: scroll;
}
.jt {
    width: 100%;
    text-align: center;
}
.jt > div {
    padding: 6px 10px;
}
.jt-index {
    width: 100px;
}
.jt-time {
    flex: 1;
}
.jt-rate {
    flex: 1;
}
.m-r {
    margin-right: 20px;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.right {
    text-align: right;
    padding: 20px 4vw;
}
.danger {
    cursor: pointer;
}
.el-input {
    width: 130px;
}
.el-icon-edit {
    cursor: pointer;
}
.icon {
    width: 24px;
    height: 24px;
}
.title{font-size: 20px;margin-bottom: 30px}
    .top,.bottom{padding: 30px 0}
    .top>p>span{font-size: 15px}
    .top .type{width:90%;height:200px;border: 1px solid #C8CBCF;border-radius: 5px;padding: 5%;margin-bottom: 10px}
    .bottom{border-top: 1px solid #e6e6e6}
    .edit{color: #409EFF;cursor: pointer;margin-left: 10px;float: right}
    .center{text-align: center}
    .el-form-item{width:100%;margin: 5px auto}
    .memberbox{border:1px solid #97A8BE;width: 100%;min-height: 400px;padding: 3%;}
    .member-right{width: 100%;min-height: 400px;padding: 3%;position: relative}
    .right-bottom{position: absolute;bottom: 0;width: 100%}
    .right-bottom .el-button{margin-top: 5px}
    .el-tag{margin:2% 3%}
    .fr{float: right}
    .center{text-align: center;}
</style>
<style>
.jt-rate .el-input {
    width: 120px;
}
/* .el-select .el-input {
    width: 130px;
} */
</style>

<template>
    <div class="app-container">
        <el-button type="primary"
                   @click="toCreate">创建分润方
        </el-button>
        <br><br>
        <el-tabs v-model="activeTab"
                 type="card"
                 @tab-click="handleClick">
            <el-tab-pane label="分润列表"
                         name="lists"></el-tab-pane>
            <el-tab-pane label="分润方管理"
                         name="manage"></el-tab-pane>
        </el-tabs>
        <el-table :data="tableData"
                  v-if="activeTab == 'lists'"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column
                    prop="storeName"
                    label="门店名称"
                    align="center"
                    :key="Math.random()"
                    >
            </el-table-column>
            <el-table-column 
                    prop="opRate"
                    label="运营商占比"
                    align="center"
                    :key="Math.random()"
                    >
            </el-table-column>
            <el-table-column 
                    prop="disRate"
                    label="分润方总占比"
                    align="center"
                    :key="Math.random()">    
            </el-table-column>
            <el-table-column 
                    label="分润方数量"
                    align="center"
                    :key="Math.random()">
                <template slot-scope="scope">
                    <el-popover placement="top-start"
                                width="120"
                                trigger="hover">
                        <div v-for="(item,i) in scope.row.disInfo"
                                :key="i">
                            {{item.distributeName}}({{item.merchantRate}})
                        </div>
                        <span slot="reference">{{scope.row.disCount}} 家</span>
                    </el-popover>
                </template>
                    <!-- <template slot-scope="scope">
                        <span>{{scope.row.storeNum}}</span>家
                    </template> -->
            </el-table-column>
            <el-table-column 
                    label="操作"
                    width="150"
                    align="center"
                    :key="Math.random()">
                <template slot-scope="scope">
                    <span @click="toSet(scope.row)"
                          class="blue">
                        管理
                    </span>
                </template>
            </el-table-column>

        </el-table>
        <el-table :data="tableData"
                  v-if="activeTab == 'manage'"
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中">
            <el-table-column
                    prop="authType"
                    label="主体类型"
                    align="center"
                    :key="Math.random()"
                    >
            </el-table-column>
            <el-table-column 
                    prop="distributName"
                    label="分润方主体名称"
                    align="center"
                    :key="Math.random()">
            </el-table-column>
            <el-table-column 
                    label="收款方式"
                    align="center"
                    :key="Math.random()">
                    <template slot-scope="scope">
                    <span>{{scope.row.settleTypeName}}</span>  
                    </template>  
            </el-table-column>
            <el-table-column 
                    label="收款账号"
                    align="center"
                    :key="Math.random()">
                    <template slot-scope="scope">
                    <span>{{scope.row.alipayLoginid.substr(0,3)}}****{{scope.row.alipayLoginid.substr(scope.row.alipayLoginid.length - 3)}}</span>  
                    </template>  
            </el-table-column>
            <el-table-column 
                    prop="eStatus"
                    label="审核状态"
                    align="center"
                    :key="Math.random()">
            </el-table-column>
            <!-- <el-table-column 
                    label="关联门店"
                    align="center">
                <template slot-scope="scope">
                    <el-popover placement="top-start"
                                width="120"
                                trigger="hover">
                        <div v-for="(item,i) in scope.row.storeName"
                                :key="i">
                            {{item}}
                        </div>
                        <span slot="reference">{{scope.row.storeNum}} 家</span>
                    </el-popover>
                </template>
            </el-table-column> -->
            <!-- <el-table-column 
                    prop="money"
                    label="累计分润金额"
                    align="center">
                    <template slot-scope="scope">
                        <span>￥{{scope.row.money || 0}}</span>
                    </template>
            </el-table-column> -->
            <el-table-column 
                    label="操作"
                    width="150"
                    align="center"
                    :key="Math.random()">
                <template slot-scope="scope">
                    <!-- <span @click="toSet(scope.row)"
                          class="blue"
                          v-if="scope.row.exampleStatus=='1'">
                        配置
                    </span> -->
                    <span @click="toDetail(scope.row)"
                          class="blue"
                          v-if="scope.row.exampleStatus=='1'">
                        查看
                    </span>
                    <span @click="toEdit(scope.row)"
                          class="blue"
                          v-if="scope.row.exampleStatus!=='1'">
                        编辑
                    </span>
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
                           :page-sizes="[10, 20, 50, 100]"
                           layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <el-dialog title="分润配置管理" :visible.sync="dialogFormVisible" :close-on-click-modal="false" center width="60%">
            <div class="top">
                <el-row>
                    <el-col :span="6">
                        门店名称 : {{storeName}}
                    </el-col>
                    <el-col :span="6">
                        运营商占比 : {{opRate}}
                    </el-col>
                    <el-col :span="6">
                        分润方数量 : {{disCount}}家
                    </el-col>
                </el-row>
            </div>
            <div class="top">
                <el-row>
                    <el-col :span="12" v-for="(item,key) in form" :key="key">
                        <div class="type">
                            <i class="el-icon-remove fr" style="color:red;font-size:20px;cursor:pointer" @click="del(item,key)"></i>
                            <el-form label-position="left" label-width="40%" :inline="true">
                                <el-form-item label="分润方:" required class="create">
                                    <el-select  v-if="item.isAdd" v-model="item.distributeId" placeholder="请选择" @change="storechange">
                                        <el-option v-for="item in stores" :key="item.distributeId" :label="item.distributeName" :value="item.distributeId">
                                        </el-option>
                                    </el-select>
                                    <span v-if="!item.isAdd">{{item.distributeName}}</span>
                                    <!-- <el-select  v-if="!item.isAdd" disabled v-model="item.storeCodes" placeholder="请选择" multiple @change="storechange">
                                        <el-option v-for="item in stores" :key="item.distributeId" :label="item.distributeName" :value="item.distributeId">
                                        </el-option>
                                    </el-select> -->
                                </el-form-item>
                                <el-form-item label="分润比率: " required>
                                    <span class="flex-center-Y" v-if="item.isAdd">
                                        <el-input type="text" v-model="item.merchantRate" :placeholder="maxnum"  @focus="max" @blur="saveAdd(item)"></el-input><span>&nbsp;&nbsp;&nbsp;&nbsp;%</span>
                                    </span>
                                    <span v-if="!item.isAdd">{{item.merchantRate}}&nbsp;&nbsp;</span>
                                </el-form-item>
                                <!-- <el-form-item label="*最多可分润: " v-if="showMax">
                                    <span>99%</span>
                                </el-form-item> -->
                            </el-form>
                        </div>
                    </el-col>
                    <el-col :span="12" v-if="form.length<5">
                        <div class="type center">
                            <span class="el-icon-circle-plus" style="font-size:30px;line-height:150px;cursor: pointer;" @click="add()"></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false" round>返 回</el-button>
                <!-- <el-button type="primary" @click="save" round>确定</el-button> -->
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            activeTab: "lists",
            dialogFormVisible:false,
            formLabelWidth:'120px',
            form:[],//当前门店分润方全部数据,点增加或删除,在前端改变form的值
            opRate:"",
            originRate:"",
            showMax:false,
            maxnum:"请输入",
            stores:[],//可选分润放列表
            storeName:"",
            storeCode:"",//门店id
            disCount:0,//分润方数量
            showSave:false,
            listLoading: false,
            tableData: [],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            totalCount: 0,
        };
    },
    created() {
        this.getList(); //获取表格数据
    },
    methods: {
        handleClick(tab, event) {
            this.getList();
        },
        handleSizeChange(val) {
            this.params.pageRow = val;
            this.getList(this.params);
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
        getList(params) {
            this.listLoading = true;
            this.$set(this, "tableData", []);
            if (params) {
                params["username"] = this.userName;
            } else {
                var data = {
                    pageRow: 10,
                    pageNum: 1,
                    username: this.userName
                };
            }
            var activeTab = this.activeTab;
            if(activeTab == "lists"){
                this.api({
                    url: "/cooperation/showAllDistributeList",
                    method: "post",
                    data: params || data
                }).then(data => {
                    console.log(data)
                    this.listLoading = false;
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            }else if(activeTab == "manage"){
                this.api({
                    url: "/cooperation/cooperationList",
                    method: "post",
                    data: params || data
                }).then(data => {
                    console.log(data)
                    this.listLoading = false;
                    this.$set(this, "tableData", data.list);
                    this.totalCount = data.totalCount;
                });
            }
                
        },
        getLists(storeCode){
            this.api({
                url: "/cooperation/showAllUsedDis",
                method: "post",
                data: {
                    username:this.userName,
                    storeCode:storeCode,
                }
            }).then(data => {
                this.stores = data
                // console.log(data)
            });
            this.api({
                    url: "/cooperation/showAllDistributeDetails",
                    method: "post",
                    data: {
                        storeCode:storeCode,
                    }
                    }).then(data => {
                        this.form=data.disInfo
                        this.opRate=data.opRate
                        this.originRate=data.opRate
                        // console.log(this.form)
                    })

        },
        storechange(){
            // console.log(this.form)
        },
        add(){
            this.showSave=true
            var type={merchantRate:"",isAdd:1}
            this.form.push(type)
        },
        saveAdd(item){//失去焦点提交新增
            item.storeCode=this.storeCode
            this.api({
                    url: "/cooperation/addDistributeRate",
                    method: "post",
                    data: {
                        distributeId:item.distributeId,
                        storeCode:item.storeCode,
                        merchantRate:item.merchantRate
                    }
                    }).then(data => {
                        this.getLists(this.storeCode)
                        this.getList();
                        this.disCount=this.form.length
                    })

        },
        changeRate(item){//输入分润率变化运营商比例(当前情况用不到)
            this.maxnum="请输入"
            var total=0
            console.log(this.form)
            for(var i in this.form){
                if(this.form[i].isAdd){
                    total+=Number(this.form[i].merchantRate)
                }
            }
            this.opRate=String(Number(this.originRate.substr(0,this.opRate.length-1))-total)+"%"
            console.log(this.opRate)
        },
        max(){//动态显示最多可分润多少
            var total=0
            for(var i in this.form){
                if(this.form[i].isAdd){
                    total+=Number(this.form[i].merchantRate)
                }else{
                    total+=Number(this.form[i].merchantRate.substr(0,this.form[i].merchantRate.length-1))
                }
            }
            var sub=99-total
            this.maxnum="最多可分润"+sub+"%"
        },
        // save(){
        //     this.$confirm('保存后不可修改, 是否继续?', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        //         }).then(() => {
        //             var form=[]
        //             for(var i in this.form){//只提交新添加的
        //                 if(this.form[i].isAdd){
        //                     form.push(this.form[i])
        //                 }
        //             }
        //             let array = "";
        //             // console.log(form)
        //             for (let i in form) {
        //                 var storeCodes=""
        //                 for(var key in form[i].storeCodes){
        //                     if(key>=form[i].storeCodes.length-1){
        //                         storeCodes+=form[i].storeCodes[key]
        //                     }else{
        //                         storeCodes+=form[i].storeCodes[key]+","
        //                     }
                            
        //                 }
        //                 if (form[i].storeCodes=="") {
        //                     this.$message({
        //                         type: "warning",
        //                         message: "您有未填写的门店"
        //                     });
        //                     return;
        //                 }
        //                 if (!form[i].merchantRate) {
        //                     this.$message({
        //                         type: "warning",
        //                         message: "您有未填写分润比率"
        //                     });
        //                     return;
        //                 }
        //                 let item = {
        //                     merchantRate:form[i].merchantRate,
        //                     storeCodes: storeCodes,
        //                     distributeId:this.$route.params.dmId
        //                 };
        //                 array += JSON.stringify(item);
        //             }
        //             // console.log(array)
        //             if(array==""){//有修改才提交
        //             }else{
        //                 this.api({
        //                     url: "/cooperation/addDistributeRate",
        //                     method: "get",
        //                     params: {
        //                         lists:array
        //                     }
        //                     }).then(data => {
        //                         this.$router.push({
        //                             path:"/system/distribution"
        //                         });
        //                     })
        //             }
        //                 }).catch(() => {          
        //                 });
                
            
        // }, 
        toDetail(row) {
                this.$router.push({
                    path:"/system/detail/" +row.dmId
                });
        },
        toSet(row) {//点击跳出弹框编辑分润信息
                // this.$router.push({//原点击跳页面编辑分润信息
                //     path:"/system/deploy/" +row.dmId+'/'+row.authType+'/'+row.distributName
                // });
                this.dialogFormVisible=true
                this.storeCode=row.storeCode
                // var storeCode=row.storeCode
                this.getLists(this.storeCode)
                this.storeName=row.storeName
                this.disCount=row.disCount

        },
        toEdit(row) {
                this.$router.push({
                    path:"/system/edit/" +row.dmId
                });

        },
        del(item,key){//删除
            this.form.splice(item,1)
            item.storeCode=this.storeCode
            console.log(item)
            this.api({
                    url: "/cooperation/deleteDistributeRate",
                    method: "post",
                    data: {
                        distributeId:item.distributeId,
                        storeCode:item.storeCode,
                        merchantRate:item.merchantRate
                    }
                    }).then(data => {
                        this.getList();
                        this.getLists(this.storeCode)
                        this.disCount=this.form.length
                    })
        },
        commit(){

        },
        toCreate(){
            this.$router.push({
                path:"/system/createdistribution"
            })
        },
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>

