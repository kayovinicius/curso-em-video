



function gerar() {
    var txtn = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    var num = Number(txtn.value)

    if (txtn.value.length == 0) {
        alert('Insira um valor para gerar a tabuada')
    } else {
        tab.innerHTML = ''
        for (var i = 1 ; i <= 10 ; i++) {
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}

