<template>
  <div>
    <h2>用户添加信息</h2>
    <form action="">
      用户名: <input v-model="user.name" type="text"><br>
      年龄: <input v-model="user.age" type="text"><br>
      生日: <input v-model="user.bir" type="text"><br>
      <input type="button" @click="saveUserInfo" value="添加用户信息">
    </form>
  </div>
</template>

<script>
export default {
  name: "UserAdd",
  data(){
    return{
      user:{},
    }
  },
  methods:{
    saveUserInfo(){
      //可以在控制台查看在添加信息的时候页面的数据是否已经双向绑定
      console.log(this.user);
      //发送异步请求获取后端数据 post请求的参数是对象 会自动转换为Jason
      this.$http.post("http://rap2api.taobao.org/app/mock/269700/user/add",{
        param:this.user
      }).then(res=>{
        console.log(res);//元素审查 看响应的数据
        if(res.data.success){//自己定义的返回参数 在接口文档里面
          this.$router.push("/user");//切换路由 回到展示的页面 这路需要路由的监听 在User大组件里面配置
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
