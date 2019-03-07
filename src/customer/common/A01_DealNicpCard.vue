<style scoped>
img{
    display: block;
    margin: auto;
    width: 20%;
}
</style>
<template>
    <div class="x-modal">
        <div id="modal_tradingBox" class="modal_tradingBox">
            <div>
            <img :src="$root.imgPath('img/loading.gif')">交易正在进行，请稍候...</div>
        </div>
    </div>
</template>


<script type="text/javascript">
export default {
	mounted () 
    {
        DataTools.get("RP_DateCertBgn|C_A01_BIZPRM_00104|GD_A01_Trans_IsInsertCard|GD_A01_Status_HCAM|GD_CodPid|GD_A01_NeedMoreIDInfo|C_A01_Dict_00000005|RP_Gender",function(data){
			var RP_DateCertBgn = data[0]; 
            var C_A01_BIZPRM_00104 = data[1];
            var GD_A01_Trans_IsInsertCard = data[2];
            var GD_A01_Status_HCAM = data[3];
            var GD_CodPid = data[4];
            var GD_A01_NeedMoreIDInfo = data[5];
            switch(GD_CodPid){
                case "110019":
                    setVar("GD_CodCertOrg","公安部");
                    break;
                case "110021":
                    setVar("GD_CodCertOrg","公安部");
                    break;
                case "110037":
                    setVar("GD_CodCertOrg","公安部");
                    break;
                default:
                    break;
            }
            //性别字段处理
            var jsSex = JSON.parse(data[6]);
            for (var i = 0; i < jsSex.length; i++) {                
				if (jsSex[i].NUM_ITEM_DIC == data[7]) {
                    setVar("GD_Gender",jsSex[i].VLU_ITEM_DIC);					
				}
			}            
            if(GD_A01_Trans_IsInsertCard == ""){//未插卡交易  
                //清空地址、生日的全局变量，避免数据残留
                setVar("GD_Address","");
                setVar("GD_Birthday","");
                if(GD_CodPid != "110037"){
                    setVar("GD_A01_IDCardIsIC","0");
                    exitScene("STA_FILLINFO");
                }else{
                    //外国人居留证默认带芯片
                    setVar("GD_A01_IDCardIsIC","1");
                    exitScene("STA_CONTINUE");
                }
            } else{//已插卡交易
                setVar("GD_DateCertBgn","");
                setVar("GD_DateCertEnd","");
                setVar("GD_Birthday","");
                if(GD_CodPid == "110037"){//外国人居留证 
                    if(RP_DateCertBgn.length != 8){
                        setVar("GD_ErrReason","DateErrToMod");
                        exitScene("STA_FAIL");
                    }else{
                        if(C_A01_BIZPRM_00104 == ""){     
                            setVar("GD_A01_IDCardIsIC","1");                       
                            exitScene("STA_READCARD");
                        }else{
                            if(parseInt(RP_DateCertBgn) < parseInt(C_A01_BIZPRM_00104)){
                                if(GD_A01_Status_HCAM == "HEALTHY"){
                                    setVar("GD_A01_IDCardIsIC","0");
                                    setVar("GD_A01_IsDealNotIDCardInfo","1");//未读证件，需要处理生日、性别字段
                                    exitScene("STA_READOK");
                                }else{
                                    setVar("GD_ErrReason","NotSupportNICPRCard");
                                    exitScene("STA_FAIL");
                                }                            
                            }else{
                                setVar("GD_A01_IDCardIsIC","1");
                                exitScene("STA_READCARD");
                            }
                        }
                    }
                }else{//非外国人居留证
                    setVar("GD_A01_IsDealNotIDCardInfo","1");//未读证件，需要处理生日、性别字段                    
                    exitScene("STA_CONTINUE");
                }                
            }            
            
		});         
	}
}
</script>
