<style>
.cell{
    text-align: center;
}
.pagination-line{
    text-align: right;
    margin: 20px 0;
}
</style>

<template>
    <div class="app-container">
        <el-form>
            <el-form-item>
                <el-input placeholder="请输入需要搜索的补货单编号" v-model="selectedTab" @keyup.enter.native="search" clearable style="width: 450px;" class="input-with-select">
                    <template slot="prepend">补货单编号</template>
                    <el-button slot="append" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                </el-input>
                <el-button type="primary" @click="toCreateType">创建补货单</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData"  stripe v-loading.body="listLoading" element-loading-text="拼命加载中" @filter-change="filterMethod">
            <el-table-column prop="repairCode" label="补货单编号"></el-table-column>
            <el-table-column prop="skuCount" label="补货设备">
                <template slot-scope="scope">
                    {{scope.row.storeNum}}&nbsp;-&nbsp;{{scope.row.skuNum}}
                </template>
            </el-table-column>
            <el-table-column prop="repairStatus" label="补货状态"
                :filters="purchaseTypefilters" column-key="repairType" :filter-multiple="false"></el-table-column>
            <el-table-column prop="userName" label="补货人员"></el-table-column>
            <el-table-column label="时间">
                <template slot-scope="scope">
                    {{scope.row.gmtModifiedOver||scope.row.gmtModified||scope.row.gmtCreated}}
                </template>
            </el-table-column>
            <el-table-column label="操作" style="width: 18%" align="center">
               <template slot-scope="scope">
                    <el-button @click="toDetail(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listLoading:false,
            totalCount:0,
            selectedTab:"",
            filterMultiple:false,
            selectTabs:[
                {
                    name:"SKU编号",
                    id:1
                },
                {
                    name:"SKU名称",
                    id:2
                },
            ],
            typeFilters:[],
            purchaseTypefilters:[{ text: "等待确认", value: "A" },{ text: "确认超时", value: "B" },{ text: "出库中", value: "C" },{ text: "等待提货", value: "D" },{ text: "申请退仓", value: "F" }],
            tableData:[{
                number:"test"
            }],
            purchaseTypeName:'',
            params:{
                offSet:0,
                pageRow:15,
                pageNum:1
            }
        }
    },
    created(){
        this.getList()//获取表格数据
    },
    methods:{
        toCreateType(){
            this.$router.push({path: '/replenishment/add'})
        },
        currentChange(index){
            this.params.pageNum = index
            this.getList(this.params)           
            conosle.log('currentChange:'+index)
        },
        prevClick(index){
            this.params.pageNum = index
            this.getList(this.params)            
            conosle.log('prevClick:'+index)
        },
        nextClick(index){
            this.params.pageNum = index
            this.getList(this.params)            
            conosle.log('nextClick:'+index)
        },
        search(){
            if(!this.selectedTab){
                this.$message({
                    message: '你没有输入搜索条件哦～',
                    type: 'warning',
                    duration: 2000,
                })
                return
            }
            this.params.repairCode=this.selectedTab
            this.getList(this.params)
        },
        filterMethod(filters) {//商品分类 采购状态 删选
            for(let i in filters){
                this.params[i] = filters[i][0]
            }
            console.log(filters)
            this.getList(this.params)
        },
        getList(params) {
            this.listLoading = true;
            this.api({
                url: "/ware/repairInfoList",
                method: "get",
                params: params || this.params
            }).then(data => {
                this.tableData = data;
                // this.totalCount = data.totalCount
                this.listLoading = false;
            })
        },
        toDetail(row){
            this.$router.push({path: '/replenishment/detail/'+row.repairCode+"/"+row.repairType})
        }
    }
}
</script>

