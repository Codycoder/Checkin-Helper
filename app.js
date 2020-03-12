let listOfNames = ["Olivia", "Hetal", "Brian", "Mercy", "Ben", "Noah", "Nick", "Jonathan", "Abdul", "Anna", "Aaron", "Stuart", "Innocent", "Fatuma", "Brandon", "Gaelan", "Al", "Daniel", "Colin", "James", "Nadir", "Daly"];
let button = document.querySelector(".button");
let nameList = document.querySelector(".nameList");
let name = document.querySelector(".name");
let randomNumber = 0;
let randomName = "";

// let randomizeNumber = (randomNumber) => {
//     randomNumber = Math.floor(Math.random() * (listOfNames.length-1));
// }

let randomizeArray = () => {
    listOfNames.sort(() => Math.random() -0.5);
}

let printName = (name, randomName, listOfNames) => {
    randomName = listOfNames[listOfNames.length-1];
    name.innerHTML = 'Next is ' + randomName;
}

let removeName = (listOfNames) => {
    listOfNames.splice(listOfNames.length-1, 1);
}

let showNameList = (listOfNames) => {
    nameList.innerHTML = listOfNames;
}

let runApp = () => {
    showNameList(listOfNames);
    button.addEventListener('click', () => {
        // randomizeNumber(randomNumber);    
        randomizeArray();
        printName(name, randomName, listOfNames);
        removeName(listOfNames);
        showNameList(listOfNames);
    })
} 

runApp();