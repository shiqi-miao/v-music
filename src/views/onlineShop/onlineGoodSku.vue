<style>
.el-form-item__label{
  width: 120px;
}
.dialog-footer .el-icon-circle-plus{
  color: rgb(19, 206, 102);
  font-size: 50px;
  position: absolute;
  left: 0px;
  top: -32px;
  z-index: 99
}
.el-icon-circle-plus:hover{
  color: green;
  cursor: pointer;
}
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

<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form>
        <el-form-item>
          <!-- <el-button type="primary" icon="plus" v-if="hasPerm('operationgoods:goodsplanadd')" @click="showCreate">计划新增商品 -->
          <!-- </el-button> -->
        </el-form-item>
        <el-form-item>
              <el-input placeholder="请输入商品名称" prefix-icon="el-icon-search" v-model="listQuery.wgname" clearable style="width: 160px;"></el-input>
              <el-button type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
              <el-button type="success" icon="el-icon-plus" @click="addGoods">新增商品</el-button>
          </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" style="width: 100%" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
              highlight-current-row>
      <!-- <el-table-column align="center" label="序号" width="80">
        <template slot-scope="scope">
          <span v-text="getIndex(scope.$index)"> </span>
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="品牌名称" prop="brandName"></el-table-column>
      <el-table-column align="center" label="商品名称" prop="goodsName" width="170px;"></el-table-column>
      <el-table-column align="center" label="商品分类" prop="typeName"></el-table-column>
      <el-table-column align="center" label="封面图" style="width: 30px;">
           <template slot-scope="scope">
              <img :src="scope.row.appPicture" width="40" height="40" class="portrait"/>
          </template>
      </el-table-column>
      <el-table-column align="center" label="售价" prop="typeName" ></el-table-column>
      <el-table-column align="center" label="上架时间" width="170px;" prop="putawayTime"></el-table-column>
      <el-table-column align="center" label="下架时间" width="170px;" prop="unshelveTime" ></el-table-column>
      <el-table-column align="center" label="是否推荐" v-if="hasPerm('operation:recommend')">
              <template slot-scope="scope">
                      <el-switch
                          active-value="Y"
                          inactive-value="N"
                          active-color="#13ce66"
                          inactive-color="#ff4949"
                          v-model="scope.row.recommend" 
                          @change="changerecommend(scope.$index,scope.row)"                
                      >
                      </el-switch>
              </template>
      </el-table-column>
      <el-table-column align="center" label="是否上架" v-if="hasPerm('operation:recommend')" >
              <template slot-scope="scope">
                      <el-switch
                          active-value="Y"
                          inactive-value="N"
                          active-color="#13ce66"
                          inactive-color="#ff4949"
                          v-model="scope.row.goodsStatus" 
                          @change="changerecommendStatus(scope.$index,scope.row)"                
                      >
                      </el-switch>
              </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" label="管理" width="330" v-if="hasPerm('operation:recommend')">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit" @click="goodsedit(scope.$index)">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="goodsDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="listQuery.pageNum"
      :page-size="listQuery.pageRow"
      :total="totalCount"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination> 
    <!-- 商品信息新增 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="isgoodsModalShow" width="40%" v-if="dialogStatus == 'add'">
      <!-- <el-form class="small-space demo-form-inline" :model="goodsDefault" label-position="labelPosition" label-width="80px" :inline="true">  -->
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="商品编号" required>
          <el-input type="text" v-model="goodsDefault.goodsCode" :disabled="isdisabled" style="width:200px"> 
        </el-input>
        </el-form-item>
        <el-form-item label="品牌名称" required>
          <el-input type="text" v-model="goodsDefault.brandName" :disabled="isdisabled" style="width:200px">
          </el-input>
        </el-form-item>
        <el-form-item label="商品名称" required>
          <el-input type="text" v-model="goodsDefault.goodsName" :disabled="isdisabled" style="width:200px">
          </el-input>
        </el-form-item>
        <el-form-item label="商品分类" required>
          <el-select v-model="goodsDefault.typeId" placeholder="商品分类" :disabled="isdisabled" style="width:200pxs">
              <el-option
                v-for="item in typeList"
                :key="item.value"
                :label="item.typeName"
                :value="item.typeId">
              </el-option>
            </el-select>
          </el-form-item>
        <el-form-item label="商品描述" required>
            <el-input type="text" v-model="goodsDefault.description" style="width:200px">
            </el-input>
        </el-form-item>
        <el-form-item label="抵扣比例" required>
            <el-input type="text" v-model="goodsDefault.instalRate" style="width:200px">
            </el-input>
        </el-form-item>
        <el-form-item label="已售数量" required>
            <el-input type="text" v-model="goodsDefault.soldNumber" style="width:200px">
            </el-input>
        </el-form-item>
         <el-upload
                  class="avatar-uploader"
                  action="/api/uploadfile/upload"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="handlegoodsPicturesSuccess"
                  :before-upload="beforeAvatarUpload"
                  :file-list="fileList2"
                  :show-file-list="true"
                  :limit=6
                  list-type="picture" style="width:200px">
                  <el-button size="small" type="primary">点击上传商品图片</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，最多不超过六张，且不超过500kb</div>
          </el-upload>
           <el-upload
                  class="avatar-uploader"
                  action="/api/uploadfile/upload"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="handlegoodsInfoPicturesSuccess"
                  :before-upload="beforeAvatarUpload"
                  :file-list="fileList3"
                  :show-file-list="true"
                  :limit=6
                  list-type="picture" style="width:200px">
                  <el-button size="small" type="primary">点击上传商品详情图片</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，最多不超过六张，且不超过500kb</div>
          </el-upload>
      </el-form>
      <div style="text-align:right;marginTop:30px"  slot="footer">
          <el-button icon="el-icon-close" @click="isgoodsModalShow = false">取 消</el-button>
          <el-button type="primary" icon="el-icon-edit"  @click="addGood">保 存</el-button>          
      </div>
    </el-dialog>
    <!-- 商品信息编辑   -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="isgoodsModalShow" width="60%" v-if="dialogStatus == 'update'">  
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"  style="width:20%"> 
        <el-form-item label="商品编号" required>
          <el-input type="text" v-model="goodsDefault.goodsCode" :disabled="isdisabled"> 
          </el-input>
        </el-form-item>
        <el-form-item label="品牌名称" required>
          <el-input type="text" v-model="goodsDefault.brandName">
          </el-input>
        </el-form-item>
        <el-form-item label="商品名称" required>
          <el-input type="text" v-model="goodsDefault.goodsName">
          </el-input>
        </el-form-item>
        <el-form-item label="商品分类" required>
            <el-input type="text" v-model="goodsDefault.typeName" :disabled="isdisabled">
            </el-input>
        </el-form-item>
        <el-form-item label="商品描述" required>
            <el-input type="text" v-model="goodsDefault.description">
            </el-input>
        </el-form-item>
        <el-form-item label="抵扣比例" required>
            <el-input type="text" v-model="goodsDefault.instalRate">
            </el-input>
        </el-form-item>
        <el-form-item label="已售数量" required>
            <el-input type="text" v-model="goodsDefault.soldNumber">
            </el-input>
        </el-form-item>
      </el-form>
      <div style="text-align:right" >
          <el-button icon="el-icon-close" @click="isgoodsModalShow = false">取 消</el-button>
          <el-button type="primary" icon="el-icon-edit"  @click="updateGoods">修 改</el-button>         
      </div>
      <div slot="footer" class="dialog-footer">
      <div style="position:relative!important;">
      <i class="el-icon-circle-plus" @click="addSKU"></i>
      <br>
      <el-table :data="list1" v-loading.body="listLoading" element-loading-text="拼命加载中" border>
        
        <el-table-column align="center" label="SKU编号" prop="skuCode" width="90" type="input"></el-table-column>
        <el-table-column align="center" label="条形码" prop="jbarCode" width="80"></el-table-column>
        <el-table-column align="center" label="SKU图片" width="100">
            <template slot-scope="scope">
              <img :src="scope.row.skuPicture" width="40" height="40" class="portrait"/>
          </template>
        </el-table-column>
        <el-table-column align="center" label="属性1名" prop="nameOne" ></el-table-column>
        <el-table-column align="center" label="属性1内容" prop="contnetOne" ></el-table-column>
        <el-table-column align="center" label="属性2名" prop="nameTwo" ></el-table-column>
        <el-table-column align="center" label="属性2内容" prop="contentTwo" ></el-table-column>
        <el-table-column align="center" label="规格" prop="skuSpecification" ></el-table-column>
        <el-table-column align="center" label="单位" prop="skuUnits" ></el-table-column>
        <el-table-column align="center" label="进货价" prop="procurementPrice" ></el-table-column>
        <el-table-column align="center" label="销售价" prop="salePrice"></el-table-column>
        <el-table-column align="center" label="已售数量" prop="soldNumber"></el-table-column>
        <el-table-column align="center" label="是否显示" prop="isOn">
           <template slot-scope="scope">
            <el-switch
                active-value="Y"
                inactive-value="N"
                active-color="#13ce66"
                inactive-color="#ff4949"
                v-model="goodsSku.isOn"                
            >
            </el-switch>
             </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="管理" width="250" v-if="hasPerm('operation:recommend')">
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-edit" @click="skuedit(scope.$index)">编 辑</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="skuDelete(scope.$index,scope.row)">删 除</el-button>
          </template>
        </el-table-column>
      </el-table>  
      </div>
      </div>
      <!-- sku编辑弹窗 -->
      <el-dialog width="40%" :title="type" :visible.sync="isSkuModalShow" append-to-body >
         <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="SKU编号" required style="width:50%" >
            <el-input type="text" v-model="goodsSku.skuCode" :disabled="isSkudisabled">
            </el-input>
          </el-form-item>
          <el-form-item label="条形码" required style="width:50%">
            <el-input type="text" v-model="goodsSku.jbarCode" :disabled="isSkudisabled">
            </el-input>
          </el-form-item>
          <el-form-item label="SKU图片" required style="width:50%">
            <el-upload
            class="avatar-uploader"
            action="/api/uploadfile/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
              <img v-if="goodsSku.skuPicture" :src="goodsSku.filePath" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

        <el-form-item label="属性1名" required style="width:50%">
            <el-input type="text" v-model="goodsSku.nameOne">
            </el-input>
          </el-form-item>
          <el-form-item label="属性1内容" required style="width:50%">
            <el-input type="text" v-model="goodsSku.contnetOne">
            </el-input>
          </el-form-item>                        
          <el-form-item label="属性2名" required style="width:50%">
            <el-input type="text" v-model="goodsSku.nameTwo">
            </el-input>
          </el-form-item>
          <el-form-item label="属性2内容" required style="width:50%">
            <el-input type="text" v-model="goodsSku.contentTwo">
            </el-input>
          </el-form-item>
          <el-form-item label="单位" required style="width:50%">
            <el-select  v-model="goodsSku.skuUnits" placeholder="请选择" style="width:100%;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>                                               
          <el-form-item label="规格" required style="width:50%">
            <el-input type="text" v-model="goodsSku.skuSpecification">
            </el-input>
          </el-form-item>  
          <el-form-item label="上架数量" required style="width:50%">
              <el-input type="text" v-model="goodsSku.stockNumber">
              </el-input>
          </el-form-item>         
          <el-form-item label="进货价" required style="width:50%">
              <el-input type="text" v-model="goodsSku.procurementPrice">
              </el-input>
          </el-form-item>
          <el-form-item label="已售数量" required style="width:50%">
              <el-input type="text" v-model="goodsSku.soldNumber">
              </el-input>
          </el-form-item>
          <el-form-item label="销售价" required style="width:50%">
              <el-input type="text" v-model="goodsSku.salePrice">
              </el-input>
          </el-form-item>
          <el-form-item label="是否显示" required style="width:50%">
            <el-switch
                active-value="Y"
                inactive-value="N"
                active-color="#13ce66"
                inactive-color="#ff4949"
                v-model="goodsSku.isOn"                
            >
            </el-switch>
          </el-form-item>



          <el-form-item label="App图片" required style="width:24%">
            <el-upload
              class="avatar-uploader"
              action="/api/uploadfile/upload"
              :show-file-list="false"
              :on-success="handleappPictureSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="goodsSku.appPicture" :src="goodsSku.appfilePath" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align:center">
            <el-button icon="el-icon-close" @click="isSkuModalShow = false">取 消</el-button>
            <el-button type="primary" icon="el-icon-edit" v-if="type=='sku编辑'" @click="updateSku">修 改</el-button>
            <el-button type="primary" icon="el-icon-edit" v-else  @click="addSku">保 存</el-button>
        </div>
      </el-dialog>
    </el-dialog>
    <!-- /sku编辑弹窗 -->
  </div>
