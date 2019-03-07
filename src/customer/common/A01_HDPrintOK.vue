<template>
    <x-layout-main>
            <p class="title">打印成功，请取走您的回单</p>
            <div class="x-hsgif">
                <img :src="$root.imgPath('img/'+$root.getImgPath()+'PrintA4.gif')">
            </div>
            <div class="btnbox">
			    <button class="btn surebtn" id="btn_sure" @click="onSure">确&nbsp;&nbsp;&nbsp;认</button>
		    </div>
    </x-layout-main>
</template>

<style scoped>
.x-hsgif{
    width: 50%;
    margin: 0% auto;
}
.x-hsgif img{
    width: 100%;
}
.title:before {
    width: 150px;
}
.title:after {
    width: 150px;
}
</style>
<script>
import { mapState , mapActions } from 'vuex'

export default {
    methods: {
        onSure () {
            this.onContinue();
        },
        ...mapActions(['initPool', 'fetch', 'onContinue'])
    },
    mounted () { 

    }
}
</script>

