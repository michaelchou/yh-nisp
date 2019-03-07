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
								<ul id='ul1'>
									<li data-value="1">约定转存</li>
									<li data-value="2">不转存</li>
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
								<p id="cq" type="text" readonly data-value="1">三个月</p>
								<ul id=ul2>
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
				</table> 
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
	initializeSelect();
	setTimeout(scrollBar("ul1"),500);
	setTimeout(scrollBar("ul2"),500);
	
 }
}
</script> 	