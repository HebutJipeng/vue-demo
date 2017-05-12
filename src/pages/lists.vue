<template>
	<div class="lists">
		<myHeader :title="title"></myHeader>
		<div class="lists-content">
			<div class="left-nav" ref="leftNav" id="leftNav">
				<ul>
					<li>会发生东风路卡上来发掘了</li>
					<li>发发生都放假啦束带结发辣椒水</li>
					<li>发电机房垃圾塑料袋</li>
				</ul>
			</div>
			<div class="right-content"></div>
		</div>
		<myTabs :selected="selected"></myTabs>
	</div>
</template>

<script type="text/javascript">
	import myHeader from '../components/header'
	import myTabs from '../components/tabs'
	import BScroll from 'better-scroll'

	export default {
		name: 'lists',
		data() {
			return {
				title: 'scroll实例',
				selected: 'tab2'
			}
		},
		components: {
			myHeader,
			myTabs
		},
		methods: {
			_initScroll() {
				console.log('------>init');
				this.leftNav = new BScroll(this.$refs.leftNav, {
					click: true,
					startX: 0,
  					startY: 0
				});
				this.leftNav.on('scroll', function(pos) {
					console.log(pos.x+ "~" + pos.y)
				})	
			}
		},
		mounted	() {
			this._initScroll()
			
		}
	}
</script>

<style type="text/css">
	.lists-content {
		display: flex;
	}

	.left-nav {
		width: 80px;
		flex: 0 0 80px;
	}
</style>