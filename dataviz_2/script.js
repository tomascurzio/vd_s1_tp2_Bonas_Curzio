d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          {
            x: 'edad_mision',
            y: 'nacionalidad',
            fill: '#E0E0CE',
          },
        ),
      ),
    ],
    x: {
      label: 'Edad en la misión',
    },
    y: {
      label: 'Nacionalidad',
    },
    grid: true,
    line: true,
    nice: true,
    height: 500,
    width: 1100,
    insetBottom: 10,
    insetRight: 10,
    marginBottom: 45,
    marginLeft: 100,
    marginRight: 25,
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
