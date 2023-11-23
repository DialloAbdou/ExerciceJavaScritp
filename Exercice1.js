var p1=10;
const p2=6;
const p3 = 12
const moyenne = CalculMoyenne();
console.log(moyenne)

function CalculMoyenne()
{
    p1 = p1+5;
    let somme = p1+p2+p3
    let  resultat = somme/3;
    return resultat;
}