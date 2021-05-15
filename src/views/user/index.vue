<style scoped>
#userManage{
    background: #F2F4F8;
    border: 1px solid #E2E5EB;
}
#userManage .container{
            min-height: calc(89vh - 75px);
            background: #fff;
            border: 1px solid #E2E5EB;
            padding: 20px;
            padding-top: 10px;
        }
#userManage .top{
        height: 75px;
        border: 1px solid #E2E5EB;
        border-bottom: 0;
        background: #fff;
        padding:20px
    }
.input-with-select {
    width: 50%;
}
.el-select .el-input {
    width: 120px;
}
.el-date-editor{width: 100%!important}
/* .el-form-item__content .el-input{width: 50%} */
.el-tooltip__popper[x-placement^="right"] .popper__arrow,
.el-tooltip__popper[x-placement^="right"] .popper__arrow:after {
    border-right-color: #ffffff;
}
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow,
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow:after {
    border-bottom-color: #ffffff;
}
.tooltip-blue {
    background: #ffffff !important;
    border: #66b1ff !important;
    color: #66b1ff !important;
    line-height: 18px;
    font-size: 14px;
}
.hover {
    cursor: pointer;
    /* padding: 10px 20px; */
}
.title-hover {
    cursor: pointer;
}
.danger {
    color: #f56c6c;
}
.orange {
    color: orange;
}
.note {
    padding: 10px 0;
    color: #888888;
    font-size: 13px;
}
.item-set {
    height: 44px;
    padding: 6px;
    text-align: center;
    line-height: 32px;
}
.name {
    line-height: 36px;
    font-weight: 600;
    text-align: center;
}
.stock-num {
    padding: 10px;
    cursor: pointer;
}
.el-form-item__content{line-height:40px;display: flex;}
.blue {
    color: #66b1ff!important;
    cursor: pointer;
}
#userManage .addstock .el-input{width: 60%}
#period .el-input__inner{padding: 0;border: 0px;color: #909399;font-weight: bold;width: 60%;background: transparent}
#userManage .el-table__expanded-cell .el-table td{background: #66b1ff12;}
.btn{width:100px;height: 32px;line-height: 32px;color: #fff;background:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.btn1{width:100px;height: 32px;line-height: 32px;color:#409EFF;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #409EFF;margin-right:20px}
.line{margin-bottom: 20px;}
.line .label{width: 60px;}
.line .input{width: 240px;}
.line img{width: 100px;height: 100px;}
.line .img{position: relative;margin:0 10px}
.line .img .trangle{
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url('../../assets/operaion/trangle.png');
    background-size:  100% 100% ;
}
.justify-center{justify-content: center;}
.searchInput{width: 240px;
    margin-right: 30px;}
.brandtype {
    margin-right: 10px;
    background: #ffffff;
    color: #888888;
    cursor: pointer;
    margin-bottom: 10px;
}
.brandtype.active {
    background: rgba(64, 158, 255, 0.1);
    color: #409eff;
    border: 1px solid rgba(64, 158, 255, 0.2);
}
#userManage >>> .el-input-number{line-height:30px}
#userManage >>> .el-select,#userManage >>> .el-select .el-input{width:100%}
</style>
<style scoped lang="scss">
.userTableStyle{color: #333}
.userTableStyle th>.cell{font-weight: 400}
.userTableStyle{color: #333;height: 75px;padding: 0!important}
#userManage .userTableStyle{height: 65px;}
.avatar-uploader .el-upload {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .img{
        width: 100px;
        height: 100px;
        img{
            width: 100%;
        }
    }
  }
#userManage .el-select .el-input {
  width: 120px;
}
#userManage .el-input__inner{height:32px;line-height: 32px;}
#userManage .el-input__icon{line-height:32px;
// border-left: 1px solid #C0C4CC;padding-left: 5px;
}
#userManage .el-input__suffix{line-height: 32px;cursor:pointer;right: 10px;padding-left: 10px;
// border-left: 1px solid #DCDFE6;
}
.shopdialog{height: 260px;}
.shopdialog .el-dialog__body{height: 520px;overflow-y: auto;}
.shopdialog1 .el-dialog__header{padding: 0;}
.shopdialog1 .el-dialog__headerbtn .el-dialog__close{display: none;}
.shopdialog1 .content{margin-bottom:40px;text-align: center;}
/* input type="number" 去掉箭头 */
#userManage input::-webkit-outer-spin-button,
#userManage input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
</style>
<template>
    <div class="app-container" id="userManage">
        <div class="top">
            <div class="btn" @click="createVisible=true">添加账号</div>
        </div>
        <div class="container">
        <el-table :data="tableData"
                  header-row-class-name="userTableStyle" 
                  cell-class-name="userCellStyle"
                  stripe
                  style="width: 100%"
                  v-loading.body="listLoading"
                  element-loading-text="拼命加载中"
                  ref="refTable">
            <el-table-column prop="manageName"
                             label="账号"
                             align="center">
                             </el-table-column>
            <el-table-column prop="gmtCreated"
                             label="创建时间"
                             align="center">
                             </el-table-column>
            <el-table-column label="操作"
                             width="150"
                             align="center">
                <template slot-scope="scope">
                    <span @click="removeVisible=true;selectData=scope.row"
                          class="blue">
                        删除
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :visible.sync="createVisible" title="添加账号" width="400px" custom-class='shopdialog'>
            <div class="line flex-center-Y">
                <div class="label">账号</div>
                <div class="input">
                    <el-input placeholder="请输入账号" v-model="form.manageName"></el-input>
                </div>
            </div>
            <div class="line flex-center-Y">
                <div class="label">密码</div>
                <div class="input">
                    <el-input placeholder="请输入密码" v-model="form.managePassword"></el-input>
                </div>
            </div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="createVisible = false;form.manageName='';form.managePassword=''">取消</div>
                <div class="btn" @click="commitEdit()">保存</div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="removeVisible" title="" width="400px" custom-class='shopdialog1'>
            <div class="content">是否确认删除该账号?</div>
            <div class="bottom flex-center-Y justify-center">
                <div class="btn1" @click="removeVisible = false">取消</div>
                <div class="btn" @click="commitRemove()">确认</div>
            </div>
        </el-dialog>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            listLoading: false,
            form:{manageName:"",managePassword:""},
            tableData: [{}],
            removeVisible:false,
            createVisible:false,
        };
    },
    created() {
        this.getList();
        document.getElementsByTagName("body")[0].style.minWidth="1400px";
        document.getElementsByTagName("body")[0].style.overflow="auto";
    },
    methods: {
        commitRemove(){//删除账号
            this.api({
                    url: "/manageDel",
                    method: "post",
                    data: {
                        manageId:this.selectData.manageId
                    }
                })
                    .then(data => {
                        this.getList()
                        this.removeVisible=false
                    })
                    .catch(e => {});
        },
        commitEdit(){//添加账号
            if(!this.form.manageName){
                    this.$message({
                        type: "warning",
                        message: "请输入账号"
                    });
                    return;
                }
            if(!this.form.managePassword){
                    this.$message({
                        type: "warning",
                        message: "请输入密码"
                    });
                    return;
                }
            this.api({
                url: "/manageAdd",
                method: "post",
                data: {
                    manageName:this.form.manageName,
                    managePassword:this.form.managePassword
                }
            }).then(data => {
                this.$message({
                        type: "success",
                        message: "保存成功 !"
                    });
                this.form={
                            manageName:"",
                            managePassword:""
                            }
                this.createVisible=false
                this.getList()
            }).catch(data =>{
                 
            });
        },
        getList() {
            this.listLoading = true;
            this.api({
                url: "/manageList",
                method: "post",
                data: {}
            }).then(data => {
                this.listLoading = false;
                this.tableData = data;
                
            });
        },
    },
    computed: {
        ...mapGetters(["userId", "userName"])
    }
};
</script>

