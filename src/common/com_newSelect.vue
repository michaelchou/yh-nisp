<template>
    <x-layout-main>	  
          <p class="title">输入转账信息</p>
			<div class="info_conf">
				<table class="infor_table">
					<tr>
						<td class="infor_l">转存类型：</td>
						<td class="infor_r">          
							<div class="nice-select" name="nice-select">
								<p id="cqType" type="text" readonly data-value="1">约定转存</p>
								<ul id="ul1">
									<li data-value="1">三个月</li>
									<li data-value="2">六个月</li>
									<li data-value="3">九个月</li>
									<li data-value="4">一年</li>		
									<li data-value="1">三个月</li>
									<li data-value="2">六个月</li>
									<li data-value="3">九个月</li>
									<li data-value="4">一年</li>	
									<li data-value="1">三个月</li>
									<li data-value="2">六个月</li>
									<li data-value="3">九个月</li>
									<li data-value="4">一年</li>	
									<li data-value="1">三个月</li>
									<li data-value="2">六个月</li>
									<li data-value="3">九个月</li>
									<li data-value="4">一年</li>	
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<td class="infor_l">存期：</td>
						<td class="infor_r">          
							<div class="nice-select" name="nice-select">
								<p id="cq" type="text" readonly></p>
		<!--						<ul>
									<li data-value="1">三个月</li>
									<li data-value="2">六个月</li>
									<li data-value="3">九个月</li>
									<li data-value="4">一年</li>					
								</ul>
								-->
							</div>
						</td>
					</tr>
				</table> 
				<p class="notice">温馨提示：您的客户信息不完善，请携带有效证件到网点办理！</p>
			</div>
			
		<div class="btnbox">
            <button class="btn backbtn" id="btn_back">上一步</button>
           <button class="btn surebtn" id="btn_sure">确认</button>
        </div>     
    </x-layout-main>
</template>	  
<script> 
export default {
 mounted(){
	var a=[1,2,3,4,5,6,7];
	var b=["11111","22222","33333","44444","5555","33333333","3444444"];
	createSelect(a,b,"cq");
	scrollBar("ul1");
	newScrollBar("cq");
 }
}
</script> 	