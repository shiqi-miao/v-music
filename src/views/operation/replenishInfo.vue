
<style scoped>
.input-with-select {
    width: 350px;
}
#marketInfo{position: relative;height: 90vh}
.mask{width: 100vw;height: 100vh;position:fixed;top:0;left:0;background: rgba(0, 0, 0, 0.69);z-index: 10}
.mask .close{width: 2vw;height: 2vw;position: absolute;top: 9vh;right: 5vw;cursor: pointer;}
.mask .close img{width: 2vw;height: 2vw}
.maskInner{width: 100%;position: absolute;bottom: 0;left: 0;z-index: 12}
.maskInnerTop{width: 100%;height:56vh;position: absolute;bottom: 25vh;left: 0;z-index: 11;text-align: center}
.maskInnerTop img{width: 20vw;height: 28vw}
.storeList{height:25vh;position: relative;}
.swiperImg{width:7vh;height: 7.5vh}
.append-input .el-input--suffix {
    width: 80px !important;
}
.upload-img {
    width: 100%;
    /* height: 100%; */
}
.el-form-item__content{line-height:20px}
.upload-block .el-upload-dragger {
    width: 180px;
    height: 180px;
}
.upload-block-2 .el-upload-dragger {
    width: 200px;
    height: 300px;
}
.grey {
    padding: 10px 6px;
    color: #999999;
}
.sku-form {
    padding: 0 30px;
}
.sku-form .el-form-item__label {
    width: 110px !important;
}
.blue {
    color: #66b1ff;
    cursor: pointer;
    padding: 10px 6px;
}
.create .el-input {
    width: 180px;
}
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
.red{color: #D62F2F}
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
.label {
    display: inline-block;
    line-height: 36px;
    font-weight: 600;
}
.stock-num {
    padding: 10px;
    cursor: pointer;
}
.msg {
    padding: 0 6vw;
}
.center {
    text-align: center;
}
.brandtype {
    margin-right: 10px;
    background: #ffffff;
    color: #888888;
    cursor: pointer;
}
.brandtype.active {
    background: rgba(64, 158, 255, 0.1);
    color: #409eff;
    border: 1px solid rgba(64, 158, 255, 0.2);
}
.text-center{text-align: center}
.bigfont{font-size: 16px;}
.bold{font-weight: bold}
.appeal .skuimg img{width: 5vw;height: 5vw;border-radius: 0;margin-right: 1vw}
.appeal .info{position: relative;width: 15vw;height: 5vw}
.appeal .info .name{font-size: 0.83333vw;font-weight: bold;text-align: left;line-height: 1}
.appeal .info .note{position: absolute;bottom: 1.5vw;left: 0;color: #999;font-size:0.72vw;padding: 0}
.appeal .info .note1{position: absolute;bottom: 0;left: 0;color: #999;font-size:0.72vw;}
.appeal .reason img{width:0.72vw;height:0.72vw;font-size:0.72vw;margin-right: 0.5vw}
.appeal .reason{font-size:0.72vw;margin-bottom: 1vh}
.appeal .appealImg div{width: 5vw;height:5vw;margin-right: 1vw}
.appeal .appealImg img{border-radius: 0;width: 100%;height: 100%}
.appeal .reasonDetail{width: 100%;height: 15vh;border: 1px solid #c0c4cc;margin-top: 2vh;padding: 1vh 0.5vw;font-size: 0.625vw;line-height: 1.5}

.iconfont{font-size:1.5vw;color: #fff}
.backBtn{background: #e1dede;width: 3.2vw;height: 3.2vw;box-shadow:0px 20px 20px -10px rgba(0, 0, 0, 0.15);z-index: 10;text-align: center;line-height: 3.9vw;border-radius: 0.5vw;margin-bottom: 0.5vh}
#backBtn{color: rgba(155, 155, 155, 1);position: fixed;top: 50%;right: 2vw;z-index: 10;cursor: pointer;font-size: 0.73vw;}
#marketInfo >>> .input-with-select .el-select .el-input {
    width: 120px;
} 
</style>

<style>
.el-dialog__headerbtn{z-index: 10;}
#marketInfo .appealDialog .el-textarea__inner{height: 12vh;border: 0}
#marketInfo .appealDialog .el-radio .el-radio__label{font-size: 0.83333vw;font-weight: 400;color: #333}
#marketInfo .appealDialog .el-radio__input.is-checked .el-radio__inner{border-color: #286EFF; background: #286EFF;}
#marketInfo .el-radio+.el-radio{margin-left: 0!important;}
#marketInfo .el-select .el-input {
    width: 190px;
} 
#marketInfo label{
    color: #666666;
    font-size: 14px;
    font-weight: 600;
}
#marketInfo .swiper-slide-active .innerbox{
    background: #ffffff!important;
    height: 7.5vh!important;
    width: 7vh!important;
    color: #fff!important
  }
  .search-line{margin-bottom: 20px;}
  #marketInfo .swiper-slide-active .innerbox .activeImg{position: absolute;top: 50%;left:50%;transform: translate(-50%,-50%);height: 7.5vh!important; width: 7vh!important;}
  .swiper-container,.swiper-father{width: 80%;margin: 0 auto}
  .swiper-father{top: 25%;position: absolute;width: 100%}
   #marketInfo .swiper-pagination{display: none;}
   #marketInfo .swiper-wrapper{
       align-items: flex-end;
       /* align-items: center;
        -webkit-align-items: center;
        justify-content: center;
        -webkit-justify-content:center; */
   }
   .swiper-button-next{
      background-image: url("../../assets/operaion/arrow-r.png");
      background-size: 4vw 4vw;
      width: 4vw;
      height: 4vw;
      right: 20vw;
      top: -35vh;
      z-index: 12
  }
  .swiper-button-prev{
      background-image: url("../../assets/operaion/arrow-l.png");
      background-size: 4vw 4vw;
      width: 4vw;
      height: 4vw;
      left: 20vw;
      top: -35vh;
      z-index: 12
  }
</style>
<template>
    <div class="app-container" id="marketInfo">
        <div v-show="$route.params.gmtFlash1 && $route.params.gmtFlash1!=':gmtFlash1'" id="backBtn" @click="toBack"><div class="backBtn"><i class="el-icon-arrow-left iconfont"></i></div><div style="line-height:1vw">返回上级</div></div>
                <div class="search-line">
                    <el-input placeholder="请输入内容"
                            v-model="searchValue"
                            class="input-with-select">
                        <el-select v-model="selectedTab"
                                placeholder="请选择"
                                slot="prepend">
                            <el-option v-for="item in selectTabs"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-input>
                    <!-- <label>补货状态：</label>
                    <el-select v-model="params.cpStatus" placeholder="请选择" clearable>
                        <el-option v-for="(item,i) in purchaseOrderfilters" :key="i" :label="item.text" :value="item.value">
                        </el-option>
                    </el-select> -->
                    <label>机器：</label>
                    <el-select v-model="params.machineCode" placeholder="请选择" clearable>
                        <el-option v-for="item in machineSelectTabs" :key="item.machineCode" :label="item.machineName" :value="item.machineCode">
                        </el-option>
                    </el-select>
                    <br><br>
                    <label>时间段：</label>
                    <el-date-picker
                        v-model="params.startTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择开始日期">
                    </el-date-picker>
                    <span style="color:#DCDFE6">&nbsp;-&nbsp;</span>
                    <el-date-picker
                        v-model="params.endTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择结束日期">
                    </el-date-picker>
                    <el-button type="primary" icon="el-icon-search" @click="search">搜 索</el-button>
                </div>
                <el-table :data="tableData"
                  ref="refTable" 
                  style="width: 100%"
                  stripe
                  v-loading="listLoading"
                  element-loading-text="拼命加载中"
                  row-key="cpCode">
                    <el-table-column prop="skuCode" label="SKU编号" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="skuName" label="SKU名称" style="width: 18%" align="center"></el-table-column>
                    <el-table-column prop="skuPicture"
                                    label="SKU图片"
                                    align="center" :key="Math.random()">
                        <template slot-scope="scope">
                            <img :src="scope.row.skuPicture"
                                width="40"
                                height="40"
                                class="portrait" />
                        </template>
                    </el-table-column>
                    <el-table-column label="补货数量" style="width: 18%" align="center">
                        <template slot-scope="scope">
                                {{scope.row.cpNum || 0}} 件
                        </template> 
                    </el-table-column>
                    <el-table-column prop="machineName" label="补货机器" style="width: 18%" align="center"></el-table-column> 
                    <el-table-column prop="gmtCreated" label="补货时间" style="width: 18%" align="center"></el-table-column>
                </el-table>
                <div class="pagination-line">
                    <el-pagination background
                                @size-change="handleSizeChange"
                                @current-change="currentChange"
                                :current-page="params.pageNum"
                                :page-size="params.pageRow"
                                :total="totalCount"
                                :page-sizes="[10, 20, 50, 100]"
                                layout="total, sizes, prev, pager, next, jumper">
                    </el-pagination>
                </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            searchValue: "",
            selectedTab: "skuName",
            selectTabs: [
                {
                    name: "SKU编号",
                    id: "skuCode"
                },
                {
                    name: "SKU名称",
                    id: "skuName"
                }
            ],
//合并
            listLoading: false,
            totalCount: 0,
            tableData: [],
            params: {
                pageRow: 20,
                pageNum: 1
            },
            storeSelectTabs:[],
            machineSelectTabs:[],
            storeData:"",
            props:{value:"storeCode",label:"storeName",children:"vendInfo"},
            gmtFlash:"",
            selectData:"",
            selectBill:{repairId:""}//选择的补货单
        };
    },
    computed: {
        ...mapGetters(['userName',"userId","stockType"])
    },
    created() {
        if(this.$route.params.gmtFlash1 && this.$route.params.gmtFlash1!=':gmtFlash1'){//从用户订单详情页点查看补货信息跳转过来的
            this.activeName="repair"
            this.gmtFlash=this.$route.params.gmtFlash1+' '+this.$route.params.gmtFlash2
            this.channelid=this.$route.params.channelid
        }
        this.getList()
        this.getMachineList()
    },

    methods: {
        delBill(row){//删除补货单
            this.$confirm('是否确定删除该补货单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/ware/deleteRepairOrder",
                        method: "post",
                        data: {
                            wareoutReplentId :row.wareoutReplentId 
                            }
                    }).then(data => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getList()
                    });
                
                }).catch(() => {
                        
                });
        },
        toBack(){//返回上级
            this.$router.go(-1)
        },
         search() {
             if (!this.selectedTab) {
                this.selectedTab = "skuName";
            }
            this.params.skuCode=""
            this.params.skuName=""
            this.params[this.selectedTab] = this.searchValue;
            this.params.pageNum=1
            this.getList();
        },
        handleClick(){
            this.params={
                pageRow: 20,
                pageNum: 1
            }
            this.selectedTab='skuName'
            this.searchValue= ""
            this.getList()
        },
        clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.refTable.toggleRowExpansion(row)
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
        getList() {
            this.listLoading = true;
            this.params.username=this.userName
            this.params.manageId=this.userId
            this.params.channelid=this.channelid
            this.api({
                url: "/inventory/cpListTo",
                method: "post",
                data: this.params
            }).then(data => {
                this.tableData = data.list;
                for (let i in data.list) {
                    data.list[i].repairDetailsList = data.list[i].list;
                }
                this.totalCount = data.totalCount;
                this.listLoading = false;
            });
        },
        getMachineList(){
          this.api({
              url: "/inventory/cpMachineList",
              method: "post", 
              data:{
                  manageId:this.userId
              }
            }).then(data => {
                this.machineSelectTabs =  data

            }).catch((e)=>{

            })
        },
        selectMachine(){
            this.params.storeCode=this.storeData[0]
            this.params.machineCode=this.storeData[1]
        },
    }
};
</script>

