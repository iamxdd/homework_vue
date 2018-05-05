<template>
  <div id="app">
    <header>
    	<ul>
    		<li>
    			<span>Signed in as</span>
    			<a href="#">Member</a>
    		</li>
    		<li>
    			<span>
    				<i class="fa fa-arrow-right" aria-hidden="true"></i>
    			</span>
    			<a href="#">Sign out</a>
    		</li>
    	</ul>
    </header>
    <nav>
    	<div class='cruise'>
    		Cruise
    	</div>
    	<ul class='rightnav'>
    		 <li v-for="(item,index) in navData" :class="{active:$route.matched[0].path==item.label}" ><router-link :to="item.label">{{item.name}}</router-link></li>
    	</ul>
    </nav>
    <div class="content">
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		navData:[
  		  {name:"DASHBORD",label:"/Dashbord"},
        {name:"MY CRUISE",label:"/MyCruise"},
        {name:"AGENTS",label:"/Agents"},
        {name:"HELP",label:"/Help"}
  		]
  	}
  }
}
</script>

