// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadreCalcio = [
    {
        nome : 'Inter',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Milan',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Juve',
        punti : 0,
        falli : 0
    },
];


const destrArray = [];


squadreCalcio.forEach((e, index) => {
    //Assegno nuovi valori random ai punti e ai falli
    e.punti = randomNumber();
    e.falli = randomNumber();

    // Destrutturazione
    const {punti, falli} = e;

    // Assegnazione dei valori al nuovo array
    destrArray[index] = {
        punti,
        falli
    }

});

console.log(destrArray);


function randomNumber(){
    let result = Math.floor(Math.random() * 50) + 1;
    return result;
}