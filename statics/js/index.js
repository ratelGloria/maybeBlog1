/* eslint-disable no-unused-vars */
// import $ from 'jquery'
// import context from '../main.js'
// context.$router.push('/login')
$(function () {
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

  /* eslint-disable no-new */
  // var study = new Vue({
  //   el: '#study',
  //   methods: {
  //    study:function (event) {
  //      alert(1);
  //    }
  //   }
  // })
  //   var app = new Vue({
  //       el: '#app',
  //       methods:{
  //           study:function () {
  //               alert('hello world')
  //           }
  //       }
  //   })
  window.onscroll = function () {
    var topScroll = document.documentElement.scrollTop // 要获取当前页面的滚动条纵坐标位置，用document,documentElement.scrollTop,而不是document.body.scrollTop,bady对应body标签，documentElement对应html标签
    // console.log('----11----' + topScroll)
    var head = document.getElementById('head')
    if (topScroll > 100) {
      head.style.position = 'fixed'
      head.style.top = '0'
      head.style.zIndex = '9999'
    }
  }
})
