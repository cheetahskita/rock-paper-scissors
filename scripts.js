function computerPlay(){
    let choice = Math.floor(3*Math.random());
    switch(choice){
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    return choice;
}

let i = 0, j = 0, k = 0, l;

for (l=0; l < 3000000; l++){
    let choice = Math.floor(3*Math.random())
    switch(choice){
        case 0:
            i++;
            break;
        case 1:
            j++
            break;
        case 2:
            k++;
            break;
    }
}

alert(`Rock count: ${i}. Paper count: ${j}. Scissors count: ${k}.`)