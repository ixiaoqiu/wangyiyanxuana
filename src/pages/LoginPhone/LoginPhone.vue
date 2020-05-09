<template>
  <div class="PhoneWrap">
    <div class="logo">
      <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <!-- 表单 -->
    <form class="phoneContainer" @submit.prevent="onSubmit">
      <div class="phone">
        <input type="phone" name="phone"
                placeholder="请输入手机号"
                v-validate="`required|phone`"
        >
        <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
      </div>
      <div class="code">
        <input type="text" name="code" placeholder="请输入短信验证码" v-validate="`required|code`">
        <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
        <span class="codeBtn">获取验证码</span>
      </div>
      <div class="txt">
        <span class="yu">遇到问题？</span>
        <span class="mi" @click="$router.push('/Login/email')">使用密码验证登录</span>
      </div>
      <button class="btn" :class="{'off':!siAccept}">登录</button>
      <div class="clauseWrap">
        <div class="clause" @click="siAccept = !siAccept">
          <i class="i iconfont " style="color:#666;font-size:24px;" :class="{'icon-fangkuangxuanze':siAccept}"></i>
        </div>
        <span class="consent">我同意<a href="#">《服务条款》</a>和<a href="#">《网易隐私政策》</a></span>
      </div>
    </form>
    <div class="else" @click="$router.push('/Login/index')">其他登录方式></div>
  </div>

</template>

<script>
// Toast:做校验表单通不通过
import {Toast} from 'vant'
export default {
  data(){
    return{
      siAccept:true
    }
  },

  components:{
    [Toast.name]:Toast
  },
  methods:{
    async onSubmit(){
      const flag = await this.$validator.validateAll(["phone","code"])
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
  .PhoneWrap
    width 100%
    height 100%
    margin 0 auto
    .logo
      text-align center
      margin 40px 0 40px 0
      img 
        width 300px
        height 100px
    .phoneContainer
      .phone
        width 100%
        height 65px
        position relative
        input 
          width 100%
          height 65px
          position absolute
          top 40%
          display block
          font-size 28px
          border none
          border-bottom 1px solid #ccc
          outline-style none
      .code
        width 100%
        height 65px
        border-bottom 1px solid #333
        position relative
        margin-top 75px
        input 
          width 100%
          height 65px
          position absolute
          top 50%
          display block
          transform translateY(-50%)
          font-size 28px
          border none
          border-bottom 1px solid #ccc
          outline-style none
        .codeBtn
          width 160px
          height 60px
          border 1px solid rgba(0,0,0,0.3)
          position absolute
          right 10px
          top -10px
          text-align center
          line-height 60px
          font-size 28px
      .txt
        font-size 28px
        display flex
        justify-content space-between
        margin-top 45px
        .yu
          color #7f7f7f
        .mi
          color #333
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
      .clauseWrap
        display flex
        align-items center
        .consent
          margin 40px 10px
        a
          margin 20px
    .else
      font-size 28px
      height 80px
      // background yellow
      text-align center
      line-height 80px
      margin-top 40px
          
        
          

</style>