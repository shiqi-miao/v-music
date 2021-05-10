<style scoped>
.reg-container {
    width: 100vw;
    height: 100vh;
}
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.index-title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: #000000;
    color: #ffffff;
    opacity: 0.8;
    padding: 1.5vh 4vw;
    font-weight: 600;
    font-size: 1.4vw;
}
.index-title span {
    width: 40;
}
.flex-1 {
    flex: 1;
}
.out {
    padding-left: 2vw;
    font-size: 1vw;
}
.hover {
    cursor: pointer;
}
.right {
    text-align: right;
}
.danger {
    color: #f56c6c;
}
.orange {
    color: #e6a23c;
}
.success {
    color: #67c23a;
}
.super-b {
    font-size: 8vw;
    margin: 6vh 0;
}
.content {
    margin-top: 4vh;
    padding-bottom: 10vh;
}
.grey-title {
    font-size: 2.2vw;
    font-weight: 600;
    color: #999999;
    padding: 2vh 0;
    text-align: center;
}
.sub-title {
    font-size: 1.8vw;
    font-weight: 600;
    color: #333333;
    padding: 1vh 0;
    text-align: center;
}
.input-search {
    margin-top: 4vh;
    margin-bottom: 1vh;
}
.input-search-btn {
    cursor: pointer;
}
.b-line {
    padding: 6px 0;
}
.b {
    font-weight: 600;
}
.info {
    margin-bottom: 6vh;
}
.center {
    text-align: center;
}
li {
    padding: 4px 0;
}
.note {
    color: #666666;
    font-size: 12px;
    padding: 4px 0;
}
.step{
    width: 50%;
    margin:0 auto
    }
.step .img{width:100%}
</style>

