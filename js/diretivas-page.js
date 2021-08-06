Vue.component("diretivas-page", {
  template: `
    <div>
    <h2>Diretivas</h2>
    <span v-show="$root.isVisible">É show</span>
    <span v-if="$root.isVisible">É verdadeiro</span>
    <span v-else="$root.isVisible">É falso</span>
    <span v-for="number in 5">
        {{number}}
    </span>
    <span v-for="(item, index) in $root.list" :key="index">
        {{index}} - {{item.text}}
    </span>
    <div v-html="$root.myHTML"></div>
    <h2>Eventos</h2>
    <div>Contador: {{$root.counter}}</div>
    {{$root.message}}
    <button @click="$root.upCounter">Click me v.1</button>
    <button @click="$root.counter+= 1">Click me v.2</button>
    </div>
    `,
});
