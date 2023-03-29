d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  
  let dataeeuu = data.filter(d => d.nacionalidad === 'EE.UU.')
  let datarusia = data.filter(d => d.nacionalidad === 'U.S.S.R/Rusia')
  let sumeeuu = d3
  .groups(dataeeuu, d => d.anio_mision)
  .map(d => {
    return {
      anio_mision: d[0],
      max: d3.sum(d[1], d => d.mision_hs),
    }
  }) 
  let sumarusia = d3
  .groups(datarusia, d => d.anio_mision)
  .map(d => {
    return {
      anio_mision: d[0],
      max: d3.sum(d[1], d => d.mision_hs),
    }
  }) 
  
  let chart = Plot.plot({
    marks: [
      Plot.line(
        sumeeuu,
        {
          x: 'anio_mision',
          y: 'mision_hs',
        },
      ),
      Plot.lineY(sumeeuu,
        { 
          x: 'anio_mision', 
          y: d => d.max,
          sort: 'anio_mision',
          stroke: '#E49393',
          strokeWidth: 4,
        }),
      Plot.lineY(sumarusia,
        { 
          x: 'anio_mision', 
          y: d => d.max,
          sort: 'anio_mision',
          stroke: '#408E91',
          strokeWidth: 4,
        }),
    ],
    grid: true,
    line: true,
    nice: true,
    height: 500,
    width: 1100,
    insetBottom: 10,
    insetRight: 10,
    insetLeft: 10,
    marginTop: 40,
    marginBottom: 45,
    marginLeft: 60,
    marginRight: 25,
    x: {
        label: 'Año',
      },
    y: {
      label: 'Horas totales',
    },
    style: {
      fontSize: 16,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px' 
    }, 
  })
  d3.select('#chart').append(() => chart)
})