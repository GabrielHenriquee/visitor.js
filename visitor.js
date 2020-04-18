function carros(nome, preco) {
    this.nome = nome
    this.preco = preco
}

carros.prototype = {
    getPreco: function () {
        return this.preco
    },

    setPreco: function (pre) {
        this.preco = pre
    },

    accept: function (visitorFunction) {
        visitorFunction(this)
    }

}

const bmw = new carros("bmw", 140000)
console.log("O preco do carro é: ", bmw.getPreco())

function novoPreco(pre) {
    pre.setPreco(pre.getPreco() * 2)
}

bmw.accept(novoPreco)
console.log("O preco novo do carro é: ", bmw.getPreco())


