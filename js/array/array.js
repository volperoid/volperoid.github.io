function searchArray(params) {
    let nodeList = document.getElementsByClassName("arrayElement");
    let queryNum = nodeList['0'].value;
    document.getElementById('output').innerHTML = `> Request received for '${queryNum}'`;

    let counter = 0;
    let i = 1;
}
function randomArray() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    let nodeList = document.getElementsByClassName("arrayElement");
    for (let i = 1; i < nodeList.length; i++) {
        nodeList[i].value = getRandomIntInclusive(0, 9);
    }
}
function clearArray() {
    let info = document.getElementById("output")
    info.innerHTML = "";
    let nodeList = document.getElementsByClassName("arrayElement");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].value = "";
    }
}
function hoverInOut(originColor, targetColor, origin, target) {
    document.getElementById(origin).style.borderRightColor = originColor;
    document.getElementById(target[0]).style.borderRightColor = targetColor;
    document.getElementById(target[1]).style.borderRightColor = targetColor;
}

document.getElementById('search').addEventListener('mouseover', () => {hoverInOut('#47d1cd', '#47d1cd40', 'search', ['random', 'clear'])});
document.getElementById('search').addEventListener('mouseout', () => {hoverInOut('#77889940', '#77889940', 'search', ['random', 'clear'])});
document.getElementById('random').addEventListener('mouseover', () => {hoverInOut('#9933ff', '#9933ff40', 'random', ['search', 'clear'])});
document.getElementById('random').addEventListener('mouseout', () => {hoverInOut('#77889940', '#77889940', 'random', ['search', 'clear'])});
document.getElementById('clear').addEventListener('mouseover', () => {hoverInOut('#db143c', '#db143c40', 'clear', ['search', 'random'])});
document.getElementById('clear').addEventListener('mouseout', () => {hoverInOut('#77889940', '#77889940', 'clear', ['search', 'random'])});



/**
 * function scan(){

    let i = -1,
        query = document.getElementById("userInput").value,
        counter = 0;
        chain = 0,
        chainLength = 0;
        console.log(`Initiate Loop...`);
    function findChain(){
        counter++;
        console.log(`Loop ${counter}`)
        if (counter <= numStream.length) {
            i++;
//------------------------------------------------------------------//
//     * Tells which item within the array is being evaluated *     //
//------------------------------------------------------------------//
            if (i == 0) {                                           //
                console.log(`Evaluating first number...`);          //
            } else if (i == 1) {                                    //
                console.log(`Evaluating second number...`)          //
            } else if (i == 2) {                                    //
                console.log(`Evaluating third number...`)           //
            }else if (20 >= i > 2 ) {                               //
                console.log(`Evaluating ${i}th number...`)          //
            }                                                       //
//------------------------------------------------------------------//
            if (numStream[i] == query) {
                chainLength++;
                console.log(`${chainLength} (+1)`);
            } else {
                if (chainLength > chain) {
                    console.log(`Previous chain was ${chain}`);
                    chain = chainLength;
                    console.log(`New chain is ${chain}`);
                }
                chainLength = 0;
                console.log(`Chain reset to ${chain}`);
            }
            console.log(`End Loop ${counter}`);
            findChain(); // Loop
        } else {
            console.log(`Loop ${counter} (Exit)`)
            document.getElementById("status").innerHTML = `The longest combo is ${longestChain} items long`; //Info
        }
    }
    findChain();
}
*/