function ikrepseli() {

    var kiekis = document.getElementById('kiekis').value;
    var zodis  = 'prekes';

    if(kiekis%10 == 1) {
        zodis  = 'prekę';
    }

    if( (kiekis > 10 && kiekis < 20) || kiekis%10 == 0) {
        zodis = 'prekių';
    } 

    var zinute = 'Jūs sėkmingai pridėjote ' + kiekis + ' ' + zodis + '  į savo krepšelį!';

    if(kiekis > 100) {
         zinute = 'Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.';
         //classList.add('error');//
    }

    if(kiekis < 1) {
         zinute = 'Pasirinktas per mažas kiekis.';
         //classList.add('error');//
    }

    document.getElementById('messages_order').innerHTML = ''+ zinute;
    
};
// -----------------------------------------------

document.getElementById('reset').addEventListener("click", atnaujinti);

function atnaujinti() {

    location.reload();

}
// -----------------------------------------------
function LengthConverter(valNum) {
    document.getElementById("outputKm").innerHTML=valNum*1.609344;
  }

//----------------------------------------------

function zodziuTikrinimas(phrase, ilgis) {
  
    let frazes_masyvas = phrase.split(' ');
    
    let zodziuCounteris = 0;  
  
    for(let i=0; i < frazes_masyvas.length; i++) {
  
      tarpAts += '<p>' +frazes_masyvas[i].length + ' ' + frazes_masyvas[i] + '</p>';
  
        if(frazes_masyvas[i].length <= ilgis)            
          zodziuCounteris++;
      }
        return zodziuCounteris;
  }
  //-----------------------------------------

  function masyvoSkaiciavimas(reiksme, indeksas) {
    //console.log('Indeksas: ' + indeksas + ' Reiksme: ' + reiksme);  //--------------
   }









//----------HEADING-o funkcija
function headingas(uzduotis, tema = false, tevinis = '.appended-text2') {

    let child = document.querySelector(tevinis);
    
    if(tema) {
        
        let klase = tema.replace(' ', '').toLowerCase();
        
        document.querySelector(tevinis).innerHTML += '<div class="' + klase + '"></div>'; 
        //Kaip ir ankstesneje uzduotyje sukurtas parent elementas uzduociai ir headingai kiekvienai is ju
       
        child = document.querySelector('.' + klase);
        
        child.innerHTML += '<h1>' + tema + '</h1>';
        

    } 

    child.innerHTML += '<h3>' + uzduotis + '</h3>';

    return '.' + child.className;

}

// RANDOM RAIDĖS funkcija  randomString  -------------------------

function randomString(length) {

    let randomraides = '';
    let raides = 'abcdefghijklmnopqrstuvwxyz';

    for ( let i = 0; i < length; i++ ) {

        randomraides += raides.charAt( Math.floor( Math.random() * raides.length) );

    }

    return randomraides;

}

//-------------randomSkaicius
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

//-----------regenerateRandomNumber
  function regenerateRandomNumber(masyvas = [], x, y) {

    for (let i=0; i<=masyvas.length; i++) {
      let skaicius = randomSkaicius(x, y);
  
      if(masyvas.includes(skaicius));
      return skaicius;
    }
  }

// kas antras indeksas masyve (užduotis: Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą ) ------------------
// let evenMas = [];
// let sum = 0;

// for(var i = 2; i < naujasMas.length; i += 2) {  // take every second element
//                                         //// --- tinka ir nelyginiams, tik var i = 1 (o ne 2)
//   evenMas.push(naujasMas[i]);
//   sum += naujasMas[i];  
// }
// document.querySelector('.appended-text2').innerHTML += '<p>'+'c) Lyginius indeksus turintys elementai: '+ evenMas + '<br> Jų suma:' + sum + '</p>';
//console.log(sum);   

// let OBJEKTAS_2 = {};

// for ( let i = 0; i < 15; i++ ) {

//     let randomraides = randomString(5); // čia naudojam RANDOM RAIDĖS funkciją
//     let randomskaicius = randomSkaicius(55, 5555);

//     OBJEKTAS_2[randomraides] = randomskaicius;
// }

//console.log(OBJEKTAS_2);
//---------------------------------- RANDOM RAIDES string funkcijo pabaiga


function switchFunkcija(get) {

    let grazinimas = '';
    
    switch(get) {

        case 'pirmas': 
            grazinimas = 'Rezultatas yra pirmas';
        break;

        case 'antras': 
            grazinimas = 'Rezultatas yra antras';
        break;

        case 'trecias': 
            grazinimas = 'Rezultatas yra trecias';
        break;

        default:
            grazinimas = 'Parametras nepaduotas';
 
    }
    return grazinimas;
}

console.log(switchFunkcija(''));

//-----------------------------------------------------------


