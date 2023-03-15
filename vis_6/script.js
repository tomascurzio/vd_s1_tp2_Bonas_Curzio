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
          { x: 'edad_mision', y: 'nacionalidad' },
        ),
      ),
    ],
    x: {
      label: 'Min of life_expect, Max of life_expect',
    },
    grid: true,
    nice: true,
    line: true,
  })
  d3.select('#vis').append(() => chart)
})

  