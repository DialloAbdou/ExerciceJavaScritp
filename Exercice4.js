
const v1 = {nom: "Paris", lat: 48.8534, long:2.34888};
const v2 = {nom: "Toulouse", lat: 46.6043, long: 1.4437};
const v3 = {nom: "Lyon", lat: 45.75, long: 4.45};

AffichageCoordonnees(v1.nom, v1.lat,v1.long)
AffichageCoordonnees(v2.nom, v2.lat,v2.long)
AffichageCoordonnees(v3.nom, v3.lat,v3.long)

function AffichageCoordonnees(nom, lat, long)
{
    let nom1 = nom.padStart(10,"-");
    let nom2 = nom1.padEnd(10,"-");
    console.log(`${nom2}`)
    console.log(`Latitude : ${lat}`)
    console.log(`Longitude : ${long}`)
}