d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data, 
        Plot.groupY(
          {x:"sum"},
          {
            y:"nacionalidad",
            sort:{y:"x",reverse:true},
            fill: 'genero',
          }
        )
      )
      ,
    ],
    color: {
      range: ['#408E91', '#E49393'],
      legend: true,
    },
    grid: true,
    line: true,
    nice: true,
    width: 1000,
    height: 800,
    insetBottom: 10,
    insetLeft: 5,
    marginBottom: 45,
    marginTop: 33,
    marginLeft: 150,
    marginRight: 25,
    x: {
      label: 'Cantidad de astronautas',
      labelOffset: 45,
    },
    y: {
      label: 'Nacionalidad',
      labelOffset: 150,
      labelTickRotate: 45,
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 16,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px'
    },
  })
  d3.select('#vis').append(() => chart)
})