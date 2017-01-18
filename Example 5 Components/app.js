'use strict';

var vm = new Vue({
    el: '#app',
    computed: {
        filteredPeople: function() {
            return Utils.filter(this.people, this.searchText);
        }
    },
    data: {
        searchText: '',
        people: DATA.People
    }
});
