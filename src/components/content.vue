<template>
	<div class="page">
		<div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
			<ul class="page-infite-list img-list"
				v-infinite-scroll="loadMore"
				infinite-scroll-disabled="loading"
				infinite-scroll-distance="50">
				<li v-for="item in list">
					<img :src="baseUrl + item.cover.key">
					<p>{{item.title}}</p>
				</li>			
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
import { InfiniteScroll } from 'mint-ui'

export default {
	data() {
		return {
			list: [],
			loading: false,
			wrapperHeight: 0,
			baseUrl: 'http://img.hb.aicdn.com/'
		}
	},
	methods: {
		loadMore() {
		  this.loading = true;
		  let _list = this.list
		  setTimeout(() => {
		    this.$ajax({
				method: 'get',
				url: '/mock/data.json'
			})
			.then(res => {
				console.log("==========>", res)
				this.list.push.apply(this.list, res.data.recommends)
			})
		    this.loading = false;
		  }, 2500);
		}	
	},

	mounted() {
	    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	},

	created() {
		let _list = this.list
		this.$ajax({
			method: 'get',
			url: '/mock/data.json'
		})
		.then(res => {
			console.log(res)
			for(let i =0; i< res.data.recommends.length; i++) {
				_list.push(res.data.recommends[i])
			}
			this.list = res.data.recommends
			this.list.push.apply(this.list, res.data.recommends)
		})
	}
}

</script>

<style type="text/css">
	.page {
		margin-top: 5px;
	}

	.img-list {
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.img-list li {
		width: 49%;
		max-height: 200px;
		overflow: hidden;
		display: flex;
    	flex-direction: column;
    	justify-content: flex-end;
	}

	.img-list li img {
		width: 100%;

	}

	.img-list li p {
		margin: 10px;
	}
</style>
