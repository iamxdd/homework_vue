<template>
	<div class='physcial-all'>
		<div class='physcial-left'>
			<div class='item' v-for="(item,index) in $store.getters.physcialeftData" :class="{active:!item.isdeny}">
				<div class="circlebox">
					<div class='circle'></div>
				</div>
				<div class='leftcontent'>
					<div class='item-theme'>
						<h4>{{item.theme}}</h4>
						<span class='line'>|</span>
						<span class='ip'>{{item.side}}</span>
						<span class='line'>|</span>
						<span class='ip'>{{item.ip}}</span>
						<span class='line'>|</span>
						<span class='ip'>{{item.file}}</span>
					</div>
					<div class="operate">
						<span class='add' @click="additem($event,index)"><b>+</b>
							<a href="#">Specify Resource</a>
						</span>
						<span class='line'>|</span>
						<span class='resource'>Resource:</span>
						<span class='delete' v-if="item.resourse.length>0" v-for="(v,i) in item.resourse">
							{{v.value}}
							<i @click="deletitem(index,i)" class="fa fa-window-close-o" aria-hidden="true"></i>
						</span>
						<span class='deny' v-if="!item.isdeny">
							<i class="fa fa-ban" aria-hidden="true"></i>
							<a href="#">Deny</a>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class='physcial-right'>
		<p>Sumary</p>
		<ul class="sumaryul">
			<li  v-for="(item,index) in $store.getters.SumaryData">
				<span class='left'>{{item.value}}</span>
				<span class='right'>{{item.count}}</span>
			</li>
		</ul>
		<p>History</p>
		<ul class='Historyul'>
			<li  v-for="(item,index) in $store.getters.HistoryData">
				<a href="#">{{item.value}}</a>
			</li>
		</ul>
		</div>
		<Propmt v-if="$store.getters.isShow"></Propmt>
	</div>
</template>

<script>
	import Propmt from './Propmt.vue'
	export default {
	  components:{
	    Propmt
	  },
	  data(){
	  	return {
	  		AgentsData:[
	  		    {name:"All",label:"/Agents/All"},
		        {name:"Physical",label:"/Agents/Physical"},
		        {name:"Virtual",label:"/Agents/Virtual"}
	  		],
	  		leftData:[],
	  		summaryData:[],
	  		histotryData:[],
	  		isshow:false
	  	}
	  },
	  created:function(){
	  	
	  },
	    mounted:function(){
	    	this.$store.dispatch("GetAgentsData",22);
	    },
	    computed:{
		 
	    },
	    methods:{
	    	deletitem:function(i,j){
	    		this.$store.dispatch('deleteItem',{i:i,j:j}) 		
	    	},
	    	additem:function(e,index){
	    			var _top = e.currentTarget.parentNode.offsetTop+30;
	    			this.isshow = true;
	    			this.$store.dispatch('getTop',{top:_top,num:index})    			
	    	},
	    }
}
</script>

<style>
</style>