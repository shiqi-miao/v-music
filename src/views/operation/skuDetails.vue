<template>
    <div class="app-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="SKU计划项" name="first">
                <div class="filter-container">
                    <el-form>
                        <el-form-item>
                            <el-input placeholder="请输入SKU编号" prefix-icon="el-icon-search" v-model="listQuery1.skuCode" clearable style="width: 160px;"></el-input>
                            <!-- <el-input placeholder="请输入商品编号" prefix-icon="el-icon-search" v-model="listQuery1.wgcode" clearable style="width: 160px;"></el-input> -->
                            <el-input placeholder="请输入条形码" prefix-icon="el-icon-search" v-model="listQuery1.jbarCode" clearable style="width: 160px;"></el-input>
                            <el-input placeholder="请输入品牌名称" prefix-icon="el-icon-search" v-model="listQuery1.brandName" clearable style="width: 160px;"></el-input>  
                            <el-input placeholder="请输入商品名称" prefix-icon="el-icon-search" v-model="listQuery1.goodsName" clearable style="width: 160px;"></el-input>
                            <el-button type="primary" icon="el-icon-search" @click="getSkuPlanList">搜索</el-button>
                        </el-form-item>
                    </el-form>
                  </div>
                  <el-table :data="list1" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
                            highlight-current-row>
                    <el-table-column align="center" label="序号" width="80">
                      <template slot-scope="scope">
                        <span v-text="getIndex(scope.$index)"> </span>
                      </template>
                    </el-table-column>
                    <el-table-column align="center" label="SKU编号" prop="skuCode" style="width: 60px;"></el-table-column>
                    <!-- <el-table-column align="center" label="商品编号" prop="goodCode" style="width: 80px;"></el-table-column> -->
                    <el-table-column align="center" label="商品分类" prop="typeName" style="width: 30px;"></el-table-column>
                    <el-table-column align="center" label="品牌名称" prop="brandName" style="width: 30px;"></el-table-column>
                    <el-table-column align="center" label="商品名称" prop="goodsName" style="width: 30px;"></el-table-column>
                    <el-table-column align="center" label="条形码" prop="jbarCode" style="width: 35px;"></el-table-column>
                    <el-table-column align="center" label="SKU图片" style="width: 30px;">
                         <template slot-scope="scope">
                            <img :src="scope.row.skuPicture" width="40" height="40" class="portrait"/>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="App图片" style="width: 30px;">
                        <template slot-scope="scope">
                           <img :src="scope.row.appPicture" width="40" height="40" class="portrait"/>
                       </template>
                    </el-table-column>
                    <el-table-column align="center" label="货道类型" prop="aisletypeName" style="width: 60px;"></el-table-column>
                    <el-table-column align="center" label="进货价" prop="procurementPrice" style="width: 60px;"></el-table-column>
                    <el-table-column align="center" label="成本上浮价" prop="higherPrice" style="width: 60px;"></el-table-column>
                    <el-table-column align="center" label="已售数量" prop="soldNumber" style="width: 60px;"></el-table-column>
                    <el-table-column align="center" label="库存预警值" prop="replenishmentWarn" style="width: 60px;"></el-table-column>
                    <el-table-column align="center" label="销售价" prop="salePrice" style="width: 60px;"></el-table-column>
                    <el-table-column align="center" label="管理" width="220" v-if="hasPerm('operation:recommend')">
                    <el-table-column align="center" label="是否加入计划" v-if="hasPerm('operation:recommend')" width="170">
                        <template slot-scope="scope">
                                <el-switch
                                    active-value="Y"
                                    inactive-value="N"
                                    v-model="scope.row.isPlan" 
                                    @change=changeIsplan1(scope.$index,scope.row)                
                                >
                                </el-switch>
                        </template>
                    </el-table-column>
                    </el-table-column>
                  </el-table>
                  <el-pagination
                    @size-change="handleSizeChange1"
                    @current-change="handleCurrentChange1"
                    :current-page="listQuery1.pageNum"
                    :page-size="listQuery1.pageRow"
                    :total="totalCount1"
                    :page-sizes="[10, 20, 50, 100]"
                    layout="total, sizes, prev, pager, next, jumper">
                  </el-pagination>
            </el-tab-pane>
            <el-tab-pane label="SKU管理" name="second">
                <div class="filter-container">
                    <el-form>
                      <el-form-item>
                          <el-input placeholder="请输入SKU编号" prefix-icon="el-icon-search" v-model="listQuery.skuCode" clearable style="width: 160px;"></el-input>
                          <!-- <el-input placeholder="请输入商品编号" prefix-icon="el-icon-search" v-model="listQuery.wgcode" clearable style="width: 160px;"></el-input> -->
                          <el-input placeholder="请输入条形码" prefix-icon="el-icon-search" v-model="listQuery.jbarCode" clearable style="width: 160px;"></el-input>
                          <el-input placeholder="请输入品牌名称" prefix-icon="el-icon-search" v-model="listQuery.brandName" clearable style="width: 160px;"></el-input>  
                          <el-input placeholder="请输入商品名称" prefix-icon="el-icon-search" v-model="listQuery.goodsName" clearable style="width: 160px;"></el-input>
                            <el-button type="primary" icon="el-icon-search" @click="getSkuList">搜索</el-button>
                        </el-form-item>
                    </el-form>
                  </div>
                  <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
                            highlight-current-row>
                      <el-table-column align="center" label="序号" width="80">
                        <template slot-scope="scope">
                          <span v-text="getIndex(scope.$index)"> </span>
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="SKU编号" prop="skuCode" style="width: 60px;"></el-table-column>
                      <!-- <el-table-column align="center" label="商品编号" prop="goodCode" style="width: 80px;"></el-table-column> -->
                      <el-table-column align="center" label="商品分类" prop="typeName" style="width: 30px;"></el-table-column>
                      <el-table-column align="center" label="品牌名称" prop="brandName" style="width: 30px;"></el-table-column>
                      <el-table-column align="center" label="商品名称" prop="goodsName" style="width: 30px;"></el-table-column>
                      <el-table-column align="center" label="条形码" prop="jbarCode" style="width: 35px;"></el-table-column>
                      <el-table-column align="center" label="SKU图片" style="width: 30px;">
                          <template slot-scope="scope">
                              <img :src="scope.row.skuPicture" width="40" height="40" class="portrait"/>
                          </template>
                      </el-table-column>
                      <el-table-column align="center" label="App图片" style="width: 30px;">
                          <template slot-scope="scope">
                            <img :src="scope.row.appPicture" width="40" height="40" class="portrait"/>
                        </template>
                    </el-table-column>
                      <el-table-column align="center" label="货道类型" prop="aisletypeName" style="width: 60px;"></el-table-column>
                      <el-table-column align="center" label="进货价" prop="procurementPrice" style="width: 60px;"></el-table-column>
                      <el-table-column align="center" label="成本上浮价" prop="higherPrice" style="width: 60px;"></el-table-column>
                      <el-table-column align="center" label="已售数量" prop="soldNumber" style="width: 60px;"></el-table-column>
                      <el-table-column align="center" label="库存预警值" prop="replenishmentWarn" style="width: 60px;"></el-table-column>
                      <el-table-column align="center" label="销售价" prop="salePrice" style="width: 60px;"></el-table-column>
                      <el-table-column align="center" label="管理" width="220" v-if="hasPerm('operation:recommend')">
                      <el-table-column align="center" label="是否加入计划" v-if="hasPerm('operation:recommend')" width="170">
                          <template slot-scope="scope">
                                  <el-switch
                                      active-value="Y"
                                      inactive-value="N"
                                      v-model="scope.row.isPlan" 
                                      @change=changeIsplan(scope.$index,scope.row)                
                                  >
                                  </el-switch>
                          </template>
                      </el-table-column>
                      </el-table-column>
                  </el-table>
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="listQuery.pageNum"
                    :page-size="listQuery.pageRow"
                    :total="totalCount"
                    :page-sizes="[10, 20, 50, 100]"
                    layout="total, sizes, prev, pager, next, jumper">
                  </el-pagination>
            </el-tab-pane>
        </el-tabs>
    </div>
  </template>
  <script>
    import {mapGetters} from 'vuex'
    export default {
      data() {
        return {
          activeName: 'first',
          code : null,
          totalCount: 0, //分页组件--数据总条数
          totalCount1: 0, //分页组件--数据总条数
          list: [],//表格的数据
          list1: [],//表格的数据
          listLoading: false,//数据加载等待动画
          listQuery: {
            pageNum: 1,//页码
            pageRow: 50,//每页条数
            skuCode:"",//SKU编号
            jbarCode:"",//条形码
            brandName:"",//品牌名称
            goodsName:"",//商品名称
            goodCode:'',
          },
          listQuery1: {
            pageNum: 1,//页码
            pageRow: 50,//每页条数
            skuCode:"",//SKU编号
            jbarCode:"",//条形码
            brandName:"",//品牌名称
            goodsName:"",//商品名称
            goodCode:'',
          },
        }
      },
      created() {
         this.getParamer();
        this.getSkuList();
        this.getSkuPlanList();
       
      },
      computed: {
        ...mapGetters([
          'userId'
        ])
      },
      methods: {
        handleClick(tab, event) {
            if(tab.activeName = "first"){
              this.getSkuPlanList();
            }
            if(tab.activeName = "second"){
              this.getSkuList();
            }
        },
        changeIsplan1($index,row) {
              let _vue = this;
              this.$confirm('确定取消此SKU计划项?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let skus = _vue.list1[$index];
                skus.isPlan = row.isPlan;
                _vue.api({
                  url: "/goods/skuisplan",
                  method: "post",
                  data: skus
                }).then(() => {
                  _vue.getSkuPlanList()
                  _vue.$message.success("更改完成")
                }).catch(() => {
                  _vue.$message.error("更改失败")
                })
              })
            },
          changeIsplan($index,row) {
            let _vue = this;
            this.$confirm('确定加入此SKU计划项?', '提示', {
              confirmButtonText: '确定',
              showCancelButton: false,
              type: 'warning'
            }).then(() => {
              let skus = _vue.list[$index];
              skus.isPlan = row.isPlan;
              _vue.api({
                url: "/goods/skuisplan",
                method: "post",
                data: skus
              }).then(() => {
                _vue.getSkuList()
                _vue.$message.success("更改完成")
              }).catch(() => {
                _vue.$message.error("更改失败")
              })
            })
          },
        skudetails(row){
          this.$router.push({path: '/opration/skudetails'})
          },
        getSkuList() {
          //查询SKU管理列表
          this.listLoading = true;
          this.api({
            url: "/goods/skulist",
            method: "get",
            params: this.listQuery
          }).then(data => {
            this.listLoading = false;
            this.list = data.list;
            this.totalCount = data.totalCount;
          })
        },
        getSkuPlanList() {
          //查询SKU计划项列表
          this.listLoading = true;
          this.api({
            url: "/goods/skuplanlist",
            method: "get",
            params: this.listQuery1
          }).then(data => {
            this.listLoading = false;
            this.list1 = data.list;
            this.totalCount1 = data.totalCount;
          })
        },
        handleSizeChange(val) {
          //改变每页数量
          this.listQuery.pageRow = val
          this.handleFilter();
        },
        handleCurrentChange(val) {
          //改变页码
          this.listQuery.pageNum = val
          this.getSkuList();
        },
        handleFilter() {
          //查询事件
          this.listQuery.pageNum = 1
          this.getSkuList()
        },
        getIndex($index) {
          //表格序号
          return (this.listQuery.pageNum - 1) * this.listQuery.pageRow + $index + 1
        },
        handleSizeChange1(val) {
          //改变每页数量
          this.listQuery1.pageRow = val
          this.handleFilter();
        },
        handleCurrentChange1(val) {
          //改变页码
          this.listQuery1.pageNum = val
          this.getSkuPlanList();
        },
        handleFilter() {
          //查询事件
          this.listQuery1.pageNum = 1
          this.getSkuPlanList()
        },
        getIndex1($index1) {
          //表格序号
          return (this.listQuery1.pageNum - 1) * this.listQuery1.pageRow + $index1 + 1
        },
        getParamer(){
          this.listQuery.goodCode=this.$route.params.id
          this.listQuery1.goodCode=this.$route.params.id
        },
      }
    }
  </script>
  