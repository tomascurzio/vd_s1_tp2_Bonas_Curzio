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
            fill: '#E0E0CE'
          }
        )
      )
      ,
    ],
    grid: false,
    line: false,
    nice: false,
    axes:false,
    width: 1100,
    height: 500,
    insetTop: 30,
    insetBottom: 10,
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 25,
    facet: {
      data: data,
      x: 'ocupacion',
      label: '',
    },
    color:{
      legend:true,
    },
    x: {
      label: '',
      ticks: 0,
    },
    y: {
      label: '',
      labelOffset: 50,
      ticks: 0,
    },
    style: {
      fontSize: 16,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px',
      fontFamily: 'Poppins',
    },
  })
  d3.select('#vis').append(() => chart)
})