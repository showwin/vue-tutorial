var data = { a: 1 }
var app1 = new Vue({
  el: '#app-1',
  data: {
    message: data
  }
})

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

var app2 = new Vue({
  el: '#app-2',
  data() {
    return {
      obj
    }
  }
})
