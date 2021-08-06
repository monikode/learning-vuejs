const Home = {
  template: `<div>Hello Wolrd!</div>`,
};

var routes = [
  { path: "/", component: Home },
  { path: "/hello", component: Home },
  { path: "/forms", component: Vue.component('form-page') },
  { path: "/dirs", component: Vue.component("diretivas-page") },
];

const router = new VueRouter({ routes });

var vue = new Vue({
  el: "#app",
  router,
  data: {
    message: "Hello World",
    isVisible: false,
    list: [{ text: "item 1" }, { text: "item 2" }, { text: "item 3" }],
    myHTML: '<input type="text"/>',
    counter: 0,
  },
  methods: {
    upCounter: function () {
      this.counter++;
    },
  },
  created: function () {
    console.log("created");
  },
  //beforeCreate>created>beforeMount>mounted>beforeupdate>updated>beforedestroy>destroyed
});
