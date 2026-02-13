function invertString(string) {
  let invertida = ''
  
  for (let index = (string.length -1) ; index >= 0 ; index--) {
  invertida = invertida + string[index]
  
  }

  //invertida = string.split('').reverse().join('')
    return(invertida)
}

module.exports = {
  invertString
}

