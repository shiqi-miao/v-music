<style lang="scss" scoped>
.blue {
    color: #5A9DF8;
    cursor: pointer;
}
.grey {
    color: #999999;
    cursor: pointer;
}
.grey:hover{
    color: #333333;
}
.app-container {
    padding:20px;
    color: #333!important
}
.el-card{height: 90vh;border-radius:4px;overflow: auto}
.btn{width:100px;height: 36px;line-height: 36px;color: #fff;background:#5A9DF8;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;justify-content: center;}
.btn2{width: 10%;height: 5vh;line-height: 5vh!important;color: #fff;background:rgba(40,110,255,1);text-align: center;cursor: pointer;border-radius: 8px}
.btn1{width:100px;height: 36px;line-height: 36px;color:#5A9DF8;text-align: center;cursor: pointer;border-radius:4px;font-size:14px;border: 1px solid #5A9DF8;}
.m-auto{margin:0 auto}
.lg-font{font-size: 26px;line-height:37px;}
.bg-font{font-size: 22px;line-height:30px;}
.sm-font{font-size: 18px;line-height:25px;}
.img{width: 50px;height: 50px;}
#sku{background:#F2F4F8;min-height: 94.5vh;}
#sku .search{width: 150px;margin-right: 20px;}
#sku .date{margin-right: 20px;}
.dialog{height: 120px;}
.dialog .title{font-size: 14px;text-align: center;margin-top: 20px;margin-bottom: 54px;}
.dialog .title1{color: #999;}
.empty img{width: 160px;height:160px;margin-top:60px}
.more{
        .menu{position: absolute;top: 32px;left: 0;width: 70px;height: 140px;box-shadow:0px 2px 30px 0px rgba(0,0,0,0.2);background: #fff;z-index: 99;}
    }
.el-menu.el-menu--horizontal{background: transparent;border: 0;}
</style>
<style>
#sku .el-dialog__headerbtn{display: none;}
.el-dialog__header{padding: 0}
.el-dialog{padding: 0;}
.el-dialog__body{padding: 30px;color: #333;max-height: 80vh;overflow: auto;}
.el-card__body{height:100%;padding: 0;}
.tipDialog .el-dialog{height: 55px;}
.tipDialog .dialog{height: 80px;}
.tipDialog .el-dialog__headerbtn{display: none;}
.tipDialog .el-dialog__body{padding:0 30px}
#sku .el-table thead{color: #333;}
#sku .el-table th>.cell{font-weight: 400;}
#sku .el-select{width: 150px;}
#sku .el-input__inner,#sku .el-input__icon{height: 36px;line-height: 36px;}
#sku .el-date-editor--daterange.el-input__inner{width: 250px;}
#sku .skuTableStyle{height: 65px;}
#sku .el-table__expanded-cell[class*=cell]{padding-right: 0;padding-left: 240px;padding-right: 180px;background: rgba(245, 246, 248, 1)}
#sku .el-table__expanded-cell[class*=cell] th,#sku .el-table__expanded-cell[class*=cell] td,#sku .el-table__expanded-cell[class*=cell]:hover{background: rgba(245, 246, 248, 1)!important}
#sku .el-table__expanded-cell[class*=cell] th{color: rgba(64, 158, 255, 1);}
#sku .el-table--striped .el-table__body tr.el-table__row--striped td,#sku .el-table--enable-row-hover .el-table__body tr:hover>td{background: rgba(250, 250, 250, 1);}
#sku .search1 .el-select .el-input__inner{background: rgba(64, 158, 255, 1);color: #fff;}
#sku .search1 .el-select .el-input .el-select__caret{color: #fff;}
#sku .el-table__empty-block{background: #fff!important;}
</style>
<template>
    <div class="app-container" id="sku">
        <div style="background:#fff;min-height: 90vh;">
        <div style="padding:30px;width:100%;border:1px solid #F2F4F8;justify-content:space-between">
            <div class="flex-center-Y" style="position:relative">
                <div :class="searchValue.typeId?' flex-center-Y search search1':' flex-center-Y search'">
                    <el-select placeholder="请选择分类" v-model="searchValue.typeId" @change="getStoreList();getMachineList();searchValue.storeCode='';searchValue.machineCode=''">
                        <el-option
                            v-for="item in typeList"
                            :key="item.typeId"
                            :label="item.typeName"
                            :value="item.typeId"
                            >
                        </el-option>
                    </el-select>
                </div>
                <div :class="searchValue.brandId?' flex-center-Y search search1':' flex-center-Y search'">
                    <el-select placeholder="请选择品牌" v-model="searchValue.brandId" @change="getMachineList();searchValue.machineCode=''">
                        <el-option
                            v-for="item in brandList"
                            :key="item.brandId"
                            :label="item.brandName"
                            :value="item.brandId">
                        </el-option>
                    </el-select>
                </div>
                <div :class="searchValue.machineCode?' flex-center-Y':' flex-center-Y'" style="width:240px">
                    <el-input
                        placeholder="请输入商品名称"
                        v-model="input4">
                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
                <div class="btn" @click="getSku" :loading="reqLoading" style="position:absolute;top:0px;right:30px">提取商品</div>
            </div>
        </div>
        <div style="padding:30px;padding-top:0">
        <el-table
            stripe
            :data="tableData"
            header-row-class-name="skuTableStyle"
            cell-class-name="skuCellStyle"
            style="width:100%"
            ref="table" 
            @row-click="clickTable"
            row-key="goodsCode" 
            :expand-row-keys="expands" 
            @expand-change="expandChange"
            v-loading="listLoading">
            <div slot="empty" class="empty" v-if="!listLoading">
                <img src="../../assets/operaion/blank.png" alt="">
                <div>暂无数据</div>
            </div>
            <el-table-column type="expand" fixed>
                <template slot-scope="props">
                    <el-table :data="props.row.skuList" stripe style="width: 100%" class="expendtable">
                        <el-table-column prop="storeName" label="保质期类型" style="width:12.5%" align="center"></el-table-column>
                        <el-table-column prop="discPrice" label="销售额（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.discPrice || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="storeName" label="生产日期" style="width:12.5%" align="center"></el-table-column>
                        <el-table-column prop="storeName" label="过保日期" style="width:12.5%" align="center"></el-table-column>
                        <el-table-column prop="storeName" label="剩余时长" style="width:12.5%" align="center"></el-table-column>
                        <el-table-column label="可用库存（件）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.profitPrice || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column label="成本价（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.refundPrice || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="payPrice" label="库存价值（元）" style="width:12.5%" align="center">
                            <template slot-scope="scope">
                                    {{scope.row.payPrice || 0}}
                            </template> 
                        </el-table-column>
                        <el-table-column prop="" label="操作" align="center">
                            <template slot-scope="scope">
                                <i class="el-icon-delete grey"  @click="toRemovw(scope.row)"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column prop="binPicture"
                             label="图片"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <img :src="scope.row.binPicture"
                         width="40"
                         height="40"
                         class="portrait" />
                </template>
            </el-table-column>
            <el-table-column prop="binPicture"
                             label="名称/规格"
                             style="width: 18%"
                             align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.skuName}}/{{scope.row.skuName}}</span>
                </template>
            </el-table-column>
            <el-table-column
            prop="skuName"
            label="分类"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="discPrice"
            label="品牌"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="costPrice"
            label="建议零售价（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="profitPrice"
            label="设备零售价（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="refundPrice"
            label="今日销量/总销量（件）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="payPrice"
            label="可用库存总量（件）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="settlePrice"
            label="库存总价值（元）"
            align="center"
            style="width:12.5%">
            </el-table-column>
            <el-table-column
            prop="tempSettlePrice"
            label="操作"
            align="center"
            style="width:12.5%">
            <template slot-scope="scope">
                <div class="flex-center-Y" style="justify-content: center;">
                    <el-menu class="navbar" mode="horizontal">
                        <el-dropdown class="avatar-container" trigger="hover">
                            <div class="more flex-center-Y blue">
                                更多操作&nbsp;
                                <i class="el-icon-arrow-down"></i>
                            </div>
                            <el-dropdown-menu class="user-dropdown center" slot="dropdown">
                                <el-dropdown-item>
                                <span style="display:block;" @click="toFrezee(scope.row)">一键采购</span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                <span style="display:block;" @click="toDel(scope.row)">更多设置</span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                <span style="display:block;" @click="$router.push({path:'/operation/detail/'+scope.row.goodsCode})">经营情况</span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                <span style="display:block;" @click="toDel(scope.row)">删除商品</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-menu>
                </div>
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
                           layout="total, prev, pager, next">
            </el-pagination>
        </div>
        </div>
        </div>
        <el-dialog
            :visible.sync="delDialog"
            width="400px"
            >
            <div class="dialog">
                <div class="title">是否确认删除该商品？</div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="delDialog=false">
                            取 消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="commitDel">
                            确 认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="tipDialog"
            class="tipDialog"
            width="400px"
            >
            <div class="dialog">
                <div class="title title1">该商品已在运营商设备中上架，无法删除。</div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="removeDialog"
            width="400px"
            >
            <div class="dialog">
                <div class="title" style="padding-left:70px;text-align:left;line-height:1.5;margin-bottom:35px">是否确认删除该批次商品？<br>已过期商品请及时从仓库中清理</div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="removeDialog=false">
                            取 消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="commitRemove">
                            确 认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="setDialog"
            width="400px"
            >
            <div class="dialog">
                <div>

                </div>
                <div class="box-bottom flex-center-Y">
                    <div class="flex-1">
                        <div class="btn1 m-auto" @click="setDialog=false">
                            取 消
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="btn m-auto" style="float:none" @click="commitRemove">
                            确 认
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            searchValue:{typeId:"",brandId:""},
            tableData: [],
            typeList:[],
            brandList:[],
            listLoading:false,
            expands:[],
            params: {
            pageRow: 10,
            pageNum: 1
                },
            totalCount: 0,
            selectData:"",
            tipDialog:false,
            reqLoading:false,
            showFunction:false,
            removeDialog:false
        }
    },
    created(){
        this.getList()
        this.getTypeList()
        this.getBrandList()
    },
    methods:{
        getTypeList(){//点击外部隐藏多余标签
            this.api({
                url: "/goods/goodsaddtype",
                method: "get"
            })
                .then(data => {
                    this.typeList=data
                    this.typeList.unshift({typeId:'',typeName:"全部分类"})
                })
        },
        getBrandList(){//点击外部隐藏多余标签
            this.api({
                url: "/brand/brand",
                method: "post"
            })
                .then(data => {
                    this.brandList=data.list
                    this.brandList.unshift({brandId:'',brandName:"全部品牌"})
                })
        },
        getList() {
            this.listLoading = true;
                this.api({
                    url: "/goods/goodslist",
                    method: "get",
                    params: {
                        pageNum:this.params.pageNum,
                        pageRow:this.params.pageRow,
                        skuName:this.searchValue.skuName
                    }
                }).then(data => {
                    this.listLoading = false;
                    this.tableData = data.list.returnData.list;
                    this.totalCount = data.list.returnData.totalCount;
                });
        },
        search(){
            this.params.pageNum=1
            this.getList()
        },
        expandChange(row, expandedRows) {
            //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.goodsCode)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            if(this.searchValue.date){}else{this.searchValue.date=[]}
            row.skuList=[{}]
            // this.api({//获取点位列表
            //     url: "/financial/storeList",
            //     method: "post",
            //     data: {
            //         operatorId:row.operatorId,
            //         startTime:this.searchValue.date[0],
            //         endTime:this.searchValue.date[1]
            //     }
            // }).then(data => {
            //     this.$set(row,'skuList',data)
            // })
        },
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.table.toggleRowExpansion(row)
        },
        handleSizeChange(val) {
            this.params.pageRow = val;
            this.getList();
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
        getSku(){//提取商品
            this.$router.push({path:'getSku'})
        },
        toDel(row){//删除商品
            this.selectData=row
            this.delDialog=true
        },
        toRemovw(row){
            this.selectData=row
            this.removeDialog=true
        },
        commitDel(){//确认删除商品

        },
        commitRemove(){

        },
    },
    computed: {
        ...mapGetters([])
    }
}
</script>



   