<template>
  <div class="EmailWrap">
    <div class="logo">
      <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <form class="emailContainer" @submit.prevent="onSubmit">
      <div class="email">
        <input type="email"
               name="email"
               placeholder="邮箱账号"
               v-validate="`required|email`"
        >
        <!-- 提示 -->
        <span style="color: red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <div class="pwd">
        <input type="text" name="pwd" placeholder="密码" v-validate="`required|pwd`">
        <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
      </div>
      <div class="txt">
        <span style="color:#666">注册账号</span>
        <span style="color:#666">忘记密码</span>
      </div>
      <button class="btn">登录</button>
    </form>
    <div class="else" @click="$router.push('/Login/index')">其他方式登录></div>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  components:{
    [Toast.name]:Toast
  },
  methods:{
    async onSubmit(){
      const flag = await this.$validator.validateAll(["email","pwd"])
      if(flag){
        console.log('表单提交了')
      }else{
        Toast.fail('请输入正确信息')
      }
    }
  }
}
</script>

<style lang='stylus'>
  .EmailWrap
    width 100%
    height 100%
    margin 0 auto
    .logo
      text-align center
      margin 80px 0 40px 0
      img 
        width 300px
        height 100px
    .emailContainer
      .email
        width 100%
        height 65px
        position relative
        input 
          width 100%
          height 100px
          position absolute
          top 60%
          display block
          font-size 28px
          border none
          border-bottom 1px solid #ccc
          outline-style none
      .pwd
        width 100%
        height 65px
        border-bottom 1px solid #333
        position relative
        margin-top 100px
        input 
          width 100%
          height 100px
          position absolute
          top 50%
          display block
          transform translateY(-50%)
          font-size 28px
          border none
          border-bottom 1px solid #ccc
          outline-style none
      .txt
        display flex
        justify-content space-between
        font-size 28px
        margin 40px 0
      .btn
        width 100%
        height 95px
        line-height 95px
        text-align center
        background #DD1A21
        font-size 35px
        color #fff
        border none
        border-radius 10px
        margin-top 40px
    .else
      font-size 28px
      height 80px
      // background yellow
      text-align center
      line-height 80px
      margin-top 40px

</style>