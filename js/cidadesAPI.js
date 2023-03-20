'use strict'

export const getDadosEstado = async (sigla) => {
    
    const url = `http://localhost:8080/v2/senai/cidades/sigla/${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}