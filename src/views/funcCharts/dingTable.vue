<style lang='scss' scoped>
  .table-chart{width: 100%;height: 100%;overflow: hidden;
  }
  .blue{color: #409EFF;cursor: pointer;}
</style>
<style>
    #tableChart .el-table thead tr th{background: #409EFF;color: #fff;font-weight: 400;padding: 8px 0;}
    #tableChart .el-table tbody tr td{padding: 15px 0;}
    #tableChart .el-table .el-table__expand-icon{display: none;}
    #tableChart .el-table .descending .sort-caret.descending{border-top-color: #fff;}
    #tableChart .el-table .ascending .sort-caret.ascending{border-bottom-color: #fff;}
    @media screen and (max-width:900px) {
        #tableChart .el-table{max-height:300px!important;overflow: auto;}
        }
</style>
<template>
  <div class="table-chart" id="tableChart">
      <el-table
            ref="refTable"
            :data="tableData"
            style="width: 100%;margin-bottom: 20px;"
            row-key="id"
            @sort-change="changeSort"
            lazy
            stripe
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column
              v-for="(item,i) in tableParam"
              :key="i"
              :prop="item.param"
              :label="item.label"
              :sortable="item.sortable?'custom':false"
              align="center"
              >
            </el-table-column>
            <el-table-column label="操作" v-if="showDetail">
                <template slot-scope="scope">
                    <span class="blue" @click="clickRow(scope.row)"  v-if="scope.row.hasChildren && !scope.row.isOpen">展开</span>
                    <span class="blue" @click="clickRow(scope.row)"  v-if="scope.row.hasChildren && scope.row.isOpen">收起</span>
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
  export default {
    name: "ding-table",
    props: {                //接受父组件传递来的数据
      item: {//总插件信息
        type: Object,
        default () {       
          return {}
        }
      },
      option: {//数据看版时间筛选等信息
        type: Object,
        default () {       
          return {}
        }
      },
    },
    data () {
      return {
        selectType:"",
        tableData:[
                    ],
        tableParam:[//客单价
                    {label:"",param:"date",sortable:false},
                    {label:"今日",param:"per",sortable:false},
                    {label:"昨日",param:"top",sortable:false},
                    {label:"同比",param:"low",sortable:false}
                    ],
        showDetail:false,//该表格是否有查看详情
        expands: [],
        sortParam:{sortStatus:'ASC',sortType:""},
      }
    },
    created(){
    },
    mounted(){
      this.getData()
    },
    methods:{
        getData(){
          this.api({//1.图表类型 2.数据分析的类型 3.其他参数(比如日期等等)   ----------从父页面传递过来
                    url: "/plant/dingData",
                    method: "post",
                    data:{
                        startTime:this.option.startTime,
                        endTime:this.option.endTime,
                        pluginCard:this.item.pluginCard,
                        pluginId:this.item.pluginId,
                        operatorId:this.item.operatorId
                    }                      
                }).then((data) => { 
                  //请求表格数据
                    this.tableParam=
                                [//数据总览
                                  {label:" ",param:"name",sortable:false},
                                  {label:"今日",param:"today",sortable:false},
                                  {label:"昨日",param:"yes",sortable:false},
                                  {label:"同比",param:"rate",sortable:false}
                                ]
                    this.showDetail=false//是否有操作按钮
                    this.tableData=data.ratioData
          //请求表格数据

                }).catch(() => {
                    
                })
        },
        clickRow(row){//点击展开
            this.$refs.refTable.toggleRowExpansion(row)
            row.children=row.children
        },
        changeSort(column, prop, order){//排序
          console.log(column, prop, order)
          if(column.order=="ascending"){
            this.sortParam.sortParam="ASC"
          }else{
            this.sortParam.sortParam="DESC"
          }
          if(column.column.label=='投诉用户/已处理/未处理'){
            this.sortParam.sortType='complainNum'
          }else{
            this.sortParam.sortType=column.prop
          }
          this.getData()
        },
        getWeek(gmtWeek){
          if(gmtWeek=='Mon'){
              return '周一'
            }else if(gmtWeek=='Tue'){
              return '周二'
            }else if(gmtWeek=='Wed'){
              return '周三'
            }else if(gmtWeek=='Thu'){
              return '周四'
            }else if(gmtWeek=='Fri'){
              return '周五'
            }else if(gmtWeek=='Sat'){
              return '周六'
            }else if(gmtWeek=='Sun'){
              return '周日'
            }
        },
    },
    watch: {
      //监听items的变化
        items: {
        handler(newVal,oldVal) {
            this.getData()
        },
        deep: true //对象内部属性的监听，关键。
      }
    },
  }
</script>
