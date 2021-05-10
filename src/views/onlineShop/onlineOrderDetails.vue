
<template>
    <div class="app-container">
      <div class="filter-container">
        <el-form>
          <!-- <el-form-item>
                <el-input placeholder="请输入用户手机号" prefix-icon="el-icon-search" v-model="listQuery.userPhone" clearable style="width: 160px;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
            </el-form-item> -->
        </el-form>
      </div>
      <el-table :data="details" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
                highlight-current-row>
        <el-table-column align="center" label="序号" width="80">
          <template slot-scope="scope">
            <span v-text="getIndex(scope.$index)"> </span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="订单编号" prop="orderCode"  width="240"></el-table-column>
        <el-table-column align="center" label="订单类型" prop="orderType" style="width: 60px;"></el-table-column>
        <!-- <el-table-column align="center" label="支付状态" prop="payStatus" style="width: 30px;"></el-table-column> -->
        <el-table-column align="center" label="商品名称" prop="goodsName" width="200"></el-table-column>
        <el-table-column align="center" label="原价" style="width: 30px;">
            <template slot-scope="scope">
              <span v-text="scope.row.originPrice"></span>元
            </template>
        </el-table-column>
        <el-table-column align="center" label="折后价" width="100">
            <template slot-scope="scope">
              <span v-text="scope.row.discPrice"></span>元
            </template>
        </el-table-column>dddd
        <el-table-column align="center" label="实际支付价" width="100">
          <template slot-scope="scope">
            <span v-text="scope.row.payPrice"></span>元
          </template>
        </el-table-column>
        <el-table-column align="center" label="下单时间" prop="gmtCreated" width="260"></el-table-column>
        <el-table-column align="center" label="售卖机号" prop="deviceId" width="210"></el-table-column>
        <el-table-column align="center" label="货道号" prop="channelId" width="80"></el-table-column>
        <el-table-column align="center" label="管理" width="80" v-if="hasPerm('operationorder:orderrefund') || hasPerm('operationorder:orderdetails')">
          <el-table-column align="center" label="退款" v-if="hasPerm('operationorder:orderrefund')" width="120">
            <template slot-scope="scope">
                    <el-switch
                        active-value="Y"
                        inactive-value="N"
                        v-model="scope.row.refund" 
                        @change=changerecommend(scope.$index,scope.row)                
                    >
                    </el-switch>
            </template>
          </el-table-column>
          <el-table-column align="center" label="视频" v-if="hasPerm('operationorder:orderdetails')" width="280">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-search" @click="look(scope.row)">实时</el-button>
              <el-button type="primary" icon="el-icon-search" @click="orderdetails(scope.row)">回放</el-button>
            </template>
          </el-table-column>
       </el-table-column>
      </el-table>
    </div>
  </template>
  <script>
    import {mapGetters} from 'vuex'
    export default {
      data() {
        return {
          orderCode:"",
          details: [],//表格的数据
          listLoading: false,//数据加载等待动画
          listQuery: {
            pageNum: 1,//页码
            pageRow: 10,//每页条数
          },
        }
      },
      created() {
        this.getParamer()
        this.getList()
      },
      computed: {
        ...mapGetters([
          'userId'
        ])
      },
      methods: {
        changerecommend($index,row) {
              let _vue = this;
              this.$confirm('确定执行退款操作?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                _vue.api({
                  url: "/order/refund",
                  method: "post",
                  data: {orderDetailsId:row.orderDetailsId}
                }).then(() => {
                  _vue.getList()
                  _vue.$message.success("订单号为："+orderCode+"退款成功")
                }).catch(() => {
                  _vue.$message.error("订单号为："+orderCode+"的订单退款失败")
                })
              })
            },
        look(row){
              window.open("http://192.168.1.35:8083/templates/plugin")
        },
        orderdetails(row){
            window.open("http://192.168.1.35:8083/templates/video?time="+row.gmtCreated)
        },
         getParamer() {
            this.orderCode = this.$route.params.orderCode;
        },
        getList() {
          //查询列表
          this.listLoading = true;
          this.api({
            url: "/order/orderdetailslist",
            method: "get",
            params:this.orderCode
          }).then(data => {
            this.listLoading = false;
            this.details = data;
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
          this.getList();
        },
        handleFilter() {
          //查询事件
          this.listQuery.pageNum = 1
          this.getList()
        },
        getIndex($index) {
          //表格序号
          return (this.listQuery.pageNum - 1) * this.listQuery.pageRow + $index + 1
        }
      }
    }
  </script>
   