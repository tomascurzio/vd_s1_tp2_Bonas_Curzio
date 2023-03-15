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
      Plot.barY(
        data, 
        Plot.groupX(
          {y:"count"},
          {
            x:"nacionalidad",
            sort:{x:"y",reverse:true},

          }
        )
      )
      ,
    ],
  })
  d3.select('#vis').append(() => chart)
})