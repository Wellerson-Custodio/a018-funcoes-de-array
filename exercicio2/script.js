const num = [1, 2, 3, 4, 5, 6, 7, 8]

const triplos = num.map((item, index, array)=>{
    return item * 3
  })
  console.log(triplos)

  const metades = num.map((item, index, array)=>{
    return item / 2
  } )
  console.log(metades)