export const COSMIC_THEME = {
  name: 'cosmic',
  base: 'default',
  variables: {

    temperature: [
      '#2ec7fe',
      '#31ffad',
      '#7bff24',
      '#fff024',
      '#f7bd59',
    ],

    solar: {
      gradientLeft: '#7bff24',
      gradientRight: '#2ec7fe',
      shadowColor: '#19977E',
      radius: ['70%', '90%'],
    },

    traffic: {
      colorBlack: '#000000',
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#ffffff',
      lineBg: '#d1d1ff',
      lineShadowBlur: '14',
      itemColor: '#BEBBFF',
      itemBorderColor: '#ffffff',
      itemEmphasisBorderColor: '#ffffff',
      shadowLineDarkBg: '#655ABD',
      shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
      gradFrom: 'rgba(118, 89, 255, 0.4)',
      gradTo: 'rgba(164, 84, 255, 0.5)',
    },

    electricity: {
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
      tooltipLineWidth: '1',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#ffffff',

      xAxisColor: 'rgba(161, 161 ,229, 0.3)',
      xAxisTextColor: '#a1a1e5',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#ffffff',
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#00ffaa',
      lineGradTo: '#fff835',
      lineShadow: 'rgba(14, 16, 48, 0.4)',

      areaGradFrom: 'rgba(188, 92, 255, 0.5)',
      areaGradTo: 'rgba(188, 92, 255, 0)',
      shadowLineDarkBg: '#a695ff',
    },

    bubbleMap: {
      titleColor: '#ffffff',
      geoColors: ['#e6b045', '#0088ff', '#ff386a', '#00d977', '#7659ff', '#24dec8'],
      areaColor: '#2c2961',
      areaHoverColor: '#a1a1e5',
      areaBorderColor: '#654ddb',
    },

    echarts: {
      bg: '#363175',
      legendTextColor: 'white',
      xAxisLineColor: 'white',
      yAxisLineColor: 'white',

      pie: {
        colors: [
          'rgb(168, 56, 93)',
          'rgb(122, 163, 229)',
          'rgb(170, 227, 245)',
          'rgb(173, 205, 237)',
          'rgb(162, 126, 168)',
        ],
        itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      },

      bar: {
        color: '#3398DB',
      },

      barAnimation: {
        colors: ['red', 'white'],
      },

      line: {
        colors: ['red', 'black', 'white'],
      },

      multipleLine: {
        colors: ['#5793f3', '#d14a61', '#675bba'],
      },

      areaStack: {
        colors: ['red', 'blue', 'purple', 'yellow', 'pink'],
        tooltipBackgroundColor: '#6a7985',
      },

      radar: {
        colors: ['red', 'white'],
        nameTextColor: 'white',
        splitAreaStyleColor: 'transparent',
      },
    },

    chartjs: {
      xAxisColor: 'rgba(148,159,177,1)',
      yAxisColor: 'rgba(148,159,177,1)',
      tickColor: 'white',
      legendTextColor: 'white',

      barHorizontal: {
        colors: ['red', 'blue'],
      },

      radar: {
        colors: ['red', 'blue'],
        scaleGridLinesColor: 'white',
        scaleAngleLinesColor: 'white',
        pointLabelFontColor: 'white',
      },
    },

    d3: {
      pie: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      bar: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      line: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      advancedPie: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      areaStack: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      polar: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    },
  },
};