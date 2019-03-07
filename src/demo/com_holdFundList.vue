<template>
    <x-layout-main>
            <table class="detail_tab">
					<thead>
						<tr>
							<td>基金代码</td>
							<td>基金名称</td>
							<td>投资管理人</td>
							<td>基金单位净值</td>
							<td>定投类型</td>
							<td>定投周期</td>
							<td>定投金额</td>
							<td>合约号</td>
                            <td></td>
						</tr>
					</thead>
					<tbody  id="TbodyQuery">
						<tr>
							<td>600001</td>
							<td>生命一号</td>
							<td>1000.00</td>
							<td>30天</td>
							<td>3%</td>
							<td>2017/8/1</td>
							<td>2017/8/30</td>
                            <td>111111</td>
							<td><button class='detailbtn' @click='onDetail'>详情</button></td>
						</tr>
                        <tr>
							<td>600001</td>
							<td>生命一号</td>
							<td>1000.00</td>
							<td>30天</td>
							<td>3%</td>
							<td>2017/8/1</td>
							<td>2017/8/30</td>
                            <td>111111</td>
							<td><button class='detailbtn' @click='onDetail'>详情</button></td>
						</tr>
                        <tr>
							<td>600001</td>
							<td>生命一号</td>
							<td>1000.00</td>
							<td>30天</td>
							<td>3%</td>
							<td>2017/8/1</td>
							<td>2017/8/30</td>
                            <td>111111</td>
							<td><button class='detailbtn' @click='onDetail'>详情</button></td>
						</tr>
                        <tr>
							<td>600001</td>
							<td>生命一号</td>
							<td>1000.00</td>
							<td>30天</td>
							<td>3%</td>
							<td>2017/8/1</td>
							<td>2017/8/30</td>
                            <td>111111</td>
							<td><button class='detailbtn' @click='onDetail'>详情</button></td>
						</tr>
                        
					</tbody>
				</table>
                <div class='change_page'>
                        <button id=''>上一页</button>
                        <button id=''>下一页</button>
                </div>

            <div class="btnbox">
                <button class="btn backbtn" id="modal_btn_back">普通定投</button>
                <button class="btn surebtn" id="modal_btn_sure">智能定投</button>
            </div>
    </x-layout-main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            InputIDInfo: "基金定投持有列表",
        }
    },
    mounted () {  
        
    }
    
  
}
</script>