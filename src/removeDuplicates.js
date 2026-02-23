function removeDuplicates(array) {
  let arraytemp = [];
  console.log(array);
  let contador = 0
  for(let i = 0; i < array.length ; i++ ){
    arraytemp[contador] = array.shift();
    console.log("ArrayTemp " + arraytemp  + " tamanho array " + array.length);
    for(let j = 0; j < array.length ; j++ ){
      if(arraytemp[contador] == array[j]){
        let jTemp = j;
        console.log("j "+j + " valor " + array[j])
        array.splice(j,1);  
        j = jTemp-1;
      }
    }
    i = -1;
    contador++;
    console.log("Array " + array);
  }
  //arraytemp[arraytemp.length] = array[0];
  return arraytemp;

  //return Array.from(new Set(array));
}

//const array = [ 3, 1, 0, 15, 0, 50, 3, 1, 1];
//const array = [ 1, 2, 3, 4, 5];
//console.log(removeDuplicates(array));

module.exports = {
  removeDuplicates
}
