<style scoped>
.blue {
    color: #286EFF!important;
    cursor: pointer;
}
.app-container {
    padding: 4.6vh 2.6vw;
    color: #333!important
}
.blank{width: 100%;height: 5vh}
.el-card{height: 85vh;padding:2vw 2vw;border-radius:5px;border-radius:20px;overflow: auto}
.searchBox>div{width: 20%}
.searchBox1>div{width: 30%}
.selectWidth{width: 8vw}
.selectWidth1{width: 10vw}
.selectWidth2{width: 18vw}
.mb-2{margin-bottom: 2vh}
.mb-4{margin-bottom: 4vh}
.mb-3{margin-bottom: 3vh}
.mb-5{margin-bottom: 5vh}
.lgfont{font-size: 1.15vw}
.normalfont{font-size: 1.05vw}
.bigfont{font-size: 0.94vw;}
.smallfont{font-size: 0.83vw;}
.minifont{font-size: 0.73vw;}
.miniminifont{font-size: 0.63vw;}
.toolbar{margin-top: 3.5vh}
.text-center{text-align: center}
img{width: 5vw;height: 5vw;border-radius: 50%;}
.img1{width: 2.5vw;height: 2.5vw;border-radius: 50%;}
.bold{font-weight: bold}
.info-left{width: 40%}
.info-right{width: 60%;height: 5vw;position: relative}
.info-right .top{position: absolute;left: 0;top: 1.5vh;width: 100%}
.info-right .bottom{position: absolute;left: 0;bottom: 1vh;width: 100%}
.info-right .top>div,.info-right .bottom>div{width: 20%}
.info-left .info{width: 78%;height: 5vw;position: relative}
.info-left .info .name{font-size: 1.04vw;font-weight: bold;position: absolute;left: 0;top: 1vh;width: 100%}
.info-left .info .name .name1{display: inline-block}
.info-left .info .time{font-size: 1.04vw;font-weight: 400;margin-left: 1vw}
.info-left .info .detail{font-size: 1.04vw;position: absolute;left: 0;bottom: 1vh}
.detailStyle div{line-height:2vw;color: #333333}
.detailStyle div>span{color: #D0021B}
.detailStyle .title{line-height:3vw}
.userManagedialogClass{border-radius: 10px;width: 37vw!important;max-height: 90vh!important}
.userManagedDialog{width: 37vw!important;height: 82vh!important;padding: 3.7vh 3vw;color: #333;position: relative}
.userManagedDialog1{width: 26vw!important;height: 28vh!important;}
.userManagedialogClass1{width: 26vw!important}
.userManagedDialog .title{margin-bottom: 3.7vh;}
.userManagedDialog .bottom{width: 100%;height: 5.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 5vh}
.userManagedDialog .bottom .btn{cursor: pointer;width: 26%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 5.5vh}
.userManagedDialog .bottom .btn1{cursor: pointer;width: 26%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 5.5vh}
.iconfont{font-size:1.5vw;color: #fff}
.backBtn{background: #e1dede;width: 3.2vw;height: 3.2vw;box-shadow:0px 20px 20px -10px rgba(0, 0, 0, 0.15);z-index: 10;text-align: center;line-height: 3.9vw;border-radius: 0.5vw;margin-bottom: 0.5vh}
#backBtn{color: rgba(155, 155, 155, 1);position: fixed;top: 50%;right: 2vw;z-index: 10;cursor: pointer;}
.el-select-dropdown__item{font-size: 0.94vw;padding-right: 0}
.portrait{width: 2vw;height: 2vw;}
.portrait3{width: 3vw;height: 3vw;}
.portrait1{width: 25vw;height: 25vw;}
</style>
<style>
#userManage .el-radio-button__orig-radio:checked+.el-radio-button__inner{background-color: #286eff;border-color: #286eff;}
#userManage .el-dialog__header,#userManage .el-dialog__body,#userManage .el-dialog__footer{padding:0}
#userManage .el-date-editor .el-range-separator{padding: 0 0}
#userManage .el-radio-button__inner{padding: 0.5vw 0.9vw;font-size: 0.9375vw}
#userManage .el-tabs__nav-wrap::after{background-color: transparent}
.userManagedDialog.card .el-input__inner{padding: 0;text-align: center}
.el-card__body{height:100%;padding: 0;}
#userManage .el-pagination.is-background .el-pager li:not(.disabled).active{background-color: rgba(40, 110, 255, 1)}
#userManage .el-cascader,.userManagecascader .el-cascader-menu__item{font-size: 0.94vw!important;font-weight: 400}
#userManage .el-date-editor .el-range-input, .el-date-editor .el-range-separator{font-size: 0.94vw}
#userManage .el-tabs__item{font-size: 0.94vw;height: 5vh;line-height: 5vh;width: 7.8vw;text-align: center}
#userManage .el-tabs__item.is-active,#userManage .el-tabs__item:hover{color: #286EFF}
#userManage .el-tabs__active-bar{background-color: #286EFF}
#userManage .el-tabs__header{margin-bottom: 0}
#userManage .el-input__inner,#userManage .el-input__icon{height: 4.63vh;line-height: 4.63vh}
#userManage .el-input{font-size: 0.94vw}
#userManage .el-step__title.is-finish,#userManage .el-step__description.is-finish{color: #333333;line-height:1.3vw;font-size: 0.94vw;}
#userManage .el-step__title.is-wait{line-height:1.3vw;font-size: 0.94vw;}
#userManage .el-step__head.is-finish{color: #286EFF}
#userManage .el-radio-group{margin-bottom: 1vh!important}
.userManagedDialog .el-textarea__inner{height: 15vh}
.userManagedDialog .textarea{height: 15vh;border: 1px solid #DCDFE6;color: #333;padding: 5%;line-height: 1.3vw}
.userManagedDialog2 .el-input__inner{border: 0}
.operatorTableStyle{font-size: 0.94vw;color: #333}
.operatorTableStyle1{font-size: 0.83vw!important;color: #333}
.operatorTableStyle th>.cell{font-weight: 600}
.operatorCellStyle{font-size: 0.83vw;color: #333;height: 7.5vh;padding: 0!important}
.el-button--primary{background-color: rgba(40, 110, 255, 1)}
</style>
<template>
<div class="app-container" id="userManage">
        <div id="backBtn" class="minifont" @click="toBack"><div class="backBtn"><i class="el-icon-arrow-left iconfont"></i></div><div style="line-height:1vw">返回上级</div></div>  
        <el-card style="position:relative">
            <div class="flex-center-E justify-between mb-3">
            <div class="lgfont bold">报损详情</div>
            </div>
        <div class="flex-center-Y justify-between mb-3">
            <div class="flex-center-Y justify-between info-left">
                <div>
                    <img :src="userInfo.porprait" alt="">
                </div>
                <div class="info">
                    <div class="name flex-center-E"><span class="name1 limit-ellipsis">{{userInfo.nickname || '姓名'}} | {{userInfo.username}}</span></div>
                    <div class="detail">总报损数:{{userInfo.lossNum || 0}}</div>
                </div>
            </div>
        </div>
        <div class="flex-center-E justify-between mb-2">
        </div>
        <div>
          <el-table
            :data="lists"
            ref="table1"
            highlight-current-row 
            v-loading="listLoading" 
            style="width: 100%;"  
            stripe 
            header-row-class-name="operatorTableStyle" 
            cell-class-name="operatorCellStyle"
            row-key="skuCode"
            @expand-change="expandChange"
            :expand-row-keys="expands"
            @row-click="clickTable">
            <el-table-column type="expand">
                <template slot-scope="scope">
                    <el-table :data="scope.row.repairDetailsList" stripe style="width: 100%" header-row-class-name="operatorTableStyle operatorTableStyle1" cell-class-name="operatorCellStyle">
                      <el-table-column prop="rank_no" label="序号" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="replentCode" label="补货单号" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="batchCode" label="批次" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="lossNum" label="报损数量" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="lossPic1"
                                        label="上传图片"
                                        align="center">
                            <template slot-scope="scope">
                              <div class="flex-center-Y" style="justify-content: space-around;">
                                <el-popover placement="top"
                                            v-if="scope.row.lossPic1"
                                                trigger="click">
                                        <img :src="scope.row.lossPic1"
                                        class="portrait1" />
                                        <img :src="scope.row.lossPic1"
                                        slot="reference"
                                        class="portrait" />
                                </el-popover>
                                <el-popover placement="top"
                                            v-if="scope.row.lossPic2"
                                                trigger="click">
                                        <img :src="scope.row.lossPic2"
                                        class="portrait1" />
                                        <img :src="scope.row.lossPic2"
                                        slot="reference"
                                        class="portrait" />
                                </el-popover>
                                <el-popover placement="top"
                                            v-if="scope.row.lossPic3"
                                                trigger="click">
                                        <img :src="scope.row.lossPic3"
                                        class="portrait1" />
                                        <img :src="scope.row.lossPic3"
                                        slot="reference"
                                        class="portrait" />
                                </el-popover>
                                <span v-if="!scope.row.lossPic1 && !scope.row.lossPic2 && !scope.row.lossPic3">无</span>
                              </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="lossType" label="报损原因" style="width: 18%" align="center"></el-table-column>
                        <el-table-column prop="lossReason" label="详情描述" style="width: 18%" align="center">
                          <template slot-scope="scope">
                            <el-popover placement="right"
                                width="200"
                                trigger="hover">
                                    <div class="title">
                                        {{scope.row.lossReason}}
                                    </div>
                                    <span slot="reference" class="limit-2">{{scope.row.lossReason}}</span>
                            </el-popover>
                        </template>
                        </el-table-column>
                        <el-table-column prop="gmtCreated" label="时间" style="width: 18%" align="center"></el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column prop="skuCode" label="sku编号" align="center"></el-table-column>
            <el-table-column prop="orderCode" label="图片" align="center">
                <template slot-scope="scope">
                  <img :src="scope.row.skuPicture"
                                    class="portrait3" />
                </template>
            </el-table-column>
            <el-table-column prop="skuName" label="名称" align="center"></el-table-column>
            <el-table-column prop="skuUnit" label="规格" align="center"> </el-table-column>
            <el-table-column prop="lossNum" label="报损总数" align="center"> </el-table-column>
          </el-table>
          <div class="clearfix"></div>
        </div>
        </el-card>
    </div>
</template>
<script> 
import axios from 'axios';
import { mapGetters } from "vuex";
import { provinceAndCityData, CodeToText } from "element-china-area-data";
export default {
  data () {
    return {
      expands: [],
      lists: [
          {}
      ],
      params:{
        pageNum:1,
        pageRow:6
      },
      totalCount:0,
      listLoading: false,
      userInfo:{portrait:""},
    };
  },
  mounted () {
    this.getList()
    
  },
  methods: {
    toBack(){//返回上级
      this.$router.push({path:'/operation/replenishrecord'})
    },
    // 分页
    getList(){
        this.params.repairId=this.$route.params.repairId
        this.api({
                    url: "/ware/showRepairWorkLoss",
                    method: "post",
                    data: this.params
                }).then(data => {
                  this.lists=data.list.returnData.list
                  this.totalCount=data.list.returnData.totalCount
                  this.userInfo.nickname=data.nickname || ''
                  this.userInfo.username=data.username || ''
                  this.userInfo.lossNum=data.lossNum || ''
                  this.userInfo.porprait=data.porprait || ''
                  
                });
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
    expandChange(row, expandedRows) {
            
            //每次只能展开一行
            var that = this
            if (expandedRows.length) {
              that.expands = []
              if (row) {
                that.expands.push(row.skuCode)
              }
            } else {
              that.expands = []
            }
            //每次只能展开一行
            this.api({
                url: "/ware/showRepairWorkDetails",
                method: "Post",
               data: {
                    repairId:this.$route.params.repairId,
                    skuCode:row.skuCode
                }
            }).then(data => {
              this.$set(row, "repairDetailsList", data);
            })
        },
     clickTable(row,index,e){//点击行就展开
            //调用,table的方法,展开/折叠 行
            this.$refs.table1.toggleRowExpansion(row)
        },
  },
  computed: {
        ...mapGetters(["userName","userId"])
    },
}
 
</script>