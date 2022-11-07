const ficha = document.querySelector('.Principal')
const Formulario = document.querySelector('.form')

function Form(){
    
    ficha.style.display = 'none'
    Formulario.style.display = 'block'

}   
function getInformations() {
    
    let personagemDef = document.querySelectorAll('.Def1')

    const nome = document.querySelector('#formnome').value
    const jogador = document.querySelector('#formjogador').value
    const origem = document.querySelector('#formorigem').value
    const classe = document.querySelector('#formclasse').value
    const patente = document.querySelector('#formpatente').value
    const elemento = document.querySelector('#formelemento').value
    
    const nex = parseInt(document.querySelector('#formnex').value)
    const xp = parseInt(document.querySelector('#formxp').value)
    const pm = parseInt(document.querySelector('#formpm').value)
   
    const agilidade = parseInt( document.querySelector('#formagilidade').value)
    const vigor = parseInt( document.querySelector('#formvigor').value)
    const intelecto = parseInt( document.querySelector('#formintelecto').value)
    const presença = parseInt( document.querySelector('#formpresença').value)
    const força = parseInt( document.querySelector('#formforça').value)
    
    const vida = parseInt( document.querySelector('#formvida').value)
    const pontosesforço = parseInt( document.querySelector('#formpontosesforço').value)
    const sanidade = parseInt( document.querySelector('#formsanidade').value)
    
    let todosFirst = [nome, jogador , origem, classe, patente, elemento,nex, xp, pm]
    let habilidades = [agilidade, vigor, intelecto, presença, força]
    let ponto = [vida, pontosesforço, sanidade]

    console.log(todosFirst[0], ponto[0], ponto[1], ponto[2])


    for (let i = 0; i <= 8; i++) {
        
    
        if (i <= 5 ) {
        
            if (todosFirst[i].length == 0 ){

                console.log('Nao registrou')   
            }
            else {
                personagemDef[i].innerText = todosFirst[i];
           } 
       }
       else{
            
            if (isNaN(todosFirst[i])){

                console.log('Nao registrou')   
            }
            else {
                personagemDef[i].innerText = todosFirst[i];
            }
    }
        
        
    }

    ficha.style.display = 'flex'
    Formulario.style.display = 'none'
    

    return todosFirst[1], ponto[0], ponto[1], ponto[2]
    
    
}

console.log(getInformations())