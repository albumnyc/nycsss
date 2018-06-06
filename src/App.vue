<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>

function init (){
   var wid =  document.documentElement.getBoundingClientRect()['width'];
    var num =  wid/15; //一rem对应25px
    // console.log(num);
    document.documentElement.style.fontSize = `${num}px`;
}
window.onload = _=>{
  init();
}
window.onresize = _=>{init()};

export default {
  name: 'App',
  data(){
    return {
    }
  }
}
</script>
<style lang="scss" >
@import './scss/base.scss';
*{
  list-style: none;
  text-decoration: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;  
  font-size: pxtorem(14);
  padding: 0px;
  margin: 0px;
  color: nth($color,1);
}
</style>
<style lang="scss" scoped>
// img{
//   width: percentage(1/10);
// }
</style>
