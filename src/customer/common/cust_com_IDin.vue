<template>
    <x-layout-main>
            <p class="title" id="ReadIdCard" ></p>
            <div class="hsgif">
                <img src="">
            </div>
        <EMBED name="ViewSound" SRC="wav/请将您的身份证件放入识别区.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
    </x-layout-main>
</template>
<script>
export default {
    mounted () {   
        var vm=this;
      DataTools.get("C_A01_Dev_MachineType|GD_CodPid",function(data){
            switch(data[0]){
                case "1": case "2":case "5":
                    $("#ReadIdCard").html("请将您的身份证件放入识别区");
                    break;
                case "3": case "4":
                    $("#ReadIdCard").html("请插入您的身份证件");      
                    break;
                default:
                    $("#ReadIdCard").html("请将您的身份证件放入识别区");
                    break;
            }
            var DocumentType=data[1];
            switch(DocumentType){
                case "110001": //二代身份证
                    $(".hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"InsertIDCard.gif"));
                    break;
                case "110037"://外国人永久居留证
                    $(".hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"InsertForeignerCard.gif"));
                    break;
                default:
                    $(".hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"InsertIDCard.gif"));
                    break;
            }
      });
  }
}
</script>
