<style>
.blue{
     color:#66b1ff;
     cursor: pointer;
     padding: 6px;
     cursor: pointer;
}
.input-with-select{
    width: 30%;
}
</style>

<template>
    <div class="app-container">
        <el-input placeholder="请输入内容" v-model="listQuery.storeCode" class="input-with-select">
            <template slot="prepend">门店编号</template>
            <el-button slot="append" icon="el-icon-search" @click="getList"></el-button>
        </el-input>
      <!-- <div class="filter-container">
        <el-form>
          <el-form-item>
                <el-input placeholder="请输入门店编号" prefix-icon="el-icon-search" v-model="listQuery.storeCode" clearable style="width: 160px;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
          </el-form-item>
        </el-form>
      </div> -->
      <el-table :data="list" v-loading.body="listLoading" 
      element-loading-text="拼命加载中" stripe max-height="1200"> 
        <el-table-column fixed="left" align="center" label="序号" width="80">
          <template slot-scope="scope">
            <span v-text="getIndex(scope.$index)"> </span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="门店编号" prop="storeCode"></el-table-column>
        <el-table-column align="center" label="门店名称" prop="storeName" ></el-table-column>
        <el-table-column align="center" label="门店地址" prop="location"></el-table-column>
        <el-table-column align="center" label="门店店长" prop="storeManager"></el-table-column>
        <el-table-column align="center" label="补货员" prop="repairName"></el-table-column>
        <el-table-column align="center" label="创建时间" prop="gmtCreated"></el-table-column>
        <el-table-column fixed="right" align="center" label="管理" width="230">
          <!-- <el-table-column align="center" label="详情" width="230" > -->
            <template slot-scope="scope">
              <!-- <el-button type="primary" icon="el-icon-edit" @click="storedetails(scope.row)">查看</el-button>
              <el-button type="success" icon="el-icon-edit" @click="showUpdate(scope.$index)">编辑</el-button> -->
              <span @click="storedetails(scope.row)" class="blue">查看</span>
              <span @click="showUpdate(scope.$index)" class="blue">编辑</span>
            </template>
          <!-- </el-table-column> -->
       </el-table-column>
      </el-table>
        <div class="pagination-line">
            <el-pagination background
                @size-change="handleSizeChange"
                @current-change="currentChange"
                :current-page="listQuery.pageNum"
                :page-size="listQuery.pageRow"
                :total="totalCount"
                :page-sizes="[10, 20, 50, 100]"
                layout="total, sizes, prev, pager, next, jumper">
            </el-pagination> 
        </div>
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="40%">
          <el-form class="small-space" :model="tempStore" label-position="left" label-width="100px"
                   style='width: 400px; margin-left:50px;'>
            <el-form-item label="门店编号:" required style="width: 300px">
              {{tempStore.storeCode}}
            </el-form-item>
            <el-form-item label="门店名称:" required style="width: 300px">
              {{tempStore.storeName}}
            </el-form-item>
            <el-form-item label="门店地址:" required>
              {{tempStore.location}}
            </el-form-item>          
              <el-form-item label="门店店长:" required>
                {{tempStore.storeManager}}
              </el-form-item>
                <el-form-item label="补货员:" required class="create">
                    <el-select v-model="tempStore.repairId" placeholder="请选择分类">
                        <el-option v-for="item in repairmanTabs" :key="item.repairId" :label="item.repairName" :value="item.repairId">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button v-if="dialogStatus=='create'" type="success" @click="createUser">创 建</el-button>
            <el-button type="primary" v-else @click="updateUser">修 改</el-button>
          </div>
        </el-dialog>
    </div>
  </template>
  <script>
    import {mapGetters} from 'vuex'
    export default {
      data() {
        return {
          repairmanTabs:[
          ],
          code : null,
          totalCount: 0, //分页组件--数据总条数
          list: [
            {
              storeCode:1,
              storeName:'bbb',
              storeType:'123',
              location:'',
              storeManager:'ghh',
              gmtCreated:'2018-2-2 18:12:12'
            }
          ],//表格的数据
          isdisabled:false,
          listLoading: false,//数据加载等待动画
          listQuery: {
                pageNum: 1,//页码
                pageRow: 20,//每页条数
            userId:this.userId
          },
          dialogStatus: 'create',
          dialogFormVisible: false,
          textMap: {
            update: '编辑',
            create: '新建用户'
          },
          arealist: {
            areaId: '',
            areaName: ''
          },
          tempStore: {
            storeName: ''
          }
        }
      },
      created() {
        this.list = [
            {
              storeCode:1,
              storeName:'bbb',
              storeType:'123',
              location:'',
              storeManager:'ghh',
              gmtCreated:'2018-02-02 18:12:12'
            }
          ]
        this.getList();
        this.getArea();
      },
      computed: {
        ...mapGetters([
          'userId'
        ])
      },
      methods: {
        handleSizeChange(val){
            this.listQuery.pageRow = val
            this.getList(this.listQuery)
        },
        currentChange(index){
            this.listQuery.pageNum = index
            this.getList(this.listQuery)
        },
        prevClick(index){
            this.listQuery.pageNum = index
            this.getList(this.listQuery)
        },
        nextClick(index){
            this.listQuery.pageNum = index
            this.getList(this.listQuery)
        },
          showCreate() {
          //显示新增对话框
          this.tempStore.storeName = "";
          this.tempStore.storeType = "";
          this.tempStore.location = "";
          this.tempStore.storeManager = "";
          this.dialogStatus = "create"
          this.dialogFormVisible = true
          this.isdisabled = false
        },
        showUpdate($index) {
          let store = this.list[$index];
          this.tempStore = store;
          this.tempStore.deleteStatus = '1';
          this.dialogStatus = "update"
          this.api({
            url: "/store/repairlist",
            method: "get",
          }).then((data) => {
            this.repairmanTabs = data.repairList
            this.dialogFormVisible = true
            this.isdisabled = true
          })

        },
        createUser() {
          // this.tempStore.porprait = 
          //添加新用户
          this.api({
            url: "/user/addUser",
            method: "post",
            data: this.tempStore
          }).then(() => {
            this.getList();
            this.dialogFormVisible = false
          })
        },
        updateUser() {
          //修改用户信息
          let _vue = this;
          this.api({
            // url: "/user/updateUser",
            url: "/store/updateRepair",
            method: "post",
            data: this.tempStore
          }).then(() => {
            let msg = "修改成功";
            this.dialogFormVisible = false
            // if (this.userId === this.tempStore.userId) {
            //   msg = '修改成功,部分信息重新登录后生效'
            // } 
            this.$message({
              message: msg,
              type: 'success',
              duration: 2 * 1000,
            })
            this.getList();
          }) 
        },
        changerecommend($index,row) {
              let _vue = this;
              this.$confirm('确定更改此商品推荐状态?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let goods = _vue.list[$index];
                goods.recommend = row.recommend;
                _vue.api({
                  url: "/goods/recommend",
                  method: "post",
                  data: goods
                }).then(() => {
                  _vue.getList()
                  _vue.$message.success("更改完成")
                }).catch(() => {
                  _vue.$message.error("更改失败")
                })
              })
            },
        storedetails(row){
             this.$router.push({path: 'storeDetails/'+row.storeCode})
          },
        getList() {
          //查询列表
          this.listLoading = true;
          this.listQuery.manageId = this.userId
          this.api({
            url: "/store/storelist",
            method: "get",
            params: this.listQuery
            // params: [this.listQuery,this.userId]
          }).then(data => {
            this.listLoading = false;
            this.list = data.list;
            this.totalCount = data.totalCount;
          }).catch(e => {
          })
        },
        getArea() {
        //查询负责列表
        this.listLoading = true;
        this.api({
          url: "/store/listArea",
          method: "get",
          params: this.userId
        }).then(data => {
          this.listLoading = false;
          this.arealist = data.list;
        })
      },
        handleFilter() {
          //查询事件
          this.listQuery.pageNum = 1
          this.getList()
        },
        getIndex($index) {
          //表格序号
          return (this.listQuery.pageNum - 1) * this.listQuery.pageRow + $index + 1
        },
      }
    }
  </script>
  