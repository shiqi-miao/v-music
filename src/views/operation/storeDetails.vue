<template>
  <div class="app-container">
    <el-container>
      <el-aside width="320px">
        <div class="left-up">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>门店信息</span>
                </div>
                 <el-header id="el-header-store">
                    <el-row>
                        <el-col :span="6"> 门店编号:</el-col>
                        <el-col :span="18">{{storeInfo.storeCode }}</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"> 门店名称:</el-col>
                        <el-col :span="18">{{storeInfo.storeName }}</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"> 门店类型:</el-col>
                        <el-col :span="18">{{storeInfo.storeType }}</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">门店地址:</el-col>
                        <el-col :span="18">{{storeInfo.location }}</el-col>
                    </el-row>
                        <el-col :span="6"> 创建时间:</el-col>
                        <el-col :span="18">{{storeInfo.gmtCreated }}</el-col>
                </el-header>
              </el-card>
        </div>
        <div class="left-down">
            <el-card v-for="(list,index) in videolists" :key="index" style="margin-top: 10px;" @click.native="lookIP(list.ipLocation)">
                <img v-if="list.monitoringLocation" :src="list.monitoringLocation" alt="这里是一个图片" class="image">
                <div style="padding: 14px;">
                  <div  class="bottom clearfix">
                   编号:{{list.ipLocation}}
                  <el-button type="primary"  icon="el-icon-search" plain size="mini" style="float:right;margin-top:-6px;">查看</el-button>
                  </div>
                </div>
            </el-card>
        </div>
      </el-aside>
      <el-container>      
      <el-header id="el-header">
        <el-row>
                <el-col :span="12">
                    <el-card>
                        <div slot="header" class="clearfix">
                        <span>总销售净利润：{{sellInfo.Salesnetprofit}} 元 / 总销售额：{{sellInfo.Saleroom}} 元 / 总销售单量：{{sellInfo.OrderNum}} 单 </span>
                        </div>
                        <div class="right-top">
                          <span> 昨日销售额：{{sellInfo.yessaleroom }} 元</span>
                          <span> 昨日净利润：{{sellInfo.yesnetprofit }} 元</span>
                          <span> 昨日订单总数：{{sellInfo.yesOrderNum }} 单</span>
                          <span> 昨日支付订单数：{{sellInfo.yespayorderNum }} 单</span>
                          <span> 昨日未支付单数：{{sellInfo.yesnopaynum }} 单</span>
                          <span> 昨日退款额：{{sellInfo.yesrefundprofit }} 元</span>
                          <span> 退款单数：{{sellInfo.yesrefundnum }} 单</span>
                        </div>
                      </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card>
                        <div slot="header" class="clearfix">
                          <span>今日销售统计</span>
                        </div>
                          <div class="right-top">
                            <span> 今日净利润：{{sellInfo.todaynetprofit }} 元</span>
                            <span>今日销售额：{{sellInfo.todaysaleroom }} 元</span>
                            <span>今日订单数：{{sellInfo.todayordernum }} 单</span>
                            <span>今日支付订单数：{{sellInfo.todaypayorderNum }} 单</span>
                            <span> 今日未支付订单数：{{sellInfo.todaynopaynum }} 单</span>
                            <span>今日退款额：{{sellInfo.todayrefundprofit }} 元</span>
                            <span>退款单量：{{sellInfo.todayrefundnum }} 单</span>
                          </div>
                      </el-card>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
          <div class="sum-line">
              <el-tag style="float:left">该门店售卖机数：{{storeInfo.vendNum}} 台</el-tag>
              <el-tag style="float:left;margin-left:10px;" @click.native="setTimeStart">设置生鲜促销开始</el-tag>
              <el-tag style="float:left;margin-left:10px;" @click.native="sentQ">推送优惠券</el-tag>
              <el-button type="primary" icon="el-icon-search" @click="checkAllRecord" size="mini" style="margin-bottom:8px;float:right"> 查看订单详情</el-button>  
          </div> 
          <el-dialog title="订单详情" :visible.sync="dialogTableVisible">
              <!-- <el-form>
                <el-form-item>
                      <el-input placeholder="请输入订单编号" size="mini" prefix-icon="el-icon-search" v-model="listQuery.orderCode" clearable style="width: 160px;"></el-input>
                      <el-button type="primary" icon="el-icon-search" size="mini" @click="getorderList">搜索</el-button>
                  </el-form-item>
              </el-form> -->
            <el-table :data="gridData" @expand-change="handleDetail" border style="width: 100%" height="500">
              <el-table-column type="expand"  width="25"> 
                <template>
                    <el-table :data="orderdetailslist" v-loading="listLoading" border style="width: 100%" accordion=""> 
                      <el-table-column prop="orderCode" label="订单编号"> </el-table-column> 
                      <el-table-column prop="orderType" label="订单类型"> </el-table-column> 
                      <el-table-column prop="payStatus" label="订单状态 "> </el-table-column> 
                      <el-table-column prop="goodsName" label="商品名"> </el-table-column> 
                      <el-table-column prop="originPrice" label="原价"> </el-table-column> 
                      <el-table-column prop="discPrice" label="折扣价"> </el-table-column> 
                      <el-table-column prop="channelId" label="货道号"> </el-table-column> 
                      <el-table-column prop="gmtCreated" label="交易时间" width="180"></el-table-column>
                  </el-table>
                </template>
              </el-table-column>
              <el-table-column property="orderCode" label="流水编号" width="270"></el-table-column>
              <el-table-column property="userName" label="用户姓名" width="200"></el-table-column>
              <el-table-column property="userPhone" label="用户手机号" width="160"></el-table-column>
              <el-table-column property="gmtCreated" label="消费时间" width="190"></el-table-column>
              <el-table-column property="payPrice" label="支付金额" width="130"></el-table-column>
              <el-table-column property="payCode" label="支付单号" width="270"></el-table-column>
              <el-table-column property="isPay" label="是否支付" width="130"></el-table-column>
              <el-table-column property="vendCode" label="售卖机编号" width="210"></el-table-column>
              <!-- <el-table-column property="orderRemark" label="管理员备注"></el-table-column> -->
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
          </el-dialog>
          <template>
            <el-table :data="vendList" stripe="" v-loading="listLoading" style="width: 100%" @expand-change="handleChange"> 
              <el-table-column type="expand"> 
                <template> 
                  <el-table :data="aisleList"  v-loading="listLoading" border="" style="width: 100%"> 
                    <el-table-column prop="aisleCode" label="货道编号"> 
                    </el-table-column> 
                    <el-table-column prop="aisleColum" label="货道行列标识" w=""> 
                    </el-table-column> 
                    <el-table-column prop="type_name" label="货道体积"> 
                    </el-table-column> 
                    <el-table-column prop="aisleSku" label="关联商品sku"> 
                    </el-table-column> 
                    <el-table-column prop="aisleStatus" label="状态"> 
                    </el-table-column> 
                    <el-table-column label="图片"> 
                      <template slot-scope="scope"> 
                        <img :src="scope.row.appPicture" width="40" height="40" class="portrait" /> 
                      </template> 
                    </el-table-column> 
                    <el-table-column label="库存量"> 
                      <template slot-scope="scope"> 
                        <span v-text="scope.row.nowStock"></span>/
                        <span v-text="scope.row.stockNum"></span> 
                      </template> 
                    </el-table-column> 
                    <el-table-column label="管理"> 
                      <template slot-scope="scope"> 
                        <el-button type="primary" @click="updateAisleSkug(scope.$index)" size="mini">
                          更改商品
                        </el-button> 
                      </template> 
                    </el-table-column> 
                  </el-table> 
                </template> 
              </el-table-column> 
              <el-table-column prop="machineCode" label="设备编号"> 
              </el-table-column> 
              <el-table-column prop="typeName" label="设备类型"> 
              </el-table-column> 
              <el-table-column prop="machineStatus" label="设备状态"> 
              </el-table-column> 
              <el-table-column prop="aisleNumber" label="货道数"> 
              </el-table-column> 
              <!-- <el-table-column
                            prop="vendLocation"
                            label="设备地址"
                            :show-overflow-tooltip="true"
                            width="100"
                            >
                          </el-table-column> --> 
              <el-table-column label="销售额"> 
                <template slot-scope="scope"> 
                <span v-text="scope.row.saleRoom"></span>元 
                </template> 
              </el-table-column> 
              <el-table-column prop="saleNum" label="订单量"> </el-table-column> 
              <el-table-column prop="refundprofit" label="退款额"> </el-table-column>
              <!-- <el-table-column fixed="right" label="操作"  width="200">
                  <template slot-scope="scope">
                    <el-button size="mini" primary @click="checkSku(scope.$index)">促销计划</el-button>
                  </template>
              </el-table-column> -->
            </el-table>
            <el-dialog title="促销计划" :visible.sync="isShowRelatedSalesModal" width="80%" center>   
              <el-form :model="data"  label-width="100px" style="width:100%;paddingLeft:20px" p>
                <el-form-item label="计划类型" v-model="data.discountType">{{data.discountType}}</el-form-item>
                <el-form-item label="计划名称" v-model="data.discountName">
                    {{data.discountName}}
                </el-form-item>
                <el-form-item label="自贩机">
                    
                </el-form-item>
                <el-form-item label="促销开始时间" v-if="data.discountType=='折扣促销'"> 
                  
                </el-form-item>       
                <el-form-item label="限购时间"  v-if="data.discountType=='折扣促销'">
                   
                </el-form-item>
                <el-form-item label="促销时间" v-else> 
                  
                    <el-table  :data="data.time" loading-text tooltip-effect="dark" style="width: 70%">
                        <el-table-column prop="date" label="时间点" width="200"> </el-table-column>
                        <el-table-column prop="time" label="时间" width="500"> </el-table-column>
                    </el-table>
                </el-form-item> 
                <el-form-item label="可供货品信息">
                  <template>
                    <el-table  :data="data.tableData3" loading-text tooltip-effect="dark" style="width: 70%">
                        <el-table-column prop="aisleSku" label="sku" width="120" >&nbsp;&nbsp;&nbsp;</el-table-column>
                        <el-table-column prop="goodsName" label="商品名称" width="120"></el-table-column>
                        <el-table-column prop="skuSpecification" label="规格" show-overflow-tooltip></el-table-column>
                        <el-table-column prop="skuUnits" label="单位" show-overflow-tooltip></el-table-column>
                        <el-table-column prop="salePrice" label="促销价" show-overflow-tooltip></el-table-column>
                    </el-table>
                  </template>
                </el-form-item>              
              </el-form> 
            </el-dialog>
          </template>
        </el-main>
      </el-container> 
    </el-container>  
    <el-dialog title="更改sku" :visible.sync="dialogFormVisible" width="70%">
        <el-form class="small-space demo-form-inline" :model="AsileSku" label-position="left" label-width="120px" :inline="true">
          <el-form-item label="商品分类">
            <template>
              <el-select v-model="AsileSku.value" placeholder="请选择" @change="handleChangeFa">
                <el-option
                  v-for="item in options"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeId"
                  >
                </el-option>
              </el-select>
            </template>
             <!-- <el-cascader size="large" loading-text :options="options" style="width: 100%;" v-model="selectedOptions" @change="handleChangeFa"></el-cascader> -->
          </el-form-item><br />
          <el-form-item label="可供货品信息">
            <template>
              <el-table  :data="skuData" loading-text   highlight-current-row style="width: 100%;textAlign:center"  @current-change="handleSkuCurrentChange">
                <el-table-column type="index" width="120" label="序号" align="center" ></el-table-column>
                <el-table-column prop="skuCode" label="sku" width="120" >&nbsp;&nbsp;&nbsp;</el-table-column>
                <el-table-column prop="goodsName" label="商品名称" width="120"></el-table-column>
                <el-table-column prop="skuSpecification" label="规格" show-overflow-tooltip></el-table-column>
                <el-table-column prop="skuUnits" label="单位" show-overflow-tooltip></el-table-column>
              </el-table>
            </template>
          </el-form-item>     
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="text-align:right" >
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="success" @click="updateAisleSku">保 存</el-button>
            </div>
        </div>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [],
      totalCount: 0, //分页组件--数据总条数
      gridData: [], //表格的数据
      listLoading: false, //数据加载等待动画
      listQuery: {
        pageNum: 1, //页码
        pageRow: 50, //每页条数
        orderCode: "", //订单编号
        storeCode: ""
      },
      skuCode:'',
      isShowRelatedSalesModal:false,
      dialogTableVisible: false,
      dialogStatus: 'update',
      dialogFormVisible: false,
      textMap: {
            update: '货道商品SKU编辑',
          },
      videolists: [
        {
          id: "",
          monitoringLocation: "",
          ipLocation: ""
        }
      ],
      options:[],
      selectedOptions:[],
      skuData:[],
      storeCode: "",
      storeInfo: {
        storeCode: "",
        storeName: "",
        storeType: "",
        location: "",
        gmtCreated: "",
        vendNum: ""
      },
      data:[],
      sellInfo: {
        Salesnetprofit: "",//总销售净利润
        Saleroom:"",//总销售额
        OrderNum:"",//总订单量
        todaysaleroom:"",//今日销售额
        todaynetprofit: "",//今日净利润
        todayOrderNum: "",//今日订单数
        todaypayorderNum:"",//今日支付订单数
        todaynopaynum: "",//今日未支付订单数
        todayrefundprofit:"",//今日退款额
        todayrefundnum: "",//今日退款数
        yessaleroom:"",//昨日销售额
        yesnetprofit: "",//昨日净利润
        yesOrderNum: "",//昨日订单总数
        yespayorderNum:"",//昨日支付订单数
        yesnopaynum: "",//昨日未支付订单数
        yesrefundprofit:"",//昨日退款额、
        yesrefundnum: "",//昨日退款数
      },
      AsileSku:{ 
      },
      vendList: [],
      aisleList: [],
      orderdetailslist:[],
    };
  },
  created() {
    this.getParamer();
    this.getstoreInfo();
    this.getsaleNum();
    this.getvendaisleList();
    this.getvideolist();
  },
  methods: {
    lookIP(id){
        // window.open("http://v.robooot.com:8083/templates/plugin?deviceIds="+id)
        window.open("https://m.robooot.com:1443/templates/plugin?deviceIds="+id)
        // window.open("http://192.168.1.35:8083/templates/plugin?deviceIds="+id)
    },
    setTimeStart(){
         this.api({
          url: "/promotion/updatetoday",
          method: "post",
        }).then(data => {
          if(data.result == 0){
              this.$message({
                  message: '设置成功',
                  type: 'success',
              });
          }else{
              this.$message.error("设置失败");
          }
        });     
    },
    sentQ(){
         this.api({
          url: "/promotion/pushCoupon",
          method: "post",
        }).then(data => {
          if(data.result == 0){
              this.$message({
                  message: '推送成功',
                  type: 'success',
              });
          }else{
              this.$message.error("推送失败");
          }
        });     
    },
    getsaleNum(){
        this.api({
          url: "/store/profitinfo",
          method: "get",
          params: this.storeCode
        }).then(data => {
          this.listLoading = false;
          this.sellInfo = data.list[0];
        });
    },
    updateAisleSku() {
          //修改货道商品SKU信息
          this.AsileSku.channelId = this.AsileSku.aisleCode
          this.AsileSku.aisleSku = this.skuCode
          let _vue = this;
          this.api({
            url: "/store/updateaislegoods",
            method: "post",
            data: this.AsileSku
          }).then(() => {
            let msg = "修改成功";
            this.dialogFormVisible = false
            this.$message({
              message: msg,
              type: 'success',
              
              // onClose: () => {
              //   _vue.getvendaisleList();
              // }
            });
            this.getvendaisleList()
            
          }) 
        },
      updateAisleSkug($index) {
        this.AsileSku = this.aisleList[$index]
        this.dialogFormVisible = true 
        this.api({
        url: "/store/aislegoods",
        method: "get",
      }).then(data => {        
        this.listLoading = false;
        this.options = data.list;
      });
      },
    getvideolist() {
      this.api({
        url: "/store/videolist",
        method: "get",
        params: this.storeCode
      }).then(data => {        
        this.listLoading = false;
        this.videolists = data.list;
      });
    },
    getorderList() {
      //查询该门店消费列表
      this.listQuery.storeCode = this.storeCode;
      this.listLoading = true;
      this.api({
        url: "/order/orderlist",
        method: "get",
        params: this.listQuery
      }).then(data => {
        this.listLoading = false;
        this.gridData = data.list;
        this.totalCount = data.totalCount;
      });
    },
    handleChange(row, expandedRows) {
      // el-table__expand-icon
      // document.getElementsByClassName("el-table__expand-icon")[0]
      //查询该门店下售卖机货道列表
      this.listLoading = true;
      this.api({
        url: "/store/aislelist",
        method: "get",
        params: row.machineCode
      }).then(data => {
        this.listLoading = false;
        this.aisleList = data.list;
      });
    },
    handleDetail(row, expandedRows) {
      this.listLoading = true;
      this.api({
        url: "/order/orderdetailslist",
        method: "get",
        params: row.orderCode
      }).then(data => {
        this.listLoading = false;
        this.orderdetailslist = data;
      });
    },
    getstoreInfo() {
      //查询该门店信息
      this.listLoading = true;
      this.api({
        url: "/store/info",
        method: "get",
        params: this.storeCode
      }).then(data => {
        this.listLoading = false;
        this.storeInfo = data.list[0];
      });
    },
    getvendaisleList() {
      //查询该门店下售卖机列表
      this.listLoading = true;
      this.api({
        url: "/store/vendlist",
        method: "get",
        params: this.storeCode
      }).then(data => {
        this.listLoading = false;
        this.vendList = data.list;
      });
    },
    handleSizeChange(val) {
      //改变每页数量
      this.listQuery.pageRow = val;
      this.handleFilter();
      this.getorderList()
    },
    handleCurrentChange(val) {
      //改变页码
      this.listQuery.pageNum = val;
      this.getorderList()
    },
    handleFilter() {
      //查询事件
      this.listQuery.pageNum = 1;
    },
    getIndex($index) {
      //表格序号
      return (this.listQuery.pageNum - 1) * this.listQuery.pageRow + $index + 1;
    },
    getParamer() {
      this.storeCode = this.$route.params.id;
    },
    handleChangeFa(value){
      this.skuData = [];
      for(let i in this.options){
          if(this.options[i].typeId == value){
            this.skuData= this.options[i].typegoods;
          }
      }

    },
    handleSkuCurrentChange(val){
      this.skuCode = val.skuCode;
    },
    checkSku(index){
        this.isShowRelatedSalesModal = true;
    },
    checkAllRecord(){
      this.dialogTableVisible = true
      this.getorderList()
    } 
  }
};
</script>

<style scope>
.box-card {
  text-align: left;
  height: 100%;
}
.el-header {
  color: #333;
  text-align: left;
  line-height: 60px;
}
#el-header {
  height: 300px !important;
  font-size: 13px;
  line-height: 24px;
}
#el-header-store{
  font-size: 13px;
  line-height: 20px;
  padding:0;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  height: calc(100vh - 50px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 30px;
  overflow-y: scroll;
}
.right-top span{
  display: inline-block;
  width: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* --------------card----------------- */

.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.el-button {
  margin-top: 9px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    line-height: 60px;
    text-align: center;
    box-sizing: border-box;
}
/* -------------/card----------------------- */
/* -------------restyle----------------------- */
.el-col {
  line-height: 40px;
}
.el-collapse .el-collapse-item__header {
  font-size: 14px;
}
.el-table th {
  text-align: center;
}
.el-dialog{
  width:80%;
}
/* -------------/restyle----------------------- */
</style>
