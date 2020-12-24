function scan(){
    const numStream = [1,0,1,1,0,1,1,1,0,0];
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