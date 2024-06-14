<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>


  <el-breadcrumb separator="/">
    <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
    <el-breadcrumb-item><router-link to="/about">关于</router-link></el-breadcrumb-item>
    <el-breadcrumb-item><router-link to="/jianshui-gucheng">建水古城</router-link></el-breadcrumb-item>
    <el-breadcrumb-item><router-link to="/zitao-suyuan">紫陶溯源</router-link></el-breadcrumb-item>
    <el-breadcrumb-item><router-link to="/DIYpage">DIY服务</router-link></el-breadcrumb-item>
  </el-breadcrumb>


  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/jianshui-gucheng">建水古城</router-link> |
    <router-link to="/zitao-suyuan">紫陶溯源</router-link> |
    <router-link to="/DIYpage">DIY服务</router-link>
  </nav>


  <RouterView />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("../src/images/background.jpg");
}

html {
  background-image: url("../src/images/background.jpg");
}

nav {
  padding: 30px;

  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #bcbc9c;
}

</style>
