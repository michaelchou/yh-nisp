<style scoped>
.MenuShow{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: 65%;
	margin-top: 5%;
	overflow-y: auto;
}
</style>

<template>
    <x-layout-main>
		<p class="title">业务预处理</p>
		<div class="MenuShow">		
		</div>
	</x-layout-main>
</template>

<script> 
export default {
	mounted () {
		 var thepath = vm.$root.themeImgPath;
	 	DataTools.get("GD_A01_MenuID_Preprocess|GD_A01_MenuData",function(data){
			var MenuData = JSON.parse(data[1]);  //菜单转换成json对象
			var MenuID=data[0].split(","); 
			//循环遍历菜单ID     
			for(var t=0;t<MenuID.length;t++){
				//循环主菜单
				for(var i = 0; i<MenuData.length; i++){
					if(MenuData[i].NAM_MENU != "常用菜单"){
						//循环二级菜单
						for(var j=0;j<MenuData[i].CLD_MENU.length;j++){
							//判断给的菜单ID是否在菜单里面
							if(MenuData[i].CLD_MENU[j].ID_MENU.indexOf(MenuID[t])!=-1){
								var nodeChild="<div style=\"width:20%;\" data-ID='"+MenuData[i].CLD_MENU[j].ID_MENU+"'><img style='max-width:95%;' src='"+thepath+'/img/bus/'+MenuData[i].CLD_MENU[j].NAM_ICON+"'></div>"
								$(".MenuShow").append(nodeChild);
								break;
							}
						}
					}
				}
			}	 
		var imgNodes= document.querySelectorAll(".MenuShow div");
		for(var i=0;i<imgNodes.length;i++){
			imgNodes[i].addEventListener("click",onSure);
		}
		function onSure(){
			var MenuID=$(this).attr("data-ID");
			
			setVar("GD_A01_MenuID",MenuID);
			exitScene("STA_CONTINUE");
		}
		});
	}
}
</script> 