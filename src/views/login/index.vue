<style rel="stylesheet/scss" lang="scss">
@import "../../styles/mixin.scss";

$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.flex-center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
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
    // background-image: url("../../assets/login/background.png");
    // background-size:100% 100%;
    // @include relative;
    height: 100vh;
    width: 100vw;
    background-color: #3a5882;
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: #333 !important;
    }
    input {
        background: transparent;
        border: 0px;
        border-bottom: 1px solid rgba(184, 191, 200, 1);
        text-align: center;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 4.5%;
        color: #333;
        font-size: 0.83333vw;
    }
    .el-input {
        display: inline-block;
        width: 100%;
        background: #ffffff !important;
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
    }
    .login-form {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 25vw;
        height: 55.7vh;
        background: #fff;
        .box-title {
            color: #ffc629;
            text-align: center;
            font-size: 28px;
            font-weight: 400;
            text-align: left;
            margin-bottom: 1vh;
        }
        .chrome-line {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            a {
                cursor: pointer;
                color: rgb(41, 141, 248);
                opacity: 1;
                font-weight: 600;
            }
        }

        .login-type {
            flex: 1;
            cursor: pointer;
            color: rgb(41, 141, 248);
            text-align: center;
            &.left {
                text-align: left;
            }
            &.right {
                text-align: right;
            }
        }
        .leftBox{
            position: relative;
            width: 50%;
            height: 100%;
            background-image: url("../../assets/login/left.png");
            background-size: 100% 100%;
            .logo{
                width: 3.125vw;
                height: 3.125vw;
                background-image: url("../../assets/login/logo.png");
                background-size: 100% 100%;
                position: absolute;
                top: 44%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            .name{
                width: 8.33333vw;
                height: 1.1vw;
                background-image: url("../../assets/login/name.png");
                background-size: 100% 100%;
                position: absolute;
                top: 56%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .rightBox{
            width: 100%;
            height: 100%;
        }
        .log-logo{
            width: 9vw;
            height: 2.7vw;
            background-image: url("../../assets/login/login.png");
            background-size: 100% 100%;
            margin: 0 auto;
            margin-top: 10vh;
            margin-bottom: 7vh;
        }
    }
    .el-form-item {
        width: 66.5%;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        color: #fff;
        margin: 0 auto;
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
        background: rgba(90, 157, 248, 1);
        border-color: rgba(90, 157, 248, 1);
    }
    .login-btn-box {
        margin: 2vh 0;
    }
}
.form-item .el-form-item__content {
    font-size: 0.8333vw;
    display: flex;
}
.flex-input {
    flex: 1 !important;
}
.flex-btn {
    width: 120px;
    border-radius: 0;
    cursor: pointer;
    padding: 0;
    text-align: center;
}
.el-button{border-radius: 20px;}
</style>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"] {
    -moz-appearance: textfield;
}
#login .el-input__inner{line-height: 4.2vh;height: 4.2vh;}
#login .el-button{padding: 4.1%;font-size: 0.8333vw;}
#login .el-form-item__content {
    line-height: 6vh
}
</style>

