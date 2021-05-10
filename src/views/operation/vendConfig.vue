
<style scoped>
.append-input .el-input--suffix{
    width: 80px!important;
}
.upload-img{
    width: 100%;
    /* height: 100%; */
}
.flex-center{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex-2{
    flex:1
}
.flex-1{
    flex:1
}
.flex-center-Y{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}
.upload-block .el-upload-dragger{
    width: 200px;
    height: 200px;
}
.upload-block-2 .el-upload-dragger{
    width: 200px;
    height: 300px;
}
.grey{
    padding: 10px 6px;
    color:#999999
}
.sku-form{
    padding: 0 30px 
}
.sku-form .el-form-item__label{
  width: 110px!important;
}
.blue{
     color:#66b1ff;
     cursor: pointer;
     padding: 10px 6px;
}
.input-with-select{
    width: 50%;
}
.el-select .el-input {
  width: 120px;
}
.create .el-input {
  width: 180px;
}
.el-tooltip__popper[x-placement^=right] .popper__arrow,
.el-tooltip__popper[x-placement^=right] .popper__arrow:after
{
    border-right-color: #ffffff;
}
.el-tooltip__popper[x-placement^=bottom] .popper__arrow,
.el-tooltip__popper[x-placement^=bottom] .popper__arrow:after{
    border-bottom-color: #ffffff;
}
.tooltip-blue{
    background: #ffffff!important;
    border:#66b1ff!important;
    color:#66b1ff!important;
    line-height: 18px;
    font-size: 14px;
}
.hover{
    cursor: pointer;
    /* padding: 10px 20px; */
}
.title-hover{
    cursor: pointer;
}
.danger{
    color:#F56C6C;
}
.orange{
    color:#E6A23C;
}
.success{
    color: #67C23A;
}
.note{
    padding: 10px 0;
    color:#888888;
    font-size: 13px;
}
.item-set{
    height: 44px;
    padding: 6px;
    text-align: center;
    line-height: 32px;
}
.name{
    line-height: 36px;
    font-weight: 600;
    text-align: center;
}
.label{
    display: inline-block;
    line-height: 36px;
    font-weight: 600;
}
.stock-num{
    padding: 10px;
    cursor: pointer;
}
.msg{
    padding: 0 6vw;
}
.center{
    text-align: center
}
.pointer{
    cursor: pointer;
}
</style>

<template>
    <div class="app-container">
        <!-- <el-form>
            <el-form-item>
                <el-input placeholder="请输入需要搜索的采购单编号" v-model="selectedTab" clearable style="width: 450px;" class="input-with-select">
                    <template slot="prepend">采购单编号</template>
                    <el-button slot="append" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                </el-input>
            </el-form-item>
        </el-form> -->
        <el-button icon="el-icon-plus" type="primary" @click="showCreateGoods">绑定机器</el-button>
        <el-table :data="tableData" stripe style="width: 100%" v-loading.body="listLoading" element-loading-text="拼命加载中"
            row-key="goodsCode">
            <!-- <el-table-column label="序号" style="width: 18%" align="center">
                <template slot-scope="scope">
                    {{scope.row.index}}
                </template>
            </el-table-column> -->
            
            <el-table-column prop="machineCode" label="设备SN" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="typeName" label="售货机类型" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="machineName" label="设备名称" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <div @click="showEditMachineName(scope.row)" class="pointer">
                        {{scope.row.machineName}}
                        <i class="el-icon-edit"></i>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="trailsType" label="货道类型" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="storeName" label="所属门店" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="machineStatus" label="设备状态" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="isOpen" label="售货机锁" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.isOpen==1">打开</span>
                    <span v-if="scope.row.isOpen==0">关闭</span>
                    <span v-if="scope.row.isOpen==2">未知</span>
                </template>
            </el-table-column>
            <el-table-column prop="machineAddress" label="激活地址" style="width: 18%" align="center"></el-table-column>
            <el-table-column prop="address" label="当前地址" style="width: 18%" align="center">
                <template slot-scope="scope">
                <span>{{scope.row.locationAddress}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="totalFlow" label="本月消耗流量" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.totalFlow">{{scope.row.totalFlow/1024>1024?(scope.row.totalFlow/1024/1024).toFixed(2)+' MB' : (scope.row.totalFlow/1024).toFixed(2)+' KB'}}</span>
                    <span v-else>0</span>
                </template>
            </el-table-column>
            <el-table-column prop="gmtActivated" label="激活时间" width="170" align="center"></el-table-column>
            <el-table-column label="操作" style="width: 18%" align="center">
                <template slot-scope="scope">
                    <!-- <span @click="showCreateGoods(scope.row)" class="blue">编辑</span>
                    <span @click="shouBindMachine(scope.row)" class="blue">关联售货机</span> -->
                    <span @click="toDetail(scope.row)" class="blue">管理</span>
                </template>
            </el-table-column>
        </el-table>
        <!-- <div class="pagination-line">
            <el-pagination background
                @size-change="handleSizeChange"
                @current-change="currentChange"
                :current-page="params.pageNum"
                :page-size="params.pageRow"
                :total="totalCount"
                :page-sizes="[10, 20, 50, 100]"
                layout="total, sizes, prev, pager, next, jumper">
            </el-pagination> 
        </div> -->
        <el-dialog :title="dialogTitle" :visible.sync="createGoodsDialogVisible" width="56%">
            <el-form class="small-space demo-form-inline sku-form" :model="goodsData" label-position="left" label-width="80px" :inline="true">
                <el-form-item label="设备SN" required class="create">
                    <el-input type="text" v-model="goodsData.machineCode" placeholder="请输入机器编号"></el-input>
                    <!-- <el-select v-model="goodsData.storeStatus" placeholder="请选择机器">
                        <el-option v-for="item in machineNameTabs" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select> -->
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="createGoodsDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editGoods" v-if="goodsData.id">确 定</el-button>
                <el-button type="primary" @click="createGoods" v-else>保 存</el-button>
            </span>
        </el-dialog>
        <el-dialog title="关联售货机" :visible.sync="bindMachineDialogVisible" width="60%">
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
                <el-table :data="data" stripe style="width: 100%" max-height="1200" v-loading.body="listLoading2" element-loading-text="拼命加载中"
        row-key="goodsCode">
                    <el-table-column type="selection" width="55">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.checked"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="machineName" label="机器编号" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="machineName" label="机器类型" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="typeName" label="货道类型" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="machineCode" label="机器名称" style="width: 18%" align="center"></el-table-column>
                    <el-table-column label="激活状态" style="width: 18%" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.activateStatus ==1">已激活</span>
                            <span v-else>未激活</span>
                        </template>
                    </el-table-column>
                </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="bindMachineDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="bindMachine">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {regionData ,CodeToText} from 'element-china-area-data';
export default {
    data() {
        return {
            options: regionData,
            listLoading:false,
            listLoading2:false,
            totalCount:0,
            searchValue:'',
            selectedTab:"goodsCode",
            selectTabs:[
                {
                    name:"商品编号",
                    id:"goodsCode"
                },
                {
                    name:"商品名称",
                    id:"goodsName"
                },                
                {
                    name:"SKU编号",
                    id:"skuCode"
                },
                {
                    name:"SKU名称",
                    id:"skuName"
                },
            ],
            machineNameTabs:[],
            selectGoodsTabs:[

            ],  
            machineType:'1',
            machineTypeName:'弹簧机',
            machineTabs:[
                {
                    name:"弹簧机",
                    id:"1"
                },
                {
                    name:"格子机",
                    id:"2"
                },
                {
                    name:"热饮机",
                    id:"3"
                },
            ],
            ownerTabs:[],     
            tableData:[],
            tableData2:[],
            params:{
                pageRow:20,
                pageNum:1
            },
            createGoodsDialogVisible:false,
            bindMachineDialogVisible:false,
            goodsData:{},
            skuData:{},
            file:{},
            dialogTitle:'',
            expands: [],
            reqLoading:false,
            phoneType:0,
            bindValue:[],
            data: [
            ],

        }
    },
    created(){
        this.getList()
        this.getTypeList()
    },
    
    methods:{
        showEditMachineName(row){
            let this_ = this
            this.$prompt('设备名称', '修改', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValue:row.machineName,
                inputPattern:  /^.{0,20}$/,
                inputErrorMessage: '名称最多20位'
            }).then((data) => {
                if(!data.value){
                    this.$message({
                        type: 'warning',
                        message: '请输入设备名称'
                    })
                    return
                }
                this_.api({
                    url: "/operator/updateVendInfoName",
                    method: "post",
                    data: {
                        machineName:data.value,
                        storeCode:row.storeCode,
                        id:row.id
                    }
                }).then(data => {
                    this.getList()
                    this_.$message({
                        type: 'success',
                        message: '修改完成!'
                    })
                })
                }).catch(() => {
  
                })
        },
        toDetail(row){
            this.$router.push({path: '/system/vendConfig/detail/'+row.id+'/'+row.machineCode})
        },
        handleChange(value, direction, movedKeys) {
            let type = direction == 'left' ? 0 : 1
            // console.log(value, direction, movedKeys);
            this.bindMachine(type,movedKeys)
        },
        handleChangeLeft(list){
            // console.log(1)
            // this.bindMachine(list)
        },
        handleChangeRight(list){
            // console.log(0)
            // this.bindMachine(list)
        },
        bindMachine(type,list){
            var listA = this.data
            var list = this.data
            var checked = []
            let str = ''
            let strChecked = ''
            for(let i in listA){
                if(listA[i].checked){
                    checked.push(listA[i].machineCode)
                }else{
                    // list.push(listA[i].machineCode)
                }
            }
            for(let i in list){
                if(i == list.length){
                    str += list[i].machineCode
                }else{
                    str += list[i].machineCode+ ','
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
                // doOutIn:type,
                storeCode:this.goodsData.storeCode,
                machineCode:strChecked,
                allMachineCode:str
            }
            this.api({
                url: "/store/doVendForStoreByOwner",
                method: "post",
                data: data
            }).then(data => {
                this.getList(this.params)
                this.bindMachineDialogVisible = false
                // this.getBindInfo()
            })
        },
        handleSizeChange(val){
            this.params.pageRow = val
            this.getList(this.params)
        },
        currentChange(index){
            this.params.pageNum = index
            this.getList(this.params)
        },
        prevClick(index){
            this.params.pageNum = index
            this.getList(this.params)
        },
        nextClick(index){
            this.params.pageNum = index
            this.getList(this.params)
        },
        checkUser(){
            this.api({
                url: "/user/findIsHaveUser",
                method: "post",
                data: {
                    userName:this.goodsData.username
                }
            }).then(data => {
                if(data.returnCode == '10090'){
                    this.phoneType = 2//未注册
                }else if(data.returnCode == '10091'){
                    this.phoneType = 3//该账户已成为其他运营商成员无法加入
                }else if(data.returnCode == '10092'){
                    this.phoneType = 4//该账户已存在列表中
                }else{
                    this.phoneType = 1
                }
            })
        },
        createGoods(){
            if(!this.goodsData.machineCode){
                this.$message({
                    type: 'warning',
                    message: '您未填机器编号'
                })
                return
            }

            this.goodsData.username = this.userName
            this.api({
                url: "/operator/doUpForVendByOperator",
                method: "post",
                data: this.goodsData
            }).then(data => {
                this.$message({
                    type: 'success',
                    message: '创建门店成功'
                })
                this.getList(this.params)
                this.createGoodsDialogVisible = false
            })
        },
        editGoods(){
            if(!this.goodsData.storeName){
                this.$message({
                    type: 'warning',
                    message: '您未填写门店名称'
                })
                return
            }
            if(!this.goodsData.detailsAddress ||!this.goodsData.sheng){
                this.$message({
                    type: 'warning',
                    message: '您未填写门店地址'
                })
                return
            }
            if(!this.goodsData.storeManagerId){
                this.$message({
                    type: 'warning',
                    message: '您未选择门店店长'
                })
                return
            }
            if(!this.goodsData.storeStatus){
                this.$message({
                    type: 'warning',
                    message: '您未选择门店状态'
                })
                return
            }
            this.goodsData.cascader = null
            this.goodsData.ownerId = this.userId
            this.api({
                url: "/store/updateStoreInfoByOwner",
                method: "post",
                data: this.goodsData
            }).then(data => {
                this.$message({
                    type: 'success',
                    message: '修改成功'
                })
                this.getList(this.params)
                this.createGoodsDialogVisible = false
            })
        },
        showCreateGoods(row){
            this.$router.push({path: '/system/bindOperator'})
            return
            if(row.id){
                this.dialogTitle = '编辑门店'
                this.goodsData = row
                let cascader = []
                if(this.goodsData.sheng){
                    cascader.push(this.goodsData.sheng)
                }
                if(this.goodsData.shi){
                    cascader.push(this.goodsData.shi)
                }
                if(this.goodsData.qu){
                    cascader.push(this.goodsData.qu)
                }
                for(let i in this.ownerTabs){
                    if(this.ownerTabs[i].storeManagerId==this.goodsData.storeManagerId){
                        console.log(this.goodsData)
                        this.goodsData.username = this.ownerTabs[i].username
                    }
                }
                this.goodsData.cascader = cascader
                this.phoneType = 1
            }else{
                this.dialogTitle = '绑定设备'
                this.phoneType = 0
                this.goodsData = {
                }
            }
            
            this.createGoodsDialogVisible = true
        },
        shouBindMachine(row){
            this.goodsData = row
            this.getBindInfo(row)
            this.bindMachineDialogVisible = true
        },
        getBindInfo(){
            this.listLoading2 = true
            this.api({
                url: "/store/showAllVendByOwner",
                method: "post",
                data: {
                    ownerId:this.userId,
                    storeCode:this.goodsData.storeCode,
                    typeId:Number(this.machineType)
                }
            }).then(data => {
                // let allList = []
                // let checkedList = []
                // for(let i in data.jsonObjectList){
                //     let item = {
                //         key: data.jsonObjectList[i].machineCode,
                //         label: data.jsonObjectList[i].machineCode,
                //         disabled: false
                //     }
                //     checkedList.push(item.key)
                //     allList.push(item)
                // }
                // for(let i in data.jsonList){
                //     let item = {
                //         key: data.jsonList[i].machineCode,
                //         label: data.jsonList[i].machineCode,
                //         disabled: false
                //     }
                //     allList.push(item)
                // }
                let array = data.jsonList
                for(let i in data.jsonObjectList){
                    let item = data.jsonObjectList[i]
                    item.checked = true
                    array.push(item)
                }
                this.data = array
                // this.bindValue = data.jsonObjectList
                this.listLoading2 = false
            })
        },

        search(){
            for(let i in this.selectTabs){
                if(this.selectedTab == this.selectTabs[i].id){
                    this.params[this.selectedTab] = this.searchValue
                }else{
                    let id = this.selectTabs[i].id
                    this.params[id] =''
                }
            }
            
            this.getList(this.params)
        },
        getList(params) {
            this.listLoading = true;
            let data = params || this.params
            data.username = this.userName
            this.api({
                url: "/operator/showVendInfoList",
                method: "post",
                data: data
            }).then(data => {
                this.listLoading = false;
                for(let i in data){
                    data[i].index = Number(i)+1
                }
                this.tableData = data;
                this.totalCount = data.totalCount
                this.expands = []
                if(data.length == 0 ){
                    this.$router.push({path: '/system/bindOperator'})
                }
            })
        },
        getTypeList(){
            // this.api({
            //     url: "/operator/showOneVendByOperator",
            //     method: "post", 
            //     data:{
            //         ownerId:this.userId
            //     }
            //     }).then(data => {
            //         this.machineNameTabs = data
            //     }).catch((e)=>{

            //     })
        },
        remove(row){
            this.$confirm('确定解除绑定该机器?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
            }).then(() => {
                this.api({
                    url: "/promotion/doDownForVendByOperator",
                    method: "post",
                    data: {
                        userId:row.userId,
                        deleteStatus:"0"
                    }
                }).then(data => {
                    this.$message({
                        type: 'success',
                        message: '解除绑定成功'
                    })
                    this.getList(this.params)
                })
            })
        },
        toCreateOwner(){
            this.$router.push({path: '/user'})
        },
        handleAreaChange(value){
            if(value.length == 1){
                this.goodsData.sheng = value[0]
                this.goodsData.shi = null
                this.goodsData.qu = null
            }else if(value.length == 2){
                this.goodsData.sheng = value[0]
                this.goodsData.shi = value[1]
                this.goodsData.qu = null
            }else{
                this.goodsData.sheng = value[0]
                this.goodsData.shi = value[1]
                this.goodsData.qu = value[2]
            }
            this.goodsData.shengName = CodeToText[this.goodsData.sheng]
            this.goodsData.shiName = CodeToText[this.goodsData.shi]
            this.goodsData.quName = CodeToText[this.goodsData.qu]
        },
        storeManagerChange(){
            for(let i in this.ownerTabs){
                if(this.ownerTabs[i].storeManagerId==this.goodsData.storeManagerId){
                    this.goodsData.username = this.ownerTabs[i].username
                }
            }
        },
        machineTypeChange(){
            for(let i in this.machineTabs){
                if(this.machineTabs[i].id==this.machineType){
                    this.machineTypeName = this.machineTabs[i].name
                }
            }
            this.getBindInfo()
        }
    },
    computed: {
    ...mapGetters([
        'userId','userName'
    ])
    },
}
</script>

