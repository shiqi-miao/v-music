<style lang="scss" scoped>
    .title{font-size: 20px;margin-bottom: 30px}
    .top,.bottom{padding: 30px 70px}
    .top>p>span{font-size: 15px}
    .top .type{width: 80%;height:200px;border: 1px solid #C8CBCF;border-radius: 5px;padding: 5%;margin-bottom: 10px}
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
    .center{text-align: center}
</style>

<template>
    <div>
        <div class="top">
            <p class="title">基本信息</p>
            <el-row>
                <el-col :span="6">
                    分润方主体类型 : {{$route.params.authType}}
                </el-col>
                <el-col :span="6" v-if="$route.params.authType=='公司'">
                    企业名称 : {{$route.params.distributName}}
                </el-col>
                <el-col :span="6" v-if="$route.params.authType=='个人'">
                    姓名 : {{$route.params.distributName}}
                </el-col>
            </el-row>
        </div>
        <div class="top">
            <p class="title">分润配置&nbsp;&nbsp;<span>*每个分润周期打款时将自动扣除<span>交易费率值</span>的交易费率</span></p>
            <el-row>
                <el-col :span="10" v-for="(item,key) in form" :key="key">
                    <div class="type">
                        <!-- <i class="el-icon-delete fr" @click="del(key)"></i> -->
                        <el-form label-position="left" label-width="30%" :inline="true">
                            <el-form-item label="发放门店" required class="create">
                                <el-select  v-if="item.isAdd" v-model="item.storeCodes" placeholder="请选择" multiple @change="storechange">
                                    <el-option v-for="item in stores" :key="item.storeCode" :label="item.storeName" :value="item.storeCode">
                                    </el-option>
                                </el-select>
                                <el-select  v-if="!item.isAdd" disabled v-model="item.storeCodes" placeholder="请选择" multiple @change="storechange">
                                    <el-option v-for="item in stores" :key="item.storeCode" :label="item.storeName" :value="item.storeCode">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="分润比率: " required>
                                <span class="flex-center-Y" v-if="item.isAdd">
                                    <el-input type="text" v-model="item.merchantRate" placeholder="请输入"></el-input><span>&nbsp;&nbsp;&nbsp;&nbsp;%</span>
                                </span>
                                <span v-if="!item.isAdd">{{item.merchantRate}}&nbsp;&nbsp;%</span>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                
            </el-row>
            <el-row v-if="form.length==0">
                <el-col :span="12">
                    <el-button @click="add()">新增方案</el-button>
                </el-col>
            </el-row>
            <el-row v-if="showAdd==true">
                <el-col :span="12">
                    <el-button @click="add()">新增方案</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="18" class="center">
                    <el-button v-if="showSave==true" type="primary" @click="save()">保存</el-button>
                    <el-button type="primary" @click="back()">返回</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            formLabelWidth:'120px',
            form:[],
            stores:[],
            showSave:false,
            showAdd:false
        };
    },
    created() {
        this.getLists()
    },
    methods: {
        storechange(){
            // console.log(this.form)
        },
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
                // console.log(data)
                this.getMemberList()
            }).catch((e)=>{
                // console.log(e)
            })
        }, 
        //导入excel文件
        
        
        getLists(){
            this.api({
                url: "/coupon/showAllStoreCode",
                method: "post",
                data: {
                    username:this.userName
                }
            }).then(data => {
                this.stores = data
                // console.log(data)
            });
            this.api({
                    url: "/cooperation/cooperationSettingInfo",
                    method: "post",
                    data: {
                        dmId:this.$route.params.dmId,
                    }
                    }).then(data => {
                        this.form=data
                        // console.log(this.form)
                    })

        },
        back(){
            this.$router.push({
                            path:"/system/distribution"
                        });
        },
        add(){
            this.showSave=true
            this.showAdd=true
            var type={merchantRate:"",isAdd:1}
            this.form.push(type)
        },
        save(){
            this.$confirm('保存后不可修改, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    var form=[]
                    for(var i in this.form){//只提交新添加的
                        if(this.form[i].isAdd){
                            form.push(this.form[i])
                        }
                    }
                    let array = "";
                    // console.log(form)
                    for (let i in form) {
                        var storeCodes=""
                        for(var key in form[i].storeCodes){
                            if(key>=form[i].storeCodes.length-1){
                                storeCodes+=form[i].storeCodes[key]
                            }else{
                                storeCodes+=form[i].storeCodes[key]+","
                            }
                            
                        }
                        if (form[i].storeCodes=="") {
                            this.$message({
                                type: "warning",
                                message: "您有未填写的门店"
                            });
                            return;
                        }
                        if (!form[i].merchantRate) {
                            this.$message({
                                type: "warning",
                                message: "您有未填写分润比率"
                            });
                            return;
                        }
                        let item = {
                            merchantRate:form[i].merchantRate,
                            storeCodes: storeCodes,
                            distributeId:this.$route.params.dmId
                        };
                        array += JSON.stringify(item);
                    }
                    // console.log(array)
                    if(array==""){//有修改才提交
                    }else{
                        this.api({
                            url: "/cooperation/cooperationSetting",
                            method: "get",
                            params: {
                                lists:array
                            }
                            }).then(data => {
                                this.$router.push({
                                    path:"/system/distribution"
                                });
                            })
                    }
                        }).catch(() => {          
                        });
                
            
        },  
        // del(key){//删除
        //     this.form.splice(key,1)
        // }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>