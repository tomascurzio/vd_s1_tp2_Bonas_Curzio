d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'ocupacion',
        fill: '#539165',
        stroke: '#539165',
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    width: 940,
    height: 250,
    insetBottom: 20,
    insetTop: 20,
    insetLeft: 1,
    marginBottom: 40,
    marginTop: 20,
    marginLeft: 230,
    marginRight: 40,
    color:{
      legend:true,
    },
    x: {
      label: 'Horas de mision',
      labelOffset: 40,
    },
    y: {
      label: 'Ocupacion',
      labelOffset: 228,
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 14,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px'
    }

  })
  d3.select('#vis').append(() => chart)
})

  