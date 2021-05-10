<style scoped>
.add-btn{
    margin-bottom: 12px;
}
</style>

<template>
    <div class="app-container" >
        <el-tabs v-model="activeTab" type="border-card">
            <!-- 老用户表格 -->
            <el-tab-pane label="老用户" name="oldUser">
                <el-button type="success" icon="el-icon-plus" round class="add-btn" @click="oldUserSalesAdd()">新增</el-button>
                <el-table :data="oldUserLists" v-loading.body="listLoading" border align="center" style="width:100%">
                    <el-table-column prop="promotionCode" label="促销计划ID" align="center"></el-table-column>
                    <el-table-column prop="discountName" label="计划名称" align="center" ></el-table-column>
                    <el-table-column prop="discountType" label="计划类型" align="center" ></el-table-column>
                    <el-table-column prop="discountRate" label="折扣率（%）" align="center" >
                        <template slot-scope="scope">
                            <div v-for="(item,index) in scope.row.discountRate" :key=index>{{item.discountRate}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="管理" width="330">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-search" @click="oldUserSalesEdit(scope.$index)">查看</el-button>
                            <el-button type="danger" icon="el-icon-delete" @click="oldUserSalesDelete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <!-- /老用户表格 -->
            <!-- 新用户表格 -->
            <el-tab-pane label="新用户" name="newUser">
                <el-button type="success" icon="el-icon-plus" round class="add-btn" @click="newUserSalesAdd()">新增</el-button>
                <el-table :data="newUserLists" border style="width:50%">
                    <el-table-column prop="num" label="第几次" width="200"></el-table-column>
                    <el-table-column prop="discountRate" label="折扣（%）" ></el-table-column>
                    <el-table-column align="center" label="管理" width="330">
                        <template slot-scope="scope">
                            <el-button type="success" icon="el-icon-edit" @click="newUserSalesEdit(scope.$index)">编辑</el-button>
                            <el-button type="danger" v-if="newUserLists.length-1==scope.$index" icon="el-icon-delete" @click="newUserSalesDelete(scope.$index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <!-- /新用户表格 -->
        </el-tabs>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import { Navbar, Sidebar, AppMain } from '@/views/layout/components'
    export default {
        components: {
            Navbar,
            Sidebar,
            AppMain
        },
        data() {
            return {
                activeTab: this.$route.params.tab||'oldUser',//tab激活选项
                oldUserLists:[//老用户表格数据

                ],
                newUserLists:[//新用户表格数据
                        
                ],
                listLoading:false
            }
        },
        created() {
            this.getListold();
            this.getList();
        },
        computed: {
            ...mapGetters([
              'userId','roleId'
            ])
          },
        methods: {  
            oldUserSalesAdd(){//老用户新增
                this.Status = "create"
                this.$router.push({
                    name: "oldSalesEdit",
                     params:{
                        type:'新增',
                    }
                });
            },
            oldUserSalesEdit(index){//老用户查看
                this.Status = "update"
                this.$router.push({
                    path:"/goodsSales/oldSalesEdit",
                    query:{
                        row:this.oldUserLists[index],
                        type:'查看',
                       // name: "oldSalesEdit",
                       // params:{
                       //     type:'查看',
                        //    index:index,
                       //     row:this.oldUserLists[index]
                    }
                });
            },            
            oldUserSalesDelete(row){//老用户删除
                this.$confirm('确定删除该计划?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/promotion/updatetempPromotion",
                        method: "post",
                        data: row
                    }).then(() => {
                        this.$message.success("删除完成")
                        this.getListold();
                    }).catch(() => {
                        this.$message.error("删除失败")
                    })
                })
            },
            newUserSalesAdd(){//新用户新增
                this.Status = "create"
                this.$router.push({
                    name: "newSalesEdit",
                    params:{
                        type:'新增',
                        length:this.newUserLists.length
                    }
                });            
            },
            newUserSalesEdit(index){//新用户编辑
                this.Status = "update"
                let area=this.newUserLists[index];
                this.$router.push({
                    name: "newSalesEdit",
                    params:{
                        type:'编辑',
                        index:index,
                        isOn:area.isOn,
                        num:area.num,
                        promotionId:area.promotionId    
                    }
                }); 
            },
            newUserSalesDelete(index){//新用户删除
                let area = this.newUserLists[index];
                area.isOn = '0';
                this.$confirm('确定删除该计划?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.api({
                        url: "/promotion/updatePromotion",
                        method: "post",
                        data:area                       
                    }).then(() => {  
                        this.getList();                
                        this.$message.success("删除完成")
                    }).catch(() => {
                        this.$message.error("删除失败")
                    })
                })
            },
            getListold() {
              //查询列表
              this.listLoading = true;
              this.api({
                url: "/promotion/listtempPromotion",
                method: "get"
              }).then(data => {
                this.listLoading = false;
                this.oldUserLists = data.list;
              })
            },
            getList() {
              //查询列表
              this.listLoading = true;
              this.api({
                url: "/promotion/listPromotion",
                method: "get"
              }).then(data => {
                this.listLoading = false;
                this.newUserLists = data.list;
              })
            },

        }
    }
</script>
