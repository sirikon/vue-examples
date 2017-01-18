'use strict';

Vue.component('search-bar', {
  template: '#seachBar_template',
  props: ['value'],
  methods: {
    updateValue: function(value) {
      this.$emit('input', value)
    }
  }
});
