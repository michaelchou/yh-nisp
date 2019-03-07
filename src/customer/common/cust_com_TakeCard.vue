<template>
    <x-layout-main>
            <p class="title">请收好您的银行卡</p>
            <div class="hsgif">
                <img :src="$root.imgPath('img/'+$root.getImgPath()+'TakeCard.gif')">
            </div>
        <EMBED name="ViewSound" SRC="wav/请收好您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
    </x-layout-main>
</template>
