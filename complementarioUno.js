let nombre, apellido, nota, sueldo, credito, cuota, pagosDe
let sueldos = 0
let interes = 1.40

do{
    nombre = prompt("Ingrese su Nombre: ")
    apellido = prompt("Ingrese su Apellido: ")
    if (!isNaN(nombre)||!isNaN(apellido)){
        alert("Ingrese datos validos")
    }
    for (let i = 0; i < 3; i++){
        let sueldo = parseFloat(prompt("Ingrese sus íltimos sueldos: "))
        sueldos += sueldo
    }
    if(sueldos < 2500){
        alert("Lo sentimos, no califica para el credito")
    } 
}while(!isNaN(nombre)||!isNaN(apellido)||(sueldos < 2500))
do{
    credito = parseInt(prompt("Ingrese el monto que desea solicitar: "))
    if(isNaN(credito)||(sueldos * 3 < credito)){
        alert("Porfavor ingresa un monto valido")
    }
    cuota = parseInt(prompt("Ingrese la cantidad de cuotas"))
    if(cuota > 24){
        alert("Ingrese menos números de cuotas")
    }
}while(isNaN(credito)||(sueldos * 3 < credito)||(cuota > 24))

pagosDe = alert(`Usted debe pagar ${cuota} de : ${(credito / cuota) * interes}`)
