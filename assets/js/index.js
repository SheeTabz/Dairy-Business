const shedA = document.getElementById('sheda')
const shedB= document.getElementById('shedb')
const shedC = document.getElementById('shedc')
const shedD = document.getElementById('shedd')
const butn = document.getElementsByClassName('total')
const forms = document.getElementById('forms')
const display = document.getElementsByClassName('inner')
const spans = document.getElementById('total')
const ul = document.getElementById('results')
const cumulative =document.getElementsByClassName('cumulative')
const weekly =document.getElementsByClassName('weekly')

const year =document.getElementsByClassName('yearly')


//functions
let total = 0;
const newData=[]
forms.addEventListener('submit', (e) => {
   e.preventDefault(); // preventDefault form from submitting
   
// Objects for the inputs
let inputs = [{name: 'A', litres: shedA.value},
       {name: 'B', litres: shedB.value }, {name: 'C', litres:shedC.value},
       {name: 'D', litres: shedD.value},]
//function that returns the value of the specified in the input field       
const totalInput = function (){  

// looping through the input array and giving the output value
ul.innerHTML=' '
inputs.forEach(data=>{

    const li=document.createElement('li');
    li.innerText=`You production in shed ${data.name} is ${data.litres} litres`
    ul.appendChild(li);
 },);
}
totalInput()

//function that adds the total input 

inputs.forEach(data=>{return newData.push(Number(data.litres))})
console.log(newData);

//Gives the total amount in litres produced per day
const totalProduction=()=>{
    total=newData.reduce((accumulator,currentValue)=>{return accumulator + currentValue},0) // adds the total litres in the array inputs
    console.log(total);
}
const totalLiters = function(){
    const list = document.createElement('li');
    list.innerText = `Your total production is ${total} litres per day`
    ul.appendChild(list);
    const spanEl = document.createElement('span');
    spanEl.innerText = `= ${total} litres per day`
    spans.appendChild(spanEl);
} 

console.log(totalProduction());
totalLiters();

// const week = function(){
//     const label = document.createElement('label');
//     const labelOutput = incomeOverTime(45,7,total)
//     label.innerText = `Weekly income :  ${labelOutput}`
//     weekly.appendChild(label);
// }
//  week()
const monthCalc = [{ month: 'Jan', noOfDays: 31},{month: 'Feb', noOfDays:29}, 
{month: 'Mar', noOfDays:31}, {month: 'Apr', noOfDays:30}, {month: 'May', noOfDays:31},
{month: 'Jun', noOfDays:30}, {month: 'Jul', noOfDays:31}, {month: 'Aug', noOfDays:31}, 
{month: 'Sep', noOfDays:30}, {month: 'Oct', noOfDays:31}, {month: 'Nov', noOfDays:30}, {month: 'Dec', noOfDays:31},]

//Calculates the total sale for each month
const ul2=document.querySelector('#yearly')
monthCalc.forEach(month=>{
    const output=incomeOverTime(45,month.noOfDays,total)
    const li=document.createElement('li')
    li.innerHTML=`Your income for ${month.month} is ${output}`
    ul2.appendChild(li);
})

//Calculates the total sales for a specified time
function incomeOverTime(selling_price,time,litres) {
    const income=time*litres*selling_price;
    console.log(income);
    return income;
}


});
// const monthCalc = [{ month: 'Jan', noOfDays: 31},{month: 'Feb', noOfDays:29}, 
// {month: 'Mar', noOfDays:31}, {month: 'Apr', noOfDays:30}, {month: 'May', noOfDays:31},
// {month: 'Jun', noOfDays:30}, {month: 'Jul', noOfDays:31}, {month: 'Aug', noOfDays:31}, 
// {month: 'Sep', noOfDays:30}, {month: 'Oct', noOfDays:31}, {month: 'Nov', noOfDays:30}, {month: 'Dec', noOfDays:31},]

// //Calculates the total sale for each month
// const ul2=document.querySelector('#yearly')
// monthCalc.forEach(month=>{
//     const output=incomeOverTime(45,month.noOfDays,254)
//     const li=document.createElement('li')
//     li.innerHTML=`Your income for ${month.month} is ${output}`
//     ul2.appendChild(li);
// })

// //Calculates the total sales for a specified time
// function incomeOverTime(selling_price,time,litres,) {
//     const income=time*litres*selling_price;
//     console.log(income);
//     return income;
// }

































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