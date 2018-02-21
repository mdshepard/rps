//User Selection

document.getElementById("rock").onclick = function() {
    let cpuSelection = cpuSelector();
    console.log(cpuSelection);
    console.log("Rock, muhfackaa!");
    let result = compare("rock", cpuSelection);
    let item = document.getElementById("result-message");
    item.textContent = result;
}

document.getElementById("paper").onclick = function() {
    let cpuSelection = cpuSelector();
    console.log(cpuSelection);
    console.log("paper, bitches!");
    let result = compare("paper", cpuSelection);
    console.log(result);
    let item = document.getElementById("result-message");
    console.log(item);
    item.textContent = result;
}

document.getElementById("scissors").onclick = function() {
    let cpuSelection = cpuSelector();
    console.log(cpuSelection);
    console.log("scissors, fool!");
    let result = compare("scissors", cpuSelection);
    let item = document.getElementById("result-message");
    item.textContent = result;
}

//computer selection
function cpuSelector() { 
    let cpuSelection = Math.random();

    if (cpuSelection < 0.34) {
        cpuSelection = "rock";
    }
    else if (cpuSelection <= 0.67) {
        cpuSelection = "paper";
    }
    else {
        cpuSelection = "scissors";
    }
    return cpuSelection;
}

//display computer's selection


//compare player and computer choices

function compare(choice1, choice2) {
    if (choice1 === choice2) {
    return "It's a tie!";
    }
    
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "You win";            
        }
    }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "You win";
        }
    }

    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "You win";
        }
        else {
            return "Fuck you, scissors."
        }
    }
    else {
        return "You lose";
    }

}

