d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    color:{
      legend:true,
    },
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'ocupacion',
        
      }),
    ],
  })
  d3.select('#vis').append(() => chart)
})

  