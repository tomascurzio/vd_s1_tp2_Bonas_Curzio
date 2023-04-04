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
      // Plot.frame(
      //   {stroke: "#e4ebe7", 
      //   strokeWidth: 0.1 }
      // ),
      Plot.axisX(
        {
          tickSize: 0,
          fontSize: 0,
        }
      ),
      Plot.text([`0`], {
        fx: ["Comandante"],
        frameAnchor: "right",
        dx: -40,
        dy: 195,
        fontSize: 18,
      }),
      Plot.text([`Comandante`], {
        fx: ["Comandante"],
        frameAnchor: "right",
        dx: -53,
        dy: 227,
        fontSize: 14,
      }),
      Plot.text([`Especialista aeroespacial`], {
        fx: ["Especialista aeroespacial"],
        frameAnchor: "right",
        dx: -9,
        dy: 227,
        fontSize: 14,
      }),
      Plot.text([`Ingeniero aeroespacial`], {
        fx: ["Ingeniero aeroespacial"],
        frameAnchor: "right",
        dx: -17,
        dy: 227,
        fontSize: 14,
      }),
      Plot.text([`Part. de vuelo espacial`], {
        fx: ["Part. de vuelo espacial"],
        frameAnchor: "right",
        dx: -15,
        dy: 227,
        fontSize: 14,
      }),
      Plot.text([`Piloto`], {
        fx: ["Piloto"],
        frameAnchor: "right",
        dx: -87,
        dy: 227,
        fontSize: 14,
      }),
      Plot.text([`0`], {
        fx: ["Piloto"],
        frameAnchor: "right",
        dx: -40,
        dy: 195,
        fontSize: 18,
      }),
      Plot.text([`0`], {
        fx: ["Part. de vuelo espacial"],
        frameAnchor: "right",
        dx: -40,
        dy: 195,
        fontSize: 18,
      }),
      Plot.text(
        data,
        Plot.groupX(
          { y: 'count' },
          {
            x: 'genero',
            sort: { x: 'y', reverse: true },
            text: d => {
                return d.length;
            },
            fontSize: 18,
            dy: -17,
          },
        ),
      )
    ],
    nice: true,
    width: 1040,
    height: 450,
    insetTop: 25,
    insetBottom: 5,
    marginBottom: 30,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    facet: {
      data: data,
      x: 'ocupacion',
      label: '',
    },
    fx: {
      ticks: 0,
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