</template>
  <script>
    import {mapGetters} from 'vuex'
    export default {
      data() {
        return {
          fileList2: [],
          fileList3: [],
          code : null,
          totalCount: 0, //分页组件--数据总条数
          list: [],//表格的数据
          list1: [],//表格的数据
          listLoading: false,//数据加载等待动画
          listQuery: {
            pageNum: 1,//页码
            pageRow: 50,//每页条数
            wgname: "",//商品名称
          },
          listQuery1: {
            pageNum: 1,//页码
            pageRow: 50,//每页条数
            goodCode:'106132',
          },
          typeList:[],
          type:'',
          dialogStatus: 'update',
          isgoodsModalShow: false,
          isSkuModalShow:false,
          textMap: {
            update: '商品信息编辑',
            add:'商品信息新增',
            skuUpdate:'sku编辑',
            skuAdd:'sku新增'
          },
          isSkudisabled:false,
          isdisabled:false,
          goodsDefault:{
            goodsPictures:'',
            goodsInfoPictures:''
          }, 
          goodsSku: {
            skuPictureA:{picture_location:''},
            skuPictureB:{
              picture_location:''
            },
           
          
          },  
          goodCode:'',
          SKUdata:{           
          },
          options: [{
            value: 'g',
            label: 'g'
          }, {
            value: 'ml',
            label: 'ml'
          }, {
            value: 'L',
            label: 'L'
          }, {
            value: 'kg',
            label: 'kg'
          }],
          type:'',
          pic1:'',
          pic2:''
        }
      },
      created() {
        this.getParamer();
        this.getList();
      },
      computed: {
        ...mapGetters([
          'userId'
        ])
      },
      methods: {
        handleAvatarSuccess(res, file) {
          this.goodsSku.filePath = res.data.filePath
          this.$set(this.goodsSku,'skuPicture',res.data.tempPath)
        },
        handlegoodsPicturesSuccess(res, file) {
          this.pic1= res.data.filePath+';'
          this.goodsDefault.goodsPictures +=this.pic1
          this.goodsDefault.goodsPictures=this.goodsDefault.goodsPictures.slice(0,this.goodsDefault. goodsPictures.length-2)
        },
         handlegoodsInfoPicturesSuccess(res, file) {
          this.pic2= res.data.filePath+';'
          this.goodsDefault.goodsInfoPictures  +=this.pic2
         this.goodsDefault.goodsInfoPictures =this.goodsDefault.goodsInfoPictures .slice(0,this.goodsDefault.goodsInfoPictures .length-2)
        },
        handleappPictureSuccess(res, file){
          this.goodsSku.appfilePath = res.data.filePath
          this.
          this.$set(this.goodsSku,'appPicture',res.data.tempPath)
        },
        beforeAvatarUpload(file) {
          const isJPGorPGN = file.type === 'image/jpeg'||'image/png';
          const isLt2M = file.size / 1024 / 1024 < 1;
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 1MB!');
          }
          return isJPGorPGN && isLt2M;
        },
        addGoods(){
          this.goodsSku = {}
          this.goodsDefault
          this.list1 = []
          this.api({
              url: "/goods/goodsaddtype",
              method: "get", 
            }).then(data => {
                this.typeList =  data
            }).catch((e)=>{
              this.$message.error(e)
            })
          this.isgoodsModalShow = true
          this.dialogStatus = 'add'
          this.isdisabled = false
        },
        addGood(){
          this.api({
              url: "/online/goodsadd",
              method: "post",
              data: this.goodsDefault              
            }).then(() => {
              this.isgoodsModalShow = false
              this.getList()                  
            }).catch((e)=>{
              this.$message.error(e)
            })
        },
        addSKU(){
          this.isSkuModalShow = true 
          this.type = 'sku新增'
          this.goodsSku = {}
          this.isSkudisabled = false
          // var list = {
          //   goodCode:this.goodsDefault.goodsCode
          // }
          // this.list1.push(list)
        },
        isSkuDataOK(){
          if(!this.goodsSku.skuPicture||!this.goodsSku.appPicture
          ||!this.goodsSku.skuCode||!this.goodsSku.jbarCode||!this.goodsSku.stockNumber
          ||!this.goodsSku.skuUnits||!this.goodsSku.skuSpecification||!this.goodsSku.procurementPrice
          ||!this.goodsSku.soldNumber||!this.goodsSku.salePrice){
            this.$message({
              message: '信息填写不完整',
              type: 'warning',
              duration: 2000,
            })
            return false;
          }
        },
        updateGoods() {
          //修改商品信息
          //if(this.isSkuDataOK()){
            let _vue = this;
            this.api({
              url: "/goods/goodsupdate",
              method: "post",
              data: this.goodsDefault
            }).then(() => {
              let msg = "修改成功";
              this.isgoodsModalShow = false
              this.$message({
                message: msg,
                type: 'success',
                duration: 2 * 1000,
                onClose: () => {
                  _vue.getList();
                }
              })
            }) 
         // }

        },
        addSku(){
          let code = this.goodCode
          this.goodsSku.goodsCode = this.goodCode
          this.goodsSku.procurementPrice*=100
          this.goodsSku.salePrice*=100
          if(this.isSkuDataOK()){
            this.api({
                url: "/goods/goodsskuadd",
                method: "post",
                data: this.goodsSku              
              }).then(() => {
                this.isSkuModalShow = false
                this.getSkuPlanList(code)
                this.$message({
                message: "新增成功",
                type: 'success'
              })                  
              }).catch((e)=>{
                this.$message.error(e)
              })
            }
        },
        updateSku() {
          //修改Sku信息    
          let code = this.goodCode
          this.goodsSku.procurementPrice*=100
          this.goodsSku.salePrice*=100
          //if(this.isSkuDataOK()){
            let _vue = this;
            this.api({
              url: "/goods/skugoodsupdate",
              method: "post",
              data: this.goodsSku
            }).then(() => {
              let msg = "修改成功";
              this.isSkuModalShow = false
              this.getSkuPlanList(code)
              this.$message({
                message: msg,
                type: 'success'
              })
            }) 
         // }

        },
        getSkuPlanList(code) {
          //查询SKU计划项列表
          this.listQuery1.goodCode = code
          this.listLoading = true;
          this.api({
            url: "/goods/skuplanlist",
            method: "get",
            params: this.listQuery1
          }).then(data => {
            this.listLoading = false;
            this.list1 = data.list;
          })
        },
        goodsedit($index) {
          let code = this.list[$index].goodsCode
          this.goodCode = code
          this.isdisabled = true
          this.dialogStatus = 'update'
          this.goodsDefault = this.list[$index]
          this.isgoodsModalShow = true 
          this.isSkudisabled = true
          this.getSkuPlanList(code)
        },
        skuedit($index) {
          this.goodsSku = this.list1[$index]
          this.goodsSku.filePath = this.goodsSku.skuPicture
          this.goodsSku.appfilePath = this.goodsSku.appPicture
          this.goodsSku.skuCardfilePath = this.goodsSku.skuCardPicture
          this.goodsSku.skuNormalfilePath = this.goodsSku.skuPictureA.picture_location || this.goodsSku.skuPictureA
          this.goodsSku.filePathDiscount = this.goodsSku.skuPictureB.picture_location || this.goodsSku.skuPictureB
          this.goodsSku.filePathUnDiscount = this.goodsSku.skuPictureC.picture_location || this.goodsSku.skuPictureC
          this.goodsSku.filePathTime = this.goodsSku.skuPictureD.picture_location || this.goodsSku.skuPictureD
          this.goodsSku.filePathOut = this.goodsSku.skuPictureE.picture_location || this.goodsSku.skuPictureE
          this.goodsSku.filePathStep = this.goodsSku.skuPictureF.picture_location || this.goodsSku.skuPictureF
          this.goodsSku.filePathStop = this.goodsSku.skuPictureG.picture_location || this.goodsSku.skuPictureG
          this.type = 'sku编辑'
          this.isSkudisabled = true
          this.isSkuModalShow = true 
        },
        goodsDelete($index,row){
          let _vue = this;
          this.$confirm('确定删除此商品?', '提示', {
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'warning'
          }).then(() => {
            _vue.api({
              url: "/goods/goodsdel",
              method: "post",
              data: {
                goodsCode:row.goodsCode
              }
            }).then(() => {   
              _vue.$message.success("删除完成")
              this.getList()
            }).catch(e => {
              _vue.$message.error("删除失败")
            })
          })
        },
        skuDelete($index,row){
          let _vue = this;
              this.$confirm('确定删除此商品SKU?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let goodsSku = _vue.list[$index];
                goodsSku.skuCode = row.skuCode;
                _vue.api({
                  url: "/goods/deletegoodssku",
                  method: "post",
                  data: goodsSku
                }).then(() => {
                   this.$delete(this.list1,$index)
                  _vue.$message.success("删除完成")
                }).catch(() => {
                  _vue.$message.error("删除失败，有货道正在售卖该SKU,请移除后再试")
                })
              })
        },
        changerecommend($index,row) {
              let _vue = this;
              this.$confirm('确定更改此商品状态?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let goods = _vue.list[$index];
                goods.recommend = row.recommend;
                _vue.api({
                  url: "/online/recommend",
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
            changerecommendStatus($index,row) {
              let _vue = this;
              this.$confirm('确定更改此商品状态?', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              }).then(() => {
                let goods = _vue.list[$index];
                goods.goodsStatus = row.goodsStatus;
                _vue.api({
                  url: "/online/recommend",
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
        getList() {
          //查询列表
          this.listLoading = true;
          this.api({
            url: "/online/goodslist",
            method: "get",
            params: this.listQuery
          }).then(data => {
            this.listLoading = false;
            this.list = data.list;
            this.totalCount = data.totalCount;
          })
        },
        handleSizeChange(val) {
          //改变每页数量
          this.listQuery.pageRow = val
          this.handleFilter();
        },
        handleCurrentChange(val) {
          //改变页码
          this.listQuery.pageNum = val
          this.getList();
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
        getParamer(){
          this.listQuery.goodCode=this.$route.params.id
        },
      }
    }
  </script>
  