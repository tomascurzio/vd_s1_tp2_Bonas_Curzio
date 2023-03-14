d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    let chart = Plot.plot({
      marks: [
        Plot.dot(data, {
          x: 'anio_mision',
          y: 'nacionalidad',
        }),
      ],
    })
    d3.select('#vis').append(() => chart)
  })