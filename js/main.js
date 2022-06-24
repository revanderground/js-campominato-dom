// recupero il parent
const gridContainer = document.getElementById('grid-container');

// bottone
const button = document.querySelector('#button')
button.addEventListener('click', function(){
    gridContainer.innerHTML = "";
    const userChoice = document.getElementById('input-difficulty').value;
    let cellsNumber;
    let minNumber=1;
    let maxNumber;
    
    // selezione
    if (userChoice == "level-1"){
        cellsNumber=101;
        maxNumber=cellsNumber-1;

      
    } else if (userChoice == "level-2"){
        cellsNumber=82;
        maxNumber=cellsNumber-1;


    } else if (userChoice == "level-3"){
        cellsNumber=50;
        maxNumber=cellsNumber-1;
        
 
    }

    let currentBlackList=[]

    for (let i=0; 1<16; i++){
        let newUniqueNum= getRandomUniqueNumber(currentBlackList, minNumber, maxNumber);
        currentBlackList.push(newUniqueNum);
        console.log(randomNumber);
    }   

    // ciclo per generare quadratini
    for (let i=1; i < cellsNumber; i++){
           
        const newSquare = createNewSquare();
        gridContainer.append(newSquare);
        const squareSide = `calc(100%/${Math.sqrt(cellsNumber)})`;
        newSquare.style.width=squareSide;
        newSquare.style.height=squareSide;

        // funzione per colorare d'azzuro i quadratini
        newSquare.addEventListener('click', function(){
            newSquare.classList.toggle('azure');
            console.log(`hai cliccato sulla cella ${i}`);
            
        })
    }



})



// funzione per creare i quadratini
function createNewSquare(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}





// funzione per generare numero randomico

function getRandomUniqueNumber(blacklist,min,max){

    let randomNumber;
    let isNumberValid=false;

    while(isNumberValid==false){
        randomNumber= Math.floor(Math.random() * max) + min;;
        if (!blacklist.includes(randomNumber)){
            isInvalid=true;
        }
    }

    return randomNumber;
}








