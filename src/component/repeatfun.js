function repeat(operation, num) {
  var num_array = new Array(num);
  for(var i = 0; i < num_array.length; i++){
    return operation(num);
  }
}
module.exports = repeat 