<template>
	<x-layout-main>
		<p class="title" id="EsignTittle"></p>
         <div style="width:100%; height: 60rem"></div>  
		<p class="center_title"></p>
        <div id="cwsound" style="display:none;"></div>		
		<div class="btnbox">
            <button class="btn" id="BtnSkip22">重新签名</button>
            <button class="btn" id="BtnSure22">确&nbsp;&nbsp;&nbsp;定</button>   
        </div> 
    </x-layout-main>
</template>

<script type="text/javascript">
export default {
	mounted () 
    {
        
		this.$root.$on('beforeQuit', onBeforeQuit);
        function onBeforeQuit() 
        {
			 exitScene("STA_BEFOREQUIT");
		}
		
	    this.$root.$on('cancelQuit', onCancelQuit);
        function onCancelQuit() 
	{
			exitScene("STA_CANCELQUIT");
		}

        DataTools.get("C_A01_Dev_MachineType|GD_CodPid",function(data){
			var strMachineType = data[0]; 
            if(strMachineType == "1" || strMachineType == "2"){
				$("#EsignTittle").html("请在外接电子签名板上签字");
                $("#cwsound").html('<EMBED name="ViewSound" src="wav/请到外接签字版签字，签字后点击确认键.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');
			}else{
                $("#EsignTittle").html("请在签名区域内签字");           
                $("#cwsound").html('<EMBED name="ViewSound" src="wav/请签字，签字后点击确认键.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>');     
            }
            
		}); 
        document.getElementById("BtnSkip22").onclick=onReSign22;
        function onReSign22() 
        {
            exitScene("STA_CLEAR");
        }
        document.getElementById("BtnSure22").onclick=onSure22;
        function onSure22() {
            pageLog("Sign Confirm.");
            document.getElementById("BtnSure22").setAttribute("disabled","disabled"); 
            exitScene("STA_CONTINUE");
        }
	}
}
</script>
