// CREAZIONE GRIGLIA
//1. Creazione della griglia (essa verrà generata al click sul bottone)
//1.1 Creare una variabile che si prenda il contenitore della griglia dal DOM
const grigliaElement = document.querySelector('.grid-minefild');
// console.log(grigliaElement);

//1.2 Creare una variabile che si prenda il bottone PLAY dal DOM
const BtnElement = document.querySelector('.btn');
// console.log(BtnElement);

//1.3 Creare un evento click sulla variabile del bottone
BtnElement.addEventListener('click', startGame);


/// FUNZIONI ///

//1.4 Creare una funzione StartGame
function startGame(){
    console.log('Start!!!')
    // resettare la griglia
    resetGame();
    //1.4.1 Creare una variabile con il valore che vogliamo dare al lato della griglia (10)
    let latoGriglia = 10;
    // console.log(latoGriglia);

    //1.4.2 Creare una variabile con il numero di celle che vogliamo avere
    let celle = latoGriglia ** 2;
    // console.log(celle);

    //1.4.3 Creare un ciclo for
    for (let i = 0; i < celle; i++){
       //1.4.3.1 Creiamo una variabile numero con l'indice incrementato di uno 
       let indiceIncrementato = i + 1;
       // console.log(indiceIncrementato);
       //1.4.3.2 Creiamo l'elemento che sarà la cella (createElement)
       const cellaElement = document.createElement('div');
       // console.log(cellaElement);
       cellaElement.style.width = 'calc(100% /' + latoGriglia + ')';
       // console.log(cellaElement);

       cellaElement.innerHTML += indiceIncrementato;
       //1.4.3.3 Stampiamo nel DOM (append)
       grigliaElement.append(cellaElement);


    
     //2. Al click su una cella si deve stampare il numero relativo alla cella cliccata sulla console
        cellaElement.addEventListener('click', function(){
            console.log(indiceIncrementato);

            //BONUS Aggiungere una classe per cambiarle il colore di background
            cellaElement.classList.add('cella');
            // console.log(cellaElement);
        });
    };
}

//1.5 Creare una funzione resetGame

function resetGame(){
    //1.5.1 Azzerare la cella
    //1.5.2 Svuotare la griglia
    grigliaElement.innerHTML = '';
}
