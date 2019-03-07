<template>
<div style="width:100%; height:100%">
    <component v-bind:is="$root.currentView"></component>
	<!--页面弹出框覆盖层-->
	<div id="pagePopup" style="display: none">
        <component v-bind:is="$root.currentPopup"></component>
    </div>
    <x-debug-page></x-debug-page>
</div>
</template>

<style>
/*模态框效果*/
.x-modal {
    position: relative;
    width: 55%;
    height: 65%;
    margin: 10% auto;
    background: #e7faf8;
    border-radius: 20px;
}
@media screen and (max-width: 1280px) { 
.x-modal{
   height: 60%;
}

}
.modal_btnbox{
    position: absolute;
    bottom: 10%;
    width: 100%;
    text-align: center;
}
.modal_title{
    position: relative;
    width: 90%;
    height: 10%;
    margin: 0 auto;
    padding: 28px 10px 10px 0px;
    font-size: 3rem;
    text-align: left;
    border-bottom: 1px solid #CCC;
}
.modal .md_center_title{
    width: 80%;
    font-size: 3rem;
    text-align: center;
    margin: 20% auto;
}
.modal_time{
    width: 54px;
    height: 54px;
    line-height: 54px;
    margin-top:10px;
    background: url(../img/time1.gif) no-repeat;
    background-size: 100% 100%;
    color:red;
    font-size: 2.3rem;
    text-align: center;
    display:inline-block;
    position:absolute;
    right:10%;
    top:5%;
}
</style>
