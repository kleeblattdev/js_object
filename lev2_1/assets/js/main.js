let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let metalNames = [];
let metalPreis = [];
let metalChange = [];

edelMetallPreise.forEach((key,index) =>{
    metalNames.push(edelMetallPreise[index].name);
    metalPreis.push(edelMetallPreise[index].preiseGramEuro);
    metalChange.push(edelMetallPreise[index].veraenderung);
})

console.log(metalNames,metalPreis,metalChange);

const names = edelMetallPreise.map( (element,index) => {
return edelMetallPreise[index].name;}
)
console.log(names);

const preiseGramEuro = edelMetallPreise.map( (element,index) => {
    return edelMetallPreise[index].preiseGramEuro;}
)
console.log(preiseGramEuro);

const veraenderung = edelMetallPreise.map( (element,index)=>{
return edelMetallPreise[index].veraenderung;}
)

const filtered = preiseGramEuro.filter(preis => preis >50);

console.log(filtered);

document.querySelector("tbody").innerHTML= edelMetallPreise.map((element) => `<tr><td>${element.name}</td><td>${element.preiseGramEuro}</td><td>${element.veraenderung}</td>`).join(" ");