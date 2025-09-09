'use strict'

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()

    return data.message
}


function criarImagem(imagem) {

    const galeria = document.getElementById('container-imagens')

    const dogImage = document.createElement('img')
    dogImage.src = imagem

    galeria.appendChild(dogImage)
}


async function carregarImagens(raca) {
    const imagens = await buscarImagens(raca)

    imagens.forEach(criarImagem)
}

const botao = document.getElementById('buscar')

botao.addEventListener('click', () => {
    const raca = document.getElementById('input').value
    carregarImagens(raca)
})