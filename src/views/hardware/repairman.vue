<template>
  <div class="app-container" id="repairman">
    <div class="filter-container">
      <el-form>
        <el-form-item>
          <el-button type="primary" @click="showUpdate">添加补货员

          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" 
    stripe>
      <el-table-column align="center" label="序号" width="80">
        <template slot-scope="scope">
          <span v-text="getIndex(scope.$index)"> </span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名" prop="nickname" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="手机号" prop="username" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="负责门店" prop="storeName" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="创建时间" prop="gmtCreated" width="170"></el-table-column>
       <el-table-column align="center" label="是否启用" >
          <template slot-scope="scope">
            <el-switch
                active-value="1"
                inactive-value="0"
                active-color="#13ce66"
                inactive-color="#ff4949"
                v-model="scope.row.status" 
                @change="changerecommendStatus(scope.$index,scope.row)"             
            >
            </el-switch>
          </template>
        </el-table-column>
      <el-table-column align="center" label="管理" width="220">
        <template slot-scope="scope">
          <span @click="showUpdate(scope.$index)" class="blue">编辑</span>
          <!-- <el-button type="success" icon="el-icon-edit" @click="showUpdate(scope.$index)">编辑</el-button> -->

          <el-button type="danger" icon="el-icon-delete" v-if="scope.row.userId!=userId && hasPerm('hardware:repairmandelete') "
                     @click="removeRepair(scope.$index)">删除
          </el-button>
        </template>
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
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form class="small-space" :model="tempRepair" label-position="left" label-width="120px"
               style='width: 300px; margin-left:50px;'>
        <el-form-item label="补货员名称" required>
          <el-input type="text" v-model="tempRepair.nickname">
          </el-input>
        </el-form-item>
        <el-form-item label="手机号" required v-if="dialogStatus=='create'">
          <el-input type="text" v-model="tempRepair.username">
          </el-input>
        </el-form-item>
        
        <el-form-item label="负责门店" required>
            <el-select v-model="tempRepair.storeCodes" multiple clearable placeholder="请选择门店">
                <el-option
                  v-for="item in arealist"
                  :key="item.storeCode"
                  :label="item.storeName"
                  :value="item.storeCode">
                </el-option>
              </el-select>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createRepair">创 建</el-button>
        <el-button type="primary" v-else @click="updateRepair">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        // porpraitList: [
        //     {
        //       name: '默认头像',
        //       url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530722622336&di=1ffbcd6f8afa0cc0803447a50c07290d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png'
        //     }
        //   ],
        totalCount: 0, //分页组件--数据总条数
        list: [],//表格的数据
        listLoading: false,//数据加载等待动画
        listQuery: {
          pageNum: 1,//页码
          pageRow: 50,//每页条数
        },
        roles: [],//角色列表
        dialogStatus: 'create',
        dialogFormVisible: false,
        textMap: {
          update: '编辑',
          create: '新建补货员'
        },
        arealist: {
            areaId: '',
            areaName: ''
          },
        tempRepair: {
          username: '',
          nickname: '',
          areaId: '',
          porprait: ''
        },
        tempRepairDefault: {
          username: '',
          nickname: '',
          areaId: '',
          porprait: ''
        }
      }
    },
    created() {
      this.getList();
      this.getArea();
    },
    computed: {
      ...mapGetters([
        'userId'
      ])
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.tempRepair.filePath = res.data.filePath
        this.tempRepair.porprait = res.data.tempPath;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 1;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isJPG && isLt2M;
      },
      getArea() {
        //查询负责列表
        this.listLoading = true;
        this.api({
          url: "/store/storeNoRePir",
          method: "post",
          data:{}
        }).then(data => {
          this.listLoading = false;
          this.arealist = data.storeNoRePirList;
        })
      },
      getList() {
        //查询列表
        this.listLoading = true;
        this.api({
          url: "/hardware/repairmanList",
          method: "get",
          params: this.listQuery
        }).then(data => {
          this.listLoading = false;
          this.list = data.list;
          this.totalCount = data.totalCount;
        })
      },
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
      handleFilter() {
        //查询事件
        this.listQuery.pageNum = 1
        this.getList()
      },
      getIndex($index) {
        //表格序号
        return (this.listQuery.pageNum - 1) * this.listQuery.pageRow + $index + 1
      },
      showUpdate($index) {
        this.tempRepair = this.list[$index] || this.tempRepairDefault;
        this.tempRepair.filePath = this.tempRepair.porprait
        if($index>=0){
          this.dialogStatus = "update"
        }else{
          this.dialogStatus = "create"
        }
        this.dialogFormVisible = true          
      },
      createRepair() {
        //添加新补货员
        if(!this.tempRepair.nickname || !this.tempRepair.storeCodes){
          this.$message({
            message: "请填写补货员信息",
            type: 'error',
          })
          return;
        }
        if(this.dialogStatus=='create' && !this.tempRepair.username){
          this.$message({
            message: "请正确填写补货员手机号",
            type: 'error',
          })
          return;
        }
        this.api({
          url: "/hardware/addrepair",
          method: "post",
          data: this.tempRepair
        }).then(() => {
          this.$message({
            message: "添加成功!",
            type: 'sucess',
          })
          this.getList();
          this.dialogFormVisible = false
        })
      },
      changerecommendStatus($index,row) {
              let _vue = this;
              this.$confirm('确定更改该补货员启用状态?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let goods = _vue.list[$index];
                goods.repairId = row.repairId
                if(row.status=='1'){
                  goods.repairStatus = 'Y'
                }else if(row.status=='0'){
                  goods.repairStatus = 'N'
                }
                _vue.api({
                  url: "/hardware/updaterepairstatus",
                  method: "post",
                  data: goods
                }).then(() => {
                  _vue.getList()
                  _vue.$message.success("更改完成")
                }).catch(e => {
                  _vue.$message.error("更改失败")
                })
              })
            },
      updateRepair() {
        let str = ''
        for(let i in this.tempRepair.storeCodes){
            str += this.tempRepair.storeCodes[i]+','
        }
        this.tempRepair.storeCode = str
        //修改用户信息
        let _vue = this;
        this.api({
          url: "/hardware/updaterepair",
          method: "post",
          data: this.tempRepair
        }).then(() => {
          let msg = "修改成功";
          this.dialogFormVisible = false
          this.$message({
            message: msg,
            type: 'success',
            duration: 2 * 1000,
            onClose: () => {
              _vue.getList();
            }
          })
        }) 
      },
      removeRepair($index) {
        let _vue = this;
        this.$confirm('确定删除此补货员?', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        }).then(() => {
          let Repair = _vue.list[$index];
          _vue.api({
            url: "/hardware/deleteRepair",
            method: "post",
            data: Repair
          }).then(() => {
            _vue.$message.success("删除成功")
            _vue.getList()
          }).catch(() => {
            _vue.$message.error("删除失败")
          })
        })
      },
    }
  }
</script>
<style>
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    #repairman .el-select .el-input{width: 100%}
  </style>
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
  