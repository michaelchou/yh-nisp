<template>
    <x-layout-main>
        <div class="echarts">
            <IEcharts :option="line" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
            <button @click="doRandom">Random</button>
        </div>
  </x-layout-main>
</template>

<script>

  export default {
    data: () => ({
      loading: false,
      line: {
        title: {
          text: '利率图表示例'
        },
        tooltip: {},
        xAxis: {
          data: ['9/1', '9/2', '9/3', '9/4', '9/5', '9/6']
        },
        yAxis: {},
        series: [{
          name: 'Rates',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }),
    methods: {
      doRandom() {
        const that = this;
        let data = [];
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }
        that.loading = !that.loading;
        that.line.series[0].data = data;
      },
      onReady(instance) {
        console.log(instance);
      },
      onClick(event, instance, echarts) {
        console.log(arguments);
      }
    }
  };
</script>

<style scoped>
  .echarts {
    width: 400px;
    height: 400px;
  }
</style>
