<style scoped>
    .title {
        position: relative;
        padding-top: 2%;
        font-size: 4.3rem;
        text-align: center;
        color: #008B6E;
        letter-spacing: 3px;
    }
    .title:after {
        content: "";
        border-top: 2px solid #008B6E;
        display: inline-block;
        position: relative;
        width: 300px;
        top: -16px;
        right: -28px;
    }
    .title:before {
        content: "";
        border-top: 2px solid #008B6E;
        display: inline-block;
        position: relative;
        width: 300px;
        top: -16px;
        left: -28px;
    }
    .inputIDinfo{   
        font-size:3.6rem;
        margin:0 auto;
        margin-top:2%;
        line-height:100px;
    }
    .IDinfoleft{    
        text-align:right; 
    }
    .IDinforight{ 
        text-align:left;
        color:#6600ff;
    }
    .btn{   
        padding:10px 22px;
        font-size:3rem;
        color:#fff;
    }
    .btnbox {
        position: absolute;
        bottom: 29%;
        width: 100%;
        text-align: center;
    }
    .input_info{    
        height: 60px;
        border: 1px solid #008B6E;
        border-radius: 10px;
        box-shadow: inset 2px 5px 16px 0px #CDCDCD;
        font-size: 3.6rem;
        padding: 0px 10px;
        color:#6600ff;
    }
</style>
<template>
    <x-layout-main>
            <p class="title">{{InputIDInfo}}</p>
            <table class='inputIDinfo'>
                <tr>
                    <td class='IDinfoleft'>{{IDType}}</td>
                    <td class='IDinforight'>港澳居民来往内地通</td>
                </tr>
                 <tr>
                    <td class='IDinfoleft'>{{CustomerName}}</td>
                    <td class='IDinforight'><input class="input_info" type="text" id="Name"></td>
                </tr>
                 <tr>
                    <td class='IDinfoleft'>{{IDNumber}}</td>
                    <td class='IDinforight'><input class="input_info" type="text" id="IDNo"></td>
                </tr>
            </table>
            <div class="btnbox">
                <button class="btn backbtn" id="modal_btn_back">上一步</button>
                <button class="btn surebtn" id="modal_btn_sure">下一步</button>
            </div>
    </x-layout-main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            InputIDInfo: "输入证件信息",
            IDType: "证件类型：",
            CustomerName:"客户姓名：",
            IDNumber:"证件号码："
        }
    }
  
}
</script>