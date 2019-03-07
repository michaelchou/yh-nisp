<template>
    <x-layout-main>
		<p class="title">基金定投签约产品详情</p>
		<table class="tabinfo_form">
			<tr>
				<td>基金代码：<span id="fundNo">1234</span></td>
				<td>基金类型：<span id="fundType">货币</span></td>
			</tr>
            <tr>
                <td>基金名称：<span id="fundName">长安货币D类份额</span></td>
                <td>投资管理人：<span id="manager">长安基金管理有限</span></td>
            </tr>
            <tr>
                <td>产品状态：<span id="proStatus">正常开放</span></td>
                <td>净值/面值：<span id="faceValue">1.000</span></td>                   </tr>
            <tr>
                <td>基金风险等级：<span id="riskType">低</span></td>
                <td>分红方式：<span id="diviWay">红利再投资</span></td>
            </tr>  
            <tr>
                <td>申购起点金额：<span id="originMon">5000000</span></td>
                <td>申购递增金额：<span id="increMon">0.01</span></td>
            </tr>
            <tr>
                <td>普通定投起点金额：<span id="originMon">300.00</span></td>
                <td>定投递增金额：<span id="increMon">100.00</span></td>           
            </tr>            
        </table>
        <div class="btnbox">
                <button class="btn backbtn" id="btn_back" @click="onBack">上&nbsp;一&nbsp;步</button>
                <button class="btn surebtn" id="btn_invest" @click="onNormalInvest" >普通定投</button>
                <button class="btn surebtn" id="btn_investAuto" @click="onAutoInvest">智能定投</button>
        </div>
    </x-layout-main>
</template>