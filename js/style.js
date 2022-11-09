const foto = document.querySelector('.personagemFoto')
const inputForm = document.querySelector('.inputForm')
const linkimg = document.querySelector('#ImgLink')
const divadd = document.querySelector('.addbutton')
const $buttonUpdateImg = document.querySelector('#buttonUpdateImg')
const $buttonStatusBar = document.querySelector('#buttonStatusBar')

const statusBar = document.querySelector('.status')

let testeButtonStatus = true

$buttonStatusBar.addEventListener('click', () =>{

    if (testeButtonStatus) {
        testeButtonStatus = false
        statusBar.classList.remove('statusOff')
        statusBar.classList.add('statusOn')
    }
    else{
        testeButtonStatus = true
        statusBar.classList.remove('statusOn')
        statusBar.classList.add('statusOff')

    }

    

})

function callChangeImage(){
    
    inputForm.style.display = 'flex'
}
document.querySelector('.Buttonclose').addEventListener('click', ()=> {
    inputForm.style.cssText = 'none'
}) 
    


function changeImage(){

        
    foto.style.backgroundImage = `url("${linkimg.value}")`

    if(foto.style.backgroundImage == 'url("")')
    {
        alert('Imgagem não atualizada')
        inputForm.style.cssText = 'none'
    }
    else{
                
        PersonagemGlobal.url = linkimg.value
        divadd.children[1].innerHTML = ''
        inputForm.style.display = 'none'
    }
}

function codificador(frase) {
    
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let text = ''
    for (const i in frase){

        let indice = 0

        if (alfabeto.indexOf(frase[i]) > -1){
                
            indice = alfabeto.indexOf(frase[i])
            indice = indice + 13

            if (indice >= alfabeto.length){
                indice = indice + alfabeto.length
            }
            text += alfabeto[indice]

        }
        else{

            text += frase[i]
        }

    }

    return text

}
function decodificador(frase) {
    
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let text = ''
    for (const i in frase){

        let indice = 0
        if (alfabeto.indexOf(frase[i]) > -1){
                
            indice = alfabeto.indexOf(frase[i])
            indice = indice - 13

            if (indice >= alfabeto.length){
                indice = indice + alfabeto.length
            }
            if (indice < 0){
                indice = indice + alfabeto.length
            }
            text += alfabeto[indice]

        }
        else{

            text += frase[i]
        }
    }

    return text
}
