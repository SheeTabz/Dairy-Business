const shedA = document.getElementById('sheda')
const shedB= document.getElementById('shedb')
const shedC = document.getElementById('shedc')
const shedD = document.getElementById('shedd')



const monitor = [{ name: "A", litre: 510 },
{ name: "B", litre: 308 },
{ name: "C", litre: 486 },
{ name: "D", litre: 572 },
];

const totalProduction = function () {
    for (let monitoring of monitor) {
    return `Your production in ${monitoring.name} is ${monitoring.litre} litres per day.`
}  
}