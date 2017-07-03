'use strict';

Vue.component('counter', {
    template: `
        <div id="app">
            Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
            <button @click="incrementIfOdd">Increment if odd</button>
            <button @click="incrementAsync">Increment async</button>
        </div>`,
    computed: Vuex.mapGetters([
        'evenOrOdd'
    ]),
    methods: Vuex.mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
    ])
});
