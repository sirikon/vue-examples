'use strict';

var vm = new Vue({
    el: '#app',
    computed: {
        filteredPeople: function() {
            var searchText = this.searchText;
            if (searchText === "") return this.people;

            return this.people.filter(function(person){
                var match = false;
                for(var key in person) {
                    if (person.hasOwnProperty(key)) {
                        if (person[key].toString().toLowerCase().indexOf(searchText) >= 0) {
                            match = true;
                        }
                    }
                }
                return match;
            });
        }
    },
    data: {
        searchText: '',
        people: DATA.People
    }
});
