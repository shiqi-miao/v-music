
<template>
    <div class="app-container">
      <div class="filter-container">
        <el-form>
          <el-form-item>
                <el-input placeholder="请输入订单编号" prefix-icon="el-icon-search" v-model="listQuery.orderCode" clearable style="width: 160px;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
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
        <el-table-column align="center" label="流水编号" prop="orderCode" style="width: 60px;"></el-table-column>
        <el-table-column align="center" label="用户姓名" prop="userName" style="width: 60px;"></el-table-column>
        <el-table-column align="center" label="用户手机号" prop="userPhone" style="width: 80px;"></el-table-column>
        <el-table-column align="center" label="订单类型" prop="orderType" style="width: 35px;"></el-table-column>
        <el-table-column align="center" label="订单状态" prop="orderStatus" style="width: 30px;"></el-table-column>
        <el-table-column align="center" label="下单时间" prop="gmtCreated" style="width: 30px;"></el-table-column>
        <el-table-column align="center" label="支付单号" prop="payCode" style="width: 30px;"></el-table-column>
        <el-table-column align="center" label="支付金额" style="width: 30px;">
          <template slot-scope="scope">
            <span v-text="scope.row.payPrice"></span>元
          </template>
        </el-table-column>
        <el-table-column align="center" label="管理员备注" prop="orderRemark" style="width: 60px;"></el-table-column>
        <el-table-column align="center" label="管理" width="150" v-if="hasPerm('operationorder:orderrefund') || hasPerm('operationorder:orderdetails')">
          <el-table-column align="center" label="退款" v-if="hasPerm('operationorder:orderrefund')" width="150">
            <template slot-scope="scope">
                    <el-switch
                        active-value="Y"
                        inactive-value="N"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        v-model="scope.row.goodstatus" 
                        @change=changerecommend(scope.$index,scope.row)                
                    >
                    </el-switch>
            </template>
          </el-table-column>
          <el-table-column align="center" label="详情" v-if="hasPerm('operationorder:orderdetails')" width="300">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-search" @click="orderdetails(scope.row)">查看</el-button>
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
    </div>
  </template>
  <script>
    import {mapGetters} from 'vuex'
    export default {
      data() {
        return {
          totalCount: 0, //分页组件--数据总条数
          list: [],//表格的数据
          listLoading: false,//数据加载等待动画
          listQuery: {
            pageNum: 1,//页码
            pageRow: 10,//每页条数
            wgcode: "",//商品编号
            wgname: "",//商品名称
          },
        }
      },
      created() {
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
                let orderCode = _vue.list[$index].orderCode;
                _vue.api({
                  url: "/order/refund",
                  method: "post",
                  data: orderCode
                }).then(() => {
                  _vue.getList()
                  _vue.$message.success("订单号为："+orderCode+"退款成功")
                }).catch(() => {
                  _vue.$message.error("订单号为："+orderCode+"的订单退款失败")
                })
              })
            },
        orderdetails(row){
          this.$router.push({path: '/orderDetails'})
          },
        getList() {
          //查询列表
          this.listLoading = true;
          this.api({
            url: "/order/orderlist",
            method: "get",
            params: this.listQuery
          }).then(data => {
            this.listLoading = false;
            this.list = data.list;
            this.totalCount = data.totalCount;
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
   