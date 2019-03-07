<template>
    <x-layout-main>
		<p class="title">交易成功，是否打印凭条？</p>
		<ul class="ul_Result">	
			<li>受理账户：<span id="">{{}}</span></li>
			<li>客户姓名：<span id="">{{}}</span></li>
			<li>交易终端：<span id="">{{}}</span></li>
			<li>交易类型：<span id="">{{}}</span></li>
			<li>基金名称：<span id="">{{}}</span></li>
			<li>基金代码：<span id="">{{}}</span></li>
			<li>购买金额：<span id="">{{}}</span></li>
			<li>客户风险等级：<span id="">{{}}</span></li>
			<li>交易时间：<span id="">{{}}</span></li>
			<li>交易结果：<span id="">{{}}</span></li>
		</ul>
		   <div class="btnbox">
            <button class="btn backbtn" id="btn_back">否</button>
            <button class="btn surebtn" id="btn_sure">是</button>
        </div> 
	</x-layout-main>
</template>

<script> 
export default {

}
</script> 