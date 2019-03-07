<style scoped>
	table{
		width: 85%;
		height: 80%;
		margin-right: 10%;
		margin-left: 10%;
		margin-top: 40px;
		border-collapse:collapse;
	}
		table td:first-child{
			width: 70%;
			border: 2px solid #50DBB7;
			text-align: center;
			padding: 0px;
		}
		table td:last-child{
			width: 30%;
			border: 2px solid #50DBB7;
			text-align: center;
			vertical-align: bottom;
		}
		table td p{ 
		font-size: 2.1rem;
		}
</style>

<template>
    <x-layout-main>
			<table>
				<tr>
					<td rowspan="3"></td>
					<td><img src=""><p>外国护照基本信息页</p></td>
			
				</tr>
				<tr>
					<td><img src=""><p>外国护照签注页</p></td>
				</tr>
				<tr>
					<td>
					<img src=""><p>外国护照入境时间页</p></td>
			
				</tr>
			</table>
			
				<div class="btnbox">
                    <button class="btn surebtn" id="Pictake">拍摄</button>
					<button class="btn surebtn" id="BtnSure">下一步</button>
                </div>
    </x-layout-main>
</template>