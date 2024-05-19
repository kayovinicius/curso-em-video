let num = [5, 8, 2, 9, 3]

num.push(1) //colocando mais um valor no vetor 

console.log(`o meu array na sua ordem original: ${num}`)

//console.log(`o meu array em ordem crescente fica: ${num.sort()}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

let = pos = num.indexOf(5) // recebe o índice em que o 8 está

if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`O valor está na posição: ${pos}`)
}
