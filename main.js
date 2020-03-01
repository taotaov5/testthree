<!DOCTYPE html>
<html lang="en">
<head>
  <title>v-charts</title>
</head>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css">
<body>
<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
  import VeLine from 'v-charts/lib/line'
  export default {
    created () {
      this.chartData = {
        columns: ['日期', '销售量'],
        rows: [
          { '日期': '1月1日', '销售量': 123},
          { '日期': '1月2日', '销售量': 1223},
          { '日期': '1月3日', '销售量': 2123},
          { '日期': '1月4日', '销售量': 4123},
          { '日期': '1月5日', '销售量': 3123},
          { '日期': '1月6日', '销售量': 7123}
        ]
      }
    },

    components: { VeLine }
  }
</script>
 
</body>
</html>