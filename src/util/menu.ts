import { leerTeclado } from '../util/entradaTeclado'

export let menu = async () => {
    let num: number
    console.log('\n')
    console.log('1.- Números primos')
    console.log('2.- Número mayor')
    console.log('3.- Tabla de multiplicar')
    console.log('4.- DNI')
    console.log('5.- Fecha y hora actual')
    console.log('0.- Salir')
    console.log('\n')
    num = parseInt( await leerTeclado('Elija una opción: ') )
    return num
}