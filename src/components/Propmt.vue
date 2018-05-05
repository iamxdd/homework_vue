<template>
<div class='tagbox' id="tagbox" :style="{top:_top/100+ 'rem'}">
  	 <div class="tag">
        <em></em><span></span>
        <div>
        	<p>(separate mutiplle resource name with commas)</p>
        	<input type="text"  value="" ref="mutiplle"/>
        	<button @click="Add">Add resources</button>
        	<button @click="close">Close</button>
        </div>
        
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
		 _top(){
				return this.$store.getters.Top;
		 }
	    },
	    methods:{
	    	close:function(){
	    		this.$store.dispatch('closeProp') 
	    	},
	    	Add:function(){
	    		this.$store.dispatch('addItem', this.$refs.mutiplle) 
	    	},
	    }
	
}
</script>

<style>
	  	.tagbox{
  		position: absolute;
  		font-size:0.14rem;
  		left: 0.4rem;
  	}
        .tag{
            width: 5.6rem;
            height: 1.2rem;
            border: 0.05rem solid #553D00;
            position: relative;
            border-radius: 0.2rem;
            background:#E0EDD4
        }
        .tag em
        {
            display: block;
            border-width: 0.2rem;
            position: absolute;
            top: -0.4rem;
            left: 0.55rem;
            border-style: solid dashed dashed;
            border-color:  transparent transparent #553D00;
            font-size: 0;
            line-height: 0;
        }
        .tag span
        {
            display: block;
            border-width: 0.2rem;
            position: absolute;
            top: -0.33rem;
            left: 0.55rem;
            border-style: solid dashed dashed;
            border-color: transparent transparent #E0EDD4;
            font-size: 0;
            line-height: 0;
        }
        .tag p{
        	text-indent: 0.2rem;
        }
        .tag input{
        	margin-left: 0.2rem;
        	display: block;
        	width:90%
        }
        .tag button{
        	margin:10px 0 0 20px;
        	padding: 3px 10px;
        	border:2px solid;
        	text-align: center;
        	border-radius: 10px;
        	font-weight: bold;
        	outline: none;
        	cursor: pointer;
        }
</style>