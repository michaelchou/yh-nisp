<template>
<div class="x-modal">
    <p class="modal_tip">您的风险评估结果已过期，请重新进行风险评估</p>
    <div class="btnbox">
        <button class="btn" @click="onBack">取 &nbsp;消</button>
        <button class="btn" @click="onSure">确 &nbsp;定</button> 
    </div>
</div>
</template>

<script>
import { mapState , mapActions } from 'vuex'
export default {
    methods : {
        onSure () {
            this.onContinue();
        },
        onBack () {
            this.onCancel();
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

