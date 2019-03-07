<template>
    <x-layout-main>
            <p class="title">请选择您持有的介质种类</p>
            <div class="MediaKind">
                <div class="CardMedia" id="MSCard"  style="display:none">
                    <img src="img/customer/MSCard.png"/>
                    <p value ="1">磁条卡</p>
                </div>
                <div class="CardMedia" id="ChipCard"   style="display:none">
                    <img src="img/customer/ICCard.png"/>
                    <p value ="2">芯片卡</p>
                </div>
				<div class="CardMedia" id="Passbook"  style="display:none">
                    <img src="img/customer/passbook.png"/>
                    <p value ="4">存折</p>
                </div>
				<div class="CardMedia" id="PICC"   style="display:none">
                    <img src="img/customer/PICCard.png"/>
                    <p value ="3">非接触IC卡</p>
                </div>
            </div>
    </x-layout-main>
</template>

<script type="text/javascript">
export default {
    mounted () {
        var strMachineType="";
        DataTools.get("GD_A01_Cust_MediaTypeMask|C_A01_Dev_MachineType",function(data){
            var strMask = data[0];
            strMachineType = data[1];
            //strMask = "1111";
            if(strMask == "")
            {
                //立式和嵌入式，默认支持存折
                if(strMachineType == "3")
                    strMask = "1111";
                else
                    strMask = "1110";
            }
            //显示对应的介质
            if(strMask.replace(/0/g,"").length==3){
                $(".MediaKind").css("width", "96%");
                $(".CardMedia").css("margin-left", "4%");
            }
            if(strMask.substr(0,1) == "1")
            {
                $("#MSCard").css("display","block");
            }
            if(strMask.substr(1,1) == "1")
            {
                $("#ChipCard").css("display","block");
            }
            if(strMask.substr(2,1) == "1")
            {
                $("#PICC").css("display","block");
            }
            if(strMask.substr(3,1) == "1")
            {
                $("#Passbook").css("display","block");
            }
        });
        document.getElementById("MSCard").onclick=onCardMedia;
        document.getElementById("ChipCard").onclick=onCardMedia;
        document.getElementById("PICC").onclick=onCardMedia;
        document.getElementById("Passbook").onclick=onCardMedia;
       function onCardMedia() {
            //获取介质类型标志
            $(".CardMedia").removeClass("on");
		    $(this).addClass("on");
            var MediaType = $(this).find('p').attr('value');
            setVar("GD_A01_Cust_MediaTypeMask","");
            setVar("GD_A01_Cust_MediaType",MediaType);
            setVar("GD_IsInsertPIC","0");
            switch(MediaType){
                case "1":
                    exitScene("STA_MSCARD"); 
                    break;
                case "2":
                    exitScene("STA_CHIPCARD");
                    break;
                case "3":
                    setVar("GD_IsInsertPIC","1");
                    exitScene("STA_PICCARD");
                    break;
                case "4":
                    //桌面款/便携
                    //if(strMachineType == "1" || strMachineType == "5")
                    //{
                       // exitScene("STA_PASSBOOKBRUSH");
                    //}
                    //else
                    //{
                        setVar("GD_A01_Cust_MediaType","5");
                        exitScene("STA_PASSBOOK");
                    //}
                    break;
                default:
                    exitScene("STA_FAIL");
                    break;
            }
        } 
    }
}
</script>
