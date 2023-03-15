d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'edad_mision',
        y: 'anio_mision',
        fill: 'genero',
        fillOpacity: 0.7,
        r: 'mision_hs',
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    width: 900,
    insetBottom: 20,
    insetTop: 20,
    marginBottom: 40,
    marginTop: 20,
    marginLeft: 50,
    marginRight: 25,
    color:{
      legend:true,
      scheme: 'buylrd',
    },
    x: {
      label: 'Año de nacimiento',
      labelOffset: 33,
    },
    y: {
      label: 'Año de mision',
      labelOffset: 50,
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