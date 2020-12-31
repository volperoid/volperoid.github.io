function searchArray() {

    let counter = 0,
        i = 1,
        chain = 0,
        query = document.getElementById("query").value,
        chainLength = 0;

    function search(){

        let nodeList = document.getElementsByClassName('arrayElement');
        let numStream = [
            nodeList[1],
            nodeList[2],
            nodeList[3],
            nodeList[4],
            nodeList[5],
            nodeList[6],
            nodeList[7],
            nodeList[8],
            nodeList[9],
            nodeList[10],
            nodeList[11],
            nodeList[12],
            nodeList[13],
            nodeList[14],
            nodeList[15],
            nodeList[16],
            nodeList[17],
            nodeList[18],
            nodeList[19],
            nodeList[20]
            ];

        counter++;

        if (counter <= numStream.length) {

            i++;

            //------------------------------------------------------------------//
            //     * Tells which item within the array is being evaluated *     //
            //------------------------------------------------------------------//

                if (i == 1) {

                    console.log(`Evaluating first number...`);

                } else if (i == 2) {

                    console.log(`Evaluating second number...`)

                } else if (i == 3) {

                    console.log(`Evaluating third number...`)

                } else if (20 >= i > 3 ) {

                    console.log(`Evaluating ${i}th number...`)
                }

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
            search(); // Loop

        } else {

            console.log(`Loop ${counter} (Exit)`)
            document.getElementById("status").innerHTML = `The longest combo is ${longestChain} items long`; //Info

        }
    }

    search();

}

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