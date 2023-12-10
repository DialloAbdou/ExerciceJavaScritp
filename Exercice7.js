 function getabPilFace()
{
    let tabPilface = [];
    for(let i=0;i<10; i++)
    {
         let myrandom =Math.random(1);
        tabPilface[i] = Math.round(myrandom);
        //  console.log(` ${i} : ${Math.round(myrandom)}`);
    }
    return tabPilface;
}

function getComptPileFace(tabPilface)
{
    let nbrePile = 0;
    let nbreFace = 0;
    for(let i in tabPilface)
    {
        if(tabPilface[i] ==0)
        {
            nbrePile+=1;
        }else{
            nbreFace+=1;
        }
    }

    const totalPileface = nbreFace+nbrePile;
    const ratioFace = nbreFace*100/totalPileface;

    console.log(`Le nombre de piles est de:${nbrePile}, le nombre de faces est de : ${nbreFace}, le nombre de face représente : ${ratioFace}`)
}

let tabPilface = getabPilFace();
getComptPileFace(tabPilface);