function getIntervalData(array, inicio, fim) {
let objeto = {
  arrayNoIntervalo : [],
  contador : 0
}
let checaInicioFim = 0

  if (array.length != 0 ) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] === inicio) {
        checaInicioFim++
      }
      if (array[index] === fim) {
        checaInicioFim++
      }
      
    }
    if (checaInicioFim === 2) {
      if (inicio < fim) {
        let contador = 0
      let ordenado = [inicio]
      contador++
    
      for (let index = 0; index < array.length; index++) {
        if ((array[index] > inicio) && (array[index] < fim)) {
          ordenado.push(array[index])
          contador++
        }
        
      }
    
      ordenado.push(fim)
      contador++
    
    
    
    objeto.arrayNoIntervalo = ordenado
    objeto.contador = contador
      }
      
    }
    
  } else {
    
  }

return(objeto)

}

module.exports = {
getIntervalData
}

let anos = [1, 2, 3, 4, 5, 1]
let sod = [20, 14, 5, 6, 9, 63, 80, 120]
let rest = [15, 4, 6, 9, 21, 30, 7]

console.log(getIntervalData(anos, 2, 4));
console.log(getIntervalData(sod, 20, 80));
console.log(getIntervalData(rest, 15, 30));


