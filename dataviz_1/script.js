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
      range: ['#8AA399', '#B4656F'],
    },
    grid: true,
    line: true,
    nice: true,
    width: 1200,
    height: 630,
    insetLeft: 5,
    marginBottom: 50,
    marginTop: 0,
    marginLeft: 73,
    x: {
      label: 'Cantidad de astronautas',
      labelOffset: 35,
    },
    y: {
      label: '',
    },
    style: {
      fontSize: 16,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px',
      fontFamily: 'Poppins',
    },
  })
  d3.select('#vis').append(() => chart)
})