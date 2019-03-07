<template>
    <x-layout-main>
        <!--modefied by houlei 2019.01.30  防窥监管优化更改语音文件-->
        <EMBED name="ViewSound" SRC="wav/请您在输入密码前确认周边环境是否安全.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
    	<div>
        <p class="title">请输入您的密码</p>
	    <div class="Pin_img">
       	    <img :src="$root.imgPath('img/'+$root.getImgPath()+'InputPin.gif')"/>
        </div>
	    <div class="Pin_input">
       	    <p><i>账号：</i><span id="Account"></span></p>
	        <p><i>密码：</i><input type="password" class="input_Pin" id="password" maxlength="6"/></p>
	        <div class="Pin_tips">
            <p><i style="color:red;">尊敬的客户：</i></p>
            <p>1.请注意保护您的密码,防止被偷窥,不要向任何人透露;</p>
            <p>2.警惕插卡口,密码键盘及机身周围是否安装可疑异常装置;</p>
            <p>3.为保障您的资金安全,谨防利用短信、电话等方式进行的转账诈骗等违法行为,如遇特殊情况请拨打95599或110。</p>
            </div>
		</div>
        </div>
    </x-layout-main>
</template>
