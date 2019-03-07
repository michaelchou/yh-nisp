<template>
    <x-layout-main>
            <p class="title">请插入您的银行卡</p>
            <div class="x-hsgif">
                <img :src="$root.imgPath('img/'+$root.getImgPath()+'InsertICCard.gif')">
            </div>
            <div class="MediaKind"> 
				<div class="CardMedia" id="Passbook"  style="display:none">
                    <img :src="$root.imgPath('img/customer/passbook.png')"/>
                    <p value ="5">存折</p>
                </div>
                <div class="CardMedia" id="PICC"   style="display:none">
                    <img :src="$root.imgPath('img/customer/PICCard.png')"/>
                    <p value ="3">非接触IC卡</p>
                </div>
            </div>

            <div id="bg" style="display:none;">
                <EMBED id="sound" name="ViewSound" SRC="wav/请插入您的银行卡.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
            </div>

    </x-layout-main>
</template>

<style scoped>
.x-hsgif {
  width: 50%;
  margin: 0% 20%;
}
.x-hsgif img {
  width: 100%;
}
.MediaKind {
  position: absolute;
  right: 7.5%;
  width: 20%;
  top: 20%;
  height: 70%;
}


.CardMedia {
  height: 250px;
}
@media screen and (max-height: 780px) {
  .MediaKind {
    top: 10%;
  }

  .CardMedia {
  height: 180px;
}
}

</style>
<script>

 export default {
    mounted () { 
    var vm=this;
    DataTools.get("GD_A01_Cust_MediaTypeMask|C_A01_Dev_MachineType",function(data){
        var strMask = data[0];
        var strMachineType = data[1];
        // strMask = "1111";
        if(strMask != "")
        {
            if(strMask.substr(2,1) == "1")
            {
                $("#PICC").css("display","inline-block");
            }
            //支持存折
            if(strMask.substr(3,1) == "1") 
            {
                $("#Passbook").css("display","inline-block");
            }
        }
        setVar("GD_A01_Cust_MediaType","2");//默认为插入芯片卡
      });
        document.getElementById("Passbook").onclick=onCardMedia;
        document.getElementById("PICC").onclick=onCardMedia;
        function onCardMedia() {
            //获取介质类型标志
            $(".CardMedia").removeClass("on");
		    $(this).addClass("on");
            var MediaType = $(this).find('p').attr('value');
            setVar("GD_A01_Cust_MediaType",MediaType);
            setVar("GD_IsInsertPIC","0");
            switch(MediaType){
                case "3":
                    setVar("GD_IsInsertPIC","1");
                    exitScene("STA_PICCARD");
                    break;
                case "5":
                    exitScene("STA_PASSBOOK");
                    break;
                default:
                    exitScene("STA_FAIL");
                    break;
            }
        }
  }
}
</script>

