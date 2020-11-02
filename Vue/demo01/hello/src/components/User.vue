<template>
  <div>
    <h1>用户列表</h1>
    <table border="1">
      <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>生日</td>
        <td>操作</td>
      </tr>
      <tr v-for="user in users">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.bir }}</td>
        <!--阻值默认事件 href="javascript:;-->
        <!--在展示主页面的时候已经监听到了user.id 可以直接使用 都在一个table里面 已经循环遍历出来了 -->
        <td>
          <a href="javascript:;"  @click="delUser(user.id)" >删除</a>

          <a v-bind:href=" '#/user/edit?id='+user.id ">修改</a><!--v-bind :用来给页面中标签元素绑定相应的属性
          绑定href拼接属性值 这个属性值是页面中的(user.id)-->
        </td>
      </tr>
    </table>

    <!--<a href="#/user/add">添加</a>-->
    <router-link to="/user/add">用户添加</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "User",
  //接收处理的数据
  data(){
  return{
    users:[]
  }
  },
  methods:{
  findAll(){//查询所有
    this.$http.get("http://localhost:8989/vue/user/findAll",{
      // params:{
      //   page:1,
      //   rows:4,
      // }
    }).then((res)=>
    {
      console.log(res.data);//可以看见具体的属性值
      this.users=res.data;//将响应得到的数据赋值给接收参数users:[] 这是后端接口定义的Ures
    })
  },
    delUser(Uid){
     console.log(Uid)//元素审查 是可以接受到这个id的  也就是Uid=user.id
      //异步请求的删除方法
       this.$http.get("http://rap2api.taobao.org/app/mock/269700/user/delete",{
         params:{
           id:Uid,
         }
      }).then(res=>{
         console.log(res.data);
         if(res.data.success){
           alert(res.data.msg+",点击确定刷新数据..."),
            //返回到查询所有的页面
           this.findAll();
         }
       })
    },



  },
  comments:{},
  created() {
    this.findAll();
  },

  watch: {  //用来监听 进行路由切换后的方法执行 也就是切换回/user后执行findAll方法
    $route: {
      handler: function(val, oldVal){
        console.log(val);
        if(val.path=='/user'){
          this.findAll();
        }
      },
      // 深度观察监听
      deep: true
    }
  },

}
</script>



<style scoped>

</style>
