<template>
    <x-layout-main>
        <p class="title">人脸比对拍照</p>   
        <EMBED name="ViewSound" SRC="wav/请对准屏幕上的识别框.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>             
    </x-layout-main>
</template>

<script>
export default {
    created () {
        var vm = this;
		
	    this.$root.$once('CW_FaceCam_MsgReceived', onMsgReceived);
        function onMsgReceived(strMsg) {
			vm.$root.$off('CW_FaceCam_MsgReceived');
            var jsonobject = $.parseJSON(strMsg);	
            var strMsg = "";
            if(jsonobject != "null")
            {
                strMsg = LivesInfoSucc(vm.C_FileDIR,vm.GD_A01_LC_SerialNo,vm.GD_A01_UpUfilePram);   
            } else{
                strMsg = LivesInfoErr(jsonobject.Result);   
            }
            vm.CW_Succ(strMsg);
		};
		
	    this.$root.$on('beforeQuit', onBeforeQuit);
        function onBeforeQuit() {
            CW_Destroy();
		};
		
		this.$root.$on('cancelQuit', onCancelQuit);
        function onCancelQuit() {
			var strMsg = CW_Init();
            if(strMsg != ""){
                vm.CW_Succ(strMsg);
            }
		};
        
	},    
	destroyed () {
		this.$root.$off('CW_FaceCam_MsgReceived');     
        this.$root.$off('beforeQuit');     
        this.$root.$off('cancelQuit');        
	},
    data () {
        return {
			C_FileDIR: "",
			GD_A01_LC_SerialNo: "",
            GD_A01_UpUfilePram:""
        }
    },
    methods: {
        CW_Succ: function (strMsg) {    
            var arrstr = strMsg.split(",");
            if(arrstr[1] == "STA_CONTINUE"){
                setVar("GD_A01_UpUfilePram",arrstr[0]);
            }    
            exitScene(arrstr[1]); 
        }        
    },
    mounted () {
        var vm = this;            
        DataTools.get("C_A01_CameraPicFile|GD_A01_LC_SerialNo|GD_A01_UpUfilePram",function(data){
            vm.C_FileDIR = data[0];
            vm.GD_A01_LC_SerialNo = data[1];
            vm.GD_A01_UpUfilePram = data[2];
            var strMsg = CW_Init();
            if(strMsg != ""){
                vm.CW_Succ(strMsg);
            }
        });

        var t=17;
        var timerFace = setInterval(function(){ 
            if (t<0) { 			
                clearInterval(timerFace);
                CW_Destroy();
                return;
            }else{               
                t=t-1; 
            } 
        },1000);
    }
}
</script>
