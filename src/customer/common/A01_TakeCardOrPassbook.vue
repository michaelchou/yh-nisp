<template>
    <x-layout-main>
            <p class="title"></p>
            <div class="x-hsgif">
                <img src="">
            </div>
            <div id="bg" style="display:none;">
            
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
</style>
<script>

 export default {
    mounted () { 
        var vm=this;
        DataTools.get("GD_A01_Cust_RejectMediaID|GD_CodPid",function(data){
            switch(data[0]){
                case "IDC":case "IDCIC": case "MAG":
                    $(".title").html("请收好您的银行卡");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakeCard.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请收好您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
                case "SIM":
                    $(".title").html("请收好您的银行卡");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakePICCard.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请收好您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
                case "PPR":
                    $(".title").html("请收好您的存折");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"DispensePassbook.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请收好您的存折.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
                case "ID":
                    $(".title").html("请收好您的身份证件");
                    switch(data[1]){
                        case "110001": //二代身份证
                            $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakeIDCard.gif"));
                            break;
                        case "110037"://外国人永久居留证
                            $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakeForeignerCard.gif"));
                            break;
                        default:
                            $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakeIDCard.gif"));
                            break;
                    }
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请收好您的身份证件.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
                default:
                    $(".title").html("请收好您的银行卡");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakeCard.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请收好您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
            } 
      });
  }
}
</script>

