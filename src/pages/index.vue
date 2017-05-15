<template>
	<div class="index">
		<myHeader :title="title"></myHeader>
		<myBanner></myBanner>
		<myGroup></myGroup>	
		<myContent></myContent>
		<myTabs :selected="selected"></myTabs>
	</div>
</template>

<script type="text/javascript">
	import myHeader from '../components/header'
	import myContent from '../components/content'
	import myTabs from '../components/tabs'
	import myBanner from '../components/banner'
	import myGroup from '../components/groups'

	export default {
		name: 'index',
		data () {
			return {
				title: '瀑布流实例hahahah',
				selected: 'tab1'
			}
		},
		components: {
			myHeader,
			myContent,
			myTabs,
			myBanner,
			myGroup
		}
	}
</script>
