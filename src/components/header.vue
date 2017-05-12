<template>
	<mt-header fixed :title="title"></mt-header>
</template>

<script type="text/javascript">
	import { Header } from 'mint-ui'
	export default {
		data() {
			return {
				name : 'fajsl'
			}
		},
		props: [
			'title'
		]
	}

</script>

<style type="text/css"></style>