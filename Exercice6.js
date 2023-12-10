

function GetMoyenne()
{
    const notes =[5,10,15,20];
    let somme = 0;
    let moyenne =0;
     for(let n in notes)
     {
         somme += notes[n];
     }
     moyenne = somme/notes.length;
     return moyenne;


}

function GetMoyenne2()
{
    const notes =[5,10,15,20];
    let somme = 0;
    let moyenne =0;
        for(let note of notes)
        {
            somme+=note
        }
        moyenne = somme/notes.length;
        return moyenne;

}

 console.log(` la moyenne est : ${resultat}`)

 