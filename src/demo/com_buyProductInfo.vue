
<template>
    <x-layout-main>
            <p class="title">{{title}}</p>
            <ul class='productallinfo'>
                <li>
                    <p class='mainleft'>
                        <span>姓名：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                    <p>
                        <span>证件类型：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                </li>
                <li>
                    <p  class='mainleft'>
                        <span>产品代码：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                    <p>
                        <span>证件号码：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                </li>
                <li>
                    <p  class='mainleft'>
                        <span>产品名称：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                    <p>
                        <span>币种：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                </li>
                <li>
                    <p  class='mainleft'>
                        <span>产品风险类型：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                    <p>
                        <span>产品类型：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                </li>
                <li>
                    <p  class='mainleft'>
                        <span>发售起始日：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                    <p>
                        <span>发售终止日：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                </li>
                <li>
                    <p  class='mainleft'>
                        <span>起息日：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                    <p>
                        <span>到期日：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                </li>
                <li>
                    <p  class='mainleft'>
                        <span>起点金额：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                    <p>
                        <span>递增金额：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                </li>
                <li>
                    <p  class='mainleft'>
                        <span>期限：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                    <p>
                        <span>预期收益率：</span>
                        <span class='productinforight' id=''>XXXXX</span>
                    </p>
                </li>
            </ul>
            <div class="btnbox">
                <button class="btn backbtn" id="modal_btn_back">上一步</button>
                <button class="btn surebtn" id="modal_btn_sure">下一步</button>
            </div>
    </x-layout-main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            title: "理财产品认购/申购信息填写",
        }
    }
  
}
</script>