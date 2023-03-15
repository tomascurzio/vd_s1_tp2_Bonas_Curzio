d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    height: 400,
    width: 1000,
    x:{
      legend:false,
    },
    color:{
      legend:true,
    },
    marks: [
      Plot.barY(data, {
        x: 'genero',
        y: 'mision_hs',
        
      }),
    ],
  })
  d3.select('#vis').append(() => chart)
})