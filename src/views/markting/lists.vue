<style lang="scss" scoped>

</style>

<template>
    <div>
        <!-- <el-button type="success" icon="el-icon-plus" @click="addGoods">新增</el-button> -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {};
    },
    created() {},
    methods: {},
        computed: {
        ...mapGetters(["userName"])
    }
};
</script>