
<template>
    <div>
        <el-row>
            <el-col :span="6">
                <div>
                    <el-card class="box-card">
                        <i class="el-icon-tickets"> 利润：{{info.profit}}￥</i>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div>
                    <el-card class="box-card">
                        <i class="el-icon-tickets"> 销售额：{{info.inCome}}￥</i>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div>
                    <el-card class="box-card">
                        <i class="el-icon-tickets"> 商品成本：{{info.procurementPrice}}￥</i>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="6">
                <div>
                    <el-card class="box-card">
                        <i class="el-icon-tickets"> 固定资产：{{info.procurementPrice}}￥</i>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-card class="card">
                <el-col :span="10">
                    <span v-for="(key,index) in lineTypes" :key="key" @click="changeLineType(index)"><el-tag>{{key}}</el-tag></span>
                        
                    <div id="myChart" :style="{width: '800px', height: '400px'}">

                    </div>
                </el-col>
                <el-col :span="2">
                    <div> 
                    
                    </div>
                </el-col>
                <el-col :span="6">
                    <div id="myChart2" :style="{width: '500px', height: '520px'}">

                    </div>
                </el-col>
                <el-col :span="6">
                    <div :style="{width: '700px', height: '500px'}"> 
                        <el-table :data="skulist" element-loading-text="正在统计实时数据" border fit
                                    highlight-current-row>
                            <el-table-column align="center" label="排名(TOP10)" width="110">
                            <template slot-scope="scope">
                                <span v-text="getIndex(scope.$index)"> </span>
                            </template>
                            </el-table-column>
                            <el-table-column align="center" label="SKU" prop="skuCode" style="width: 60px;"></el-table-column>
                            <el-table-column align="center" label="商品名称" prop="goodsName" style="width: 60px;"></el-table-column>
                            <el-table-column align="center" label="规格" prop="skuSpecification" style="width: 35px;"></el-table-column>
                            <el-table-column align="center" label="已售数量" prop="soldNumber" style="width: 30px;"></el-table-column>
                        </el-table>
                    </div>
                </el-col>
            </el-card>
        </el-row>
        <el-card class="card">
            <el-table :data="list" v-loading.body="listLoading" element-loading-text="正在统计实时数据" border fit
                        highlight-current-row>
                <el-table-column align="center" label="排名(TOP10)" width="110">
                    <template slot-scope="scope">
                        <span v-text="getIndex(scope.$index)"> </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="门店名称" prop="storeName" style="width: 60px;"></el-table-column>
                <el-table-column align="center" label="门店地址" prop="location" style="width: 60px;"></el-table-column>
                <el-table-column align="center" label="店长姓名" prop="nickName" style="width: 35px;"></el-table-column>
                <el-table-column align="center" label="订单数量" prop="orderNum" style="width: 30px;"></el-table-column>
                <el-table-column align="center" label="利润" prop="profit" style="width: 60px;"></el-table-column>
            </el-table>
        </el-card>  
    </div>
</template>
<style>
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 95%;
    }
    .card {
        width: 100%;
    }
</style>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
// 引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
  
  name: 'seedling',
  data() {
    return {
        list: [],//表格的数据
        skulist: [],//表格的数据
        info: {
            inCome:"",
            profit:"",
            procurementPrice:""
        },
        groupId:54,
        msg: 'Welcome to seedling',
        listLoading: false,//数据加载等待动画
        skulistLoading: false,//数据加载等待动画
        lineTypes:['日','周','月'],
        lineTypeOptions:[
            ['0:00','1:00','1:00'], 
            ['周一','周二','周三','周四','周五','周六','周日'],
            ['1','2',"3","4"], 
        ],
        seriesData:[
            {
                value:"",
                name:""
            }
        ],
        lineSeriesData:[
            {
                name:'',
                type:'line',
                stack: '总量',
                data:[]
            }
        ],
        legend: {
            data:[]
        },
        linexAxis:{
            type: 'category',
            boundaryGap: false,
            data: []
        }
    }
  },
  created() {
      this.getSkuList();
      this.getList();
      this.getInfo();
  },
  mounted() {
      setTimeout(()=>{
        this.drawLine(0);
      },100)
    
  },
  methods: {
    getIndex($index) {
        //表格序号
        return $index + 1
    },
    changeLineType(index){
        this.drawLine(index);
    },
    getInfo() {
        //查询首页门店销售统计
        this.api({
          url: "/homeIndex/statisticsInfo",
          method: "get",
          params: this.groupId
        }).then(data => {
          this.info = data[0]
        })
    },
    getList() {
        //查询首页门店销售情况列表
        this.listLoading = true;
        this.api({
          url: "/homeIndex/storeTop",
          method: "get",
          params: this.groupId
        }).then(data => {
          this.listLoading = false;
          this.list = data;
        })
    },
    getSkuList() {
        //查询首页门店sku售卖情况列表
        this.skulistLoading = true;
        this.api({
          url: "/homeIndex/skuInfoTop",
          method: "get",
        }).then(data => {
          this.skulistLoading = false;
          this.skulist = data;
          this.seriesData = data;
        })

    },
    drawLine(index) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      this.linexAxis.data = this.lineTypeOptions[index];
      //查询线性图数据
      this.skulistLoading = true;
        this.api({
          url: "/homeIndex/skuInfoTop",
          method: "get",
        }).then(data => {
          this.skulistLoading = false;
          this.skulist = data;
          this.seriesData = data;
        })
      let myChart2 = echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      myChart.setOption({
        title: {
            text: '光芽数据统计'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['日利润','日销售数量','日商品成本']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: this.linexAxis,
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'日利润',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'日销售数量',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'日商品成本',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            }]
      });
      // 绘制饼状图
      myChart2.setOption({
        title: {
            text: '火爆SKU',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#2c343c'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'销售数量',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:this.seriesData.sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: '#2c343c'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#2c343c'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: '#2c343c'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
      });
    },
  }
}
</script>