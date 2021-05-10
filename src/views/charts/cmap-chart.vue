// map-chart
<template>
<div class="container">
    <div :id="elId" class="container" ref="div"></div>
    <div v-if="showTip" class="tipBox" :style="'top:'+topY+'px'+';left:'+leftX+'px'">用户187****9498于12:12:14在xx市xxx区xxx门店xxx设备消费xx元购买了xxxxx商品。</div>
</div>
</template>

<script>
  // 引入基本模板
  import echarts from 'echarts/lib/echarts'
  import "../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
//   import 'echarts/extension/bmap/bmap';//百度地图
  //随机生成不同的id
  import uuidv1 from 'uuid/v1'
  //element-resize-detector,可以监听元素的变化
  import elementResizeDetectorMaker from 'element-resize-detector'
  export default {
    name: "cmap-chart",
    props: {                //接受父组件传递来的数据
      items: {
        type: Object,
        // default () {        //默认数据，没有数剧的情况下启用
        //   return [{name: '生物', value: 95, max: '100'}, {name: '数学', value: 55, max: '100'}, {name: '语文', value: 86, max: '100'}, {name: '物理', value: 54, max: '100'}, {name: '美术', value: 59, max: '100'}]
        // }
      },
    },
    data () {
      return {
        elId: '',//防止同一个页面多次引用此种图表产生bug
        topY:'',//彈出框的Y坐标
        leftX:'',//弹出框的X坐标
        showTip:false,
      }
    },
    created(){
      this.elId = uuidv1() //获取随机id
    },
    mounted(){   
        this.api({
                url: "/pointMap/pointShow",
                method: "post",
                data:{}                      
            }).then((data) => {
                var data=data
                var geoCoordMap = {}
                for(let i in data){
                    data[i].url='../../src/assets/screen/map.png'
                    if(data[i].lngLat){
                        geoCoordMap[data[i].machineCode]=[data[i].lngLat.split(',')[0],data[i].lngLat.split(',')[1]]
                    }else{
                        geoCoordMap[data[i].machineCode]=[]
                    }
                }
                // var data = [
                //     {machineCode: '北京', value: 50},
                //     {machineCode: '南京', value: 64},
                //     {machineCode: '杭州', value: 84},
                // ];
                // var geoCoordMap = {
                //     '北京':[116.20,39.56],
                //     '南京':[118.22,32.04856],
                //     '杭州':[120.14209,30.31968],
                // };
                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].machineCode];
                        if (geoCoord) {
                            res.push({
                                name: data[i].machineCode,
                                value: geoCoord.concat(data[i].address).concat(data[i].vendName).concat(data[i].url)
                            });
                        }
                    }
                    return res;
                }
                console.log(convertData(data),"convertData")

    var option = {
        tooltip : {
            trigger: 'item',
            formatter: (params)=>{
                return '设备名称：'+params.value[3] +'<br>'+'地址：'+params.value[2]
            }
        },
        geo: {
					zlevel:0,		//geo显示级别，默认是0		 
			        map: 'china',
                    zoom: 1.2,
                    scaleLimit:{
                        min:1.2,                          //最小的缩放值
                    },
			        label: {
			            normal: {
			                show: false,
			            },
			            emphasis: {
			                show: false,
			                color: '#292929'
			            }
			        },
			        roam : true,
			        itemStyle : {
						normal : { // 默认状态下地图的文字
							label : {
								show : false,//默认是否显示省份名称  
								//color:"#07131C",
							},
							 areaColor: '#1B4586',
			                 borderColor: '#0A2664',//线
			                 shadowColor: '#0A2664',//外发光
			                 shadowBlur: 0,
						},
						emphasis : {// hover状态下
							label : {
								show : true
							//选中状态是否显示省份名称
							},
							areaColor: '#1B4586',
						},
					},
			    },
        series : [
                {
                    type: 'custom',
                    roam : true,
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    renderItem: function (params, api) {//自定义图标的方法
                    //当前标记点的xy坐标赋值,用于计算弹出框的位置
                    data[params.dataIndex].x=api.coord([geoCoordMap[data[params.dataIndex].machineCode][0],geoCoordMap[data[params.dataIndex].machineCode][1]])[0]-150
                    data[params.dataIndex].y=api.coord([geoCoordMap[data[params.dataIndex].machineCode][0],geoCoordMap[data[params.dataIndex].machineCode][1]])[1]-72-25
                    //当前标记点的xy坐标赋值,用于计算弹出框的位置
                        return {
                            type: 'image',
                            style: {
                                image: '../../src/assets/screen/map.png',
                                // image: convertData(data)[params.dataIndex].value[4],
                                x: api.coord([geoCoordMap[data[params.dataIndex].machineCode][0],geoCoordMap[data[params.dataIndex].machineCode][1]])[0]-10,//图标位置,经纬度-图标本身大小进行调整
                                y: api.coord([geoCoordMap[data[params.dataIndex].machineCode][0],geoCoordMap[data[params.dataIndex].machineCode][1]])[1]-30,
                                width: 20,
                                height: 25,
                            }
                        }
                        },
                }
            ]
        
        };
        console.log(data,"000000000")
        //初始化图表
        const chartObj = echarts.init(document.getElementById(this.elId))
        chartObj.setOption(option)
        this.$nextTick(_ => {//生成后重绘一次
                    chartObj.resize()
                    })
        window.onresize=function(){//窗口变化,图表重绘
            chartObj.resize();
            }
        //图表父元素大小改变,重绘一次
        var erd = elementResizeDetectorMaker()
        erd.listenTo(document.getElementById(this.elId), function (element) {
            chartObj.resize();
        })
        //图表父元素大小改变,重绘一次
        //模拟闪光,弹出框的出现==========================================================================
        // setTimeout(()=>{
        //     this.showTip=true
        //     this.leftX=data[8].x
        //     this.topY=data[8].y
        //     data[8].url='../../src/assets/screen/map1.png'//换图标
        //     chartObj.resize();
        // },1000)
        // setTimeout(()=>{
        //     this.showTip=false
        //     data[8].url='../../src/assets/screen/map.png'//换回图标
        //     chartObj.resize();
        // },3000)
        // setTimeout(()=>{
        //     this.showTip=true
        //     this.leftX=data[7].x
        //     this.topY=data[7].y
        //     data[7].url='../../src/assets/screen/map1.png'
        //     chartObj.resize();
        // },5000)
        // setTimeout(()=>{
        //     this.showTip=false
        //     data[7].url='../../src/assets/screen/map.png'
        //     chartObj.resize();
        // },7000)
        
        //模拟弹出框的出现==============================================================================
        //   窗口信息配置
        // var map = chartObj.getModel().getComponent("bmap").getBMap()//拿到百度地图实例
        // var opts =`<span style='display:inline-block;width:260px;height:52px;background-image: url("../../src/assets/screen/info.png");background-size: 100% 100%;padding:10px 20px;color:#fff;line-height:1.5;font-size:12px;'>
        //                 用户187****9498于12:12:14在xx市xxx区xxx门店xxx设备消费xx元购买了xxxxx商品。
        //                 </span>`//必须是字符串类型,否则会报错
        // var infoWindow = new BMap.InfoWindow(opts);//创建信息框
        // //弹出信息窗
        // setTimeout(()=>{
        //     map.openInfoWindow(infoWindow, new BMap.Point(120.245433,30.409974));
        // },500)
        //   窗口信息配置
    }).catch(() => {
            
        })
    },
    methods:{
    },
    watch: {
      //监听items的变化
        items: {
        handler(newVal,oldVal) {
            console.log(111111111)
            
        },
        deep: true //对象内部属性的监听，关键。
      }
    },
  }
</script>
<style scoped>
  .container{width: 100%;height: 100%;position: relative;}
  .tipBox{position: absolute;width:300px;height:72px;background-image: url("../../../src/assets/screen/info.png");background-size: 100% 100%;padding:10px 20px;color:#fff;line-height:1.5;font-size:12px;z-index: 100;}
</style>
<style>
    .BMap_bottom,.BMap_top,.BMap_center,.BMap_pop img{display: none;}
    .BMap_pop div{background: transparent!important;border: 0!important;}
    .BMap_bubble_content{margin-right: 25px;}
    .BMap_shadow{display: none;}
    /* 移除百度地图logo */
    .BMap_cpyCtrl {
    display: none!important;

    }
    .anchorBL {
    display: none!important;

    }
</style>