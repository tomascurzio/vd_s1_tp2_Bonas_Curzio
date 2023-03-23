d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'ocupacion',
        fill: '#408E91',
        stroke: '#408E91',
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    width: 940,
    height: 300,
    insetBottom: 20,
    insetTop: 20,
    insetLeft: 5,
    insetRight: 10,
    marginBottom: 80,
    marginTop: 20,
    marginLeft: 260,
    marginRight: 40,
    color:{
      legend:true,
    },
    x: {
      label: 'Horas de misión',
      labelOffset: 45,
    },
    y: {
      label: 'Ocupacion',
      labelOffset: 255,
    },
    style: {
      fontSize: 16,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px'
    }

  })
  d3.select('#vis').append(() => chart)
})

  