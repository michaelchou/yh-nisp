<!-- The ref attr used to find the swiper instance -->
<template>
  <x-layout-main>
     输入测试<input  id="searchText3" type="text" placeholder="查询过滤" onclick="ShowPinyinKB('-1','-1','searchText3','')" onblur="HideKB()"></input>
    <x-pagination :total="65" :page-size="8" @current-change="onCurrentChange"></x-pagination>
     <x-many-choose :show="showProvince" title="省市"
          :data="provinceData"
          @cancel="onManyCancel" @confirm="onChooseProvince">
     </x-many-choose>
     <x-many-choose :show="showCity" title="市县"
          :data="cityData"
          :up="true"
          @up="onUpProvince"
          @cancel="onManyCancel" @confirm="onChooseCity">
     </x-many-choose>
     <x-multi-level :show="showLevel" title="省市"
          :value="value" :data="provinceData"
          @result="onResult"
          @cancel="onManyCancel" @confirm="onChooseLevel">
     </x-multi-level>
    <div class="modal_btnbox">
        <button class="btn backbtn" id="modal_btn_back" @click="manyTest">ManyChoose</button>
        <button class="btn surebtn" id="modal_btn_sure" @click="levelTest">MultiLevel</button>
    </div>
  </x-layout-main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      getKeys: ['GD_A01_AreaData'],
      cityData: [],
      value: "1612",
      showLevel: false,
      showProvince: false,
      showCity: false
    }
  },
  computed: {
      provinceData: function() {
        if(!this.pool.hasOwnProperty('GD_A01_AreaData')) return []
        return JSON.parse(this.pool.GD_A01_AreaData)
      },
      ...mapState(['pool'])
  },
  methods: {
    manyTest () {
      this.showProvince = true
    },
    levelTest () {
      this.showLevel = true
    },
    onManyCancel () {
      console.log('onManyCancel')
      this.showProvince = false
      this.showCity = false
      this.showLevel = false;
    },
    onChooseProvince (index, item) {
      console.log('onChooseProvince ' + index)
      console.log(item)
      this.showProvince = false
      this.cityData = item.C
      this.showCity = true
    },
    onChooseLevel (index, item) {
      console.log('onChooseLevel ' + index)
      this.showLevel = false
    },
    onResult (result) {
      console.log(result)
    },
    onUpProvince () {
      this.showCity = false
      this.showProvince = true
    },
    onChooseCity (index, item) {
      this.showCity = false
      console.log('onChooseCity ' + index)
      console.log(item)
    },
    onCurrentChange (pageNum) {
      console.log('onCurrentChange' + pageNum);
    },
    ...mapActions(['initPool', 'fetch', 'submit', 'onCancel', 'onContinue'])
  },
  mounted() {
    this.initPool(this.$data);
  }
}
</script>

