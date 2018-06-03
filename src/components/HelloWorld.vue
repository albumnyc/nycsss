<template>
  <div>
      <transition name="sss" >  
        <div v-if="show" class="trans" > 
            <img src="../assets/sssss.png"><img src="../assets/sssss.png">
        </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:false,
    }
  },
  mounted(){
    setTimeout(_=>{this.show = true},0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "scss">
@import '../scss/base.scss';

.trans{
  position: absolute;
  /* width: pxtorem(50); */
  height: pxtorem(100);
  background: url('../assets/heart.jpg');
  background-position: 0 0;
  background-size: 100% 100%;
  left: 50%;
  top: 50%;
  width: pxtorem(100);
  transform: translate(-50% ,-50%) scale(3);
  transform-origin: center center;
  img{
      transform: translateY(50%) scale(0.3); 
  transform-origin: center center;
         
    display: inline-block;
    height: pxtorem(50);
    width: pxtorem(50);
    border-radius:50%;

  }
}
.sss-enter{
  opacity: 0;
  top: pxtorem(-20);
}
.sss-enter-to{
  opacity: 1;
}
.sss-enter-active{
  transition:  all 1s ease-in;
}

</style>
