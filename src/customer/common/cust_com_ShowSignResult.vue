<template>
    <x-layout-main>
                <p class="title">请核对申请书及签名</p>
                <div style="width:100%; height: 60rem"></div>  
                <div class="btnbox">
                    <button class="btn backbtn" id="btn_back">不&nbsp;同&nbsp;意</button>
                    <button class="btn surebtn" id="btn_ReSign">重新签名</button>
                    <button class="btn surebtn" id="btn_sure">同&nbsp;&nbsp;&nbsp;意</button>
                </div>
    </x-layout-main>
</template>

<script>
export default {
created () {	

	this.$root.$on('beforeQuit', onBeforeQuit);
    function onBeforeQuit() {
       $("#PDFViewer").attr('height', "0").attr('width', "0");
    };
	
    this.$root.$on('cancelQuit', onCancelQuit);
    function onCancelQuit() {
        setTimeout( function(){
            $("#PDFViewer").attr('height', "60%").attr('width', "60%");
        }, 500 );
    };

},
beforeDestroy(){
    $("#PDFViewer").attr('height', "0").attr('width', "0");
},
destroyed () {  
    this.$root.$off('beforeQuit');     
    this.$root.$off('cancelQuit');        
},    
mounted () {
        var nRet = PDFViewer.OpenFile("C:\\csap\\Nisp\\conf\\PDFs\\OpenCard.pdf");
        PDFViewer.SetViewFit("0");
        setTimeout( function(){
            $("#PDFViewer").attr('height', "60%").attr('width', "60%");
        }, 500 );
        //确定按钮事件处理
        document.getElementById("btn_sure").onclick=onSure;
        function onSure(){
			$("#PDFViewer").attr('height', "0").attr('width', "0");
            onContinue();
        }
        document.getElementById("btn_ReSign").onclick=onReSign;
        function onReSign(){
			$("#PDFViewer").attr('height', "0").attr('width', "0");
            exitScene("STA_BACK");
        }
        //返回按钮事件处理
        document.getElementById("btn_back").onclick=onBack;
        function onBack(){
			$("#PDFViewer").attr('height', "0").attr('width', "0");
            onCancel();
        }

}
}
</script>
