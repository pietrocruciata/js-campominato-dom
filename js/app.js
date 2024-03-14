//COLLEGARE IL BOTTONE PER FORMARE LA GRIGLIA
const createGrid = document.querySelector('.button');
//COLLEGARE LA SELECT
const inputElementDom = document.querySelector('.input')

//CREARE L'EVENTO SU QUEL BOTTONE
createGrid.addEventListener('click', function () {
    //CREARE LA GRIGLIA
    //CREARE LE CELLE
    const gridElement = document.querySelector('.grid');
    gridElement.classList.remove('cursore-none');

    gridElement.innerHTML = ''
    let size;

    const min = 1;
    let max;

    //PER OGNI DIFFICOLà GESTIRE LE CELLE PRESENTI IN MANIERA ORDINATA
    if (inputElementDom.value === 'easy') {
        size = 10;
        max = 100
        gridElement.classList.add('easy')
    } else if (inputElementDom.value === 'medium') {
        size = 9;
        max = 81
        gridElement.classList.add('medium')
    } else {
        size = 7;
        max = 49
        gridElement.classList.add('hard')
    }
    const randomNumbers = 16;

    const arrayBombs = [];

    while (arrayBombs.length < randomNumbers) {
        //GENERARE 16 NUMERI CASUALI UNICI
        const bombRandomNumbers = parseInt(Math.floor(Math.random() * max) + min)

        if (arrayBombs.includes(bombRandomNumbers) === false) {
            arrayBombs.push(bombRandomNumbers);
        }

    }
    console.log(arrayBombs);

    const numberOfCelles = size * size;



    //LEGGERE LE CELLE SINGOLARMENTE 
    for (let i = 0; i < numberOfCelles; i++) {
        const num = i + 1;

        // AGGIUNGERE LE CELLE AL DOM
        const cellElement = document.createElement('div')
        cellElement.className = 'cell'
        cellElement.innerHTML = num
        gridElement.append(cellElement)

        //CREARE UN COUNTER DI CLICK SULLE CELLE NON BOMBE
        let score = document.querySelector('.score')
        score.innerHTML = 0


        // AD OGNI CLICK LO SFONDO DEVE ESSERE AZZURRO
        cellElement.addEventListener('click', function () {
            cellElement.classList.add('bg-lightblue')
            score.innerHTML++
            
            for (let i = 0; i < arrayBombs.length; i++) {
                const bombcell = arrayBombs[i]

                if (parseInt(cellElement.innerHTML) === bombcell) {
                    //COLORARE DI ROSSO LE CELLE CLICCATE DOVE PRESENTE LA BOMBA

                    cellElement.classList.remove('bg-lightblue')
                    cellElement.classList.add('bg-red')
                    gridElement.classList.add('cursore-none')
                    score.innerHTML--
                }
            }


        })

    }

})














