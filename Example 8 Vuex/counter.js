'use strict';

Vue.component('counter', {
    template: `
        <div id="app">
            Clicked: <b>{{ $store.state.count }}</b> times, count is <b :class="evenOrOdd">{{ evenOrOdd }}</b>.
            <div class="buttons">
                <button @click="increment" class="button is-primary">+</button>
                <button @click="decrement" class="button is-primary">-</button>
                <button @click="incrementIfOdd" class="button is-primary">Increment if odd</button>
                <button @click="incrementAsync" class="button is-primary">Increment async</button>
            </div>
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
