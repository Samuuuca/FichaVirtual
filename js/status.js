const Usuario = localStorage.getItem('Usuario');


window.onload = (event) =>{
    
    console.log(Usuario)
    Update()
    
}

class CriarPersonagem{
    constructor(nome, vida, pe, sn){

        this.nome = nome
        this.vida = vida
        this.pe = pe
        this.sn = sn
    }
}

let Personagem = new CriarPersonagem()
let todosFirst = [] //0 - 8
let habilidades = [] // 9 - 13
let ponto = []

const ficha = document.querySelector('.Principal')
const Formulario = document.querySelector('.form')
const body = document.querySelector('body')
let personagemDef = document.querySelectorAll('.Def1')
let personagemDef2 = document.querySelectorAll('.def2')


let PersonagemStatusTemp = []

let PersonagemGlobal = {
    nome: '',
    jogador: '',
    origem:'',
    classe: '',
    patente: '',
    elemento: '',
    nex: 0,
    xp: 0,
    pm: 0,
    agilidade: 0,
    vigor: 0,
    intelecto: 0,
    presença: 0,
    força: 0,
    vida: 0,
    pontosesforço: 0,
    sanidade: 0,    
    url:''
}

function UpdateDataBase() {


    bd.collection('Personagens').doc(Usuario).update(PersonagemGlobal).then(() => {
        console.log('Banco de Dados atualizado')
    }).catch((error) => {
        console.error(error)
    })

    
}




function Form(){
    
    ficha.style.display = 'none'
    Formulario.style.display = 'block'
    body.style.background = '#000000 url(../img/Matrix-16.7s-1084px.png) repeat fixed center'

}   
function getInformations() {
    


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
    
    
    
    todosFirst = [nome, jogador, origem, classe, patente, elemento,nex, xp, pm] //0 - 8
    habilidades = [agilidade, vigor, intelecto, presença, força] // 9 - 13
    ponto = [vida, pontosesforço, sanidade] // 14 - 16


    //Salvar valores no escobo global
   
    let j = 0;
    let indexObject = 0
    
    for (const key in PersonagemGlobal){

        if (j <= 5){

            if (todosFirst[indexObject].length == 0 ){
                j+=1
                indexObject++   
            }
            else{
                PersonagemGlobal[key] = todosFirst[indexObject]
                console.log(key + " -> " + PersonagemGlobal[key]);
                j+=1
                indexObject++
            }
        }
        else if ( j > 5 && j < 9){

            if (isNaN(todosFirst[indexObject])){
                j+=1
                indexObject++   
            }
            else{
                PersonagemGlobal[key] = todosFirst[indexObject]
                console.log(key + " -> " + PersonagemGlobal[key]);
                j+=1
                indexObject++
            }
            if(key == 'pm'){
                indexObject = 0
            }
        }
        else if ( j > 8 && j < 14){
            if (isNaN(habilidades[indexObject])){
                j+=1
                indexObject++   
            }
            else{
                PersonagemGlobal[key] = habilidades[indexObject]
                console.log(key + " -> " + PersonagemGlobal[key]);
                j+=1
                indexObject++
            }
            if(key == 'força'){
                indexObject = 0
            }

        }
        else if ( j > 13 && j < 17){
            if (isNaN(ponto[indexObject])){
                j+=1
                indexObject++   
            }
            else{
                PersonagemGlobal[key] = ponto[indexObject]
                console.log(key + " -> " + PersonagemGlobal[key]);
                j+=1
                indexObject++
            }
        }
        else{
            console.debug('debug')
        }
    }

    UpdateDataBase()


    ficha.style.display = 'flex'
    Formulario.style.display = 'none'
    body.style.background = '#000000 url(../img/Ordem_Paranormal_Logo.png) no-repeat fixed center'

    bd.collection('Personagens').doc(Usuario).get().then(function (doc){
        
        if(doc.exists){

           Update()
        }
        else{
            bd.collection('Personagens').doc(Usuario).set(PersonagemGlobal).then(() => {
                console.log('Novo Personagens adicionado 🆕')
            }).catch((error) => {
                console.error(error)
            })
        
        }
          
    })
    

  
}

    
function ChangeHTML(personagemDef, personagemDef2) {
    for (let i = 0; i <= 8; i++) {

        if (i <= 5) {

            if (todosFirst[i].length == 0) {
            }
            else {
                personagemDef[i].innerText = todosFirst[i];
            }
            if (isNaN(habilidades[i])) {
            }
            else {
                personagemDef2[i].innerText = habilidades[i];
            }
        }
        else {
            if (isNaN(todosFirst[i])) {
            }
            else {
                personagemDef[i].innerText = todosFirst[i];
            }
        }
    }
}

