let num = document.querySelector('input#num')
let opcao = document.querySelector('select#selecao')
let res = document.querySelector('div#res')
let valores = []



    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }

    }

    function inLista(n, l){ 
        if (l.indexOf(Number(n)) != -1) {
            return true 
        } else {
            return false
        }

    }

function adicionar() {
    
    if (isNumero(num.value) && !inLista(num.value, valores)){
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            opcao.appendChild(item)
            res.innerHTML = ''

    } else if(num.value == 0) {
        alert('Digite valores para adicionar')
        } else {
            alert('valor inválido ou já encontrado na lista.')
            }
num.value = ''
num.focus()
}


function finalizar() {
    if(valores.length == 0 ) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos números informados foi ${soma}</p>`
        res.innerHTML += `<p>E a média dos números informados foi ${media}</p>`

    }
}