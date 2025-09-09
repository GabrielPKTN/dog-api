'use strict'

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()
    
    
}

function carregarImagens(imagens) {
    const galeria = document.getElementById('container-imagens')

    const imagemDog = document.createElement('img')
    
    imagemDog.src = imagens.add(imagens[i])

}

buscarImagens('doberman')