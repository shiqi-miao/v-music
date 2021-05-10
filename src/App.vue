<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css"; // normalize.css 样式格式化
@import "./styles/index.scss"; // 全局自定义的css样式
.pagination-line {
    text-align: right;
    margin: 20px 0;
}
.flex {
    display: flex;
    display: -webkit-flex;
}
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
.flex-center-S {
    display: flex;
    display: -webkit-flex;
    align-items: flex-start;
    -webkit-align-items: flex-start;
}
.flex-center-E {
    display: flex;
    display: -webkit-flex;
    align-items: flex-end;
    -webkit-align-items: flex-end;
}
.justify-between{justify-content: space-between}
.justify-around{justify-content: space-around}
.flex-1 {
    flex: 1;
}
.danger {
    color: #f56c6c;
}
.orange {
    color: #e6a23c;
}
.success {
    color: #67c23a;
}
.left {
    text-align: left;
}
.limit {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-text-overflow: ellipsis;
}
.limit-ellipsis{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-text-overflow: ellipsis;
}
.limit-3{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
}
.limit-2{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
}
.text-right {
    text-align: right;
}
.pointer{cursor: pointer;}
/* input type="number" 去掉箭头 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
// 修改滚动条样式
  div::-webkit-scrollbar{
    width:3px;
    height:10px;
  }
  div::-webkit-scrollbar-track{
    background: #e2e5eb;
    border-radius:5px;
  }
  div::-webkit-scrollbar-thumb{
    background:#c0c4cc;
    border-radius:10px;
  }
  div::-webkit-scrollbar-thumb:hover{
    background: #c0c4cc;
  }
  div::-webkit-scrollbar-corner{
    background: #c0c4cc;
  }
  // 修改滚动条样式
  .dv-border-box-1 .border-box-content{padding: 2%;}
</style>
