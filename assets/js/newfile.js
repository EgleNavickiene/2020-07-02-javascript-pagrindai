//alert(skaiciavimas);


// 1 uzd.
let vardas = "Eglė";
let pavarde = 'Navickienė';
let gimtadienis = 'žiemą';

document.getElementById("manoGimce").innerHTML = "1. Aš esu " + vardas 
+ " " + pavarde + ", aš gimiau " + gimtadienis + ".";

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
"3. Jei min - 3, max - 12, <br>Funkcija: random skaičius * (max - min + 1) + min <br> Koks tas \"random\" skaičius, jei gaunam " 
+ randomSkaicius(min, max) + "?";

// 4 uzd.
let a ;
let b ;

a = randomSkaicius(0, 4);
b = randomSkaicius(0, 4);

document.getElementById("dalyba").innerHTML = "4. "+b +"/"+a +"=" + Math.floor(b/a);

if (a == 0 ) {    
  document.getElementById("dalyba").innerHTML = "4. "+b +"/"+a +" Dalyba negalima";
}


//5 uzd/?
let x1 = randomSkaicius(0, 25);
let x2 = randomSkaicius(0, 25);
let x3 = randomSkaicius(0, 25);

let masyvasIsTriju = [x1, x2, x3];

let mediana = Math.max( 
  Math.min( x1, x2 ), 
  Math.min( Math.max( x1, x2), x3)
);

document.getElementById("penkta-uzd").innerHTML = '5. Pirmas: '+ 
x1 +', antras: ' + x2 + ' trečias: ' + x3 + '. Mediana:' + mediana;


// 6 uzd.
c = (randomSkaicius(min, max)*10);
document.getElementById("rodyt-random").innerHTML = "6. Random skaicius "+ c ;

// 7 uzd.
const nuoIki1 = randomSkaicius(-10, 10);
const nuoIki2 = randomSkaicius(-10, 10);
const nuoIki3 = randomSkaicius(-10, 10);

let nuoIki1_return = '';
let nuoIki2_return = '';
let nuoIki3_return = '';

    // 1 skaicius:
if(nuoIki1 < 0) {
  nuoIki1_return = '<span style="color:red;">' + nuoIki1 + '</span> ';
}

if(nuoIki1 == 0) {
  nuoIki1_return = '<span style="color:blue;">' + nuoIki1 + '</span> ';
}

if(nuoIki1 > 0) {
  nuoIki1_return = '<span style="color:green;">' + nuoIki1 + '</span> ';
}

    // 2 skaicius:
if(nuoIki2 < 0) {
  nuoIki2_return = '<span style="color:red;">' + nuoIki2 + '</span> ';
}

if(nuoIki2 == 0) {
  nuoIki2_return = '<span style="color:blue;">' + nuoIki2 + '</span> ';
}

if(nuoIki2 > 0) {
  nuoIki2_return = '<span style="color:green;">' + nuoIki2 + '</span> ';
}

    // 3 skaicius:
if(nuoIki3 < 0) {
  nuoIki3_return = '<span style="color:red;">' + nuoIki3 + '</span> ';
}

if(nuoIki3 == 0) {
  nuoIki3_return = '<span style="color:blue;">' + nuoIki3 + '</span> ';
}

if(nuoIki3 > 0) {
  nuoIki3_return = '<span style="color:green;">' + nuoIki3 + '</span> ';
}

document.getElementById('trys-skaiciai1').innerHTML = '<p>7. Trys skaičiai:'
+'<br></br>' +' <strong>' + nuoIki1_return+'<br></br>'  
+ nuoIki2_return+'<br></br>' +nuoIki3_return + '</strong></p>';

// 8 uzd.

const zvakiu_kiekis = randomSkaicius(5, 3000);
let nuolaida = 0;

if(zvakiu_kiekis >= 1000) 
    nuolaida = 3; 

if(zvakiu_kiekis >= 2000) 
    nuolaida = 4; 

let suma = zvakiu_kiekis - ( (zvakiu_kiekis / 100) * nuolaida);

document.getElementById('nuolaida').innerHTML += '<p>Pirkta žvakių: ' + zvakiu_kiekis + ' Suma: <strong>' 
+ suma + ' EUR </strong> (nuolaida - '+nuolaida+'%)'+'</p>';

// 2021 liepos 20 d. --------------------

// 1.
// a)
let text = ''

for (let i = 0; i<400; i++) {
  text += '*';
}

document.getElementById("star").innerHTML = text;

// b)

let text2 = '';
let counter = 0;

for (let i=0; i<400; i++) {
  if(counter == 50){
    text2 += '<br />';
  counter = 0;   
  }
  text2 += '*';
  counter++;  
}

document.getElementById("star2").innerHTML = text2;

// 2.
let numbers = "";
let newNumb = 0;

for (let i=0; i < 300; i++){
  newNumb = randomSkaicius(0, 300);  

  if (newNumb>250){
    numbers += ` <span style="color:red;" >  ${newNumb}  </span> `;
  } else {
    numbers += ` <span>  ${newNumb}  </span> `;
  } 
  
};

document.getElementById("trys-simtai").innerHTML = numbers;

// 3.

let numeriai = '';
let otherNum = 0;

for (let i=0; i < 3001; i++){
if(otherNum%77 == 0)

  numeriai += otherNum+',  ';
  otherNum++;
}


document.getElementById("trys-tukst").innerHTML = numeriai;

// 4.  

let text4 = '';
let counter4 = 0;

for (let i=0; i<1000; i++) {
  if(counter4 == 100){
    text4 += '<br />';
  counter4 = 0; 
  }
  text4 += '*';
  counter4++;

}

document.getElementById("kvadr").innerHTML = text4;
