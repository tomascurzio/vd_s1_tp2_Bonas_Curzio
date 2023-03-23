d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barY(
        data, 
        Plot.groupX(
          {y:"sum"},
          {
            x:"genero",
            sort:{x:"y",reverse:true},
            fill: '#408E91'
          }
        )
      )
      ,
    ],
    grid: true,
    line: true,
    nice: true,
    width: 1100,
    height: 500,
    insetBottom: 10,
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 25,
    facet: {
      data: data,
      x: 'ocupacion',
      label: 'Ocupación',
    },
    color:{
      legend:true,
    },
    x: {
      label: 'Género',
      labelOffset: 45,
    },
    y: {
      label: 'Cantidad de astronautas',
      labelOffset: 50,
    },
    style: {
      fontSize: 16,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px',
    },
  })
  d3.select('#vis').append(() => chart)
})