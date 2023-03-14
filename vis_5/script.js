d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    height: 400,
    width: 1000,
    color:{
      legend:true,
    },
    marks: [
      Plot.dot(data, {
        x: 'anio_nacimiento',
        y: 'anio_mision',
        fill: 'genero',
        
      }),
    ],
  })
  d3.select('#vis').append(() => chart)
})