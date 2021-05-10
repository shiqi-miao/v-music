// map-chart
<template>
  <div :id="elId" class="container" ref="div"> </div>
</template>

<script>
  // 引入基本模板
  import echarts from 'echarts/lib/echarts'
//   import "../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
  import 'echarts/extension/bmap/bmap';//百度地图
//   import 'echarts-amap';//高德地图
  //随机生成不同的id
  import uuidv1 from 'uuid/v1'
  //element-resize-detector,可以监听元素的变化
  import elementResizeDetectorMaker from 'element-resize-detector'
  import mapImg from '../../../src/assets/screen/map.png'
  import mapImg1 from '../../../src/assets/screen/map1.png'
  import mapImg2 from '../../../src/assets/screen/map2.png'
  import mapImg3 from '../../../src/assets/screen/map3.png'
  import mapImg4 from '../../../src/assets/screen/map4.png'
  import mapImg5 from '../../../src/assets/screen/map5.png'
import {getToken, removeToken, setToken} from '@/utils/seedling'
  export default {
    name: "map-chart",
    props: {                //接受父组件传递来的数据
      zoom:"",
      needLogin:"",
      location:Object
    },
    data () {
      return {
        elId: '',//防止同一个页面多次引用此种图表产生bug
        chartObj:null,
        option:{},
        showBigImg:false,
        timer:null,
        iconWidth:45,
        iconHeight:60,
        otherWidth:20,
        otherHeight:50,
        mapData:{}//地图所需的数据源
      }
    },
    created(){
      this.elId = uuidv1() //获取随机id
    },
    mounted(){  
        if(this.needLogin==1){//如果是1的话是展示用的，需要模拟登录
            this.api({
          url: "login/seedling",
          method: "post",
          data: {
            loginType: true,
            password: "lightBud882020",
            username: "13564781181",
          }
        }).then(data => {
          if (data.flag) {
            setToken(data.token);
            this.api({
              url: '/login/getInfo',
              method: 'post'
            }).then(data => {
              //储存用户信息
              this.$store.commit('SET_USER', data.userPermission)
              setToken()
              this.getMapData()
              this.timer=setInterval(()=>{
                  this.getMapData()
              },600000)
            }).catch(error => {
            })
          }
        }).catch(err => {
        })
        }else{
            this.getMapData()
            this.timer=setInterval(()=>{
                this.getMapData()
            },600000)
        }
        
    },
    beforeDestroy () {//到其他页面清除定时器
        clearInterval(this.timer)
    },
    methods:{
        getMapData(){
            this.api({
                url: "/pointMap/pointShow",
                method: "post",
                data:{}                      
            }).then((data) => {
                var data=data
                var geoCoordMap = {}
                for(let i in data){
                    if(data[i].lngLat){
                        geoCoordMap[data[i].machineCode]=[Number(data[i].lngLat.split(',')[0])+0.0065,Number(data[i].lngLat.split(',')[1])+0.0065]//后端数据采用高德地图经纬度数据,与百度地图有0.0065的偏差
                    }else{
                        geoCoordMap[data[i].machineCode]=[]
                    }
                }
                this.mapData=data
                // console.log(data)
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
                //处理过后的数据
                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].machineCode];
                        if (geoCoord) {
                            res.push({
                                name: data[i].machineCode,
                                value: geoCoord.concat(data[i].address).concat(data[i].vendName).concat(data[i].totalNum).concat(data[i].totalProfit).concat(data[i].machineCode).concat(data[i].isRepaire).concat(data[i].isOnline)
                            });
                        }
                    }
                    return res;
                }
                //处理过后的数据
                this.option = {
                        title: {
                            text: '',
                            left: 'center'
                        },
                        tooltip : {
                            show:false,
                            trigger: 'item',
                            formatter: (params)=>{
                                return '设备名称：'+params.value[3] +'<br>'+'地址：'+params.value[2]+'<br>'+'货量状态：'+(params.value[7]=='1'?'需补货':'货量充足')+'<br>'+'在线状态：'+(params.value[8]=='1'?'在线':'离线') +'<br>'+'今日销量：'+params.value[4] +'<br>'+'今日利润：'+params.value[5]
                            }
                        },
                        bmap: {
                            center: [this.location.Lng, this.location.Lat],
                            zoom: this.zoom,
                            roam: true,
                            mapStyleV2: {
                                styleJson: [{
                                    "featureType": "land",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "color": "#091220ff"
                                    }
                                }, {
                                    "featureType": "water",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "color": "#12274eff"
                                    }
                                }, {
                                    'featureType': 'boundary',
                                    'elementType': 'all',
                                    'stylers': {
                                        'color': '#12274eff'
                                    }
                                }, {
                                    "featureType": "green",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "color": "#0e1b30ff"
                                    }
                                }, {
                                    "featureType": "building",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "building",
                                    "elementType": "geometry.topfill",
                                    "stylers": {
                                        "color": "#113549ff"
                                    }
                                }, {
                                    "featureType": "building",
                                    "elementType": "geometry.sidefill",
                                    "stylers": {
                                        "color": "#143e56ff"
                                    }
                                }, {
                                    "featureType": "building",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#dadada00"
                                    }
                                }, {
                                    "featureType": "subwaystation",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "color": "#113549B2"
                                    }
                                }, {
                                    "featureType": "education",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "medical",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "scenicspots",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "highway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "weight": "4"
                                    }
                                }, {
                                    "featureType": "highway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "highway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#fed66900"
                                    }
                                }, {
                                    "featureType": "highway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "highway",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "highway",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "highway",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "arterial",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "weight": "2"
                                    }
                                }, {
                                    "featureType": "arterial",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "arterial",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffeebb00"
                                    }
                                }, {
                                    "featureType": "arterial",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "arterial",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "arterial",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "local",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "weight": "1"
                                    }
                                }, {
                                    "featureType": "local",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "local",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "local",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "local",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#979c9aff"
                                    }
                                }, {
                                    "featureType": "local",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffffff"
                                    }
                                }, {
                                    "featureType": "railway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "weight": "1"
                                    }
                                }, {
                                    "featureType": "railway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#123c52ff"
                                    }
                                }, {
                                    "featureType": "railway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "subway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "weight": "1"
                                    }
                                }, {
                                    "featureType": "subway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#d8d8d8ff"
                                    }
                                }, {
                                    "featureType": "subway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "subway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "subway",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#979c9aff"
                                    }
                                }, {
                                    "featureType": "subway",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffffff"
                                    }
                                }, {
                                    "featureType": "continent",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "province",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "province",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "province",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "province",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                },  {
                                    "featureType": "city",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "city",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "city",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "city",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "town",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "town",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "town",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2e6d69ff"
                                    }
                                }, {
                                    "featureType": "town",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "road",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "poilabel",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "districtlabel",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "road",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "road",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "road",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "district",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "poilabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "poilabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "poilabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "manmade",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "districtlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffffff"
                                    }
                                }, {
                                    "featureType": "entertainment",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "shopping",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "stylers": {
                                        "level": "6",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "stylers": {
                                        "level": "7",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "stylers": {
                                        "level": "8",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "stylers": {
                                        "level": "9",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "stylers": {
                                        "level": "10",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "6",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "7",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on",
                                        "level": "8",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "9",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "10",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on",
                                        "level": "6",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on",
                                        "level": "7",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on",
                                        "level": "8",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on",
                                        "level": "9",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on",
                                        "level": "10",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-10"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "stylers": {
                                        "level": "6",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "stylers": {
                                        "level": "7",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "stylers": {
                                        "level": "8",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "stylers": {
                                        "level": "9",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "6",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "7",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "8",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "9",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "6",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "7",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "8",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off",
                                        "level": "9",
                                        "curZoomRegionId": "0",
                                        "curZoomRegion": "6-9"
                                    }
                                }, {
                                    "featureType": "subwaylabel",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "subwaylabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "tertiarywaysign",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "tertiarywaysign",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "provincialwaysign",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "provincialwaysign",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "nationalwaysign",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "nationalwaysign",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "highwaysign",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "highwaysign",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "village",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "district",
                                    "elementType": "labels.text",
                                    "stylers": {
                                        "fontsize": "20"
                                    }
                                }, {
                                    "featureType": "district",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#35c49bff"
                                    }
                                }, {
                                    "featureType": "district",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "country",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "country",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "water",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "water",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "tertiaryway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "tertiaryway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff10"
                                    }
                                }, {
                                    "featureType": "provincialway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "provincialway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "highway",
                                    "elementType": "labels.text",
                                    "stylers": {
                                        "fontsize": "20"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "nationalway",
                                    "elementType": "labels.text",
                                    "stylers": {
                                        "fontsize": "20"
                                    }
                                }, {
                                    "featureType": "provincialway",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "provincialway",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "provincialway",
                                    "elementType": "labels.text",
                                    "stylers": {
                                        "fontsize": "20"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "labels.text",
                                    "stylers": {
                                        "fontsize": "20"
                                    }
                                }, {
                                    "featureType": "cityhighway",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "estate",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "tertiaryway",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "tertiaryway",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "fourlevelway",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "fourlevelway",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "scenicspotsway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "scenicspotsway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "universityway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "universityway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "vacationway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "vacationway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "fourlevelway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "fourlevelway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#12223dff"
                                    }
                                }, {
                                    "featureType": "fourlevelway",
                                    "elementType": "geometry.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "transportationlabel",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "transportationlabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "transportationlabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "transportationlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "educationlabel",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "on"
                                    }
                                }, {
                                    "featureType": "educationlabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "educationlabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "educationlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "transportation",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "color": "#113549ff"
                                    }
                                }, {
                                    "featureType": "airportlabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "airportlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "scenicspotslabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "scenicspotslabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "medicallabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "medicallabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "medicallabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "scenicspotslabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "airportlabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "entertainmentlabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "entertainmentlabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "entertainmentlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "estatelabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "estatelabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "estatelabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "businesstowerlabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "businesstowerlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "businesstowerlabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "companylabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "companylabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "companylabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "governmentlabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "governmentlabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "governmentlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "restaurantlabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "restaurantlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "restaurantlabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "hotellabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "hotellabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "hotellabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "shoppinglabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "shoppinglabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "shoppinglabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "lifeservicelabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "lifeservicelabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "lifeservicelabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "carservicelabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "carservicelabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "carservicelabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "financelabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "financelabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "financelabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "otherlabel",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "otherlabel",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "otherlabel",
                                    "elementType": "labels.icon",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "manmade",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "manmade",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "transportation",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "transportation",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "education",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "education",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "medical",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "medical",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "scenicspots",
                                    "elementType": "labels.text.fill",
                                    "stylers": {
                                        "color": "#2dc4bbff"
                                    }
                                }, {
                                    "featureType": "scenicspots",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }, {
                                    "featureType": "country",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }, {
                                    "featureType": "village",
                                    "elementType": "labels.text.stroke",
                                    "stylers": {
                                        "color": "#ffffff00"
                                    }
                                }]
                            }
                        },
                        series : [
                                {
                                    name: '',
                                    type: 'custom',
                                    coordinateSystem: 'bmap',
                                    data: convertData(this.mapData),
                                    renderItem: (params, api)=> {//自定义图标的方法
                                        return {
                                            type: 'image',
                                            style: {
                                                // image:!this.showBigImg && data[params.dataIndex].isOnline=='1' ? mapImg : (!this.showBigImg && data[params.dataIndex].isOnline=='0' ? mapImg1  : (data[params.dataIndex].isOnline=='1' &&  data[params.dataIndex].isRepaire=='1'? mapImg3 : (data[params.dataIndex].isOnline=='1' &&  data[params.dataIndex].isRepaire=='0' ? mapImg2 : (data[params.dataIndex].isOnline=='0' &&  data[params.dataIndex].isRepaire=='1' ? mapImg4 : (data[params.dataIndex].isOnline=='0' &&  data[params.dataIndex].isRepaire=='0' ? mapImg5 : mapImg2))))),
                                                image:data[params.dataIndex].isOnline=='1' &&  data[params.dataIndex].isRepaire=='1'? mapImg3 : (data[params.dataIndex].isOnline=='1' &&  data[params.dataIndex].isRepaire=='0' ? mapImg2 : (data[params.dataIndex].isOnline=='0' &&  data[params.dataIndex].isRepaire=='1' ? mapImg4 : (data[params.dataIndex].isOnline=='0' &&  data[params.dataIndex].isRepaire=='0' ? mapImg5 : mapImg2))),
                                                x:!this.showBigImg ? api.coord([geoCoordMap[data[params.dataIndex].machineCode][0],geoCoordMap[data[params.dataIndex].machineCode][1]])[0]-this.otherWidth : api.coord([geoCoordMap[data[params.dataIndex].machineCode][0],geoCoordMap[data[params.dataIndex].machineCode][1]])[0]-45,//图标位置,经纬度-图标本身大小进行调整
                                                y:!this.showBigImg ? api.coord([geoCoordMap[data[params.dataIndex].machineCode][0],geoCoordMap[data[params.dataIndex].machineCode][1]])[1]-this.otherHeight :api.coord([geoCoordMap[data[params.dataIndex].machineCode][0],geoCoordMap[data[params.dataIndex].machineCode][1]])[1]-90,
                                                width:!this.showBigImg ? this.iconWidth : 90,
                                                height:!this.showBigImg ? this.iconHeight : 122
                                            },
                                            z2:data[params.dataIndex].zIndex//同一地址图标的层级
                                        }
                                    },
                                    hoverAnimation: true,
                                    itemStyle: {
                                        color: 'purple',
                                        shadowBlur: 10,
                                        shadowColor: '#333'
                                    },
                                    zlevel: 1
                                }
                            ]
                        
                        };
                        //初始化图表
                        const chartObj = echarts.init(document.getElementById(this.elId))
                        this.chartObj=chartObj
                        chartObj.setOption(this.option)
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
                        //点击显示设备的月销售数据
                        chartObj.on('click',(params)=>{
                            //调用父元素获取具体数据以及弹框的方法
                            let machineCode=params.value[6]
                            this.$emit('showDetails',params.value[6])
                        })
                        //监听滚轮缩放
                        var map = chartObj.getModel().getComponent("bmap").getBMap()//拿到百度地图实例
                        map.setMinZoom(5);
                        map.addEventListener("zoomend", (e)=>{
                            var ZoomNum = map.getZoom()
                            //动态计算各个缩放比例下图表的大小
                            if(ZoomNum>=19){
                                this.showBigImg=true
                            }else if(ZoomNum>=12){
                                this.iconWidth=4.5*ZoomNum
                                this.iconHeight=6*ZoomNum
                                this.otherWidth=4.5*ZoomNum/2
                                this.otherHeight=5*ZoomNum
                                this.showBigImg=false
                            }else{
                                this.iconWidth=45
                                this.iconHeight=60
                                this.otherWidth=20
                                this.otherHeight=50
                                this.showBigImg=false
                            }
                            this.$nextTick(_ => {//生成后重绘一次
                                chartObj.resize()
                            })
                            });
                    }).catch(() => {
                            
                        })
        },
        reflash(){
            var map=this.chartObj.getModel().getComponent("bmap").getBMap()
            //将指定的机器的图标层级放大
            for(let i in this.mapData){
                if(this.mapData[i].machineCode==this.location.machineCode){
                    this.mapData[i].zIndex=2
                }else{
                    this.mapData[i].zIndex=1
                }
            }
            //重新生成地图
            this.chartObj.setOption(this.option)
            //修改地图中心点和缩放层级
            map.centerAndZoom(new BMap.Point(this.location.Lng,this.location.Lat), 19)
            this.$nextTick(_ => {//生成后重绘一次
                this.chartObj.resize()
            })
        }
    },
    watch: {
      //监听location的变化
        location: {
        handler(newVal,oldVal) {
          this.reflash()
        },
        deep: true //对象内部属性的监听，关键。
      }
    },
  }
</script>
<style scoped>
  .container{width: 100%;height: 100%}
  
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