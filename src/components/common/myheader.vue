<template>
    <!-- <div> -->
    <nav class="nav">
        <div>
            <slot name ="left">left</slot>
        </div>
        <div>
            <slot>我是标题栏</slot>
        </div>
        <div>
            <slot name="right">right</slot>
        </div>
    </nav>
    <!-- </div> -->
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '../../scss/base';
*{
    font-size: pxtorem(12);
}
.nav{
    background: nth($bgcolor,1);
    width: 100%;
    position: relative;
    overflow: hidden;
    height: pxtorem(30);
    // display: flex ;
    div{
    color: nth($bgcolor,5);
    line-height: pxtorem(30);    
        // width: 33.33%;
        position: absolute;
        height: pxtorem(30);
    }
    &>div:nth-of-type(1){
        // float: left;
        left: 0;
    }
      &>div:nth-of-type(2){
          text-align: center;
          left: 50%;
          transform: translateX(-50%);
        // float: left;
    } 
     &>div:nth-of-type(3){
        text-align: right; 
        right: 0px;        
        width: pxtorem(40);
        overflow: hidden;
        // float: right;
    }
    img{
        height: 100%;
    }
}
</style>
