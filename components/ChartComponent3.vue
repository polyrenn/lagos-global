<template>
  <div>
    <bar-chart :data="barChartData" :options="options" :height="200" />
  </div>
</template>

<script>
import BarChart from '~/components/BarChart'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      barChartData: {
        datasets: [
          {
            label: '',
            data: [90, 10],
            backgroundColor: ['#063252', '#CFD8DC']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 70,
        legend: {
          display: false
        },
        radiusBackground: {
          color: '#d1d1d1' // Set your color per instance if you like
        },

        scales: {
          yAxes: [{
            ticks: {
              display: false,
              min: 4.8
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: '#FFF',
              fontSize: 16
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
    }
  }
}
</script>
