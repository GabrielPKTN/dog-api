'use strict'

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()

    return data.message
}

function criarImagem(imagem) {

    const galeria = document.getElementById('container-imagens')

    const divDogImage = document.createElement('div')
    const dogImage = document.createElement('img')
    
    dogImage.src = imagem
    
    divDogImage.classList.add('dogImage')

    galeria.appendChild(divDogImage)
    divDogImage.appendChild(dogImage)
}

async function carregarImagens(raca) {
    const imagens = await buscarImagens(raca)

    imagens.forEach(criarImagem)
}

function removeImagens() {

    const elementoPai = document.getElementById('container-imagens')

    if (elementoPai.children) {
        elementoPai.innerHTML = ''
    }

}


const botao = document.getElementById('buscar')

botao.addEventListener('click', () => {

    removeImagens()

    const raca = document.getElementById('input').value
    carregarImagens(raca)
})