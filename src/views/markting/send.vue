<style lang="scss" scoped>
.coupon-form{
    padding: 20px;
}
.center{
    text-align: center;
    margin: 20px auto;
}
</style>

<template>
    <div>
        <el-form class="coupon-form" label-position="left" label-width="100px" :inline="true">
            <el-form-item label="优惠券" required class="create">
                <el-select v-model="data.a" placeholder="请选择">
                    <el-option v-for="item in tabs" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="发放时间" required>
                    <el-date-picker
                        v-model="data.time"
                        type="date" value-format="yyyy-MM-dd"
                        placeholder="选择发放时间">
                    </el-date-picker>
            </el-form-item>
            <br>
            <el-form-item label="发放门店" required class="create">
                <el-select v-model="data.a" placeholder="请选择">
                    <el-option v-for="item in tabs" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <br>
        </el-form>
        <div class="center">
            <el-button type="primary" @click="submit">提 交</el-button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            data:{},
            tabs:[]
        };
    },
    created() {},
    methods: {
        submit(){

        }
    },
    computed: {
        ...mapGetters(["userName"])
    }
};
</script>