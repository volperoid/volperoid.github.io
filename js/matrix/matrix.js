function randomArray() {

    function getRandomIntInclusive(min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

    }

    let nodeList = document.getElementsByClassName("arrayElement");

    for (let i = 0; i < nodeList.length; i++) {

        nodeList[i].value = getRandomIntInclusive(0, 9);

    }
}

function clearArray() {

    let nodeList = document.getElementsByClassName("arrayElement");

    for (let i = 0; i < nodeList.length; i++) {

        nodeList[i].value = "";

    }
}