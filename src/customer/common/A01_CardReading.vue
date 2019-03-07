<style scoped>
img{
    display: block;
    margin: auto;
    width: 20%;
}
</style>
<template>
    <div class="x-modal">
        <div id="modal_tradingBox" class="modal_tradingBox">
            <div><img  :src="$root.imgPath('img/loading.gif')">正在读取卡片信息，请稍候...</div>
        </div>
    </div>
</template>
