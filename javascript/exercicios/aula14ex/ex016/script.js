function contar() {
  
  //pegando txt dos inputs inicio e fim 
  var txti = document.getElementById('txtinicio')
  var txtp = document.getElementById('txtpasso')
  var txtf = document.getElementById('txtfim') 
  var res = document.getElementById('res')
  
  //testando se há valor nos inputs (com o vídeo do curso)
  if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = '<p>Contando: </p>'
  }
  
  // trasformando os txt em number, e armazenando nas variáveis
  var inicio = Number(txti.value)
  var fim = Number(txtf.value)
  var passo = Number(txtp.value) 

  if (passo <= 0) { 
    alert('Passo inválido! Considerando PASSO 1')
    passo = 1
  }
  
  if (inicio < fim) {
    //contagem crescente
    for (var i = inicio ; i <= fim ; i += passo){
      res.innerHTML += `${i} &#128073; `
    }
  } else {
    //contagem regressiva
    for (var i = inicio ; i >= fim ; i -= passo){
      res.innerHTML += `${i} &#128073; `
    }
  }
  res.innerHTML += ' &#127937;'
}

/*
for (var i = inicio ; i <= fim ; i += passo){
  res.innerHTML += `${i} &#128073; `
}
res.innerHTML += ' &#127937;'
*/