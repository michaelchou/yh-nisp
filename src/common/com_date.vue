<template>
    <x-layout-main>
        <ul class="ul_Result">	
            <li>开始日期：<span><input type="text" id="start" class="input_info"/></span></li>
            <li>结束日期：<span><input type="text" id="end" class="input_info"/></span></li>
		</ul>
        <div class="btnbox">
            <button class="btn backbtn" id="btn_back">否</button>
            <button class="btn surebtn" id="btn_sure">是</button>
        </div> 
	</x-layout-main>
</template>

<script> 
export default {
mounted(){
    $(function(){
        new DatePicker().init({id : 'start'});
        new DatePicker().init({id : 'end'});
    });

}

}
</script> 