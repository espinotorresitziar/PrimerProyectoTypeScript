import { leerTeclado } from './util/entradaTeclado'
import { menu } from './util/menu'

const main = async () => {
    let num: number
    do {
        num = await menu()
        switch(num) {
            case 1:
                console.log('\n')
                console.log("¿El número es primo?")
                await primo()
                break
            case 2:
                console.log('\n')
                console.log("¿Qué número es mayor?")
                await mayor()
                break
            case 3: 
                console.log('\n')
                console.log("Tabla de multiplicar")
                await tablas()
                break
            case 4:
                console.log('\n')
                console.log("DNI")
                await dni()
                break
            case 5:
                console.log('\n')
                console.log("Fecha")
                await fecha()
                break
            case 0: 
                console.log('\n')
                console.log("Adiós")
                break
            default: 
                console.log('\n')
                console.log("Opción incorrecta")
                break
        }
    } while (num != 0)
}

const primo = async () => {
    let num: number
    num = parseInt (await leerTeclado("Introduzca un número"))
    if (num%2 == 0) {
        console.log(`El número ${num} no es primo`)
    } else {
        console.log(`El número ${num} es primo`)
    } 
} 

const mayor = async () => {
    let num1, num2, num3: number
    num1 = parseInt (await leerTeclado("Introduzca el primer número"))
    num2 = parseInt (await leerTeclado("Introduzca el segundo número"))
    num3 = parseInt (await leerTeclado("Introduzca el tercer número"))
    let may: number
    may=Math.max(num1,num2,num3)
    console.log(`El número mayor de ${num1}, ${num2} y ${num3} es ${may}`)
}

const tablas = async () => {
    let numero: number
    numero = parseInt (await leerTeclado("¿De qué número quiere la tabla?"))
    let i: number
    let calculo: number
    console.log(`Tabla de multiplicar del ${numero}`)
    for (i=0; i<=10; i++) {
        calculo = i * numero
        console.log(`${i} x ${numero} = ${calculo}`)
    }
} 

const dni = async () => {
    let l = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]
    let dni: number
    let letra: string
    let letracal: string
    dni = parseInt (await leerTeclado("Introduzca los números de su DNI"))
    letra = await leerTeclado("Introduzca la letra: ")
    letracal= l[dni%23]
    
    if (letra == letracal) {
        console.log("Correcto.")
        console.log(`Su DNI es ${dni} con letra ${letracal}`)
    } else {
        console.log("No es correcto.")
        console.log(`Su DNI es ${dni} con letra ${letracal} `)
    }
}

const fecha = async () => {
    let date:Date = new Date()
    console.log(`La fecha de hoy es ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
    console.log(`Y la hora es ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

main();