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

/*Exercici 4:

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
}*/

/* Exercici 5:

let x = 15
let suma = 0
let n = 0
while (suma + (n + 1) <= x) {
    n++
    suma += n
}
console.log("n = ", n)*/

/* Exercici 6:

let x = "g1fgf8f2gf9o9f"
let suma = 0
for(let i  = 0; i<x.length; i++){
    let chr = x[i]
    if (chr >= "0" && chr <= "9") {
        suma += Number(chr);
    }
}
console.log(suma)*/

/* Exercici 7:

let n1 = 783
let n2 = 479
let n3 = 639
let llista = [n1, n2, n3]
llista.sort((a,b) => b - a)
console.log(llista)*/

/* Exercici 8:

let x = 30
for (let i = 0; i <= x; i++) {
    if (i % 2 == 0) {
        console.log(i + " es parell")
    }
    else {
        console.log(i + " es senar")
    }
}*/

/* Exercici 9:

let files = 5
for (let i = 1; i <= files; i++) {
    console.log("* ".repeat(i));
}*/

/* Exercici 10:

let num = 0
let suma = 0
do {
    if (num % 3 === 0 || num % 5 === 0) suma += num
    num++
} while (num <= 1000)
console.log("Tot sumat son: ", suma)*/

/* Exercici 11:

let files = 5
for (let i = 1; i <= files; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log("* ".repeat(i))
}*/

// Exercici 12:

let x = 123456
let s = x.toString()
s = s.slice(1, -1)
console.log(s)