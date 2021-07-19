//alert(skaiciavimas);


// 1 uzd.
let vardas = "Eglė";
let pavarde = 'Navickienė';
let gimtadienis = 'žiemą';

document.getElementById("manoGimce").innerHTML = "1. Aš esu " + vardas + " " + pavarde + ", aš gimiau " + gimtadienis + ".";

// 2 uzd.
var x = 3.6;
document.getElementById("suapvalinimas").innerHTML = "2.(round) 3,5 ~ " + Math.round(3.5); 
document.getElementById("suapval-aukstyn").innerHTML = "(ceil) 4,2 ~ " + Math.ceil(4.2); 
document.getElementById("suapval-zemyn").innerHTML = "(floor) 2,6 ~ " + Math.floor(2.6); 

// 3 uzd.
let min = 3;
let max = 12;

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

document.getElementById("random-sk").innerHTML = 
"3. Jei min - 3, max - 12, <br>Funkcija: random skaičius * (max - min + 1) + min <br> Koks tas \"random\" skaičius, jei gaunam " + randomSkaicius(min, max) + "?";

let a ;
let b ;

// 4 uzd.
a = randomSkaicius(0, 4);
b = randomSkaicius(0, 4);

if (a>0 ) {
  document.getElementById("dalyba").innerHTML = "4. "+b +"/"+a +"=" + Math.floor(b/a);
} else {   
  document.getElementById("dalyba-negalima").innerHTML = "4. "+b +"/"+a +" Dalyba negalima";
}


//5 uzd/?
let x1 = randomSkaicius(0, 25);
let x2 = randomSkaicius(0, 25);
let x3 = randomSkaicius(0, 25);


// 6 uzd.
c = (randomSkaicius(min, max)*10);
document.getElementById("rodyt-random").innerHTML = "6. Random skaicius "+ c ;

// 7 uzd.
let neig = (randomSkaicius(-10, -1));
let teig = (randomSkaicius(0, 10));
let nuoIki1 = (randomSkaicius(neig, teig));
let nuoIki2 = (randomSkaicius(neig, teig));
let nuoIki3 = (randomSkaicius(neig, teig))

myArr = [nuoIki1, nuoIki2, nuoIki3];


document.getElementById("trys-skaiciai").innerHTML = "7. "+ myArr;

