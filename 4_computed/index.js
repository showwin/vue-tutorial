var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hi showwin, this is example'
  },
  computed: {
    reversedMessage: function () {
      // 結果がキャッシュされる
      return this.message.split('').reverse().join('') + Date.now()
    }
  },
  methods: {
    // 結果がキャッシュされない。毎回評価される
    reversedMessageMethod: function () {
      return this.message.split('').reverse().join('') + Date.now()
    }
  }
})


var vmName = new Vue({
  el: '#name',
  data: {
    firstName: 'Ito',
    lastName: 'Shogo'
  },
  // 非同期処理を実行したい場合には watch オプションを使うと良い
  computed: {
    fullName: {
      get: function () {
        if (this.lastName == '') {
          return this.firstName
        } else {
          return this.firstName + ' ' + this.lastName
        }
      },
      set: function (fullname) {
        var names = fullname.split(' ')
        this.firstName = names[0]
        if (names.length - 1 == 0) {
          this.lastName = ''
        } else {
          this.lastName = names[names.length - 1]
        }
      }
    }
  }
})
