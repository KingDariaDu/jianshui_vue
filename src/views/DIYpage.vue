<template>
  <div>
    <h1>DIY服务</h1>
  </div>

  <!-- 其他内容 -->
  <div class="parent">
        <div class="son1">我是son1</div>
        <div class="son2">我是son2</div>
    </div>

</template>
<style>
.parent {
  display: flex;
  width: 500px;
  height: 500px;
  background-color: green;
}

.son1 {
  /* 自定义宽度,不设置时根据内容自适应 */
  width: 200px;
  background-color: yellow;
}

.son2 {
  flex: 1;
  background-color: red;
}
</style>