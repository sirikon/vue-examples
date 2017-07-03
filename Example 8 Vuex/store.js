'use strict';

const state = {
    count: 0
};

const mutations = {
    increment: function (state) {
        state.count++
    },
    decrement: function (state) {
        state.count--
    }
};

const actions = {
    increment: function ({ commit }){
        commit('increment');
    },
    decrement: function ({ commit }){
        commit('decrement');
    },
    incrementIfOdd: function ({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync: function ({ commit }) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}

const getters = {
  evenOrOdd: function(state) {
    return state.count % 2 === 0 ? 'even' : 'odd'
  }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
