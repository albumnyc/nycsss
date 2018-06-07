<template>
    <ul>
        <li v-for="(item,index) in navList" :key = "index" @click="itemClickHandle(index)" :class="index ==globalIndex ? 'active' :''">
            <div class="content">
                <img :src="item.imgUrl">    
            </div> 
             <div class="content">
                 {{item.name}}            
            </div>   
        </li>
    </ul>
</template>
<script>
export default {
    name :'myfooter',
    data(){
        return {
                navList:[
                    {
                        name :'首页',
                        imgUrl : require('../../assets/logo.png')
                    },{
                        name: '发现',
                        imgUrl : require('../../assets/heart.jpg')                        
                    },{
                        name:"情侣游戏",
                        imgUrl : require('../../assets/heart.jpg')                        
                    },{
                        name :'聊天',
                        imgUrl : require('../../assets/heart.jpg')                        
                    }
                ],
                globalIndex :0,
        }
    },
    methods:{
        itemClickHandle(i){
            this.globalIndex = i;
            this.$emit('callback',i)
        }
    }

}
</script>
<style lang="scss" scoped>
@import '../../scss/base.scss';
ul{
    display: flex;
    li{
        flex:1;
        height: pxtorem(60);
    }
}
.active{
    transition: 500ms ease-in-out background;
    background-color: nth($bgcolor,1)
}
.content{
    text-align: center;
    height: pxtorem(20);
    line-height: pxtorem(20);
    width: 60%;
    padding: 0 5%;
    margin-left: 15%;
   &:nth-of-type(1){ 
       padding: pxtorem(5) 5%;
       height: pxtorem(30);
   }
}
img{
    width: 100%;
    height: 100%;
}
</style>
