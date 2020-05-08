import ajax from '@/ajax'
import {
	CHANGEINDEXDATA
} from '../mutation-type.js'
const state = {
	indexData:{},//index主页的数据
}
//同步修改state的状态数据
const mutations = {
	[CHANGEINDEXDATA](state,indexData){
		state.indexData = indexData
	}
}
//获取异步数据，触发mutation同时将异步数据交给mutation
const actions = {
	async getIdexData({commit}){
		let indexDataResult = await ajax.index.getIndexData()
		commit(CHANGEINDEXDATA,indexDataResult)
	},
}
export default {
	state,
	mutations,
	actions
}