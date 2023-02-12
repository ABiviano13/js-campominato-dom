// CREAZIONE GRIGLIA
//Creazione della griglia (essa verrà generata al click sul bottone)
//Creare una variabile che si prenda il contenitore della griglia dal DOM
const grigliaElement = document.querySelector('.grid-minefild');
// console.log(grigliaElement);

//Creare una variabile che si prenda il bottone PLAY dal DOM
const BtnElement = document.querySelector('.btn');
// console.log(BtnElement);

//Creare un evento click sulla variabile del bottone
BtnElement.addEventListener('click', startGame);

const scoreElement = document.getElementById('score');

const difficultyElement = document.getElementById('difficulty');

let currentIndex = 1;


/// FUNZIONI///

//Creare una funzione StartGame
function startGame(){
    console.log('Start!!!')
    // resettare la griglia
    resetGame();

    const valuedifficulty = difficultyElement.value;
    let latoGriglia = 0;
    let griglia = 0;

    if (valuedifficulty === 'cells100') {
        latoGriglia = isLatoGriglia(10);
        griglia = isGeneratorGriglia(isLatoGriglia(10));
	} else if (valuedifficulty === 'cells81') {
		latoGriglia = isLatoGriglia(9);
        griglia = isGeneratorGriglia(isLatoGriglia(9));
	} else if(valuedifficulty === 'cells49'){
        latoGriglia = isLatoGriglia(7);
        griglia = isGeneratorGriglia(isLatoGriglia(7));
    }


    //Creare un ciclo for
    for (let i = 0; i < griglia; i++){
       //1 Creiamo una variabile numero con l'indice incrementato di uno 
       let indiceIncrementato = i + 1;
       //console.log(indiceIncrementato);
       //2 Creiamo l'elemento che sarà la cella (createElement)
       const cellaElement = document.createElement('div');
       // console.log(cellaElement);
       cellaElement.style.width = 'calc(100% /' + latoGriglia + ')';
       // console.log(cellaElement);

       cellaElement.innerHTML += indiceIncrementato;
       //3 Stampiamo nel DOM (append)
       grigliaElement.append(cellaElement);

       cellaElement.addEventListener('click', function(){
            cellaElement.innerHTML = '';

            if(bombeArray.includes(indiceIncrementato)){
                cellaElement.classList.add('cella-bomb');
                // console.log('Hai perso!!')
                scoreElement.innerHTML = 'Hai perso!';
                setTimeout(resetGame, 500);
               
            } else {
                cellaElement.classList.add('cella-true');
                scoreElement.innerHTML = currentIndex ++;
                // console.log(currentIndex)
            }
        })

       cellaElement.addEventListener('click', onClick);
       

    };

    let bombeArray = [];

    do{
        let numeroRandom = Math.floor(Math.random() * (griglia - 1 + 1) ) + 1;

        let trovato = false;

        for(let i = 0; i < bombeArray.length - 1; i++){
            indice = bombeArray[i];

            if(numeroRandom === indice){
               trovato = true;
            }
        }

       if(!trovato){
            bombeArray.push(numeroRandom);
            // console.log(bombeArray);
        }

    } while(bombeArray.length < 16);

    return 'Fine';

}

//Creare una funzione resetGame
function resetGame(){
    //1 Azzerare la cella
    //2 Svuotare la griglia
    grigliaElement.innerHTML = '';
    scoreElement.innerHTML = '';
    currentIndex = 1;
}

//Al click su una cella si deve stampare il numero relativo alla cella cliccata sulla console e togliere l'evento click per non poter far cliccare più di una volta la cella
function onClick(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(this);
    // console.log(event.target === this);
    // const cella = event.target
    const cella = this;
    // console.log(cella.innerHTML);

    cella.removeEventListener('click', onClick)
}

function isLatoGriglia(numeroLatoGriglia){
    const latoGriglia = numeroLatoGriglia;
    // console.log(latoGriglia);
    return latoGriglia;
}

function isGeneratorGriglia(num1){
    const celle = num1 ** 2;
    // console.log(celle);
    return celle;
}