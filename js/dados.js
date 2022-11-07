function rollDado(dadosQuantidade, valorDado, idDado, idPelement) {

    const dado = document.getElementById(idDado)
        
    dado.classList.add('animationRoll')

    for (let i = 1; i <= dadosQuantidade; i++) {
            
        let min = Math.ceil(1);
        valorDado = Math.floor(valorDado);
        var valor = Math.floor(Math.random() * (valorDado - min) + min)
        
    }
        
        
    dado.addEventListener('animationend', () => {
            
        const mudarDado = document.getElementById(idPelement).innerText = valor
        console.log(idPelement, valor)
        console.log('----')
        dado.classList.remove('animationRoll')
    });
               
}

