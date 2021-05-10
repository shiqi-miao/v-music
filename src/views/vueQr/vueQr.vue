<template>
  <div class="qr">
      <div class="new" v-show='showNew' @click="getNew">点击刷新</div>
      <vue-qr :text="downloadData.url" :margin="10" colorDark="#000" colorLight="#fff" :dotScale="1" :logoSrc="downloadData.icon" :logoScale="0.2" :size="200" :colorDark="downloadData.color"></vue-qr>
  </div>
</template>
 
<script>
import vueQr from 'vue-qr'
export default {
    components: {
        vueQr
    },
    data() {
        return {
            downloadData: {
                color:"#000",
                url: '',  //需要转化成二维码的网址
                // icon: require('./xxx.jpg')  //二维码中间的图片,可以不设置
                time:5000,//过期时间
            },
            showNew:false,//刷新
            // webSoket
            websock: null,
            reconnectData:null,
            lockReconnect:false,    //避免重复连接，因为onerror之后会立即触发 onclose
            timeout:3000,          //10s一次心跳检测
            timeoutObj:null,
            serverTimeoutObj:null,
            // webSoket
            }
    },
    created(){
        this.getData()
        this.initWebSocket();
    },
    methods:{
        getData(){
            this.downloadData.color="#000"
            this.downloadData.url='https://mr.baidu.com/r/6yq5aub?f=cp&u=1fee8b5ba282da65'
            this.downloadData.time=10000
            this.showNew=false
            setTimeout(() => {
                this.downloadData.color="#999"
                this.showNew=true
            }, this.downloadData.time)
        },
        getNew(){
            this.getData()
        },
        //webSoket
      initWebSocket(){
            console.log('启动中')
            // let wsurl = 'ws://192.168.1.176:8085/business-travel/api/messageWebSocket/68086918ab79ec6c6c4beb7b0abcbb2cbb6c2c5b5b1c5c9b9b7a1b7beb7bbc2abc';
            // let wsurl = 'wss://test.31youke.com:4001/business-travel/api/messageWebSocket/68086918ab79ec6c6c4beb7b0abcbb2cbb6c2c5b5b1c5c9b9b7a1b7beb7bbc2abc';
            let wsurl = 'ws://192.168.1.171:8182/seedling-merchant/websocket';
            this.websock = new WebSocket(wsurl);
            this.websock.onopen = this.websocketonopen;          //连接成功
            this.websock.onmessage = this.websocketonmessage;    //广播成功
            this.websock.onerror = this.websocketonerror;        //连接断开，失败
            this.websock.onclose = this.websocketclose;          //连接关闭
        },             //初始化weosocket
      websocketonopen(){
          console.log('连接成功')
          this.heatBeat();
      },           //连接成功
      websocketonerror(){
          console.log('连接失败')
          this.reconnect();
      },          //连接失败
      websocketclose(){
          console.log('断开连接');
          this.reconnect();
      },            //各种问题导致的 连接关闭
      websocketonmessage(data){
          this.heatBeat();      //收到消息会刷新心跳检测，如果一直收到消息，就推迟心跳发送
        let msgData=JSON.parse(data.data)
          console.log(msgData.data)
          if(msgData.data!='10000' && msgData.data!='连接成功'){
            this.roll=true
            this.show=true
            this.once=false
            this.resultNum=msgData.data
            if(this.roll){
                setTimeout(()=> {
                    this.roll = false;
                    this.show=false
                    }, 10000)
            }
          }
        
      },    //数据接收
      websocketsend(data){
          this.websock.send(JSON.stringify(data));
      },         //数据发送
      reconnect(){
          if(this.lockReconnect){       //这里很关键，因为连接失败之后之后会相继触发 连接关闭，不然会连接上两个 WebSocket
              return
          }
          this.lockReconnect = true;
          this.reconnectData && clearTimeout(this.reconnectData);
          this.reconnectData = setTimeout(()=>{
              this.initWebSocket();
              this.lockReconnect = false;
          },3000)
      },                 //socket重连
      heatBeat(){
          this.timeoutObj && clearTimeout(this.timeoutObj);
          this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
          this.timeoutObj = setTimeout(()=>{
              this.websocketsend(this.heartData)   //根据后台要求发送
              this.serverTimeoutObj = setTimeout(()=> {
                  this.websock.close();       //如果  3秒之后我们没有收到 后台返回的心跳检测数据 断开socket，断开后会启动重连机制
              }, 3000);
          }, this.timeout)
      },                  //心跳检测
      //webSoket
        
    }
}
</script>
<style lang='scss' scoped>
    .qr{position: relative;width:200px;height:200px;margin:0 auto;
        .new{position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);background: #f5f7fa;color: #E24E4E;text-align: center;line-height: 1;font-size: 20px;padding: 10px;cursor: pointer;}
    }

</style>