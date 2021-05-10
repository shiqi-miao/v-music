<style lang="scss" scoped>
.title{
    font-size: 1.56vw;
    text-align: center;
    font-weight: 600;
    padding: 4.3vh;
}
.content{
    font-size: 14px;
    padding: 0 20vw;
    margin: 20px auto;
}
.center {
    text-align: center;
}
.bold{font-weight: bold}
.bigfont{font-size: 0.9375vw}
p{font-size: 0.8333vw;line-height: 2}
.box{width: 41.7vw;height: 58.7vh;border: 1px solid rgba(151, 151, 151, 1);margin: 0 auto;position: relative;}
.check{position: absolute;bottom: -4vh;left: 0;font-size: 0.8333vw}
.word{position: absolute;top: 0vh;left: 0;padding: 1vw;width: 100%;height: 100%;overflow-y:auto;}
.tip{position: absolute;bottom:2vh;right: 1vw;font-size: 0.8333vw}
.btn{width: 100%;height: 5.6vh;font-size: 1.04vw;color: #fff;background-color: rgba(201, 201, 201, 1);position: absolute;bottom: -12vh;left: 0;;line-height: 3vw;text-align: center}
.btn1{background-color: rgba(40, 110, 255, 1)}
.getCouponDialog{width: 23vw!important;height:25vh!important;padding: 2vh 2vw;color: #333;position: relative}
.getCouponDialog .title{margin-bottom: 1vh;font-weight: 600}
.getCouponDialog .word{font-weight: 500;line-height: 1.5}
.getCouponDialog .bottom{width: 100%;height: 4.5vh;justify-content: space-around;position: absolute;left: 0;bottom: 2vh}
.getCouponDialog .bottom .btn1{cursor: pointer;width: 20%;height:100%;color: #fff;background:#286EFF;text-align: center;line-height: 4.5vh}
.getCouponDialog .bottom .btn2{cursor: pointer;width: 20%;height:100%;color: #286EFF;border: 1px solid #286EFF;text-align: center;line-height: 4.5vh}
</style>
<style>
.getCouponClass .el-dialog__header,.getCouponClass .el-dialog__body,.getCouponClass .el-dialog__footer{padding:0}
.getCouponClass{width: 23vw!important;max-height: 30vh!important}
#getCoupon .el-checkbox__input.is-checked+.el-checkbox__label{color: rgba(40, 110, 255, 1);font-size: 0.8333vw}
#getCoupon .el-checkbox__label{font-size: 0.8333vw}
#getCoupon .el-checkbox__inner{width: 0.9vw;height: 0.9vw}
#getCoupon .el-checkbox__inner::after{width: 0.26vw;height: 0.42vw}
#getCoupon .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{background: rgba(40, 110, 255, 1);width: 0.9vw;height: 0.9vw}
</style>
<template>
    <div id="getCoupon">
        <div class="title">优惠券接入说明</div>
        <div class="box">
            <div class="word">
                <p class="center bold">优惠券技术服务协议</p>
                <p>欢迎您使用优惠券技术服务！</p>
                <p>《优惠券技术服务协议》（以下简称“本协议”）是杭州光芽科技有限公司（以下简称“光芽”或我们）与您就“优惠券技术服务”（以下简称“本服务”）在杭州市余杭区所订立的有效合约。为使用本服务，请您认真阅读并遵守本协议，特别是加粗的内容，如您不同意接受本协议的任意内容，或者无法准确理解相关条款含义的，请不要进行后续操作。您通过网络页面点击同意本协议或以其他方式接受本协议，或您对本服务的登录、查看、发布信息等行为即视为您已阅读并同意接受本协议的全部约定内容。</p>
                <p>一、定义</p>
                <p>1、优惠券技术服务：是指您通过光芽及其关联公司提供的技术服务进行优惠券（指优惠权益营销的电子凭证）的制作、展示、投放等相关技术服务，具体以服务页面展示为准。</p>
                <p>2、关联公司：是指一方现在或将来控制、受控制或与其出于共同控制下的任何公司、合法机构以及前述公司、合法机构的合法继承人。</p>
                <p>3、发布的信息：是指您使用本服务过程中所制作、复制、发布、传播的任何内容，包括但不限于头像、名称、相关说明、简介等注册信息，或文字、语音、图片、视频、图文、卡券，以及其他使用本服务所产生的信息、内容。</p>
                <p>二、服务规范</p>
                <p>1、您清楚知悉并理解，光芽在本协议项下仅向您提供相关中立的技术支持服务，不对您的行为、发布的信息或优惠券的合法性、有效性作任何明示或默示的担保，您应当确保您的优惠券真实、合法、有效。您应当仔细确认并填写优惠券的金额、数量、有效期限、使用规则等优惠券的使用方式，并对优惠券的真实性、合法性及有效性承担全部责任。您确认优惠券相关服务一旦发布，即不可撤销或更改，否则由此产生的所有损失（包括但不限于顾客损失、工商行政处罚以及对光芽造成的损失等）应由您承担责任，同时光芽有权对您采取包括但不限于限制账户、终止服务等处理措施。</p>
                <p>2、身份要素是我们识别您身份的依据，请您务必妥善保管。使用身份要素进行的操作、发出的指令视为您本人做出。光芽将依照您的指令进行操作，因您的原因造成的账户、密码等信息被冒用、盗用或非法使用，由此引起的风险和损失需要由您自行承担。</p>
                <p>3、您理解并同意本服务可能会由我们联合其他服务方一起为您提供服务。如存在其他服务方时，您需遵守该服务方的服务规范及收费说明（如有），具体详见页面提示；基于您享受服务的需要，您同意并授权我们基于实际提供的服务功能按照您的指令进行操作（如在其他服务中投放优惠券），同时为便于该服务方为您提供服务，我们将基于服务所需向其他服务方同步您的店铺信息、交易信息、支付信息。</p>
                <p>4、我们重视保护您的隐私，按照<span style="color:rgba(40, 110, 255, 1);text-decoration:underline">《支付宝隐私权政策》</span>保护您的隐私信息。</p>
                <p>三、注意事项</p>
                <p>1、您应保证能够独立承担法律责任，并具有履行本协议所需的一切权利、能力及资质证照；如您受托使用本服务的，请确保您获得的授权真实、合法、有效，并严格按照获得的授权使用本服务。您应当对您发布的信息负责，您发布的信息不得侵犯他人的知识产权、名誉权或其他合法权益，光芽仅在自身合法权限和能力范围内对您提交的信息作出合理、谨慎的形式评估与判断，并不对您的实际运营行为、发布的信息或商品承担任何责任或提供任何担保。您应承担因您的经营、交易信息违法、虚假、陈旧或不详实等原因造成的消费者投诉、退货、纠纷（包括合同纠纷、侵权纠纷等）、行政处罚等责任，因此而产生的一切风险和责任包括但不限于用户赔偿均由您独立承担。</p>
                <p>2、因您涉及的投诉、举报或诉讼等纠纷处理需要，您有义务配合光芽在合理时间内提供相关证明材料（包括但不限于资质执照、经营许可证、商品检验报告等）。</p>
                <p>3、为给您提供更优惠的服务，光芽暂不就本服务向您收取服务费。您同意，后续光芽有权对本服务收费规则予以调整，具体以页面公告、站内信、手机短信、信息提醒等通知为准。</p>
                <p>4、如您违反本协议约定，光芽有权采取下述处理措施，包括但不限于单方解除本协议、限制或禁止使用本服务部分或全部功能，并追究您的法律责任。光芽的该等行为不应视为光芽就您的行为对您有任何法定或约定的审核义务，无论光芽是否做出该等行为，光芽均对此不承担任何责任。</p>
                <p>5、对于优惠券售卖的资金结算服务（如有），资金结算服务提供方（例如支付宝（中国）网络技术有限公司）可能会收取售卖金额一定比例的服务费，同时为保护用户权益，资金结算服务提供方可能会对您获取优惠券售卖的资金设置规则，如只有在用户核销优惠券后，该笔优惠券售卖的资金（扣除服务费）才会划转至您的账户，具体以页面提示为准。</p>
                <p>6、本协议未约定事宜均适用<span style="color:rgba(40, 110, 255, 1);text-decoration:underline">《支付宝服务协议》</span>及相关附属规则。</p>
                <p>四、协议变更</p>
                <p>1、我们可根据国家法律法规变化及服务内容调整、保护用户权益等需要修订本协议。一旦相关内容发生重大变更，我们将通过我们的网站或客户端公告、消息通知等方式通知您。</p>
                <p>2、如您不同意本协议的修订，您应立即停止使用本服务。如您继续使用本服务的，则视为您同意本协议的修订。</p>
                <p>五、责任免除</p>
                <p>因下列原因导致无法正常提供服务，光芽不承担任何责任：</p>
                <p>1、系统停机维护或升级；</p>
                <p>2、因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；</p>
                <p>3、您的电脑软硬件和通信线路、供电线路出现故障的；</p>
                <p>4、您操作不当或通过非授权或认可的方式使用本服务的；</p>
                <p>5、因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、第三方服务瑕疵或政府行为等原因。
尽管有前款约定，光芽将采取合理行动积极促使服务恢复正常。</p>
                <p>六、知识产权声明</p>
                <p>1、您理解并同意，与本服务相关的所有信息内容，包括但不限于图片、文字、评价、浏览记录、交易行为、网站架构、网站画面的安排、网页设计以及其他您发布的信息，均由光芽依法拥有全部知识产权（包括但不限于商标权、专利权、著作权、商业秘密等），您拥有您所输入的文字、图片、图文等素材的知识产权，但相关权利人依照法律规定应享有的权利除外。</p>
                <p>2、为便于为用户提供更优质的服务，我们及关联公司可能需要使用您的非个人隐私信息或授权给其他第三方使用。在此，您理解并同意我们及关联公司可以存储、使用、复制、修订、编辑、发布、展示、翻译、分发您的非个人隐私信息或制作其派生作品，并以已知或日后开发的形式、媒体或技术将上述信息纳入其它作品内或授权给其他第三方使用。</p>
                <p>3、非经我们或相关权利人书面同意，您不得为任何商业或非商业目的自行或许可任何第三方使用、修改、反向编译、复制、公开传播、改变、散布、发行或公开发表上述不属于您的知识产权内容。</p>
                <p>七、法律适用与管辖</p>
                <p>本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。因本协议产生之争议，均应依照中华人民共和国法律予以处理，并由协议签署地人民法院管辖。</p>
                <p style="text-align:right">杭州光芽科技有限公司</p>
            </div>
            <div class="check"><el-checkbox v-model="checked">我已阅读并同意上述协议</el-checkbox></div>
            <div class="btn" v-if="!checked">请阅读并勾选同意上述该协议</div>
            <div class="btn btn1" v-else @click="Visible=true">立即接入</div>
            <!-- <div class="tip">杭州光芽科技有限公司</div> -->
        </div>
        <el-dialog
            :visible.sync="Visible"
            :close-on-click-modal="false"
            :show-close="false"
            modal
            custom-class="getCouponClass"
            width="23vw"
            center>
            <div class="getCouponDialog">
                <div class="word bigfont" style="position:absolute;top:50%;left:50%;transform: translate(-50%,-50%)">
                    是否已阅读上述协议并确认立即接入优惠券相关功能？确认后会立即退出登录，重新登录该账号后优惠券相关功能开放。
                </div>
                <div class="bottom flex-center-Y" style="margin-top:10vh">
                    <div class="btn2 bigfont center" style="width:25%" @click="Visible=false">取消</div>
                    <div class="btn1 bigfont center" style="width:25%" @click="submit">确认</div>
                </div>
            </div>
        </el-dialog>
        <!-- <div class="content">
            <el-input v-model="text" placeholder="请输入申请理由"></el-input>
        </div>
        <div class="center">
        <el-button type="primary"
                   round
                   @click="submit()"
                   >申请接入</el-button>
        </div> -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            text:"",
            checked:false,
            Visible:false
            
        };
        
    },
    created() {
        // this.getAuth()
    },
    methods: {
        getAuth() {
            this.api({
                // url: "/ware/searchPurchase",
                method: "post",
                data: {}
            }).then(data => {
                this.$router.replace({ path: "/markting/coupon"});
            });
        },
        submit(){
            let that=this
            that.api({
                url: "/coupon/applyToCoupon",
                method: "post",
                data: {
                    username:that.userName

                }
            }).then(data => {
                that.$message({
                    type: 'success',
                    message: '申请成功'
                })
                setTimeout(() => {
                    that.$store.dispatch('LogOut').then(() => {
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                },1000)
                
            });
        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>