function insert(p) {
  var result = document.querySelector('p').innerHTML;
  document.querySelector('p').innerHTML = result + p
  
}
function clea() {
  document.querySelector('p').innerHTML = "" 
}

function apag() {
  
  var res = document.querySelector('p').innerHTML;
  document.querySelector('p').innerHTML = res.substring(0, res.length -1 )
}

function calcular() {
  var res = document.querySelector('p').innerHTML
  if (res) {
    document.querySelector('p').innerHTML = eval(res)
  }
  else {
    document.querySelector('p').innerHTML = "nada para calcular"
  }
}