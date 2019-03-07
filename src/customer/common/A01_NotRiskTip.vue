<template>
<div class="x-modal">
    <p class="modal_tip">您尚未进行风险评估，请先进行风险评估</p>
    <div class="btnbox">
        <button class="btn" @click="onBack">取&nbsp;消</button>
        <button class="btn" @click="onSure">确&nbsp;认</button>
    </div>
</div>
</template>

<script>
import { mapState , mapActions } from 'vuex'
export default {
    methods : {
        onBack() {
            this.onCancel();
        },
        onSure () {
            this.onContinue();
        },
        ...mapActions(['initPool', 'fetch', 'onCancel', 'onContinue', 'exitScene'])
    }
}
</script>

<style scoped>
.modal_tip {
    position: absolute;
    top: 40%;
    width: 98%;
    text-align: center;
    font-size: 3rem; 
}
.modal_title {
    position: absolute;
    top: 10%;
    width: 99%;
    text-align: center;
    font-size: 3rem; 
}
</style>



