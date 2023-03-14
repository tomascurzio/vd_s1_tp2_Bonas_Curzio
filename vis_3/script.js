d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    height: 400,
    width: 100,
    color:{
      legend:true,
    },
    marks: [
      Plot.barY(data, {
        x: 'nacionalidad',
        y: 'eva_mision_hs',
        
      }),
    ],
  })
  d3.select('#vis').append(() => chart)
})