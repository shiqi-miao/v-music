<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form>
        <el-form-item>
          <el-button type="success" icon="el-icon-plus" @click="showUpdate">添加首页导航栏
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
              highlight-current-row>
      <el-table-column align="center" label="序号" width="80">
        <template slot-scope="scope">
          <span v-text="getIndex(scope.$index)"> </span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="导航栏名称" prop="navigationName" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="轮播图像" style="width: 60px;">
          <template slot-scope="scope">
            <div v-for="(item,index) in scope.row.pictureLocation"  :key="index">
              <img :src="item" width="40" height="40" class="portrait" style="float:left"/>
            </div>
               
          </template>
      </el-table-column>
      <el-table-column align="center" label="展示顺序" prop="orderNum" style="width: 60px;"></el-table-column>
      <el-table-column align="center" label="是否显示">
        <template slot-scope="scope">
              <el-switch
                  active-value="1"
                  inactive-value="0"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  v-model="scope.row.isOn" 
                  @change=changeIsOnStatus(scope.$index,scope.row)                
              >
              </el-switch>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间" prop="gmtCreated" width="170"></el-table-column>
      <el-table-column align="center" label="最近修改时间" prop="gmtModified" width="170"></el-table-column>
      <el-table-column align="center" label="管理" width="220">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit" @click="showUpdate(scope.$index)">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="removeUser(scope.$index)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form class="small-space" :model="navigation" label-position="left" label-width="100px"
               style='width: 300px; margin-left:50px;'>
        <el-form-item label="导航栏名称" required>
          <el-input type="text" v-model="navigation.navigationName">
          </el-input>
        </el-form-item>
        <el-form-item label="展示顺序" required>
          <el-input type="text" v-model="navigation.orderNum">
          </el-input>
        </el-form-item>
         <el-form-item label="轮播图像组" required>
               <el-upload
                  class="avatar-uploader"
                  action="/api/uploadfile/upload"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :file-list="fileList2"
                  :limit=6
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
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
        fileList2: [],
        totalCount: 0, //分页组件--数据总条数
        list: [],//表格的数据
        listLoading: false,//数据加载等待动画
        listQuery: {
          pageNum: 1,//页码
          pageRow: 50,//每页条数
        },
        dialogStatus: 'create',
        dialogFormVisible: false,
        textMap: {
          update: '编辑',
          create: '新建导航栏'
        },
        navigation:{
          id:'',
          navigationName:'',
          pictureLocation:'',
          orderNum:'',
          isOn:''
        },
        navigationDefault:{
          id:'',
          navigationName:'',
          pictureLocation:'',
          orderNum:'',
          isOn:''
        },
        pic:'',
        src1:[]
      }
    },
    created() {
      this.getList();
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.src1.push(res.data.filePath)
          this.pic= res.data.filePath+';'
          this.navigation.pictureLocation += this.pic
          // this.navigation.pictureLocation=this.navigation.pictureLocation.slice(0,this.navigation.pictureLocation.length-1)
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
      getList() {
        //查询列表
        this.listLoading = true;
        this.api({
          url: "/online/navigationBar",
          method: "get",
        }).then(data => {
          this.listLoading = false;
          this.list = data.list;
        })
      },
      changeIsOnStatus($index,row) {
          let _vue = this;
          this.$confirm('确定更改此导航栏显示状态?', '提示', {
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'warning'
          }).then(() => {
            let navigation = _vue.list[$index];
            navigation.isOn = row.isOn;
            navigation.id = row.id;
            _vue.api({
              url: "/online/updateNavigationBar",
              method: "post",
              data: navigation
            }).then(() => {
              _vue.getList()
              _vue.$message.success("更改完成")
            }).catch(() => {
              _vue.getList()
              _vue.$message.error("更改失败,请重试")
            })
          })
        },
      getIndex($index) {
        //表格序号
        return (this.listQuery.pageNum - 1) * this.listQuery.pageRow + $index + 1
      },
      showUpdate($index){
        this.navigation = this.list[$index] || this.navigationDefault;
        this.navigation.filePath = this.navigation.pictureLocation
        this.fileList2 = []
        for(let i in  this.navigation.filePath){
          let item ={
            name:'',
            url:this.navigation.filePath[i]
          }
          this.fileList2.push(item)
        } 
        if($index>=0){
          this.dialogStatus = "update"
        }else{
          this.dialogStatus = "create"
        }
        this.dialogFormVisible = true          
      },
      createUser() {
        //添加新导航栏
        this.navigation.pictureLocation=this.navigation.pictureLocation.slice(0,this.navigation.pictureLocation.length-1)
        this.fileList2=[]
        this.api({
          url: "/online/createNavigation",
          method: "post",
          data:this.navigation
        }).then(() => {
          this.getList();
          this.dialogFormVisible = false
        })
      },
      updateUser() {
        //修改用户信息
        this.fileList2=[]
        this.navigation.pictureLocation=this.navigation.pictureLocation.slice(0,this.navigation.pictureLocation.length-1)
        let _vue = this;
        this.api({
          url: "/online/updateNavigationBar",
          method: "post",
          data: this.navigation
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
      removeUser($index) {
        let _vue = this;
        this.$confirm('确定删除此导航栏?', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        }).then(() => {
          let navigationBar = _vue.list[$index];
          _vue.api({
            url: "/online/deleteNavigationBar",
            method: "post",
            data: navigationBar
          }).then(() => {
            _vue.getList()
          }).catch(() => {
            _vue.$message.error("请先将要删除的导航栏取消显示")
          })
        })
      },
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      }
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
  </style>
  