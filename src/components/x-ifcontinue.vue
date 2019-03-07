<template>
<div class="x-modal">
    <p class="modal_tip">{{title}}</p>
    <div id="modal_CountDown" class="modal_time">{{timerun}}</div>
    <div class="modal_btnbox">
        <button class="btn backbtn" id="modal_btn_back" @click="onBack">{{backNtnName}}</button>
        <button class="btn surebtn" id="modal_btn_sure" @click="onSure">{{sureNtnName}}</button>
    </div>
</div>
</template>

<script>
import { mapState , mapActions } from 'vuex'

var interval;
export default {
    props: ["title","timeout"],
    data () {
        return{
            backNtnName:"否",
            sureNtnName:"是",
            timerun:this.timeout
        }
    },
    computed: {
        ...mapState(["pool"])
    },
    methods : {
        onBack () {
            this.clearTime();
            this.onCancel()
        },
        onSure () {
            this.clearTime();
            this.onContinue()
        },
        setTimeHtml() {
            console.log(this.timerun);
            this.timerun -= 1;
            if(this.timerun <= 0)
            {
                this.clearTime();
                this.onBack();
            }
        },
        startTime() {
            //模态框倒计时
            if(isNaN(this.timerun) || this.timerun <= 0){
                this.timerun = 10;
            }
            interval = setInterval(this.setTimeHtml,1000);
        },
        clearTime() {
            clearInterval(interval);
            this.timerun = "";
        },
        ...mapActions(['initPool', 'fetch', 'submit', 'onCancel', 'onContinue'])
    },
    mounted () {
        this.startTime();
    }
}
</script>