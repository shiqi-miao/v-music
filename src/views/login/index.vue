<style rel="stylesheet/scss" lang="scss">
@import "../../styles/mixin.scss";

$bg: #2d3a4b;
$white:#FFFFFF;
$dark_gray: #889aa4;
$light_gray: #eee;
$gray:#F9F9F9;
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}
.flex-end {
    font-size:20px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: flex-end;
    -webkit-justify-content:flex-end;
}
.flex-center-Y {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}
.index-title {
    position: fixed;
    top: 0;
    width: 100vw;
    background: #000000;
    color: #ffffff;
    opacity: 0.8;
    padding: 1.5vh 4vw;
    font-weight: 600;
    font-size: 1.4vw;
}
.login-container {
    // @include relative;
    height: 100vh;
    width: 100vw;
    background-color: $white    ;
    input:-webkit-autofill {
        // -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
        // -webkit-text-fill-color: #fff !important;
        -webkit-box-shadow: 0 0 0px 1000px #F9F9F9 inset !important;
    }
    input {
        background: $gray;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 40px;
        padding: 8% 15%;
        color: #888888;
    }
    .el-input {
        display: inline-block;
        height: 100%;
        width: 100%;
        font-size:24px;
        background: #ffffff !important;
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
    }
    .all-left{
        width:62.5%;
        height:100%;
        background-image: url("../../assets/super/banner-lg.png");
        background-size:cover
        
    }
    .all-right{
        width:37.5%;
        height:100%;
        position: relative;
    }
    .box{
        height:100%
    }
    .login-form {
        // position: fixed;
        // right: 10vw;
        // top: 20vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 70%;
        // padding: 50px 35px;
        // background: rgba(0, 0, 0, 0.4);
        background-color: $white;
        .box-title {
            color: rgba(51,51,51,1);
            text-align: center;
            font-size: 24px;
            font-weight: 400;
            text-align: left;
            margin-bottom: 4vh;
        }
        .chrome-line {
            color: rgba(166,166,166,1);
            font-size: 20px;
            a {
                cursor: pointer;
                color: rgba(23,38,74,1);
                opacity: 1;
                font-weight: 600;
                margin-left: 15px
            }
        }

        .login-type {
            flex: 0.4;
            cursor: pointer;
            color: rgba(23,38,74,1);
            text-align: center;
            &.left {
                text-align: left;
            }
            &.right {
                text-align: right;
            }
        }
    }
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        color: #454545;
    }
    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
    }
    .login-btn {
        background: #1F3772;
        border-color: #1F3772;
        border-radius: 40px
    }
    .login-btn-box {
        margin: 10vh 0;
        margin-bottom:3vh;
    }
}
.form-item .el-form-item__content {
    display: flex;
}
.flex-input {
    flex: 1 !important;
}
.flex-btn {
    width: 42%;
    border-radius: 0;
    cursor: pointer;
    padding: 5.5% 0;
    text-align: center;
    font-size:24px
}
.login-logo{
    width:50%;
    margin-bottom:4%;
    position: relative;
    img{width:100%}
    .mask{
        position: absolute;
        width: 120%;
        height:50%;
        bottom: 0;
        background:#FFE0B6;
        z-index:-1
    }
}
.icon-phone{
    .el-input__inner{
    background-image:url("../../assets/super/phone-lg.png")!important;
    background-repeat: no-repeat!important;
    background-position: 4vh!important;
    background-size: 4%!important
    }
}
.icon-pwd{
    .el-input__inner{
    background-image:url("../../assets/super/pwd-lg.png")!important;
    background-repeat: no-repeat!important;
    background-position: 4vh!important;
    background-size: 4%!important
    }
}
.icon-code{
    .el-input__inner{
    background-image:url("../../assets/super/code-lg.png")!important;
    background-repeat: no-repeat!important;
    background-position: 4vh!important;
    background-size: 4%!important
    }
}
.underlie{
    text-decoration:underline
}
.btn-shadow{box-shadow:0px 20px 20px -10px rgba(31,55,114,0.5);}
.el-checkbox{margin-right: 10px}
@media screen and (max-width: 1519px) {
    .login-container .el-input,.flex-btn,.chrome-line{
        font-size: 18px!important;
    }
    .login-small{
        font-size: 20px!important
    }
    .flex-end{
        font-size: 16px
    }

}
</style>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"] {
    -moz-appearance: textfield;
}
</style>

