import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        pool: {},
        hotline: '95599',
        documentTypeOptions: {
            "110025": "外国护照",
            "110021": "台湾居民来往大陆通行证",
            "110019": "港澳居民来往内地通行证"
        },
        accountTypeOptions: {},//A-I类账户，B-II类账户
        CodAccount:{},//账户性质:活期/整整/双利丰
        CodCurrency:{},//币种
        CodIndDraf:{},//钞汇性质
        accountStatus:{},//账户状态
        endState: 0
    },
    mutations: {
        resetPool (state, data) {
            state.pool = data
        },
        setPool (state, payload) {
            console.log("setPool " + payload.key + "  " + payload.val)
            state.pool[payload.key] = payload.val
        }
    },
    actions: {
        initPool ({ commit, state}, data) {
            commit('resetPool', {})
            if (data.hasOwnProperty('setKeys')) {
                for(var i = 0; i < data.setKeys.length; i++) {
                    commit({type:"setPool", key:data.setKeys[i], val:""})
                }
            }
            if (data.hasOwnProperty('getKeys')) {
                PlatformAdapter.getData(data.getKeys, function (data2) {
					var ojb = {};
                    for(var i = 0; i < data.getKeys.length; i++) {
                        //commit({type:"setPool", key:data.getKeys[i], val:data2[ data.getKeys[i] ]})
						ojb[data.getKeys[i]] = data2[ data.getKeys[i] ];
                    }
					commit('resetPool', ojb);
                })
            }
        },
        initPool2 ({ commit, state}, data) {
            //commit('resetPool', {})
            Vue.set(data, 'pool', {})
            if (data.hasOwnProperty('setKeys')) {
                for(var i = 0; i < data.setKeys.length; i++) {
                    Vue.set(data.pool, data.setKeys[i], "")
                    //commit({type:"setPool", key:data.setKeys[i], val:""})
                }
            }
            if (data.hasOwnProperty('getKeys')) {
                PlatformAdapter.getData(data.getKeys, function (data2) {
					//var ojb = {};
                    for(var i = 0; i < data.getKeys.length; i++) {
                        //commit({type:"setPool", key:data.getKeys[i], val:data2[ data.getKeys[i] ]})
                        //ojb[data.getKeys[i]] = data2[ data.getKeys[i] ];
                        Vue.set(data.pool, data.getKeys[i], data2[ data.getKeys[i] ])
                    }
					//commit('resetPool', ojb);
                })
            }
        },
        fetch ({ commit }, names) {
            PlatformAdapter.getData(names, function (data){
                commit('resetPool', data)
            })
        },
        submit ({ commit, state }, names) {
            var pairs = {}
            for(var i = 0; i < names.length; i++) {
                pairs[names[i]] = state.pool[names[i]]
            }
            PlatformAdapter.setData(pairs)
        },
        submit2 ({ commit, state }, payload) {
            var pairs = {}
            for(var i = 0; i < payload.names.length; i++) {
                pairs[payload.names[i]] = payload.pool[payload.names[i]]
            }
            PlatformAdapter.setData(pairs)
        },
        exitScene (state, exit) {
            var event = exit.split("_")[1]
            PlatformAdapter.sendEvent(event)
        },
        onCancel (state) {
            PlatformAdapter.sendEvent("CANCEL")
        },
        onContinue (state) {
            PlatformAdapter.sendEvent("CONTINUE")
        },
        onFail (state) {
            PlatformAdapter.sendEvent("FAIL")
        },
        onTimeout (state) {
            PlatformAdapter.sendEvent("TIMEOUT")
        },
        onHome (state) {
            PlatformAdapter.sendEvent("HOME")
        },
        onExit (state) {
            PlatformAdapter.sendEvent("EXITADMIN")
        },
		onBack(state){
			PlatformAdapter.sendEvent("BACK")
		}
    }
})

export default store