function Update(){


    bd.collection('Personagens').doc(Usuario).get().then(function (doc){
        
        if(doc.exists){
                
            const dados = doc.data()
                
            for (const key in PersonagemGlobal){

                PersonagemGlobal[key] = dados[key]
            }

            console.log('PersonagemGlobal Atualizado')

        }
        else{
                console.log('não existe')
        }
              
    })
        


    todosFirst = [PersonagemGlobal.nome, PersonagemGlobal.jogador, PersonagemGlobal.origem, PersonagemGlobal.classe, 
                PersonagemGlobal.patente, PersonagemGlobal.elemento,PersonagemGlobal.nex, PersonagemGlobal.xp, PersonagemGlobal.pm] //0 - 8
    habilidades = [PersonagemGlobal.agilidade, PersonagemGlobal.vigor, PersonagemGlobal.intelecto, PersonagemGlobal.presença, PersonagemGlobal.força] // 9 - 13
    ponto = [PersonagemGlobal.vida, PersonagemGlobal.pontosesforço, PersonagemGlobal.sanidade] // 14 - 16
    
    
    document.getElementById('vidaP').innerText = PersonagemGlobal.vida
    document.getElementById('peP').innerText = PersonagemGlobal.pontosesforço
    document.getElementById('snP').innerText = PersonagemGlobal.sanidade

    
    PersonagemStatusTemp = [PersonagemGlobal.vida, PersonagemGlobal.pontosesforço, PersonagemGlobal.sanidade]
    ChangeHTML(personagemDef, personagemDef2);

    Personagem.nome = PersonagemGlobal.nome
    Personagem.vida = PersonagemGlobal.vida
    Personagem.pe = PersonagemGlobal.pontosesforço
    Personagem.sn = PersonagemGlobal.sanidade   

    return 'Atualizado'
}

function add(id, Persona){

    let itemHtml = document.getElementById(id)
    Persona[0]++
    if (Persona[0] > Personagem.vida) {
        
        Persona[0]--
    }
    itemHtml.innerText = `${PersonagemGlobal.vida}/${Persona[0]}`
    changeProgressBarLife('vidaDano', Persona[0], Personagem.vida)
}
function remove(id, Persona) {
    let itemHtml = document.getElementById(id)
    Persona[0]--
    itemHtml.innerText = `${PersonagemGlobal.vida}/${Persona[0]}`
    changeProgressBarLife('vidaDano',Persona[0], Personagem.vida)
}

function addEsforço(id, Persona){

    let itemHtml = document.getElementById(id)
    Persona[1]++
    if (Persona[1] > Personagem.pe) {
        
        Persona[1]--
    }
    itemHtml.innerText = `${PersonagemGlobal.pontosesforço}/${Persona[1]}`
    changeProgressBarLife('peDano', Persona[1], Personagem.pe)

}
function removeEsforço(id, Persona) {
    let itemHtml = document.getElementById(id)
    Persona[1]--
    itemHtml.innerText = `${PersonagemGlobal.pontosesforço}/${Persona[1]}`
    changeProgressBarLife('peDano', Persona[1], Personagem.pe)
}

function addSanidade(id, Persona){

    let itemHtml = document.getElementById(id)
    Persona[2]++
    if (Persona[2] > Personagem.sn) {
        
        Persona[2]--
    }
    itemHtml.innerText = `${PersonagemGlobal.sanidade}/${Persona[2]}`
    changeProgressBarLife('snDano', Persona[2], Personagem.sn)

}
function removeSanidade(id, Persona) {
    let itemHtml = document.getElementById(id)
    Persona[2]--
    itemHtml.innerText = `${PersonagemGlobal.sanidade}/${Persona[2]}`
    changeProgressBarLife('snDano', Persona[2], Personagem.sn)
}

function changeProgressBarLife(id, vidAtual, vidaTotal) {
    
    let porcentagem = (100 * vidAtual) / vidaTotal
    let teste = document.getElementById(id)
    teste.style.maxWidth = `${porcentagem}%`
}