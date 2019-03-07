<template>
    <x-layout-main>
            <p class="title">请插入您的银行卡</p>
            <div class="x-hsgif">
                <img src="">
            </div>
            <EMBED name="ViewSound" SRC="wav/请插入您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
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

      DataTools.get("GD_A01_Cust_MediaType",function(data){
          
            switch(data[0]){
                case "1":
                    $(".title").html("请插入您的银行卡");
                    $(".x-hsgif img").attr("src","img/InsertMSCard.gif");
                    break;
                case "2":
                    $(".title").html("请插入您的银行卡");
                    $(".x-hsgif img").attr("src","img/InsertICCard.gif");
                    break;
                case "3":
                    $(".title").html("请将您的银行卡放置于识别区");
                    $(".x-hsgif img").attr("src","img/InsertPICCard.gif");
                    break;
                case "4":
                    $(".title").html("请插入您的存折");
                    $(".x-hsgif img").attr("src","img/InsertPassbook.gif");
                    break;
                default:
                    $(".title").html("请插入您的银行卡");
                    $(".x-hsgif img").attr("src","img/InsertICCard.gif");
                    break;
            }
      });
  }
}
</script>

