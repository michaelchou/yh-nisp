<template>
    <x-layout-main>
                <p class="title">请审核员录入指纹</p>
                <div class="Pin_img">
                    <img :src="$root.imgPath('img/指纹.gif')">
                </div>
                <div class="Pin_input">
                    <p style="margin-top:5%;">指纹编号：<i id="FingerID">1111</i></p>
                    <div class="Pin_tips">
                        <p>请将手指紧贴在指纹扫描处</p>
                        <p style="color:#FF9800;" id="FingerStatus">指纹还未校验</p>
                    </div>
                </div>
    </x-layout-main>
</template>
