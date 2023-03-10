// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const ListaBiciDaCorsa = [
    {
        nome : "bici1",
        peso : 8
    },
    {
        nome : "bici2",
        peso : 4
    },
    {
        nome : "bici3",
        peso : 5
    },
    {
        nome : "bici4",
        peso : 3
    },
    {
        nome : "bici5",
        peso : 6
    },
];



let soloPesi = [];

ListaBiciDaCorsa.forEach((e) => {
    soloPesi.push(e.peso);
});


const biciPiuLeggera = ListaBiciDaCorsa.filter((e) => e.peso == Math.max(...soloPesi));

const {nome, peso} = biciPiuLeggera[0];

console.log(`La bici più leggera è la ${nome} con il peso di ${peso} kg`);

