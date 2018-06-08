export const dialog = {
    beforeCreate() {
        document.addEventListener('click',(e)=>{
            e.stopPropagation();
            e.preventDefault();
            this.$nextTick(_=>{
                // console.log(this.DialogVisible)
                this.DialogVisible = false;
            })
        },false)
    },
    mounted(){
        
    },  
    methods: {
        hello() {
            console.log(this.DialogVisible);
        }
    }
};



// 400 30 30   460 