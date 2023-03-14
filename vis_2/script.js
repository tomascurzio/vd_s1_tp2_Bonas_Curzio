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
      Plot.dot(data, {
        x: 'mision_hs',
        y: 'eva_mision_hs',
        fill:"nacionalidad"
        
      }),
    ],
  })
  d3.select('#vis').append(() => chart)
})