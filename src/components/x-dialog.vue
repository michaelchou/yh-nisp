<template>
<div class="x-modal">
    <p class="modal_tip">{{title}}</p>
    <div id="modal_CountDown" class="modal_time">{{timerun}}</div>
	<slot></slot>
    <div class="modal_btnbox">
        <button class="btn backbtn" id="modal_btn_back" @click="onBack" v-show="showBack">{{backNtnName}}</button>
        <button class="btn surebtn" id="modal_btn_sure" @click="onSure" v-show="showSure">{{sureNtnName}}</button>
    </div>
</div>
</template>

<script>
import { mapState , mapActions } from 'vuex'

export default {
    props: {
		title: {
			type: String,
			default: '请定制对话框标题'
		},
		timeout: {
			type: Number,
			default: 10
		},
        back: {
            type: String,
            default: "取　　消"
        },
        sure: {
            type: String,
            default: "确　　定"
        }
	},
    data () {
        return{
			interval: null,
            backNtnName: this.back,
            sureNtnName: this.sure,
            timerun: this.timeout
        }
    },
    computed: {
        showBack: function () {
            return this.backNtnName.length > 0
        },
        showSure: function () {
            return this.sureNtnName.length > 0
        },
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
                this.exitScene("STA_TIMEOUT");
                //this.onBack();
            }
        },
        startTime() {
            //模态框倒计时
            if(isNaN(this.timerun) || this.timerun <= 0){
                this.timerun = 10;
            }
            this.interval = setInterval(this.setTimeHtml,1000);
        },
        clearTime() {
            clearInterval(this.interval);
            this.timerun = "";
        },
        ...mapActions(['initPool', 'fetch', 'submit', 'onCancel', 'onContinue','exitScene'])
    },
    mounted () {
        this.startTime();
    }
}
</script>