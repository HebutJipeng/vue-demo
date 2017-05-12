<template>
	<div class="page-tabbar">
		<mt-tabbar v-model="isSelected" fixed>
		  <mt-tab-item id="tab1" href="/#/">
		    <img slot="icon" src="http://iph.href.lu/100x100">
		  	tab1	
		  </mt-tab-item>
		  <mt-tab-item id="tab2" href="/#/lists">
		    <img slot="icon" src="http://iph.href.lu/100x100">
		    tab2
		  </mt-tab-item>
		  <mt-tab-item id="tab3" href="/#/order">
		    <img slot="icon" src="http://iph.href.lu/100x100">
		    tab3
		  </mt-tab-item>
		  <mt-tab-item id="tab4" href="/#/my">
		    <img slot="icon" src="http://iph.href.lu/100x100">
		    tab4
		  </mt-tab-item>
		</mt-tabbar>
	</div>	
</template>

<script type="text/javascript">
	import { Tabbar, TabItem } from 'mint-ui'

	export default {
		name: 'page-tabbar',
		data() {
			return {
				isSelected: this.selected
			}
		},
		props: [ 'selected' ],
		mounted: function() {
			console.log(this.isSelected)
		}

	}
</script>