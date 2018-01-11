new Vue({
  el: "#demo",
  data: {
    show: true
  }
})


new Vue({
  el: '#example-1',
  data: {
    show: true
  }
})


new Vue({
  el: '#custom-class',
  data: {
    show: true
  }
})

new Vue({
  el: '#js-animation',
  data: {
    show: true
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
})
