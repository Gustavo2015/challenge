import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		page: 1,
		lang: localStorage.getItem('lang') || 'ptBr'
	},
	mutations: {
		setPage (state, page) {
			state.page = page
		},
		setLang (state, lang) {
			state.lang = lang
			localStorage.setItem('lang', lang);
		}
	},
	actions: {
		
	},
	modules: {
	}
})