<template>
    <div class="login-container" id="login">
        <!-- <el-form autoComplete="on"
                    :model="loginForm"
                    :rules="loginRules"
                    ref="loginForm"
                    label-position="left"
                    class="card-box login-form"
                    v-if="loginType==1">
                <div class="box-title">
                    短信快捷登录
                </div>
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username"
                            autoComplete="on"
                            placeholder="请输入手机号码"
                            type='number'
                            maxlength="11"
                            onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                </el-form-item>
                <el-form-item prop="code"
                            class="form-item">
                    <el-input type="number"
                            class="flex-input"
                            onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
                            @keyup.enter.native="handleLogin(2)"
                            v-model="loginForm.code"
                            autoComplete="on"
                            placeholder="请输入验证码"></el-input>
                    <el-button type="primary"
                            class="login-btn flex-btn"
                            @click.native.prevent="getLoginCode">
                        <span v-if="count>0">{{count}}s后可重新发送</span>
                        <span v-else>发送验证码</span>
                    </el-button>
                </el-form-item>
                <div class="chrome-line">
                    请使用Chrome浏览器访问
                    <a href="http://www.downza.cn/soft/26885.html"
                    target="_blank">点击下载</a>
                </div>
                <el-form-item class="login-btn-box">
                    <el-button type="primary"
                            class="login-btn"
                            style="width:100%;"
                            :loading="loading"
                            @click.native.prevent="handleLogin(2)">
                        登 录
                    </el-button>
                </el-form-item>
                <div class="flex-center">
                    <div class="login-type left"
                        @click="loginType=2">运营商注册</div>
                    <div class="login-type right"
                        @click="loginType=3">用户名密码登录</div>
                </div>
        </el-form> -->
        <!-- <el-form autoComplete="on"
                    :model="regForm"
                    :rules="regRules"
                    ref="loginForm"
                    label-position="left"
                    class="card-box login-form"
                    v-if="loginType==2"
                    label-width="0px">
                <div class="box-title">
                    运营商注册
                </div>
                <el-form-item prop="username">
                    <el-input v-model="regForm.username"
                            autoComplete="on"
                            placeholder="请输入手机号码"
                            type='number'
                            onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" />
                </el-form-item>
                <el-form-item prop="code"
                            class="form-item">
                    <el-input type="number"
                            class="flex-input"
                            onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
                            @keyup.enter.native="handleLogin"
                            v-model="regForm.code"
                            autoComplete="on"
                            placeholder="请输入验证码"></el-input>
                    <el-button type="primary"
                            class="login-btn flex-btn"
                            @click.native.prevent="getRegCode">
                        <span v-if="regCount>0">{{regCount}}s后可重新发送</span>
                        <span v-else>发送验证码</span>
                    </el-button>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password"
                            @keyup.enter.native="handleLogin"
                            v-model="regForm.password"
                            autoComplete="on"
                            placeholder="请设置密码"></el-input>
                </el-form-item>
                <div class="chrome-line flex-center-Y">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span>注册前阅读并同意</span>
                    <a href="">服务条款</a>
                </div>
                <el-form-item class="login-btn-box">
                    <el-button type="primary"
                            class="login-btn"
                            style="width:100%;"
                            :loading="loading"
                            @click.native.prevent="register">
                        确认注册
                    </el-button>
                </el-form-item>
                <div class="flex-center">
                    <div class="login-type left"
                        @click="loginType=1">验证码登录</div>
                    <div class="login-type right"
                        @click="loginType=3">用户名密码登录</div>
                </div>
        </el-form> -->
        <el-form autoComplete="on"
                    :model="loginForm"
                    :rules="loginRules"
                    ref="loginForm"
                    label-position="left"
                    class="card-box login-form flex-center-Y"
                    v-if="loginType==3">
                <!-- <div class="leftBox">
                    <div class="logo"></div>
                    <div class="name"></div>
                </div> -->
                <div class="rightBox">
                <div class="log-logo"></div>
                <el-form-item prop="username">
                    <el-input v-model="loginForm.manageName"
                            autoComplete="on"
                            placeholder="请输入手机号码" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password"
                            @keyup.enter.native="handleLogin(1)"
                            v-model="loginForm.managePassword"
                            autoComplete="on"
                            placeholder="请输入登录密码"></el-input>
                </el-form-item>
                <el-form-item style="text-align:center">
                    <el-button type="primary"
                            class="login-btn"
                            style="width:67%;margin-top:6vh;"
                            :loading="loading"
                            @click.native.prevent="handleLogin(1)">
                        登 录
                    </el-button>
                </el-form-item>
                <!-- <div class="flex-center">
                    <div class="login-type left"
                        @click="loginType=2">运营商注册</div>
                    <div class="login-type right"
                        @click="loginType=1">验证码登录</div>
                </div> -->
                </div>
        </el-form>
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
            loginType: 3,
            checked: false,
            count: 0,
            regCount: 0
        };
    },
    // seedling-system/operator/registration 注册用户获取验证码
    methods: {
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
                url: "/operator/registration",
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
            // if (!(this.loginForm.username.length == 11)) {
            //     this.$message.error("手机号码格式错误！");
            //     return;
            // }
            if (!(this.loginForm.code.length == 4)) {
                this.$message.error("验证码格式错误！");
                return;
            }
        },
        register() {
            // if (!(this.regForm.username.length == 11)) {
            //     this.$message.error("手机号码格式错误！");
            //     return;
            // }
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
                                    this.$router.push({ path: "/" });
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
            if (type == 1) {
                this.loginForm.loginType = true;
                this.loginForm.code = "";
                if (!this.loginForm.manageName) {
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
                    if (data==true) {
                        this.$router.push({ path: "/" });
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
