<template>
    <x-layout-main>
            <p class="title">请取走证件</p>
            <div class="hsgif">
                <img src=""></img>
            </div>
    <EMBED name="ViewSound" SRC="wav/请收好您的身份证件.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
    </x-layout-main>
</template>
<script>
export default {
    mounted () {   
        var vm=this;
      DataTools.get("GD_CodPid",function(data){
        switch(data.toString()){
            case "110001": //二代身份证
                  $(".hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakeIDCard.gif"));
                break;
            case "110037"://外国人永久居留证
                $(".hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakeForeignerCard.gif"));
                break;
            default:
                $(".hsgif img").attr("src",vm.$root.imgPath("img/"+vm.$root.getImgPath()+"TakeIDCard.gif"));
                break;
        }
      });
  }
}
</script>
