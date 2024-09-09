//
// UTILITY
//
function generateBombs(bombNumbers, max, min) {
    const arrayBombs = [];

    while (arrayBombs.length < bombNumbers) {
        //GENERARE 16 NUMERI CASUALI UNICI
        const bombRandomNumbers = parseInt(Math.floor(Math.random() * max) + min)

        if (arrayBombs.includes(bombRandomNumbers) === false) {
            arrayBombs.push(bombRandomNumbers);
        }

    }
    console.log(arrayBombs);
    return arrayBombs;
}

//
// MAIN
//

//COLLEGARE IL BOTTONE PER FORMARE LA GRIGLIA
const createGrid = document.querySelector('.button');
//COLLEGARE LA SELECT
const inputElementDom = document.querySelector('.input');

//CREARE L'EVENTO SU QUEL BOTTONE
createGrid.addEventListener('click', function () {
    //CREARE LA GRIGLIA
    //CREARE LE CELLE
    const gridElement = document.querySelector('.grid');
    gridElement.classList.remove('cursore-none');

    gridElement.innerHTML = '';
    let size;

    const minNum = 1;
    let maxNum;

    //PER OGNI DIFFICOLà GESTIRE LE CELLE PRESENTI IN MANIERA ORDINATA
    if (inputElementDom.value === 'easy') {
        size = 10;
        maxNum = 100
        gridElement.classList.add('easy');
    } else if (inputElementDom.value === 'medium') {
        size = 9;
        maxNum = 81
        gridElement.classList.add('medium');
    } else {
        size = 7;
        maxNum = 49
        gridElement.classList.add('hard');
    }
    const randomNumbers = 16;

    const arrayBombs = generateBombs(randomNumbers, maxNum, minNum);

    const numberOfCelles = size * size;



    //LEGGERE LE CELLE SINGOLARMENTE 
    for (let i = 0; i < numberOfCelles; i++) {
        const num = i + 1;

        // AGGIUNGERE LE CELLE AL DOM
        const cellElement = document.createElement('div')
        cellElement.className = 'cell';
        cellElement.innerHTML = num;

        if (arrayBombs.includes(num) === true) {
            console.log(num + ' è una bomba');
        }

        gridElement.append(cellElement);


        //CREARE UN COUNTER DI CLICK SULLE CELLE NON BOMBE
        let score = document.querySelector('.score')
        score.innerHTML = 0;


        // AD OGNI CLICK LO SFONDO DEVE ESSERE AZZURRO
        cellElement.addEventListener('click', function () {
            cellElement.classList.add('bg-lightblue')
            score.innerHTML++;

            for (let i = 0; i < arrayBombs.length; i++) {
                const bombcell = arrayBombs[i];

                if (num === bombcell) { // Se il numero che ho cliccato è una bomba

                    //COLORARE DI ROSSO TUTTE LE CELLE CLICCATE DOVE PRESENTE LA BOMBA
                    for (let i = 0; i < arrayBombs.length; i++) {

                        cellElement.classList.remove('bg-lightblue');
                        cellElement.classList.add('bg-red');
                    }

                    gridElement.classList.add('cursore-none');
                    score.innerHTML--;
                }
            }


        })

    }

})














