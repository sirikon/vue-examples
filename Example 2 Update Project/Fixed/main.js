'use strict';

var vm = new Vue({
    el: '#app',
    data: {
        taskName: '',
        tasks: []
    },
    methods: {
        saveTask: function() {
            if (this.taskName !== "") {
                this.tasks.push(this.taskName);
                this.taskName = "";
            }
        }
    }
});
