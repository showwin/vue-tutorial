/*
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

new Vue({
  el: '#example'
})
*/

var Child = {
  template: '<div>A custom child component.</div>'
}

new Vue({
  el: '#example',
  components: {
    'my-component': Child
  }
})


var data = { counter: 0 }

Vue.component('shared-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function () {
    return data
  }
})

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  }
})

new Vue({
  el: '#example-2'
})

new Vue({
  el: '#example-3'
})


Vue.component('child', {
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

new Vue({
  el: '#example-4',
  data:{
    parentMsg: 'default'
  }
})


Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

new Vue({
  el: '#example-5',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function() {
      this.total += 1
    }
  }
})


Vue.component('my-component', {
  template: `<div>
               <h2>child title</h2>
               <slot>child content1</slot>
             </div>`
})

new Vue({
  el: '#slot-example-1'
})


Vue.component('my-awesome-list', {
  props: ['items'],
  template: `<ul>
               <slot name="item"
                 v-for="item in items"
                 v-bind:text="item.text">
               </slot>
             </ul>`,
})

new Vue({
  el: '#named-slot-example',
  data: {
    items: [
      { text: 'Hello' },
      { text: 'Huaa' },
      { text: 'Japanese Char is not allowed' }
    ]
  }
})


dv = new Vue({
  el: '#dynamic-component',
  data: {
    currentView: 'home'
  },
  components: {
    home: {
      template: '<p>home content</p>'
    },
    posts: {
      template: '<p>posts content</p>',
    },
    archive: {
      template: '<p>archive content</p>'
    }
  }
})
