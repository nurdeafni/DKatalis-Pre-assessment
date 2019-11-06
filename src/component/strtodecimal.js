function convert(desimal) {
  var angka = []
  for(var i = 0; i < desimal.length; i++){
	angka[i] = parseFloat(desimal[i]) / 100
  }
  return angka
}
console.log(convert(["33%", "98.1%", "56.44%", "100%"]))

//[0.33, 0.981, 0.5644, 1]
