<template>
    <div class="wrapper">
        <myheader>
            <p slot ="left"></p>
            发现
            <p slot ="right"></p>
        </myheader>
       
        <div class="swiper">  
            <swiper :options="swiperOption"  ref="mySwiper">  
                <swiper-slide class="sss" :key="index" v-for="(item,index) in items">  
                </swiper-slide>  
                <div class="swiper-pagination" slot="pagination"></div>  
            </swiper>  
        </div>  

        <ul class="discover_main">
            <li  :key="n" v-for="(list,n) in lists">
                <div class="li_wrap">
                    <div class="li_wrap_left">
                        <img :src="img" alt="logo">
                    </div>
                    <div class="li_wrap_right">
                        <span>{{list.name}}</span><br />
                        <span>{{list.disc}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import myheader from '../../components/common/myheader';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    name:'discover',
    components:{
        myheader,
        swiper,
        swiperSlide
    },

 data() {  
            return {  
                img:require('../../assets/sssss.png'),
                lists:[{
                    
                    name:"爱的礼物",
                    disc:"总有适合他的"
                    },{
                    name:"情侣生活",
                    disc:"恋爱那些事儿"
                    },{
                    name:"情侣愿望",
                    disc:"种下你的期许"
                    },{
                    name:"情侣叫醒",
                    disc:"异地互动神器"
                    },{
                    name:"抓娃娃",
                    disc:"在线抓娃娃"
                    },{
                    name:"爱情占卜",
                    disc:"星座八字测算"
                    },
                    ],
                items:[1,2,3,4,],
                swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,  
                pagination: '.swiper-pagination',  
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true,  
                spaceBetween: 30,  
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }  
                }  
            }  
        },  
        //定义这个sweiper对象  
        computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            this.swiper.slideTo(0, 0, false);  
        }  
  
    }  
</script>

<style lang="scss" scoped>
@import '../../scss/discover';


</style>

