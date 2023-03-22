d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barY(
        data, 
        Plot.groupX(
          {y:"sum"},
          {
            x:"nacionalidad",
            sort:{x:"y",reverse:true},
            fill: 'genero'
          }
        )
      )
      ,
    ],
    color: {
      range: ['#408E91', '#E49393'],
    },
    grid: true,
    line: true,
    nice: true,
    width: 1300,
    height: 800,
    insetBottom: 10,
    marginBottom: 45,
    marginTop: 33,
    marginLeft: 50,
    marginRight: 25,
    x: {
      label: 'Nacionalidad',
      labelOffset: 45,
    },
    y: {
      label: 'Cantidad de astronautas',
      labelOffset: 50,
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 16,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px'
    },
  })
  d3.select('#vis').append(() => chart)
})