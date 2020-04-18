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
console.log(bmw.getPreco())

function precoAumentou(pre) {
    pre.setPreco(pre.getPreco() * 2)
}

bmw.accept(precoAumentou)
console.log(bmw.getPreco())

