<style lang="scss" scoped>
#layout{margin: 0 auto;}
.dimen{width: 180px;height: 4vh;
  .el-input__suffix-inner{line-height: 4.5vh;}
}
.time{
  position:relative;
  .icon{position: absolute;right: 10px;top: 8px;z-index: 99;}
}
.icon{width:20px;height:20px;}
.showInput{width: 50%;}
.btn,.btn1{font-size: 14px;line-height:2.08vw;height:2.08vw;border: 1px solid #409EFF;width: 5.73vw;color: #409EFF;text-align: center;border-radius: 4px;cursor: pointer;}
.btn2{font-size: 14px;line-height:40px;height:40px;border: 1px solid #409EFF;width: 120px;color: #409EFF;text-align: center;border-radius: 4px;cursor: pointer;}
.btn1{background: #409EFF;color: #fff;}
.btn2{border-color:#C0C0C0;color: #C0C0C0;}
.btnn,.btnn1{font-size: 14px;line-height:32px;height:32px;border: 1px solid #409EFF;width: 90px;color: #409EFF;text-align: center;border-radius: 4px;cursor: pointer;}
.btnn1{background: #409EFF;color: #fff;}
.btnn{margin-right: 20px;}
.btnn1:hover{background: #1C83EE;}
.btnn:hover{background: #E5F2FF;}
.btnhover:hover{color: #1C83EE!important;}
.text-center{text-align: center;}
.mr-3{margin-right: 3vw;}
.mr-20{margin-right:20px;}
.mt-1{margin-top: 1vh;}
.mt-2{margin-top: 2vh;}
.mb-2{margin-bottom: 2vh;}
.mb-3{margin-bottom: 3vh;}
.mb-1{margin-bottom: 1vh;}
.mb--1{margin-bottom: 1vw;}
.mt--2{margin-top: 2vw;}
.cursor{cursor:pointer}
.red{color: #E24E4E;}
.layoutdiv{
  width: 100%;height: 100%;position:relative;
  .img{position: absolute;right:0;bottom:0%;width:20px;height:20px;img{width: 100%;};z-index: 100;};
  .title{width: 100%;height: 6%;font-size: 1vw;padding: 0 2%;line-height: 1;font-weight: bold;position:relative;margin-bottom:20px;}
  .chart{width: 100%;height: 90%;};
  .chart1{width: 100%;height: 77%;};
  .chart2{width: 100%;height: 82%;};
  .tool{width: 100%;height: 6%;border-top: 1px solid #e4e7ed;padding:0 2%;}
  .time{font-size:14px;color: #999;font-weight: 400;}
  .cascader .el-cascader .el-input__inner{
    border: 0;
  };
  .bottomFunc{position: absolute;bottom: 0;right: 0;z-index:99;
    div{margin-right: 20px;margin-bottom: 20px;color: #999999;font-size: 14px;cursor:pointer;}
  }
}
.blue{color: #409EFF!important}
.pointer{cursor:pointer}
.el-card{width: 100%;height: 100%;margin-bottom: 20px;}
.justify-between{justify-content: space-between;}
.justify-end{justify-content: flex-end;}
.boardBox{
  .right{width: 100%;padding:1.85vh;height: 100vh;overflow:auto;
    .title{font-size: 18px;font-weight: 600;padding: 0;line-height: 1;}
    .title1{font-size: 14px;color: #999;;margin-bottom: 2vh;line-height: 1;height: 14px;};
    .line{width: 100%;height:1px;background: #F5F6F8;}
    .filter{font-size: 14px;}
    .top{height: 18vh;background:#fff;border:1px solid #E2E5EB;padding:1vw;position:relative;
      .title{font-size: 18px;line-height: 1;margin-bottom: 2vh;;line-height: 1;}
    };
    .bottom{overflow:auto;}
  }
}
.W-100{width: 100%;}
@media screen and (max-width:900px) {
  #layout{width: 652px!important;}
  .el-card{height: 350px!important;margin-bottom: 20px;overflow: auto;}
  .boardBox .right .title{font-size: 16px;margin-bottom: 10px;}
}
//弹出框样式

//弹出框样式
</style>
<style lang="scss">
#layout .el-card__body{width: 100%;height: 100%;padding:2%;}
</style>
<template>
  <div class="boardBox flex-center-S" id="boardBox">
    <div class="right">
      <div class="bottom">
        <div class="board" style="width:1080px" id="layout">
          <div class="home">
                <el-card v-for="(item,index) in layoutData" style="height:660px" :key="index">
                  <div class="layoutdiv">
                    <div class="img">
                    </div>
                    <div class="title flex-center-Y">
                      <span>{{item.pluginName}}</span>
                      </div>
                    <!-- <div class="chart flex-center-S">
                      <div style="width:14%;height:86%">
                        <left-box></left-box>
                      </div>
                      <div style="width:86%;height:100%;">
                        <ding-table v-if="item.dingChart=='table'" :item="item" :option="filter"></ding-table>
                        <machine-orderNum v-else :option='filter' :item='item' :child='child'></machine-orderNum>
                      </div>
                    </div> -->
                    <div class="chart flex-center-S">
                      <div style="width:100%;height:100%;">
                        <ding-table v-if="item.dingChart=='table'" :item="item" :option="filter"></ding-table>
                        <machine-orderNum v-else :option='filter' :item='item' :child='child'></machine-orderNum>
                      </div>
                    </div>
                  </div>
                </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MachineOrderNum from '../funcCharts/machineOrderNum'
  import LeftBox from '../funcCharts/leftBox'
  import DingTable from '../funcCharts/dingTable'
  export default {
    data() {
      return {
        allData:"",
        // 布局数据
        layoutData: [
                //       {
                //   pluginName:"销售情况",
                //   pluginChart:"bar",
                // },
                // {
                //   pluginName:"经营综合",
                //   pluginChart:"pie",
                // },
        ],
        filter:{startTime:"",endTime:""},//图表条件
      }
    },
    components: {
      MachineOrderNum,//机器销售额占比
      LeftBox,//表格的侧边信息
      DingTable,//顶顶推送的表格组件
    },
    created() {
      console.log(JSON.parse(this.$route.params.param))
      this.allData=JSON.parse(this.$route.params.param)
      this.layoutData=this.allData.pluginParam
      this.filter.startTime=this.allData.startTime
      this.filter.endTime=this.allData.endTime
    },
    methods: {
      
    },
    
  }

</script>


