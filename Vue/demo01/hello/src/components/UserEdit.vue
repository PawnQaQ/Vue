<template>
  <div>
    <h2>编辑用户信息</h2>
    <form action="">
      用户名: <input v-model="user.name" type="text"> <br>
      年龄: <input v-model="user.age" type="text"> <br>
      生日: <input v-model="user.bir" type="text"> <br><!--回显的时候 下面data中已经定义了id 已经拿到了放入了user对象中-->
      <input type="button"  @click="editUserInfo"  value="添加/更新">
    </form>
  </div>
</template>

<script>
export default {
  name: "UserEdit",
  data(){
  return{
    user:{
      id:"",//点击修改按钮 传递的参数 路由之间的参数传递created(){}中获取
    }
  };
},

methods:{
    //1.数据回显
  findOne() {
    this.$http.get("http://rap2api.taobao.org/app/mock/269700/user/findOne?id=" + this.user.id).then(res => {
      console.log(res.data);
      this.user = res.data;
    });
  },
  editUserInfo() {
    this.$http.post("http://rap2api.taobao.org/app/mock/269700/user/update",this.user).then(res=>{
      console.log(res);
      if(res.data.success){
        this.$router.push("/user");
      }
    })
  },

},
  created() {//生命周期中第二个函数,该函数在执行时Vue实例已经初始化了data属性和methods中相关方法
    console.log("修改组件中获取的id: " + this.$route.query.id);//路由之间的传参
    this.user.id = this.$route.query.id;
    this.findOne();
  }

}
</script>

<style scoped>

</style>
