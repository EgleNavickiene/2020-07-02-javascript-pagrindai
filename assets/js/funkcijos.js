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
// ----------------------------------------------






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

