/* Exercici 1:

let num = 21
if (num % 3 == 0 && num % 7 == 0){
    console.log("Es multiple de 3 i de 7")
}
else if (num % 3 == 0){
    console.log("Es multiple de 3")
}
else if(num % 7 == 0){
    console.log("Es multiple de 7")
}
else{
    console.log("No es multiple de 3 ni de 7")
}*/

/* Exercici 2:

let x = 45
let y = 9
let condicionx =(x>=10&&x<=50)? "x esta entre 10 i 50" : "x no esta entre 10 i 50"
let condiciony =(y>=10&&y<=50)? "y esta entre 10 i 50" : "y no esta entre 10 i 50"
console.log(condicionx)
console.log(condiciony)*/

/* Exercici 3:

let x = 5.6
if(x<5){
    console.log("suspes")
}
else if(x<6){
    console.log("suficient")
}
else if(x<7){
    console.log("bé")
}
else if(x<9){
    console.log("notable")
}
else{
    console.log("excel·lent")
}*/

//Exercici 4:

let num = 21
let multi = 0
if (num % 3 === 0) multi += 1
if (num % 7 === 0) multi += 2
switch(multi) {
    case 1:
        console.log("Es múltiple de 3")
        break
    case 2:
        console.log("Es múltiple de 7")
        break
    case 3:
        console.log("Es múltiple de 3 i de 7")
        break
    default:
        console.log("No es múltiple de 3 ni de 7")
}