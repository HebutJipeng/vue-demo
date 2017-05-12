<template>
	<div class="order">
		<myHeader :title="title"></myHeader>
		<p>page3: order</p>
		<myTabs :selected="selected"></myTabs>
	</div>
</template>

<script type="text/javascript">
	import myHeader from '../components/header'
	import myTabs from '../components/tabs'

	export default {
		data() {
			return {
				title: '订单实例',
				selected: 'tab3'
			}
		},
		components: {
			myHeader,
			myTabs
		}	
	}
</script>