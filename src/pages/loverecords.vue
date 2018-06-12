<template>
<transition>
    <div>
        <transition name="turnpage">
            <div class="child" v-if="childcomponent" id="childParent">
                <div v-for="(card,cardIndex) in cardsList" :key="cardIndex" class="cardItem" :style="{opacity: card.alpha==0? 0:1}">
                    <div class="del">
                        -
                    </div>
                    <img src="../assets/sssss.png" class="bg">
                    <span class="way">{{card.way}}</span>
                    <div class="move">
                        =
                    </div>
                </div>
                <div style="width:100%;text-align:center;opacity:0.4" id="info">
                        点击右侧logo可拖动
                </div>
            </div>
        </transition>
          <myheader class="header">
                <div slot="left" @click="leftHandle" class="left">
                    回退
                </div>
                    <div class="mid">
                        {{!childcomponent&&'恋爱打卡'||'编辑'}}
                    </div>
                <div slot="right" class="right">
                    <span @click="addnote" v-if="!childcomponent">
                        +
                    </span>
                    <span @click="sort" v-if="!childcomponent">
                        排序
                    </span>
                    <span v-show="childcomponent" @click="finishEdit">
                            完成
                    </span>
                </div>
             </myheader>
             <div class="content">
                    <div v-for="(card,cardIndex) in cardsList" :key ="cardIndex" class="cardItem"> 
                         <img src="../assets/sssss.png" >
                         <div class="method">
                                {{card.way}}
                         </div>
                         <div class="pick" @click="card.pick=true" :style="{backgroundColor:card.pick?'grey':'green'}">
                             打卡
                         </div>
                    </div>
             </div>
    </div>
</transition>
</template>
<script>
import myheader from '../components/common/myheader';
// import {setDate} from '../js/func';
export default {
    name :'loverecords',
    components :{myheader},
    data(){
        return {
            childcomponent :false,
            cardsList:[{
                way : '想你一次就打卡',
                times : 12,
                pick:false,
                alpha:1
            },{
                way: '每天说晚安',
                times :10,
                pick:false,
                alpha:1                
            },{
                way: '每天都要么么哒',
                times :3,
                alpha:1,                
                pick:false
            }]
        }
    },  
    updated(){
        var _this = this;
        if(!this.__once){
            if(this.childcomponent){
            this.__once__ = true;
            const getDom =(_=> (name)=>document.getElementById(name))();
            var node = getDom('childParent');
            function move(dom){
                var topArr= [];
                [...dom.children].slice(0,-1).forEach(element =>{
                    topArr.push(element.offsetTop+element.offsetHeight);
                });
                [...dom.children].slice(0,-1).forEach(element => {
                    // topArr.push(element.offsetTop);
                    element.addEventListener('touchstart',(e)=>{
                        e.preventDefault();
                        console.log('start');
                    var pageY = e.touches[0].clientY;
                   var initIndex = topArr.findIndex((item)=>item>=pageY);
                   const initObj = _this.cardsList[initIndex];
                //    console.log(initIndex);
                   _this.cardsList[initIndex].alpha=0;
                    var div = document.createElement('div');
                    div.setAttribute('class','cardItem');
                    div.innerHTML=element.innerHTML;
                    var obj={
                        display:'flex',
                        alignItems:'center',
                        borderTop : '2px solid grey',
                        borderBottom : '2px solid grey',    
                        position: 'absolute',
                        left:'0px',
                        width:'100vw',      
                        top: `${pageY}px`              
                    }
                    Object.entries(obj).forEach((item)=>{
                       div.style[item[0]] =item[1];
                    })
                    dom.insertBefore(div,getDom('info'));
                    const movehandle= (e)=>{
                        var i = initIndex;
                        console.log('move');
                        div.style.top=e.touches[0].clientY+'px';
                        if(e.touches[0].clientY>topArr[i]&&JSON.stringify(_this.cardsList[initIndex])==JSON.stringify(initObj)){
                            var x = _this.cardsList.splice(i,1);
                            x=x[0];
                            _this.cardsList.splice(i+1,0,x);
                            if(i<topArr.length){
                              i++;
                            }
                        }
                        return false;
                    }
                    document.addEventListener('touchmove',movehandle,false)
                    const endhamdle=(e)=>{
                        _this.cardsList[initIndex].alpha=1;                        
                        e.preventDefault();                        
                        console.log('触发了end');
                        div.remove();
                        document.removeEventListener('touchmove',movehandle);
                        document.removeEventListener('touchend',endhamdle);                 
                        return false;
                    };
                    document.addEventListener('touchend',endhamdle,false);
                    document.ontouchcancel =(e)=>{
                        _this.cardsList[initIndex].alpha=1;
                        e.preventDefault();                        
                        console.log('触发了cancel')
                         div.remove();
                        document.removeEventListener('touchmove',movehandle);
                        return false;
                    }
                },false)
                });
            }
            move(node);
                // console.log(node);
            }
        }
    },
    methods:{
        addnote(){
            console.log('add');
        },
        sort(){
            this.childcomponent=true;
            // console.log('sort');
        },
        leftHandle(){
            if(!this.childcomponent){
              this.$router.go(-1)
            }else{
                this.childcomponent = false;
            }
        },
        finishEdit(){
            this.childcomponent = false;
        },
        // toPicked(name){
        //     name.pick=true;
        // }
    },
}
</script>
<style lang="scss" scoped>
@import '../scss/base';
.turnpage-enter{
    transform: translateX(100%);
}
.turnpage-enter-active,.turnpage-leave-active{
    transition: 300ms ease-in-out transform;
}
.turnpage-leave-to{
    transform: translateX(100%);
}

.header{
    z-index: 10;
}
.child{
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 9;
    background: nth($bgcolor,5);
    .cardItem{
        &:nth-of-type(1){
            margin-top: pxtorem(30);
        border-top: 1px solid rgba(grey,0.2);            
        }
        border-bottom: 1px solid rgba(grey,0.2);
        display:flex;
        align-items: center;
        height: pxtorem(50);
        .bg{
            width: pxtorem(35);
            height: pxtorem(35);
            border-radius: 50%;
            padding: 0 pxtorem(10);                        
        }
        .del{
            padding: 0 pxtorem(5);
        }
        .move{
            padding: 0 pxtorem(10);
        }
        .way{
            flex:1;
        }
    }
}

.v-enter{
    opacity: 0;
    transform: translateX(100%);
}
.v-enter-active{
    transition: 300ms ease-in-out;
    transition-property: opacity,transform;
}
@import '../scss/base';
.left{
    width: pxtorem(24);
    padding-left: pxtorem(5);
}

.right{
    // width: pxtorem(30);
    text-align: right;
    float: right;
    right: pxtorem(5);
    span{
        vertical-align: middle;
         color: #fff;
    }
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
.content{
    width: 100%;
    height: calc(100% -1.2rem);
    .cardItem{
        width: 100%;
        height: pxtorem(50);
        border-bottom: 1px solid rgba(grey,0.2);
        &:nth-of-type(1){
            border-top: 1px solid rgba(grey,0.2);
        }
        display: flex;
        align-items: center;
        img{
            width: pxtorem(40);
            height: pxtorem(40);
            border-radius: 50%;
            padding: 0 pxtorem(5);
        }
        .method{
            padding-left: pxtorem(5);
            flex:1;
        }
        .pick{
            border-radius: pxtorem(20);
            margin-right: pxtorem(10);
            padding: 0 pxtorem(5);
        }
    }
}
</style>
