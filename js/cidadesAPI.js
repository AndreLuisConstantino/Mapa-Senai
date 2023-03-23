'use strict'

export const getDadosEstado = async (sigla) => {
    
    const url = `http://localhost:8080/v1/senai/estado/sigla/${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getCidadesEstado = async (sigla) => {

    const url = `http://localhost:8080/v1/senai/cidades/estado/sigla/${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return data.cidades
}