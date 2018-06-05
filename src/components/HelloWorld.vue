<template>
  <div class="cur_root" ref="poster">
      <transition name="sss" >  
        <div v-if="show" class="trans animated infinite pulse" ref="box"> 
            <img src="../assets/sssss.png"><img src="../assets/sssss.png">
        </div>
      </transition>
       <span>
         full with love
       </span>
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
  methods:{
      pause(e){
        console.log(e.target);
      }
  },
  mounted(){
    var timing = {
      duration :2100,
      delay:0,
      iterations:Infinity,
      easing :'ease-in-out',
      direction: 'alternate-reverse',
      fill: 'forwards'
    };
    var frames = [{
          background:'lightpink'
    },{
          background:'lightyellow'
    },{
          background:'lightblue'
    }];
   let player= this.$refs.poster.animate(frames,timing);
    setTimeout(_=>{
      this.show = true;    //弹出小logo
      setTimeout(_=>{
      // console.log(this.$refs.box);
        this.$refs.box.onclick=_=>{
              player.pause();
              this.$router.push({path:'/home'});
          }
          // this.$refs.box.onmouseleave =_=>{
          //   player.run();
          // }  
      },0)
    },1000);
// console.log(this.$refs.poster)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "scss">
@import '../scss/base.scss';
.cur_root{
  width: 100vw;
  height: 100vh;
}
.trans{
     animation-delay: 1200ms;   
  position: absolute;
  /* width: pxtorem(50); */
  height: pxtorem(50);
  /* background: url('../assets/heart.jpg'); */
  background-position: 0 0;
  background-size: 100% 100%;
  left: 38%;
  top: 50%;
  width: pxtorem(100);
  /* transform: translateX(-55%); */
;
  transform-origin: center center;
  img{
      /* transform: translate(-50%);  */
  transform-origin: center center;
    display: inline-block;
    height: pxtorem(50);
    width: pxtorem(50);
    border-radius:50%;
  }
}
@keyframes wid {
    0%{
      width: 0px;
      color: nth($color,3);
    }
    70%{
      transform: scale(6);
      width: pxtorem(20);
      color: nth($color,1);
      transform-origin: bottom;
    }
    100%{
      color: nth($bgcolor,4);      
      width: pxtorem(200);
    }
}
span{
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0px;
  color:nth($color,3);
  font-size: pxtorem(35);
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: wid 1500ms linear forwards;
  text-align: center;
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
