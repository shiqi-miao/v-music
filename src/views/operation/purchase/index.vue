<style>
.cell{
    text-align: center;
}
</style>

<template>
    <div class="app-container">
        <el-form>
            <el-form-item>
                <el-input placeholder="请输入需要搜索的采购单编号" v-model="selectedTab" @keyup.enter.native="search" clearable style="width: 450px;" class="input-with-select">
                    <template slot="prepend">采购单编号</template>
                    <el-button slot="append" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                </el-input>
                <!-- <el-button type="primary" @click="showCreateType">创建采购单</el-button> -->
                <el-button type="primary" @click="toCreateType">创建采购单</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%;height:70vh" stripe v-loading.body="listLoading" element-loading-text="拼命加载中"
        @filter-change="filterMethod">
            <el-table-column prop="purchaseCode" label="采购单编号"></el-table-column>
            <!-- <el-table-column prop="typeName" label="采购SKU分类"
                :filters="typeFilters" column-key="goodsType" :filter-multiple="false"></el-table-column> -->
            <el-table-column prop="skuCount" label="采购SKU数量"></el-table-column>
            <el-table-column prop="purchaseTypeName" label="采购状态"
                :filters="purchaseTypefilters" column-key="purchaseType" :filter-multiple="false"></el-table-column>
            <el-table-column prop="userName" label="采购人员">
                <template slot-scope="scope">
                    <span v-if="scope.row.purchaseTypeName!=='等待确认'">{{scope.row.userName}}</span>
                </template>
            </el-table-column>
            <el-table-column label="时间">
                <template slot-scope="scope">
                    {{scope.row.gmtModifiedE||scope.row.gmtModifiedD||scope.row.gmtModifiedC||scope.row.gmtModifiedB||scope.row.gmtCreated}}
                </template>
            </el-table-column>
            <el-table-column label="操作" style="width: 18%" align="center">
               <template slot-scope="scope">
                    <el-button @click="toDetail(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-line">
            <el-pagination background layout="prev, pager, next"
            :total="totalCount"
            @current-change="currentChange" @prev-click="prevClick" @next-click="nextClick">
            </el-pagination>
        </div>
        <el-dialog title="选择采购SKU分类" :visible.sync="createTypeDialogVisible" width="30%">
            <el-select v-model="selectedTabCreate" placeholder="请选择">
                <el-option v-for="item in selectTabsType" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
                <el-button @click="createTypeDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="toCreateSKU">确 定</el-button>
            </span>
        </el-dialog>
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
            purchaseTypefilters:[{ text: "等待确认", value: "A" },{ text: "等待采购", value: "B" },{ text: "入库完成", value: "E" },{ text: "正在采购", value: "C" }],
            tableData:[{
                number:"test"
            }],
            purchaseTypeName:'',
            params:{
                offSet:0,
                pageRow:15,
                pageNum:1
            },
            createTypeDialogVisible:false,
            selectedTabCreate:'',
            selectTabsType:[]
        }
    },
    created(){
        this.getList()//获取表格数据
        this.getSkuTypeList()//获取采购sku分类
    },
    methods:{
        showCreateType(){
            this.createTypeDialogVisible = true
        },
        toCreateType(){
            // this.$router.push({path: '/purchase/add/'+this.selectedTabCreate+'/'+name})
            this.$router.push({path: '/purchase/add'})
        },
        toCreateSKU(){
            if(!this.selectedTabCreate){
                this.$message({
                    message: '你未选择分类～',
                    type: 'warning',
                    duration: 2000,
                })
                return
            }
            let name = ''
            for(let i in this.selectTabsType){
                if(this.selectTabsType[i].id == this.selectedTabCreate){
                    name = this.selectTabsType[i].name;
                    break;
                }
            }
            this.$router.push({path: '/purchase/add/'+this.selectedTabCreate+'/'+name})
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
            this.params.purchaseCode=this.selectedTab
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
                url: "/ware/purchaseList",
                method: "get",
                params: params || this.params
            }).then(data => {
                this.tableData = data.list;
                this.totalCount = data.totalCount
                this.listLoading = false;
            })
        },
        getSkuTypeList(){
            this.api({
                url: "/ware/skuTypeList",
                method: "get",
                params: {}
            }).then(data => {
                let lists = [];
                let listsType = [];
                for(let i in data){
                    let item = {
                        text:data[i].typeName,
                        value:data[i].goodsType
                    }
                    let itemType = {
                        name:data[i].typeName,
                        id:data[i].goodsType
                    }
                    lists.push(item)
                    listsType.push(itemType)
                }
                this.typeFilters = lists;
                this.selectTabsType = listsType
                
            })
        },
        toDetail(row){
            this.$router.push({path: '/purchase/detail/'+row.purchaseCode+'/'+row.purchaseType})
        }
    }
}
</script>

