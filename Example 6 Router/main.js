'use strict';

var Home = { template: '<div>Home</div>' }
var About = { template: '<div>About</div>' }
var Contact = { template: '<div>Contact</div>' }

var routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

var router = new VueRouter({
  routes: routes
})

var app = new Vue({
  router
}).$mount('#app')
