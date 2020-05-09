<template>
		<!-- 头部 -->
			<div class="header">
				<router-link to="/Index">
					<i class="iconfont icon-caidan06"></i>
				</router-link>
				<slot></slot>	
				<div>
					<router-link to='/Search'>
						<i class="iconfont icon-sousuo search"></i>
				</router-link>
				<router-link to='/Cart'>
						<i class="iconfont icon-gouwuche1 cart"></i>
				</router-link>
				</div>
			</div>
</template>

<script>
export default {
	name:"user"
}
</script>

<style lang='stylus'>
		.header
			width 100%
			height 88px
			display flex
			justify-content space-between
			align-items center
			padding 0 15px
			margin-top -20px
			text-decoration none
			border-bottom 1px solid #333
	
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
		
						

</style>

