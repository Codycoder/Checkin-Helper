let listOfNames = ["Olivia", "Hetal", "Brian"];
let button = document.querySelector(".button");
let nameList = document.querySelector(".nameList");
let name = document.querySelector(".name");
let randomNumber = 0;
let randomName = "";

let randomizeNumber = (randomNumber) => {
    randomNumber = Math.floor(Math.random() * (listOfNames.length));
}

let printName = (name, randomNumber) => {
    randomName = listOfNames[randomNumber];
    name.innerHTML = randomName;
}

let removeName = (randomNumber) => {
    listOfNames.splice(randomNumber, 1);
}

let showNameList = (listOfNames) => {
    nameList.innerHTML = listOfNames;
}

let runApp = () => {
    showNameList(listOfNames);
    button.addEventListener('click', () => {
        randomizeNumber();
        printName(randomNumber, randomName);
        removeName(randomNumber);
        showNameList(listOfNames);
    })
} 

runApp();