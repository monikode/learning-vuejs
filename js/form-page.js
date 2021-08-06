Vue.component("form-page", {
    template: `
    <div>
      <h2>Formulários</h2>
      <input v-model.lazy="name" /> {{name}} {{$parent.counter}}
      <hr>
      <input type="checkbox" value="A" v-model="myList"/>
      <input type="checkbox" value="B" v-model="myList"/>
      <input type="checkbox" value="C" v-model="myList"/>
      <input type="checkbox" value="D" v-model="myList"/>
      {{ myList }}

      <input type="checkbox" :true-value="15" :false-value="18" v-model="myCheck"/>
      {{myCheck}}
    </div>
      `,
      data() {
        return {
          name: "",
          myCheck: "",
          myList: [],
        };
      },
  });
  