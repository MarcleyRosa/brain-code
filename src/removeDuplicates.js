function removeDuplicates(array) {
  // escreva seu código aqui
  let my_list = [];

  for (let i = 0; i < array.length; i++) {
      let my_flag = false;

      for (let j = 0; j < my_list.length; j++) {
          if (array[i] === my_list[j]) {
              my_flag = true;
              break;
          }
      }
      if (!my_flag) {
          my_list[my_list.length] = array[i];
      }
  }
  return my_list;
}

module.exports = {
  removeDuplicates
}
// Edson Copque - https://linktr.ee/edsoncopque 