<template>
    <div class="login-container">
        <el-row class="box">
            <el-col class="all-left">
            </el-col>
            <el-col class="all-right">
                <!-- <div class="index-title">光芽科技 | 新零售 新能力</div> -->
                <el-form autoComplete="on"
                        :model="loginForm"
                        :rules="loginRules"
                        ref="loginForm"
                        label-position="left"
                        class="card-box login-form"
                        v-if="loginType==1">
                        <div class="login-logo">
                            <div class="mask"></div>
                            <img src="../../assets/super/loglogo-lg.png" alt="">
                        </div>
                    <div class="box-title">
                        短信快捷登录
                    </div>
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username"
                                class="icon-phone"
                                autoComplete="on"
                                placeholder="请输入手机号码"
                                type='number'
                                maxlength="11"
                                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                    </el-form-item>
                    <el-form-item prop="code"
                                class="">
                        <el-input type="number"
                                class="flex-input icon-code"
                                style="position:relative"
                                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
                                @keyup.enter.native="handleLogin(2)"
                                v-model="loginForm.code"
                                autoComplete="on"
                                placeholder="请输入验证码"></el-input>
                        <el-button type="primary"
                                class="login-btn flex-btn"
                                style="position:absolute;top:0;right:0"
                                @click.native.prevent="getLoginCode">
                            <span v-if="count>0" style="font-size:18px">{{count}}s后可重新发送</span>
                            <span v-else>发送验证码</span>
                        </el-button>
                    </el-form-item>
                    <div class="chrome-line" v-if="!Chrome">
                        Chrome浏览器,带给你更好的体验
                        <a href="http://www.downza.cn/soft/26885.html"
                        target="_blank " class="underlie">点击下载</a>
                    </div>
                    <el-form-item class="login-btn-box">
                        <el-button type="primary"
                                class="login-btn btn-shadow login-small"
                                style="width:48%;float:right;font-size:30px;padding:4.9% 0"
                                :loading="loading"
                                @click.native.prevent="handleLogin(2)">
                            登 录
                        </el-button>
                    </el-form-item>
                    <div class="flex-end">
                        <div class="login-type right underlie"
                            @click="loginType=2">运营商注册</div>
                        <div class="login-type right underlie"
                            @click="loginType=3">用户名密码登录</div>
                    </div>
                </el-form>
                <el-form autoComplete="on"
                        :model="regForm"
                        :rules="regRules"
                        ref="loginForm"
                        label-position="left"
                        class="card-box login-form"
                        v-if="loginType==2"
                        label-width="0px">
                    <div class="login-logo">
                            <div class="mask"></div>
                            <img src="../../assets/super/loglogo-lg.png" alt="">
                    </div>
                    <div class="box-title">
                        运营商注册
                    </div>
                    <el-form-item prop="username">
                        <el-input v-model="regForm.username"
                                class="icon-phone"
                                autoComplete="on"
                                placeholder="请输入手机号码"
                                type='number'
                                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                    </el-form-item>
                    <el-form-item prop="code"
                                class="">
                        <el-input type="number"
                                class="flex-input icon-code"
                                style="position:relative"
                                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
                                @keyup.enter.native="handleLogin"
                                v-model="regForm.code"
                                autoComplete="on"
                                placeholder="请输入验证码"></el-input>
                        <el-button type="primary"
                                class="login-btn flex-btn"
                                style="position:absolute;top:0;right:0"
                                @click.native.prevent="getRegCode">
                            <span v-if="regCount>0" style="font-size:18px">{{regCount}}s后可重新发送</span>
                            <span v-else>发送验证码</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                                @keyup.enter.native="handleLogin"
                                v-model="regForm.password"
                                autoComplete="on"
                                class="icon-pwd"
                                placeholder="请设置密码"></el-input>
                    </el-form-item>
                    <div class="chrome-line flex-center-Y">
                        <el-checkbox v-model="checked"></el-checkbox>
                        <span>注册前阅读并同意</span>
                        <a href="" class="underlie">服务条款</a>
                    </div>
                    <el-form-item class="login-btn-box">
                        <el-button type="primary"
                                class="login-btn login-small"
                                style="width:48%;float:right;font-size:30px;padding:4.9% 0"
                                :loading="loading"
                                @click.native.prevent="register">
                            确认注册
                        </el-button>
                    </el-form-item>
                    <div class="flex-end">
                        <div class="login-type right underlie"
                            @click="loginType=1">验证码登录</div>
                        <div class="login-type right underlie"
                            @click="loginType=3">用户名密码登录</div>
                    </div>
                </el-form>
                <el-form autoComplete="on"
                        :model="loginForm"
                        :rules="loginRules"
                        ref="loginForm"
                        label-position="left"
                        class="card-box login-form"
                        v-if="loginType==3">
                    <div class="login-logo">
                            <div class="mask"></div>
                            <img src="../../assets/super/loglogo-lg.png" alt="">
                    </div>
                    <div class="box-title">
                        用户名密码登录
                    </div>
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username"
                                class="icon-phone"
                                autoComplete="on"
                                placeholder="请输入手机号码"
                                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                                @keyup.enter.native="handleLogin(1)"
                                v-model="loginForm.password"
                                autoComplete="on"
                                class="icon-pwd"
                                placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary"
                                class="login-btn btn-shadow login-small"
                                style="width:48%;float:right;font-size:30px;padding:4.9% 0"
                                :loading="loading"
                                @click.native.prevent="handleLogin(1)">
                            登 录
                        </el-button>
                    </el-form-item>
                    <div class="flex-end">
                        <div class="login-type right underlie"
                            @click="loginType=2">运营商注册</div>
                        <div class="login-type right underlie"
                            @click="loginType=1">验证码登录</div>
                    </div>
                </el-form>
            </el-col>
        </el-row>
        
    </div>
