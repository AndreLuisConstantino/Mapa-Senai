'use strict'

import { getDadosEstado } from "./cidadesAPI.js"

import { getCidadesEstado } from "./cidadesAPI.js"

const mapa = document.querySelector('svg')

const getEstados = (event) => {
    const uf = event.target.id.replace('BR-', '')
    const preencherDados = preencherDadosEstado(uf)

}

const preencherDadosEstado = async (sigla) => {
    //Criando sigla do Estado
    const dadosEstado = await getDadosEstado(sigla)
    const inicioDoCard = document.getElementById('card-inicio')

    const divUf = document.createElement('div')
    divUf.classList.add('card-info__uf')

    const textUf = document.createElement('h1')
    textUf.classList.add('text__uf')
    textUf.textContent = dadosEstado.uf
    //Fim
    //Criando nome, capital e região
    const divInfos = document.createElement('div')
    divInfos.classList.add('card-info__descricao')

    const textNameState = document.createElement('div')
    textNameState.classList.add('text__name-estado')
    textNameState.textContent = dadosEstado.descricao

    const nameCapital = document.getElementById('capital')
    nameCapital.textContent = dadosEstado.capital

    const textNameCapital = document.createElement('div')
    textNameCapital.classList.add('text__capital-estado')
    textNameCapital.textContent = 'Capital: '
    textNameCapital.append(nameCapital)

    const nameRegiao = document.getElementById('regiao')
    nameRegiao.textContent = dadosEstado.regiao

    const textNameRegiao = document.createElement('div')
    textNameRegiao.classList.add('text__regiao-estado')
    textNameRegiao.textContent = 'Região: '
    textNameRegiao.append(nameRegiao)
    //Fim
    //Criando lista de cidades
    const fimDoCard = document.getElementById('card-fim')
    
    const textCidades = document.createElement('h3')
    textCidades.classList.add('text-title__cidades')
    textCidades.textContent = 'Cidades:'

    const cidades = await getCidadesEstado(sigla)
    const listaDeCidades = document.createElement('ul')
    listaDeCidades.classList.add('list__cidades')
    cidades.map((cidade) => {
        const cidadeItem = document.createElement('li')
        cidadeItem.textContent = cidade
        listaDeCidades.append(cidadeItem)
    })

    divUf.append(textUf)
    divInfos.append(textNameState, textNameCapital, textNameRegiao)
    inicioDoCard.replaceChildren(divUf, divInfos)


    fimDoCard.replaceChildren(textCidades, listaDeCidades)
}

mapa.addEventListener('click', getEstados)