<style scoped>
.input-with-select {
    width: 50%;
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
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.el-form-item{width:80%;}
.lgfont{font-size: 1.04vw;line-height: 1.375}
.bigfont{font-size: 0.9375vw;line-height: 1.375}
.isStock{margin-right: 1vw}
.stockDialog{width: 23vw!important;height:25vh!important;padding: 2vh 2vw;color: #333;position: relative}
.stockDialog .title{margin-bottom: 1vh;font-weight: 600}
.stockDialog .word{font-weight: 500;line-height: 1.5}
.stockDialog .bottom{width: 100%;height: 4.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 2vh}
.stockDialog .bottom .btn{cursor: pointer;width: 20%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 4.5vh}
.stockDialog .bottom .btn1{cursor: pointer;width: 20%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 4.5vh}
.stockdialogClass1 .info .right{width: 80%}
.stockdialogClass1 .blue{padding: 0}
.storeManageDrop .el-select-dropdown__list .el-select-dropdown__item{height: 8vh!important;line-height:3vh;padding: 0 3.6vh;padding-left: 3vh;padding-top: 1vh;}
.storeManageDrop .el-select-dropdown__list{padding-top: 1.8vh}

</style>
<style>
    #stock .el-switch__core:after,#stock .el-switch__core{border-radius: 0}
    #stock .otherHeight .el-form-item__label{line-height: 3vw}
    .stockdialogClass .el-dialog__header,.stockdialogClass .el-dialog__body,.stockdialogClass .el-dialog__footer{padding:0}
    .stockdialogClass{width: 23vw!important;max-height: 30vh!important}
    .stockdialogClass1 .avator{width:3vw;height: 3vw;border:2px solid #F5A623;border-radius: 50%;overflow: hidden;}
    .stockdialogClass1 .storeManageDrop{top: 0;position: absolute!important;top: 0}
    .stockdialogClass1 .storeManageDrop .el-select-dropdown__list{padding-top: 1.8vh}
    .stockdialogClass1 .info .el-input__icon{line-height: 0;font-size: 0}
    .stockdialogClass1 .info .el-input--suffix .el-input__inner{border: 0;padding: 0;width: 0}
    .storeManageDrop .el-select-dropdown__list{padding-top: 1.8vh}
    .storeManageDrop .el-scrollbar .el-select-dropdown__wrap{max-height: 50vh!important}
    .el-input .el-input__count .el-input__count-inner{background-color: transparent}
</style>


<template>
    <div class="app-container stock" id="stock">
        <div class="flex-center-Y" style="margin-bottom:4vh">
            <div class="isStock bigfont">开启无仓库模式</div>  
            <el-switch
            v-model="wareFlag"
            active-color="#286EFF"
            inactive-color="#BABABA"
            :active-value="false"
            :inactive-value="true"
            @change="changeStockType">
            </el-switch>
        </div>
        <div class="flex-center-Y" style="margin-bottom:4vh;align-items: flex-start;">
            <div class="isStock bigfont">区别说明</div>  
            <img style="width:20vw" src="../../assets/operaion/stockType.png" alt="">
        </div>
        <div v-show="wareFlag">
        <!-- <el-button type="primary"
                   @click="toCreate">创建仓库</el-button> -->
        <el-table :data="tableData"
                  style="width: 100%"
                  >
            <el-table-column prop="wareName"
                             label="仓库名称"
                             align="center">
            </el-table-column>
            <el-table-column prop="location"
                             label="仓库地址"
                             align="center">
            </el-table-column>
            <el-table-column prop="manageMan"
                             label="仓库管理员"
                             align="center">
                             <template slot-scope="scope">
                                 <span>{{scope.row.manageMan}}</span>
                            </template>
            </el-table-column>
            <el-table-column prop=""
                             label="关联门店"
                             align="center">
                             <template slot-scope="scope">
                                <span>{{scope.row.wareName}}</span>
                            </template>
            </el-table-column>
            <el-table-column label="操作"
                             width="150"
                             align="center">
                <template slot-scope="scope">
                    <span @click="toDetail(scope.row)"
                          class="blue">
                        编辑
                    </span>
                    <!-- <span @click="toConnect(scope.row)"
                          class="blue">
                        关联门店
                    </span> -->
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
                           :page-sizes="[5, 20, 50, 100]"
                           layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
        </div>
        <el-dialog :visible.sync="createVisible" title="创建仓库" center custom-class='stockdialogClass1'>
            <el-form :model="createForm" class="center">
                <el-form-item label="仓库名称" :label-width="formLabelWidth" required>
                    <el-input type="text" maxlength="15" show-word-limit v-model="createForm.wareName" autocomplete="off" placeholder="请输入仓库名称"></el-input>
                </el-form-item>
                <el-form-item label="仓库地址" :label-width="formLabelWidth" required>
                    <div class="flex-center">
                        <el-cascader :options="options" v-model="createForm.cascader" @change="handleAreaChange" class="flex-1"></el-cascader>
                        <el-input  type="text" maxlength="20" show-word-limit v-model="createForm.detailsAddress" placeholder="请输入详细地址" class="flex-1"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="仓库管理员" :label-width="formLabelWidth" class="otherHeight" required>
                    <!-- <div class="flex-center">
                        <el-input type="text" maxlength="10" show-word-limit v-model="createForm.ware.regisName" autocomplete="off" placeholder="请输入名称" class="flex-1" @blur="textName"></el-input>    
                        <el-input v-model="createForm.ware.regisPhone" autocomplete="off" placeholder="请输入手机号" class="flex-1" @blur="testManager" @keyup.delete.native="delPhone" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input>
                        
                    </div> -->
                    <div class="info flex-center-Y" style="height:20%">
                        <div class="right bigfont flex-center-Y">
                            <div class="avator">
                                <img v-if="!createForm.ware.porprait" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                <img v-else style="width:100%" :src="createForm.ware.porprait" alt="">
                            </div>
                            <div style="padding:0 4%;min-width: 30%;">
                                <div>{{createForm.ware.regisName || '--'}}</div>
                                <div>{{createForm.ware.regisPhone || '--'}}</div>
                            </div>
                            <el-select v-model="createForm.ware.storeManagerId" @change="changeUser1" ref="userref1" filterable no-match-text=" " popper-class="storeManageDrop">
                                    <el-option
                                    v-for="(item,index) in wareList"
                                    :key="index"
                                    :label="item.regisName"
                                    :value="item.userId">
                                    <div class="flex-center-Y bigfont H-100">
                                        <div style="width:3vw;height:3vw;border: 2px solid #F5A623;border-radius: 50%;overflow: hidden;">
                                            <img v-if="!item.porprait" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                            <img v-else style="width:100%" :src="item.porprait" alt="">
                                        </div>
                                        <div style="padding:0 4%">
                                            <div>{{item.regisName}}</div>
                                            <div>{{item.regisPhone}}</div>
                                        </div>
                                    </div>
                                    </el-option>
                                </el-select>
                            <div style="width:1vw;height:1vw;position:relative" class="blue">
                                <img style="width:100%" src="../../assets/operaion/change.png" alt="" @click="showUser1">
                            </div>
                        </div>
                    </div>
                </el-form-item>
                <!-- <el-form-item label="仓库采购员" :label-width="formLabelWidth" class="otherHeight" required>
                    <div class="info flex-center-Y" style="height:20%">
                        <div class="right bigfont flex-center-Y">
                            <div class="avator">
                                <img v-if="!createForm.purchase.porprait" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                <img v-else style="width:100%" :src="createForm.purchase.porprait" alt="">
                            </div>
                            <div style="padding:0 4%;min-width: 30%;">
                                <div>{{createForm.purchase.regisName || '--'}}</div>
                                <div>{{createForm.purchase.regisPhone || '--'}}</div>
                            </div>
                            <el-select v-model="createForm.purchase.storeManagerId" @change="changeUser2" ref="userref2" filterable no-match-text=" " popper-class="storeManageDrop">
                                    <el-option
                                    v-for="(item,index) in purList"
                                    :key="index"
                                    :label="item.regisName"
                                    :value="item.userId">
                                    <div class="flex-center-Y bigfont H-100">
                                        <div style="width:3vw;height:3vw;border: 2px solid #F5A623;border-radius: 50%;overflow: hidden;">
                                            <img v-if="!item.porprait" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                            <img v-else style="width:100%" :src="item.porprait" alt="">
                                        </div>
                                        <div style="padding:0 4%">
                                            <div>{{item.regisName}}</div>
                                            <div>{{item.regisPhone}}</div>
                                        </div>
                                    </div>
                                    </el-option>
                                </el-select>
                            <div style="width:1vw;height:1vw;position:relative" class="blue">
                                <img style="width:100%" src="../../assets/operaion/change.png" alt="" @click="showUser2">
                            </div>
                        </div>
                    </div>
                </el-form-item> -->
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="createVisible = false" round>取 消</el-button>
                <el-button type="primary" @click="commitStore()" round>保存</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="editVisible" title="编辑仓库" center custom-class='stockdialogClass1'>
            <el-form :model="createForm" class="center">
                <el-form-item label="仓库名称" :label-width="formLabelWidth" required>
                    <el-input 
                    maxlength="15" 
                    type="text"
                    show-word-limit 
                    v-model="createForm.wareName" 
                    autocomplete="off" 
                    placeholder="请输入仓库名称"></el-input>
                </el-form-item>
                <el-form-item label="仓库地址" :label-width="formLabelWidth" required>
                    <div class="flex-center">
                        <el-cascader :options="options" v-model="createForm.cascader" @change="handleAreaChange" class="flex-1"></el-cascader>
                        <el-input type="text"
                        maxlength="20" 
                        show-word-limit  v-model="createForm.detailsAddress" placeholder="请输入详细地址" class="flex-1"></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="仓库管理员" :label-width="formLabelWidth" required>
                    <!-- <div class="flex-center">
                        <el-input type="text" maxlength="10" show-word-limit v-model="createForm.ware.wareName" autocomplete="off" placeholder="请输入姓名" class="flex-1" @blur="textEditName" @keyup.delete.native="delEditName"></el-input> 
                        <el-input v-model="createForm.ware.warePhone" autocomplete="off" placeholder="请输入手机号" class="flex-1" @blur="testEditManager" @keyup.delete.native="delEditPhone" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"></el-input>
                           
                    </div> -->
                    <div class="info flex-center-Y" style="height:20%">
                        <div class="right bigfont flex-center-Y">
                            <div class="avator">
                                <img v-if="!createForm.ware.porprait" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                <img v-else style="width:100%" :src="createForm.ware.porprait" alt="">
                            </div>
                            <div style="padding:0 4%;min-width: 30%;">
                                <div>{{createForm.ware.regisName || '--'}}</div>
                                <div>{{createForm.ware.regisPhone || '--'}}</div>
                            </div>
                            <el-select v-model="createForm.ware.storeManagerId" @change="changeUser1" ref="userref1" filterable no-match-text=" " popper-class="storeManageDrop">
                                    <el-option
                                    v-for="(item,index) in wareList"
                                    :key="index"
                                    :label="item.regisName"
                                    :value="item.userId">
                                    <div class="flex-center-Y bigfont H-100">
                                        <div style="width:3vw;height:3vw;border: 2px solid #F5A623;border-radius: 50%;overflow: hidden;">
                                            <img v-if="!item.porprait" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                            <img v-else style="width:100%" :src="item.porprait" alt="">
                                        </div>
                                        <div style="padding:0 4%">
                                            <div>{{item.regisName}}</div>
                                            <div>{{item.regisPhone}}</div>
                                        </div>
                                    </div>
                                    </el-option>
                                </el-select>
                            <div style="width:1vw;height:1vw;position:relative" class="blue">
                                <img style="width:100%" src="../../assets/operaion/change.png" alt="" @click="showUser1">
                            </div>
                        </div>
                    </div>
                </el-form-item>
                <!-- <el-form-item label="仓库采购员" :label-width="formLabelWidth" required>
                    <div class="info flex-center-Y" style="height:20%">
                        <div class="right bigfont flex-center-Y">
                            <div class="avator">
                                <img v-if="!createForm.purchase.porprait" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                <img v-else style="width:100%" :src="createForm.purchase.porprait" alt="">
                            </div>
                            <div style="padding:0 4%;min-width: 30%;">
                                <div>{{createForm.purchase.regisName || '--'}}</div>
                                <div>{{createForm.purchase.regisPhone || '--'}}</div>
                            </div>
                            <el-select v-model="createForm.purchase.storeManagerId" @change="changeUser2" ref="userref2" filterable no-match-text=" " popper-class="storeManageDrop">
                                    <el-option
                                    v-for="(item,index) in purList"
                                    :key="index"
                                    :label="item.regisName"
                                    :value="item.userId">
                                    <div class="flex-center-Y bigfont H-100">
                                        <div style="width:3vw;height:3vw;border: 2px solid #F5A623;border-radius: 50%;overflow: hidden;">
                                            <img v-if="!item.porprait" style="width:100%" src="../../assets/super/logo3.png" alt="">
                                            <img v-else style="width:100%" :src="item.porprait" alt="">
                                        </div>
                                        <div style="padding:0 4%">
                                            <div>{{item.regisName}}</div>
                                            <div>{{item.regisPhone}}</div>
                                        </div>
                                    </div>
                                    </el-option>
                                </el-select>
                            <div style="width:1vw;height:1vw;position:relative" class="blue">
                                <img style="width:100%" src="../../assets/operaion/change.png" alt="" @click="showUser2">
                            </div>
                        </div>
                    </div>
                </el-form-item> -->
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="backEdit" round>取 消</el-button>
                <el-button type="primary" @click="editStore()" round>保存</el-button>
            </div>
        </el-dialog>
        <el-dialog title="关联门店" :visible.sync="addStoreVisible" width="60%">
            <!-- <div class="flex-center">
                <div>
                    <div>
                        <el-select v-model="machineType" placeholder="请选择售货机分类" @change="machineTypeChange">
                            <el-option v-for="item in machineTabs" :key="item.id" :label="item.name" :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <br>
                    <el-transfer
                    v-model="bindValue"
                    :titles="[machineTypeName, '已选'+machineTypeName]"
                    @change="handleChange"
                    @left-check-change="handleChangeLeft"
                    @right-check-change="handleChangeRight"
                    :data="data">
                    </el-transfer>
                </div>
            </div> -->
                <el-table :data="data" stripe style="width: 100%" v-loading.body="listLoading2" ref="multipleTable" element-loading-text="拼命加载中"
        row-key="storeCode" @selection-change="handleSelectionChange" @row-click="clickRow">
                    <el-table-column type="selection" width="55">
                        <!-- <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.checked"></el-checkbox>
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="storeName" label="门店名称" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="location" label="门店地址" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="nickname" label="门店店长" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="storeStatus" label="门店状态" style="width: 18%" align="center"></el-table-column>
                </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addStoreVisible = false">取 消</el-button>
                <el-button type="primary" @click="connectStore">保 存</el-button>
            </span>
        </el-dialog>
        <!-- 切换库存模式的弹框 -->
        <el-dialog
            :visible.sync="changeVisible"
            :close-on-click-modal="false"
            :show-close="false"
            custom-class="stockdialogClass"
            width="23vw"
            center>
            <div class="stockDialog">
                <div class="title lgfont">更改确认</div>
                <div class="word bigfont" v-if="!wareFlag">
                    确认切换至无仓库模式? 切换后系统将无法统计利润、库存相关信息。更改成功后您所属的所有设备货道将会全部暂停销售，且需要您重新登录后台一次。
                </div>
                <div class="word bigfont" v-else>
                    确认切换至有仓库模式? 更改成功后您所属的所有设备货道将会全部暂停销售，且需要您重新登录后台一次。
                </div>
                <div class="bottom flex-center-Y" style="margin-top:10vh">
                    <div class="btn bigfont" @click="backChangeType">取消</div>
                    <el-button style="padding:0;border-radius:0" class="btn1 bigfont" :loading="loading" @click="saveChangeType">确定</el-button>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="logOutVisible"
            :close-on-click-modal="false"
            :show-close="false"
            modal
            custom-class="stockdialogClass"
            width="23vw"
            center>
            <div class="stockDialog">
                <div class="word bigfont" style="position:absolute;top:40%;left:50%;transform: translate(-50%,-50%)">
                    重新登录后生效
                </div>
                <div class="bottom flex-center-Y" style="margin-top:10vh">
                    <div class="btn1 bigfont" style="width:25%" @click="logout">重新登录</div>
                </div>
            </div>
        </el-dialog>
        <!-- 切换库存模式的弹框 -->
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import {regionData ,CodeToText} from 'element-china-area-data';
export default {
    data() {
        return {
            listLoading: false,
            listLoading2:false,

            formLabelWidth:"120px",
            tableData:[],
            createVisible:false,
            editVisible:false,
            createForm:{
                purchase:{},
                ware:{}
            },
            options: regionData,
            storeTableDataLoading:false,
            addStoreVisible:false,
            storeTableData:[],
            params:{
                pageRow: 5,
                pageNum: 1,
            },
            totalCount:0,
            data: [
            ],
            wareId:"",
            flag:false,
            wareFlag:false,//是否开启无仓库模式
            changeVisible:false,
            logOutVisible:false,
            loading:false,
            userList:[
                        {nickname:"仓管1",storeManagerId:1,username:"18268844673"},
                        {nickname:"仓管1",storeManagerId:2,username:"18268844673"},
                        {nickname:"仓管1",storeManagerId:3,username:"18268844673"}
                    ],
            purList:[],
            wareList:[],
        };
    },
    created() {
        this.getStockType()
        this.getList(this.params); //获取表格数据
        this.getWareList()
        this.getPurList()
    },
    methods: {
        showUser1(){//select组件聚焦
            this.$nextTick(function () {
                this.$refs.userref1.focus()
            })
            this.showAdress=false
        },
        showUser2(){//select组件聚焦
            this.$nextTick(function () {
                this.$refs.userref2.focus()
            })
            this.showAdress=false
        },
        getPurList(){
            this.api({//采购员列表
                url: "/hardware/showMobileInfo",
                method: "post",
                data: {
                    purFlag:true
                }
            }).then(data => {
                this.purList=data
            });
        },
        getWareList(){
            this.api({//采购员列表
                url: "/hardware/showMobileInfo",
                method: "post",
                data: {
                    warFlag:true
                }
            }).then(data => {
                this.wareList=data
            });
        },
        changeUser1(){
            for(let i in this.wareList){
                if(this.createForm.ware.storeManagerId==this.wareList[i].userId){
                    this.createForm.ware.regisName=this.wareList[i].regisName
                    this.createForm.ware.regisPhone=this.wareList[i].regisPhone
                    this.createForm.ware.porprait=this.wareList[i].porprait
                }
            }
        },
        changeUser2(){
            for(let i in this.purList){
                if(this.createForm.purchase.storeManagerId==this.purList[i].userId){
                    this.createForm.purchase.regisName=this.purList[i].regisName
                    this.createForm.purchase.regisPhone=this.purList[i].regisPhone
                    this.createForm.purchase.porprait=this.purList[i].porprait
                }
            }
        },
        logout() {//退出登录
            this.$store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
            })
            },
        getStockType(){
            this.api({//是否无库存模式
                url: "/inventory/showModeBySwitch",
                method: "post",
                data: {
                    username:this.userName
                }
            }).then(data => {
                this.wareFlag=data.wareFlag
            });
        },
        changeStockType(){//有无库存模式的切换
            this.changeVisible=true
        },
        backChangeType(){
            this.changeVisible=false
            this.getStockType()
        },
        saveChangeType(){
            this.loading=true
            this.api({//切换库存模式
                url: "/inventory/switchMode",
                method: "post",
                data: {
                    manageId:this.userId
                }
            }).then(data => {
                this.loading=false
                this.changeVisible=false
                this.logOutVisible=true
                this.getStockType()
            });
            
        },
        delPhone(){
            this.createForm.ware.regisName=""
        },
        delPphone(){
            this.createForm.purchase.regisName=""
        },
        delEditPhone(){
            this.createForm.ware.wareName=""
        },
        delEditPphone(){
            this.createForm.purchase.purchaseName=""
        },
        delEditName(){
            this.createForm.ware.warePhone=""
        },
        delEditPName(){
            this.createForm.purchase.purchasePhone=""
        },
        getList(params) {
            this.listLoading = true;
            params.username=this.userName
                this.api({
                    url: "/inventory/showModeBySwitch",
                    method: "post",
                    data: params
                }).then(data => {
                    console.log(data)
                    this.listLoading = false;
                    this.tableData=data.wareList.returnData.list
                    this.totalCount=data.wareList.returnData.totalCount

                });
        },
        getInfo(){
            this.api({
                    url: "/inventory/showInfoByCreated",
                    method: "post",
                    data: {username:this.userName}
                }).then(data => {
                    this.createForm.purchase=data.purchase
                    this.createForm.ware=data.ware

                });
        },
        testManager(){//创建时验证管理员手机号
            this.api({
                    url: "/inventory/checkWarePurchase",
                    method: "post",
                    data: {
                        regisName:this.createForm.ware.regisName,
                        regisPhone:this.createForm.ware.regisPhone,
                        purchaseWare:"B"
                    }
                }).then(data => {
                    if(data.returnCode){
                        this.$message({
                            message: data.returnMsg,
                            type: 'warning'
                            });
                    }
                    // this.createForm.ware.regisName=data.regisName
                    // this.createForm.ware.purchaseId=data.purchaseId
                    // this.flag=data.flag
                });
        },
        textName(){//创建管理员时输好名字验证
            // if(this.flag){
            //     this.api({
            //         url: "/inventory/addPurchaseWareMan",
            //         method: "post",
            //         data: {
            //             regisPhone:this.createForm.ware.regisPhone,
            //             regisName:this.createForm.ware.regisName
            //         }
            //     }).then(data => {
            //         this.createForm.ware.purchaseId=data.purchaseManId
            //     });
            // }
            
        },
        textpName(){//创建采购员时输好名字验证
            // if(this.flag){
            //     this.api({
            //         url: "/inventory/addPurchaseWareMan",
            //         method: "post",
            //         data: {
            //             regisPhone:this.createForm.purchase.regisPhone,
            //             regisName:this.createForm.purchase.regisName
            //         }
            //     }).then(data => {
            //         this.createForm.purchase.purchaseId=data.purchaseManId
            //     });
            // }
            
        },
        testEditManager(){//编辑时验证管理员
            this.api({
                        url: "/inventory/checkWarePurchase",
                        method: "post",
                        data: {
                            regisName:this.createForm.ware.wareName,
                            regisPhone:this.createForm.ware.warePhone,
                            purchaseWare:"B"
                        }
                    }).then(data => {
                        if(data.returnCode){
                        this.$message({
                            message: data.returnMsg,
                            type: 'warning'
                            });
                    }
                        // this.createForm.ware.wareName=data.regisName
                        // this.createForm.wareManId=data.purchaseId
                        // this.flag=data.flag
                    });
        },
        textEditName(){
            // if(this.flag){
            //     this.api({
            //         url: "/inventory/addPurchaseWareMan",
            //         method: "post",
            //         data: {
            //             regisPhone:this.createForm.ware.warePhone,
            //             regisName:this.createForm.ware.wareName
            //         }
            //     }).then(data => {
            //         this.createForm.ware.purchaseId=data.purchaseManId
            //     });
            // }
        },
        textEditpName(){
            // if(this.flag){
            //     this.api({
            //         url: "/inventory/addPurchaseWareMan",
            //         method: "post",
            //         data: {
            //             regisPhone:this.createForm.purchase.purchasePhone,
            //             regisName:this.createForm.purchase.purchaseName
            //         }
            //     }).then(data => {
            //         this.createForm.purchase.purchaseId=data.purchaseManId
            //     });
            // }
        },
        testPurchase(){//创建时验证采购员手机号
            this.api({
                    url: "/inventory/checkWarePurchase",
                    method: "post",
                    data: {
                        regisName:this.createForm.purchase.regisName,
                        regisPhone:this.createForm.purchase.regisPhone,
                        purchaseWare:"A"
                    }
                }).then(data => {
                    if(data.returnCode){
                        this.$message({
                            message: data.returnMsg,
                            type: 'warning'
                            });
                    }
                    // this.createForm.purchase.regisName=data.regisName
                    // this.createForm.purchase.purchaseId=data.purchaseId
                    // this.flag=data.flag
                });
        },
        testEditPurchase(){//编辑时验证采购员手机号
            this.api({
                    url: "/inventory/checkWarePurchase",
                    method: "post",
                    data: {
                        regisName:this.createForm.purchase.purchaseName,
                        regisPhone:this.createForm.purchase.purchasePhone,
                        purchaseWare:"A"
                    }
                }).then(data => {
                    if(data.returnCode){
                        this.$message({
                            message: data.returnMsg,
                            type: 'warning'
                            });
                    }
                        // this.createForm.purchase.purchaseName=data.regisName
                        // this.createForm.purchaseId=data.purchaseId
                        // this.flag=data.flag
                });
        },
        toCreate(){
            if(this.totalCount>=5){
                this.$message.warning("仓库数量已达上限!");
                return;
            }
            this.createVisible=true
            // this.getInfo()

        },
        handleAreaChange(value){
            if(value.length == 1){
                this.createForm.sheng = value[0]
                this.createForm.shi = null
                this.createForm.qu = null
            }else if(value.length == 2){
                this.createForm.sheng = value[0]
                this.createForm.shi = value[1]
                this.createForm.qu = null
            }else{
                this.createForm.sheng = value[0]
                this.createForm.shi = value[1]
                this.createForm.qu = value[2]
            }
            this.createForm.shengName = CodeToText[this.createForm.sheng]
            this.createForm.shiName = CodeToText[this.createForm.shi]
            this.createForm.quName = CodeToText[this.createForm.qu]
        },
        toDetail(row) {//编辑
            this.editVisible=true
            this.api({
                    url: "/inventory/showOneWareDetails",
                    method: "post",
                    data: {
                        username:this.userName,
                        wareId:row.wareId
                        }
                }).then(data => {
                    this.createForm= JSON.parse(JSON.stringify(data))
                    let cascader = []
                    if(this.createForm.sheng){
                        cascader.push(this.createForm.sheng)
                    }
                    if(this.createForm.shi){
                        cascader.push(this.createForm.shi)
                    }
                    if(this.createForm.qu){
                        cascader.push(this.createForm.qu)
                    }
                    this.createForm.cascader = cascader
                    for(let i in this.wareList){
                        if(this.wareList[i].userId==this.createForm.ware.userId){
                            this.createForm.ware = this.wareList[i]
                        }
                    }
                    for(let i in this.purList){
                        if(this.purList[i].userId==this.createForm.purchase.userId){
                            this.createForm.purchase = this.purList[i]
                        }
                    }
                    this.createForm.ware.storeManagerId=this.createForm.ware.userId
                    this.createForm.purchase.storeManagerId=this.createForm.purchase.userId
                    this.createForm= JSON.parse(JSON.stringify(this.createForm))
                });
        },
        commitStore(){//提交创建仓库
            this.createForm.wareManId=this.createForm.ware.storeManagerId
            this.createForm.purchaseId=this.createForm.purchase.storeManagerId
            this.createForm.wareManName=this.createForm.ware.regisName
            this.createForm.warePhone=this.createForm.ware.regisPhone
            this.createForm.PurchaseName=this.createForm.purchase.regisName
            this.createForm.PurchasePhone=this.createForm.purchase.regisPhone
            this.createForm.username=this.userName
            if(this.createForm.wareName==""){
                this.$message({
                        type: "warning",
                        message:"请填写仓库名称"
                    });
                    return;
            }
            if (!this.createForm.cascader) {
                this.$message({
                    type: "warning",
                    message: "您未选择仓库地址"
                });
                return;
            }
            if (!this.createForm.detailsAddress) {
                this.$message({
                    type: "warning",
                    message: "您未输入仓库详细地址"
                });
                return;
            }
            if(!this.createForm.warePhone){
                this.$message({
                        type: "warning",
                        message:"请选择仓库管理员"
                    });
                    return;
            }
            // if(!this.createForm.PurchasePhone){
            //     this.$message({
            //             type: "warning",
            //             message:"请选择仓库采购员"
            //         });
            //         return;
            // }
            this.api({
                    url: "/inventory/addWareHorse",
                    method: "post",
                    data:this.createForm
                    }).then(data => {
                        this.createVisible=false
                        this.$message({
                        type: "success",
                        message:"创建成功"
                    });
                    this.createForm.wareName=""
                    this.createForm.cascader=[]
                    this.createForm.detailsAddress=""
                    this.createForm.ware={}
                    this.createForm.purchase={}
                    this.getList(this.params);

                    })
        
        },
        backEdit(){
            this.createForm.wareName=""
            this.createForm.cascader=[]
            this.createForm.detailsAddress=""
            this.createForm.ware={}
            this.createForm.purchase={}
            this.editVisible=false
        },
        editStore(){//提交编辑仓库
            this.createForm.wareManId=this.createForm.ware.storeManagerId
            this.createForm.purchaseId=this.createForm.purchase.storeManagerId
            this.createForm.wareManName=this.createForm.ware.regisName
            this.createForm.warePhone=this.createForm.ware.regisPhone
            this.createForm.PurchaseName=this.createForm.purchase.regisName
            this.createForm.PurchasePhone=this.createForm.purchase.regisPhone
            this.createForm.username=this.userName
            if(this.createForm.wareName==""){
                this.$message({
                        type: "warning",
                        message:"请填写仓库名称"
                    });
                    return;
            }
            if (!this.createForm.cascader) {
                this.$message({
                    type: "warning",
                    message: "您未选择仓库地址"
                });
                return;
            }
            if (!this.createForm.detailsAddress) {
                this.$message({
                    type: "warning",
                    message: "您未输入仓库详细地址"
                });
                return;
            }
            if(!this.createForm.warePhone){
                this.$message({
                        type: "warning",
                        message:"请选择仓库管理员"
                    });
                    return;
            }
            // if(!this.createForm.PurchasePhone){
            //     this.$message({
            //             type: "warning",
            //             message:"请选择仓库采购员"
            //         });
            //         return;
            // }
            this.api({
                    url: "/inventory/updateWareDetails",
                    method: "post",
                    data:this.createForm
                    }).then(data => {
                        this.createVisible=false
                        this.$message({
                        type: "success",
                        message:"编辑成功"
                    });
                    this.createForm.ware={}
                    this.createForm.purchase={}
                        this.getList(this.params);
                        this.editVisible=false

                    })
        
        
        },
        toConnect(row){
            this.addStoreVisible=true
            this.wareId=row.wareId
            this.getBindInfo(row)
        },
        clickRow(row){
            this.$refs.multipleTable.toggleRowSelection(row);
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
         handleSelectionChange(val) {
             for(let g in this.data){
                 this.data[g].checked=false
             }
            for(let i in val){
                for(let key in this.data){
                    if(val[i].storeCode==this.data[key].storeCode){
                        this.data[key].checked=true
                    }
                }
            }
        },
        connectStore(){
            var listA = this.data
            var list = this.data
            var checked = []
            let str = ''
            let strChecked = ''
            for(let i in listA){
                if(listA[i].checked){
                    checked.push(listA[i].storeCode)
                }else{
                }
            }
            for(let i in list){
                if(i == list.length){
                    str += list[i].storeCode
                }else{
                    str += list[i].storeCode+ ','
                }
            }
            for(let i in checked){
                if(i == checked.length){
                    strChecked += checked[i]
                }else{
                    strChecked += checked[i] + ','
                }
            }
            let data = {
                wareId:this.wareId,
                storeCode:strChecked,
                allStoreCode:str
            }
            console.log(data)
            this.api({
                url: "/inventory/lineStore",
                method: "post",
                data: data
            }).then(data => {
                this.$message({
                    type: "success",
                    message: "关联成功 !"
                });
                this.getList(this.params)
                this.addStoreVisible = false
            })
        },
        getBindInfo(row){
            this.listLoading2 = true
            this.api({
                url: "/inventory/showStoreList",
                method: "post",
                data:{wareId:row.wareId}
            }).then(data => {
                let array = data.jsonObjectList
                for(let j in array){
                    array[j].checked = false
                }
                for(let i in data.jsonList){
                    data.jsonList[i].checkedd=true//给checked赋值true失效???????
                    array.push(data.jsonList[i])
                }
                this.data = array
                this.$nextTick(()=>{
                this.data.forEach(row => {
                        if(row.checked || row.checkedd){
                        this.$refs.multipleTable.toggleRowSelection(row,true);
                        }
                    });
                 })
                // this.bindValue = data.jsonObjectList
                this.listLoading2 = false
            })
        },
    },
    computed: {
        ...mapGetters(["userName","userId"])
    }
};
</script>

