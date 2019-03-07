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
        DataTools.get("GD_A01_Cust_MediaType|C_A01_Dev_MachineType",function(data){
            switch(data[0]){
                case "1":
                    if(data[1] == "1" || data[1] == "5")
                    {
                        $(".title").html("请刷您的磁条卡");
                        $("#bg").empty();
                        $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请刷您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    }
                    else
                    {
                        $(".title").html("请插入您的银行卡");
                        $("#bg").empty();
                        $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请插入您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    }
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"InsertMSCard.gif"));
          
                    break;
                case "2":
                    $(".title").html("请插入您的银行卡");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"InsertICCard.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请插入您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
                case "3":
                    $(".title").html("请将您的银行卡放置于识别区");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"InsertPICCard.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请将您的银行卡放置于识别区.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
                case "4":
                    $(".title").html("请刷您的存折");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"InsertPassbook.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请刷您的存折.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
                case "5":
                    $(".title").html("请插入您的存折");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"InsertPassbook.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请插入您的存折.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
                default:
                    $(".title").html("请插入您的银行卡");
                    $(".x-hsgif img").attr("src",vm.$root.imgPath("img/InsertICCard.gif"));
                    $("#bg").empty();
                    $("#bg").html('<EMBED id="sound" name="ViewSound" SRC="wav/请插入您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
                    break;
            } 
      });
  }
}
</script>

