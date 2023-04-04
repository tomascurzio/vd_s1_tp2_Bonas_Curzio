d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  
  let datacomandante = data.filter(d => d.ocupacion === 'comandante')
  let dataing = data.filter(d => d.ocupacion === 'ingeniero aeroespacial')

  let sumacomandante = d3
  .groups(datacomandante, d => d.anio_mision)
  .map(d => {
    return {
      anio_mision: d[0],
      max: d3.sum(d[1], d => d.mision_hs),
    }
  }) 
  let sumaing = d3
  .groups(dataing, d => d.anio_mision)
  .map(d => {
    return {
      anio_mision: d[0],
      max: d3.sum(d[1], d => d.mision_hs),
    }
  })
  let sumaing2011 = d3
  .groups(dataing, d => d.anio_mision)
  .filter(d => d[0] === 2011) 
  .map(d => {
    return {
      anio_mision: d[0],
      max: d3.sum(d[1], d => d.mision_hs),
    }
  })

  let chart = Plot.plot({
    marks: [
      Plot.barY(sumaing,
        { 
          x: 'anio_mision', 
          y: d => d.max,
          sort: 'anio_mision',
          stroke: '#8AA399',
          strokeWidth: 0,
          fill: '#8AA399',
        }),
      Plot.barY(sumacomandante,
        { 
          x: 'anio_mision', 
          y: d => d.max,
          sort: 'anio_mision',
          stroke: '#B4656F',
          fill: '#B4656F',
          strokeWidth: 0,
        }),
      Plot.barY(sumaing2011,
          { 
            x: 'anio_mision', 
            y: d => d.max,
            sort: 'anio_mision',
            stroke: '#8AA399',
            strokeWidth: 0,
            fill: '#8AA399',
          }),
    ],
    grid: true,
    line: true,
    nice: true,
    height: 500,
    width: 900,
    insetBottom: 5,
    marginTop: 35,
    marginBottom: 45,
    marginLeft: 60,
    marginRight: 0,
    x: {
        label: '',
        tickFormat: 'd',
      },
    y: {
      label: 'Horas de misión',
      labelOffset: 55,
    },
    style: {
      fontSize: 14,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px',
      fontFamily: 'Poppins',
    }, 
  })
  d3.select('#chart').append(() => chart)
})