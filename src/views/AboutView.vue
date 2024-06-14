<script lang="ts" setup>
const imgList = [
  './src/images/Carousel/item1.png',
  './src/images/Carousel/item2.png',
  './src/images/Carousel/item3.png',
  './src/images/Carousel/item4.png'
];
const ZitaoList = [
  './src/images/Zitao/1.png',
  './src/images/Zitao/2.png',
  './src/images/Zitao/3.png',
  './src/images/Zitao/4.png',
  './src/images/Zitao/5.png',
  './src/images/Zitao/6.png',
  './src/images/Zitao/7.png',
  './src/images/Zitao/8.png'
];
</script>

<template>
  <el-carousel :interval="4000" type="card" height="280px">
    <el-carousel-item v-for="item in imgList" :key="item">
      
      <el-image style="height: 100%;" :src="item" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
                :initial-index="4" fit="cover" :preview-src-list="imgList" alt="item image" />
    </el-carousel-item>
  </el-carousel>

  <div class="Layout">

<el-row :gutter="30">
  <el-col :span="6">
    <div class="grid-content ep-bg-purple">
      <el-image style="width: auto;" src="./src/images/Zitao/1.png" :zoom-rate="1.2" :max-scale="7"
        :min-scale="0.2" :initial-index="4" fit="cover" :preview-src-list="ZitaoList" />
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content ep-bg-purple">
      <el-image style="width: auto;" src="./src/images/Zitao/2.png" :zoom-rate="1.2" :max-scale="7"
        :min-scale="0.2" :initial-index="4" fit="cover" :preview-src-list="ZitaoList" />
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content ep-bg-purple">
      <el-image style="width: auto;" src="./src/images/Zitao/3.png" :zoom-rate="1.2" :max-scale="7"
        :min-scale="0.2" :initial-index="4" fit="cover" :preview-src-list="ZitaoList" />
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content ep-bg-purple">
      <el-image style="width: auto;" src="./src/images/Zitao/4.png" :zoom-rate="1.2" :max-scale="7"
        :min-scale="0.2" :initial-index="4" fit="cover" :preview-src-list="ZitaoList" />
    </div>
  </el-col>
</el-row>
<el-row :gutter="30">
  <el-col :span="6">
    <div class="grid-content ep-bg-purple">
      <el-image style="width: auto;" src="./src/images/Zitao/5.png" :zoom-rate="1.2" :max-scale="7"
        :min-scale="0.2" :initial-index="4" fit="cover" :preview-src-list="ZitaoList" />
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content ep-bg-purple">
      <el-image style="width: auto;" src="./src/images/Zitao/6.png" :zoom-rate="1.2" :max-scale="7"
        :min-scale="0.2" :initial-index="4" fit="cover" :preview-src-list="ZitaoList" />
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content ep-bg-purple">
      <el-image style="width: auto;" src="./src/images/Zitao/7.png" :zoom-rate="1.2" :max-scale="7"
        :min-scale="0.2" :initial-index="4" fit="cover" :preview-src-list="ZitaoList" />
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content ep-bg-purple">
      <el-image style="width: auto;" src="./src/images/Zitao/8.png" :zoom-rate="1.2" :max-scale="7"
        :min-scale="0.2" :initial-index="4" fit="cover" :preview-src-list="ZitaoList" />
    </div>
  </el-col>
</el-row>
</div>

</template>

<style>
.el-carousel__item {
  text-align: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
