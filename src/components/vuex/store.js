import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import url from '../../url/url.js'
var qs = require('qs');
Vue.use(Vuex)
const state={
	/* agents 左边数据*/
	physcialeftData:[],
	SumaryData:[],
	HistoryData:[],
	Top:0,
	isShow:false,
	Num:0,
	Inputvalue:''
};
//发生变化时
const getters={ 
	physcialeftData:state=>state.physcialeftData,
	SumaryData:state=>state.SumaryData,
	HistoryData:state=>state.HistoryData,
	Top:state=>state.Top,
	isShow:state=>state.isShow,
	Num:state=>state.Num,
	Inputvalue:state=>state.Inputvalue
	
};
const mutations={
	PHYSCIALEFTDATA(state,data){
		state.physcialeftData=data
	},
	SUMARYDATA(state,data){
		state.SumaryData=data
	},
	HISTORYDATA(state,data){
		state.HistoryData=data
	},
	TOP(state,data){
		state.Top = data
	},
	ISSHOW(state,data){
		state.isShow = data
	},
	NUM(state,data){
		state.Num = data
	},
	INPUTVALUE(state,data){
		state.Inputvalue = data;
	}
};
var type = 'GET';
var _url = url.agents['leftagents']
const actions={
	GetAgentsData({commit}, params){
		 axios({
		      method: type,
		      url: _url, 
		      params:params
		    }).then(function(res){
		    	console.log("///////////////",res.data);
		    	 commit('PHYSCIALEFTDATA',res.data.list);
		    	 commit('SUMARYDATA',res.data.summary);
		    	 commit('HISTORYDATA',res.data.history);
		    	
		    	
		    }).catch(function(err){
		    
		    	console.log("*************",err)
		       
		    })
	},
	deleteItem({commit}, params){
		if(!state.physcialeftData[params.i]['isdeny']){
			state.physcialeftData[params.i]['resourse'].splice(params.j,1);
			commit('PHYSCIALEFTDATA',state.physcialeftData);
			commit('ISSHOW',false);
		}	
	},
	addItem({commit},params){
		if(!state.physcialeftData[state.Num]['isdeny']){
			var _params = [];
			commit('INPUTVALUE','');
			if(params.value.indexOf(',')==-1 && params.value.replace(/\s/g,"").length>0){
				state.physcialeftData[state.Num]['resourse'].push({
					value:params.value
				});
			}else if(params.value.indexOf(',')>-1){
				for(var i = 0;i<params.value.split(',').length;i++){
					state.physcialeftData[state.Num]['resourse'].push({
						value:params.value.split(',')[i]
					});
				}
			}
			
			var hash = {};
			state.physcialeftData[state.Num]['resourse'] = state.physcialeftData[state.Num]['resourse'].reduce(function(item, next) {
			    hash[next.value] ? '' : hash[next.value] = true && item.push(next);
			    return item
			}, [])
			commit('PHYSCIALEFTDATA',state.physcialeftData);
			commit('ISSHOW',false);
		}
		
		
	},
	getTop({commit}, params){
		if(!state.physcialeftData[params.num]['isdeny']){
			var _top = params.top;
			console.log('_top',_top)
			commit('TOP',_top);
			commit('ISSHOW',true);
			commit('NUM',params.num);
		}
		
	},
	closeProp({commit}){
		commit('ISSHOW',false);
	}
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})