</template>
  <script>
export default {
    name: "login",
    data() {
        return {
            loginForm: {
                username: "",
                password: "",
                code: ""
            },
            regForm: {
                username: "",
                password: "",
                code: ""
            },
            loginRules: {
                // username: [{required: true, trigger: 'blur', message: "请输入登录账号"}],
                // password: [{required: true, trigger: 'blur', message: "请输入登录密码"}],
                // code: [{required: true, trigger: 'blur', message: "请输入验证码"}]
            },
            regRules: {
                // username: [{required: true, trigger: 'blur', message: "请输入登录账号"}],
                // password: [{required: true, trigger: 'blur', message: "请输入登录密码"}],
                // code: [{required: true, trigger: 'blur', message: "请输入验证码"}]
            },
            loading: false,
            loginType: 1,
            checked: false,
            count: 0,
            regCount: 0,
            Chrome:false
        };
    },
    created(){
        this.isChrome()
    },
    methods: {
        isChrome(){
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            if (userAgent.indexOf("Chrome") > -1) {
                this.Chrome=true
            }
        },
        getLoginCode() {
            if (this.count > 0) {
                return;
            }
            if (!(this.loginForm.username.length == 11)) {
                this.$message.error("手机号码错误");
                return;
            }
            this.count = 60;
            let tCount = setInterval(() => {
                if (this.count > 0) {
                    this.count--;
                } else {
                    window.clearInterval(tCount);
                }
            }, 1000);
            this.api({
                url: "/login/sendCode",
                method: "post",
                data: {
                    userName: this.loginForm.username
                }
            }).then(data => {
                if (data.returnCode) {
                    this.$message({
                        type: "warning",
                        message: data.returnMsg
                    });
                    return;
                    // this.$set(this,'loginType',2)
                    // this.regForm.username = this.loginForm.username
                    // return
                } else {
                    this.$message({
                        type: "success",
                        message: "发送成功"
                    });
                }
            });
        },
        getRegCode() {
            if (this.regCount > 0) {
                return;
            }
            if (!(this.regForm.username.length == 11)) {
                this.$message.error("手机号码错误");
                return;
            }
            this.regCount = 60;
            let tCount = setInterval(() => {
                if (this.regCount > 0) {
                    this.regCount--;
                } else {
                    window.clearInterval(tCount);
                }
            }, 1000);
            this.api({
                url: "/login/sendCode",
                method: "post",
                data: {
                    userName: this.regForm.username
                }
            }).then(data => {
                if (data.returnCode) {
                    // this.$set(this,'loginType',2)
                    // this.regForm.username = this.loginForm.username
                    this.$message({
                        type: "warning",
                        message: data.returnMsg
                    });
                    return;
                } else {
                    this.$message({
                        type: "success",
                        message: "发送成功"
                    });
                }
            });
        },
        smsLogin() {
            if (!(this.loginForm.username.length == 11)) {
                this.$message.error("手机号码格式错误！");
                return;
            }
            if (!(this.loginForm.code.length == 4)) {
                this.$message.error("验证码格式错误！");
                return;
            }
        },
        register() {
            if (!(this.regForm.username.length == 11)) {
                this.$message.error("手机号码格式错误！");
                return;
            }
            if (!(this.regForm.code.length == 4)) {
                this.$message.error("验证码格式错误！");
                return;
            }
            if (!this.regForm.password) {
                this.$message.error("请输入密码");
                return;
            }
            let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
            let result = reg.test(this.regForm.password);
            if (!result) {
                this.$message({
                    type: "warning",
                    message: "请输入6-12位数字与字母组合的密码"
                });
                return;
            }
            if (!this.checked) {
                this.$message.error("请确认阅读服务条款");
                return;
            }
            this.regForm.optionType = "B";
            this.loading = true;
            this.$store
                .dispatch("Register", this.regForm)
                .then(data => {
                    this.loading = false;
                    if ("success" === data.result) {
                        this.regForm.loginType = true;
                        this.$store
                            .dispatch("Login", this.regForm)
                            .then(data => {
                                this.loading = false;
                                if (data.flag) {
                                    this.$router.push({ path: "/index" });
                                } else {
                                    this.$message.error("登录失败");
                                }
                            })
                            .catch(() => {
                                this.loading = false;
                            });
                    } else {
                        this.$message.error("注册失败");
                    }
                })
                .catch(() => {
                    this.loading = false;
                });
        },
        handleLogin(type) {
            if (!(this.loginForm.username.length == 11)) {
                this.$message.error("手机号码格式错误！");
                return;
            }
            if (type == 1) {
                this.loginForm.loginType = true;
                this.loginForm.code = "";
                if (!this.loginForm.password) {
                    this.$message.error("请输入密码！");
                    return;
                }
            }
            if (type == 2) {
                this.loginForm.loginType = false;
                this.loginForm.password = "";
                if (!this.loginForm.code) {
                    this.$message.error("请输入验证码！");
                    return;
                }
            }
            this.loading = true;
            this.$store
                .dispatch("Login", this.loginForm)
                .then(data => {
                    this.loading = false;
                    // if ("success" === data.result) {
                    //     this.$router.push({ path: "/index" });
                    // } else {
                    //     this.$message.error("账号/密码有误！");
                    // }
                    if (data.flag) {
                        // this.$store.commit("SET_TOKEN", data.token);//登录成功将token放到store里，以备调用
                        this.$router.push({ path: "/index" });
                    } else {
                        this.$message.error("账号/密码有误！");
                    }
                })
                .catch(() => {
                    this.loading = false;
                });
        }
    }
};
</script>
