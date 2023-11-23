
let multiple = factorielle(5);
console.log(multiple)
function factorielle(nbre )
{
    let resultat=1;
    for(let i =1; i<=nbre; i++)
    {
         resultat*=i;
    }
    return resultat;
}