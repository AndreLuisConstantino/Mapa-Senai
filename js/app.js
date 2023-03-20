'use strict'

import { getDadosEstado } from "./cidadesAPI.js"


const mapa = document.querySelector('svg')

const getEstados = (event) => {
    const uf = event.target.id.replace('BR-','')

    preencherDadosEstado(uf)
}

const preencherDadosEstado = (uf) => {
    const divUf = document.getElementById('div-texto-uf')
    divUf.classList.add('card-info__uf')

    const textUf = document.getElementById('texto-uf')
    textUf.classList.add('text__uf')
    textUf.value = getDadosEstado(uf)

    divUf.append(textUf)
}

mapa.addEventListener('click', getEstados)