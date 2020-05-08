<template>
	<div class="UserWrap">
		<!-- 头部 -->
			<div class="header">
				<router-link to="/Index">
					<i class="iconfont icon-caidan06"></i>
				</router-link>
				<div class="text">	</div>			
				<div>
					<router-link to='/Search'>
						<i class="iconfont icon-sousuo search"></i>
				</router-link>
				<router-link to='/Cart'>
						<i class="iconfont icon-gouwuche1 cart"></i>
				</router-link>
				</div>
			</div>
			<!-- 网易严选 -->
			<div class="wangyiWrap">
				<div class="count">
					<div class="wangyi">
						<img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
					</div>
					<div class="loginWrap">
						<div class="inPhone">
							<i class="ico iconfont icon-shouji"></i>
							<span class="text">手机号快捷登录</span>
						</div>
						<div class="Email">
							<i class="ico iconfont icon-youxiang"></i>
							<span to='/User' class="text">邮箱账号登录</span>
						</div>
					</div>
				</div>
					<!-- 三个图标 -->
					<div class="thirdWrap">
						<div class="weixin">
							<i class="icon iconfont icon-weixin"></i>
							<span class="text">微信</span>
						</div>
						<div class="QQ">
							<i class="icon iconfont icon-QQ"></i>
							<span class="text">QQ</span>
						</div>
						<div class="weibo">
							<i class="icon iconfont icon-weibo"></i>
							<span class="text">微博</span>
						</div>
					</div>
			</div>
		
	</div>
</template>

<script>
export default {
	name:"user"
}
</script>

<style lang='stylus'>
	.UserWrap
		width 100%
		height 100%
		.header
			width 100%
			height 88px
			display flex
			justify-content space-between
			align-items center
			padding 0 15px
			margin-top -20px
			text-decoration none
			.iconfont
				font-size 48px
				&.search
					position relative
					left -70px
				&.cart
					position relative
					left -30px
			.text
				width 132px
				height 40px
				background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp')
				background-size 100%
		.wangyiWrap
			width 100%
			height calc(100vh - 80px)
			background #F2F5F4
			.count
				.wangyi
					height 500px
					// background red
					position relative
					img
						width 300px
						height 100px
						position absolute
						top 160px
						left 203px
				.loginWrap
					height 400px
				
					position relative
					.inPhone
						width 640px
						height 80px
						background #DD1A21
						position absolute
						left 40px
						top 0
						.text
							font-size 30px
							color #ffffff
							position relative
							left 180px
							top	10px
						.ico
							font-size 40px
							color #ffffff
							position relative
							left 170px
							top	12px

					.Email
						width 640px
						height 80px
						background #fff
						position absolute
						left 40px
						top 120px
						border 1px solid #DD1A21
						.text
							font-size 30px
							color #DD1A21
							position relative
							left 180px
							top	-10px
						.ico
							font-size 60px
							color #DD1A21
							position relative
							left 170px
							top	-2px
			.thirdWrap
				height 50px
				display flex
				justify-content space-between
				padding 0 100px
				position relative
				left 0
				bottom -250px
				.weixin
					.icon
						font-size 40px		
					.text
						font-size 30px	
				.QQ
					.ico
						font-size 40px		
					.text
						font-size 30px
				.weibo
					.ico
						font-size 40px		
					.text
						font-size 30px

						

</style>

