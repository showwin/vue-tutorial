var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'huga' },
      { message: 'hoga' }
    ]
  }
})


var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Common Message',
    items: [
      { message: 'hugaaa' },
      { message: 'gooooo' }
    ]
  }
})

var vm = new Vue({
  el: '#keyValue',
  data: {
    object: {
      Age: 12,
      Name: 'Tokyo Taro'
    }
  }
})


var ex4 = new Vue({
    el: '#example-4',
    data: {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    methods: {
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    }
})
