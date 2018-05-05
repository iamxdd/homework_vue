<template>
	<div class="agents-content">
		<div class='agents-nav'>
			<span>Agents</span>
			<ul>
				 <li v-for="(item,index) in AgentsData" :class="{active:$route.fullPath==item.label}" ><router-link :to="item.label">{{item.name}}</router-link></li>
			</ul>
		</div>
		<!-- 右侧 -->
			<div class="AgentsContent">
				<router-view>
					<!-- <strategy></strategy>	 -->
				</router-view>
			</div>
	</div>
</template>

<script>
export default {
  data(){
  	return {
  		AgentsData:[
  		    {name:"All",label:"/Agents/All"},
	        {name:"Physical",label:"/Agents/Physical"},
	        {name:"Virtual",label:"/Agents/Virtual"}
  		]
  	}
  }
}
</script>

<style>
</style>