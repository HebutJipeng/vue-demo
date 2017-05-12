<template>
	<div class="lists">
		<myHeader :title="title"></myHeader>
		<p>page4: my</p>
		<myTabs :selected="selected"></myTabs>
	</div>
</template>

<script type="text/javascript">
	import myHeader from '../components/header'
	import myTabs from '../components/tabs'

	export default {
		data() {
			return {
				title: '我的实例',
				selected: 'tab4'
			}
		},
		components: {
			myHeader,
			myTabs
		}	
	}
</script>