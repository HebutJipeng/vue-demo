<template>
	<div class="group">
		<ul class="group-list">
			<li>
				<img src="http://iph.href.lu/100x100">
				<p>item</p>
			</li>
			<li>
				<img src="http://iph.href.lu/100x100">
				<p>item</p>
			</li>
			<li>
				<img src="http://iph.href.lu/100x100">
				<p>item</p>
			</li>
			<li>
				<img src="http://iph.href.lu/100x100">
				<p>item</p>
			</li>
			<li>
				<img src="http://iph.href.lu/100x100">
				<p>item</p>
			</li>
			<li>
				<img src="http://iph.href.lu/100x100">
				<p>item</p>
			</li>
			<li>
				<img src="http://iph.href.lu/100x100">
				<p>item</p>
			</li>
			<li>
				<img src="http://iph.href.lu/100x100">
				<p>item</p>
			</li>
		</ul>
	</div>
</template>

<style type="text/css">
	.group-list {
		display: flex;
		flex-wrap: wrap;
		font-size: 14px;	
		padding-top: 10px;
	}

	.group-list li {
		width: 25%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
	}

	.group-list li img {
		width: 50%;
		border-radius: 50%;
	}
	
	.group-list li p {
		margin: 4px 0;
	}

</style>