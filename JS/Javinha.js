
// const Notas = [8, 7, 3, 5, 10, 6];

// let SomaNotas = 0;  // precisa declarar e iniciar

// for (let i = 0; i < Notas.length; i++) {
//     SomaNotas = SomaNotas + Notas[i];
// }

// let MediaTotal = SomaNotas / Notas.length;

// console.log(MediaTotal);


const items = [
    {Nome: "Arroz", Preco: 10.00},
    {Nome: "Feijão", Preco: 12.00},
    {Nome: "Macarrão", Preco: 8.00},
    {Nome: "Suco", Preco: 7.00},
    {Nome: "Pão", Preco: 2.00},
]

const ItensFiltroMenorQue10 = items.filter((items) => {return items.Preco <= 10})
const NomesMenos10 = ItensFiltroMenorQue10.map((items) => { return items.Nome})
const OrdemCrescente = items.sort((a,b) => a.Preco - b.Preco)
const Promocao = items.map((items) => {
    return items.Preco * 0.20
});


console.log(Disponivel);