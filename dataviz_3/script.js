d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barY(
        data, 
        Plot.groupX(
          {y:"count"},
          {
            x:"genero",
            sort:{x:"y",reverse:true},
            fill: "genero"
          },
        ),
      ),
      Plot.frame(
        {stroke: "#e4ebe7", 
        strokeWidth: 0.1 }
      ),
      Plot.axisX(
        {
          tickSize: 0,
          fontSize: 0,
        }
      ),
      Plot.text(
        data,
        Plot.groupX(
          { y: 'count' },
          {
            x: 'genero',
            sort: { x: 'y', reverse: true },
            text: d => {
              console.log(d)
              return d.length
            },
            fontSize: 16,
            dy: -17,
            labelAnchor: 0,
          },
        ),
      )
    ],
    grid: false,
    line: false,
    nice: true,
    width: 1040,
    height: 500,
    insetTop: 25,
    insetBottom: 5,
    marginBottom: 30,
    marginTop: 40,
    marginLeft: 50,
    marginRight: 25,
    facet: {
      data: data,
      x: 'ocupacion',
      label: '',
    },
    color:{
      range: ["#8AA399", "#B4656F"],
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
      fontSize: 14,
      color: '#e4ebe7',
      background: '#2c2e2d',
      padding: '10px',
      fontFamily: 'Poppins',
    },
  })
  d3.select('#vis').append(() => chart)
})