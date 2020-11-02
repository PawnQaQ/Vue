<!--主入口的主键-->
<template>
  <div >
    <a href="#/home">主页</a>
    <a href="#/user">用户管理</a>
    <a href="#/student">学生管理</a>

    <!--用于展示路由-->
    <router-view/>

  </div>
</template>


<script>
export default {//暴露当前组件对象es6
  name: 'App'
}
</script>

<style>

</style>
