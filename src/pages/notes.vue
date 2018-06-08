<template>
    <transition>  
        <div class="root" >
            <myheader>
                <div slot="left" @click="$router.go(-1)" class="left">
                    回退
                    <!-- <img src="../assets/sssss.png" alt=""> -->
                </div>
                <div slot="right" class="right" style="transform:scale(1,1);transform-origin:right;">
                    <el-popover 
                        placement="top"
                        width="150"
                        trigger="click"
                    >
                        <div @click="addnote">添加纪念日</div>
                        <div @click="reverse">排序</div>
                        <el-button slot="reference" style="text-align:center;">...</el-button>
                    </el-popover>
                </div>
             </myheader>
                 <img src="../assets/sssss.png" alt="ss" style="width:60%;height:40px;margin-left:20%;">             
             <div class="title">
                 <div class="describe">
                     <div>
                         我们在一起已经
                     </div>
                     <div>
                         起始日期{{notelist[0].startTime}}
                     </div>
                 </div>
                 <div class="first_note">
                     {{notelist[0].days}}<span style="color:#fff;background:red;border-radius:30%;padding:0 5px;transform:scale(0.8);display:inline-block;">days</span>
                 </div>
             </div>
             <ul>
                 <li v-for="(note,noteIndex) in notelist" :key="noteIndex">
                     <div :style="{background:note.bgcolor}">
                         <div>
                                {{note.startTime.substr(5).split('月')[1].split('日')[0]}}                    
                         </div>
                            <span>
                             {{note.startTime.substr(0,4)}}   
                                {{note.startTime.substr(5).split('月')[0]}}                                                                                       
                            </span>
                     </div> 
                     <div>
                         {{note.behaviour}}
                     </div>
                     <div>
                       <span> {{note.days}}
                           </span>天
                     </div>
                 </li>
             </ul>
        </div>
    </transition>
</template>
<script>
import myheader from '../components/common/myheader';
export default {
    components:{
        myheader,
    },
    created(){
        var colorArr = ['black','orange','green','blue','purple','grey','red'];        
        this.notelist.forEach((item)=>{
            var i =   Math.floor(Math.random()*colorArr.length);            
            item.bgcolor = colorArr[i];
            if(colorArr.length==1){
                return;
            }
            colorArr.splice(i,1);
        })
    },
    data(){
        return {
           notelist: [
        {startTime:'2018年5月2日',behaviour:'距离我们第一次爱爱已经',days:'37'},
        {startTime:'2018年4月28日',behaviour:'距离我们第一次拥抱已经',days:'41'},
        {startTime:'2018年4月28日',behaviour:'距离我们第一次拥抱已经',days:'41'},
        {startTime:'2018年4月2日',behaviour:'距离我们第一次开玩笑已经',days:'41'}
           ]
        }
    },
    methods:{
        addnote(){
            console.log('addnote');
        },
        reverse(){
            console.log('reverse');
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../scss/base';
.root{
    width: 100%;
    height: 100vh;
    // background: pink;
}
.v-enter{
    opacity: 0;
    transform: translateX(100%);
}
.v-enter-active{
    transition: 300ms ease-in-out;
    transition-property: opacity,transform;
}

.left{
    width: pxtorem(24);
    padding-left: pxtorem(5);
}
.right{
    // width: pxtorem(30);
    text-align: right;
    float: right;
    right: pxtorem(5);
    button{
        margin-top: pxtorem(-10);
        background: nth($bgcolor,1);
        border-color: nth($bgcolor,1);
        span{
            color: nth($bgcolor,5) !important;
        }
    }
    // padding-right: pxtorem(5);
}
.title{
    display: flex;
    .describe{
        flex:1;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        div{
            &:nth-of-type(2){
                font-size: pxtorem(12);
                color: rgba(grey,0.3);
                line-height: pxtorem(20);
            }
            flex:1;
            height: 0;
            line-height: pxtorem(40);
            padding-left: pxtorem(10);
        }
    }
    .first_note{
        padding-right: pxtorem(10);
        font-size: pxtorem(40);
    }
}

ul{
    width: 100%;
    li{
        position: relative;
        display: flex;
        &:nth-of-type(1){
            border-top: 1px solid rgba(grey,0.1);
        }
        border-bottom :1px solid rgba(grey,0.1);
        &>div:nth-of-type(1){
            width: 20%;
            background: nth($bgcolor,1);            
            div{
            text-align: center;                
                width: 100%;
                height: pxtorem(20);
                font-size: pxtorem(20);
                color: nth($bgcolor,5);
            }
            span{
                transform: scale(0.8);     
                color: nth($bgcolor,5);           
                display: inline-block;
                width: 100%;
                text-align: center;
            }
        }
        &>div:nth-of-type(2){
            height: pxtorem(39);
            line-height: pxtorem(39);
            flex:1;
            padding-left: pxtorem(10);
        }
        &>div:nth-of-type(3){
            position: absolute;
            right: 0px;
            padding-right: pxtorem(5);
            line-height: pxtorem(39);            
            span{
                font-size: pxtorem(20);
            }
        }
    }
}
</style>
