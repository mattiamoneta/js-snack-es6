// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



const inputArray = [1, 32, 65, 44, 23, 66];


function pickFromArray(myArray, a, b){

    const returnArray = myArray.filter((e, index) => {
        if ((index >= a) && (index <= b)){
            return true;
        } else {
            return false;
        }
    });

    return returnArray;
}

console.log(pickFromArray(inputArray, 2, 5));