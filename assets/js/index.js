const shedA = document.getElementById('sheda')
const shedB= document.getElementById('shedb')
const shedC = document.getElementById('shedc')
const shedD = document.getElementById('shedd')
const butn = document.getElementsByClassName('total')
const forms = document.getElementById('forms')
const display = document.getElementsByClassName('inner')
const ul = document.getElementById('results')

//functions

forms.addEventListener('submit', (e) => {
   e.preventDefault(); // preventDefault form from submitting
   
// Objects for the inputs
let inputs = [{name: 'A', litres: shedA.value},
       {name: 'B', litres: shedB.value }, {name: 'C', litres:shedC.value},
       {name: 'D', litres: shedD.value},]
//function that returns the value of the specified in the input field       
const totalInput = function (){   
// looping through the input array and giving the output value
inputs.forEach(data=>{ 
    const li=document.createElement('li');
    li.innerText=`You production in ${data.name} is ${data.litres} litres`
    ul.appendChild(li);

 });
}
totalInput()
});

































// const monitor = [{ name: "A", litre: 510 },
// { name: "B", litre: 308 },
// { name: "C", litre: 486 },
// { name: "D", litre: 572 },
// ];
// const shades=
//     {
//         shade1:shedA,
//         shade2:shedB,
//         shade3:shedC,
//         shade4:shedD,
//     }


// const totalProduction = function () {
// //     for (let monitoring of monitor) {
// //     return `Your production in ${monitoring.name} is ${monitoring.litre} litres per day.`
// // }  
// for (const item in shades) {
//     return `Your production in ${item} is ${item}`
// }

// }