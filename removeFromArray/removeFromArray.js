const removeFromArray = function(array, values) {
  toRemove = Object.values(arguments).slice(1,)
  toRemove.forEach((item) => {
    let index = array.indexOf(item)
    if (index != -1){
      array.splice(index, 1)
    }
  });
  return array
}

module.exports = removeFromArray
