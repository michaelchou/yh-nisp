<template>
    <footer class="footer footerbg">
        <span class="footInfo hotline">客户服务热线 <i>{{hotline}}</i></span>
        <!--
        <select v-model="$root.currentView">
            <option v-for="item in $root.pages" 
                :key="item[1]"
                :value="item[1]">{{item[0]}}</option>
        </select>
        -->
        <span class="footInfo slogan">大行德广 伴你成长</span>
        <span class="footInfo slogan"><a @click="onDebug">{{pageCnt}}</a></span>
    </footer>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        pageCnt: function () {
            return this.$root.pages.length
        },
        ...mapState(['hotline'])
    },
    methods: {
        onDebug () {
            this.$root.debug = true
        }
    }
}
</script>
