export const MARCAS =[
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'}
]

const YERMAX = new Date().getFullYear()

export const YEARS = Array.from(new Array(20), (valor, index)=> YERMAX - index)

export const PLANES =[
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Completo'}  
]