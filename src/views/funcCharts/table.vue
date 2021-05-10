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
</style>
<template>
  <div class="table-chart" id="tableChart">
      <el-table
            max-height="500"
            ref="refTable"
            :data="tableData"
            style="width: 100%;margin-bottom: 20px;"
            row-key="id"
            @expand-change="expandChange"
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
    name: "table-chart",
    props: {                //接受父组件传递来的数据
      items: {//左边栏的条目
        type: Object,
        default () {        //默认数据，没有数剧的情况下启用
          return {name: ''}
        }
      },
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
                    // {
                    //     id:"1",
                    //     date:'02-02',
                    //     sale: 192,
                    //     order: 30,
                    //     per:3.5,
                    //     profit:100,
                    //     user:12,
                    //     top:"567/可口可乐",
                    //     low:"12/旺仔牛奶",
                    //     hasChildren: true
                    // },
                    // {
                    //     id:"2",
                    //     date:'02-03',
                    //     sale: 192,
                    //     order: 30,
                    //     per:3.5,
                    //     profit:100,
                    //     user:12,
                    //     top:"567/可口可乐",
                    //     low:"12/旺仔牛奶",
                    //     hasChildren: true
                    // },
                    // {
                    //     id:"3",
                    //     date:'02-04',
                    //     sale: 192,
                    //     order: 30,
                    //     per:3.5,
                    //     profit:100,
                    //     user:12,
                    //     top:"567/可口可乐",
                    //     low:"12/旺仔牛奶",
                    //     hasChildren: true
                    // },
                    // {
                    //     id:"4",
                    //     date:'02-05',
                    //     sale: 192,
                    //     order: 30,
                    //     per:3.5,
                    //     profit:100,
                    //     user:12,
                    //     top:"567/可口可乐",
                    //     low:"12/旺仔牛奶",
                    //     hasChildren: true
                    // },
                    // {
                    //     id:"5",
                    //     date:'02-06',
                    //     sale: 192,
                    //     order: 30,
                    //     per:3.5,
                    //     profit:100,
                    //     user:12,
                    //     top:"567/可口可乐",
                    //     low:"12/旺仔牛奶",
                    //     hasChildren: true
                    // },
                    // {
                    //     id:"6",
                    //     date:'02-07',
                    //     sale: 192,
                    //     order: 30,
                    //     per:3.5,
                    //     profit:100,
                    //     user:12,
                    //     top:"567/可口可乐",
                    //     low:"12/旺仔牛奶",
                    //     hasChildren: true
                    // },
                    // {
                    //     id:"7",
                    //     date:'02-08',
                    //     sale: 192,
                    //     order: 30,
                    //     per:3.5,
                    //     profit:100,
                    //     user:12,
                    //     top:"567/可口可乐",
                    //     low:"12/旺仔牛奶",
                    //     hasChildren: true
                    // },
                    // {
                    //     id:"8",
                    //     date:'总计',
                    //     sale: '1234',
                    //     order: "5546",
                    //     per:'676',
                    //     profit:'8758',
                    //     user:'0o879'
                    // },
                    // {
                    //     id:"9",
                    //     date:'同比上周期',
                    //     sale: '+15.3',
                    //     order: "+15.3",
                    //     per:'+15.3',
                    //     profit:'+15.3',
                    //     user:'+15.3'
                    // },
                    ],
        // tableParam:[//总表
        //             {label:"日期",param:"date"},
        //             {label:"销售额",param:"sale"},
        //             {label:"订单量",param:"order"},
        //             {label:"客单价",param:"per"},
        //             {label:"利润额",param:"profit"},
        //             {label:"新增用户",param:"user"}
        //             ],
        tableParam:[//客单价
                    {label:"日期",param:"date",sortable:false},
                    {label:"客单价",param:"per",sortable:true},
                    {label:"最高售价/sku",param:"top",sortable:true},
                    {label:"最低售价/sku",param:"low",sortable:true}
                    ],
        showDetail:true,//该表格是否有查看详情
        expands: [],
        sortParam:{sortStatus:'ASC',sortType:""},
      }
    },
    created(){
      // console.log(3333333333333,this.option)
    },
    mounted(){
      this.getData()
    },
    methods:{
        getData(){
          if(!this.items.isModel){//不是模板
            this.selectType=this.items//左边的类目,由父组件传递过来
            this.api({//1.图表类型 2.数据分析的类型 3.其他参数(比如日期等等)   ----------从父页面传递过来
                      url: "/data/dataDetails",
                      method: "post",
                      data:{
                          startTime:this.option.startTime,
                          endTime:this.option.endTime,
                          headStoreCode:this.option.headStoreCode,
                          headMachineCode:this.option.headMachineCode,
                          headBrandId:this.option.headBrandId,
                          headTypeId:this.option.headTypeId,
                          headSkuCode:this.option.headSkuCode,
                          dataType:this.selectType.id,//是大表还是其他的详情啥的
                          pluginCard:this.item.pluginCard,
                          // startTime:"2019-08-01",
                          // endTime:'2019-09-30',
                          pluginId:this.item.pluginId,
                          detailsStatus:this.item.detailsStatus || 1,
                          sortParam:this.sortParam.sortParam,
                          sortType:this.sortParam.sortType
                      }                      
                  }).then((data) => { 
                        //请求表格数据
                        if(this.selectType.pluginCard=="SaleProgress"){//经营分析
                          if(this.selectType.name=='数据总览'){
                              this.tableParam=
                                          [//数据总览
                                            {label:"日期",param:"gmtTime",sortable:false},
                                            {label:"销售额",param:"salePrice",sortable:true},
                                            {label:"订单量",param:"orderNum",sortable:true},
                                            {label:"客单价",param:"prePrice",sortable:true},
                                            {label:"利润额",param:"profits",sortable:true},
                                            {label:"新增用户",param:"newUserNum",sortable:true}
                                          ]
                              this.showDetail=false//是否有操作按钮
                              for(let i in data.saleProgressList){
                                let gmtWeek=this.getWeek(data.saleProgressList[i].gmtWeek)
                                data.saleProgressList[i].gmtTime=data.saleProgressList[i].gmtTime+gmtWeek
                              }
                              this.tableData=data.saleProgressList
                              let all=data.allSaleProgressModel
                                  all.gmtTime="总计"
                              this.tableData.push(all)
                              let progress={}
                              progress.gmtTime='同比上周(%)'
                              progress.salePrice=data.salePriceRate
                              progress.orderNum=data.orderNumRate
                              progress.prePrice=data.prePriceRate
                              progress.profits=data.profitsRate
                              progress.newUserNum=data.newUserNumRate
                              this.tableData.push(progress)
                              
                            }else if(this.selectType.name=='销售额'){
                                this.tableParam=
                                          [//数据总览
                                            {label:"日期",param:"gmtTime",sortable:false},
                                            {label:"销售额",param:"salePrice",sortable:true},
                                            {label:"退款额",param:"refurdPrice",sortable:true},
                                            {label:"利润额",param:"profits",sortable:true},
                                          ]
                              this.showDetail=false//是否有操作按钮
                              this.tableData=data.saleProgressList
                              for(let i in data.saleProgressList){
                                let gmtWeek=this.getWeek(data.saleProgressList[i].gmtWeek)
                                data.saleProgressList[i].gmtTime=data.saleProgressList[i].gmtTime+gmtWeek
                              }
                            }else if(this.selectType.name=='订单量'){
                                this.tableParam=
                                          [//数据总览
                                            {label:"日期",param:"gmtTime",sortable:false},
                                            {label:"订单量",param:"orderNum",sortable:true},
                                            {label:"销售量",param:"saleNum",sortable:true},
                                            {label:"投诉量",param:"complainNum",sortable:true},
                                            {label:"退款量",param:"refrudNum",sortable:true},
                                            {label:"实际销量",param:"staticOrderNum",sortable:true},
                                          ]
                              this.showDetail=false//是否有操作按钮
                              this.tableData=data.saleNumList
                              for(let i in data.saleNumList){
                                let gmtWeek=this.getWeek(data.saleNumList[i].gmtWeek)
                                data.saleNumList[i].gmtTime=data.saleNumList[i].gmtTime+gmtWeek
                              }
                            }else if(this.selectType.name=='客单价'){
                                for(let i in data.salePrePriceList){
                                  data.salePrePriceList[i].hasChildren=true
                                  data.salePrePriceList[i].id=data.salePrePriceList[i].gmtDay//列表显示的唯一标识
                                }
                                this.tableParam=
                                          [//客单价
                                            {label:"日期",param:"gmtTime",sortable:false},
                                            {label:"客单价",param:"prePrice",sortable:true},
                                            {label:"最高售价/sku",param:"top",sortable:true},
                                            {label:"最低售价/sku",param:"bottom",sortable:true}
                                          ]
                                this.showDetail=true//是否有操作按钮
                              for(let i in data.salePrePriceList){
                                let children=[]
                                for(let g=0;g<data.salePrePriceList[i].bottomList.length;g++){
                                  children.push({})
                                }
                                for(let key in children){
                                  children[key].id=Math.random()//列表显示的唯一标识
                                  children[key].top=data.salePrePriceList[i].topList[key].salePrice+'/'+data.salePrePriceList[i].topList[key].skuName
                                  children[key].bottom=data.salePrePriceList[i].bottomList[key].salePrice+'/'+data.salePrePriceList[i].bottomList[key].skuName
                                }
                                children.splice(0,1)
                                data.salePrePriceList[i].children=children
                              }
                              this.tableData=data.salePrePriceList
                              for(let i in data.salePrePriceList){
                                let gmtWeek=this.getWeek(data.salePrePriceList[i].gmtWeek)
                                data.salePrePriceList[i].gmtTime=data.salePrePriceList[i].gmtTime+gmtWeek
                              }
                            }else if(this.selectType.name=='利润额'){
                                for(let i in data.salePrePriceList){
                                  data.salePrePriceList[i].hasChildren=true
                                  data.salePrePriceList[i].id=data.salePrePriceList[i].gmtDay//列表显示的唯一标识
                                }
                                this.tableParam=
                                          [//客单价
                                            {label:"日期",param:"gmtTime",sortable:false},
                                            {label:"利润额",param:"profitPrice",sortable:true},
                                            {label:"最高利润额/利润率/sku",param:"top",sortable:true},
                                            {label:"最低利润额/利润率/sku",param:"bottom",sortable:true}
                                          ]
                                this.showDetail=true//是否有操作按钮
                              for(let i in data.salePrePriceList){
                                let children=[]
                                for(let g=0;g<data.salePrePriceList[i].bottomList.length;g++){
                                  children.push({})
                                }
                                for(let key in children){
                                  children[key].id=Math.random()//列表显示的唯一标识
                                  children[key].top=data.salePrePriceList[i].topList[key].profitPrice+'/'+data.salePrePriceList[i].topList[key].profit+'/'+data.salePrePriceList[i].topList[key].skuName
                                  children[key].bottom=data.salePrePriceList[i].bottomList[key].profitPrice+'/'+data.salePrePriceList[i].bottomList[key].profit+'/'+data.salePrePriceList[i].bottomList[key].skuName
                                }
                                children.splice(0,1)
                                data.salePrePriceList[i].children=children
                              }
                              this.tableData=data.salePrePriceList
                              for(let i in data.salePrePriceList){
                                let gmtWeek=this.getWeek(data.salePrePriceList[i].gmtWeek)
                                data.salePrePriceList[i].gmtTime=data.salePrePriceList[i].gmtTime+gmtWeek
                              }
                            }else if(this.selectType.name=='新增用户'){
                                for(let i in data.saleUserList){
                                  data.saleUserList[i].complain=data.saleUserList[i].complainNum+'/'+data.saleUserList[i].complainOkNum+'/'+data.saleUserList[i].noComplainNum
                                }
                                this.tableParam=
                                          [//数据总览
                                            {label:"日期",param:"gmtTime",sortable:false},
                                            {label:"新增用户",param:"newUserNum",sortable:true},
                                            {label:"复购用户",param:"repeatNum",sortable:true},
                                            {label:"投诉用户/已处理/未处理",param:"complain",sortable:true}
                                          ]
                              this.showDetail=false//是否有操作按钮
                              this.tableData=data.saleUserList
                              for(let i in data.saleUserList){
                                let gmtWeek=this.getWeek(data.saleUserList[i].gmtWeek)
                                data.saleUserList[i].gmtTime=data.saleUserList[i].gmtTime+gmtWeek
                              }
                            }
                        }
                        if(this.selectType.pluginCard=='GoodRank'){//热门商品排名
                            this.tableParam=
                                [//数据总览
                                  {label:"商品品类",param:"goodsType",sortable:false},
                                  {label:"销售额-元",param:"salePrice",sortable:true},
                                  {label:"销售量-件",param:"saleNum",sortable:true},
                                  {label:"利润额-元",param:"profits",sortable:true},
                                ]
                            this.showDetail=false//是否有操作按钮
                            this.tableData=data.dataList
                        }
                        if(this.selectType.pluginCard=='SkuRank'){//热热门sku排名
                            this.tableParam=
                                [//数据总览
                                  {label:"SKU名称",param:"skuName",sortable:false},
                                  {label:"商品类型",param:"typeName",sortable:false},
                                  {label:"销售额-元",param:"salePrice",sortable:true},
                                  {label:"销售量-件",param:"saleNum",sortable:true},
                                  {label:"利润额-元",param:"profits",sortable:true},
                                ]
                            this.showDetail=false//是否有操作按钮
                            this.tableData=data.dataList
                        }
                        if(this.selectType.pluginCard=='StoreRank'){//热门门店排名
                            this.tableParam=
                                [//数据总览
                                  {label:"点位名称",param:"storeName",sortable:false},
                                  {label:"销售额-元",param:"salePrice",sortable:true},
                                  {label:"销售量-件",param:"saleNum",sortable:true},
                                  {label:"利润额-元",param:"profits",sortable:true},
                                ]
                            this.showDetail=false//是否有操作按钮
                            this.tableData=data.dataList
                        }
                        if(this.selectType.pluginCard=='MachineRank'){//热热门sku排名
                            this.tableParam=
                                [//数据总览
                                  {label:"设备名称",param:"machineName",sortable:false},
                                  {label:"设备类型",param:"typeName",sortable:false},
                                  {label:"销售额-元",param:"salePrice",sortable:true},
                                  {label:"销售量-件",param:"saleNum",sortable:true},
                                  {label:"利润额-元",param:"profits",sortable:true},
                                ]
                            this.showDetail=false//是否有操作按钮
                            this.tableData=data.dataList
                        }
                        if(this.selectType.pluginCard=="wareProgress"){//仓库分析
                          if(this.selectType.name=="数据总览"){
                              this.tableParam=
                                          [//数据总览
                                            {label:"日期",param:"gmtTime",sortable:false},
                                            {label:"采购量-件",param:"salePrice",sortable:false},
                                            {label:"补货量-件",param:"orderNum",sortable:false},
                                            {label:"存量-件",param:"prePrice",sortable:false},
                                          ]
                              this.showDetail=true//是否有操作按钮
                              for(let i in data.saleProgressList){
                                let gmtWeek=this.getWeek(data.saleProgressList[i].gmtWeek)
                                data.saleProgressList[i].gmtTime=data.saleProgressList[i].gmtTime+gmtWeek
                              }
                              this.tableData=data.saleProgressList
                              let all=data.allSaleProgressModel
                                  all.gmtTime="总计"
                              this.tableData.push(all)
                              let progress={}
                              progress.gmtTime='同比上周(%)'
                              progress.salePrice=data.salePriceRate
                              progress.orderNum=data.orderNumRate
                              progress.prePrice=data.prePriceRate
                              progress.profits=data.profitsRate
                              progress.newUserNum=data.newUserNumRate
                              this.tableData.push(progress)
                          }else if(this.selectType.name=="采购情况"){
                            this.tableParam=
                                        [//采购情况
                                          {label:"日期",param:"gmtTime",sortable:false},
                                          {label:"采购种类",param:"salePrice",sortable:false},
                                          {label:"采购均价（元）",param:"orderNum",sortable:false},
                                          {label:"采购数量（件）",param:"prePrice",sortable:false},
                                        ]
                            this.showDetail=true//是否有操作按钮
                            this.tableData=data.saleProgressList
                            for(let i in data.saleProgressList){
                              let gmtWeek=this.getWeek(data.saleProgressList[i].gmtWeek)
                              data.saleProgressList[i].gmtTime=data.saleProgressList[i].gmtTime+gmtWeek
                            }
                          }else if(this.selectType.name=="补货情况"){
                            this.tableParam=
                                        [//补货情况
                                          {label:"日期",param:"gmtTime",sortable:false},
                                          {label:"补货次数",param:"salePrice",sortable:false},
                                          {label:"补货种类/数量",param:"orderNum",sortable:false},
                                          {label:"补货退仓（件）",param:"prePrice",sortable:false},
                                          {label:"补货报损量（件）",param:"prePrice",sortable:false},
                                        ]
                            this.showDetail=true//是否有操作按钮
                            this.tableData=data.saleProgressList
                            for(let i in data.saleProgressList){
                              let gmtWeek=this.getWeek(data.saleProgressList[i].gmtWeek)
                              data.saleProgressList[i].gmtTime=data.saleProgressList[i].gmtTime+gmtWeek
                            }
                          }else if(this.selectType.name=="存量情况"){
                            this.tableParam=
                                        [//存量情况
                                          {label:"日期",param:"gmtTime",sortable:false},
                                          {label:"SKU种类",param:"salePrice",sortable:false},
                                          {label:"SKU数量",param:"orderNum",sortable:false},
                                          {label:"临期/过期数量",param:"prePrice",sortable:false},
                                          {label:"报损数量",param:"prePrice",sortable:false},
                                        ]
                            this.showDetail=true//是否有操作按钮
                            this.tableData=data.saleProgressList
                            for(let i in data.saleProgressList){
                              let gmtWeek=this.getWeek(data.saleProgressList[i].gmtWeek)
                              data.saleProgressList[i].gmtTime=data.saleProgressList[i].gmtTime+gmtWeek
                            }
                          }
                        }
            //请求表格数据
                  }).catch(() => {
                      
                  })
          }else if(this.items.isModel){//模板====================================================================================================================================================
          console.log(this.items)
            if(this.items.pluginCard=='GoodRank'){
              //热门商品排名
                    this.tableParam=
                                [//数据总览
                                  {label:"商品品类",param:"goodsType",sortable:false},
                                  {label:"销售额-元",param:"salePrice",sortable:true},
                                  {label:"销售量-件",param:"saleNum",sortable:true},
                                  {label:"利润额-元",param:"profits",sortable:true},
                                ]
                    this.showDetail=false//是否有操作按钮
                    this.tableData=[{goodsType: "零食", salePrice: 144, saleNum: 21, profits: -63},{goodsType: "饮料", salePrice: 5, saleNum: 3, profits: 3},{goodsType: "生鲜", salePrice: 1, saleNum: 1, profits: 1}]
            }else if(this.items.pluginCard=='StoreRank'){
              //热门商品排名
                    this.tableParam=
                                [//数据总览
                                  {label:"点位名称",param:"storeName",sortable:false},
                                  {label:"销售额-元",param:"salePrice",sortable:true},
                                  {label:"销售量-件",param:"saleNum",sortable:true},
                                  {label:"利润额-元",param:"profits",sortable:true},
                                ]
                    this.showDetail=false//是否有操作按钮
                    this.tableData=[{storeName: "不知名3", salePrice: 49, saleNum: 10, profit: 50},{storeName: "海创园门店", salePrice: 4, saleNum: 2, profit: 2},{storeName: "测试门店", salePrice: 1, saleNum: 1, profit: 0.5}]
            }else if(this.items.pluginCard=='SkuRank'){
              //热门商品排名
                    this.tableParam=
                                [//数据总览
                                  {label:"SKU名称",param:"skuName",sortable:false},
                                  {label:"商品类型",param:"typeName",sortable:false},
                                  {label:"销售额-元",param:"salePrice",sortable:true},
                                  {label:"销售量-件",param:"saleNum",sortable:true},
                                  {label:"利润额-元",param:"profits",sortable:true},
                                ]
                    this.showDetail=false//是否有操作按钮
                    this.tableData=[{skuName: "qwerrq", typeName: "零食", salePrice: 96, saleNum: 12, profits: 96},{skuName: "wretch", typeName: "零食", salePrice: 48, saleNum: 9, profits: -159}]
            }else if(this.items.pluginCard=="MachineRank"){
              //热门商品排名
                    this.tableParam=
                                [//数据总览
                                  {label:"设备名称",param:"machineName",sortable:false},
                                  {label:"设备类型",param:"typeName",sortable:false},
                                  {label:"销售额-元",param:"salePrice",sortable:true},
                                  {label:"销售量-件",param:"saleNum",sortable:true},
                                  {label:"利润额-元",param:"profits",sortable:true},
                                ]
                    this.showDetail=false//是否有操作按钮
                    this.tableData=[{machineName: " 柯润弹簧机", typeName: "光芽弹簧机", salePrice: 48, saleNum: 9, profit: 20},{machineName: "测试机", typeName: "光芽弹簧机", salePrice: 4, saleNum: 2, profit: 2},{machineName: "光芽格子机", typeName: "光芽格子机", salePrice: 1, saleNum: 1, profit: 0.5}]
            }
          }
        },
        clickRow(row){//点击展开
            this.$refs.refTable.toggleRowExpansion(row)
            row.children=row.children
        },
        expandChange(row, expandedRows) {//展开获取详情内容
              row.isOpen=expandedRows//当前行展开或关闭
            // //每次只能展开一行
            // var that = this
            // if (expandedRows.length) {
            //   that.expands = []
            //   if (row) {
            //     that.expands.push(row.id)
            //   }
            // } else {
            //   that.expands = []
            // }
            // //每次只能展开一行
        },
        // load(tree, treeNode, resolve) {//加载子节点数据
        //   let g=[
        //     {
        //                 id:Math.random(),
        //                 date:'02-08',
        //                 sale: 192,
        //                 order: 30,
        //                 per:3.5,
        //                 profit:100,
        //                 user:12
        //             },
        //   ]
        //   resolve(g)
        // }
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
          console.log(44444444444,this.option)
            this.sortParam={sortStatus:'ASC',sortType:""},
            this.$refs.refTable.clearSort()
            this.getData()
        },
        deep: true //对象内部属性的监听，关键。
      },
      option: {
        handler(newVal,oldVal) {
            this.getData()
            console.log(3333333333333,this.option)
        },
        deep: true //对象内部属性的监听，关键。
      }
    },
  }
</script>
