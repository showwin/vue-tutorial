var app1 = new Vue({
  el: '#app1',
  data: {
    ok: true
  }
})


var app2 = new Vue({
  el: '#app2',
  data: {
    show: true
  }
})


var app3 = new Vue({
  el: '#app3'
})


// v-show と v-if の違い
// v-show は CSS の切り替えなので、初期のレンダリングに時間がかかるが、頻繁に変更される場合に適している
// v-if は毎回処理が走るので、初期のレンダリングが早く、ほとんど変更されない場合に適している
var app4 = new Vue({
  el: '#app4',
  data: {
    isShowing: true
  }
})
