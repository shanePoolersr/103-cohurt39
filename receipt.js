console.log("Script");

var product = "item";
var price = "howMuch";
var qty = "howMany";
var todayDate= new Date();


document.write(`
<p>todayDate: ${new Date}</p>
<p>Name: ${product}</p>
<p>price: ${howMuch}</p>
<p>qty: ${howMany}</p>
`);

let canvas = 30;
let blkFnPen = 3;
let orangePaint = 15;
let gumEraser = 5;
let rulerLarge = 7;
let total =0;

function addCart( price,){
    return total += price;
    }

    function calculateTaxes(total){
        return 1.11 * total;
        }

console.log(total);
const totalToPay= calculateTaxes(total);'
console.log(`The total is : ${totalToPay}`);