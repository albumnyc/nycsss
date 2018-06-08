<template>
    <div class="screen">

        <transition name ="dialog">
            <div class="dialog-box" v-if="DialogVisible"> 
                <div class="dialog">
                    <div class="dialog_top">
                        <img src="../assets/sssss.png" class="dialog_img">
                        <span>我们在一起<span>{{days}}</span>天</span>
                        <div class="head_box">
                            <img src="../assets/sssss.png">
                            <img src="../assets/sssss.png">
                        </div>
                    </div>
                    <div class="dialog_bottom">
                        <ul class="notes">
                                <li v-for="(note,noteIndex) in notes" :key ="noteIndex">
                                    <span>
                                        {{note.key}}
                                    </span>
                                    <span class="float_right">
                                        <span>
                                            {{note.value.match(/\d/gim).join("")}}
                                        </span>
                                        {{note.value.replace(/\d/gim,"")}}
                                    </span>
                                </li>
                        </ul>
                        <div class="desciption">
                            爱是每天多付出一点点
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div class="main" v-show="globalIndex==0">            
            <div class="backbord">
                <img src="../assets/sssss.png" alt="大图背景" @click.stop="DialogVisible=true">
                <div class="mid_area">
                        <div class="cover">
                                <img src="../assets/sssss.png" alt="大佬">
                                <img src="../assets/sssss.png" alt="小菜鸡">
                        </div>
                </div>
                <div class="alert">
                    我们在一起<span>{{days}}</span>天
                </div>
            </div>
                <ul class="tag_box screenraer">
                    <li v-for="(tag,tagIndex) in tags" :key="tagIndex" :style="{backgroundColor:tag.bgcolor}" @click="$router.push({path:tag.path})">
                        <div class="opotion-box">
                            <div class="opotion_title">
                                    {{tag.name}}
                            </div>
                            <div class="opotion_value">
                                    {{tag.data}}
                            </div>
                        </div>
                        <img src="../assets/sssss.png" alt="标题logo">
                    </li>
                </ul>
        </div>
         <myfooter @callback="onChangeCallback" class="footer"/>
    </div>
</template>
<script>
import {dialog} from '../js/maxin';
import myfooter from '../components/common/myfooter'
export default {
    name :'home',
    mixins:[dialog],
    data(){
        return {
            DialogVisible: false, //element的对话框
            globalIndex :0,     //全局的属性
            days:39,        //在一起天数
            tags:[{             //4个选项表
                    name :'纪念日',
                    data: "6条",
                    bgcolor: 'pink',
                    path: 'notes'
            },{
                    name :'时光记录',
                    data: '7条',
                    bgcolor: 'pink',                    
            },{
                    name :'爱情树',
                    bgcolor: 'pink',
                    data: '3天',
            },{
                    bgcolor: 'pink',
                    name :'恋爱打卡',
                    data: '15次'
            }],
            notes:[{    //弹窗的展示列表
                    key: "连续回家",
                    value: "0天",
            },{
                    key: "农场连续签到",
                    value: "0次"
            },{
                    key: "时光记录",
                    value: "7条"
            }]
        }
    },
    components:{
        myfooter,
    },
    methods:{
        onChangeCallback(i){
            this.globalIndex =i;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../scss/base.scss';
@import '../scss/home1.scss';  //globalIndex为1时
// .screen{
//     width: 100vw;
//     height: 100vh;
//     .main{
//         // background: black;
//         width: 100%;
//         height: calc(100% - 2.4rem);
//         // display: flex;
//       .backbord{
//         width: 100%;
//         height: 60%;
//         background: nth($bgcolor,6);
//         position: relative;
//         &>img{
//             width: 100%;
//             height: 100%;
//         }
//         .mid_area{
//             position: absolute;
//             width: 50%;
//             box-sizing: border-box;
//             padding: 0 pxtorem(20);
//             background: nth($bgcolor,5);
//             height: pxtorem(40);
//             bottom: 0px;
//             border-top-right-radius: pxtorem(40); 
//             // border-radius: pxtorem(10) pxtorem(160) 0 0 ;
//            .cover{
//             //    position: absolute;
//                width: 100%;
//                display: flex;
//                justify-content: space-around;
//                 transform: translateY(-0.8rem);
//                img{
//                    width: pxtorem(60);
//                    height: pxtorem(60);
//                    border-radius: 50%;
//                }
//            }
//         }
//     }
//        .screenraer{
//             width:100%;
//             height: 40%;
//             background: nth($bgcolor,5);
//             display: flex;
//             flex-wrap: wrap;
//             align-content: space-around;
//             justify-content: space-around;
//             li{
//                 width: 40%;
//                 overflow: hidden;
//                 height: pxtorem(80);
//                 // background: red;
//                 border-radius: pxtorem(5);
//                 // padding: pxtorem(30) 0;
//                 .opotion-box{
//                     width:60%;
//                     float: left;
//                     height: 100%;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: space-around;
//                     text-align: center;
//                    div{
//                         color:nth($bgcolor,5);
//                    }
//                     .opotion_value{
//                         &::first-letter{
//                             font-size: pxtorem(20);
//                         }
//                     }
//                 }
//                 img{
//                     padding-top: 5%;
//                     padding-left: 10%;
//                     height: pxtorem(40);
//                     float: left;
//                     border-radius: pxtorem(5);
//                     width: pxtorem(40);
//                 }
//             }
//         }
//     }
//     .footer{
//         position: absolute;
//         bottom: 0px;
//     }

// }
// .alert{
//     position: absolute;
//     text-align: right;
//     color: nth($bgcolor,5);
//     right: 0px;
//     bottom: 0px;
//     width: 50%;
//     padding-right: 5px;
//     letter-spacing: pxtorem(5);
//     span{
//         font-size: pxtorem(25);
//         color: nth($bgcolor,5);
//     }
// }



</style>