<template>
    <div class="reg-container flex-center">
        <div class="index-title">
            <div class="flex-center">
                <span class="flex-1">光芽科技 | 新零售 新能力</span>
                <span class="flex-1 right">
                    <span class="out">{{userName}}</span>
                    <span @click="logout"
                          class="out hover">退出</span>
                </span>
            </div>
        </div>
        <div class="content"
             v-if="step == 1">
            <div class="grey-title">欢迎接入「光芽新零售」</div>
            <div class="sub-title">绑定您的闪光无人售货机</div>
            <el-input placeholder="请输入设备的S/N号"
                      v-model="machineCode"
                      class="input-search"
                      onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;">
                <el-button slot="append"
                           icon="el-icon-search"
                           @click="search"
                           class="input-search-btn"></el-button>
            </el-input>
            <div class="flex-center-Y"
                 v-if="machineCodeResult == 1">
                <!-- <i class="el-icon-success success"></i> -->
                <i class="el-icon-error danger"></i>
                &nbsp;无效的设备SN号
            </div>
            <div class="flex-center-Y"
                 v-if="machineCodeResult == 2">
                <i class="el-icon-error danger"></i>
                &nbsp;该设备已被绑定
            </div>
            <div v-if="machineCodeResult == 3">
                <div class="flex-center info">
                    <div><img :src="info.pic"
                             alt=""></div>
                    <div>
                        <div class="b-line">
                            <span class="b">设备SN：</span>
                            {{this.info.machineCode}}
                        </div>
                        <div class="b-line">
                            <span class="b">售货机类型：</span>
                            <span>{{this.info.typeName}}</span>
                            <!-- <span v-if="info.typeId==1">格子机</span>
                            <span v-else-if="info.typeId==2">弹簧机</span> -->
                        </div>
                        <div class="b-line">
                            <span class="b">货道类型：</span>
                            {{this.info.trailsType}}
                        </div>
                        <div class="b-line">
                            <span class="b">激活时间：</span>
                            <span v-if="info.gmtActivated">{{info.gmtActivated}}</span>
                            <span v-else>未激活</span>
                            <!-- <span v-if="info.activateStatus==0">未激活</span>
                            <span v-else>{{info.gmtActivated}}</span> -->
                        </div>
                    </div>
                </div>
                <div class="center">
                    <el-button v-if="info.gmtActivated"
                               type="primary"
                               round
                               @click="step=2">立即绑定</el-button>
                    <el-button v-else
                               type="primary"
                               round
                               @click="step=2">立即激活</el-button>
                </div>
            </div>

        </div>
        <div class="content"
             v-else-if="step == 2">
            <div class="grey-title">激活设备</div>
            <div class="sub-title">将售货机配置上网</div>
            <br>
            <div class="flex-center">
                <el-button type="primary"
                           plain
                           v-if="activeTab==1">网线连接</el-button>
                <el-button plain
                           v-else
                           @click="stwich(1)">网线连接</el-button>
                &emsp;&emsp;&emsp;
                <el-button type="primary"
                           plain
                           v-if="activeTab==2">wifi连接</el-button>
                <el-button plain
                           v-else
                           @click="stwich(2)">wifi连接</el-button>
            </div>
            <div v-if="activeTab==1">
                <ul class="step">
                    <li>将售货机（背后）网口与路由器（联网状态）通过网线进行连接</li>
                    <li>售货机联网成功后，网络指示灯常亮</li>
                    <img src="../../assets/machine/step1.png"
                                 alt=""
                                 class="img"
                                >
                </ul>
            </div>
            <div v-else>
                <ul class="step">
                    <li>将售货机（背后）网口与路由器（联网状态）通过wifi进行连接</li>
                    <li>长按售货机（背后）的配网按钮约3秒，网络指示灯进行明暗闪烁</li>
                    <li>手机连接此wifi，通过APP设置-设备上网，将售货机配置上网</li>
                    <img src="../../assets/machine/step2.png"
                                 alt=""
                                 class="img"
                                >
                </ul>
            </div>
            <div class="center">
                <el-button type="primary"
                           round
                           @click="toActive">设备已联网</el-button>
            </div>
        </div>
        <div class="content"
             v-else-if="step == 3">
            <div class="grey-title">激活设备</div>
            <div class="sub-title">闪一闪激活确认设备</div>
            <ul class="step">
                <li>请下载「闪易APP」，并登陆账号{{userName}}</li>
                <li>在进度条结束之前，对着设备进行「一闪激活」</li>
                <img src="../../assets/machine/step3.png"
                                 alt=""
                                 class="img"
                                >
            </ul>
            <img src=""
                 alt="">
            <div class="note"
                 v-if="percentage <=50">
                <i class="el-icon-loading"></i>
                等待一闪激活
            </div>
            <div class="note"
                 v-else>
                <i class="el-icon-loading"></i>
                初始化中...
            </div>
            <el-progress :text-inside="true"
                         :stroke-width="18"
                         :percentage="percentage"
                         status="success">
            </el-progress>
        </div>
        <div class="content"
             v-else-if="step == 4">
            <div class="grey-title"
                 v-if="activeSuccess">激活成功</div>
            <div class="grey-title"
                 v-else>激活失败</div>
            <div class="sub-title"
                 v-if="activeSuccess">
                售货机「{{info.machineCode}}」已成功激活
                <br>
                <i class="el-icon-success success super-b"></i>
            </div>
            <div class="sub-title"
                 v-else>
                <span v-if="timeCount <= 0">
                    闪一闪激活超时
                    <br>
                    <i class="el-icon-error danger super-b"></i>
                </span>
                <span v-else>
                    系统初始化失败
                    <br>
                    <i class="el-icon-error danger super-b"></i>
                </span>
            </div>
            <div class="center"
                 v-if="activeSuccess">
                <el-button type="primary"
                           round
                           @click="toIndex">进入管理平台</el-button>
            </div>
            <div class="center"
                 v-else>
                <el-button type="primary"
                           round
                           @click="toActive">重新激活</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            machineCode: "",
            machineCodeResult: 0,
            step: 1,
            info: {},
            activeSuccess: false,
            activeTab: 1,
            percentage: 0,
            timeCount: 0,
            activeIntervalTime: 5000,
            activeInterval: "",
            percentageInterval: ""
        };
    },
    created() {},
    computed: {
        ...mapGetters(["userName", "user"])
    },
    methods: {
        submit() {},
        stwich(index) {
            this.$set(this, "activeTab", index);
        },
        toActive() {
            this.step = 3;
            this.timeCount = 1000 * 60 * 5; //5分钟超时
            this.percentage = 0;
            this.active();
            this.activeInterval = setInterval(() => {
                this.timeCount = this.timeCount - this.activeIntervalTime;
                if (this.timeCount > 0) {
                    this.active(this.activeInterval);
                } else {
                    this.activeSuccess = false; //超时
                    this.step = 4;
                    window.clearInterval(this.activeInterval);
                }
            }, this.activeIntervalTime);

            this.percentageInterval = setInterval(() => {
                if (this.percentage < 50) {
                    this.$set(this, "percentage", ++this.percentage);
                } else {
                    window.clearInterval(this.percentageInterval);
                }
            }, 1000);
        },
        active() {
            this.api({
                url: "/operator/findIsVendByCode",
                method: "post",
                data: {
                    machineCode: this.machineCode,
                    name: this.userName
                    // name:'18668246781'
                }
            }).then(data => {
                if (data.returnCode == "91165") {
                } else {
                    window.clearInterval(this.activeInterval);
                    window.clearInterval(this.percentageInterval);
                    this.info.id = data.id;
                    this.info.name = data.name;
                    this.percentage = 50;
                    this.init();
                }
            });
        },
        init() {
            this.percentageInterval = setInterval(() => {
                if (this.percentage < 90) {
                    this.$set(this, "percentage", ++this.percentage);
                } else {
                    window.clearInterval(this.percentageInterval);
                }
            }, 1000);
            this.api({
                url: "/operator/addAisleInfo ",
                method: "post",
                data: {
                    machineCode: this.info.machineCode,
                    // machineCode:'12018080100001',
                    trailsType: this.info.trailsType,
                    typeId: this.info.typeId,
                    name: this.info.name,
                    id: this.info.id
                }
            }).then(data => {
                window.clearInterval(this.percentageInterval);
                if (data.returnCode) {
                    this.activeSuccess = false;
                    this.step = 4;
                } else {
                    this.activeSuccess = true;
                    this.step = 4;
                }
            });
        },
        toIndex() {
            let userData = this.user;
            userData.ownerNum = 1;
            this.$store.commit("SET_USER", userData);
            this.$router.push({
                path: "/index"
            });
        },
        search() {
            if (!this.machineCode) {
                this.$message({
                    type: "warning",
                    message: "请输入设备的S/N号"
                });
                return;
            }
            this.api({
                url: "/operator/findVendInfoByCode",
                method: "post",
                data: {
                    machineCode: this.machineCode
                }
            }).then(data => {
                if (data.returnCode == "99813") {
                    this.machineCodeResult = 1;
                } else if (data.returnCode == "99814") {
                    this.machineCodeResult = 2;
                } else {
                    this.info = data;
                    this.machineCodeResult = 3;
                }
            });
        },
        logout() {
            this.$store.dispatch("LogOut").then(() => {
                location.reload(); // 为了重新实例化vue-router对象 避免bug
            });
        }
    }
};
</script>

