<template>
	<div class="UserWrap">
		<!-- 头部 -->
			<ele-Header>
				<template>
					<div class="text"></div>
				</template>
			</ele-Header>
			<!-- 渲染映射LoginIndex -->
			<router-view></router-view>
	</div>
</template>

<script>
import Header from 'components/Header/Header.vue'
export default {
	name:"user",

	components:{
		'ele-Header':Header
	}
}

	
</script>

<style lang='stylus'>
	.UserWrap
		width 100%
		height calc(100vh - 48px)
						

</style>

